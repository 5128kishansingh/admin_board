import React from 'react';
import Button from './Button';
import './App.css';
import homeIcon from './Images/home-icon.png';
import playIcon from './Images/play-icon.png'
import calender from './Images/calender.png'
import book from './Images/book.png'
import bulb from './Images/bulb.png'
import mssg from './Images/mssg.png'
import stock from './Images/stock.png'
import accnt from './Images/accnt.png'
import offer from './Images/offer.png'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Graph from './Graph'
import Cards from './Cards'
import Foot from './Foot'



export default function App() {
  return (
    <div className="container">

      <div className="left-portion">
        <h3 className="admin-name">Skilify Admin</h3>
        <Button name="Dashboard" image={homeIcon} />
        <Button name="My Course" image={playIcon} />
        <Button name="Calender" image={calender} />
        <Button name="Resource" image={book} />
        <Button name="Quiz" image={bulb} />
        <Button name="Message" image={mssg} />
        <Button name="My Status" image={stock} />
        <Button name="My Account" image={accnt} />

        <div className='parent-sub'>
          <div className='sub'>
            <img src={offer} className='offr' />
          </div>
        </div>

        <div className='footer'>
          <div>
            <p className='footer1'>Skillfy Teacher Dashboard Admin</p>
            <p className='footer2'>© 2020 All rights reserved</p>
          </div>

        </div>

      </div>




      <div className="right-portion">

        <div>
          <Navbar />
        </div>

        <div>
          <Navbar2 />
        </div>

        <div>
          <Graph />
        </div>

        <div>
          <Cards/>
        </div>

        <div>
          <Foot/>
        </div>
      </div>



    </div>
  );
}


