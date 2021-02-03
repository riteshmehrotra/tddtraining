import React, { useState } from 'react'
import PropTypes from 'prop-types';

const LikeButton = ({ title, threshold }) => {
    let [clicks, setClicks] = useState(0);
    const isDisabled = hasHitThreshold(clicks, threshold);
    const text = () => {
        if (hasHitThreshold(clicks, threshold))
            return messageWithLikes(title, clicks) + ' Threshold hit';
        return messageWithLikes(title, clicks);
    }
    return <button disabled={isDisabled} onClick={() => setClicks(clicks + 1)}>{text()}</button>
}

const hasHitThreshold = (clicks, threshold) => clicks >= threshold ? true : false;
const messageWithLikes = (title, clicks) => `${title} (${clicks})`;


LikeButton.propTypes = {
    title: PropTypes.string.isRequired,
    threshold: PropTypes.number.isRequired
}

export default LikeButton;
