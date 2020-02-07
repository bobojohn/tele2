import React from 'react'

export default function TariffTwo({post}) {
    return (
        <div className="all"> 
        <div className="block_1">
            <h4 className="tariffName"><span>{post.tariffName}</span></h4>                
            <p className="fee">{post.fee}</p>
            <div className="price">{post.price !== 0 && post.price}
                <div className="right">
                    <div className="signMoney">{post.price !== 0 && post.signMoney}</div>
                    <div className="month">{post.price !== 0 && post.month}</div>
                </div>
            </div>
        </div>             

        <div className="hit">
            <img src={post.imgUrl} alt="" className="imgUrl"/>
        </div>


        <div className="block_2">
            <span className="memory">{post.internet !== 0 && post.internet} 
            <span className="memoryInternet"> { post.internet !== 0 && post.memory}</span></span>             
                <div>{post.internet !== 0 &&<span className="text">{post.text}</span>}</div>
                
                <div><span>
                    { post.text !== '' && post.socialIkons.map(o => <img src={o} alt="" className="socialIkons" />)} 
               
                </span></div>                          
        </div>

  
        <div className="block_3">
            <span className="memory">{post.minuts !== 0 && post.minuts} 
            {post.minuts !== 0 && <span className="min"> {post.minuts_direction}</span>}</span>               
                <div className="tariff_description">{post.minuts !== 0 && post.tariff_description}</div>              
        </div>

       

        <div className="block_4">
          <span className="memory">{post.sms !== 0 && post.sms} 
          {post.sms !== 0 && <span className="sms"> {post.sms_direction}</span>}</span>               
        </div>
        <a className="bySim" href="https://msk.tele2.ru/tariffs">Купить SIM</a>
    </div>
    )
}
