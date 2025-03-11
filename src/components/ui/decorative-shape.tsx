interface DecorativeShapeProps {
    className?: string
    variant?: "circle" | "square" | "triangle" | "zigzag"
    color?: string
  }
  
  export function DecorativeShape({ className = "", variant = "circle", color = "currentColor" }: DecorativeShapeProps) {
    if (variant === "circle") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="49" stroke={color} strokeWidth="2" opacity="0.2" />
            <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" opacity="0.15" />
          </svg>
        </div>
      )
    }
  
    if (variant === "square") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="98" height="98" stroke={color} strokeWidth="2" opacity="0.2" />
            <rect x="25" y="25" width="50" height="50" stroke={color} strokeWidth="2" opacity="0.15" />
          </svg>
        </div>
      )
    }
  
    if (variant === "triangle") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 1L99 99H1L50 1Z" stroke={color} strokeWidth="2" opacity="0.2" />
          </svg>
        </div>
      )
    }
  
    if (variant === "zigzag") {
      return (
        <div className={`absolute pointer-events-none ${className}`}>
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10L20 0L40 10L60 0L80 10L100 0" stroke={color} strokeWidth="2" opacity="0.2" />
          </svg>
        </div>
      )
    }
  
    return null
  }
  
  