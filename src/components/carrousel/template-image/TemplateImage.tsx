'use client'
import Image from 'next/image'

interface Props {
  src?: string
  alt: string
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className']
  width: number
  height: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const TemplateImage = ({
  src,
  alt,
  className,
  width,
  height,
  onMouseEnter,
  onMouseLeave
}: Props) => {
  const imageSrc = (src) || '/imgs/placeholder.jpg'

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />)
}
