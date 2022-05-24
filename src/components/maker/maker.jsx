import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Ashley',
      company: 'Ohouse',
      theme: 'colorful',
      job: 'Software Engineer',
      email: 'spon9ec0de@gmail.com',
      message: 'I am proud of myself',
      fileName: 'ashley',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Dana',
      company: 'Beyond Style',
      theme: 'dark',
      job: 'Hair Designer',
      email: 'dana.yeo@gmail.com',
      message: 'I love bbodori',
      fileName: 'dana',
      fileURL: 'dana.png',
    },
    3: {
      id: '3',
      name: 'Podo',
      company: 'Bbodoll House',
      theme: 'light',
      job: 'Interior Designer',
      email: 'bbodori04@naver.com',
      message: 'I love podo',
      fileName: 'podo',
      fileURL: null,
    },
  });
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          className={styles.editor}
          cards={cards}
          deleteCard={deleteCard}
          createOrUpdateCard={createOrUpdateCard}
        />
        <Preview className={styles.preview} cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
