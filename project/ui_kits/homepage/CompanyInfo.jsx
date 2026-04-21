// BroadLight — Company Info section

const CompanyInfo = () => {
  return (
    <section id="company" data-screen-label="Company Info" style={ciStyles.section}>
      <div style={ciStyles.card}>
        <h2 style={ciStyles.heading}>会社情報</h2>
        <p style={ciStyles.body}>
          BroadLightは、最先端のAI技術を活用し、企業の持続的な成長と革新を支援する総合コンサルティング企業です。
          データサイエンス、機械学習、業務自動化の分野において、豊富な実績と専門知識を持ち、
          お客様のビジネス課題に対して最適なソリューションをご提案いたします。
        </p>
        <p style={ciStyles.body}>
          私たちは、単なる技術提供にとどまらず、お客様と共に未来を描き、
          実現可能な戦略を立案し、確実な成果へと導くパートナーであることを目指しています。
          AI技術の民主化を推進し、あらゆる企業が先進技術の恩恵を受けられる社会の実現に貢献します。
        </p>
        <div style={ciStyles.divider} />
        <p style={ciStyles.mission}>
          ミッション：AIで未来を拓き、社会に貢献する
        </p>
      </div>
    </section>
  );
};

const ciStyles = {
  section: {
    padding: '8rem 2rem',
    background: 'linear-gradient(180deg, #EAF7FF 0%, #F7FBFF 100%)',
  },
  card: {
    maxWidth: 900, margin: '0 auto',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: 24, padding: '4rem 3rem',
    boxShadow: '0 10px 50px rgba(10,63,191,0.15)',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  heading: {
    fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700,
    color: '#0C1837', marginBottom: '2rem', textAlign: 'center',
  },
  body: {
    fontSize: '1.1rem', lineHeight: 1.9, color: '#2E3A52', marginBottom: '1.5rem',
  },
  divider: {
    borderTop: '2px solid rgba(22,98,217,0.2)', marginTop: '2.5rem', paddingTop: '2rem',
  },
  mission: {
    fontSize: '1.2rem', fontWeight: 600, color: '#1662D9',
    marginTop: '2rem', marginBottom: 0,
  },
};

Object.assign(window, { CompanyInfo });
