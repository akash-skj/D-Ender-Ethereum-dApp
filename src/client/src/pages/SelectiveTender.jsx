import { TenderCards } from '../components';
import react, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext";

const SelectiveTender = () => {
    const {loadSelectiveTdrs, selectiveTdrs} = useContext(TransactionContext);

    const [isLoading, setLoading] = useState();

    useEffect( ()=> {
        setLoading(true);
        loadSelectiveTdrs();
        setTimeout(()=>{console.log(Loading);},50000)
        setLoading(false);
    })

    return (
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80 overflow-y-scroll scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100">
            
            <div className='sticky top-0'>
                <h1 className="font-bold text-4xl">SelectiveTender</h1>
            </div>

            {isLoading?
                <div>Loading</div>
                :
                <div className="flex flex-wrap mt-4">
                {selectiveTdrs.map((x)=>(<TenderCards key={x.tdrId.id.toString()} title = {x.tdrTitle.title} desc = {x.tdrDesc.desc} 
                ended = {x.isEnded.ended} />))}
                </div>
            }

           

        </div>
    )
}

export default SelectiveTender;