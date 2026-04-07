import React, { useState } from "react";
import "./ProjectDetails.css";

const TABS = ["Gallery", "Overview", "Highlights", "Unit Plans", "Amenities"];

const Project_Details = [
  {
    id: "proj_001",
    name: "Skyline Heights",
    location: "Baner, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Skyline+Exterior+1",
        caption: "Front elevation",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Skyline+Lobby",
        caption: "Grand lobby",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Skyline+Clubhouse",
        caption: "Clubhouse",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Skyline+Pool",
        caption: "Swimming pool",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Skyline+Heights+Overview",
      heading: "Live above the ordinary",
      description:
        "Skyline Heights is a premium residential tower in the heart of Baner, offering stunning views, world-class amenities, and thoughtfully designed homes. With seamless connectivity to IT hubs and top schools, this is urban living redefined.",
    },

    highlights: [
      {
        icon: "shield",
        title: "Vastu Compliant",
        description: "All units designed as per Vastu Shastra principles.",
      },
      {
        icon: "leaf",
        title: "Green Building",
        description: "IGBC certified with 40% open green spaces.",
      },
      {
        icon: "bolt",
        title: "24×7 Power Backup",
        description: "100% power backup for all common areas and apartments.",
      },
      {
        icon: "drop",
        title: "Rainwater Harvesting",
        description: "On-site rainwater harvesting and water recycling plant.",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 673,
        carpetAreaMax: 861,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1446,
        carpetAreaMax: 1446,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 1766,
        carpetAreaMax: 1766,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "SIMPLEX",
        carpetAreaMin: 1534,
        carpetAreaMax: 1540,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "DUPLEX",
        carpetAreaMin: 1346,
        carpetAreaMax: 1722,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a2",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
      {
        id: "a3",
        name: "Kids Play Area",
        image: "https://placehold.co/400x300?text=Kids+Play",
      },
      {
        id: "a4",
        name: "Multipurpose Hall",
        image: "https://placehold.co/400x300?text=Hall",
      },
      {
        id: "a5",
        name: "Jogging Track",
        image: "https://placehold.co/400x300?text=Track",
      },
      {
        id: "a6",
        name: "Co-working Space",
        image: "https://placehold.co/400x300?text=Cowork",
      },
    ],
  },

  {
    id: "proj_002",
    name: "Verde Enclave",
    location: "Wakad, Pune",
    status: "Ready to Move",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Verde+Facade",
        caption: "Tower facade",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Verde+Garden",
        caption: "Landscape garden",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Verde+Terrace",
        caption: "Sky terrace",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Verde+Enclave+Overview",
      heading: "Where nature meets modern living",
      description:
        "Verde Enclave is a low-rise gated community nestled among lush greens in Wakad. Designed for those who crave tranquility without compromising on modern conveniences, each home is a private sanctuary.",
    },

    highlights: [
      {
        icon: "tree",
        title: "60% Open Space",
        description: "Sprawling landscape with native trees and gardens.",
      },
      {
        icon: "shield",
        title: "Gated Community",
        description: "3-tier security with CCTV surveillance 24×7.",
      },
      {
        icon: "sun",
        title: "Solar Powered",
        description: "Common areas powered by rooftop solar panels.",
      },
      {
        icon: "recycle",
        title: "Zero Waste",
        description: "On-site organic waste converter and recycling.",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 720,
        carpetAreaMax: 820,
        unit: "sq.ft.",
        price: 7500000,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1100,
        carpetAreaMax: 1300,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 1650,
        carpetAreaMax: 1800,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Yoga Deck",
        image: "https://placehold.co/400x300?text=Yoga",
      },
      {
        id: "a2",
        name: "Amphitheatre",
        image: "https://placehold.co/400x300?text=Amphitheatre",
      },
      {
        id: "a3",
        name: "Zen Garden",
        image: "https://placehold.co/400x300?text=Zen+Garden",
      },
      {
        id: "a4",
        name: "Cycling Track",
        image: "https://placehold.co/400x300?text=Cycling",
      },
      {
        id: "a5",
        name: "Pet Park",
        image: "https://placehold.co/400x300?text=Pet+Park",
      },
    ],
  },

  {
    id: "proj_003",
    name: "Aurum Residences",
    location: "Kalyani Nagar, Pune",
    status: "New Launch",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Aurum+Tower",
        caption: "Tower render",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Aurum+Living",
        caption: "Living room",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Aurum+Kitchen",
        caption: "Modular kitchen",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Aurum+Balcony",
        caption: "Private balcony",
      },
      {
        id: "g5",
        url: "https://placehold.co/800x500?text=Aurum+Rooftop",
        caption: "Rooftop lounge",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Aurum+Residences+Overview",
      heading: "Luxury crafted for the discerning few",
      description:
        "Aurum Residences brings ultra-luxury living to Kalyani Nagar — Pune's most coveted address. With Italian marble flooring, smart home automation, and a private concierge service, every detail is curated to perfection.",
    },

    highlights: [
      {
        icon: "star",
        title: "Smart Home Ready",
        description: "Alexa & Google Home compatible automation in every unit.",
      },
      {
        icon: "car",
        title: "EV Charging",
        description: "Dedicated EV charging bays in the basement parking.",
      },
      {
        icon: "wifi",
        title: "High-Speed Internet",
        description: "1 Gbps fibre pre-wired to every apartment.",
      },
      {
        icon: "key",
        title: "Concierge Service",
        description: "24×7 concierge for residents.",
      },
    ],

    unitPlans: [
      {
        configuration: "3 BHK",
        carpetAreaMin: 1800,
        carpetAreaMax: 2100,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 2400,
        carpetAreaMax: 2800,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "PENTHOUSE",
        carpetAreaMin: 4200,
        carpetAreaMax: 4200,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Infinity Pool",
        image: "https://placehold.co/400x300?text=Infinity+Pool",
      },
      {
        id: "a2",
        name: "Private Theatre",
        image: "https://placehold.co/400x300?text=Theatre",
      },
      {
        id: "a3",
        name: "Spa & Wellness",
        image: "https://placehold.co/400x300?text=Spa",
      },
      {
        id: "a4",
        name: "Rooftop Lounge",
        image: "https://placehold.co/400x300?text=Rooftop",
      },
      {
        id: "a5",
        name: "Business Centre",
        image: "https://placehold.co/400x300?text=Business",
      },
      {
        id: "a6",
        name: "Wine Cellar",
        image: "https://placehold.co/400x300?text=Wine+Cellar",
      },
    ],
  },
];

