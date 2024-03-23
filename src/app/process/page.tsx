import { type Metadata } from 'next'

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

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
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
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, learn about their every day business requirements to understand
          what makes their business tick.
        </p>

        <p>
          At Refobe, our dedicated team conducts thorough research to understand the requirements of modern-day businesses in the realm of IT and internet marketing solutions. With a focus on IT for business, we stay updated on the latest industry trends to tailor our solutions accordingly. By leveraging our expertise in IT and internet marketing solutions, we help businesses achieve their goals in today's competitive landscape.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Market study</TagListItem>
        <TagListItem>Lost of Research</TagListItem>


      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. 
          </p>
          <p>
          We embark on a journey of understanding our clients' goals 
          and meticulously analyzing the most effective path to fulfill their needs. Our approach is rooted in collaboration, 
          as we work closely with our clients to gain insight into their objectives, challenges, and aspirations. 
        </p>
      </div>

      <Blockquote
        author={{ name: 'Saroj Phuyal', role: 'CEO of Speedwings' }}
        className="mt-12"
      >
       Refobe's consistent progress updates kept us fully informed throughout the entire project lifecycle, ensuring we were always aware of the project's status and progress.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        With precision and dedication, we work tirelessly to transform ideas into reality.
         Throughout the process, we remain committed to transparency and communication, 
        keeping our clients informed every step of the way. And{' '}
          <strong className="font-semibold text-neutral-950">
            finally
          </strong>
          We deliver the product you desire!
        </p>
        <p>
        In no time, you'll have a product that perfectly suits your business needs and leaves you satisfied.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>  */}
      {/* <List className="mt-8">
         <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem> 
         <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem> 
      </List> */}
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
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
       We're dedicated to leading the way in emerging trends and technologies, ensuring our partners in IT jobs, IT recruitment, and business IT solutions receive top-quality products that reflect industry trends and our core values. That's our commitment at Refobe.
        </p>
      </SectionIntro>

      <Container className="mt-24">
      <GridList>
  <GridListItem title="Co-operation">
    Working together seamlessly to achieve shared goals.
  </GridListItem>
  <GridListItem title="Efficiency">
    Streamlining processes for optimal performance.
  </GridListItem>
  <GridListItem title="Adaptability">
    Flexibility to adjust to changing circumstances.
  </GridListItem>
  <GridListItem title="Honesty">
    Transparency and integrity in all interactions.
  </GridListItem>
  <GridListItem title="Communication">
    Open and effective exchange of information.
  </GridListItem>
  <GridListItem title="Innovation">
    Embracing creativity to drive progress and growth.
  </GridListItem>
</GridList>

      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients.
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
