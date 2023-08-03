import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Entdecken" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Wir arbeiten eng mit unseren Kunden zusammen, um ihre{' '}
          <strong className="font-semibold text-neutral-950">Bedürfnisse</strong> und
          Ziele zu finden, indem wir uns in ihre täglichen Abläufe einbetten, um zu verstehen
          was ihr Geschäft antreibt.
        </p>
        <p>
         Wir überlegen uns mit dir zusammen das perfekte{' '}
          <strong className="font-semibold text-neutral-950">Design Layout</strong>{' '}
          aus — damit deine Brand eine einheitliche Website besitzt.
        </p>
        <p>
          Sobald wir alles abgeschlossen haben, zeigen wir dir einen umfassenden <strong className="font-semibold text-neutral-950">Entwurf</strong> und was noch wichtiger ist, einen Preis.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        In der Phase mit inbegriffen
      </h3>
      <TagList className="mt-4">
        <TagListItem>Design Skizzen</TagListItem>
        <TagListItem>Vorlagen</TagListItem>
        <TagListItem>Preis Einschätzung</TagListItem>
        <TagListItem>Beratung</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Entwickeln" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Wir leuchten dein Unternehmen wie Privatdetektiven aus, um das perfekte Design deiner neuer Webseite erstellen zu können.
        </p>
        <p>
          Mit diesem Wissen integrieren wir uns nahtlos in ihre täglichen Abläufe und gestalten maßgeschneiderte Lösungen, die das volle Potenzial deines Unternehmens entfesseln. Gemeinsam setzen wir die Weichen für nachhaltigen Erfolg und innovative Wachstumschancen.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Marvin Hülsmann', role: 'Entwickler' }}
        className="mt-12"
      >
        Ich glaube daran, dass der Schlüssel zum Erfolg darin liegt, eng mit meinen Kunden zusammenzuarbeiten, ihre Bedürfnisse zu verstehen und gemeinsam außergewöhnliche Ergebnisse zu erzielen.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Bereit stellen" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
            Bei unserem zuverlässigen  <strong className="font-semibold text-neutral-950">Hosting-Service</strong> stehen wir dir zur Seite,
            um deine Webseite sicher und zugänglich im Internet zu präsentieren.
        </p>
        <p>
            Wir sorgen dafür, dass deine Inhalte reibungslos geladen werden und deine Besucher ein <strong className="font-semibold text-neutral-950">reaktionsschnelles
            und ansprechendes Erlebnis</strong> genießen können.
        </p>
        <p>
            Du kannst dich darauf verlassen, dass deine Webseite in den besten Händen ist,
            während du dich auf das Wesentliche konzentrieren kannst - <strong className="font-semibold text-neutral-950">Dein Business voranzubringen.</strong> Wir freuen uns darauf, dir dabei zu
            helfen, online erfolgreich zu sein!
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        In der Phase mit inbegriffen
      </h3>
      <List className="mt-8">
        <ListItem title="Tests">
          Alle unsere Services werden bevor sie Online gehen, vielfältig getestet.
        </ListItem>
        <ListItem title="Infastruktur">
          Wir können dir eine Infastruktur bereitstellen, deine Webseite mühelos und 24/7 Online zur Verfügung zu stellen.
        </ListItem>
        <ListItem title="Support">
          Du hast Änderungswünsche? Wir sind sofort dar, um deine Webseite aktuell zu halten.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Unsere Stärken"
        title="Balance zwischen Zuverlässigkeit und Innovationn"
      >
        <p>
            Wir sind bestrebt, bei neuen Technologien Trends immer an der Spitze zu bleiben.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Sorgfältig">
              Der erste Teil jeder Partnerschaft besteht darin, sorgfälltig miteinander zu arbeiten.
          </GridListItem>
          <GridListItem title="Effizient">
              Wir sind stolz darauf, keine Frist zu verpassen.
          </GridListItem>
          <GridListItem title="Anpassungsfähig">
              Unsere größte Herausforderung besteht darin
              deine Bedürfnisse in etwas umzuwandeln, das einzigartig ist.
          </GridListItem>
          <GridListItem title="Ehrlich">
              Wir sind in allen unseren Prozessen transparent und setzen auf das einfache.
          </GridListItem>
          <GridListItem title="Loyal">
              Wir pflegen langfristige Beziehungen zu unseren Kunden, um das beste Erlebnis für unseren Kunden zu bieten.
          </GridListItem>
          <GridListItem title="Innovativ">
              Die Technologien entwickeln sich ständig weiter und wir auch. Wir sind
              Ständig auf der Suche nach neuen Innovationen.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Unsere Geheimformel',
  description:
    'Wir glauben an Effizienz und die Maximierung unserer Ressourcen, um unseren Kunden die beste Webseite zu bieten.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Unsere Geheimformel" title="Wie wir arbeiten">
        <p>
          Wir glauben an Effizienz und die Maximierung unserer Ressourcen, um das beste bereitzustellen
          für unsere Kunden bereitzustellen. Der wichtigste Weg, dies zu erreichen, ist die kreativität keine Grenzen zu setzen.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
