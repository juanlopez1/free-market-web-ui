import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@free-market-web-ui/app/globals.css';

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
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <html lang="en">
        <body className={`${proximaNovaFont.variable} antialiased`}>{children}</body>
    </html>
);

export default RootLayout;
