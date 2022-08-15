import tokens from '@/_generated/tokens/tokens-etc.json';
import contracts from '@/_generated/contracts/contract-abi-etc.json';
import telos from '@/assets/images/networks/telos.svg';

export default {
  name: 'TLOS',
  name_long: 'Telos',
  homePage: 'https://telos.net/',
  blockExplorerTX: 'https://teloscan.io/tx/[[txHash]]',
  blockExplorerAddr: 'https://teloscan.io/address/[[address]]',
  chainID: 40,
  tokens: tokens,
  contracts: contracts,
  icon: telos,
  currencyName: 'TLOS',
  isTestNetwork: false,
  isEthVMSupported: {
    supported: false,
    url: null,
    blockExplorerTX: '',
    blockExplorerAddr: '',
    websocket: null
  },
  coingeckID: 'telos',
  gasPriceMultiplier: 1
};
