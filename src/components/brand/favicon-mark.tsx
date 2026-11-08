export const faviconBackground = "#0a0a0a";
export const faviconForeground = "#fafafa";

const viewBox = 64;
const cornerRadius = 14;

// Плотная заглавная A по центру сетки 64, внутри центральных 80%,
// чтобы круглая маска Android не срезала ножки.
const letterPath = [
  "M 33.3 15",
  "L 48.5 50",
  "L 41.9 50",
  "L 38.17 41.4",
  "L 25.83 41.4",
  "L 22.1 50",
  "L 15.5 50",
  "L 30.7 15",
  "Z",
  "M 32 27.45",
  "L 28.09 36.2",
  "L 35.91 36.2",
  "Z",
].join(" ");

type FaviconMarkProps = {
  size: number;
  rounded?: boolean;
};

export function FaviconMark({ size, rounded = false }: FaviconMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      style={{ width: size, height: size }}
    >
      <rect
        width={viewBox}
        height={viewBox}
        rx={rounded ? cornerRadius : 0}
        fill={faviconBackground}
      />
      <path d={letterPath} fill={faviconForeground} fillRule="evenodd" />
    </svg>
  );
}

export function FaviconImage({ size, rounded }: FaviconMarkProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "transparent",
      }}
    >
      <FaviconMark size={size} rounded={rounded} />
    </div>
  );
}
