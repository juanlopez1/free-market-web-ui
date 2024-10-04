import Link from 'next/link';

import pkg from '@free-market-web-ui/../package.json';

const Footer = () => (
    <footer>
        <Link href={process.env.GITHUB_REPO_URL as string} target="_blank">
            GitHub
        </Link>
        |<p>Free Market Web UI by Juan Manuel López</p>|<p>v{pkg.version}</p>
    </footer>
);

export default Footer;
