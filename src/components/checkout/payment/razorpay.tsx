import { RazorpayOrderInput } from "@/types";
import { useCallback, useState } from "react";
import { useCart } from '@/store/quick-cart/cart.context';
import usePrice from '@/lib/use-price';
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { useTranslation } from 'next-i18next';
import { uuid } from 'uuidv4';
import Button from '@/components/ui/button';
import { checkoutAtom, discountAtom, walletAtom ,verifiedTokenAtom} from '@/store/checkout';
import client from '../../../framework/rest/client';
import { useAtom } from 'jotai';
import {toast} from "react-toastify";


const RazorpayForm: React.FC = () => {
    const { items, total, isEmpty } = useCart();
    const { price: subtotal } = usePrice(
      items && {
        amount: total,
      }
    );
   
    const [_, setVerifiedToken] = useAtom(verifiedTokenAtom);
    const [disabled,setDisabled]= useState(false);
    const [showText,setShowText]= useState('Pay>>');
    const { t } = useTranslation('common');
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
    

    const unique_id = uuid();
    

    const payableAmt=parseInt((parseFloat(total.toFixed(2))*100)+"")+"";

    const input: RazorpayOrderInput =
    {
        amount: payableAmt,
        currency: "INR",
        receipt: ("recipte#"+unique_id).slice(0,38)


    }
    const Razorpay = useRazorpay();


    const handlePayment = useCallback(async () => {
        const order = await client.paymentgateway.createorder(input);
        console.log(order);
        console.log(JSON.stringify(items) +" total:"+total);

        const { amount, id: order_id, currency } = order;

        const options: RazorpayOptions = {
            key: "rzp_test_r2dAxBrb56JLsv",
            amount: amount.toString(),
            currency: currency?currency:"INR",
            name: "Perineeta shopee",
            description: "shopping: "+amount+ " amount of proucts",
            image: "/payment/parineeta_logo-main.png",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                };
        
                const result =await client.paymentgateway.createpaymentinfo(data);
                if (response.razorpay_payment_id) {
                    setVerifiedToken(response.razorpay_payment_id);
                    toast.success(t('payment-confirmed'), {
                      className: '-mt-10 xs:mt-0',
                    });
                    setShowText("Paid");
                    setDisabled(true);

                  }
                console.log(data)
              },
            prefill: {
                name: billing_address?.title,
                email: "youremail@example.com",
                contact: customer_contact,
            },
            notes: {
                address: (
                    billing_address?.address.street_address+","
                    +billing_address?.address.city+","
                    +billing_address?.address.state+","
                    +billing_address?.address.country+","
                    +billing_address?.address.zip)
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    return (
         
        <Button
        onClick={handlePayment} 
        disabled={disabled}
        className="mt-5 ltr:ml-auto rtl:mr-auto w-full"
      >
        {showText}
      </Button>
         
         
    );
}

const RazorPayment: React.FC = () => {
    return (

        <RazorpayForm />

    );
};

export default RazorPayment;