import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import openDender from '../../../abis/openDender.json';
import selectiveDender from '../../../abis/selectiveDender.json';

export const TransactionContext= React.createContext();

const { ethereum }= window;

window.ethereum;

const getEthereumContract= ()=>{
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const openContract= new ethers.Contract(openDender.networks[5777].address,openDender.abi,signer);
    const selectiveContract= new ethers.Contract(selectiveDender.networks[5777].address,selectiveDender.abi,signer);

    return (openContract,selectiveContract);
}

export const TransactionProvider =({ children })=> {
    
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async ()=> {
        try {
            if(!ethereum) return alert("Please install Metamask");
            const accounts= await ethereum.request({method: 'eth_accounts'});
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");  
        }
    }

    const connectWallet = async () => {
        
        try {
            console.log("h");
            if(!ethereum) return alert("Please install Metamask");
            
            const accounts= await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            console.log(currentAccount);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

 
    useEffect(()=>{
        checkIfWalletIsConnected();
        //listenAccount();
    },[]);


    return(
        <TransactionContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )

}