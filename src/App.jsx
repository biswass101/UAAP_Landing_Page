import './App.css'
import AboutUapp from './components/AboutUapp/AboutUapp'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import JobOverview from './components/JobOverview/JobOverview'
import SuccessStories from './components/SuccessStories/SuccessStories'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <AboutUapp/>
      <JobOverview/>
      <Form/>
      <SuccessStories/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
