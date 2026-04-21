// BroadLight — Footer

const Footer = () => {
  const year = 2026;
  return (
    <footer data-screen-label="Footer" style={ftStyles.footer}>
      <div style={ftStyles.grid}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <img src="../../assets/BL_logo.png" alt="BroadLight" style={{ width: 32, height: 32, objectFit: 'contain' }} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>BroadLight</span>
          </div>
          <p style={ftStyles.address}>
            〒100-0003<br />
            東京都千代田区大手町3-1-1<br />
            大手町ビル5F
          </p>
          <div style={ftStyles.socials}>
            {['in', '𝕏', 'f'].map((s, i) => (
              <a key={i} href="#" style={ftStyles.socialIcon}>{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={ftStyles.colHead}>ナビゲーション</h4>
          <ul style={ftStyles.ul}>
            {['会社概要', '事業案内', '採用情報', 'プライバシーポリシー'].map((t, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                <a href="#" style={ftStyles.link}>{t}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={ftStyles.colHead}>お問い合わせ</h4>
          <p style={ftStyles.address}>
            <a href="mailto:info@broadlight.co.jp" style={{ ...ftStyles.link, color: '#56E0FF' }}>
              info@broadlight.co.jp
            </a>
          </p>
          <p style={ftStyles.address}>ビジネスのAI変革について、まずはお気軽にご相談ください。</p>
        </div>
      </div>
      <div style={ftStyles.bottom}>
        <p style={{ margin: 0 }}>© {year} BroadLight Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const ftStyles = {
  footer: {
    background: 'linear-gradient(135deg, #091A4D 0%, #0E245F 50%, #2B1E67 100%)',
    padding: '4rem 2rem 2rem',
  },
  grid: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
    gap: '3rem', marginBottom: '3rem',
  },
  colHead: { color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 700 },
  ul: { listStyle: 'none', padding: 0, margin: 0 },
  link: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s ease' },
  address: { color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.9rem' },
  socials: { display: 'flex', gap: 10, marginTop: 14 },
  socialIcon: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%', color: '#fff', textDecoration: 'none',
    fontSize: '0.85rem', fontWeight: 700,
    transition: 'all 0.3s ease',
  },
  bottom: {
    textAlign: 'center', paddingTop: '2rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem',
  },
};

Object.assign(window, { Footer });
