import React from 'react'
import { Card } from 'semantic-ui-react'
import ApplicationListItem from './ApplicationListItem'

export default function ApplicationsList({ applications, person, coinSymbol }) {
  return (
    <Card.Group>
      {applications.map((application) => (
        <ApplicationListItem
          key={application.id}
          application={application}
          person={person}
          coinSymbol={coinSymbol}
        />
      ))}
    </Card.Group>
  )
}
