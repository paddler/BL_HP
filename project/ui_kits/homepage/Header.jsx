// BroadLight — Header component
// Sticky nav that highlights active section on scroll

const Header = ({ activeSection }) => {
  const navItems = [
    { id: 'company', label: '会社情報' },
    { id: 'services', label: '事業領域' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollTop = 0 || window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  };

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.inner}>
        <div style={headerStyles.logo}>
          <img src="../../assets/BL_logo.png" alt="BroadLight" style={{ height: 36, width: 36, objectFit: 'contain' }} />
          <span style={headerStyles.logoText}>BroadLight</span>
        </div>
        <nav style={headerStyles.nav}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                ...headerStyles.navBtn,
                ...(activeSection === item.id ? headerStyles.navBtnActive : {})
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={headerStyles.cta}
          >
            ご相談はこちら
          </button>
        </nav>
      </div>
    </header>
  );
};

const headerStyles = {
  header: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(9,26,77,0.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
    height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: { display: 'flex', alignItems: 'center', gap: 10 },
  logoText: { color: '#fff', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.02em' },
  nav: { display: 'flex', alignItems: 'center', gap: 4 },
  navBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: 'rgba(255,255,255,0.75)', fontFamily: 'inherit',
    fontSize: '0.9rem', fontWeight: 500, padding: '6px 14px',
    borderRadius: 8, transition: 'all 0.2s ease',
  },
  navBtnActive: { color: '#56E0FF', background: 'rgba(86,224,255,0.1)' },
  cta: {
    marginLeft: 12, padding: '8px 20px',
    background: 'linear-gradient(135deg, #23C9F3 0%, #1662D9 100%)',
    color: '#fff', border: 'none', borderRadius: 50, cursor: 'pointer',
    fontSize: '0.85rem', fontWeight: 700, fontFamily: 'inherit',
    boxShadow: '0 4px 14px rgba(35,201,243,0.35)',
    transition: 'all 0.3s ease',
  },
};

Object.assign(window, { Header });
