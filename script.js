const provider = new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc");
const contractAddress = "0xF5b809431931bfD07b6784C3888e86c8d21FA861";
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getAvaxUsdPrice",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getDotUsdPrice",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getLinkUsdPrice",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getMaticUsdPrice",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
];

const contract = new ethers.Contract(contractAddress, abi, provider);

async function getConversionRate() {
    const currencyPair = document.getElementById("currencyPair").value;
    let result;
    if (currencyPair === "AVAX/USD") {
        result = await contract.getAvaxUsdPrice();
    } else if (currencyPair === "DOT/USD") {
        result = await contract.getDotUsdPrice();
    } else if (currencyPair === "MATIC/USD") {
        result = await contract.getMaticUsdPrice();
    } else if (currencyPair === "LINK/USD") {
        result = await contract.getLinkUsdPrice();
    }

    document.getElementById("conversionRate").innerText = result.toString();
}
