import { Link } from "react-router-dom";
import { useEffect } from "react";

const TenderCards = (props) => {
    
    useEffect(()=>{
        // console.log(props.type);
    })

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
                <div>
                    {props.type=='1'?
                    <Link to="/SelectiveBidPage" state={{tdr:{props}}}>  
                    <button className="btn bg-base-100 m-3">Open s</button>
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