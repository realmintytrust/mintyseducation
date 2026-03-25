const backgroundImage =
  "linear-gradient(120deg, rgba(3, 3, 3, 0.85), rgba(3, 3, 3, 0.35)), url('/pictures/BlackCar.gif')";

const styles = {
  wrapper: {
    height: '100vh',
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    position: 'relative',
    padding: '2rem',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '2rem',
  },
  cross: {
    width: '160px',
    maxWidth: '60vw',
    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.65))',
    animation: 'mintySlide .8s ease-out forwards',
    opacity: 0,
  },
  mintyText: {
    fontSize: '3.5rem',
    color: '#2B2B2B',
    letterSpacing: '.35em',
    textShadow: '0 15px 40px rgba(0,0,0,0.45)',
    display: 'inline-block',
    fontFamily: '"Courier Prime", "Special Elite", "Cutive Mono", monospace',
    borderRight: '.12em solid rgba(43,43,43,0.7)',
    paddingRight: '.2em',
    marginTop: '.5rem',
    marginBottom: '.2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'mintyType 3s steps(10, end) forwards',
    animationFillMode: 'forwards',
  },
  creditText: {
    fontSize: '1rem',
    color: '#2B2B2B',
    letterSpacing: '.1em',
    textAlign: 'center',
    textTransform: 'none',
    animation: 'mintySlide 1s ease-out forwards',
    opacity: 0,
  },
  button: {
    background: 'rgba(248, 250, 252, 0.2)',
    border: '1px solid rgba(248, 250, 252, 0.4)',
    color: '#f8fafc',
    padding: '0.85rem 2.75rem',
    borderRadius: '999px',
    fontSize: '.95rem',
    fontWeight: 600,
    letterSpacing: '.35em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
    animation: 'mintySlide 1.2s ease-out forwards',
    opacity: 0,
  },
  gunsLink: {
    position: 'absolute',
    bottom: '1.25rem',
    left: '1.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.25rem',
    animation: 'mintySlideFixed 1.1s ease-out forwards',
    opacity: 0,
  },
  gunsImage: {
    width: '52px',
    height: '52px',
    objectFit: 'contain',
  },
};

const IntroGate = ({ onContinue }) => (
  <div style={styles.wrapper}>
    <div style={styles.overlay}>
      <style>
        {`
          @keyframes mintyType {
            0% { width: 0; opacity: 0; }
            15% { opacity: 1; }
            70% { width: 96%; opacity: 1; }
            85% { opacity: 1; }
            100% { width: 96%; opacity: 1; border-color: transparent; }
          }
          @keyframes mintySlide {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes mintySlideFixed {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <img src="/pictures/Cross.gif" alt="" style={styles.cross} />
      <div style={styles.mintyText}>𝓜𝓲𝓷𝓽𝔂</div>
      <p style={styles.creditText}>All credits to DogeUB for the Proxy</p>
      <button style={styles.button} onClick={onContinue}>
        Bypass
      </button>
    </div>
    <a
      href="https://guns.lol/shadow.101"
      target="_blank"
      rel="noreferrer"
      style={styles.gunsLink}
    >
      <img src="/pictures/blackguns.png" alt="Blackguns" style={styles.gunsImage} />
    </a>
  </div>
);

export default IntroGate;
