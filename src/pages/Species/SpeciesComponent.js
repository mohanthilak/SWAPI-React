import React, {useState, useEffect} from 'react'
import {FetchSpeciesAPI } from '../../Services/API-Handlers';
import Pagination from "../../components/Pagination/PaginationComponent"
import {NavLink} from "react-router-dom";

const SpeciesComponent = () => {
    const [page, setPage] = useState(1);
    const [species, setSpecies] = useState([]);

    async function fetchSpecies() {
        try {
          const result = await FetchSpeciesAPI(page);
          console.log(result)
          setSpecies(result?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchSpecies(page)
    }, [page])
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {species.length ? species.map((el, i)=>(
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.name}</h1>
                </NavLink>

                <h5>Language: {el.language}</h5>
                <h5>Average Height: {el.average_height}</h5>
                <h5>Classification: {el.classification}</h5>
              </div>
            )): <p>Loading...</p>}
        </div>
    </div>
  )
}

export default SpeciesComponent