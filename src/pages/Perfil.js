import React from 'react';
import { useHistory } from 'react-router';
import MenuInferior from '../Components/MenuInferior';
import Header from '../Components/Header';
import '../Style/Perfil.css';

function Perfil() {
  // const emailLocalStorage = JSON.parse(localStorage.getItem('user')).email;
  const history = useHistory();

  function resetProfile() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <main>
      <Header title="Perfil" />
      <div
        data-testid="profile-email"
        className="email"
      >
        {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).email}
      </div>
      <div className="buttons-container">
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
          className="btn btn-primary btn-lg receitas-feitas"
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
          className="btn btn-primary btn-lg receitas-favoritas"
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ resetProfile }
          className="btn btn-primary btn-lg sair"
        >
          Sair
        </button>
      </div>
      <MenuInferior />
    </main>
  );
}

export default Perfil;
