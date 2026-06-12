interface Card{
    imageSource: string;
}

export default function Card({imageSource}: Card) {
  return (
    <img src={imageSource}/>
  )
}
