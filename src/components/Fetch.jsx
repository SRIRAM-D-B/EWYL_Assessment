import { useEffect,useState } from "react";
import axios from "axios";


function Fetch({ url }) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("locStr") || "[]"));

    useEffect(() => {
        axios.get(url).then(result => {
            result.data.results.forEach(element =>
                {
                    element.amount ={"income" : "$10000"};
                });
            setData(result.data.results);
            localStorage.setItem("locStr", JSON.stringify(result.data.results));
        })
    }, []);
    return (
    <div >
        {
            (data.length > 0) && data.map((details, index) => (
                <div  key={index}>
                    <img src={details.picture.large}  /><br />
                    <div >
                        <span>{details.name.title}{" "}{details.name.first}{" "}{details.name.last}</span>
                        <span>{details.email}</span>
                        <span>{details.location.country}</span>
                        <span>{details.income}</span>
                    </div>
                </div>
            ))
        }
        {
            (data.length === 0) && <span>No Data</span>
        }
    </div>
    );
}

export default Fetch;
