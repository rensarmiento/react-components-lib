import { useState } from 'react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/index'
import Card from './components/Cards/index'

import './App.css'

function App() {


  return (
    <>
      <Banner variant="success">
        <Banner.Title>Update Available</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner.Text>
      </Banner>
    <div className="container">
      <Badge variant="red"> 
        Warning!
      </Badge>

      <Card>
        <Card.Title>
          Easy Deployment
        </Card.Title>
        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
      </Card>
    </div>
    </>
  )
}

export default App