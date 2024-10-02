'use client';
import type { FC } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

import SearchResultPageContainer from '@free-market-web-ui/container/SearchResultPage.container';

const SearchResultPage: FC = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search');

    if (!search) {
        redirect('/');
    }
    return <SearchResultPageContainer />;
};

export default SearchResultPage;
