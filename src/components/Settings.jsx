import { useState } from "react";
import {
  Bell,
  ChevronRight,
  LockKeyhole,
  LogOut,
  Monitor,
  Moon,
  Palette,
  ShieldCheck,
  Sun,
  UserRound,
} from "lucide-react";

import "../CSS/settings.css";

const settingsSections = [
  { id: "account", label: "Account", Icon: UserRound },
  { id: "notifications", label: "Notifications", Icon: Bell },
  { id: "appearance", label: "Appearance", Icon: Palette },
  { id: "privacy", label: "Privacy", Icon: ShieldCheck },
];

const Toggle = ({ checked, onChange, label }) => (
  <button
    type="button"
    className={`settings-toggle ${checked ? "is-active" : ""}`}
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={() => onChange(!checked)}
  >
    <span />
  </button>
);

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("account");
  const [theme, setTheme] = useState("dark");
  const [preferences, setPreferences] = useState({
    messages: true,
    mentions: true,
    sound: false,
    readReceipts: true,
  });

  const selectSection = (sectionId) => {
    setActiveSection(sectionId);
    document
      .getElementById(`settings-${sectionId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updatePreference = (key) => (value) => {
    setPreferences((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="settings-page">
      <header className="settings-header">
        <p className="settings-eyebrow">Preferences</p>
        <h1 className="settings-title">Settings</h1>
        <p className="settings-description">
          Manage your account, preferences, and privacy.
        </p>
      </header>

      <div className="settings-layout">
        <nav className="settings-navigation" aria-label="Settings sections">
          {settingsSections.map(({ id, label, Icon }) => (
            <button
              type="button"
              key={id}
              className={`settings-nav-item ${
                activeSection === id ? "is-active" : ""
              }`}
              onClick={() => selectSection(id)}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="settings-content">
          <section className="settings-card" id="settings-account">
            <div className="settings-card-heading">
              <div className="settings-card-icon settings-card-icon-cyan">
                <UserRound size={20} aria-hidden="true" />
              </div>
              <div>
                <h2>Account</h2>
                <p>Your personal account details.</p>
              </div>
            </div>

            <div className="settings-account-row">
              <div className="settings-avatar">D</div>
              <div className="settings-account-copy">
                <strong>Dibyaranjan</strong>
                <span>@dibyaranjan</span>
              </div>
              <button type="button" className="settings-secondary-button">
                Edit profile
              </button>
            </div>

            <div className="settings-field-grid">
              <label className="settings-field">
                <span>Display name</span>
                <input defaultValue="Dibyaranjan" />
              </label>
              <label className="settings-field">
                <span>Email address</span>
                <input type="email" defaultValue="dibyaranjan@example.com" />
              </label>
            </div>
          </section>

          <section className="settings-card" id="settings-notifications">
            <div className="settings-card-heading">
              <div className="settings-card-icon settings-card-icon-cyan">
                <Bell size={20} aria-hidden="true" />
              </div>
              <div>
                <h2>Notifications</h2>
                <p>Choose what you want to be notified about.</p>
              </div>
            </div>

            <div className="settings-options">
              {[
                {
                  key: "messages",
                  title: "New messages",
                  description: "Notify me when someone sends a message.",
                },
                {
                  key: "mentions",
                  title: "Mentions",
                  description: "Notify me when I am mentioned in a conversation.",
                },
                {
                  key: "sound",
                  title: "Notification sounds",
                  description: "Play a sound for incoming notifications.",
                },
              ].map(({ key, title, description }) => (
                <div className="settings-option" key={key}>
                  <div>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </div>
                  <Toggle
                    checked={preferences[key]}
                    onChange={updatePreference(key)}
                    label={title}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="settings-card" id="settings-appearance">
            <div className="settings-card-heading">
              <div className="settings-card-icon settings-card-icon-orange">
                <Palette size={20} aria-hidden="true" />
              </div>
              <div>
                <h2>Appearance</h2>
                <p>Personalize how Akshara looks.</p>
              </div>
            </div>

            <div className="settings-theme-grid" role="radiogroup" aria-label="Theme">
              {[
                { id: "light", label: "Light", Icon: Sun },
                { id: "dark", label: "Dark", Icon: Moon },
                { id: "system", label: "System", Icon: Monitor },
              ].map(({ id, label, Icon }) => (
                <button
                  type="button"
                  role="radio"
                  aria-checked={theme === id}
                  className={`settings-theme-option ${
                    theme === id ? "is-active" : ""
                  }`}
                  key={id}
                  onClick={() => setTheme(id)}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="settings-card" id="settings-privacy">
            <div className="settings-card-heading">
              <div className="settings-card-icon settings-card-icon-orange">
                <LockKeyhole size={20} aria-hidden="true" />
              </div>
              <div>
                <h2>Privacy</h2>
                <p>Control your visibility and account security.</p>
              </div>
            </div>

            <div className="settings-options">
              <div className="settings-option">
                <div>
                  <strong>Read receipts</strong>
                  <span>Let others see when you have read their messages.</span>
                </div>
                <Toggle
                  checked={preferences.readReceipts}
                  onChange={updatePreference("readReceipts")}
                  label="Read receipts"
                />
              </div>
              <button type="button" className="settings-action-row">
                <span>
                  <strong>Change password</strong>
                  <small>Update your account password</small>
                </span>
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </section>

          <button type="button" className="settings-logout-button">
            <LogOut size={18} aria-hidden="true" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
