import React from 'react';
import { browserName } from 'react-device-detect';
import ExampleTextArea from '../../components/ExampleTextArea';
import PageHeader from '../../components/PageHeader';
import Hero from '../../assets/images/hero.svg';
import './style.css';

function Home() {
  return (
    <div>
      <PageHeader />
      <main className="homeContainer">
        <img src={Hero} height="400" alt="Revisor Consciente" />
        <div className="homeContentContainer">
          <h1>Deixe sua escrita mais plural</h1>
          <p>
            O Revisor Consciente, além de corrigir ortografia, identifica
            expressões preconceituosas e explicando-as e propondo substituições
          </p>
          <div className="homeAddButton">
            <a href="#" target="_blank">
              Adicione ao {browserName}
            </a>
          </div>
          <ExampleTextArea />
        </div>
      </main>
    </div>
  );
}

export default Home;
