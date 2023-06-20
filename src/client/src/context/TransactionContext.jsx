import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';
import openDender from '../../../abis/openDender.json';
import selectiveDender from '../../../abis/selectiveDender.json';

export const TransactionContext= React.createContext();

if(typeof window.ethereum == 'undefined'){
    alert("Install Metamask!");
}

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
    const selectiveContract= new ethers.Contract(selectiveDender.networks[5777].address,selectiveDender.abi,signer);

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
    const [bidAmt, setBidAmt] = useState();
    const [bidderName, setBidderName] = useState();
    const [tdrID, setTdrID] = useState();

    const [openTdrs, setOpenTdrs] = useState([]);
    const [selectiveTdrs, setSelectiveTdrs] = useState([]);
    const [OpenBids, setOpenBids] = useState([]);
    const [SelectiveBids, setSelectiveBids] = useState([]);
    const opentdrsArray = [];
    const selectivetdrsArray = [];
    const bidsArray = [];

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
        console.log(desc);
    }

    const handleChangeStartTime = (e) => {
        setStartTime(e);
        console.log(startTime);
    }

    const handleChangeEndTime = (e) => {
        setEndTime(e);
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

    const handleChangeBidAmt = (e) => {
        setBidAmt(e.target.value);
        console.log(bidAmt);
    }

    const handleChangeBidderName = (e) => {
        setBidderName(e.target.value);
        console.log(bidderName);
    }

    const createTender = async () => {
        try {
            console.log(title,desc,startTime,endTime);
            if(!ethereum) return alert("Please install Metamask");
            
            if(tenderType==0){
                const transact = await openTender.createTender(title, startTime, endTime, desc);
                console.log("openTender Result: ", transact);
            }else if(tenderType==1){
                const transact = await selectiveTender.createTender(title, desc, startTime, endTime);
                console.log("SelectiveTender Result: ", transact);
            }

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }
    }

    const loadOpenTdrs = async () => {

        const tdrCount =  await openTender.getTdrCount();
        if(tdrCount>0){
            for( var i=0 ; i < tdrCount ; i++){
                var winnerAddress;
                var winningBid=0;
                const tdrInfo = await openTender.getTdrInfo(i);
                const id = tdrInfo.id.toString();
                const title = tdrInfo.title;
                const desc = tdrInfo.desc;
                const startTime = tdrInfo.startTime.toString();
                const endTime = parseInt(tdrInfo.endTime.toString());
                const maxBid = tdrInfo.maxBid.toString();
                const currentTime = parseInt(tdrInfo.currentTime.toString());
                const ended = currentTime > endTime ;

                if(ended){
                    const tdrWinner = await openTender.getWinningBid(i);
                    winnerAddress = tdrWinner.winnerAddress;
                    winningBid = tdrWinner.winningBidAmt;
                }
            
                opentdrsArray[i]={
                    tdrId: {id},
                    tdrTitle: {title},
                    tdrDesc: {desc},
                    tdrStartTime: {startTime},
                    tdrEndTime: {endTime},
                    currentTime: {currentTime},
                    tdrMaxBid: {maxBid},
                    isEnded: {ended},
                    winnerAdr : {winnerAddress},
                    winningBid : {winningBid}
                };
    
            }
            
            setOpenTdrs(opentdrsArray);
        }
    }

    const loadSelectiveTdrs = async () => {

        const tdrCount =  await selectiveTender.getTdrCount();

        for( var i=0 ; i < tdrCount ; i++){
            const tdrInfo = await selectiveTender.getTdrInfo(i);
            const id = tdrInfo.id.toString();
            const title = tdrInfo.title;
            const desc = tdrInfo.desc;
            const startTime = tdrInfo.startTime.toString();
            const endTime = parseInt(tdrInfo.endTime.toString());
            const maxBid = tdrInfo.maxBid.toString();
            const currentTime = parseInt(tdrInfo.currentTime.toString());
            const ended = currentTime > endTime ;
        
            selectivetdrsArray[i]={
                tdrId: {id},
                tdrTitle: {title},
                tdrDesc: {desc},
                tdrStartTime: {startTime},
                tdrEndTime: {endTime},
                currentTime: {currentTime},
                tdrMaxBid: {maxBid},
                isEnded: {ended},
            };

        }
        
        setSelectiveTdrs(selectivetdrsArray);
    }

    const placeOpenBid = async () => {

        try {
            const transact = await openTender.bid(tdrID, bidderName, {value: ethers.utils.parseEther(bidAmt.toString())});
            console.log(transact);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }

    }

    const placeSelectiveBid = async () => {

        try {
            const transact = await selectiveTender.bid(tdrID, bidderName, {value: ethers.utils.parseEther(bidAmt.toString())});
            console.log(transact);

        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object");
        }

    }

    const getPrevOpenBids =async () => {
        try{
                if(tdrID){
                    const count = await openTender.getBidderCountofTdr(tdrID);
                    for(var i=0; i <count;i++){
                        const bid = await openTender.getBiddersOfTdr(tdrID,i);
                        const bidder=bid.bidderAdr.toString();
                        const bidderAmt= bid.bidAmt.toString();
                        bidsArray[i]={
                            bidderAdr: {bidder},
                            amt: {bidderAmt}
                        }
                    }
                }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");  
        }
        // console.log(bidsArray);
        setOpenBids(bidsArray);
    }

    const getPrevSelectiveBids =async () => {
        try{
                if(tdrID){
                    const count = await selectiveTender.getBidderCountofTdr(tdrID);
                    for(var i=0; i <count;i++){
                        const bid = await selectiveTender.getBiddersOfTdr(tdrID,i);
                        const bidder= bid.bidderAdr.toString();
                        const bidderAmt= bid.bidAmt.toString();
                        bidsArray[i]={
                            bidderAdr: {bidder},
                            amt: {bidderAmt}
                        }
                    }
                }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");  
        }
        setSelectiveBids(bidsArray);
    }

    const withdrawBalance = async ( id ) => {
        try{
            if(tenderType==0){
                console.log(id);
                const withdraw = await openTender.withdrawFunds(id); 
            }  
            else if(tenderType==1){
                const withdraw = await selectiveTender.withdrawFunds(id); 
            }

        }catch(error){
            console.log(id);
            console.log(error);
            throw new Error("No ethereum object");
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
        <TransactionContext.Provider value={{connectWallet, currentAccount, handleChangeTitle, handleChangeDesc, handleChangeStartTime, handleChangeEndTime, selectOpenTender, selectSelectiveTender, createTender, loadOpenTdrs, loadSelectiveTdrs, handleChangeBidAmt, handleChangeBidderName, placeOpenBid, openTdrs, selectiveTdrs,setTdrID, tdrID, getPrevOpenBids, OpenBids, placeSelectiveBid, SelectiveBids, getPrevSelectiveBids, withdrawBalance}}>
            {children}
        </TransactionContext.Provider>
    )

}
