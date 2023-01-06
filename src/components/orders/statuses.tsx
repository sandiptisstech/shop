import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import ProgressBox from '@/components/ui/progress-box/progress-box';
import { useOrderStatuses } from '@/framework/order';
import { OrderStatus } from '@/types';

interface Props {
  status: OrderStatus;
  language?: any;
}

const OrderStatuses = ({ status, language }: Props) => {
  const { orderStatuses, isLoading, error } = useOrderStatuses({
    limit: 100,
    language: language ? language :"en"
  });

  if (isLoading) return <Spinner showText={false} className="h-[200px]" />;
  if (error) return <ErrorMessage message={error.message} />;
  
  return <ProgressBox data={orderStatuses} status={status}/>;
};

export default OrderStatuses;
