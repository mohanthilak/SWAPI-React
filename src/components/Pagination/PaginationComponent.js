import React, { useEffect, useState } from 'react'
import "./pagination-component.css"
const Pagination = ({page, setPage}) => {
  const [pages, setPages] = useState([])

  useEffect(()=>{
    const arr = [page, page+1, page+2, page+3, page+4, page+5] 
    setPages([...arr])
  }, [page])

  const handlePrev= (e)=>{
    e.preventDefault();
    if(page>1)
    setPage(p=>p-1)
  }
  const handleNext= (e)=>{
    e.preventDefault();
    console.log("hahas")
    setPage(p=>p+1)
  }

  return (
    <div className='pagination-container'>
      <div className='pagination-container-main'>
        <button onClick={handlePrev} className='pagination-buttons'>&lt;Prev</button>
          <p>
            {page != 1 ? <span onClick={(e)=>{e.preventDefault();
               setPage(page-1)}}>{page-1}, </span> : null}
            {pages?.length && pages.map((el, i)=> (
              <span onClick={(e)=>{e.preventDefault(); setPage(el)}}  key={i}> {el}, </span>
            ))}
          </p>
        <button onClick={handleNext} className='pagination-buttons'>Next&gt;</button>
      </div>
    </div>
  )
}

export default Pagination