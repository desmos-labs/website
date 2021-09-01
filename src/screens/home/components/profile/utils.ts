import CrossIcon from "@assets/cross.svg";
import IncentivizedIcon from "@assets/incentivized.svg";
import VerificationIcon from "@assets/verification.svg";
import CrossMobileIcon from "@assets/cross-mobile.svg";
import IncentivizedMobileIcon from "@assets/incentivized-mobile.svg";
import VerificationMobileIcon from "@assets/verification-mobile.svg";

const profileItems = [
    {
        image: CrossIcon, 
        mobileImage: CrossMobileIcon,
        title: "Cross-platform",
        details: "Desmos Profile aims to provide proof of identity by linking users’ identities from centralized social networks and different “proof of X” blockchains."
    },
    {
        image: VerificationIcon, 
        mobileImage: VerificationMobileIcon,
        title: "Decentralized verification",
        details: "Verification of social links will be done on Band Protocol through Themis API in a decentralized way."
    },
    {
        image: IncentivizedIcon, 
        mobileImage: IncentivizedMobileIcon,
        title: "Incentivized to become verified",
        details: "We encourage pseudo-anonymous social networking. But if users link more of their profiles to Desmos Profiles, they will be rewarded."
    },
]

export default profileItems;