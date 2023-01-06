import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import { useCreateOrder, useOrderStatuses } from '@/framework/order';
import ValidationError from '@/components/ui/validation-error';
import Button from '@/components/ui/button';
import { formatOrderedProduct } from '@/lib/format-ordered-product';
import { useCart } from '@/store/quick-cart/cart.context';
import { checkoutAtom, discountAtom, walletAtom ,verifiedTokenAtom} from '@/store/checkout';
import {renderOrderEmail} from "./render-email"

import {
  calculatePaidTotal,
  calculateTotal,
} from '@/store/quick-cart/cart.utils';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { currentDatetime } from '@/lib/current-datetime';
import { useUser } from '@/framework/user';
import axios from 'axios';
import { useSendNotification } from '@/framework/report';
import { renderSignupWelcomeEmail } from '../templates/render-email';
  


export const PlaceOrderAction: React.FC<{ className?: string }> = (props) => {
  const { t } = useTranslation('common');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { createOrder, isLoading } = useCreateOrder();
  const { sendNotification } =useSendNotification()
  const { locale } : any = useRouter();
  const { items } = useCart();
  const { me } = useUser();
  

  const { orderStatuses } = useOrderStatuses({
    limit: 1,
    language: locale
  });

  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      coupon,
      verified_response,
      customer_contact,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [discount] = useAtom(discountAtom);
  const [use_wallet_points] = useAtom(walletAtom);

  useEffect(() => {
    setErrorMessage(null);
  }, [payment_gateway]);

  const available_items = items?.filter(
    (item) => !verified_response?.unavailable_products?.includes(item.id)
  );

  const subtotal = calculateTotal(available_items);
  const total = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: verified_response?.total_tax!,
      shipping_charge: verified_response?.shipping_charge!,
    },
    Number(discount)
  );
  const handlePlaceOrder = async() => {
    if (!customer_contact) {
      setErrorMessage('Contact Number Is Required');
      return;
    }
    if (!use_wallet_points && !payment_gateway) {
      setErrorMessage('Gateway Is Required');
      return;
    }
    if (!use_wallet_points && payment_gateway === 'RAZORPAY' && !token) {
      setErrorMessage('Please Pay First');
      return;
    }
    let input = {
      //@ts-ignore
      tracking_number:token,
      products: available_items?.map((item) => formatOrderedProduct(item)),
      status: orderStatuses[0],
      amount: subtotal,
      coupon_id: Number(coupon?.id),
      discount: discount ?? 0,
      paid_total: total,
      sales_tax: verified_response?.total_tax,
      delivery_fee: verified_response?.shipping_charge,
      total,
      delivery_time: delivery_time?.title,
      customer_contact,
      payment_gateway,
      use_wallet_points,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      }, 
      token :token,
      created_at: new Date(),
      updated_at: new Date(),
      customer_id :me?.profile?.id

    };
     
    if (!use_wallet_points && payment_gateway === 'RAZORPAY' && !token) {
      setErrorMessage('Please Pay First');
      return;
    }
    if (payment_gateway === 'RAZORPAY') {
      //@ts-ignore
      input.token = token;
     
    }

    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    //@ts-ignore
    
    createOrder(input);
    
    const htmlContent = renderSignupWelcomeEmail({
      subject: "Your ParineetaShopee.com Order:#"+token,
      userName: `${me?.name}`,
      confirmationUrl: "http://localhost:3000/orders/"+`${token}`,
      orderNumber:`${token}`
  });
   // const emailBody=renderOrderEmail(input);

    let sendEmailReq = {
      to:me?.email,
      from:"sandip@tissatech.com",
      subject: "Your ParineetaShopee.com Order:#"+token,
      body: htmlContent
    }
    console.log("sendEmailReq===>",htmlContent);

    
    sendNotification(sendEmailReq);
   
    
 
     
    //const retuntdata=EmailService.sendEmail("sandip.chaudhari22@gmail.com",(me?.email+""),"Order Created:"+token, <OrderEmail tracking_number={token+""} />)

    //console.log("input: ==>"+JSON.stringify(input),retuntdata)
  };
  const isDigitalCheckout = available_items.find((item) =>
    Boolean(item.is_digital)
  );

  const formatRequiredFields = isDigitalCheckout
    ? [customer_contact, payment_gateway, available_items]
    : [
        customer_contact,
        payment_gateway,
        billing_address,
        shipping_address,
        delivery_time,
        available_items,
      ];
  const isAllRequiredFieldSelected = formatRequiredFields.every(
    (item) => !isEmpty(item)
  );
  return (
    <>

      <Button
        loading={isLoading}
        className={classNames('mt-5 w-full', props.className)}
        onClick={handlePlaceOrder}
        
        disabled={!isAllRequiredFieldSelected && isLoading}
        {...props}
      />
      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
      {!isAllRequiredFieldSelected && (
        <div className="mt-3">
          <ValidationError message={t('text-place-order-helper-text')} />
        </div>
      )}
    </>
  );
};
