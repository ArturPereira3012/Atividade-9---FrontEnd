import React from 'react';
import fallenImage from '../assets/fallen.jpeg'; // Imagem do Fallen

const Home = () => {
  return (
    <div className="container">
      <h1>Bem-vindo ao Fan Page do Fallen</h1>
      <img src={fallenImage} alt="Gabriel 'Fallen' Toledo" style={{ width: '100%', borderRadius: '10px' }} />
      <p>
        Gabriel Toledo, conhecido como Fallen, é um renomado jogador de Counter-Strike: Global Offensive e uma das principais
        figuras do cenário de esports. Nascido em 30 de maio de 1991, ele é conhecido por suas habilidades excepcionais e
        por ser um dos melhores líderes de equipe na história do jogo.
      </p>
    </div>
  );
};

export default Home;
