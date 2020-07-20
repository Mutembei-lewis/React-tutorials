import React,{useState, useEffect} from "react";
const fetchURL = "https://type.fit/api/quotes";
const getItems = () => fetch(fetchURL).then(res => res.json());

function Api() {
    const [items, setItems] = useState();
  
    useEffect(() => {
      getItems().then(data => setItems(data));
    }, []);
  
    return (
      <div>
        {items
          ? items.map(item => {
              return <div key={item.text}>{item.author}</div>;
            })
          : "Loading..."}
      </div>
    );
  }
  export default Api;