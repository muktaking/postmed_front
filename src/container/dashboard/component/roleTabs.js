import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { roleArray } from '../../../utils/canActivate'
import Users from './users'

export default function RoleTabs({ users, updater }) {
  const role = useSelector((state) => state.user.role)
  return (
    <div>
      <>{tabsAccordingToRole(role, users, updater)}</>
    </div>
  )
}

function tabsAccordingToRole(role, users, updater) {
  return (
    <Tabs defaultActiveKey='1'>
      {roleArray.slice(0, role - 1).map((title, index) => {
        return (
          <Tab
            eventKey={index + 1}
            title={
              title +
              '( ' +
              users.filter((user) => user.role === index + 1).length +
              ' )'
            }
          >
            <Users
              role={role}
              users={users.filter((user) => user.role === index + 1)}
              updater={updater}
            />
          </Tab>
        )
      })}
    </Tabs>
  )
}
