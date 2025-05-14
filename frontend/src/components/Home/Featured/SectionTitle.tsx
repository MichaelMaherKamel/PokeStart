export function SectionTitle(props) {
  return (
    <div
      style={{
        'text-align': 'center',
        'margin-bottom': '2rem',
        position: 'relative',
      }}
    >
      {/* Small pokeball decorations */}
      <div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          left: 'calc(50% - 100px)',
          top: '10px',
          'border-radius': '50%',
          'background-image':
            'radial-gradient(circle, transparent 0%, transparent 35%, var(--primary-color) 35%, var(--primary-color) 45%, var(--text-dark) 45%, var(--text-dark) 47%, white 47%, white 53%, var(--text-dark) 53%, var(--text-dark) 55%, var(--primary-color) 55%, var(--primary-color) 65%, transparent 65%)',
          opacity: '0.7',
        }}
      />

      <h2
        style={{
          'font-size': '1.8rem',
          color: 'var(--accent-color)',
          'text-shadow': '2px 2px 0 var(--primary-color)',
          display: 'inline-block',
        }}
      >
        {props.children}
      </h2>

      <div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          right: 'calc(50% - 100px)',
          top: '10px',
          'border-radius': '50%',
          'background-image':
            'radial-gradient(circle, transparent 0%, transparent 35%, var(--primary-color) 35%, var(--primary-color) 45%, var(--text-dark) 45%, var(--text-dark) 47%, white 47%, white 53%, var(--text-dark) 53%, var(--text-dark) 55%, var(--primary-color) 55%, var(--primary-color) 65%, transparent 65%)',
          opacity: '0.7',
        }}
      />
    </div>
  )
}
