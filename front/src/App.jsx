import './App.css'
import "@cloudscape-design/global-styles/index.css"
import Layout from './components/Layouts/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import amplify sdk
import { Authenticator } from '@aws-amplify/ui-react'
import './amplifyConfig'
// import custom page
import Home from './components/Home/Home.jsx'
import NotFound from './components/NotFound/NotFound.jsx';

function App() {

  return (
    <main className='w-full h-full'>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <Layout signOut={signOut}>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        )}
      </Authenticator>
    </main>
  )
}

export default App
