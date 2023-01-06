import ProfileAddressGrid from '@/components/profile/profile-address';
import { billingAddressAtom, shippingAddressAtom } from '@/store/checkout';
import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import ProfileForm from '@/components/profile/profile-form';
import ProfileContact from '@/components/profile/profile-contact';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
import { AddressGrid } from '@/components/checkout/address-grid';
import { AddressType } from '@/framework/utils/constants';
 
export { getStaticProps } from '@/framework/general.ssr';

const ProfilePage = () => {
  const { t } = useTranslation('common');
  const { me } : any = useUser();
  if (!me) return null;
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="w-full overflow-hidden px-1 pb-1">
        <div className="mb-8">
          <ProfileForm user={me} />
          <ProfileContact
            userId={me.id}
            profileId={me.profile?.id!}
            contact={me.profile?.contact!}
          />
          
        </div>
        
        <Card className="w-full">
        <AddressGrid
              userId={me?.id!}
              className="p-5 bg-light shadow-700 md:p-8"
              label={t('text-billing-address')}
              count={2}
              //@ts-ignore
              addresses={[me?.billing_address]?.filter(
                (item) => item?.type === AddressType.Billing
              )}
              atom={billingAddressAtom}
              type={AddressType.Billing}
            />


            <AddressGrid
              userId={me?.id!}
              className="p-5 bg-light shadow-700 md:p-8"
              label={t('text-shipping-address')}
              count={3}
              //@ts-ignore
              addresses={[me?.shipping_address]?.filter(
                (item) => item?.type === AddressType.Shipping
              )}
              atom={shippingAddressAtom}
              type={AddressType.Shipping}
            />
        </Card>

      
      </div>
    </>
  );
};

ProfilePage.authenticationRequired = true;

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default ProfilePage;
