import React from 'react';
import Layout from '@theme/Layout';
import {PageMetadata} from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogPostPage(props) {
  const {content: BlogPostContents} = props;
  const {metadata} = BlogPostContents;
  const {title, description, authors, date} = metadata;

  return (
    <Layout title={title} description={description}>
      <PageMetadata title={title} description={description} />
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.meta}>
              {authors?.[0]?.name && (
                <span>{authors[0].name}</span>
              )}
              <span> · {new Date(date).toLocaleDateString()}</span>
            </div>
          </header>
          <div className={styles.content}>
            <BlogPostContents />
          </div>
        </article>
      </main>
    </Layout>
  );
}
