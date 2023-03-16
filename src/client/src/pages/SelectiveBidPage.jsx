import react, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransactionContext } from "../context/TransactionContext";

const selectiveBidPage = (props)=>{

    const { selectiveTdrs, handleChangeBidAmt, handleChangeBidderName, placeSelectiveBid, setTdrID, tdrID, loadSelectiveTdrs , getPrevSelectiveBids, SelectiveBids} = useContext(TransactionContext);
   
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const id = location.state.tdr.props.id;
    const selectivetdr = selectiveTdrs[id];

    
    const handleplaceSelectiveBid = () => {
        
        console.log(tdrID);
        placeSelectiveBid();
    }

    useEffect(()=>{
        setTdrID(id);
        // console.log(id);
        setTimeout(()=>{
            setLoading(true);
            loadSelectiveTdrs();
            getPrevSelectiveBids();
            setLoading(false);

        },1000)
        
    })
    

    return(

        <div className='bg-base-300 h-full w- mr-1 p-5 ml-2 rounded-lg grid grid-row-6 grid-cols-3 bg-opacity-80'>

            <div className='row-span-1 col-span-full text-4xl font-bold'>
                SelectiveTender
            </div>
            <div className='row-span-2 col-span-2 grid grid-row-3 p-3 bg-base-300 m-3 rounded-lg'>
                <div className='text-2xl row-span-1 text-center font-bold '>
                    {selectivetdr.tdrTitle.title}
                </div>
                <div className='row-span-3'>
                    {selectivetdr.tdrDesc.desc}
                    {selectivetdr.tdrDesc.desc}

                    {selectivetdr.tdrDesc.desc}

                    {selectivetdr.tdrDesc.desc}

                </div>
            </div>
            <div className='row-span-2 col-span-1 text-center p-3 bg-base-300 m-3 rounded-lg grid grid-rows-5 '>
                
                <div className='text-xl row-start-1 font-bold'>
                    Highest Bid <br/> {(selectivetdr.tdrMaxBid.maxBid)/(10**18)} ETH
                </div>
               
               <div className='row-start-3'>
                    <input type="text" placeholder='Enter Amount in ETH' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeBidAmt} />
               </div>
               <div className='row-start-4'>
                    <input type="text" placeholder='Enter Name' className='text-center input input-bordered input-primary w-full max-w-xs m-2' onChange={handleChangeBidderName} />
                    
               </div>
               <div className='row-start-5'>
                    <button className='btn hover:bg-primary w-[200px]' onClick={handleplaceSelectiveBid}>
                        Bid
                    </button>
               </div>

            </div>
            <div className='row-span-3 col-span-full p-3 bg-base-300 m-3 rounded-lg'>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <div className='font-bold px-5'>Bidder Address</div>
                            <div className='font-bold px-5'>Bid Amount</div>
                        </div>
                        {isLoading?
                            <div className='px-5'>
                                Loading
                            </div>
                            :
                            <div >
                                {SelectiveBids.map((x)=>(<div className=' flex flex-row justify-between' key={x.bidderAdr.bidder}> 
                                    <div className='px-5'>{x.bidderAdr.bidder}</div>
                                    <div className='px-5'>{(x.amt.bidderAmt)/10**18} ETH</div>
                                 </div>))}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )

}

export default selectiveBidPage;