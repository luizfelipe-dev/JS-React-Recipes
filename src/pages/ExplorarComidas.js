import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarComidas() {
  return (
    <div>
      <Header
        title="Explorar Comidas"
        enableSearchIcon={ false }
      />
      <Footer />
    </div>
  );
}
