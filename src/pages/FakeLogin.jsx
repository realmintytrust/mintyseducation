import { useEffect, useState } from 'react';

const expectedUser = import.meta.env.VITE_FAKE_LOGIN_USER ?? 'Test';
const expectedPass = import.meta.env.VITE_FAKE_LOGIN_PASS ?? 'Admin';

const styles = {
  shell: {
    minHeight: '100vh',
    backgroundColor: '#0b1120',
    color: '#fff',
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  announcement: {
    background: '#0f62fe',
    textAlign: 'center',
    padding: '.45rem 1rem',
    fontSize: '.9rem',
    letterSpacing: '.04em',
  },
  announcementError: {
    background: '#dc2626',
    color: '#fee2e2',
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.25rem clamp(1rem, 4vw, 4rem)',
    background: 'rgba(2, 6, 23, 0.85)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.25)',
    position: 'sticky',
    top: 0,
    zIndex: 2,
  },
  logoGroup: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.75rem',
  },
  logoIcon: {
    width: '42px',
    height: '42px',
    objectFit: 'contain',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 700,
    letterSpacing: '.08em',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '.95rem',
    color: '#cbd5f5',
    textTransform: 'uppercase',
    letterSpacing: '.08em',
  },
  enrollBtn: {
    background: '#0f62fe',
    color: '#fff',
    border: 'none',
    padding: '.65rem 1.5rem',
    borderRadius: '.5rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  hero: {
    position: 'relative',
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      "linear-gradient(120deg, rgba(7, 11, 30, 0.9), rgba(11, 21, 52, 0.6)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'saturate(0.85)',
    zIndex: 0,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
    padding: '4rem clamp(1rem, 6vw, 6rem)',
  },
  heroText: {
    flex: '1 1 360px',
    color: '#f8fafc',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1rem',
    lineHeight: 1.1,
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: '#e2e8f0',
    maxWidth: '520px',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  heroMeta: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    color: '#cbd5f5',
    fontSize: '.9rem',
  },
  card: {
    flex: '0 0 360px',
    background: 'rgba(13, 23, 60, 0.92)',
    backdropFilter: 'blur(8px)',
    padding: '2.25rem',
    borderRadius: '1.25rem',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    boxShadow: '0 40px 60px rgba(0, 0, 0, 0.35)',
  },
  badge: {
    fontSize: '.85rem',
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: '#93c5fd',
    marginBottom: '.8rem',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '.5rem',
  },
  subheading: {
    fontSize: '.95rem',
    color: '#cbd5f5',
    marginBottom: '1.5rem',
    lineHeight: 1.5,
  },
  label: {
    display: 'block',
    fontSize: '.85rem',
    fontWeight: 500,
    color: '#cbd5f5',
    marginBottom: '.35rem',
  },
  input: {
    width: '100%',
    borderRadius: '.75rem',
    border: '1px solid rgba(148, 163, 184, 0.35)',
    background: 'rgba(11, 14, 35, 0.65)',
    color: '#f8fafc',
    padding: '.85rem 1rem',
    fontSize: '.95rem',
    marginBottom: '1.1rem',
    outline: 'none',
    transition: 'border-color .2s ease, box-shadow .2s ease',
  },
  button: {
    width: '100%',
    borderRadius: '.9rem',
    border: 'none',
    background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    color: '#f8fafc',
    padding: '.95rem',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity .2s ease, transform .2s ease',
  },
  error: {
    color: '#f87171',
    fontSize: '.85rem',
    marginTop: '-.5rem',
    marginBottom: '1rem',
  },
  footerNote: {
    marginTop: '2rem',
    fontSize: '.8rem',
    color: '#cbd5f5',
    letterSpacing: '.04em',
  },
};

const FakeLogin = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [announcement, setAnnouncement] = useState(
    'ENROLLMENT FOR THE 2026-27 SCHOOL YEAR IS OPEN -- APPLY BY MAY 15 TO GUARANTEE CAMPUS CHOICE',
  );
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const incorrectMessage = 'Username Or Password is inncorect';

  useEffect(() => {
    const sequence = ['ArrowLeft', 'ArrowUp', 'ArrowUp', 'ArrowDown'];
    let position = 0;

    const handleKey = (event) => {
      const isArrowKey = ['ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(event.key);
      if (isArrowKey) event.preventDefault();

      if (gateUnlocked) return;

      if (event.key === sequence[position]) {
        position += 1;
        if (position === sequence.length) {
          setGateUnlocked(true);
          setAnnouncement('Error 404');
          position = 0;
        }
      } else {
        position = event.key === sequence[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gateUnlocked]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!gateUnlocked) {
      setError(incorrectMessage);
      setPassword('');
      return;
    }

    if (username.trim() === expectedUser && password === expectedPass) {
      setError('');
      onSuccess?.();
      setUsername('');
      setPassword('');
      return;
    }

    setError(incorrectMessage);
    setPassword('');
  };

  const isErrorNotice = announcement === 'Error 404';

  return (
    <div style={styles.shell}>
      <div
        style={{
          ...styles.announcement,
          ...(isErrorNotice ? styles.announcementError : {}),
        }}
      >
        {announcement}
      </div>

      <div style={styles.navBar}>
        <div style={styles.logoGroup}>
          <img src="/pictures/GradHat.png" alt="Minty's Education" style={styles.logoIcon} />
          <div style={styles.logo}>Minty's Education</div>
        </div>
        <nav style={styles.navLinks}>
          <span>New Families</span>
          <span>Schools</span>
          <span>Departments</span>
          <span>Parent Portal</span>
          <span>Athletics</span>
        </nav>
        <button style={styles.enrollBtn}>Enroll</button>
      </div>

      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.badge}>Minty's Education</div>
            <h1 style={styles.heroTitle}>Preparing students to be future ready.</h1>
            <p style={styles.heroSubtitle}>
              Minty's Education supports every learner with college, career, and life pathways. Access instructional
              tools, campus dashboards, and support tickets from this secure portal.
            </p>
            <div style={styles.heroMeta}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem' }}>128 Programs</strong>
                Signature academies, CTE pathways, and early college options.
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.4rem' }}>District News</strong>
                Spring showcase tours begin April 8. RSVP inside the portal.
              </div>
            </div>
            <p style={styles.footerNote}>
              Property of Minty's Education - Security monitored - © {new Date().getFullYear()}
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Portal Login</h2>
            <p style={styles.subheading}>Use your Minty's Education network credentials. Multi-factor prompts follow.</p>
            <form onSubmit={handleSubmit}>
              <label style={styles.label} htmlFor="portal-username">
                Username
              </label>
              <input
                id="portal-username"
                style={styles.input}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="Admin"
                onFocus={(e) => {
                  e.target.style.borderColor = '#38bdf8';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.35)';
                  e.target.style.boxShadow = 'none';
                }}
              />

              <label style={styles.label} htmlFor="portal-password">
                Password
              </label>
              <input
                id="portal-password"
                style={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="Enter your password"
                onFocus={(e) => {
                  e.target.style.borderColor = '#38bdf8';
                  e.target.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.35)';
                  e.target.style.boxShadow = 'none';
                }}
              />

              {error && <div style={styles.error}>{error}</div>}

              <button
                type="submit"
                style={styles.button}
                onMouseDown={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseUp={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Sign In
              </button>
          </form>
        </div>
        </div>
      </section>

    </div>
  );
};

export default FakeLogin;
