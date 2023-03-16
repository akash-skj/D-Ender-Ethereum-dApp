import {TenderCards} from '../components';
import react, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import loader from '../assets/loader.svg'

const OpenTender = () => {
    const {loadOpenTdrs, openTdrs} = useContext(TransactionContext);

    const [isLoading, setLoading] = useState(true);

    useEffect( ()=> {
        setTimeout(() => {
            setLoading(true);
            loadOpenTdrs();
            setLoading(false);  
        }, 1000);
          
    })

    return (
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80 overflow-y-scroll scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">
            
            <div className='sticky top-0'>
                <h1 className="font-bold text-4xl">OpenTender</h1>
            </div>

            {isLoading?
                <div className='flex justify-center items-center h-full'>
                    <img src={loader} className='h-[100px]' alt="loading Animation" />
                </div>
                :
                <div className="flex flex-wrap mt-4">
                {openTdrs.map((x)=>(<TenderCards key={x.tdrId.id.toString()} title = {x.tdrTitle.title} desc = {x.tdrDesc.desc} 
                ended = {x.isEnded.ended} id = {x.tdrId.id.toString()} type = '0' />))}
                </div>
            }

           

        </div>
    )
}

export default OpenTender;