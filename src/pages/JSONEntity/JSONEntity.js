import React, { useEffect, useState } from 'react'
import { FetchEntityAPI } from '../../Services/API-Handlers';
import { useLocation } from 'react-router-dom';

const JSONEntity = () => {
  const [entity, setEntity] = useState({})
  const location = useLocation();
  const {url} = location.state;

  async function fetchEntity() {
    try {
      const result = await FetchEntityAPI(url);
      setEntity(result);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
useEffect(()=>{
    fetchEntity()
}, [])

  return (
    <div>{entity ?  <pre>{JSON.stringify(entity, null, 2)}</pre>: <p>Empty</p>}</div>
  )
}

export default JSONEntity