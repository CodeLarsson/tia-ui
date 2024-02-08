import { MouseEventHandler } from 'react';

export type ButtonProps = {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  disabled,
  onClick,
  primary,
  size,
  text,
  ...props
}: ButtonProps) => {
  const smallStyles = 'tia-text-sm tia-px-4 tia-py-2';
  const mediumStyles = 'tia-text-base tia-px-6 tia-py-3';
  const largeStyles = 'tia-text-lg tia-px-8 tia-py-4';

  const baseBtnStyles = primary
    ? 'tia-bg-blue-500 tia-text-white tia-rounded tia-hover:tia-bg-blue-600'
    : 'tia-bg-white tia-text-blue-500 tia-border tia-border-blue-500 tia-rounded tia-hover:tia-bg-blue-50';

  const btnStyles = {
    small: `${smallStyles} ${baseBtnStyles}`,
    medium: `${mediumStyles} ${baseBtnStyles}`,
    large: `${largeStyles} ${baseBtnStyles}`
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={btnStyles[size ?? 'medium']}
    >
      {text}
      Click me
    </button>
  );
};

export default Button;
