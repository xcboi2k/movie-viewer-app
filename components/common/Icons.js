import React from 'react'
import BackIcon from '../../assets/icons/BackIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import RatedList from '../../assets/icons/RatedList'
import UserIcon from '../../assets/icons/UserIcon'
import WatchList from '../../assets/icons/WatchList'

import { ICON_NAMES } from '../constants/constant'

const Icons = ({ name, size = 40, color }) => {
    if (name === ICON_NAMES.BACK) return <BackIcon color={color} size={size} />;
    if (name === ICON_NAMES.HOME) return <HomeIcon color={color} size={size} />;
    if (name === ICON_NAMES.RATEDLIST) return <RatedList color={color} size={size} />;
    if (name === ICON_NAMES.USER) return <UserIcon color={color} size={size} />;
    if (name === ICON_NAMES.WATCHLIST) return <WatchList color={color} size={size} />;
}

export default Icons