import { useState,useEffect } from "react";

const Countdown = (props) =>{

    const daysToHrs = props.days*24;    
    const[secs, setSecs] = useState(props.seconds);
    const[mins,setMins] = useState(props.minutes);
    const[hrs,setHrs] = useState(props.hours+daysToHrs);
        
    useEffect(()=>{
        console.log()
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
        <div className="w-full"> 
            {props.state? 
                    <div className="flex w-full justify-center items-center tooltip" data-tip="Bidding has started">
                        <div className="bg-neutral font-bold rounded-xl font-mono text-xl px-9 p-2 ">
                        Started
                        </div>
                    </div>
                    :
                    <div className="flex flex-row justify-evenly tooltip" data-tip="Starts in">
                        <span className="countdown font-mono text-2xl bg-neutral rounded-xl p-2">                      
                            <span style={{"--value":hrs}}></span>h:
                            <span style={{"--value":mins}}></span>m:
                            <span style={{"--value":secs}}></span>s  
                        </span>
                    </div>
            
                }   
        </div>
    )
}

export default Countdown;