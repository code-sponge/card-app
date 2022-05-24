import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const CardAddForm = ({ onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      job: jobRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    onAdd(card);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={jobRef}
        className={styles.input}
        type="text"
        name="job"
        placeholder="job"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
