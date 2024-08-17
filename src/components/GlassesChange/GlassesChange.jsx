import React, { useState } from "react";

const GlassesChange = () => {
  let arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const [selectedGlasses, setSelectedGlasses] = useState({
    url: "",
    name: "",
    price: "",
    desc: "",
  });
  console.log(selectedGlasses);

  const handleSelectedGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="container min-h-screen bg-no-repeat bg-inherit bg-center bg-[url('./public/glassesImage/background.jpg')]">
      {/* title */}
      <div className="header bg-black h-20 w-full  flex items-center justify-center">
        <h1 className="uppercase  text-3xl text-white   font-bold">
          try glasses app online
        </h1>
      </div>
      {/* modal */}
      <div className="modal flex m-auto items-center w-9/12 mx-auto ">
        <div className="modal_left flex justify-center w-1/2">
          <div className="relative">
            <img className="w-80 " src="./glassesImage/model.jpg" alt="" />
            <div className="absolute left-14 top-20">
              <img className="w-52" src={selectedGlasses.url} alt="" />
            </div>
            <div className="w-full absolute left-0 bottom-0 bg-cyan-400 opacity-60">
              <h1 className="text-red-700 font-bold">{selectedGlasses.name}</h1>
              {selectedGlasses.price ? (
                <h3>Price: {selectedGlasses.price} $</h3>
              ) : null}
              <p>{selectedGlasses.desc}</p>
            </div>
          </div>
        </div>
        <div className="modal_right w-1/2 flex justify-center">
          <img className="w-80 " src="./glassesImage/model.jpg" alt="" />
        </div>
      </div>
      {/* arr glass */}
      <div className=" px-5 py-4 mt-12 mx-auto bg-gray-200 w-8/12 ">
        <div className="buttonGlasses grid grid-cols-6 gap-5 ">
          {arrGlasses.map((item, index) => {
            return (
              <button
                key={index}
                className="py-2 px-5 h-16  w-32  rounded border-blue-400 border-2"
                onClick={() => {
                  handleSelectedGlasses(item);
                }}
              >
                <img className="w-full" src={item.url} alt={item.name} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GlassesChange;
