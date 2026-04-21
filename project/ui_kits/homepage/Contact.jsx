// BroadLight — Contact section

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', company: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" data-screen-label="Contact" style={ctStyles.section}>
      <h2 style={ctStyles.heading}>ご相談・お問い合わせ</h2>
      {submitted ? (
        <div style={ctStyles.success}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#56E0FF' }}>送信完了</div>
          <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>
            お問い合わせありがとうございます。内容を確認の上、ご連絡させていただきます。
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={ctStyles.form}>
          <div style={ctStyles.row}>
            <div style={ctStyles.group}>
              <label style={ctStyles.label}>お名前</label>
              <input name="name" type="text" value={form.name} onChange={handleChange} required style={ctStyles.input} placeholder="山田 太郎" />
            </div>
            <div style={ctStyles.group}>
              <label style={ctStyles.label}>会社名</label>
              <input name="company" type="text" value={form.company} onChange={handleChange} required style={ctStyles.input} placeholder="株式会社〇〇" />
            </div>
          </div>
          <div style={ctStyles.group}>
            <label style={ctStyles.label}>メールアドレス</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={ctStyles.input} placeholder="info@example.co.jp" />
          </div>
          <div style={ctStyles.group}>
            <label style={ctStyles.label}>お問い合わせ内容</label>
            <textarea name="message" value={form.message} onChange={handleChange} required style={ctStyles.textarea} placeholder="ご質問・ご相談内容をご記入ください" />
          </div>
          <button type="submit" style={ctStyles.btn}>送信する</button>
        </form>
      )}
      <p style={ctStyles.emailLine}>
        メールでのお問い合わせ:{' '}
        <a href="mailto:info@broadlight.co.jp" style={ctStyles.emailLink}>info@broadlight.co.jp</a>
      </p>
    </section>
  );
};

const ctStyles = {
  section: {
    padding: '8rem 2rem',
    background: 'linear-gradient(135deg, #1132A6 0%, #0F4FBF 50%, #2A69E8 100%)',
  },
  heading: {
    fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 700,
    color: '#fff', textAlign: 'center', marginBottom: '3rem',
  },
  form: { maxWidth: 700, margin: '0 auto' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem', marginBottom: '1.5rem' },
  group: { marginBottom: '1.5rem' },
  label: { display: 'block', color: '#fff', fontWeight: 600, marginBottom: 6, fontSize: '1rem' },
  input: {
    width: '100%', boxSizing: 'border-box',
    padding: '1rem 1.4rem', border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: 12, fontSize: '1rem', fontFamily: 'inherit',
    background: 'rgba(255,255,255,0.95)', color: '#2E3A52',
    outline: 'none', transition: 'all 0.3s ease',
  },
  textarea: {
    width: '100%', boxSizing: 'border-box',
    padding: '1rem 1.4rem', border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: 12, fontSize: '1rem', fontFamily: 'inherit',
    background: 'rgba(255,255,255,0.95)', color: '#2E3A52',
    minHeight: 150, resize: 'vertical', outline: 'none', transition: 'all 0.3s ease',
  },
  btn: {
    display: 'block', width: '100%', maxWidth: 300, margin: '2rem auto',
    padding: '1.2rem 3rem',
    background: 'linear-gradient(135deg, #23C9F3 0%, #1662D9 100%)',
    color: '#fff', fontSize: '1.1rem', fontWeight: 700,
    border: 'none', borderRadius: 50, cursor: 'pointer', fontFamily: 'inherit',
    boxShadow: '0 8px 20px rgba(35,201,243,0.4)',
    transition: 'all 0.3s ease',
  },
  emailLine: { textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem', color: '#fff', fontWeight: 600 },
  emailLink: { color: '#56E0FF', textDecoration: 'none', borderBottom: '2px solid #56E0FF' },
  success: {
    maxWidth: 500, margin: '0 auto', textAlign: 'center',
    background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(15px)',
    borderRadius: 20, padding: '3rem 2rem',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

Object.assign(window, { Contact });
