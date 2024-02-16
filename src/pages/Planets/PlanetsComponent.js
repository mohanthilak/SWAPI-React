import React, {useState, useEffect} from 'react'
import { FetchPlanetsAPI } from '../../Services/API-Handlers';
import Pagination from "../../components/Pagination/PaginationComponent"
import {NavLink} from "react-router-dom";

const PlanetsComponent = () => {
    const [page, setPage] = useState(1);
    const [planets, setPlanets] = useState([]);

    async function fetchPlanets() {
        try {
          const result = await FetchPlanetsAPI(page);
          console.log(result)
          setPlanets(result?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchPlanets(page)
    }, [page])
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {planets.length ? planets.map((el, i)=>(
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.name}</h1>
                </NavLink>

                <h5>Climate: {el.climate}</h5>
                <h5>Diameter: {el.diameter}</h5>
                <h5>Gravity: {el.gravity}</h5>
              </div>
            )): <p>Loading...</p>}
        </div>
    </div>
  )
}

export default PlanetsComponent