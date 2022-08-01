import { useEffect,useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

function Fetch({ url }) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("locStr") || "[]"));
    const [name, setName] = useState('');
    const [filteredData, setFilteredData] = useState('')
    useEffect(() => {
        axios.get(url).then(result => {
            result.data.results.forEach(element =>
                {
                    element.amount ={"income" : "$10000"};
                });
                if(data == null){
                    setData(result.data.results);
                    localStorage.setItem("locStr", JSON.stringify(result.data.results));
                }
                else{
                    setData(data);
                }
            })
    }, []);

    const searchCharacterbyname = (e) => {
            e.preventDefault();
            setFilteredData = data.filter((obj) => (obj.name === data.name))
            localStorage.setItem("locStr", JSON.stringify(filteredData))
            setData(filteredData);
        };
    return (
    <div className="d-flex flex-column gap-5">
        <form onSubmit={searchCharacterbyname}>
            <input type="text"  onChange={e => setName(e.target.value)} placeholder="User-Name"/>
            <input type="submit"/>
        </form>
        {
            (data.length > 0) && data.map((details, index) => (
                <div className="d-flex gap-3 flex-row" key={index}>
                    <img src={details.picture.large} className="p-2" /><br />
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
            (filteredData.length > 0) && filteredData.map((details, index) => (
                <div className="d-flex gap-3 flex-row" key={index}>
                    <img src={details.picture.large} className="p-2" /><br />
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
            (filteredData.length === 0) && <span>No Data</span>
        }
        {
            (data.length === 0) && <span>No Data</span>
        }
    </div>
    );
}

export default Fetch;
