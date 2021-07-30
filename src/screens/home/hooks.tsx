// import {
//   useEffect, useState,
// } from 'react';
// import axios from 'axios';
// // import { Network } from '@models';
// import { formatNetworkData } from './utils';

// export const useHomeHook = () => {
//   const NETWORK_LIST_API = 'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

//   const [networks, setNetworks] = useState<Network[]>([]);

//   useEffect(() => {
//     const getNetworkList = async () => {
//       let data = [];
//       try {
//         const results = await axios.get(NETWORK_LIST_API);
//         data = results?.data ?? [];
//       } catch (error) {
//         console.error(error);
//       }
//       const formattedData = data
//         .map((x) => Network.fromJson(x));
//       setNetworks(formattedData);
//     };
//     getNetworkList();
//   }, []);

//   return {
//     networks: formatNetworkData(networks),
//   };
// };
