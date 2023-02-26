// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract selectiveDender {
    struct tdr {
        uint id;
        string title;
        string desc;
        uint startTime;
        uint endTime;
        uint accBal;
        uint maxBid;
        uint bidCount;
        address highestBidder;
        address lowestBidder;
        mapping(uint => address) bids;
    } 

     struct bidder {
        string bidderName;
        bool bidded;
        mapping(uint => uint) bidAmt;
    }

    mapping(uint => tdr) public tdrs;
    mapping(address => bidder) public bidders;

    address public manager;
    uint tdrCount=0;
    uint time;
    uint amt;

    modifier onlyOfficial(){
        require(msg.sender == manager);
        _; 
    }

    constructor()
    payable
    {
        manager= msg.sender;
    }

    function createTender (string memory _title, string memory _desc, uint _bidO, uint _bidC) 
    public
    onlyOfficial
    {
        tdr storage t = tdrs[tdrCount];
        t.id=tdrCount;
        t.title=_title;
        t.desc=_desc;
        t.startTime=_bidO;
        t.endTime=_bidC;
        t.bidCount=0;
        tdrCount++;
    }

    function addBidder (string memory _name, address _addr) 
    public
    onlyOfficial
    {
        bidder storage b = bidders[_addr];
        b.bidderName = _name;
        b.bidded = false;
    }

    function bid (uint _tdrID, string memory _name)
    public
    payable
    {
        require(tdrs[_tdrID].startTime < block.timestamp, "Bid has not started.");
        require(tdrs[_tdrID].endTime > block.timestamp, "Bid has ended.");
        require(bytes(bidders[msg.sender].bidderName).length != 0, "Not in bidders list");
        if(bidders[msg.sender].bidded){
            amt=msg.value+bidders[msg.sender].bidAmt[_tdrID];
        }else{
            amt=msg.value;
            tdrs[_tdrID].bids[tdrs[_tdrID].bidCount]=msg.sender;
            tdrs[_tdrID].bidCount++;
        }
        
        require(amt>tdrs[_tdrID].maxBid, "Bid is lower than the current bid.");
        bidder storage b = bidders[msg.sender];
        b.bidderName = _name;
        b.bidded = true;
        b.bidAmt[_tdrID] = amt;
        tdrs[_tdrID].accBal += amt;
        if(bidders[msg.sender].bidAmt[_tdrID] > tdrs[_tdrID].maxBid){
            tdrs[_tdrID].maxBid = amt;
            tdrs[_tdrID].highestBidder = msg.sender;
        }
    }

    function withdrawFunds (uint _tdrID) 
    public
    payable
    {
            require(tdrs[_tdrID].endTime < block.timestamp, "Bid has not ended.");
            require(bidders[msg.sender].bidAmt[_tdrID] > 0, "You do not have anymore ether to withdraw from the contract.");
            bool sent = payable(msg.sender).send(bidders[msg.sender].bidAmt[_tdrID]);
            require(sent,"Error");
            tdrs[_tdrID].accBal-=bidders[msg.sender].bidAmt[_tdrID];
            bidders[msg.sender].bidAmt[_tdrID]=0;

    }


    function highestBidOfTdr (uint _tdrID)
    public
    view
    returns(uint)
    {
        return tdrs[_tdrID].maxBid;
    }

    function highestBidderOfTdr (uint _tdrID)
    public
    view
    returns(address)
    {
        return tdrs[_tdrID].highestBidder;
    }


    function testbids (uint _id) 
    public
    view
    returns(uint, string memory)
    {
        return (bidders[msg.sender].bidAmt[_id], tdrs[_id].title);
    }

}

