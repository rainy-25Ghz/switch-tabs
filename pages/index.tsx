import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }

export default function Home() {
  let router = useRouter();
  return (
    <div className="flex flex-col w-screen justify-center align-center"></div>
  );
}
