import React, { Component } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router'
import { useQuery } from './queryRouter'

export default function usePageNumberQueryToRoute() {
  let query = useQuery()
  const pageNumber = query.get('pageNumber')
  const history = useHistory()
  const location = useLocation()
  return {
    getPageNumberQueryValue: pageNumber,
    add: (pageNumber) => {
      if (location.search.includes('pageNumber=')) {
        // check pageNumber query is already present
        // if pagent then, change the page number only, no add it to search query
        const url = location.search.replace(
          /pageNumber=\d+/,
          `pageNumber=${pageNumber}`
        )
        history.replace(location.pathname + url)
      } else {
        // if no pageNumber query, then check wheter the search value of location is null or not
        if (location.search) {
          //if serach value is not null, then append &pagenumber={pageNumber} to the serach value
          //or if it is null the append ?pageNumber={pageNumber} to the location.pathname
          history.replace(
            `${location.pathname + location.search}&pageNumber=${pageNumber}`
          )
        } else {
          history.replace(`${location.pathname}?pageNumber=${pageNumber}`)
        }
      }
    }
  }
}

export function withPageNumberQueryToRoute(OriginalComponent) {
  class NewComponent extends Component {
    render() {
      const { history, location } = this.props
      const pageNumber = new URLSearchParams(location.search, [
        location.search
      ]).get('pageNumber')

      const add = (pageNumber) => {
        if (location.search.includes('pageNumber=')) {
          // check pageNumber query is already present
          // if pagent then, change the page number only, no add it to search query
          const url = location.search.replace(
            /pageNumber=\d+/,
            `pageNumber=${pageNumber}`
          )
          history.replace(location.pathname + url)
        } else {
          // if no pageNumber query, then check wheter the search value of location is null or not
          if (location.search) {
            //if serach value is not null, then append &pagenumber={pageNumber} to the serach value
            //or if it is null the append ?pageNumber={pageNumber} to the location.pathname
            history.replace(
              `${location.pathname + location.search}&pageNumber=${pageNumber}`
            )
          } else {
            history.replace(`${location.pathname}?pageNumber=${pageNumber}`)
          }
        }
      }

      return (
        <OriginalComponent
          getPageNumberQueryValue={pageNumber}
          addPageNumberQueryValue={add}
          {...this.props}
        />
      )
    }
  }
  return withRouter(NewComponent)
}
