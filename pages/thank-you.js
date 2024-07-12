import { useRouter } from 'next/navigation'
import GoogleTagManager from '@/components/AnalyticsTag';
import TagManagerLanding from '@/components/tagManagerLanding';
import Head from 'next/head';

const ThankYou = () => {
    const router = useRouter()
    return (
        <>
        <Head>
        <title>NextUpgrad Website Development Services Thank You Page</title>
        <meta name="title" content="Nextupgrad" />
        <GoogleTagManager gtmId="GTM-TKZTSGKZ" />
        <meta name="googlebot" content="noindex" />
        <meta
          name="description"
          content="Thank you for choosing NextUpgrad Website Development Services. Connect with us to get support.
"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Thank you for choosing NextUpgrad Website Development Services. Connect with us to get support.
"
        />
        <meta
          property="og:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nextupgrad.us/" />
        <meta property="twitter:title" content="Nextupgrad" />
        <meta
          property="twitter:description"
          content="Dive into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth."
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
         <meta
          property="Blog for NextUpgrad USA"
          content="Get into our blog for expert and valuable insights into Web and Software. It offers knowledge to fuel your curiosity and online business growth"
        />
      </Head>
            <GoogleTagManager gtmId="G-EZNCL10K8J" />
            <TagManagerLanding gtmId="GTM-TKZTSGKZ" />
            <div className='content'>
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you !</h1>
                        <p>Thank you for choosing NextUpgrad Website Development Services!</p>
                        <p>Our team will review your submission and reach out to you within the next 24 hours.</p>
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