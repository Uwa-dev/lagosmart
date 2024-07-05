import React from 'react';
import { newsItems } from '../constants/index';


const News = () => {
  return (
    <div className=" bg-slate-200">
      <h1 className="text-center text-4xl font-bold mb-6">News &amp; Events</h1>
      <div className="right-box news-box-four container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsItems.map((item, index) => (
          <a key={index} href={item.link} title={item.title} rel="nofollow noopener noreferrer" className="news-items news-items-other news-link block">
            <div className="img-bg overflow-hidden rounded-md">
              <div className="news-img bg-cover bg-center" style={{ backgroundImage: `url('${item.imageUrl}')` }}></div>
            </div>
            <div className="text-box p-4">
              <div className="top-title mb-2">
                <h2 className="name ellipsis text-xl font-semibold">{item.title}</h2>
                <span className="data ellipsis text-gray-500">{item.date}</span>
              </div>
              <p className="desc text-gray-700">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
