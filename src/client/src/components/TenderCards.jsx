import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Countdown } from "./"

const TenderCards = (props) => {

    const startDate = new Date(props.startTime*1000);
    const currentDate = new Date(props.currentTime*1000);

    const date = startDate - currentDate;

    const started = date<0? true:false;
    
    const[secs, setSecs] = useState(Math.abs(Math.floor((date % (1000 * 60)) / 1000)));
    const[mins,setMins] = useState(Math.abs(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))));
    const[hrs,setHrs] = useState(Math.abs(Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
    const[days,setDays] = useState(Math.abs(Math.floor(date / (1000 * 60 * 60 * 24))));

    // setDays(startDate.getHours()-currentDate.getHours());
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(secs>0){
                setSecs(secs-1);
                console.log();
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

    return(
        <div className=" flex flex-row flex-wrap justify-evenly ">

            {props.ended?
                <div>

                </div>
                :
                <div className="bg-base-300 h-[500px] w-[315px] rounded-lg p-4 my-7 mx-4 border-solid border-primary border-t-[1px] border-b-[1px] flex flex-col text-center ">
                <div className="text-3xl">
                    {props.title}
                </div>
                <div className="flex flex-col h-full justify-center text-ellipsis overflow-hidden">
                    {(props.desc.length)>250 && ( <div>{props.desc.slice(0,77)} . . .</div> )}
                    {(props.desc.length)<250 && ( <div>{props.desc}</div> )}
                </div>

                <Countdown days = {days} hours = {hrs} minutes = {mins} seconds = {secs} state = {started} /> 
                

                <div>
                    {props.type=='1'?
                    <Link to="/SelectiveBidPage" state={{tdr:{props}}}>  
                    <button className="btn bg-base-100 m-3">Open</button>
                    </Link>
                    :
                    <Link to="/OpenBidPage" state={{tdr:{props}}}>  
                        <button className="btn bg-base-100 m-3">Open</button>
                    </Link>
                }
                </div>
            </div>
            }

            
        </div>
       
    );
}

export default TenderCards;