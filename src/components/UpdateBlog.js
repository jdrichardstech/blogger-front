import React, { Component } from 'react';
import Button from './Button';
import './UpdateBlog.css';

class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      blog: {
        title: '',
        author: '',
        subject: '',
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
    this.props.handleUpdateSubmit(event, this.state.blog);
    let blog = { title: '', author: '', subject: '', article: '' };
    this.setState({ blog });
  };
  componentDidMount() {
    this.setState({ blog: this.props.blog.data });
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
        }}
      >
        <h2>Update Blog:</h2>
        {!this.state.blog ? (
          <h2>One Moment</h2>
        ) : (
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="equal width fields">
              <div className="field">
                <label>Author:</label>
                <div className="ui fluid input">
                  <input
                    type="text"
                    name="author"
                    defaultValue={this.props.blog.data.author}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <div className="ui fluid input">
                  <input
                    type="text"
                    name="subject"
                    defaultValue={this.props.blog.data.subject}
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
                  name="title"
                  defaultValue={this.props.blog.data.title}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Article</label>
              <textarea
                rows="7"
                name="article"
                defaultValue={this.state.blog.article}
                onChange={this.handleChange}
              />
            </div>
            <div className="button-horizontal">
              <div className="field">
                <Button type="submit" className="ui button">
                  Submit
                </Button>
              </div>
              <div className="field">
                <Button
                  onClick={this.props.onCancel}
                  type="button"
                  className="ui button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default UpdateBlog;
