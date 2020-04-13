import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Blogs from './Blogs';
import Header from './Header';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpdateBlog';
import blogs from '../data';
import './App.css';

// function searchIt(term) {
//   return function(item) {
//     return item.subject.toLowerCase().includes(term.toLowerCase());
//   };
// }
let searchIt = (term) => (item) =>
  item.subject.toLowerCase().includes(term.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = { blogs: [], searchTerm: '', blog: {}, toggle: true };

    this.onDelete = this.onDelete.bind(this);
  }

  loadBlogs = () => {
    axios.get('http://localhost:8080/blogs').then((blogs) => {
      this.setState({ blogs: blogs.data });
    });
    // axios.get('https://cim-blogger.herokuapp.com/blogs').then((blogs) => {
    //   this.setState({ blogs: blogs.data });
    // });
  };

  loadBlog = (id) => {
    //JD DO without promise first to demo needing it
    return new Promise((resolve, reject) => {
      // console.log(id);
      axios.get(`http://localhost:8080/blog/${id}`).then((blog) => {
        this.setState({ blog });
        resolve(blog);
      });
    });
  };

  componentDidMount() {
    this.loadBlogs();
    // console.log('mount');
    // axios.get('http://localhost:8080/blogs').then((blogs) => {
    //   this.setState({ blogs: blogs.data });
    // });
    // this.setState({ blogs });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('updater');
  //   if (prevState.blogs.length !== this.state.blogs.length) {
  //     axios.get('http://localhost:8080/blogs').then((blogs) => {
  //       this.setState({ blogs: blogs.data });
  //     });
  //   }
  // }

  onDelete(id, event) {
    axios.delete(`http://localhost:8080/blog/${id}`).then(() => {
      this.loadBlogs();
    });
    // axios.delete(`https://cim-blogger.herokuapp.com/blog/${id}`).then(() => {
    //   this.loadBlogs();
    // });
    // const updatedBlogs = this.state.blogs.filter(
    //   (item) => item.objectId !== id
    // );

    // this.setState({ blogs: updatedBlogs });
  }

  onUpdate = (id, event) => {
    //JD do without promise for loadblog so that it doesn't work and they see

    this.loadBlog(id).then((blog) => {
      // console.log('Blog to update', this.state.blog);
      this.setState({
        toggle: false,
        blog,
      });
    });

    // console.log(event);
    // console.log(id);
  };

  onSave = () => {
    console.log('Clicked OnSave Button');
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onCancel = () => {
    this.setState({
      toggle: true,
    });
  };

  handleUpdateSubmit = (event, blog) => {
    event.preventDefault();
    this.setState({ toggle: true });
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    axios
      .put(`http://localhost:8080/blog/${blog._id}`, blog, axiosConfig)
      .then(() => {
        this.loadBlogs();
      });
  };

  handleBlogSumbit = (blog, event) => {
    event.preventDefault();
    let blogState = [...this.state.blogs];
    blogState.unshift(blog);

    this.setState({
      blogs: blogState,
    });
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
    axios.post('http://localhost:8080/blog', blog, axiosConfig);
    // axios.post('https://cim-blogger.herokuapp.com/blog', blog, axiosConfig);
  };

  render() {
    return (
      <>
        {/* <header
          style={{
            height: '160px',
            background: 'blue',
            paddingTop: '50px',
            color: 'white'
          }}
        >
          <h1 style={{ textAlign: 'center', fontSize: '3em' }}>Blogger</h1>
        </header> */}
        <Header />
        <div
          className="myContainer"
          // style={{
          //   marginTop: '100px',
          //   paddingLeft: '30px',
          //   display: 'flex',
          //   justifyContent: 'flex-start',
          //   alignItems: 'flex-start',
          //   flexDirection: 'row'
          // }}
        >
          {' '}
          <div
            className="myWrapper"
            // style={{
            //   width: '100%',
            //   display: 'flex',

            //   justifyContent: 'space-around',
            //   alignItems: 'space-between',
            //   flexDirection: 'column'
            // }}
          >
            <Search
              onChange={this.handleSearchChange}
              searchTerm={this.state.searchTerm}
            />
            <hr style={{ width: '100%', color: 'black', margin: '50px 0' }} />
            {this.state.toggle ? (
              <CreateBlog onBlogSubmit={this.handleBlogSumbit} />
            ) : (
              <UpdateBlog
                blog={this.state.blog}
                handleUpdateSubmit={this.handleUpdateSubmit}
                onCancel={this.onCancel}
              />
            )}
          </div>
          <Blogs
            onDelete={this.onDelete}
            onSave={this.onSave}
            blogs={this.state.blogs}
            searchIt={searchIt}
            searchTerm={this.state.searchTerm}
            onUpdate={this.onUpdate}
          />
        </div>
      </>
    );
  }
}

export default App;
