import React from "react";

const cardsData = [
  {
    id: 1,
    imgName: "chrome",
    title: "Google Chrome",
  },
  {
    id: 2,
    imgName: "account",
    title: "google account",
  },
  {
    id: 3,
    imgName: "youtube",
    title: "youTube",
  },
  {
    id: 4,
    imgName: "gmail",
    title: "gmail",
  },
];

const Cards = () => {
  return (
    <section className="max-w-4xl py-20 mx-auto">
      <div className="flex flex-col gap-4 lg:px-24 mb-20">
        {cardsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <div className="relative w-full h-px bg-gray-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-500 shadow-lg">
          <svg
            width={30}
            height={30}
            fill="#0b57d0"
            aria-hidden="true"
            viewBox="0 0 24 24">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Cards;

const Card = ({ data }) => {
  return (
    <div className="border border-gray-400 rounded-lg py-2 px-8">
      <h2 className="text-center text-blue-800 mb-4">
        <span className="capitalize block">{data.title}</span>
        This is more infomation
      </h2>

      <div className="relative sm:px-20 pb-6">
        <img
          className="sm:absolute mx-auto my-2 left-0 bottom-1"
          src={require(`../assets/${data.imgName}.png`)}
          alt="chrome"
        />
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <a className="text-center text-blue-800" href="#">
            Link to learn more
          </a>
          <a className="text-center text-blue-800" href="#">
            Link to schedule more
          </a>
        </div>
      </div>
    </div>
  );
};
