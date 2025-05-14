import { createSignal } from 'solid-js'

export function FeatureCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = createSignal(false)

  return (
    <div
      class='pixel-border'
      style={{
        'text-align': 'center',
        padding: '1.5rem',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: isHovered() ? 'translateY(-5px)' : 'translateY(0)',
        'box-shadow': isHovered() ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          'font-size': '2.5rem',
          'margin-bottom': '1rem',
          color: 'var(--accent-color)',
          animation: isHovered() ? 'bounce 0.5s' : 'none',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          'font-size': '1.2rem',
          'margin-bottom': '1rem',
        }}
      >
        {title}
      </h3>
      <p style={{ 'font-size': '0.9rem' }}>{description}</p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
