import {useSubscription} from "@apollo/client";
import {client, PROFILES_SUBSCRIPTION, LINKS_SUBSCRIPTION} from "./apis/apollo";
import {Typography} from "@material-ui/core";

const Counter = () => {
    const profilesResult = useSubscription(PROFILES_SUBSCRIPTION);
    const linksResult = useSubscription(LINKS_SUBSCRIPTION);


    if (profilesResult.loading || linksResult.loading) {
        return <p>Loading...</p>
    }

    if (profilesResult.error || linksResult.error) {
        console.log(profilesResult.error)
        console.log(linksResult.error)
        return <p>Error!</p>
    }

    const profilesCount = profilesResult.data.profile_aggregate.aggregate.count;
    const linksCount = linksResult.data.chain_link_aggregate.aggregate.count;
    return (
        <Typography style={{ lineHeight: "24px" }}>
            So far, <strong>{profilesCount}</strong> profiles have been created{" "}
            and <strong>{linksCount}</strong> external accounts have been connected to them.
        </Typography>
    )
}

export default Counter;