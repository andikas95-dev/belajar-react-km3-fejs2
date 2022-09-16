import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const fetchData = async () => {
    axios({
      method: 'GET',
      url: `http://localhost:3001/posts/${params.id}`,
    })
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className={styles.button}
        id={styles.buttonId}
      >
        back
      </button>
      <h1>{data.title}</h1>
    </>
  );
}
