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
  primary = true,
  size = 'medium',
  text,
  ...props
}: ButtonProps) => {
  const smallStyles = 'tia-text-xs tia-h-small';
  const mediumStyles = 'tia-text-md tia-h-medium';
  const largeStyles = 'tia-text-base tia-h-large';

  const baseBtnStyles = `tia-px-4 tia-rounded-full tia-border tia-border-solid ${
    primary
      ? 'tia-bg-primary-500 tia-text-white tia-border-primary-600 tia-shadow-md'
      : 'tia-bg-white tia-text-primary-500 tia-border-primary-500 tia-shadow-sm'
  }`;

  const enabledStyles = `tia-cursor-pointer ${
    primary
      ? 'hover:tia-bg-primary-600 hover:tia-shadow-lg transform transition-transform hover:tia-scale-105'
      : 'hover:tia-bg-primary-50 hover:tia-shadow-md transform transition-transform hover:tia-scale-105'
  }`;

  const disabledBtnStyles = 'tia-opacity-50 tia-pointer-events-none';

  const btnStyles = {
    small: `${smallStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`,
    medium: `${mediumStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`,
    large: `${largeStyles} ${baseBtnStyles} ${disabled ? disabledBtnStyles : enabledStyles}`
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
      className={`${btnStyles[size]} ${disabled ? disabledBtnStyles : ''}`}
    >
      {text}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
