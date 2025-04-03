import { useState } from 'react'
import Content from './Components/Content/Content'
import Nav from './Components/Nav/Nav'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <Content />
        </section>
      </main>
    </>
  )
}

export default App
