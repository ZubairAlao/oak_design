import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className={`md:border-[3px] border-[1.25px] border-[#AF885A] text-[#AF885A]
        lg:min-w-[248px] md:min-w-[196px] min-w-[106px]
        text-[10px] md:text-[18px] lg:text-[20px] lg:px-10 lg:py-5 px-4 py-2
        transition-all duration-300 ease-in-out
        bg-transparent hover:bg-[#AF885A] hover:text-[#F5F5F5]
        hover:shadow-lg hover:scale-100
        active:translate-y-[2px] active:shadow-none`}
    >
      {text}
    </button>
  );
};

export default Button;
