import React from 'react'
import { Badge } from 'react-bootstrap'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

const iconStyle = {
  size: 35,
  round: true
}

export default function SocialShare({ title, description, url, ...props }) {
  url = process.env.REACT_APP_BASE_URL + url

  return (
    <div className='mt-3' {...props}>
      <Badge
        variant='success'
        className='mr-1 p-1'
        style={{ fontSize: '.8rem' }}
      >
        Share on
      </Badge>

      <FacebookShareButton
        url={url}
        quote={description}
        hashtag={title}
        className='mr-1'
      >
        <FacebookIcon size={iconStyle.size} round={iconStyle.round} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={description}
        hashtag={title}
        className='mr-1'
      >
        <TwitterIcon size={iconStyle.size} round={iconStyle.round} />
      </TwitterShareButton>

      <EmailShareButton
        url={url}
        body={description}
        title={title}
        className='mr-1'
      >
        <EmailIcon size={iconStyle.size} round={iconStyle.round} />
      </EmailShareButton>

      <LinkedinShareButton
        url={url}
        source={url}
        body={description}
        title={title}
        className='mr-1'
      >
        <LinkedinIcon size={iconStyle.size} round={iconStyle.round} />
      </LinkedinShareButton>
    </div>
  )
}
