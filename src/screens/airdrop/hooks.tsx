import { useState, useEffect } from "react";
import axios from "axios";

export const useStatHook = () => {
  const [error, setError] = useState(null);
  const [claimedDSM, setClaimedDSM] = useState(null);
  const [totalDSM, setTotalDSM] = useState(null);
  const [connectedAddresses, setConnectedAddresses] = useState(null);
  const [totalAddresses, setTotalAddresses] = useState(null);
  const [createdProfiles, setCreatedProfiles] = useState(null);
  const [chainLinks, setChainLinks] = useState(null);

  const getStat = async () => {
    try {
      const result = await axios.get(
        `https://api.airdrop.desmos.network/stats`
      );
      const { data } = result;
      const {
        claimed_dsm,
        total_dsm,
        connected_addresses,
        total_addresses,
        created_profiles,
        chain_links,
      } = data;
      setClaimedDSM(claimed_dsm);
      setTotalDSM(total_dsm);
      setConnectedAddresses(connected_addresses);
      setTotalAddresses(total_addresses);
      setCreatedProfiles(created_profiles);
      setChainLinks(chain_links);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  useEffect(() => {
    try {
      getStat();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return {
    error,
    claimedDSM,
    totalDSM,
    connectedAddresses,
    totalAddresses,
    createdProfiles,
    chainLinks,
  };
};
