import { useEffect,useState } from "react";
import axios from "axios";


function Fetch({ url }) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("locStr") || "[]"));

    useEffect(() => {
        axios.get(url).then(result => {
            result.data.results.forEach(element =>
                {
                    element.income ="$10000"
                });
            setData(result.data.results);
            localStorage.setItem("locStr", JSON.stringify(result.data.results));
        })
    }, []);
    return (
    <div >
        {
            (data.length > 0) && <span>There is data</span>
        }
        {
            (data.length === 0) && <span>No Data</span>
        }
    </div>
    );
}

export default Fetch;
