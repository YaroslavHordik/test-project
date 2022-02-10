import React from 'react';
import axios from 'axios';
import styles from './Articles.module.scss';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';

function Articles() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //можно написать const data без деструктуризации
        // в setPost вывести setPost(data.data)
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Articles</h1>

      {loading && 'Загрузка...'}

      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <a href="/">Read now</a>
        </div>
      ))}
    </div>
  );
}

export default Articles;
