import CosmosLogo from "@assets/cosmos.svg"
import OsmosisLogo from "@assets/osmosis.svg"
import AkashLogo from "@assets/akash.svg"
import BandLogo from "@assets/band-protocol.svg"
import CryptoComLogo from "@assets/crypto-com.svg"
import JunoLogo from "@assets/juno.svg"
import KavaLogo from "@assets/kava.svg"
import LikecoinLogo from "@assets/likecoin.svg"
import LunaLogo from "@assets/luna.svg"
import EMoneyLogo from "@assets/e-money.svg"
import RegenLogo from "@assets/regen-network.svg"

const logos = {
    cosmos: {
        image: CosmosLogo,
        key: "cosmos",
    },
    osmosis: {
        image: OsmosisLogo,
        key: "osmosis",
    },
    akash: {
        image: AkashLogo,
        key: "akash",
    },
    ["band-protocol"]: {
        image: BandLogo,
        key: "band-protocol",
    },
    ["crypto-com"]: {
        image: CryptoComLogo,
        key: "crypto-com",
    },
    juno: {
        image: JunoLogo,
        key: "juno",
    },
    kava: {
        image: KavaLogo,
        key: "kava",
    },
    likecoin: {
        image: LikecoinLogo,
        key: "likecoin",
    },
    luna: {
        image: LunaLogo,
        key: "luna",
    },
    ["e-money"]: {
        image: EMoneyLogo,
        key: "e-money",
    },
    ["regen-network"]: {
        image: RegenLogo,
        key: "regen-network",
    },
}

export const getNetworkInfo = (key) => {
    return logos[key] ?? {};
};