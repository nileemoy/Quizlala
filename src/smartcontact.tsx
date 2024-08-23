import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'

const USDTAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const USDTAbi =  [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_quizId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_answer",
                    "type": "string"
                }
            ],
            "name": "answerQuiz",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_question",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_correctAnswerHash",
                    "type": "string"
                }
            ],
            "name": "createQuiz",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositFunds",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_newRewardAmount",
                    "type": "uint256"
                }
            ],
            "name": "setRewardAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_rewardAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "withdrawTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "checkBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_quizId",
                    "type": "uint256"
                }
            ],
            "name": "checkQuiz",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLatestQuizId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "quizCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "quizzes",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "question",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "correctAnswerHash",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rewardAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userBalances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]


function Components() {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  async function getBalance() {
    if (!isConnected) throw Error('User disconnected')

    const ethersProvider = new BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()
    // The Contract object
    const USDTContract = new Contract(USDTAddress, USDTAbi, signer)
    const USDTBalance = await USDTContract.balanceOf(address)

    console.log(formatUnits(USDTBalance, 18))
  }

  return <button onClick={getBalance}>Get User Balance</button>
}