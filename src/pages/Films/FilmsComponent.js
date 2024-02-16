import React, { useEffect, useState } from 'react'
import Pagination from "../../components/Pagination/PaginationComponent"
import { FetchFilmsAPI } from '../../Services/API-Handlers'
// import "./films-component.css"
import {NavLink} from "react-router-dom";

const FilmsComponent = () => {
    const [page, setPage] = useState(1);
    const [films, setFilms] = useState([]);

    async function fetchFilms() {
        try {
          const result = await FetchFilmsAPI(page);
          console.log({result})
          if(result && result.results)
          setFilms(result.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
      fetchFilms(page)
    }, [page])
    
  return (
    <div className="entities-container">

        {/* Pagination component */}
        <Pagination page={page} setPage={setPage} />

        <div className='entities-container-main'>
            {films.length ? films.map((el, i)=>( 
              <div key={i} className='entities-container-entity-div'>
                <NavLink to={{pathname:"entity", state: {url: el.url}}}>
                  <h1>{el.title}</h1>
                </NavLink>

                <h5>Producer: {el.producer}</h5>
                <h5>Director: {el.director}</h5>
                {/* <p>Plot: {el.opening_crawl}</p> */}
              </div>
            )) : <p>Loading...</p>}
        </div>
    </div>
  )
}

export default FilmsComponent