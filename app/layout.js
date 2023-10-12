import MessageUs from '@/components/global/MessageUs';
import { Karla } from 'next/font/google';
import './globals.css';

const customFont = Karla({ subsets: ['latin'] });

// For SEO
export const metadata = {
  icon: 'logo.png',
  title: 'Hacktoberfest 2023',
  description:
    'Our mission is to make each and every person associated with us able to make their first step towards open source.',
  openGraph: {
    images: [''],
    url: 'https://hacktober2023-kits.vercel.app/',
    title: 'Hacktoberfest 2023',
    description:
      'Our mission is to make each and every person associated with us able to make their first step towards open source.',
  },
  twitter: {
    images: [''],
    url: 'https://hacktober2023-kits.vercel.app/',
    title: 'Hacktoberfest 2023',
    description:
      'Our mission is to make each and every person associated with us able to make their first step towards open source.',
    cardType: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <MessageUs />
      <body className={`${customFont.className}`}>{children}</body>
    </html>
  );
}
