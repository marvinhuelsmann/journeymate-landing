'use client'
import {useId, useState} from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Unverbindlich Anfragen
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Du möchtest mit uns sprechen, <br/>kontaktiere uns durch unser Kontaktformular.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          E-Mail uns
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Anfragen', 'anfragen@mhcreations.com'],
            ['Presse', 'presse@mhcreations.de'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Folge uns
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [company, setCompany] = useState('')
    const [error, setError] = useState(false)

    const openMailClient = (e) => {
        e.preventDefault()
        console.log('Open Client')

        let data = {
            name,
            email,
            message
        }

        if (name !== '' || tel !== '' || email !== '' || message !== '') {
            window.location.href = "mailto:kontakt@marvhuelsmann.com?subject=" + name + " von " + company + " - " +  tel +   " - " + data.email + "&body=" + data.message;
        } else {
            setError(true)
        }
    }
  return (
    <>
      <PageIntro eyebrow="Kontaktiere uns" title="Zusammen arbeiten">
        <p>Wir können es kaum erwarten, von dir zu hören.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <FadeIn className="lg:order-last">
                <form method={"POST"}>
                    <h2 className="font-display text-base font-semibold text-neutral-950">
                        Interesse geweckt?
                    </h2>
                    <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                        <TextInput label="Name" name="name" autoComplete="name"   onChange={(e)=>{setName(e.target.value)}} />
                        <TextInput
                            label="E-Mail"
                            type="email"
                            name="email"
                            autoComplete="email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <TextInput
                            label="Unternehmen"
                            name="company"
                            autoComplete="organization"
                            onChange={(e)=>{setCompany(e.target.value)}}
                        />
                        <TextInput label="Telefonnummer" type="tel" name="phone" autoComplete="tel"   onChange={(e)=>{setTel(e.target.value)}}/>
                        <TextInput label="Nachricht" name="message"   onChange={(e)=>{setMessage(e.target.value)}}/>
                        <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                            <fieldset>
                                <legend className="text-base/6 text-neutral-500">Preis Budget</legend>
                                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    <RadioInput label="400 – 800€" name="budget" value="25" />
                                    <RadioInput label="800 – 1.200€" name="budget" value="50" />
                                    <RadioInput label="1.200 – 3.000€" name="budget" value="100" />
                                    <RadioInput label="Über 3.000€" name="budget" value="150" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <Button onClick={(e)=>{openMailClient(e)}} type="submit" className="mt-10">
                        Zusammen arbeiten
                    </Button>
                </form>
            </FadeIn>
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
