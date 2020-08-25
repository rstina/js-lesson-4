import React from 'react'
import MyButton from './MyButton'

export default function Component2( {setHeadline} ) {
  return (
    <div>
      Component 2
      <MyButton
        title="Headline från kompnent 2"
        setHeadline={setHeadline}
        setHeadlineTo="headline fråååån 2"/>
    </div>
  )
}
