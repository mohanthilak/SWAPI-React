import React, { useEffect, useState } from 'react'
import Pagination from "../../components/Pagination/PaginationComponent"
import { FetchPeoplesAPI } from '../../Services/API-Handlers'
import {NavLink} from "react-router-dom";

const People = () => {
    const [page, setPage] = useState(1);
    const [people, setPeople] = useState([]);

    async function fetchPeople() {
        try {
          const result = await FetchPeoplesAPI(page);
          console.log(result)
          setPeople(result?.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchPeople(page)
    }, [page])
    
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {people.length ? people.map((el, i)=>(
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.name}</h1>
                </NavLink>

                <h5>Birth Year: {el.birth_year}</h5>
                <h5>Eye Colour: {el.eye_color}</h5>
                <h5>Height: {el.height}</h5>
              </div>
            )): <p>Loading...</p>}
        </div>
    </div>
  )
}

export default People