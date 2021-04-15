import React from 'react'
import MetaInfo from '../../components/seo/metainfo'
import { RoutesConfig } from '../../config/routes.config'

export default function Settings() {
  return (
    <div className='mt-5 text-center text-danger'>
      <MetaInfo {...RoutesConfig.Settings.metaInfo} />
      No Settings Available for You.
    </div>
  )
}
