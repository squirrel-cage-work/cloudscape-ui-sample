import './App.css'
import "@cloudscape-design/global-styles/index.css"
import Layout from './components/Layouts/Layout'
// import amplify sdk
import { Authenticator } from '@aws-amplify/ui-react'
import './amplifyConfig'

function App() {

  return (
    <main className='w-full h-full'>
      <Authenticator>
        {({ signOut, user}) => (
          <Layout signOut={signOut}/>
        )}
      </Authenticator>
    </main>
  )
}

export default App
