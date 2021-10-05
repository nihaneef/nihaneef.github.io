import 'animate.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import About from './components/layout/About'
import NotFound from './components/layout/404'
import Skills from './components/layout/Skills'
import Certifications from './components/layout/Certifications'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <div className='hero'>
            <h1 className='animate__jackInTheBox animate__animated hero-title'>
              Niyas Haneef
            </h1>
            <div className='about'>
              <p className='about-info'>
                A Cloud and Virtualization specialist with over 19 years
                experience in IT Industry. Azure, AWS and Citrix Certified.
                Specialist in Designing and Implementing Citrix XenApp and
                XenDesktop Environment.Worked on complex environments with
                Excellent troubleshooting skills. Worked on multiple high profile projects and received lot of customer appreciations.Looking for an opportunity within the organization on cloud and Devops technologies wherein I can utilize the skills I have earned.
              </p>
            </div>
          </div>
          <Skills />
          <Certifications />
        </Route>
        {/* <Route path='/about'>
          <About />
        </Route> */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
