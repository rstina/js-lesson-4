import React from 'react'
import MyButton from './MyButton'

export default function Component1( {setHeadline} ) {
  return (
    <div>
      Component 1
      <MyButton
        title="Headline från compnent 1"
        setHeadline={setHeadline}
        setHeadlineTo="headline från 1"/>
    </div>
  )
}
