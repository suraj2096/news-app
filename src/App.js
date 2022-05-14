import './App.css';
// first we import this package
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import Navbar from './conponents/navbar';
import News from './conponents/news';
import Footer from './conponents/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Notfound from './conponents/notfound';

const  App =()=>{
  const [progress,setprogress] = useState(0);
 const apikey = process.env.REACT_APP_NEWS_API;
 const   pageSize= 6
 const  onLoaderFinished = (progress)=>{
    setprogress(progress);
  }
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={5}
        shadow={true}
        loaderSpeed={600}
        progress={progress}
      />
        <Routes>
          {/* here switch is replaced by routes */}
          <Route path="/"  key="general"element={
       <News Loader={onLoaderFinished} apikey = {apikey} country= "in" category={"general"} pageSize={pageSize}/>} />
       <Route exact path="/business" element={<News Loader={onLoaderFinished} key="business" apikey = {apikey} country= "in" category={"business"} pageSize={pageSize}/>} />

       <Route exact  path="/entertainment" element={<News Loader={onLoaderFinished}  key="entertainment" apikey = {apikey} country= "in" category={"entertainment"} pageSize={pageSize}/>} />
       <Route exact  path="/health" element={<News Loader={onLoaderFinished} key="health" apikey = {apikey} country= "in" category={"health"} pageSize={pageSize}/>} />
       <Route exact  path="/science" element={<News Loader={onLoaderFinished} key="science" apikey = {apikey} country= "in" category={"science"} pageSize={pageSize}/>} />
       <Route exact path="/sports" element={<News Loader={onLoaderFinished}  key="sports" apikey = {apikey} country= "in" category={"sports"} pageSize={pageSize}/>} />
       <Route exact  path="/technology" element={<News Loader={onLoaderFinished} key="technology" apikey = {apikey} country= "in" category={"technology"} pageSize={pageSize}/>} />
       <Route exact path="*" element={<Notfound   message={"404 not exist this page sorry!!!!"}/>} />
       

          {/* <Route path="/">
       <News Loader={onLoaderFinished} apikey = {this.apikey} country= "in" category={"general"}/>
          </Route>
          <Route path="/">
       <News Loader={onLoaderFinished} apikey = {this.apikey} country= "in" category={"general"}/>
          </Route>
          <Route path="/">
       <News Loader={onLoaderFinished} apikey = {this.apikey} country= "in" category={"general"}/>
          </Route> */}
        </Routes>
        {/* we need to send pagesize as props in news component */}
      <Footer  />
      </Router>
      </div>
        
    )
  };
  export default App;
