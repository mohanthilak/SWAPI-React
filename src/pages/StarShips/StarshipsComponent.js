import React, {useState, useEffect} from 'react'
import { FetchStartshipsAPI } from '../../Services/API-Handlers';
import Pagination from "../../components/Pagination/PaginationComponent"
import {NavLink} from "react-router-dom";

const StarshipsComponent = () => {
    const [page, setPage] = useState(1);
    const [starships, setStarships] = useState([]);

    async function fetchStarships() {
        try {
          const result = await FetchStartshipsAPI(page);
          console.log(result)
          setStarships(result?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchStarships(page)
    }, [page])
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {starships.length ? starships.map((el, i)=>(
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.name}</h1>
                </NavLink>

                <h5>Cargo Capacity: {el.cargo_capacity}</h5>
                <h5>Consumables: {el.consumables}</h5>
                <h5>Cost in Credits: {el.cost_in_credits}</h5>
              </div>
            )):<p>Loading...</p>}
        </div>
    </div>
  )
}

export default StarshipsComponent