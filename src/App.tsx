import HeroComponent from './components/HeroComponent'
import ProjectsComponent from './components/ProjectsComponent'
import TechnologiesComponent from './components/TechnologiesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import DividerComponent from './components/DividerComponent'
import ContactForm from './components/ContactForm'
import NetworkComponent from './components/NetworkComponent'
import AboutMeComponent from './components/AboutMeComponent'
import CertificationsComponent from './components/CertificationsComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <NetworkComponent />
      <DividerComponent title="About me"/>
      <AboutMeComponent />
      <DividerComponent title="Skills" subtitle="Different types of techonologies i developed with in my projects"/>
      <TechnologiesComponent />
      <DividerComponent title="Projects"/>
      <ProjectsComponent />
      <DividerComponent title="Certifications"/>
      <CertificationsComponent />
      <DividerComponent title="Contact"/>
      <ContactForm />
      <FooterComponent />
    </div>
  )
}

export default App
