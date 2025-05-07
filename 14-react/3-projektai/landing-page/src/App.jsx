import { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import AboutUs from './pages/aboutUs/AboutUs';
import OurServices from './pages/OurServices/OurServices';
import Gallery from './pages/gallery/Gallery';
import Feedback from './pages/feedback/Feedback';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, [])

  return (
    <>
      {
        landingPageData && (
          <>
            <Navigation 
              title={landingPageData.navigation.title}
              navItems={landingPageData.navigation.navigationItems}
            />
            <Header
              title={landingPageData.header.title}
              subtitle={landingPageData.header.subtitle}
              button={landingPageData.header.button}
            />
            <Features
              title={landingPageData.features.title}
              featuresItems={landingPageData.features.featuresItems}
            />
            <AboutUs
              title={landingPageData.aboutUs.title}
              description={landingPageData.aboutUs.description}
              whyChooseUs={landingPageData.aboutUs.whyChooseUs}
              whyChooseList={landingPageData.aboutUs.whyChooseList}
            />
            <OurServices
              title={landingPageData.services.title}
              subtitle={landingPageData.services.subtitle}
              servicesItems={landingPageData.services.servicesItems}
            />
            <Gallery
              title={landingPageData.gallery.title}
              description={landingPageData.gallery.description}
              galleryItems={landingPageData.gallery.galleryItems}
            />
            <Feedback
              title={landingPageData.feedback.title}
              feedbackItems={landingPageData.feedback.feedbackItems}
            />
            <Team
              title={landingPageData.team.title}
              teamItems={landingPageData.team.teamItems}
            />
            <Contacts
              title={landingPageData.contacts.title}
              subtitle={landingPageData.contacts.subtitle}
              contactInfo={landingPageData.contacts.contactInfo}
              contactInfoItems={landingPageData.contacts.contactInfoItems}
            />
          </>
        )
      }
    </>
  )
}

export default App
