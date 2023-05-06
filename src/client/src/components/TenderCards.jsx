import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TenderCards = (props) => {

    const[secs, setSecs] = useState(10);
    const[mins,setMins] = useState(1);
    const[hrs,setHrs] = useState(23);
    const[days,setDays] = useState(2);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(secs>0){
                setSecs(secs-1);
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

                <div className="flex flex-row justify-evenly">
                    <span className="countdown font-mono text-2xl  bg-neutral rounded-xl p-2">
                        <span style={{"--value":hrs}}></span>h:
                        <span style={{"--value":mins}}></span>m:
                        <span style={{"--value":secs}}></span>s
                    </span>
                </div>

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