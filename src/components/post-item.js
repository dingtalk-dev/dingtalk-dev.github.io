import React from 'react';
import { Link } from 'gatsby';

import FormattedDate from './formatted-date';
import './post-item.css';

function PostItem({ title, date, path, author, body }) {
  return (
    <div className="post-item">
      <h1><Link to={path}>{title}</Link></h1>
      <FormattedDate dateString={date} />
      <span>・</span>
      <span>{author}</span>
      <p>{body}</p>
    </div>
  );
}

export default PostItem;