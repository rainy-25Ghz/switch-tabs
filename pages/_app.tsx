import '../styles/globals.css';
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Tab } from '../components/Tab';
import { TabItem } from '../components/TabItem';
const tabs = ['tab1', 'tab2', 'tab3'];
function MyApp({ Component, pageProps }: AppProps) {
  let router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen flex justify-center fixed t-8">
        <Tab>
          {tabs.map((tab) => (
            <TabItem
              key={tab}
              onClick={() => {
                router.push(`${tab}`);
              }}
            >
              {tab}
            </TabItem>
          ))}
        </Tab>
      </div>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
