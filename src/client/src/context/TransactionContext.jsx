import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import openDender from '../../../abis/openDender.json';
import selectiveDender from '../../../abis/selectiveDender.json';

export const TransactionContext= React.createContext();

const { ethereum }= window;

window.ethereum;

const getOpenContract= ()=>{
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const openContract= new ethers.Contract(openDender.networks[5777].address,openDender.abi,signer);

    return openContract;
}

const getSelectiveContract= ()=>{
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const selectiveContract= new ethers.Contract(0x998dc89865be4Fee6363e572c8d606820DBa5C2f,selectiveDender.abi,signer);

    return selectiveContract;
}

export const TransactionProvider =({ children })=> {

    const openTender = getOpenContract();
    const selectiveTender = getSelectiveContract();

    const [currentAccount, setCurrentAccount] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [tenderType, setTenderType] = useState();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
        console.log(desc);
    }

    const handleChangeStartTime = (e) => {
        setStartTime(e.target.value);
        console.log(startTime);
    }

    const handleChangeEndTime = (e) => {
        setEndTime(e.target.value);
        console.log(endTime);
    }

    const selectOpenTender = () => {
        setTenderType(0);
        console.log("OpenTender selected");
    }

    const selectSelectiveTender = () => {
        setTenderType(1);
        console.log("SelectiveTender selected");
    }

    const createTender = async () => {
        try {
            console.log(title,desc,startTime,endTime);
            if(!ethereum) return alert("Please install Metamask");
            
            if(tenderType==0){
                const transact = await openTender.createTender(title, startTime, endTime, desc);
                console.log("openTender Result: ", transact);
            }else if(tenderType==1){
                const transact = await openTender.createTender(title, startTime, endTime, desc);
                console.log("SelectiveTender Result: ", transact);
            }

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

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
        <TransactionContext.Provider value={{connectWallet, currentAccount, handleChangeTitle, handleChangeDesc, handleChangeStartTime, handleChangeEndTime, selectOpenTender, selectSelectiveTender, createTender}}>
            {children}
        </TransactionContext.Provider>
    )

}