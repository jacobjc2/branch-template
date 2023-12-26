import React, { useState, useEffect } from 'react';


export const ManufacturersPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/test?prod=prod_bearings&branch=Template')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    );
}