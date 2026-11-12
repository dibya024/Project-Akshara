import { CalendarDays, Mail, MapPin, Phone, UserRound } from "lucide-react";

import "../CSS/myProfilePage.css";

const profileDetails = [
  { label: "Email", value: "Not added yet", Icon: Mail },
  { label: "Phone", value: "Not added yet", Icon: Phone },
  { label: "Location", value: "Not added yet", Icon: MapPin },
  { label: "Joined", value: "Member", Icon: CalendarDays },
];

const MyProfilePage = () => {
  return (
    <section className="my-profile-page">
      <header className="my-profile-header">
        <p className="my-profile-eyebrow">Account</p>
        <h1 className="my-profile-title">My Profile</h1>
        <p className="my-profile-description">
          Your profile information and account overview.
        </p>
      </header>

      <div className="my-profile-card my-profile-identity-card">
        <div className="my-profile-identity">
          <div className="my-profile-avatar">
            <UserRound size={36} aria-hidden="true" />
          </div>
          <div className="my-profile-identity-copy">
            <h2 className="my-profile-name">Your Name</h2>
            <p className="my-profile-username">@username</p>
            <p className="my-profile-bio">
              Add a short introduction to let people know a little about you.
            </p>
          </div>
        </div>
      </div>

      <div className="my-profile-grid">
        <section className="my-profile-card my-profile-details-card">
          <h2 className="my-profile-section-title">Profile details</h2>
          <div className="my-profile-details">
            {profileDetails.map(({ label, value, Icon }) => (
              <div key={label} className="my-profile-detail">
                <div className="my-profile-detail-icon">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="my-profile-detail-copy">
                  <p className="my-profile-detail-label">{label}</p>
                  <p className="my-profile-detail-value">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="my-profile-card my-profile-status-card">
          <h2 className="my-profile-section-title">Profile status</h2>
          <p className="my-profile-status-description">
            Your profile is ready. Add a photo and a few details to make it
            easier for people to recognize you.
          </p>
          <div className="my-profile-status">
            <span className="my-profile-status-indicator" />
            <span>Profile active</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MyProfilePage;
