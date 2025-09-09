import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function BlogListPage({metadata, items}) {
  return (
    <Layout title="Blog">
      <div className={styles.blogContainer}>
        {items.map(({content: BlogPostContent}) => {
          const {metadata} = BlogPostContent;
          return (
           <article key={metadata.permalink} className={styles.blogCard}>
            {metadata.frontMatter.image && (
              <Link to={metadata.permalink}>
                <img
                  src={metadata.frontMatter.image}
                  alt={metadata.title}
                  className={styles.blogImage}
                />
              </Link>
            )}
            <Link to={metadata.permalink}>
              <h2>{metadata.title}</h2>
            </Link>
            <p className={styles.excerpt}>{metadata.description}</p>
            <div className={styles.meta}>
              <span>{metadata.authors?.[0]?.name}</span>
              <span>· {metadata.formattedDate}</span>
            </div>
          </article>

          );
        })}
      </div>
    </Layout>
  );
}
