import React from 'react'
import Helmet from 'react-helmet'
import {
  APP_NAME,
  AUTHOR_NAME,
  BASE_URL,
  DEFAULT_LOCALE
} from '../../config/env.config'
import { RoutesConfig } from '../../config/routes.config'

const {
  title: _defaultTitle,
  description: _defaultDescription
} = RoutesConfig.Home.metaInfo

const MetaInfo = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LOCALE,
  title = _defaultTitle,
  description = _defaultDescription
}) => (
  <Helmet
    defer={defer}
    title={title}
    htmlAttributes={{ lang }}
    titleTemplate={`%s | ${APP_NAME}`}
    meta={[
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: `${BASE_URL}/logo.png`
      },
      {
        name: 'author',
        content: AUTHOR_NAME
      }
    ].concat(meta)}
  />
)

export default MetaInfo
