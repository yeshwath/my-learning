import React ,{useEffect, useState} from "react";
import axios from "axios";



const CovidApp = () => {
  const [data,setData] =   useState([])
  
  useEffect(() => {
    axios.get("http://data.covid19india.org/data.json")
      .then((response) => {
        setData(response.data.statewise);
      })
      .catch((error) => 
      {
        console.error("error");
      });
  }, []);
  
  console.log(data)
   return <div>
    <center>
      <h1>
      hello Covid App

      </h1>
      <table className="table">
        <thead class="table-dark">
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>LastUpdate</th>



          </tr>

        </thead>
        <tbody>

          {
            data.map(item=>{
              return(
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </center>

    </div>;
};

export default CovidApp;
