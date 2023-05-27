import {ResultCard} from '../components';
import react, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import loader from '../assets/loader.svg'
const Result = () => {

    const {loadSelectiveTdrs, selectiveTdrs, loadOpenTdrs, openTdrs, selectOpenTender, selectSelectiveTender } = useContext(TransactionContext);

    const [isLoading, setLoading] = useState(true);
    const [state, setState]= useState(1);

    function selectOpenTenderRes() {
        setState(1);
        selectOpenTender();
        console.log("H2");
    }
    function selectSelectiveTenderRes() {
        setState(2);
        selectSelectiveTender();
        console.log("H3");
    }

    useEffect( ()=> {
        
        loadSelectiveTdrs();
        loadOpenTdrs();    
        
    })

    return (
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-lg p-5 bg-opacity-80">

            <div className='sticky top-0 flex flex-row justify-between'>
                <h1 className="font-bold text-4xl">Result</h1>
                
            </div>  

            {state==1?
                
                <div className="tabs mt-2">
                    <button className=" tab tab-bordered tab-active" onClick={selectOpenTenderRes}> OpenTender</button>
                    <button className=" tab tab-bordered" onClick={selectSelectiveTenderRes}> SelectiveTender</button>
                </div>

                :

                <div className="tabs mt-2">
                    <button className=" tab tab-bordered" onClick={selectOpenTenderRes}> OpenTender</button>
                    <button className=" tab tab-bordered tab-active" onClick={selectSelectiveTenderRes}> SelectiveTender</button>
                </div>
            }

            
            
            {state==1?
                (<div className="h-screen flex flex-row flex-wrap overflow-y-scroll scroll-smooth scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">

                    {openTdrs.map((x)=>(<ResultCard key={x.tdrId.id} title = {x.tdrTitle.title} desc = {x.tdrDesc.desc} 
                    ended = {x.isEnded.ended} id = {x.tdrId.id.toString()} winnerAddress = {x.winnerAdr.winnerAddress} winningBid = {x.winningBid.winningBid} />))}
                    

                </div>)
                :
                (<div className="h-screen flex flex-row flex-wrap overflow-y-scroll scroll-smooth scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">

                    {selectiveTdrs.map((x)=>(<ResultCard key={x.tdrId.id} title = {x.tdrTitle.title} desc = {x.tdrDesc.desc} 
                    ended = {x.isEnded.ended} id = {x.tdrId.id.toString()} />))}

                </div>)
        
            }

        </div>

    )
}

export default Result;