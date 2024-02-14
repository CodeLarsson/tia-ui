import { useState } from 'react';
import { CardSuite, CardValue } from './game-card.enums';

export type GameCardProps = {
  suite: CardSuite;
  value: CardValue;
  isFlipped?: boolean;
  isFlippable?: boolean;
  flipCard?: () => void;
};

const GameCard = ({
  suite,
  value,
  isFlipped = false,
  isFlippable = true
}: GameCardProps) => {
  const [frontUp, setFrontUp] = useState<boolean>(isFlipped);

  const getSuiteClass = (suite: CardSuite): string => {
    switch (suite) {
      case CardSuite.Hearts:
        return 'before:tia-content-card-suit-hearts tia-text-red-500';
      case CardSuite.Diamonds:
        return 'before:tia-content-card-suit-diamonds tia-text-red-500';
      case CardSuite.Clubs:
        return 'before:tia-content-card-suit-clubs tia-text-grey-900';
      case CardSuite.Spades:
        return 'before:tia-content-card-suit-spades tia-text-grey-900';
      default:
        return '';
    }
  };

  const getValueSymbol = (value: CardValue): string => {
    switch (value) {
      case CardValue.Jack:
        return 'J';
      case CardValue.Queen:
        return 'Q';
      case CardValue.King:
        return 'K';
      case CardValue.Ace:
        return 'A';
      default:
        return value.toString();
    }
  };

  const flipCard = () => {
    if (isFlippable) {
      setFrontUp(!frontUp);
    }
  };

  const suiteCssClass = getSuiteClass(suite);

  return (
    <div
      data-testid="tia-game-card"
      className={`tia-aspect-[2.5/3.5] tia-bg-white tia-w-full tia-rounded-xl md:tia-m-2 tia-flex tia-flex-col md:tia-text-2xl tia-p-1 md:tia-p-4 tia-border-black tia-shadow-md tia-transition-transform tia-duration-500 tia-transform tia-origin-center ${frontUp ? 'tia-rotate-0' : 'tia-rotate-180'} ${!isFlippable ? 'tia-pointer-events-none' : 'tia-cursor-pointer'}`}
      onClick={() => flipCard()}
    >
      <div className={`${suiteCssClass} tia-h-2 md:tia-h-12`}>
        {getValueSymbol(value)}
      </div>
      <div className="tia-flex-1 tia-flex tia-items-center">
        <div className="tia-flex tia-flex-col tia-items-center md:tia-text-4xl tia-w-full">
          <div className={suiteCssClass}></div>
        </div>
      </div>
      <div
        className={`${suiteCssClass} tia-h-2 md:tia-h-12 tia-flex tia-items-end tia-justify-end`}
      >
        {getValueSymbol(value)}
      </div>
      <div
        className={`tia-absolute tia-inset-0 tia-rounded-xl tia-h-full tia-bg-gradient-to-br tia-to-primary-500 tia-from-primary-200 tia-bg-no-repeat tia-bg-cover tia-transform-opacity tia-duration-500 ${frontUp ? 'tia-opacity-0' : 'tia-opacity-100'}`}
      ></div>
    </div>
  );
};

GameCard.displayName = 'GameCard';
export default GameCard;
