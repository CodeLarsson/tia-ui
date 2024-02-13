import React from 'react';
import GameCard, { GameCardProps } from '../game-card';

const Example = ({ suite, value, isFlipped, isFlippable }: GameCardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <div style={{ width: '100px' }}>
        <GameCard
          suite={suite}
          value={value}
          isFlipped={isFlipped}
          isFlippable={isFlippable}
        />
      </div>
    </div>
  );
};

export default Example;
