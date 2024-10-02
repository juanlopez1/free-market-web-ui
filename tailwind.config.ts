import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
            },
            borderRadius: {
                sm: '0.250rem',
            },
        },
    },
    plugins: [],
};

export default config;
