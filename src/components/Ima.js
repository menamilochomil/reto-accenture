import React, { useEffect, useState } from "react";

function Ima() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=kyUcvjOklQmr7ybRsFAZ1wWsrGNpWyLRbTMhpPhRMF8")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []);
  
  return (
    <div>
      {data.map((x) => 
        <img width={500} src={x.links.download} />
      )}
      
    </div>
  );
}

export default Ima;