import { format } from "date-fns";
import React, { useState } from "react";

interface Props {
  item: any;
}

const Card: React.FC<Props> = ({ item }) => {
  const [isShow, setShow] = useState(true);

  const onLoad = () => {
    setShow(false);
  };

  console.log(isShow);

  return (
    <a
      href={item.link}
      className="cursor-pointer shadow-md rounded-md bg-white"
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-full h-[200px] relative">
        <img
          className="w-full h-full object-cover"
          onLoad={() => setShow(false)}
          src={item.image?.small}
        />
        {isShow && (
          <div className="absolute w-full h-full top-0">
            <div className="placeholders "></div>
          </div>
        )}
      </div>

      <div className="w-full p-4">
        <div className="text-sm tracking-wide">
          {format(new Date(item.isoDate), "iiii, dd MMMM yyyy")}
        </div>
        <div className="text-lg mt-2 font-bold leading-relaxed">{item.title}</div>
        <div className="text-sm mt-2 tracking-wide leading-relaxed">{item.contentSnippet}</div>
      </div>
    </a>
  );
};

export default Card;
