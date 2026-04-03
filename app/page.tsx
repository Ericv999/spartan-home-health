import ScrollReveal from "./components/ScrollReveal";
import NavScroll from "./components/NavScroll";
import MobileMenu from "./components/MobileMenu";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <NavScroll />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2L4 14v4l6-4v20h4V16l6-5 6 5v18h4V14l6 4v-4L20 2z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              style={{ color: "var(--gold)" }}
            />
            <path
              d="M17 34h6v4h-6z"
              fill="currentColor"
              style={{ color: "var(--gold)" }}
            />
          </svg>
          <span className="nav-logo-text">Spartan</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#plans">Plans</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#how">How It Works</a>
          </li>
          <li>
            <a href="#waitlist" className="nav-cta">
              Get Early Access
            </a>
          </li>
        </ul>
        <MobileMenu />
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-split">
          <div className="hero-side hero-side-her">
            <div className="hero-side-bg"></div>
            <div className="hero-side-content">
              <span className="hero-side-label">For Her</span>
              <h2 className="hero-side-title">
                Balance
                <br />
                Restored
              </h2>
              <p className="hero-side-desc">
                Hormone replacement therapy guided by licensed providers. Sleep
                deeper, think clearer, feel like yourself again.
              </p>
              <a href="#waitlist" className="hero-btn">
                Start Her Plan
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-center-badge">
            <h1>Spartan Home Health</h1>
            <p className="hero-tagline">Optimized. Together.</p>
          </div>

          <div className="hero-side hero-side-his">
            <div className="hero-side-bg"></div>
            <div className="hero-side-content">
              <span className="hero-side-label">For Him</span>
              <h2 className="hero-side-title">
                Strength
                <br />
                Reclaimed
              </h2>
              <p className="hero-side-desc">
                Testosterone optimization and performance therapy. Energy,
                drive, and focus — the way it&apos;s supposed to be.
              </p>
              <a href="#waitlist" className="hero-btn">
                Start His Plan
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="couples-section" id="plans">
        <div className="section-overline reveal">The Plans</div>
        <h2 className="section-title reveal">
          One Household. Fully Optimized.
        </h2>
        <p className="section-subtitle reveal">
          Choose his plan, her plan, or save with the household plan. Every plan
          includes doctor consultations, lab coordination, and monthly
          medication delivery.
        </p>

        <div className="plans-grid">
          {/* HIS PLAN */}
          <div className="plan-card reveal">
            <div className="plan-name">His Plan</div>
            <div className="plan-for">Testosterone + Performance</div>
            <div className="plan-price">
              $249<span>/mo</span>
            </div>
            <div className="plan-save">&nbsp;</div>
            <ul className="plan-includes">
              <li>TRT (Testosterone Replacement Therapy)</li>
              <li>ED medication included</li>
              <li>Provider video consultations</li>
              <li>Lab work coordination</li>
              <li>Monthly medication delivery</li>
              <li>Ongoing dosage optimization</li>
            </ul>
            <a href="#waitlist" className="plan-btn">
              Join Waitlist
            </a>
          </div>

          {/* HOUSEHOLD PLAN */}
          <div className="plan-card featured reveal">
            <div className="plan-name">Household Plan</div>
            <div className="plan-for">His + Hers Combined</div>
            <div className="plan-price">
              $399<span>/mo</span>
            </div>
            <div className="plan-save">Save $99/month vs. separate plans</div>
            <ul className="plan-includes">
              <li>Everything in His Plan</li>
              <li>Everything in Her Plan</li>
              <li>Shared provider dashboard</li>
              <li>Coordinated lab scheduling</li>
              <li>Priority support</li>
              <li>Peptide add-ons available</li>
            </ul>
            <a href="#waitlist" className="plan-btn">
              Join Waitlist
            </a>
          </div>

          {/* HER PLAN */}
          <div className="plan-card reveal">
            <div className="plan-name">Her Plan</div>
            <div className="plan-for">Hormone + Balance</div>
            <div className="plan-price">
              $249<span>/mo</span>
            </div>
            <div className="plan-save">&nbsp;</div>
            <ul className="plan-includes">
              <li>HRT (Hormone Replacement Therapy)</li>
              <li>Menopause &amp; perimenopause care</li>
              <li>Provider video consultations</li>
              <li>Lab work coordination</li>
              <li>Monthly medication delivery</li>
              <li>Ongoing dosage optimization</li>
            </ul>
            <a href="#waitlist" className="plan-btn">
              Join Waitlist
            </a>
          </div>
        </div>

        <p className="plans-note reveal">
          All plans are month-to-month with no long-term contracts. Peptide
          &amp; longevity add-ons (Sermorelin, BPC-157, NAD+) available for
          +$99/mo per person. Pricing subject to change prior to launch.
        </p>
      </section>

      {/* SYMPTOMS */}
      <section className="problem-section">
        <div className="section-overline reveal">The Decline Is Real</div>
        <h2 className="section-title reveal">You Both Feel It</h2>
        <p className="section-subtitle reveal">
          It&apos;s not just aging. It&apos;s a hormone imbalance — and
          it&apos;s fixable.
        </p>

        <div className="problem-grid">
          <div className="problem-col his reveal">
            <h3>His Symptoms</h3>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Vanishing Energy</strong>
                <p>
                  You used to power through the day. Now you&apos;re dragging by
                  2pm with no explanation.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Brain Fog</strong>
                <p>
                  Difficulty concentrating, forgetting things, feeling mentally
                  dull. That&apos;s not normal.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Loss of Drive</strong>
                <p>
                  Motivation, ambition, physical performance — all declining. In
                  the gym and everywhere else.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Weight Gain</strong>
                <p>
                  Adding fat around the midsection despite diet and exercise.
                  Your metabolism isn&apos;t what it was.
                </p>
              </div>
            </div>
          </div>

          <div className="problem-col hers reveal">
            <h3>Her Symptoms</h3>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Sleep Disruption</strong>
                <p>
                  Night sweats, insomnia, waking exhausted. Your body&apos;s
                  thermostat is broken.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Mood Shifts</strong>
                <p>
                  Anxiety, irritability, emotional swings that feel out of
                  character and out of control.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Metabolic Changes</strong>
                <p>
                  Weight that won&apos;t budge no matter what you do. Your
                  hormones are working against you.
                </p>
              </div>
            </div>
            <div className="symptom-item">
              <div className="symptom-icon"></div>
              <div>
                <strong>Lost Vitality</strong>
                <p>
                  Low energy, thinning hair, declining confidence. You
                  don&apos;t feel like yourself anymore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-cta reveal">
          <p>
            This isn&apos;t something you accept. It&apos;s something you fix —
            together.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-overline reveal">Treatment Lines</div>
        <h2 className="section-title reveal">Four Pillars of Optimization</h2>
        <p className="section-subtitle reveal">
          Every treatment is prescribed by licensed providers and delivered
          monthly to your door.
        </p>

        <div className="services-grid">
          <div className="service-card reveal">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 4v32M12 8l8-4 8 4M10 20h20M14 28h12" />
              <circle cx="20" cy="20" r="16" />
            </svg>
            <h3>TRT</h3>
            <p>
              Testosterone replacement therapy. Restore energy, strength, focus,
              and drive. Dosing optimized through regular lab work and provider
              consultations.
            </p>
          </div>

          <div className="service-card reveal">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 4c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" />
              <path d="M20 10v6l4 4" />
              <path d="M12 28c2-3 5-5 8-5s6 2 8 5" />
            </svg>
            <h3>HRT</h3>
            <p>
              Hormone replacement for women. Address menopause, perimenopause,
              and estrogen imbalance. Better sleep, stable mood, renewed
              vitality.
            </p>
          </div>

          <div className="service-card reveal">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" />
            </svg>
            <h3>ED Medication</h3>
            <p>
              Prescription erectile dysfunction treatment. Prescribed by
              licensed providers, shipped discreetly. Confidence restored — no
              awkward office visits.
            </p>
          </div>

          <div className="service-card reveal">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 20h24M20 8v24" />
              <circle cx="20" cy="20" r="4" />
              <circle cx="20" cy="20" r="12" />
              <circle cx="20" cy="20" r="16" />
            </svg>
            <h3>Peptides &amp; Longevity</h3>
            <p>
              Sermorelin, BPC-157, NAD+ — cutting-edge peptide therapies for
              recovery, anti-aging, and cellular optimization. The science of
              feeling younger.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="section-overline reveal">The Process</div>
        <h2 className="section-title reveal">Four Steps to Optimized</h2>
        <p className="section-subtitle reveal">
          No waiting rooms. No insurance hassles. No judgement.
        </p>

        <div className="steps-row">
          <div className="step reveal">
            <div className="step-num">I</div>
            <h4>Assessment</h4>
            <p>
              Complete a 5-minute online health assessment from your phone or
              computer.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-num">II</div>
            <h4>Consultation</h4>
            <p>
              Video consultation with a licensed provider who reviews your
              health history and goals.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-num">III</div>
            <h4>Lab Work</h4>
            <p>
              Lab kit shipped to your home or visit a local lab. Results reviewed
              by your provider.
            </p>
          </div>
          <div className="step reveal">
            <div className="step-num">IV</div>
            <h4>Treatment</h4>
            <p>
              Personalized medication delivered monthly to your door. Ongoing
              optimization included.
            </p>
          </div>
        </div>
      </section>

      {/* WHY SPARTAN */}
      <section className="why-section">
        <div className="section-overline reveal">The Philosophy</div>
        <h2 className="section-title reveal">Why Spartan</h2>
        <div className="why-content reveal">
          <blockquote>
            Spartan men were elite warriors. Spartan women were the most
            physically empowered women in the ancient world. Both were expected
            to be strong, disciplined, optimized.
          </blockquote>
          <p className="why-text">
            That&apos;s our philosophy. Peak performance isn&apos;t just for him
            or just for her — it&apos;s for your household. We believe the
            strongest families are built on two people who refuse to accept
            decline as inevitable.
          </p>
          <p className="why-text">
            Doctor-guided. Delivered to your door. Built for couples who take
            their health — and each other — seriously.
          </p>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="waitlist-section" id="waitlist">
        <div className="waitlist-inner">
          <div className="section-overline reveal">Launching Soon</div>
          <h2 className="section-title reveal">Get Early Access</h2>
          <p className="section-subtitle reveal">
            Be the first to know when Spartan Home Health goes live. Early
            members receive priority onboarding and launch pricing.
          </p>

          <WaitlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Spartan Home Health</div>
        <p className="footer-disclaimer">
          Spartan Home Health is a wellness technology platform. We are not a
          medical provider. All medical services are provided by independent
          licensed healthcare providers through our telehealth partner network.
          Compounded medications are prepared by state-licensed pharmacies and
          are not FDA-approved as finished products. Individual results may vary.
          This website does not provide medical advice, diagnosis, or treatment.
        </p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <p className="footer-copy">
          &copy; 2026 Spartan Home Health. All rights reserved.
        </p>
      </footer>
    </>
  );
}
