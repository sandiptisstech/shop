import { PlusIcon } from '@/components/icons/plus-icon';
import { useTranslation } from 'next-i18next';

interface AddressHeaderProps {
  count: number | boolean;
  label: string;
  onAdd: () => void;
  update?:number|boolean;
}

export const AddressHeader: React.FC<AddressHeaderProps> = ({
  onAdd,
  count,
  label,
  update
}) => {
  const { t } = useTranslation('common');
  return (
    <div className="flex items-center justify-between mb-5 md:mb-8">
      <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse">
        {count && (
          <span className="rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light">
            {count}
          </span>
        )}
        <p className="text-lg lg:text-xl text-heading capitalize">{label}</p>
      </div>
      {onAdd && (
        <button
          className="flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover"
          onClick={onAdd}
        >
          
          <PlusIcon className="w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5" />
          {update ? t('text-update') : t('text-add')}{' '}
        </button>
      )}
    </div>
  );
};
