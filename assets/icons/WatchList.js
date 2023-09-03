import React from 'react'
import { Svg, Path } from "react-native-svg";

const WatchList = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M41 29.8788V34H0V29.8788H41ZM0 0L16.4 10.303L0 20.6061V0ZM41 15.4545V19.5758H20.5V15.4545H41ZM41 1.0303V5.15152H20.5V1.0303H41Z" 
        fill={color}/>
    </Svg>
  )
}

export default WatchList