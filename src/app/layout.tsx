import { Suspense } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@free-market-web-ui/app/globals.css';
import Spinner from '@free-market-web-ui/components/Spinner';

const proximaNovaFont = localFont({
    src: [
        {
            path: '../../public/fonts/proxima-nova-light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/proxima-nova-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/proxima-nova-semibold.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-proxima-nova',
});

export const metadata: Metadata = {
    title: 'Free Market Web UI',
    description: 'Code challenge for Mercado Libre',
    keywords: ['react', 'nextjs', 'mercado libre', 'server components'],
    openGraph: {
        title: 'Free Market Web UI',
        description: 'Empezá a buscar ahora y encontrá tu producto en instantes',
        url: process.env.SITE_URL,
    },
    twitter: {
        title: 'Free Market Web UI',
        description: 'Empezá a buscar ahora y encontrá tu producto en instantes',
    },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <html lang="en">
        <body className={`${proximaNovaFont.variable} antialiased`}>
            <Suspense fallback={<Spinner />}>{children}</Suspense>
        </body>
    </html>
);

export default RootLayout;
