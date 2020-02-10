import React from 'react'

export default function Tarif({tarif}) {
    return (
        <div className="all"> 
        <div className="block_1">
            <h4 className="tariffName"><span>{tarif.tariffName}</span></h4>                
            <p className="fee">{tarif.fee}</p>
            <div className="price">{tarif.price !== 0 && tarif.price}
                <div className="right">
                    <div className="signMoney">{tarif.price !== 0 && tarif.signMoney}</div>
                    <div className="month">{tarif.price !== 0 && tarif.month}</div>
                </div>
            </div>
        </div>             

        <div className="hit">
            <img src={tarif.imgUrl} alt="" className="imgUrl"/>
        </div>


        <div className="block_2">
            <span className="memory">{tarif.internet !== 0 && tarif.internet} 
            <span className="memoryInternet"> { tarif.internet !== 0 && tarif.memory}</span></span>             
                <div>{tarif.internet !== 0 &&<span className="text">{tarif.text}</span>}</div>
                
                <div><span>
                    { tarif.text !== '' && tarif.socialIkons.map(o => <img src={o} alt="" className="socialIkons" />)} 
               
                </span></div>                          
        </div>

  
        <div className="block_3">
            <span className="memory">{tarif.minuts !== 0 && tarif.minuts} 
            {tarif.minuts !== 0 && <span className="min"> {tarif.minuts_direction}</span>}</span>               
                <div className="tariff_description">{tarif.minuts !== 0 && tarif.tariff_description}</div>              
        </div>

       

        <div className="block_4">
          <span className="memory">{tarif.sms !== 0 && tarif.sms} 
          {tarif.sms !== 0 && <span className="sms"> {tarif.sms_direction}</span>}</span>               
        </div>
        <a className="bySim" href="https://msk.tele2.ru/tariffs">Купить SIM</a>
    </div>
    )
}
