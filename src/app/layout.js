import "./globals.css";
import Script from "next/script";
import { Footer, Navbar } from "./components";


export const metadata = {
  title: "La Crete Concept",
  description: "Leading Building, Construction and Real Estate Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../../images/lacreteicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Style CSS */}
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link rel="stylesheet" href="dist/color-default.css" />
        <link rel="stylesheet" href="dist/color-switcher.css" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/animate.css" rel="stylesheet" />
        <link href="css/owl.css" rel="stylesheet" />
        <link href="css/jquery.fancybox.css" rel="stylesheet" />
        <link href="css/style_slider.css" rel="stylesheet" />
        <link href="rs-plugin/css/settings.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script src="js/jquery-2.1.4.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/imagesloaded.pkgd.min.js"></Script>
        <Script src="js/isotope.pkgd.min.js"></Script>
        <Script src="js/jquery.fancybox8cbb.js?v=2.1.5"></Script>
        <Script src="js/owl.carousel.js"></Script>
        <Script src="rs-plugin/js/jquery.themepunch.tools.min.js"></Script>
        <Script src="rs-plugin/js/jquery.themepunch.revolution.min.js"></Script>
        <Script src="js/counter.js"></Script>
        <Script src="dist/color-switcher.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </html>
  );
}

