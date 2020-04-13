import React from 'react';
import Button from './Button';

const SingleBlog = ({ blog, idx, onDelete, onSave, onUpdate }) => {
  return (
    <div className="ui card" style={{ width: '75%', padding: '20px' }}>
      <div className="content">
        <div className="header">
          {idx + 1}: {blog.title}
        </div>
        <br />
        <div className="meta">
          <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>Author:</span>{' '}
          {blog.author}
        </div>
        <div className="meta">
          <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>Subject:</span>{' '}
          {blog.subject}
        </div>
        <hr />
        <div className="description">{blog.article}</div>
      </div>

      <div>
        {' '}
        <Button
          type="text"
          style={{ margin: '10px 15px' }}
          onClick={() => {
            // console.log(blog._id);
            onDelete(blog._id);
            // onDelete(blog.objectId);
          }}
          className="ui violet button"
          blog={blog}
        >
          Delete
        </Button>
        {/* <Button
          type="text"
          style={{ margin: '10px 15px' }}
          onClick={onSave}
          className="ui green button"
          blog={blog}
        >
          Save
        </Button> */}
        <Button
          type="text"
          style={{ margin: '10px 15px' }}
          onClick={(event) => {
            console.log('clicked onupdate');
            onUpdate(blog._id, event);
            // onDelete(blog.objectId);
          }}
          className="ui green button"
          blog={blog}
        >
          Update
        </Button>
        {/* <button
          onClick={() => {
            onDelete(blog.objectId);
          }}
          class="ui primary button"
          style={{ margin: '10px 15px' }}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};
export default SingleBlog;
