'use client'

import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function Page({ params }: { params: { slug: string } }) {
        const router = useRouter();

        const redirectToApp = () => {
                window.location.href = 'journeymate://journeymate.eu/post/' + params.slug;

                const timeout = setTimeout(() => {
                        router.push('https://apps.apple.com/us/app/journeymate/id6448196185').then(r => console.log("push"));
                }, 1000);

                window.addEventListener('unload', () => clearTimeout(timeout));
        };

        useEffect(() => {
                redirectToApp();
        }, []);
}