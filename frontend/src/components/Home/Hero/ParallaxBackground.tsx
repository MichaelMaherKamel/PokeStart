export function ParallaxBackground() {
  return (
    <>
      {/* Parallax Pokéball in background */}
      <div
        class='parallax'
        data-speed='-0.2'
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-100px',
          'background-image':
            'radial-gradient(circle, transparent 0%, transparent 35%, var(--primary-color) 35%, var(--primary-color) 45%, var(--text-dark) 45%, var(--text-dark) 47%, white 47%, white 53%, var(--text-dark) 53%, var(--text-dark) 55%, var(--primary-color) 55%, var(--primary-color) 65%, transparent 65%)',
          'border-radius': '50%',
          opacity: '0.2',
          'z-index': '0',
        }}
      />

      {/* Additional Pokéballs */}
      <div
        class='parallax'
        data-speed='0.1'
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          bottom: '-50px',
          left: '-50px',
          'background-image':
            'radial-gradient(circle, transparent 0%, transparent 35%, var(--primary-color) 35%, var(--primary-color) 45%, var(--text-dark) 45%, var(--text-dark) 47%, white 47%, white 53%, var(--text-dark) 53%, var(--text-dark) 55%, var(--primary-color) 55%, var(--primary-color) 65%, transparent 65%)',
          'border-radius': '50%',
          opacity: '0.15',
          'z-index': '0',
        }}
      />

      {/* Subtle stars in background */}
      <div
        class='stars-background'
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          'background-image': 'radial-gradient(white 1px, transparent 1px)',
          'background-size': '50px 50px',
          opacity: '0.1',
          'z-index': '0',
        }}
      />

      {/* Ground/Path at bottom */}
      <div
        class='parallax ground'
        data-speed='0.1'
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '20%',
          background: 'linear-gradient(to bottom, transparent, rgba(139, 69, 19, 0.5))',
          'z-index': '0',
        }}
      />

      {/* CSS for animations */}
      <style>
        {`
          @keyframes float-top {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes float-bottom {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          
          @keyframes float-left {
            0%, 100% { transform: translateX(-50%) translateY(0) rotate(-5deg); }
            50% { transform: translateX(-50%) translateY(-15px) rotate(-2deg); }
          }
          
          @keyframes float-center {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-15px); }
          }
          
          @keyframes float-right {
            0%, 100% { transform: translateX(50%) translateY(0) rotate(5deg); }
            50% { transform: translateX(50%) translateY(-15px) rotate(2deg); }
          }
        `}
      </style>
    </>
  )
}
