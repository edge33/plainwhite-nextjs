import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import portfolioPic from '../../public/portfolio.png';

const inter = Inter({ subsets: ['latin'] });

const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME as string;
const showExcerpts = Boolean(process.env.NEXT_PUBLIC_SHOW_EXCERPTS);
const darkMode = false;
const condensedPages =
  process.env.NEXT_PUBLIC_CONDENSED_MOBILE?.split(',') || [];

const post = {
  date: '01-01-2023',
  title: 'GSoC 2021 with Navidrome Part 3 - Data Fetching',
  categories: [{ tag: 'open-source' }, { tag: 'gsoc' }],
  excerpt:
    'I found Navidrome at the intersection of two things I like, music and software. My project aims to replace the pagination views in navidrome with smooth infinite scroll (issue).',
  url: 'url',
};

const posts = [post, post, post, post, post];

export default function Home() {
  const themeClass = darkMode ? 'dark' : 'light';

  //TODO: IMPLEMENT CONDENSED IN THE LAYOUT use where {{condensed_className}} is set

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <section className="about">
          <div className="about-header {{condensed_className}}">
            <div className="about-title">
              <a href="#">
                <Image
                  className={themeClass}
                  src={portfolioPic}
                  alt={websiteName}
                />
              </a>
              <h2 id="title">
                <a href="#">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</a>
              </h2>
            </div>
          </div>
        </section>
        <section className="content">
          {/* TODO: IMPLEMENT SEARCH IN THE FUTURE*/}
          {/*<div className="search-container">*/}
          {/*  <div className="search-section">*/}
          {/*    <i className="icon-search" />*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      name="search"*/}
          {/*      id="searchbar"*/}
          {/*      autoComplete="off"*/}
          {/*      aria-label="search in posts"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    className="search-results"*/}
          {/*    id="search-results"*/}
          {/*    data-placeholder="No Results"*/}
          {/*    style={{ display: 'none' }}*/}
          {/*  />*/}
          {/*</div>*/}

          {posts.length > 0 && (
            <ul className="posts">
              <li className="posts-labelgroup" id="posts-labelgroup">
                <h1 id="posts-label">posts</h1>
              </li>

              {posts.map(({ date, excerpt, categories, title, url }, i) => (
                <li key={i}>
                  <Link href={url} className="post-link">
                    <h2 className="post-title">{title}</h2>
                  </Link>
                  <div className="post-meta">
                    <div className="post-date">
                      <i className="icon-calendar"></i>
                      {date}
                    </div>
                    {categories.length > 0 && (
                      <ul className="post-categories">
                        {categories.map(({ tag }, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="post">{showExcerpts && excerpt}</div>
                </li>
              ))}
            </ul>
          )}
        </section>
        <footer>some this is the footer</footer>
      </main>
    </>
  );
}
