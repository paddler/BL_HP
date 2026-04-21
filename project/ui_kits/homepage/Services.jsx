// BroadLight — Services section

const serviceData = [
  {
    icon: '🔍',
    title: 'AI戦略コンサルティング',
    desc: '企業のビジョンに基づき、AI導入の戦略立案から実行支援まで一貫してサポート。ビジネス変革とデジタルトランスフォーメーションを実現します。',
  },
  {
    icon: '📊',
    title: 'データサイエンスソリューション',
    desc: '高度なデータ分析と機械学習モデルの構築により、ビジネスインサイトの抽出と意思決定の最適化を支援します。',
  },
  {
    icon: '🤖',
    title: '自動化実装・運用',
    desc: '業務プロセスの自動化とワークフロー改善により、生産性向上とコスト削減を実現します。',
  },
];

const ServiceCard = ({ icon, title, desc }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...svcStyles.card,
        ...(hovered ? svcStyles.cardHover : {}),
      }}
    >
      <span style={svcStyles.icon}>{icon}</span>
      <h3 style={svcStyles.cardTitle}>{title}</h3>
      <p style={svcStyles.cardBody}>{desc}</p>
    </div>
  );
};

const Services = () => (
  <section id="services" data-screen-label="Services" style={svcStyles.section}>
    <h2 style={svcStyles.heading}>事業領域</h2>
    <div style={svcStyles.grid}>
      {serviceData.map((s, i) => <ServiceCard key={i} {...s} />)}
    </div>
  </section>
);

const svcStyles = {
  section: {
    padding: '8rem 2rem',
    background: 'linear-gradient(135deg, #0B2E9B 0%, #1347C8 40%, #1D78E5 70%, #55D9FF 100%)',
    overflow: 'hidden',
  },
  heading: {
    fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700,
    color: '#fff', textAlign: 'center', marginBottom: '4rem',
  },
  grid: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(15px)',
    borderRadius: 20, padding: '3rem 2rem',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    cursor: 'default',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
    background: 'rgba(255,255,255,0.18)',
  },
  icon: { fontSize: '3.5rem', marginBottom: '1.5rem', display: 'block' },
  cardTitle: { fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' },
  cardBody: { fontSize: '1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, margin: 0 },
};

Object.assign(window, { Services });
