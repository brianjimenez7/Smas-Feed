import React, { Component } from 'react'
// import ShareLink from 'react-twitter-share-link'
import { TwitterShareButton, ShareCounts, generateShareIcon,TwitterIcon } from 'react-share';

export default class twitter_share extends Component {
  render() {
    
    return (
//       <div>
//         <ShareLink link=''>
//    {link => (
//       <a href={link} target='_blank'>Share this on Twitter</a>
//    )}
// </ShareLink>
//       </div>

<TwitterShareButton
        url={'shareUrl'}
        title={''}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>
    )
  }
}
