import HeroComponent from './components/HeroComponent'
import ProjectsComponent from './components/ProjectsComponent'
import TechnologiesComponent from './components/TechnologiesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import DividerComponent from './components/DividerComponent'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <DividerComponent title="Technologies"/>
      <TechnologiesComponent />
      <DividerComponent title="Projects"/>
      <ProjectsComponent />
      <DividerComponent title="Contact"/>
      <ContactForm />
      <FooterComponent />
    </div>
  )
}

export default App
