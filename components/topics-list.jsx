import React from "react";
import Image from 'next/image';

import PropTypes from "prop-types";

const TopicsList = (props) => {
  const { title, keywords } = props;
  return (
    <div className="flex border-slate-300 border-2 justify-between p-4 items-center">
      <div className="w-[85%]">
        <p className="text-[1.5rem] mb-[10px]">{title}</p>
        <ul className="flex">
          {keywords?.map((item,index) => {
            return <li className="border-2 rounded-md p-1 mr-[1rem]" key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <button className="flex items-center bg-orange-600 p-1 h-fit">Write<Image className='text-white' src='/chevron-forward-outline.svg' width={20} height={20} alt='button image'/></button>
    </div>
  );
};

export default TopicsList;
