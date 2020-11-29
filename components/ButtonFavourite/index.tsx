import React from 'react';
import classNames from 'classnames';

import style from './buttonFavourite.module.scss';

interface IProps {
  isFavourite: boolean;
  onClick: () => void;
}

const ButtonFavourite: React.FC<IProps> = ({ isFavourite, onClick }) => {
  const [hasAnimation, setHasAnimation] = React.useState(false);

  const className = classNames(
    style.heart,
    hasAnimation && style['is-animating'],
    'bg-transparent shadow-none',
    isFavourite && style['is-active'],
  );

  return (
    <div
      role="presentation"
      onClick={() => {
        setHasAnimation(true);
        onClick();
      }}
      className={className}
      aria-label="Favourite"
      onAnimationEnd={() => {
        setHasAnimation(true);
      }}
    />
  );
};

export default ButtonFavourite;
