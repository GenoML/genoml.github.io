/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Diagram from '@site/src/components/Diagram';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/easy.svg',
        description: (
            <>
                You don&apos;t need to learn and configure machine learning tools.
                GenoML helps you focus on data and results.
                When it&apos;s time to build, your model is optimized automatically.
            </>
        ),
    },
    {
        title: 'ML/AI are made easy',
        imageUrl: 'img/ai.svg',
        description: (
            <>
                Providing the most efficient methods easily used and without expert knowledge.
            </>
        ),
    },
    {
        title: 'Flexible',
        imageUrl: 'img/flexible.svg',
        description: (
            <>
                Supports commonly used genomics data formats.
            </>
        ),
    },
    {
        title: 'Scalable',
        imageUrl: 'img/scalable.svg',
        description: (
            <>
                Easy setup to run multicore computations and deploy to thousands of instances in matter of seconds.
            </>
        ),
    },
    {
        title: 'Open Source',
        imageUrl: 'img/oss.svg',
        description: (
            <>
                GenoML is open source and welcomes contributions and collaborations.
                We are building a collaborative community for machine learning in genomics.
            </>
        ),
    },
    {
        title: 'Reproducible and portable workflows',
        imageUrl: 'img/workflow.svg',
        description: (
            <>
                Ensuring scientific transparency and reproducibility.
            </>
        ),
    },
];

const users = [
    {
        title: 'AMP-PD',
        imageUrl: 'img/cropped-amp.png',
        url: 'https://amp-pd.org'
    },
    {
        title: 'GP2',
        imageUrl: 'img/cropped-gp2.png',
        url: 'https://parkinsonsroadmap.org/gp2/'
    },
    {
        title: 'MJFF',
        imageUrl: 'img/mjff.png',
        url: 'https://www.michaeljfox.org'
    },
    {
        title: 'NIH',
        imageUrl: 'img/cropped-nih.png',
        url: 'https://www.nih.gov'
    },
    {
        title: 'DTI',
        imageUrl: 'img/cropped-dti.png',
        url: 'https://www.datatecnica.com'
    },
    {
        title: 'NINDS',
        imageUrl: 'img/ninds.png',
        url: 'https://www.ninds.nih.gov'
    },
    {
        title: 'NIA',
        imageUrl: 'img/nia.png',
        url: 'https://www.nia.nih.gov'
    },
    {
        title: 'iPDGC',
        imageUrl: 'img/cropped-ipdgc.jpg',
        url: 'https://pdgenetics.org'
    },

];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            {/*<hr/>*/}
            <h3 style={{textAlign: 'center', marginTop: '10px'}}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function User({imageUrl, title, url}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--2', styles.users)}>
            {imgUrl && (
                <div className="text--center">
                    <a href={url} target="_blank">
                        <img style={{width: '100%'}} src={imgUrl} alt={title}/>
                    </a>
                </div>
            )}
            {/*<h3 style={{textAlign: 'center'}}>{title}</h3>*/}
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}: Automated Machine Learning (AutoML) for Genomics`}
            description="Automated Machine Learning (AutoML) for Genomics <head />">
            <header className={clsx('hero hero--dark', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}<br/>To standardize and democratize tools, data,
                        and
                        results, in genomics</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--primary button--outline button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>

                        <Link
                            className={clsx(
                                'button button--primary button--outline button--lg',
                                styles.download,
                            )}
                            to={'https://github.com/GenoML/genoml/releases/'}>
                            Download
                        </Link>

                        <Link
                            className={clsx(
                                'button button--outline button--primary button--lg',
                                styles.contribute,
                            )}
                            to={useBaseUrl('docs/about/contribute')}>
                            Contribute
                        </Link>
                    </div>
                    {/*<div className="hero--buttons">*/}
                    {/*  <Link to="https://github.com/timberio/vector/" className="button button--primary"><i className="feather icon-github"></i> View on Github</Link>*/}
                    {/*  <Link to="/download/" className="button button--primary">Download<span className="version"> v{latest_release.version}</span></Link>*/}
                    {/*</div>*/}
                    <Diagram className={styles.indexHeroDiagram} width="100%"/>
                    <p className="hero--subsubtitle">
                        As of December 2020, GenoML has been downloaded more than 13,000 times.
                    </p>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map(({title, imageUrl, description}) => (
                                    <Feature
                                        key={title}
                                        title={title}
                                        imageUrl={imageUrl}
                                        description={description}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {users && users.length > 0 && (
                    <section className={styles.users}>
                        <div className="container">
                            <h1> Users of GenoML</h1>
                            <div className="row">
                                {users.map(({title, imageUrl, url}) => (
                                    <User
                                        key={title}
                                        title={title}
                                        imageUrl={imageUrl}
                                        url={url}
                                    />
                                ))}
                            </div>
                            {/*<div>*/}
                            {/*Are you using this project?*/}
                            {/*</div>*/}
                            <div className="hero--subsubtitle" style={{textAlign: "center", width: "100%"}}>
                                Are you using this project?
                            </div>
                            <div className={styles.buttons}>
                                <Link
                                    className={clsx(
                                        'button button--outline button--primary button--lg',
                                        styles.contribute,
                                    )}
                                    to={useBaseUrl('docs/about/contribute/')}>
                                    Add Your Name
                                </Link>
                                {/*<div className="hero--subsubtitle" style={{textAlign: "center", width: "100%"}}>*/}
                                {/*  Are you using this project? <a href="/docs/about/contribute"><i>Add your logo</i></a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
