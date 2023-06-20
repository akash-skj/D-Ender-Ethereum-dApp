import { useEffect, useState, useContext} from "react";
import { TransactionContext } from "../context/TransactionContext";

const ResultCard = (props) => {

    const {withdrawBalance, setTdrID, tdrID, selectOpenTender} = useContext(TransactionContext);

    const withdraw = () =>{
        withdrawBalance(props.id);
    }

    if(props.ended){
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
                        <div className="flex flex-col justify-evenly items- h-full w-full">
                            <div>
        
                                <div className="flex w-full m-1">
                                    <div className="text-xl font-bold">
                                        Address:
                                    </div>
                                    <div className="text-xl mx-2">
                                        {props.winnerAddress}
                                    </div>
                                </div> 
                                
                            </div>  
                            <div className="w-full">
                            
                                <div className="flex w-full m-1 justify-between ">
                                    <div className="flex flex-row">
                                        <div className="text-xl font-bold">
                                            Winning Bid:
                                        </div>
                                        <div className="text-xl mx-2 font-semibold">
                                            {(props.winningBid)/(10**18)} ETH
                                        </div>
                                    </div>
                                
                                    <div className="mr-[140px]">
                                        <button className="btn btn-base-100 hover:btn-primary" onClick={withdraw}> Withdraw </button>
                                    </div>
                                </div> 

                            </div>
                        </div> 
                    </div>
        
                </div>  
            
                
        
            </div>
        )
    }
}



export default ResultCard;