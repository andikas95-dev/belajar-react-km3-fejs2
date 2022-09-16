import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetchData, setRefetchData] = useState(true);
  const [search, setSearch] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);

    // const param = new URLSearchParams(params).toString();
    axios({
      method: 'GET',
      url: `https://fake-api-coba.herokuapp.com/users${location.search}`,
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
  }, [refetchData, location.search]);

  const handleDelete = async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `https://fake-api-coba.herokuapp.com/users/${id}`,
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

      <input
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (search) {
            navigate(`?first_name=${search}`);
          } else {
            navigate(`/`);
          }
          setRefetchData(true);
        }}
      >
        Search
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item) => (
          <>
            <h2 key={item.id}>
              {item.first_name}
              <button
                style={{
                  marginLeft: '10px',
                }}
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                detail
              </button>
              <button
                style={{
                  marginLeft: '10px',
                }}
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </h2>
          </>
        ))
      )}
    </div>
  );
}

export default App;
