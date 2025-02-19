import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://cdn.discordapp.com/attachments/904763470623428738/1031122504498024478/sake-black-death-smile-wallpaper-preview-photoaidcom-cropped_1.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Wow işte Discord ta müzik dinlemeyi seven birileri, sana bi sır vereyim bende müzik dinlemeyi çık severim:)."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@AstraBot" />
          <meta name="twitter:creator" content="@AstraBot" />
          <meta property="og:url" content="https://ddos-music.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DDoS music" />
          <link
            rel="icon"
            href="https://cdn.discordapp.com/attachments/904763470623428738/1031122504498024478/sake-black-death-smile-wallpaper-preview-photoaidcom-cropped_1.jpg"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Wow işte müzik dinlemeyi seven birileri."
          />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/904763470623428738/1031122504498024478/sake-black-death-smile-wallpaper-preview-photoaidcom-cropped_1.jpg" />
          <meta property="og:image:alt" content="DDoS music" />
          <meta property="og:locale" content="tr_TR" />
          <meta
            property="og:site_name"
            content="Astra Bot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="https://cdn.discordapp.com/attachments/904763470623428738/1031122504498024478/sake-black-death-smile-wallpaper-preview-photoaidcom-cropped_1.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