const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.707 0.293C23.417 0.003 22.979-0.082 22.603 0.082L0.603 9.574C0.237 9.732 0 10.094 0 10.493c0 .399.238.76.605.918l7.391 3.178L21.55 2.45 9.41 16.004l3.179 7.392C12.747 23.762 13.107 24 13.507 24c.399 0 .761-.237.919-.604l9.492-22C24.08 1.02 23.997.583 23.707.293Z"
      fill="currentColor"
    />
  </svg>
);

const PdfIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.418 25.59c.307-.668.854-1.157 1.515-1.388V21.71c0-1.454 1.183-2.637 2.637-2.637h1.51c.308 0 .604.054.879.151V3.137C28.959 1.683 27.776.5 26.322.5H8.744C7.29.5 6.107 1.683 6.107 3.137V4.426h15.118c1.938 0 3.515 1.577 3.515 3.515v8.204c0 1.938-1.577 3.515-3.515 3.515H6.107v8.203c0 1.454 1.183 2.637 2.637 2.637h15.862l-1.794-2.093a2.638 2.638 0 0 1-.394-2.817Z"
      fill="currentColor"
    />
    <path
      d="M29.837 25.813h-.878v-4.102a.879.879 0 0 0-.879-.879h-1.51a.879.879 0 0 0-.878.879v4.102h-.878c-.751 0-1.156.88-.667 1.45l2.51 2.93a.879.879 0 0 0 1.341 0l2.51-2.93c.489-.57.084-1.45-.671-1.45Z"
      fill="currentColor"
    />
    <path
      d="M22.982 16.145V7.94A1.758 1.758 0 0 0 21.225 6.184H2.474A1.758 1.758 0 0 0 .717 7.94v8.204a1.758 1.758 0 0 0 1.757 1.758h18.75a1.758 1.758 0 0 0 1.758-1.757ZM6.278 13.006c-.239 0-.683.002-1.046.004v1.963a.586.586 0 1 1-1.172 0V9.115a.586.586 0 0 1 .586-.587h1.632a2.238 2.238 0 0 1 0 4.478Zm7.895 1.448c-.528.689-1.29 1.077-2.147 1.092-.471.008-1.654.013-1.704.013a.586.586 0 0 1-.586-.586c0-.021-.008-2.133-.008-2.938 0-.669-.004-2.923-.004-2.923a.586.586 0 0 1 .586-.586h1.66c1.765 0 2.952 1.413 2.952 3.516 0 .926-.265 1.783-.749 2.412Zm4.879-3.754h-1.789v1.702h1.6a.586.586 0 1 1 0 1.172h-1.6v2.399a.586.586 0 1 1-1.172 0V9.113a.586.586 0 0 1 .586-.586h2.375a.586.586 0 1 1 0 1.172Z"
      fill="currentColor"
    />
  </svg>
);

