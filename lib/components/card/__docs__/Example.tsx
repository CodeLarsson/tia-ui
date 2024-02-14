import React from 'react';
import Card, { CardProps } from '../Card';
import Icon from '../../icon/icon';

const icon = () => <Icon name="User" />;
const Example = ({
  type = 'elevated',
  title = 'card',
  CardIcon = icon
}: CardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Card type={type} title={title} CardIcon={CardIcon}>
        <div>Card Content</div>
      </Card>
    </div>
  );
};

export default Example;
