import react, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransactionContext } from "../context/TransactionContext";

const openBidPage = (props)=>{

    const { openTdrs, handleChangeBidAmt, handleChangeBidderName, placeOpenBid, setTdrID, tdrID, loadOpenTdrs } = useContext(TransactionContext);
   
    const location = useLocation();
    const id = location.state.tdr.props.id;
    const opentdr = openTdrs[id];

    
    const handlePlaceOpenBid = () => {
        
        console.log(tdrID);
        placeOpenBid(tdrID,"Akash");
    }

    useEffect(()=>{
        loadOpenTdrs();
        setTdrID(id);
    })

    

    return(

        <div className='bg-base-300 h-full w- mr-1 p-5 ml-2 rounded-lg grid grid-row-6 grid-cols-3 bg-opacity-80'>

            <div className='row-span-1 col-span-full text-4xl font-bold'>
                OpenTender
            </div>
            <div className='row-span-2 col-span-2 grid grid-row-3 p-3 bg-base-300 m-3 rounded-lg'>
                <div className='text-2xl row-span-1 text-center font-bold '>
                    {opentdr.tdrTitle.title}
                </div>
                <div className='row-span-3'>
                    {opentdr.tdrDesc.desc}
                    {opentdr.tdrDesc.desc}

                    {opentdr.tdrDesc.desc}

                    {opentdr.tdrDesc.desc}

                </div>
            </div>
            <div className='row-span-2 col-span-1 text-center p-3 bg-base-300 m-3 rounded-lg grid grid-rows-5 '>
                
                <div className='text-xl row-start-1 font-bold'>
                    Highest Bid <br/> {(opentdr.tdrMaxBid.maxBid)/(10**18)} ETH
                </div>
               
               <div className='row-start-3'>
                    <input type="text" placeholder='Enter Amount in ETH' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeBidAmt} />
               </div>
               <div className='row-start-4'>
                    <input type="text" placeholder='Enter Name' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeBidderName} />
                    
               </div>
               <div className='row-start-5'>
                    <button className='btn hover:bg-primary w-[200px]' onClick={handlePlaceOpenBid}>
                        Bid
                    </button>
               </div>

            </div>
            <div className='row-span-3 col-span-full p-3 bg-base-300 m-3 rounded-lg'>
                
            </div>

        </div>

    )

}

export default openBidPage;



{/* <div className="grid grid-rows-6 bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80">

<div className='sticky row-span-1 top-0'>
    <h1 className="font-bold text-4xl">OpenTender</h1>
</div>

<div className='grid grid-col-3 gap-2 row-span-3'>
    <div className='col-span-2'>    
        <div className='text-3xl font-bold'>
            {tdr.tdrTitle.title}
        </div>
        <div className=' text-xl'>
            {tdr.tdrDesc.desc}
        </div>
    </div>
    <div className='col-span-1'>
        Highest Bid: {tdr.tdrMaxBid.maxBid} ETH
    </div>
</div>

</div>   */}