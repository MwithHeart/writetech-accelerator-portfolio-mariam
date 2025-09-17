import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';

export default function BlogPostItemHeader(): JSX.Element {
  const { metadata } = useBlogPost();
  const { frontMatter, assets } = metadata || {};
  const image = assets?.image ?? frontMatter?.image;

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
      }}
    >
      {/* IMAGE ON THE LEFT */}
      {image ? (
        <div
          style={{
            flexShrink: 0,
            width: '150px',
            height: '100px',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <img
            src={image}
            alt={frontMatter?.title ?? 'Blog post image'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : null}

      {/* TITLE + INFO + AUTHORS ON THE RIGHT */}
      <div style={{ flex: 1 }}>
        <BlogPostItemHeaderTitle />
        <BlogPostItemHeaderInfo />
        <BlogPostItemHeaderAuthors />
      </div>
    </header>
  );
}
