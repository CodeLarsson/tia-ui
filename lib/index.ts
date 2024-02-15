import * as React from 'react';

import './tailwind.css';

// Helper functions
export * from './utils';

// Components, dynamic imports in order to lazy load them and have vite perform chunking
const Button = React.lazy(() => import('./components/button/button'));
const Card = React.lazy(() => import('./components/card/card'));
const Icon = React.lazy(() => import('./components/icon/icon'));
const GameCard = React.lazy(() => import('./components/game-card/game-card'));
const InputField = React.lazy(
  () => import('./components/input-field/input-field')
);
const InputToggle = React.lazy(
  () => import('./components/input-toggle/input-toggle')
);

// Types and enums
export { CardSuite } from './components/game-card/game-card.enums';
export { CardValue } from './components/game-card/game-card.enums';

// Exports
export { Button, Card, Icon, GameCard, InputField, InputToggle };
