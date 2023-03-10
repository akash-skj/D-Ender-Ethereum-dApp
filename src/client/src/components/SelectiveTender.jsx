import {TenderCards} from './';
const SelectiveTender = () => {
    return (
        <div className="flex flex-col bg-base-300 h-full ml-2 rounded-xl p-5 bg-opacity-80 overflow-y-scroll scrollbar scrollbar-thumb-primary scrollbar-thin scrollbar-track-base-100 ">
            
            <div>
                <h1 className="font-bold text-4xl">SelectiveTender</h1>
            </div>

            <div className="flex mt-4">
                <TenderCards title="hhhh" desc="asfafs"/>
            </div>

        </div>
    )
}

export default SelectiveTender;