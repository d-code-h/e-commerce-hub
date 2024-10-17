import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'E-Commerce Hub: Full-Stack Product Management Platform',
  description:
    "The eCommerce Dashboard is a full-stack web application built with Next.js and Node.js that provides a seamless shopping experience. Users can browse and manage products, register, and log in to their accounts. The application features responsive design for optimal viewing across devices, dynamic product listings sourced from a mock API, and efficient global state management using React's Context API. The backend consists of a RESTful API that supports CRUD operations for products and user management, with authentication secured through JWT. The project is designed to demonstrate proficiency in modern web development practices, including API integration, form validation, and deployment strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
