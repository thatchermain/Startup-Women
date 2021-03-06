import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Host from "../components/Host";
import Program from "../components/Program";
import Speakers from "../components/Speakers";
import Tickets from "../components/Tickets";
import Host1 from "../public/speakers/Host.webp";
import Host2 from "../public/speakers/Host2.webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>StartUP Women</title>
        <meta name="description" content="Women conference Arbat Hall" />
        <meta name="keywords" content="StartUP Women, Conference" />
        <link rel="icon" href="/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;700;800;900&family=Playfair+Display:ital,wght@0,700;1,400&family=Raleway:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <About />
      <Speakers />
      <Host
        src={Host1}
        title="Start your dream project"
        quote="“Fortune smiles on the brave. You will never know what you are
              capable of until you risk it. ”"
        name="~ Cheryl Sandberg"
      />
      <Program />
      <div className="quote py-5">
        <em className="display-5 d-block text-center text-light">
          &quot;Control your destiny, or someone else will do it.&quot;
        </em>

        <h4 className="h5 text-center text-light pt-3">Joanne Welch</h4>
      </div>
      <Tickets />
      <Contact />
      <Footer />
    </div>
  );
}
