import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import FavoritesContext from '../../contexts/FavoritesContext';

import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

// CSS Inline in this component

export default function UnfavoriteButton({ recipe, index }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const [isFavorite, setIsFavorite] = useState(
    favorites.map((fav) => fav.id).includes(recipe.id),
  );

  function handleFavoriteClick() {
    const updatedFavorites = favorites.filter(
      (fav) => fav.id !== (recipe.id),
    );
    setFavorites(updatedFavorites);
  }

  useEffect(() => {
    // gets favorites from LS, if there is any
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteRecipes) {
      const isFavoriteLS = favoriteRecipes.map((fav) => fav.id).includes(recipe.id);
      if (isFavoriteLS) setIsFavorite(true);
    }
  }, [recipe]);

  return (
    <button
      type="button"
      onClick={ () => {
        setIsFavorite(!isFavorite);
        handleFavoriteClick();
      } }
      style={ { backgroundColor: 'transparent' } }
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="favoritar"
        style={ { width: 30, backgroundColor: 'transparent' } }
      />
    </button>
  );
}

UnfavoriteButton.propTypes = {
  recipe: PropTypes.shape({}),
  isFood: PropTypes.bool,
}.isRequired;
