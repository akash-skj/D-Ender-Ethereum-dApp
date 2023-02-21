// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract dender{

    struct tdr {
        uint id;
        string title;
        //address mngr;
        string desc;
        uint startTime;
        uint endTime;
        uint accBal;
        uint maxBid;
        address highestBidder;
    }

    struct bidder {
        string bidderName;
        bool bidded;
        uint bidAmt;
    }

    mapping(uint => tdr) public tdrs;
    mapping(address => bidder) public bidders;

    address public manager;
    uint tdrCounts;
    uint time;
    uint amt;

    modifier onlyOfficial(){
        require(msg.sender == manager);
        _; 
    }

    constructor(){
        manager= msg.sender;
    }

    function createTender (string memory _title,uint _bidO,uint _bidC,string memory _description)
    public
    onlyOfficial
    {
        tdrs[tdrCounts] = tdr(tdrCounts,_title,_description,_bidO,_bidC,0,0,0x0000000000000000000000000000000000000000);
        tdrCounts++;
    }

   function bid (uint _amt, uint _tdrID, string memory _name)
   public
   payable
   {
       require(tdrs[_tdrID].startTime<block.timestamp, "Bid has not started.");
       require(tdrs[_tdrID].endTime>block.timestamp, "Bid has ended.");
       if(bidders[msg.sender].bidded){
           amt=_amt+bidders[msg.sender].bidAmt;
       }else{
           amt=_amt;
       }
       require(amt>tdrs[_tdrID].maxBid, "Bid is lower than the current bid.");
       bidders[msg.sender] = bidder(_name, true, amt);
       tdrs[_tdrID].accBal+=amt;
       if(bidders[msg.sender].bidAmt>tdrs[_tdrID].maxBid){
           tdrs[_tdrID].maxBid = amt;
           tdrs[_tdrID].highestBidder = msg.sender;
       }
   }

}