import { useEffect } from "react";
import axios from "axios";

function Fetch({ url }) {
    useEffect(() => {
        axios.get(url).then(result => {
            console.log(result.data.results);
        })
    }, []);

    console.log(url);
    return <div>Fetch</div>;
}

export default Fetch;
