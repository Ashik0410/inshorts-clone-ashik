import React from 'react';
import './App.css';
import NewsContent from './Component/NewsContent/NewsContent';
import {useState} from 'react';
import Navbar from './Component/NavigationBar/Navbar';
import axios from 'axios';
import ApiKey from './Component/config';
import Category from './Component/Category';
import {useEffect} from 'react'; 
import Footer from './Component/Footer/Footer'

function App() {
  const[Category,setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const[newsResult, setNewsResult] = useState();
  // const[loadmore, setLoadmore] = useState(20);


  const newsApi = async() => {
    try{
      // const Proxyurl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${ApiKey}&category=${Category}`);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  },[newsResult, Category]);
  return (
    <div className="App">
    <Navbar setCategory={setCategory}/>
    <NewsContent newsArray={newsArray} newsResult={newsResult} />
    <Footer />
    </div>

  );
}

export default App;
