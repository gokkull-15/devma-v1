import Web3 from "web3";
import abi from "./abi/ABI.json";

const CONTRACT_ADDRESS = "0x2734A2d50cd655052a23d9B9D3A0f25A01e60d07"; // Replace with your smart contract address

// Initialize web3 and the contract
export const initializeWeb3 = async () => {
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      return { web3, account };
    } else {
      throw new Error("Ethereum wallet not found.");
    }
  } catch (error) {
    console.error("Error initializing web3:", error);
    throw error;
  }
};

// Store hackathon name, description, and date
export const storeHackathonData = async (hackathonData) => {
  try {
    const { web3, account } = await initializeWeb3();
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

    await contract.methods
      .storeLinks(
        hackathonData.name,
        hackathonData.description,
        hackathonData.date
      )
      .send({ from: account });

    console.log("Hackathon data stored successfully!");
  } catch (error) {
    console.error("Error storing hackathon data:", error);
    throw error;
  }
};

// Retrieve hackathon name, description, and date
export const getHackathonData = async () => {
  try {
    const { web3, account } = await initializeWeb3();
    const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

    const userData = await contract.methods.getLinks(account).call();

    return {
      name: userData.HackathonName,
      description: userData.Description,
      date: userData.Date,
    };
  } catch (error) {
    console.error("Error fetching hackathon data:", error);
    throw error;
  }
};
