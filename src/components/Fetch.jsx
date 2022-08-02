import { useEffect,useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Fetch({ url }) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("locStr") || "[]"));
    const [name, setName] = useState('');
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

    const searchCharacterbyname = () => {
            // e.preventDefault();
            let filteredData = data.filter((obj) => (obj.name.first === name))
            localStorage.setItem("locStr", JSON.stringify(filteredData))
            setData(filteredData);
            console.log(filteredData);
        };
    return (
        <div>
        <div className="search p-5 gap-3">
            <input type="text" className="border-radius input"  onChange={e => setName(e.target.value)} placeholder="User-Name"/>
            <button className="btn" onClick={()=>searchCharacterbyname()}>submit</button>
        </div>
        <div className="card-container justify-content-around d-flex flex-wrap ">
        {
            (data.length > 0) && data.map((details, index) => (
                <div className="d-flex gap-3 card  " key={index}>
                    <img src={details.picture.large} className="m-2 border rounded-circle" />
                    <div className="d-flex flex-column p-5" >
                        <span>{details.name.title}{" "}{details.name.first}{" "}{details.name.last}</span>
                        <span>{details.email}</span>
                        <span>{details.location.country}</span>
                        <span>{details.amount.income}</span>
                    </div>
                </div>
            ))
        }
        {
            (data.length === 0) && <span>No Data</span>
        }
    </div>
    </div>
    
    );
}

export default Fetch;
