import React from 'react'
import MapImage from "@/assets/images/map.jpg"
import LargeMapImage from "@/assets/images/map-lg.jpg"

const Map = () => {
  return (
    <div className='py-14 lg:py-0'>
        <div className="relative lg:-mr-16">
            <div className='lg:absolute top-0  left-0 w-full lg:w-[650px] lg:h-[900px]'>
                <img src={MapImage} alt="map image" className='w-full object-left-top object-cover lg:hidden'/>
                <img src={LargeMapImage} alt="map image" className='w-full object-left-top object-cover hidden lg:block'/>

            </div>
        </div>
    </div>
  )
}

export default Map