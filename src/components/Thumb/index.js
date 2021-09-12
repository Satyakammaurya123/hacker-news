import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import {Image} from './Thumb.styles'

const Thumb = ({text, newsID, clickable}) => (
    <div>
        {clickable ? (
                <Link to={`/${newsID}`}>
                    {console.log(newsID)}
                    {text}
                </Link>
            ) : (
                {text}
            )}
    </div>
);
Thumb.propTypes = {
    text: PropTypes.string,
    newsId: PropTypes.number,
    clickable: PropTypes.bool
  };
export default Thumb;