import React, { useEffect } from 'react';
import Header from './partials/Header/Header';

export default function Home() {
  const [nama, setNama] = React.useState();
  const [reset, setReset] = React.useState(false);

  useEffect(() => {
    setNama('Dinda');
  }, []);

  useEffect(() => {
    if (reset) {
      setNama('Paimin');
      setReset(false);
    }
  }, [reset]);

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {JSON.stringify(reset)}
      <Header nama={nama} />
      <input
        placeholder="tolong diisi"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <button onClick={() => setReset(!reset)}>reset</button>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refetchData, setRefetchData] = useState(true);

//   const fetchData = async () => {
//     setLoading(true);
//     axios({
//       method: 'GET',
//       url: ' http://localhost:3001/posts',
//     })
//       .then((res) => {
//         setData(res?.data);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         setLoading(false);
//         setRefetchData(false);
//       });
//   };
//   // const fetchData = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   //     setData(res?.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     setLoading(false);
//   //     setRefetchData(false);
//   //   }
//   // };

//   useEffect(() => {
//     if (refetchData) {
//       fetchData();
//     }
//   }, [refetchData]);

//   const handleDelete = async (id) => {
//     try {
//       await axios({
//         method: 'DELETE',
//         url: `http://localhost:3001/posts/${id}`,
//       });
//       setRefetchData(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={() => setRefetchData(true)}>refetch</button>
//       <h1>DATA TAMU</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         data?.map((item) => (
//           <>
//             <h6 key={item.id}>
//               {item.title}
//               <button
//                 style={{
//                   marginLeft: '10px',
//                 }}
//                 onClick={() => handleDelete(item.id)}
//               >
//                 delete
//               </button>
//             </h6>
//           </>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;
