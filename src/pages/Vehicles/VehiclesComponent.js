import React, {useState, useEffect} from 'react'
import { FetchVehicalsAPI } from '../../Services/API-Handlers';
import Pagination from "../../components/Pagination/PaginationComponent"
import {NavLink} from "react-router-dom";

const VehiclesComponent = () => {
    const [page, setPage] = useState(1);
    const [vehicles, setVehicles] = useState([]);

    async function fetchVehicles() {
        try {
          const result = await FetchVehicalsAPI(page);
          console.log(result)
          setVehicles(result?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchVehicles(page)
    }, [page])
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {vehicles.length > 0? vehicles.map((el, i)=>(
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.name}</h1>
                </NavLink>

                <h5>Model: {el.model}</h5>
                <h5>Passengers: {el.passengers}</h5>
                <h5>Cost in Credits: {el.cost_in_credits}</h5>
              </div>
            )): <p>Loading...</p>}
        </div>
    </div>
  )
}

export default VehiclesComponent