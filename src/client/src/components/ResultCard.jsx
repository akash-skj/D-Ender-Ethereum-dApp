import { useEffect, useState } from "react";
const ResultCard = (props) => {

return (
    <div className="flex flex-row bg-base-300 h-1/3 ml-2 rounded-lg p-5 bg-opacity-80 w-full my-5">

        <div className="flex flex-row h-full w-full ">
            <div className="flex flex-col justify-evenly w-1/2">
                <div className="flex items-start text-4xl font-bold w-full">
                    {props.title}
                </div>   
                <div className="flex w-full m-1">
                    <div className="text-2xl font-bold">
                        Winner :
                    </div>
                    <div className="text-2xl mx-2">
                        Athul P
                    </div>
                </div> 
            </div>
            
            <div className="flex flex-col h-full w-1/2">
                <div className="flex flex-col justify-evenly items-center h-full w-full">
                    <div>

                        <div className="flex w-full m-1">
                            <div className="text-xl font-bold">
                                Address:
                            </div>
                            <div className="text-xl mx-2">
                                0xfC38CA0814417C0Cf0c4D4595462A3E784594eC8
                            </div>
                        </div> 
                         
                    </div>  
                    <div>
                       
                        <div className="flex w-full m-1">
                            <div className="text-xl font-bold">
                                Winning Bid:
                            </div>
                            <div className="text-xl mx-2">
                                5 ETH
                            </div>
                        </div> 

                    </div>
                </div> 
            </div>

        </div>  
    
        

    </div>
    )
}

export default ResultCard;