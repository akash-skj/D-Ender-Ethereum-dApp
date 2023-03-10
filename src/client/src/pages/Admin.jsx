import react, { useContext } from 'react';
import { TransactionContext } from "../context/TransactionContext";

const Admin = () => {

    const { handleChangeTitle, handleChangeDesc, handleChangeStartTime, handleChangeEndTime, selectOpenTender, selectSelectiveTender, createTender } = useContext(TransactionContext);


    return(
        
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80">
            
            <div>
                <h1 className="font-bold text-3xl">ADMIN</h1>
            </div>

            <div className="flex h-full items-center justify-center">

                <div className="">
                
                    <div className="btn-group m-3 ">
                        <input type="radio" name="options" data-title="OpenTender" className="btn w-[150px]" onClick={selectOpenTender} />
                        <input type="radio" name="options" data-title="SelectiveTender" className="btn" onClick={selectSelectiveTender} />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="pl-4 mb-2 text-lg font-semibold">Tender Title</h1>
                        <input type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChangeTitle} />
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">Tender Description</h1>
                        <input type="text" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChangeDesc}/>
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">Start Time</h1>
                        <input type="text" placeholder="Time in Epoch" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChangeStartTime}/>
                    </div>

                    <div className="items-center m-3">
                        <h1 className="ml-4 mb-2 text-lg font-semibold">End Time</h1>
                        <input type="text" placeholder="Time in Epoch" className="input input-bordered input-primary w-full max-w-xs" onChange={handleChangeEndTime}/>
                    </div>
                    

                    <div className="flex justify-center">
                        <button className="btn bg-base-100 hover:bg-primary" onClick={createTender}>Create tender</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Admin;