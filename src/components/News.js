import React from 'react';
import NewsItem from './NewsItem';

function News() {
  const newsItems = [
    { id: 1, title: 'News 1', content: 'Content 1' },
    { id: 2, title: 'News 2', content: 'Content 2' },
    { id: 3, title: 'News 3', content: 'Content 3' },
    { id: 4, title: 'News 4', content: 'Content 4' },
    { id: 5, title: 'News 5', content: 'Content 5' },
    { id: 6, title: 'News 6', content: 'Content 6' },
    { id: 7, title: 'News 7', content: 'Content 7' },
    { id: 8, title: 'News 8', content: 'Content 8' },
  ];

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
  };

  const h3Styles = {
    fontFamily: 'Gordita Regular, sans-serif',
    fontSize: '48px',
    color: 'black',
  };

  return (
    <>
      <div className="container mt-5">
        <h3 style={h3Styles}>NEWS</h3>
      </div>
      <div className="container" style={gridStyles}>
        {newsItems.map((item) => (
          <NewsItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

export default News;
