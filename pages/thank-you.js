import { useRouter } from 'next/navigation'
import GoogleTagManager from '@/components/AnalyticsTag';
import TagManagerLanding from '@/components/tagManagerLanding';
import Head from 'next/head';

const ThankYou = () => {
    const router = useRouter()
    return (
        <>
            <Head>
                <GoogleTagManager gtmId="GTM-TKZTSGKZ" />
            </Head>
            <GoogleTagManager gtmId="G-EZNCL10K8J" />
            <TagManagerLanding gtmId="GTM-TKZTSGKZ" />
            <div className='content'>
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you !</h1>
                        <p>Thanks for subscribing to our news letter. </p>
                        <p>You should receive a confirmation email soon </p>
                        <button className="go-home" onClick={() => router.push('/', { scroll: false })
                        }>
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ThankYou;