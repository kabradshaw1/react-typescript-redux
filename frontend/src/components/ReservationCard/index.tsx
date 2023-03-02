import React from 'react'

interface ReservationCardType {
  name:string
}

export default function ReservationCard({ name }: ReservationCardType) {
  return (
    <div>{name}</div>
  )
}
