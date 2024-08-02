"use client";
import React, { useEffect, useState } from "react";
import HomeRightBar from "../components/news-section/home.component";
import HomeRightBarOther from "../components/news-section/home.other";
import NewsSection from "../components/news-section/news.section.component";
import RajyaMain from "@/components/RajyaMain";
import ApnaZila from "@/components/ApnaZila";
import httpClient from "../api/httpClient"; // axios instance

const HomeMain = () => {
  const [homeNews, setHomeNews] = useState([[], [], [], []]);
  const [ytNews, setYtNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = ["बड़ी ख़बरें", "uttar pradesh", "crime", "education"];

  const fetchHomeNews = async () => {
    try {
      const response = await httpClient.post("/news/home", { data });
      setHomeNews(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchYtNews = async () => {
    try {
      const response = await httpClient.post("/news/youtube");
      setYtNews(response.data.news);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchYtNews();
    fetchHomeNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(homeNews);

  return (
    <>
      <HomeRightBar data={homeNews.slice(0, 2)} ytData={ytNews} />
      <HomeRightBarOther data={homeNews.slice(2, 4)} />
      {homeNews.length > 4 && (
        <div className="flex spacing mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-6 mx-auto w-full">
            <div className="flex flex-col flex-wrap md:col-span-4 overflow-hidden">
              {homeNews.slice(4).map((news, index) => (
                <NewsSection key={index} data={news.data} title={news.title} />
              ))}
            </div>
            <div className="col-span-2 w-full">
              <div className="sticky top-32 max-md:hidden">
                {/* <CustomeAndGoogleAdd /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMain;
