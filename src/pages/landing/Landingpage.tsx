import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "../../styles/Login.css";
import Features from "../../components/Features";
import crownIcon from "../../assets/images/crown-03.svg";
import logo from "../../assets/images/AMZLogo.png";
import gridOverlay from "../../assets/images/gridoverlay.svg";
import "../../styles/Landing.css";
import Modal from "../../components/model";
import { colors } from "../../styles/colors";
export default function LandingPage() {
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
  return (
    <div
      style={{
        backgroundImage: `url(${gridOverlay}), radial-gradient(900px 540px at 102% -6%, rgba(18,87,86,0.16) 0%, rgba(18,87,86,0) 60%), radial-gradient(900px 540px at -6% 102%, rgba(18,87,86,0.16) 0%, rgba(18,87,86,0) 60%)`,
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundPosition: "center, center, center",
        backgroundSize: "contain, cover, cover",
      }}
    >
      <Header
        childrenLeft={
          <button
            className="upgrade-btn"
            onClick={(e) => {
              const rect = (
                e.currentTarget as HTMLElement
              ).getBoundingClientRect();
              setAnchorRect(rect);
              setModalOpen(true);
            }}
            style={{
              height: 40,
              padding: "0 14px",
              borderRadius: 12,
              border: "1.5px solid #00824b",
              background: "transparent",
              color: "#00824b",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 600,
            }}
          >
            <img
              src={crownIcon}
              alt=""
              width={24}
              height={24}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(1247%) hue-rotate(134deg) brightness(92%) contrast(101%)",
              }}
            />
            <span style={{ color: "#00824b", fontFamily: "manrope" }}>
              Upgrade to{" "}
              <span
                style={{
                  color: "#ffffff",
                  background: "#00824b",
                  padding: "0 4px",
                  borderRadius: 4,
                  fontFamily: "manrope",
                }}
              >
                PRO
              </span>
            </span>
          </button>
        }
        childrenCenter={
          <div
            style={{
              fontWeight: 700,
              color: "#00824b",
              textDecoration: "login",
              textUnderlineOffset: 6,
            }}
          >
            <img src={logo} alt="" width={320} height={120} />
          </div>
        }
      />
      <main
        className="landing"
        style={{
          display: "grid",
          justifyItems: "center",
          textAlign: "center",
          marginTop: 62,
          padding: "0 16px",
        }}
      >
        <h1
          className="landing-title"
          style={{
            fontSize: 56,
            lineHeight: 1.12,
            margin: 0,
            color: "#222",
            fontFamily: "Nohemi",
            maxWidth: 900,
            fontWeight: 700,
          }}
        >
          Hire smarter. Faster. Through a seamless{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #005a33 0%, #00d97e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              fontFamily: "Nohemi",
              fontWeight: 700,
            }}
          >
            AI-driven experience
          </span>
          .
        </h1>
        <p
          className="landing-subtitle"
          style={{
            color: "#6b7280",
            marginTop: 14,
            fontFamily: "manrope",
            maxWidth: 680,
            fontWeight: 400,
          }}
        >
          Automate job creation, resume matching, and interviews all in one
          seamless flow.
        </p>

        {!isLoggedIn ? (
          <div
            className="landing-cta"
            style={{ display: "flex", gap: 16, marginTop: 24 }}
          >
            <Link
              to="/signup"
              className="btn btn-primary"
              style={{
                padding: "0 24px",
                height: 58,
                width: 240,
                fontSize: 20,

                textDecoration: "none",
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: "Nohemi",
              }}
            >
              Signup for FREE
            </Link>
          </div>
        ) : (
          <div
            className="landing-cta"
            style={{ display: "flex", gap: 16, marginTop: 24 }}
          >
            <Link
              to="/dashboard"
              className="btn btn-primary"
              style={{
                padding: "0 24px",
                height: 58,
                width: 240,
                fontSize: 20,
                textDecoration: "none",
                borderRadius: 12,
                // boxShadow: '0 4px 0 rgba(15,71,72,0.25)',
                fontFamily: "Nohemi",
              }}
            >
              Go to Dashboard
            </Link>
          </div>
        )}

        <h3
          style={{
            marginTop: 50,
            color: "#111827",
            fontFamily: "Nohemi",
            fontWeight: 500,
          }}
        >
          What Hire AI Does for You
        </h3>
        <Features />
      </main>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Upgrade to PRO"
        anchorRect={anchorRect || undefined}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              border: `1px solid ${"#D3D9DF"}`,
              borderRadius: 12,
              padding: 12,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Basic</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
              Free
            </div>
            <ul
              style={{
                margin: 0,
                padding: 4,
                color: "#374151",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>Job posting
              </li>
              <li>
                <span>✔</span>Resume upload
              </li>
              <li>
                <span>✔</span>Basic matching
              </li>
            </ul>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: `1px solid ${"#D3D9DF"}`,
                background: "transparent",
                color: "#00824b",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Continue Free
            </button>
          </div>

          <div
            style={{
              border: `2px solid ${"#00824b"}`,
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: `#00824b0D`,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>Pro</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
              $19<span style={{ fontWeight: 500, fontSize: 14 }}>/mo</span>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 4,
                color: "#374151",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>All Basic features
              </li>
              <li>
                <span>✔</span>AI interview
              </li>
              <li>
                <span>✔</span>Advanced matching
              </li>
            </ul>
            <Link
              to="/pricing"
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: "none",
                background: colors.primary,
                color: "#ffffff",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 16px",
              }}
            >
              Upgrade to Pro
            </Link>
          </div>

          <div
            style={{
              border: `1px solid ${"#D3D9DF"}`,
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontWeight: 700, color: colors.primary }}>
              Enterprise
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
              Contact
            </div>
            <ul
              style={{
                margin: 0,
                padding: 4,
                color: "#374151",
                lineHeight: 1.6,
              }}
            >
              <li>
                <span>✔</span>Unlimited jobs
              </li>
              <li>
                <span>✔</span>Custom workflows
              </li>
              <li>
                <span>✔</span>Dedicated support
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                marginTop: "auto",
                height: 50,
                borderRadius: 10,
                border: `1px solid ${colors.disabled}`,
                background: "transparent",
                color: colors.disabled,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 12px",
              }}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}
