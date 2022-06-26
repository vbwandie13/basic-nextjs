import { Fragment, ReactNode } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './layout.module.css';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}

const layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <Fragment>
      <Head>
        <title>Basic NextJS | {pageTitle} </title>
        <meta name="description" content="Belajar Basic Framework NextJS" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default layout;
