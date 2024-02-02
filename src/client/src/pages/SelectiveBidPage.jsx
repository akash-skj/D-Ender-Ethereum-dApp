import react, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransactionContext } from "../context/TransactionContext";
import { Countdown } from '../components'; 

const selectiveBidPage = (props)=>{

    const { selectiveTdrs, handleChangeBidAmt, handleChangeBidderName, placeSelectiveBid, setTdrID, tdrID, loadSelectiveTdrs , getPrevSelectiveBids, SelectiveBids} = useContext(TransactionContext);
   
    const [isLoading, setLoading] = useState(true);
    const location = useLocation();
    const id = location.state.tdr.props.id;
    const selectivetdr = selectiveTdrs[id];

    const stateProps = location.state.tdr.props;

    const endTime = new Date(stateProps.endTime*1000);
    const currentTime = new Date(stateProps.currentTime*1000);

    const endDate = endTime - currentTime;  
    const ended = endDate<0? true:false;

    const[secs, setSecs] = useState(Math.abs(Math.floor((endDate % (1000 * 60)) / 1000)));
    const[mins,setMins] = useState(Math.abs(Math.floor((endDate % (1000 * 60 * 60)) / (1000 * 60))));
    const[hrs,setHrs] = useState(Math.abs(Math.floor((endDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
    const[days,setDays] = useState(Math.abs(Math.floor(endDate / (1000 * 60 * 60 * 24))));
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(secs>0){
                setSecs(secs-1);
                // console.log();
            }if(secs==0){
                setSecs(59);
                if(mins>0){
                    setMins(mins-1);
                }
            }if(mins==0){
                setMins(59);
                if(hrs>0){
                    setHrs(hrs-1);
                }
            }
        },1000);
        return () => clearInterval(interval);

    },[secs])


    
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
            
            <div className='row-span-2 col-span-1 text-center p-3 bg-base-300 m-3 rounded-lg'>
                
                <div className='h-full flex flex-col justify-between'>
                
                    <Countdown days = {days} hours = {hrs} minutes = {mins} seconds = {secs} state = {ended} tipData = {"Ends in"} />   
                
                    <div className='w-full'>
                        <div className='flex w-full justify-center items-center h-full'>
                            <label className="input-group flex w-full justify-center items-center m-2 mx-12 h-full">
                                <input type="text" placeholder="0.01" onChange={handleChangeBidAmt} className="input input-bordered input-primary h-full w-full" />
                                <span className='border border-primary h-full bg-primary text-black font-bold'>ETH</span>
                            </label>                             
                        </div>
                    </div>
                    <div className=' w-full'>
                        
                        <div className='flex w-full justify-center items-center h-full'>
                            <div className=' flex w-full justify-center items-center m-2 mx-12 h-full'>
                                <input type="text" placeholder="Name" onChange={handleChangeBidderName} className="input input-bordered input-primary h-full w-full" /> 
                            </div>
                          
                        </div>
                        
                    </div>
                    <div className=' flex justify-center items-center'>
                        <button className='btn hover:bg-primary hover:text-black w-[200px] mt-2' onClick={handleplaceSelectiveBid}>
                            Place Bid
                        </button>
                    </div>
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