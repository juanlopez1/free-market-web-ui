'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';

import searchIcon from '@free-market-web-ui/images/search-icon.png';
import mlLogo from '@free-market-web-ui/images/ml-logo.png';

type FormValues = {
    query: string;
};

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const { control, handleSubmit } = useForm<FormValues>({ defaultValues: { query: search ?? '' } });

    const onSubmit: SubmitHandler<FormValues> = ({ query }) => {
        const searchQuery = query.trim();

        if (searchQuery === '' || searchQuery === search) {
            return;
        }
        const encodedQuery = encodeURIComponent(searchQuery);
        router.push(`/items?search=${encodedQuery}`);
    };

    return (
        <div className="search-bar">
            <Image src={mlLogo} alt="ml-logo" width={53} height={36} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="query"
                    control={control}
                    render={({ field: { name, onChange, onBlur, value } }) => (
                        <Fragment>
                            <input
                                type="text"
                                name={name}
                                id={name}
                                placeholder="Nunca dejes de buscar"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            <button type="submit">
                                <Image src={searchIcon} alt="search-icon" width={18} height={18} />
                            </button>
                        </Fragment>
                    )}
                />
            </form>
        </div>
    );
};

export default SearchBar;
