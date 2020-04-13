import React from 'react';
import SingleBlog from './SingleBlog';
let searchIt = (term) => (item) =>
  item.subject.toLowerCase().includes(term.toLowerCase());

const Blogs = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '30px',
      }}
    >
      <h2>Blogs:</h2>

      {props.blogs ? (
        props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
          return (
            <SingleBlog
              blog={blog}
              key={blog.title}
              idx={idx}
              onSave={props.onSave}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
            />
          );
        })
      ) : (
        <h2>'Loading...'</h2>
      )}
    </div>
  );
};
export default Blogs;
