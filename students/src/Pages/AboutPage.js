import React from 'react';
import Layout from '../components/Layout/Layout';
import { Mail, Phone, Smartphone, User, Users } from 'lucide-react';
import '../styles/AboutPage.css'; // Assuming you have a CSS file for styling

const CouncilAboutPage = () => {
  const chairman = {
    name: "Dr Koushik Guha Biswas",
    title: "Chairman, Council of Wardens",
    photo: "/api/placeholder/120/120",
    email: "chairman_councilwardens@rgipt.ac.in",
    telephone: "+91 535 2704 516",
    mobile: "+91 9775551101"
  };

  const wardens = [
    {
      name: "Dr Soniya Dhama",
      block: "Block - A (Girls' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "soniyad@rgipt.ac.in",
      telephone: "+91 535 2704 673"
    },
    {
      name: "Dr Gargi Srivastava",
      block: "Urja Hostel (Girls' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "gsrivastava@rgipt.ac.in",
      telephone: "+91 535 2704 671",
      mobile: "+91 9473900277"
    },
    {
      name: "Dr Piyush Sarkar",
      block: "Block - B (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "piyush.s@rgipt.ac.in",
      mobile: "+91 8169585134"
    },
    {
      name: "Dr Tanmoy Ghosh",
      block: "Block - C (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "tghosh@rgipt.ac.in"
    },
    {
      name: "Dr Kalka Dubey",
      block: "Block - D (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "kalka.dubey@rgipt.ac.in",
      telephone: "+91 535 2704 547",
      mobile: "+91 9557988930"
    },
    {
      name: "Dr Arvind Singh",
      block: "Block - E (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "arvind.singh@rgipt.ac.in",
      mobile: "+91 7571993333"
    },
    {
      name: "Dr Vijay Kumar Singh",
      block: "Block - G (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "vijayks@rgipt.ac.in",
      mobile: "+91 9451848581"
    },
    {
      name: "Dr Santosh Kumar Mishra",
      block: "Block - H (Boys' Hostel)",
      photo: "/api/placeholder/80/80",
      email: "santosh.mishra@rgipt.ac.in",
      telephone: "+91 535 2704 841"
    }
  ];

  const ContactInfo = ({ icon: Icon, label, value, isLink = false }) => (
    <div className="contact-item">
      <Icon size={16} className="contact-icon" />
      <span className="contact-label">{label}:</span>
      {isLink ? (
        <a href={`mailto:${value}`} className="contact-link">{value}</a>
      ) : (
        <span className="contact-value">{value}</span>
      )}
    </div>
  );

  const WardenCard = ({ warden }) => (
    <div className="warden-card">
      <div className="warden-header">
        <img src={warden.photo} alt={warden.name} className="warden-photo" />
        <div className="warden-info">
          <h3 className="warden-name">{warden.name}</h3>
          <p className="warden-block">{warden.block}</p>
        </div>
      </div>
      <div className="warden-contacts">
        <ContactInfo icon={Mail} label="Email" value={warden.email} isLink={true} />
        {warden.telephone && (
          <ContactInfo icon={Phone} label="Telephone" value={warden.telephone} />
        )}
        {warden.mobile && (
          <ContactInfo icon={Smartphone} label="Mobile" value={warden.mobile} />
        )}
      </div>
    </div>
  );

  return (
    <Layout Title="About | RGIPT Hostel">
    <div className="council-container">
      <div className="main-wrapper">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Council of Wardens</h1>
            <p className="hero-subtitle">Dedicated to Student Welfare & Hostel Management</p>
          </div>
        </div>

       <div className="chairman-section">
  <h2 className="section-title left-align">
    <User className="inline mr-3" size={32} />
    Chairman
  </h2>

  <div className="chairman-card">
    <img src={chairman.photo} alt={chairman.name} className="chairman-photo" />
    <h3 className="chairman-name">{chairman.name}</h3>
    <p className="chairman-title">{chairman.title}</p>

    <div className="chairman-contacts">
      <ContactInfo icon={Mail} label="Email" value={chairman.email} isLink={true} />
      <ContactInfo icon={Phone} label="Telephone" value={chairman.telephone} />
      <ContactInfo icon={Smartphone} label="Mobile" value={chairman.mobile} />
    </div>
  </div>
</div>


        <div className="wardens-section">
          <h2 className="section-title">
            <Users className="inline mr-3" size={32} />
            Wardens
          </h2>
          
          <div className="wardens-grid">
            {wardens.map((warden, index) => (
              <WardenCard key={index} warden={warden} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default CouncilAboutPage;