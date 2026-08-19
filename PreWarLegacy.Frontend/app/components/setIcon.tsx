interface SetIcon {
  imageSource: string;
  name: string;
  code: string;
  year: number;
}

export default function SetIcon({ imageSource, name, code, year }: SetIcon) {
  const label = `${name} (${code.toUpperCase()}, ${year})`;
  return (
    <img src={imageSource} alt={label} title={label} />
  )
}
