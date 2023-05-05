![D-Ender-Ethereum-dApp](https://socialify.git.ci/akash-skj/D-Ender-Ethereum-dApp/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Fi.ibb.co%2Ff4zDpLt%2Flogo2.png&name=1&pattern=Plus&pulls=1&stargazers=1&theme=Dark)

# D-Ender 
The Decentralized Tender Management System is a web-based platform built using Vite React and Ethereum blockchain technology. The platform provides a secure, transparent, and tamper-proof tender management process, allowing organizations to conduct their procurement process in a decentralized and efficient way.

The system uses smart contracts, which are self-executing computer programs, to manage the tender process. This ensures that the process is transparent, as all parties involved in the tender process can see the progress of the tender, bids, and other related information.

### Built With
<div align="center">
	<img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=646CFF" alt="Vite logo">  &nbsp;&nbsp;     
	<img src="https://img.shields.io/badge/-Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity logo">&nbsp;&nbsp;
	<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React logo">&nbsp;&nbsp;
	<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS logo">&nbsp;&nbsp;

</div>

## Installing / Getting started

### Prerequisites

 - [Metamask Wallet](https://metamask.io/)
 - [Truffle](https://www.trufflesuite.com/truffle)
 - [Ganache](https://trufflesuite.com/ganache/)
 - [Node.js](https://nodejs.org)

### Setting up Dev

1. Clone the project using git :
```shell
git clone https://github.com/akash-skj/D-Ender-Ethereum-dApp.git
```
2. Download and install **NodeJS**

   Download and install NodeJS from [here](https://nodejs.org/en/download/ "Go to official NodeJS download page.").

3. Install **Truffle CLI** using NPM:
```shell
npm i truffle
```
4. Download and install **Ganache** 
 
	Download Ganache from [here](https://trufflesuite.com/ganache/).
	
5. Change directory to Client and install all packages using NPM
```shell
cd src/client
npm install
```

### Deploying

1. Open Ganache and Quickstart a Local Ethereum Blockchain.

2.  Configure Ganache Network in Metamask wallet.
3.   Migrate the smart contract to the local Etherrum blockchain using Truffle:
```shell
truffle migrate
```
4. Change directory to Client and deploy it in local host :
```shell
npm run dev
```
>The dApp will be hosted in http://127.0.0.1:5173/ , connect your wallet and start making transactions. All those transactions can be viewed in the local Ganache GUI.



### Building

To build the project, change the directory to Client and run the deploy command:

```shell
cd src/client
npm run build
```

Build files will be saved in `src/client/dist`.
***


