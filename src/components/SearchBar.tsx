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
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<FormValues>({ defaultValues: { query: search ?? '' } });

    const onSubmit: SubmitHandler<FormValues> = async ({ query }) => {
        const searchQuery = query.trim();

        if (searchQuery === '') {
            return;
        }
        router.push(`/items?search=${query}`);
    };

    return (
        <div className="search-bar">
            <Image src={mlLogo} alt="ml-logo" width={53} height={36} />
            <form className="search-input-container" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="query"
                    control={control}
                    render={({ field: { name, onChange, onBlur, value } }) => (
                        <Fragment>
                            <input
                                className="search-input"
                                type="text"
                                name={name}
                                id={name}
                                placeholder="Nunca dejes de buscar"
                                disabled={isSubmitting}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            <button className="search-button" type="submit" disabled={isSubmitting}>
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
