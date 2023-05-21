import './globals.css'

export const metadata = {
  title: 'Nouns Auction',
  description: 'One Noun, Every Day, Forever.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
