import React, { Component } from "react";
import Blogitems from "./Blogitems";
import Spinner from "./Spinner"; // Import Spinner component

import "./Blogitems.css";
import "./BlogsList.css";
class BlogsList extends Component {
  state = {
    blogData: [],
    isLoading: true, // Add isLoading state
    searchQuery: " ",
  };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs");
    const data = await response.json();
    // console.log(data);
    const updatadata = data.map((eachitem) => ({
      id: eachitem.id,
      title: eachitem.title,
      imageUrl: eachitem.image_url,
      avatarUrl: eachitem.avatar_url,
      author: eachitem.author,
      topic: eachitem.topic,
    }));
    // console.log(updatadata);

    this.setState({ blogData: updatadata, isLoading: false }); // isLoading  false after data is fetched
  };

  handlesearchinput = (Event) => {
    this.setState({ searchQuery: Event.target.value });
  };
  render() {
    const { blogData, isLoading, searchQuery } = this.state;

    const filteredData = blogData.filter((item) =>
      item.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sample blog data, uncomment if needed for testing
    // const blogData = [
    //   {
    //     id: 1,
    //     title: "Blog 1",
    //     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png",
    //     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
    //     author: "Author Name",
    //     topic: "React.js",
    //   },
    //   {
    //     id: 2,
    //     title: "Blog 2",
    //     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png",
    //     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
    //     author: "Author Name",
    //     topic: "React.js",
    //   },
    // ];

    return (
      <>
        {isLoading ? (
          <Spinner /> // spinner loading
        ) : (
          <div className="table-container">
            <div className="input-filteredData-searchQuery">
              <label className="searchQuery">Search</label>
              <input
                className="search"
                type="text"
                placeholder="Enter Name"
                value={searchQuery}
                onChange={this.handlesearchinput}
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th>Topic image</th>
                  <th>Topic</th>
                  <th>Title</th>
                  <th>Author image</th>
                  <th>Author name</th>
                </tr>
              </thead>
              <tbody>
                {/* {blogData.map((item) => (
                  <Blogitems blogData={item} key={item.id} />
                ))} */}
                {filteredData.map((item) => (
                  <Blogitems blogData={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

export default BlogsList;
