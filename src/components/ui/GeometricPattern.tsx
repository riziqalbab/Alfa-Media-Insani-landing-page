interface GeometricPatternProps {
    className?: string
    variant?: "dots" | "lines" | "circles" | "waves"
    color?: string
  }
  
  export function GeometricPattern({ className = "", variant = "dots", color = "currentColor" }: GeometricPatternProps) {
    if (variant === "dots") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill={color} opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
      )
    }
  
    if (variant === "lines") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="lines-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="20" y2="20" stroke={color} strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#lines-pattern)" />
          </svg>
        </div>
      )
    }
  
    if (variant === "circles") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circles-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="8" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circles-pattern)" />
          </svg>
        </div>
      )
    }
  
    if (variant === "waves") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="waves-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#waves-pattern)" />
          </svg>
        </div>
      )
    }
  
    return null
  }
  
  