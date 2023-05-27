import { useState,useEffect,useRef,useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const DatePicker = (props) =>{

    const { handleChangeStartTime, handleChangeEndTime} = useContext(TransactionContext);
    const dateTimeRef = useRef(null);
    // const currentDate = new Date();
    // const currentLocalDate = new Date(currentDate.getTime()+ (330*60*1000));
    // const currentDateValue = currentLocalDate.toISOString().slice(0, 16);

    const [date, setDate] = useState(Date);
    const handleDate = ()=>{
        const date = new Date(dateTimeRef.current.value);
        const epoch = date.getTime()/1000;
        props.handle(epoch);
        // console.log(epoch)

    }

    return(

        <div className="w-full flex justify-center items-center"> 
            <input type="datetime-local"  className="text-lg input input-bordered input-primary w-full max-w-xs " ref={dateTimeRef} onChange={handleDate}></input>  
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>  
        </div>
    )
}

export default DatePicker;