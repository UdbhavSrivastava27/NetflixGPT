import React from "react";
import { useSelector } from "react-redux";
const Shimmer = () => {
  const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
  return (
    <div className="mx-4">
    <div className="h-full w-full px-5 m-4  overflow-hidden ">
      {!trailerVideo && <>
      <div className=" animate-pulse w-52 h-16 bg-slate-600 m-1 mt-10 mb-5  rounded-sm">
       
      </div>
      <div className="animate-pulse w-11/12 h-96   bg-slate-600 rounded-md"> </div>
    </>
}
      <div className="animate-pulse w-52 h-5 bg-slate-600 m-1 flex-1 mt-20 mb-5  "></div>
      <div className="animate-pulse flex">
        <div className=" px-10 py-5 bg-slate-600 h-52 m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52 m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
      </div>
      <div className="animate-pulse w-64 h-5 bg-slate-600 m-1 flex-1 mt-20 mb-5"></div>
      <div className="animate-pulse flex">
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
      </div>
      <div className="animate-pulse w-64 h-5 bg-slate-600 m-1 flex-1 mt-20 mb-5"></div>
      <div className="animate-pulse flex">
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
        <div className=" px-10 py-5 bg-slate-600 h-52  m-1 flex-1 rounded xs:h-48 hidden md:block"></div>
      </div>
    </div>
    </div>
  );
};

export default Shimmer;
