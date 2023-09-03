import React from 'react'
import { Svg, Path } from "react-native-svg";

const RatedList = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 0H36.2105V4.53333H0V0ZM0 13.6H13.5789V18.1333H0V13.6ZM0 27.2H18.1053V31.7333H0V27.2ZM18.1053 17.5893H26.8184L30.5526 9.06667L34.2868 17.5893H43L36.2105 24.7747L38.2474 33.9547L30.5526 29.104L22.8579 34L24.8947 24.82L18.1053 17.5893Z" 
        fill={color}/>
    </Svg>
  )
}

export default RatedList