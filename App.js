import React from 'react'
import Class1 from './Rough1/Class1'
import OnClick1 from './Rough1/OnClick1'
import C1 from './Rough1/C1'
import BasicForm1 from './Rough1/BasicForm1'
import ClassState1 from './State/ClassState1'
import Ex1 from './Hooks/Ex1'
import Ex2 from './Hooks/Ex2'


const App = () => {
  let Name = "Dinesh Teja"
  return (
    <div>
      <Class1 />
      <OnClick1 />
      <C1 />
      <h2>My name is {Name}</h2>
      <BasicForm1 />
      <ClassState1 />
      <Ex1 />
      <Ex2 />
    </div>
  )
}

export default App






