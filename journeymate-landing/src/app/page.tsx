import AppIcon from '../../public/images/JourneyMateAppIcon.svg'
import MHCreationsLogo from '../../public/images/MHCreationsLogo.svg'
import Image from 'next/image'
import Head from 'next/head';

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
          <meta name="apple-itunes-app" content="app-id=6448196185"/>
      </Head>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a href={"https://apps.apple.com/in/app/journeymate/id6448196185"} target={"_blank"} className="fixed left-0 top-0 flex w-full justify-center border-b  bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          Installiere die App im&nbsp;
          <code className="font-mono font-bold">AppStore</code>
        </a>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none font-bold flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://mhcreations.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erstellt von{' '}
            <Image
              src={MHCreationsLogo}
              alt="Vercel Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] shadow-2xl"
          src={AppIcon}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Privacy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Unsere Transparente Datenschutzerklärung, wie wir deine Daten speichern.
          </p>
        </a>

        <a
          href="mailto:presse@mhcreations.de"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Presse{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Du kannst hier offizielle Presseanfragen einreichen, die von uns beantwortet werden.
          </p>
        </a>

        <a
          href="https://www.instagram.com/journeymate_app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Instagram{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Entdecke mehr über die JourneyMate Welt und erhalte interne Einblicke.
          </p>
        </a>

        <a
          href="mailto:support@mhcreations.de"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hilfe{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Erhalte direkte Hilfe von anderen JourneyMate Nutzern oder unser Support-Team
          </p>
        </a>
      </div>
    </main>
  )
}

export default Page
