export function GooeyFilter() {
  return (
    <svg className="hidden pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="gooey"
          />
        </filter>
      </defs>
    </svg>
  )
}
