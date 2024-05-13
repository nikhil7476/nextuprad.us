// components/GoogleTagManager.js

const GoogleTagManager = ({ gtmId }) => (
  <>
    {/* Google Tag Manager Script */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}');
          `,
      }}
    ></script>
    {/* End Google Tag Manager Script */}
  </>
);

export default GoogleTagManager;
