import { getSession } from 'next-auth/react'
import React from 'react'
import Heading from '../components/Heading';
import AuthTest from './AuthTest';
import { getTokenWorkaround } from '../api/auth/[...nextauth]/authActions';

export default async function page() {
    const session = await getSession();
    const token = await getTokenWorkaround();

    return (
        <div>
            <Heading title='Session dashboard' subtitle={''}/>

            <div className='bg-blue-200 border-2 border-blue-500'>
                <h3 className='text-lg'>Session data</h3>
                <pre>{JSON.stringify(session,null,2)}</pre>
            </div>
            <div className='mt-4'>
                <AuthTest />
            </div>
            <div className='bg-green-200 border-2 border-blue-500 mt-4'>
                <h3 className='text-lg'>Token data</h3>
                <pre className='overflow-auto'>{JSON.stringify(token, null, 2)}</pre>
            </div>
        </div>
    )
}
