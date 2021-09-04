import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const CNBC: React.FC = () => {
  const { isLoading, data } = useQuery("cnbc", () =>
    fetch("https://berita-indo-api.vercel.app/v1/cnbc-news/").then((res) => res.json())
  );

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar current="cnbc" />

      <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-36">
        {isLoading
          ? "loading..."
          : data?.data?.length > 0 &&
            data?.data?.map((item: any, i: number) => <Card key={i} item={item} />)}
      </div>
    </div>
  );
};

export default CNBC;
