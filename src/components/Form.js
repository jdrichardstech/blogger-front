import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      blog: {
        title: '',
        author: '',
        subject: '',
        likes: 0,
        comments: 0,
        article: '',
      },

      blogs: [],
    };
  }
  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    this.setState({ blog: updatedBlog });
    console.log(this.state.blog);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let blog = { title: '', author: '', likes: 0, comments: 0, article: '' };
    let blogState = [...this.state.blogs];

    blogState.unshift(this.state.blog);

    this.setState({ blog, blogs: blogState });
    event.target.reset();
  };

  // handleLikes = () => {
  //   let blogs = [...this.state.blogs];
  //   blogs[0].likes += 1;
  //   this.setState({ blogs });
  // };

  render() {
    return (
      <div
        style={{
          margin: '40px',
        }}
      >
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="equal width fields">
            <div className="field">
              <label>Author:</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Subject</label>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Title</label>
            <div className="ui fluid input">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Article</label>
            <textarea
              placeholder="Write your article..."
              rows="7"
              name="article"
              value={this.state.article}
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <button type="submit" className="ui button">
              Submit
            </button>
          </div>
        </form>
        <hr />
        {this.state.blogs.map((blog, idx) => {
          return (
            <div className="ui card" style={{ width: '75%', padding: '20px' }}>
              <div className="content">
                <div className="header">
                  {idx + 1}: {blog.title}
                </div>
                <br />
                <div className="meta">
                  <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                    Author:
                  </span>{' '}
                  {blog.author}
                </div>
                <div className="meta">
                  <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>
                    Subject:
                  </span>{' '}
                  {blog.subject}
                </div>
                <hr />
                <div className="description">{blog.article}</div>
              </div>

              <div>
                {' '}
                <button
                  onClick={() => {
                    this.onDelete(blog.objectId);
                  }}
                  class="ui primary button"
                  style={{ margin: '10px 15px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Form;