const ProjectDetails = ({ Project_Id = null }) => {
  const [activeTab, setActiveTab] = useState("Unit Plans");

  const project = Project_Details.find((p) => p.id === Project_Id);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="pd_section">
      {/* ── TOP BAR: logo + tabs + download ── */}
      <div className="pd_topbar">
        <div className="pd_logo_card">
          {/* Replace src with real logo later */}
          <img
            src={`https://placehold.co/160x56/fff/8b2635?text=${encodeURIComponent(project.name)}&font=playfair-display`}
            alt={project.name}
            className="pd_logo_img"
          />
        </div>

        {/* Nav tabs */}
        <nav className="pd_tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`pd_tab_btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab.toUpperCase()}</span>
              {activeTab === tab && <span className="pd_tab_underline" />}
            </button>
          ))}
        </nav>

        {/* Download Brochure */}
        <button
          className="pd_download_btn"
          onClick={() => alert("Download Brochure")}
        >
          <span>Download Brochure</span>
          <span className="pd_btn_sep" />
          <PdfIcon />
        </button>
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="pd_tab_content">
        {activeTab === "Unit Plans" && (
          <div className="pd_table_wrapper">
            <table className="pd_unit_table">
              <thead>
                <tr>
                  <th className="th_left">
                    <div className="th_pill">Configuration</div>
                  </th>
                  <th className="th_center">
                    <div className="th_pill">Carpet Area (sq.ft.)</div>
                  </th>
                  <th className="th_right">
                    <div className="th_pill">Product Cost (₹)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.unitPlans.map((u, i) => (
                  <tr key={i} className="pd_row">
                    <td className="td_config">{u.configuration}</td>
                    <td className="td_area">
                      {u.carpetAreaMin === u.carpetAreaMax
                        ? u.carpetAreaMin
                        : `${u.carpetAreaMin} - ${u.carpetAreaMax}`}
                    </td>
                    <td className="td_cost">
                      {u.price ? (
                        `₹ ${u.price.toLocaleString()}`
                      ) : (
                        <button
                          className="pd_cost_btn"
                          onClick={() =>
                            alert(`Request price for ${u.configuration}`)
                          }
                        >
                          REQUEST PRICE <SendIcon />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Gallery" && (
          <div className="pd_gallery">
            {project.gallery.map((img) => (
              <div key={img.id} className="pd_gallery_item">
                <img src={img.url} alt={img.caption} />
                <p>{img.caption}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="pd_overview">
            <img src={project.overview.image} alt={project.overview.heading} />
            <h2>{project.overview.heading}</h2>
            <p>{project.overview.description}</p>
          </div>
        )}

        {activeTab === "Highlights" && (
          <div className="pd_highlights">
            {project.highlights.map((h) => (
              <div key={h.title} className="pd_highlight">
                <div className="pd_highlight_icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Amenities" && (
          <div className="pd_amenities">
            {project.amenities.map((a) => (
              <div key={a.id} className="pd_amenity">
                <img src={a.image} alt={a.name} />
                <p>{a.name}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Unit Plans" &&
          activeTab !== "Gallery" &&
          activeTab !== "Overview" &&
          activeTab !== "Highlights" &&
          activeTab !== "Amenities" && (
            <div className="pd_placeholder">
              <p>{activeTab} content coming soon.</p>
            </div>
          )}
      </div>

      {/* ── Mobile download button ── */}
      <div className="pd_mobile_download">
        <button
          className="pd_download_btn"
          onClick={() => alert("Download Brochure")}
        >
          <span>Download Brochure</span>
          <span className="pd_btn_sep" />
          <PdfIcon />
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;
