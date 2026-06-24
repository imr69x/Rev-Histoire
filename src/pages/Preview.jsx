
// iPhone 17 — dimensions logiques réelles (CSS pixels)
const SCREEN_W = 393
const SCREEN_H = 796
const BEZEL    = 13
const RADIUS_OUT  = 54
const RADIUS_IN   = 44

const PHONE_W  = SCREEN_W + BEZEL * 2
const PHONE_H  = SCREEN_H + BEZEL * 2

// Facteur d'affichage : réduit visuellement mais l'iframe
// reste à 393 px en interne (rendu mobile correct)
const SCALE = 0.68

export default function Preview() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >

      {/* Téléphone — wrapper aux dimensions affichées */}
      <div style={{
        position: 'relative',
        width:  PHONE_W * SCALE,
        height: PHONE_H * SCALE,
        flexShrink: 0,
      }}>
        {/* Conteneur réel à taille iPhone, réduit via transform */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: PHONE_W,
          height: PHONE_H,
          transform: `scale(${SCALE})`,
          transformOrigin: 'top left',
        }}>

        {/* Coque titane */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: RADIUS_OUT,
          background: 'linear-gradient(150deg, #c0c5cc 0%, #e2e5e9 25%, #8e9299 55%, #b5b9be 80%, #d0d3d7 100%)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)',
          height: PHONE_H,
        }} />

        {/* Bouton silence (gauche, haut) */}
        <div style={{
          position: 'absolute', left: -4, top: 120,
          width: 4, height: 32, borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(to right, #8e9299, #b5b9be)',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.3)',
        }} />
        {/* Volume + */}
        <div style={{
          position: 'absolute', left: -4, top: 168,
          width: 4, height: 56, borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(to right, #8e9299, #b5b9be)',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.3)',
        }} />
        {/* Volume − */}
        <div style={{
          position: 'absolute', left: -4, top: 236,
          width: 4, height: 56, borderRadius: '2px 0 0 2px',
          background: 'linear-gradient(to right, #8e9299, #b5b9be)',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.3)',
        }} />
        {/* Bouton power (droite) */}
        <div style={{
          position: 'absolute', right: -4, top: 180,
          width: 4, height: 72, borderRadius: '0 2px 2px 0',
          background: 'linear-gradient(to left, #8e9299, #b5b9be)',
          boxShadow: '2px 0 4px rgba(0,0,0,0.3)',
        }} />

        {/* Écran — bezel intérieur noir */}
        <div style={{
          position: 'absolute',
          inset: BEZEL,
          borderRadius: RADIUS_IN,
          overflow: 'hidden',
          background: '#000',
          height: SCREEN_H,
        }}>
          {/* Contenu blanc de l'écran */}
          <div style={{
            position: 'relative',
            width: SCREEN_W,
            height: SCREEN_H,
            background: '#fff',
            overflow: 'hidden',
            borderRadius: RADIUS_IN - 1,
          }}>

            {/* Dynamic Island */}
            <div style={{
              position: 'absolute', top: 14, left: '50%',
              transform: 'translateX(-50%)',
              width: 126, height: 37,
              borderRadius: 999,
              background: '#000',
              zIndex: 30,
            }} />

            {/* Status bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 59, zIndex: 20,
              display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between',
              padding: '0 28px 10px',
              pointerEvents: 'none',
            }}>
              <span style={{
                fontSize: 15, fontWeight: 600,
                fontFamily: '-apple-system, SF Pro Text, system-ui, sans-serif',
                color: '#000', letterSpacing: '-0.3px',
              }}>9:41</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* Signal barres */}
                <svg width="17" height="12" viewBox="0 0 17 12" fill="#000">
                  <rect x="0"   y="7.5" width="3" height="4.5" rx="0.6" />
                  <rect x="4.5" y="5"   width="3" height="7"   rx="0.6" />
                  <rect x="9"   y="2.5" width="3" height="9.5" rx="0.6" />
                  <rect x="13.5" y="0"  width="3" height="12"  rx="0.6" opacity="0.25" />
                </svg>
                {/* Wifi */}
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <circle cx="8" cy="11" r="1.4" fill="#000" />
                  <path d="M4 7.5C5.3 6.2 6.6 5.5 8 5.5s2.7.7 4 2" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M1.5 5C3.5 3 5.7 2 8 2s4.5 1 6.5 3" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                {/* Batterie */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    position: 'relative', width: 24, height: 12,
                    borderRadius: 3, border: '1px solid rgba(0,0,0,0.75)',
                  }}>
                    <div style={{
                      position: 'absolute', left: 1, top: 1, bottom: 1,
                      width: 18, background: '#000', borderRadius: 2,
                    }} />
                  </div>
                  <div style={{
                    width: 2, height: 6, background: 'rgba(0,0,0,0.5)',
                    borderRadius: '0 1px 1px 0', marginLeft: 1,
                  }} />
                </div>
              </div>
            </div>

            {/* App iframe — pleine résolution iPhone 17 */}
            <iframe
              src="/dashboard"
              title="App preview"
              style={{
                position: 'absolute',
                inset: 0,
                width: SCREEN_W,
                height: SCREEN_H,
                border: 'none',
                paddingTop: 59,
                paddingBottom: 84,
                boxSizing: 'border-box',
              }}
            />

            {/* Safari bottom bar */}
            <div style={{
              position: 'absolute', bottom: 24, left: 0, right: 0,
              height: 60,
              background: 'rgba(249,249,249,0.94)',
              backdropFilter: 'blur(20px)',
              borderTop: '0.5px solid rgba(0,0,0,0.12)',
              zIndex: 25,
              display: 'flex',
              alignItems: 'center',
              padding: '0 14px',
              gap: 10,
            }}>
              {/* Bouton retour */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.35 }}>
                <path d="M11 4L6 9l5 5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Bouton suivant */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, opacity: 0.35 }}>
                <path d="M7 4l5 5-5 5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Barre URL */}
              <div style={{
                flex: 1,
                height: 36,
                background: 'rgba(0,0,0,0.06)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="2" stroke="rgba(0,0,0,0.4)" strokeWidth="1.1" />
                  <path d="M1 4h10" stroke="rgba(0,0,0,0.4)" strokeWidth="1.1" />
                  <path d="M5 1v11" stroke="rgba(0,0,0,0.4)" strokeWidth="1.1" />
                </svg>
                <span style={{
                  fontSize: 13, fontWeight: 400,
                  fontFamily: '-apple-system, system-ui, sans-serif',
                  color: 'rgba(0,0,0,0.5)',
                  letterSpacing: '-0.1px',
                }}>localhost:5173/dashboard</span>
              </div>

              {/* Share */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <path d="M10 2v10M6 6l4-4 4 4" stroke="#007AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 10v6a1 1 0 001 1h10a1 1 0 001-1v-6" stroke="#007AFF" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {/* Onglets */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <rect x="4" y="6" width="11" height="11" rx="2.5" stroke="#007AFF" strokeWidth="1.8" />
                <path d="M7 6V5a2 2 0 012-2h5a2 2 0 012 2v8a2 2 0 01-2 2h-1" stroke="#007AFF" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Home indicator */}
            <div style={{
              position: 'absolute', bottom: 8, left: '50%',
              transform: 'translateX(-50%)',
              width: 134, height: 5,
              borderRadius: 999,
              background: 'rgba(0,0,0,0.2)',
              zIndex: 30,
            }} />
          </div>
        </div>
        </div>{/* fin transform wrapper */}
      </div>{/* fin wrapper dimensions affichées */}

      <p style={{
        color: 'rgba(255,255,255,0.3)',
        fontSize: 11,
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.5px',
      }}>
        iPhone 17 · {SCREEN_W} × {SCREEN_H} pt · affiché à {Math.round(SCALE * 100)}%
      </p>
    </div>
  )
}
