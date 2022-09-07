import React from 'react'
import './DestinationsStyle.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='destinations'>
        <div className="container">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Carribean's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={BoraBora} alt="BoraBora" />
                <img src={BoraBora2} alt="BoraBora2" />
                <img src={Maldives} alt="Maldives" />
                <img src={Maldives2} alt="Maldives2" />
                <img src={KeyWest} alt="KeyWest" />
            </div>
        </div>

    </div>
  )
}

export default Destinations