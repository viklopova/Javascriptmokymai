import { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonData from "./data/data.json";
import Navigation from "./components/navigation/Navigation";
import Header from "./pages/header/Header";
import Features from "./pages/features/Features";
import About from "./pages/aboutUs/About";
import OurServices from "./pages/ourServices/OurServices";
import Gallery from "./pages/gallery/Gallery";
import Testimonials from "./pages/feedback/Testimonials";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {landingPageData && (
        <>
          <Navigation
            title={landingPageData.navigation.title}
            navItems={landingPageData.navigation.navigationItems}
          />

          <div id="header">
            <Header
              title={landingPageData.header.title}
              subtitle={landingPageData.header.subtitle}
              button={landingPageData.header.button}
            />
          </div>
          <div id="features">
            <Features
              title={landingPageData.features.title}
              featuresItems={landingPageData.features.featuresItems}
            />
          </div>
          <div id="about">
            <About
              title={landingPageData.about.title}
              description={landingPageData.about.description}
              whyChooseUs={landingPageData.about.whyChooseUs}
              whyChooseList={landingPageData.about.whyChooseList}
            />
          </div>
          <div id="services">
            <OurServices
              title={landingPageData.services.title}
              subtitle={landingPageData.services.subtitle}
              servicesItems={landingPageData.services.servicesItems}
            />
          </div>
          <div id="gallery">
            <Gallery
              title={landingPageData.gallery.title}
              description={landingPageData.gallery.description}
              galleryItems={landingPageData.gallery.galleryItems}
            />
          </div>
          <div id="testimonials">
            <Testimonials
              title={landingPageData.testimonials.title}
              feedbackItems={landingPageData.testimonials.feedbackItems}
            />
          </div>
          <div id="team">
            <Team
              title={landingPageData.team.title}
              teamItems={landingPageData.team.teamItems}
            />
          </div>
          <div id="contacts">
            <Contacts
              title={landingPageData.contacts.title}
              subtitle={landingPageData.contacts.subtitle}
              contactInfo={landingPageData.contacts.contactInfo}
              contactInfoItems={landingPageData.contacts.contactInfoItems}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
