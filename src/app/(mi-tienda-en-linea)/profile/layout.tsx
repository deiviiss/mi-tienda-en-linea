export default async function ProfileLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='pt-[81.57px] px-1 sm:px-5 md:px-10 lg:px-14 xl:px-20'>
      {children}
    </div>
  )
}
