import { useState, useEffect } from 'react';
// import List from './List';
import Form from './Form';
import Table from './Table';
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
        setIsLoad(true)
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} isLoad={isLoad} />
    </div>
  );
}

export default App;
