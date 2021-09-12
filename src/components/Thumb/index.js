import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Wrapper,Content} from './Thumb.styles'

const Thumb = ({text, newsID, clickable, author, comments}) => (
    <div>
        {clickable ? (
                <Link to={`/${newsID}`} style={{ textDecoration: 'none' }}>
                    <Wrapper>
                        <h3>{text}</h3>
                        <Content>
                            by: {author} Comments: {comments} 
                        </Content>
                    </Wrapper>
                </Link>
            ) : (
                {text}
            )}
    </div>
);
Thumb.propTypes = {
    text: PropTypes.string,
    newsId: PropTypes.number,
    author: PropTypes.string,
    comments: PropTypes.number,
    clickable: PropTypes.bool
  };
export default Thumb;