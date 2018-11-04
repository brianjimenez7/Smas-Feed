import React, { Component } from 'react'
import {FacebookShareButton} from 'react-share';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default class facebook_share extends Component {
  render() {
    return (
      <div>
        <FacebookProvider appId="324530941658027">
        <ShareButton href="">
          Share on facebook
        </ShareButton>
      </FacebookProvider>
      </div>
    )
  }
}
