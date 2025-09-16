console.log("🔧 Using custom BlogPostItem layout");

import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';

export default function BlogPostItem({children, className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {frontMatter, assets} = metadata;
  const image = assets.image ?? frontMatter.image;

  return (
    <BlogPostItemContainer className={clsx(!isBlogPostPage && 'margin-bottom--xl', className)}>
      {/* Custom header with side-by-side layout */}
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {/* IMAGE ON THE LEFT */}
        {image && (
          <div
            style={{
              flex: '0 0 200px',
              maxWidth: '200px',
              height: '140px',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img
              src={image}
              alt={frontMatter.title}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </div>
        )}

        {/* TITLE + INFO + AUTHORS ON THE RIGHT */}
        <div style={{flex: 1, minWidth: '200px'}}>
          <BlogPostItemHeaderTitle />
          <BlogPostItemHeaderInfo />
          <BlogPostItemHeaderAuthors />
        </div>
      </header>

      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
