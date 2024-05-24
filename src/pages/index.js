import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import  { Redirect } from 'react-router-dom';
import styles from     './index.module.css';
import { datadogRum } from '@datadog/browser-rum';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/index">
            Codiac Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  
  /* DATA DOG TRACKING */
        // if (process.env.NEXT_PUBLIC_DATADOG_ENV == "prod") {
            datadogRum.init({
                applicationId: '5f643926-66d2-4dd0-a5e9-45eb1ad5e118',
                clientToken: 'pub6ff613721005836dfbc98443913ef76e',
                site: 'us5.datadoghq.com',
                service: 'codiac-landing',
                env: "prod",
                // Specify a version number to identify the deployed version of your application in Datadog 
                // version: '1.0.0',
                sessionSampleRate: 100,
                premiumSampleRate: 100,
                trackUserInteractions: true,
                defaultPrivacyLevel: 'mask-user-input'
            });
            datadogRum.startSessionReplayRecording();
        // }
        /* DATA DOG TRACKING */

  return <Redirect to='/docs' />;
}
