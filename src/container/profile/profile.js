import React from 'react'
import MetaInfo from '../../components/seo/metainfo'
import ProfileSnippet from '../../components/user/profile'
import { RoutesConfig } from '../../config/routes.config'

export default function Profile() {
  return (
    <div>
      <MetaInfo {...RoutesConfig.Profile.metaInfo} />
      <ProfileSnippet isProfile={true} size='300' />
    </div>
  )
}
