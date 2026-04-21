// BroadLight — Hero section

const Hero = ({ onCTAClick }) => {
  return (
    <section id="hero" data-screen-label="Hero" style={heroStyles.section}>
      {/* Background orb */}
      <div style={heroStyles.orb} />
      {/* Floating decorative elements */}
      <div style={{...heroStyles.deco, top:'18%', right:'10%', animationDelay:'0s'}}>🧠</div>
      <div style={{...heroStyles.deco, bottom:'22%', left:'8%', fontSize:'2.8rem', animationDelay:'1.5s'}}>🖥️</div>
      <div style={{...heroStyles.deco, top:'28%', left:'12%', fontSize:'3rem', animationDelay:'0.8s'}}>⚙️</div>

      <div style={heroStyles.content}>
        <div style={heroStyles.badge}>AI × Business Transformation</div>
        <h1 style={heroStyles.h1}>BroadLight</h1>
        <p style={heroStyles.tagline}>ビジネスをAIで変革する</p>
        <div style={heroStyles.btns}>
          <button onClick={onCTAClick} style={heroStyles.btnPrimary}>
            ご相談・お問い合わせ
          </button>
          <button
            onClick={() => window.scrollTo({ top: document.getElementById('services').offsetTop - 70, behavior: 'smooth' })}
            style={heroStyles.btnGhost}
          >
            事業領域を見る
          </button>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  section: {
    position: 'relative', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #0A3FBF 0%, #1662D9 40%, #23C9F3 80%, #56E0FF 100%)',
    overflow: 'hidden', padding: '2rem',
  },
  orb: {
    position: 'absolute', top: '-30%', right: '-15%',
    width: 700, height: 700,
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite',
    pointerEvents: 'none',
  },
  deco: {
    position: 'absolute', fontSize: '3.5rem',
    opacity: 0.18, animation: 'float 6s ease-in-out infinite',
    userSelect: 'none', pointerEvents: 'none',
  },
  content: { position: 'relative', zIndex: 2 },
  badge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff', fontSize: '0.85rem', fontWeight: 600,
    padding: '6px 18px', borderRadius: 50, marginBottom: '1.5rem',
    letterSpacing: '0.04em',
  },
  h1: {
    fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800,
    color: '#FFFFFF', marginBottom: '1rem',
    textShadow: '0 4px 20px rgba(0,0,0,0.3)', letterSpacing: '0.02em',
    lineHeight: 1.1,
  },
  tagline: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#fff',
    fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.2)',
    marginBottom: '2.5rem',
  },
  btns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    padding: '1rem 2.6rem',
    background: 'rgba(255,255,255,0.95)', color: '#1662D9',
    fontWeight: 700, fontSize: '1rem', border: 'none',
    borderRadius: 50, cursor: 'pointer', fontFamily: 'inherit',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
  btnGhost: {
    padding: '0.95rem 2.4rem',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(10px)',
    color: '#fff', fontWeight: 600, fontSize: '1rem',
    border: '1px solid rgba(255,255,255,0.35)',
    borderRadius: 50, cursor: 'pointer', fontFamily: 'inherit',
    transition: 'all 0.3s ease',
  },
};

Object.assign(window, { Hero });
