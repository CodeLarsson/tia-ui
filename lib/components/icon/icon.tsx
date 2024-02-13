import * as icons from 'react-feather';

// Define a type for valid icon names
type FeatherIconName = keyof typeof icons;

export type IconProps = {
  name: FeatherIconName;
  color?: string;
  size?: number;
};

const Icon = ({ name, color = 'currentColor', size = 24 }: IconProps) => {
  // Explicitly check if the icon exists in the 'icons' object
  if (!(name in icons)) {
    console.error(`Invalid icon name: ${name}`);
    return null;
  }

  // Type assertion since we've checked for existence above
  const SelectedIcon = icons[name] as icons.Icon;

  return <SelectedIcon color={color} size={size} />;
};

Icon.displayName = 'Icon';
export default Icon;
