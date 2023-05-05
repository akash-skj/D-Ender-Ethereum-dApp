import {ResultCard} from '../components';
import react, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import loader from '../assets/loader.svg'
const Result = () => {

    const {loadSelectiveTdrs, selectiveTdrs, loadOpenTdrs, openTdrs } = useContext(TransactionContext);

    const [isLoading, setLoading] = useState(true);
    const [state, setState]= useState(1);

    function selectOpenTender() {
        setState(1);
        console.log("H2");
    }
    function selectSelectiveTender() {
        setState(2);
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
                    <button className=" tab tab-bordered tab-active" onClick={selectOpenTender}> OpenTender</button>
                    <button className=" tab tab-bordered" onClick={selectSelectiveTender}> SelectiveTender</button>
                </div>

                :

                <div className="tabs mt-2">
                    <button className=" tab tab-bordered" onClick={selectOpenTender}> OpenTender</button>
                    <button className=" tab tab-bordered tab-active" onClick={selectSelectiveTender}> SelectiveTender</button>
                </div>
            }

            
            
            {state==1?
                (<div className="h-screen flex flex-row flex-wrap overflow-y-scroll scroll-smooth scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">

                    {openTdrs.map((x)=>(<ResultCard key={x.tdrId.id} title = {x.tdrTitle.title} desc = {x.tdrDesc.desc} 
                    ended = {x.isEnded.ended} id = {x.tdrId.id.toString()} />))}
                    

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