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
    axios({
      method: 'GET',
      url: ' http://localhost:3001/posts',
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

  const handleDelete = async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: ` http://localhost:3001/posts/${id}`,
      });
      setRefetchData(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={() => setRefetchData(true)}>refetch</button>
      <h1>DATA TAMU</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item) => (
          <>
            <h6 key={item.id}>
              {item.title}
              <button
                style={{
                  marginLeft: '10px',
                }}
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </h6>
          </>
        ))
      )}
    </div>
  );
}

export default App;
