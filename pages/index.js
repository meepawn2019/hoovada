import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import ModalBody from '../components/Modal/ModalBody';

export default function Home() {

  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalType, setModalType] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onShowPostQuestionModal = () => {
    setModalTitle('Đặt câu hỏi?');
    setModalType('postQuestion');
    setShow(true);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Hoovada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onShowModal={handleShow} onShowPostQuestionModal={onShowPostQuestionModal} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
      <ModalBody show={show} handleClose={handleClose} modalType={modalType} modalTitle={modalTitle} />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{(modalType === 'postQuestion') && <ModalBody modalType={modalType} />}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

    </div>
  )
}
