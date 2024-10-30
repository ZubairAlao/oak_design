import React from 'react'

const Button = ({text}) => {
  return (
    <button className={`md:border-[3px] border-[1.25px] border-[#AF885A] text-[#AF885A]
      lg:min-w-[248px] md:min-w-[196px] min-w-[106px]
      text-[8px] md:text-[18px] lg:text-[20px] lg:px-10 lg:py-5 px-4 py-2
      `}>
        {text}
    </button>
  )
}

export default Button