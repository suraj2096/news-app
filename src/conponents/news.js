// this is a news component

import React, { useState, useEffect } from "react";
import Newsitem from "./newsitem";
import Spinner from "./spinner";
import propsTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// now we create a class based component
const News = (props) => {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, setTotalResults] = useState(undefined);

  // now we will use a lifecycle mehtod that will call or execute after render() method
  const updatedata = async () => {
    props.Loader(10);
    setloading(true);
    props.Loader(30);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
    );
    props.Loader(60);

    let fetchData = await data.json();
    props.Loader(90);
    setarticle(fetchData.articles);
    setTotalResults(fetchData.totalResults);
    setloading(false);
    props.Loader(100);
  };

  const fetchMoreData = async () => {
    setpage(page + 1);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
    );
    let fetchData = await data.json();
    // console.log(fetchData.totalResults);
    // console.log(fetchData.articles)
    setarticle(article.concat(fetchData.articles));
    setTotalResults(fetchData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    updatedata();
  });

  // write code for next
  // let next =async ()=>{
  //     this.setState({page: this.state.page+1});
  //     this.updatedata();
  //      }

  // write code for previous
  //  let previous = async ()=>{
  //     this.setState({page: this.state.page-1});
  //     this.updatedata();
  // };
  // console.log(this.state.article['articles']);
  return (
    <div>
      <div className="container mt-3">
        <div className="text-center">
          <h1> Daily Top and Crisp news </h1> {loading && <Spinner />}
        </div>{" "}
        
          {!loading && <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="gridContainer mt-4">
              {" "}
              {/* here below if loading is false then below code will apper hoa jayage  */}{" "}
              {article.map((element, index) => {
                return (
                  <div
                    className=" item item1"
                    style={{ position: "relative" }}
                    key={`${element.url}`}
                  >
                    <Newsitem
                      title={element.title}
                      desc={element.description}
                      img={element.urlToImage}
                      uniqueurl={element.url}
                      author={element.author}
                      time={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
}
      </div>
    </div>
  );
};

// defalutProps is a property to set the default value of prop

News.defalutProps = {
  pageSize: 5,
  country: "in",
  category: "science",
  search: "hello",
};
// what is the type of the props
News.propsTypes = {
  pageSize: propsTypes.number,
  country: propsTypes.string,
  category: propsTypes.string,
  search: propsTypes.string,
};
export default News;
