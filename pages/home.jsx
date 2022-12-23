import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useMetamask from "../hooks/useMetamask";
import client from "../client";
import GET_ALL_VIDEOS from "../queries/FetchVideos";
import useStore from "../store/store";
import VideoCard from "../components/VideoCard";
import Link from "next/link";
function Landing() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [Videos, setVideos] = useState([]);
  const router = useRouter();
  const store = useStore();
  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const { data } = await client.query({ query: GET_ALL_VIDEOS });
    setVideos(data.videos);
    store.setAllVideos(data.videos);
    console.log(data);
  };
  const catagories = [
    { name: "All", selected: true },
    { name: "Education", selected: false },
    { name: "Science & Technology", selected: false },
    { name: "Travel", selected: false },
    { name: "Entertainment", selected: false },
  ];
  return (
    <section className="relative  text-purple-100 h-screen justify-center items-center w-full">
      <div className="flex justify-start gap-4 px-16 py-4">
        {catagories.map((item) => {
          return (
            <div
              className={`${
                item.selected
                  ? "bg-white text-black px-4 py-1 rounded-3xl"
                  : "bg-[#1d1d1d] px-4 py-1 rounded-3xl"
              }`}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-4">
        {Videos.map((video, index) => {
          return (
            <VideoCard
              key={video.id}
              id={index}
              img={video.thumbnailHash}
              title={video.title}
              category={video.category}
              description={video.description}
            />
          );
        })}
      </div>
      {/* {store.currentAccount} */}
    </section>
  );
}

export default Landing;
