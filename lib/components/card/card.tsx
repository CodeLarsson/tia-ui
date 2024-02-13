import { ComponentType, PropsWithChildren } from 'react';

export type CardProps = {
  type?: 'elevated' | 'outlined' | 'filled';
  title?: string;
  CardIcon?: ComponentType | undefined;
};

const Card = ({
  type = 'elevated',
  title,
  CardIcon,
  children
}: PropsWithChildren<CardProps>) => {
  const baseCardStyles = `tia-p-6 tia-max-w-sm tia-rounded-xl tia-space-y-2 tia-text-gray-800"`;

  const cardStyles = {
    elevated: 'tia-bg-primary tia-shadow-lg',
    outlined: 'tia-border-4 tia-border-primary-900',
    filled: 'tia-bg-primary-100'
  };

  return (
    <div className={`${baseCardStyles} ${cardStyles[type]}`} role="region">
      <div className="tia-flex tia-items-center tia-space-x-2">
        {/* icon or decorative element */}
        {CardIcon != undefined && (
          <div className="tia-rounded-full">
            <CardIcon />
          </div>
        )}
        {/* text content title */}
        {title && <div className="tia-text-xl tia-font-medium">{title}</div>}
      </div>

      <div>{children}</div>
    </div>
  );
};

Card.displayName = 'Card';
export default Card;
