import React, { Component } from 'react';
import Button from './Button';
class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {
        title: '',
        author: '',
        subject: '',
        likes: 0,
        comments: 0,
        article: '',
      },
    };
  }
  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    this.setState({ blog: updatedBlog });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let blog = {
      title: '',
      author: '',
      subject: '',
      article: '',
    };
    this.setState({ blog });
    this.props.onBlogSubmit(this.state.blog, event);

    event.target.reset();
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
        }}
      >
        <h2>Create Blog:</h2>
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
                  required
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
                  required
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
                required
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
              required
            />
          </div>

          <div className="field">
            <Button type="submit" className="ui button">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default BlogForm;
