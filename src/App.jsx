import React, { useEffect, useState } from 'react';
import './App.css';
import PerkenalanDiri from './pages/PerkenalanDiri';
import PerkenalanDiriClass from './pages/PerkenalanDiriClass';
import Button from './pages/Button';
import Aroyan from './pages/Aroyan';
import axios from 'axios';

function App() {
  const nilaiAwal = {
    nama: 'Lim Felicia',
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetchData, setRefetchData] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => {
    //     setData(res?.data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setLoading(false);
    //     setRefetchData(false);
    //   });
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        setRefetchData(false);
      });
  };
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setData(res?.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //     setRefetchData(false);
  //   }
  // };

  useEffect(() => {
    if (refetchData) {
      fetchData();
    }
  }, [refetchData]);

  return (
    <div className="App">
      <button onClick={() => setRefetchData(true)}>refetch</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item) => <h6 key={item.id}>{item.title}</h6>)
      )}
    </div>
  );
}

export default App;
