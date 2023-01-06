import { useModalAction } from '@/components/ui/modal/modal.context';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import { AddressType } from '@/framework/utils/constants';
import Card from '@/components/ui/cards/card';
interface AddressesProps {
  addresses: any[] | undefined;
  billing_address: any;
  shipping_address: any;
  label: string;
  className?: string;
  userId: string;
}

export const ProfileAddressGrid: React.FC<AddressesProps> = ({
  addresses,
  billing_address,
  shipping_address,
  label,
  className,
  userId,
}) => {
  const { openModal } = useModalAction();
  const { t } = useTranslation('common');

  //TODO: no address found
  function onAddBilling() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      type: AddressType.Billing,
      billing_address

    });
  }
  function onAddShipping() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      type: AddressType.Shipping,
      shipping_address
    });
  }
  return (
    <div className={className}>
      <Card className="w-full">
      <AddressHeader onAdd={onAddBilling} count={true} label={t('text-billing-address')} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
   
        {Boolean(billing_address?.id) &&(
          <AddressCard
            checked={true}
            address={billing_address}
            userId={userId}
            key={billing_address?.id}
          />
        )}
        {!Boolean(billing_address?.id) && (
          <span className="relative px-5 py-6 text-base text-left bg-gray-100 border rounded border-border-200">
            {t('text-no-address')}
          </span>
        )}
      </div>
      </Card>
      <Card className="w-full">
      <AddressHeader onAdd={onAddShipping} count={true} label={t('text-shipping-address')} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        
        {Boolean(shipping_address?.id) &&(
          <AddressCard
            checked={true}
            address={shipping_address}
            userId={userId}
            key={shipping_address?.id}
          />
        )}
        {!Boolean(shipping_address?.id) && (
          <span className="relative px-5 py-6 text-base text-left bg-gray-100 border rounded border-border-200">
            {t('text-no-address')}
          </span>
        )}
      </div>
      </Card>
    </div>
  );
};
export default ProfileAddressGrid;
