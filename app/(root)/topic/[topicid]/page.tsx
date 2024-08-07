import React from 'react'

export default function Topic({ params: { topicid }}: { params: { topicid: string } }) {
  return (
    <div>{topicid}</div>
  )
}
