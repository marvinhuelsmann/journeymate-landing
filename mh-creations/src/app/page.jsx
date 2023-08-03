import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoMH from '@/images/LogoMH.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 ml-20 mr-20 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Wir haben mit Hunderten großartigen Menschen zusammengearbeitet
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Wir helfen dir, neue Möglichkeiten zu erkennen, zu erkunden und darauf zu reagieren."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
            Erkunde neue Horizonte und nutze ungenutzte Potenziale - Wir helfen dir dabei, auf digitale Veränderungen zu reagieren und erfolgreich zu wachsen
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Entwicklung">
                Wir sind auf die Erstellung kreativer, hochwertiger Unternehmens Seiten spezialisiert.
            </ListItem>
            <ListItem title="App Entwicklung">
                Wir verfügen über erfahrene Entwickler, die Experten für die neuesten App-Frameworks sind.
            </ListItem>
            <ListItem title="E-Commerce">
                 Ein unvergleichliches E-Commerce-Erlebnis, das auf deine Bedürfnisse zugeschnitten ist.
            </ListItem>
              <ListItem title="Branding">
                  Starke Marken, die Herzen erobern - Wir gestalten Identitäten, die bleibenden Eindruck hinterlassen.
              </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Individuelle Webseiten, nur für dich geschaffen.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Erhalte maßgeschneiderte Webseiten, die deine einzigartige Vision und Marke perfekt zum Ausdruck bringen. Wir entwickeln individuelle Lösungen, um deine Online-Präsenz zu optimieren und Besucher in Kunden zu verwandeln. Entdecke die Kraft einer persönlichen Webseite, die dein Unternehmen erfolgreich repräsentiert.
          </p>
        </FadeIn>
      </Container>

        {/*
        } <Clients />


      <CaseStudies caseStudies={caseStudies} />
        */}
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Marvin Hülsmann', logo: logoMH }}
      >
          MH Creations - Wo Kreativität und Technologie verschmelzen,
          um individuelle Webseiten zu erschaffen, die beeindrucken und begeistern.
         Von ansprechendem Design bis zur nahtlosen Benutzererfahrung bieten wir Webseiten, die in Erinnerung bleiben und dein Unternehmen
          erfolgreich präsentieren.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
