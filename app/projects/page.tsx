"use client";
import Image from "next/image";

export default function projectsPage() {
  return (
    <main className="min-h-screen w-full max-w-5xl mx-auto flex flex-col items-start justify-start mt-4 gap-4">
      <div className="ml-10 mr-10 mb-10 flex flex-col gap-10">
        <h1 className="">Projects - Content</h1>
        <div>
          <h2>Work From Home studios</h2>
          <p>
            Work From Home Studios I cofounded with Katrín Hersisdóttir. It is a
            web design studio where I implement websites for various brands and
            artists.
          </p>
          <div className="flex flex-col ml-8 mt-4 gap-4">
            <a
              href="https://www.suskin.is"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-customPurple text-xl hover:underline"
            >
              Suskin.is
            </a>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/images/suskinLanding.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={900}
                height={700}
                className="w-ful h-auto"
              />
              <Image
                src="/images/suskinShopping.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={900}
                height={700}
                className="w-ful h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col ml-8 mt-4 gap-4">
            <a
              href="https://www.katrinhers.is"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-customPurple text-xl hover:underline"
            >
              Katrinhers.is
            </a>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/images/katrinWebsite.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={900}
                height={700}
                className="rounded shadow-lg h-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>Indó Currency Converter</h2>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src="/images/indoConverter1.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={200}
                height={400}
                className="h-auto"
              />
              <Image
                src="/images/indoConverter2.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={200}
                height={400}
                className=" h-auto"
              />
            </div>
            <div className="text-left">
              <p>
                During my time working for indo I gained experience in
                programming with Flutter, which was used to develop the front
                end of their application. Since I was new to the programming
                using Flutter, my first tasks revolved around all sorts of bug
                fixes in order to learn to navigate through the application and
                learn the basics. As my knowledge grew deeper I was trusted with
                larger tasks, and the most important feature I was trusted with
                was the currency converter, which I also got to design
                using Figma.
              </p>
              <p>
                It uses a backend API that regularly updates each currency,
                which is sourced from Enfuce. The converter has a larger
                selection of curencies than any other icelandic bank app, and
                prioritizes most recently used currencies to optimize the client
                experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Linear Regression</h2>
          <div className="flex flex-col gap-4 ml-8 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src="/images/pikkolo .png" // Must be in the public/ folder
                alt="Magic Wand"
                width={300}
                height={400}
                className=" h-auto"
              />
            </div>
            <div className="text-left">
              <h2 className="text-xl">Motivation</h2>
              <p>
                Pikkoló strives for a more sustainable future in grocery
                shopping by letting users pick up grocery orders in stations
                located near them, thus minimizing air pollution and encouraging
                users to be less dependent on daily car travels. Me and another
                student were approached by a professor who was at the time
                teaching us machine learning and operational programming and
                given the opportunity to implement a visual solution for
                pikkoló, calculating where to situate their pick up stations.
              </p>
              <h2 className="text-xl">Method</h2>
              <p>
                Linear regression was performed on data we found appropriate for
                the project, sourced from the geographic information system of
                Reykjavik and the GPS system TomTom. Data analization and Linear
                Regression was performed using R and mapped onto a map of
                Reykjavik, creating a simple and understandeable solution that
                Pikkoló uses for potential business opportunities.
              </p>
              <h2 className="text-xl">Outcome</h2>
              <p>
                Linear regression was performed on data we found appropriate for
                the project, sourced from the geographic information system of
                Reykjavik and the GPS system TomTom. Data analization and Linear
                Regression was performed using R and mapped onto a map of
                Reykjavik, creating a simple and understandeable solution that
                Pikkoló uses for potential business opportunities.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>InkUp</h2>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src="/images/inkUp1.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={200}
                height={400}
                className="h-auto"
              />
              <Image
                src="/images/inkup2.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={200}
                height={400}
                className=" h-auto"
              />
            </div>
            <p>
              inkUp is a startup idea that was born when I took an
              entrepreneurially focused course in the University of Iceland. It
              is a platform that connects tattoo artists to potential customers
              in order to make the tattoo industry less underground than it is.
              The idea was born when me and my friends were going on a trip to
              Berlin and wanted to get tattoos, but had nowhere to look since we
              didnt know anyone that could advise us on where to look. That is
              when I thought that having a platform that connects where clients
              can get an overview on all artists and their portfolios in their
              nearby area would benefit both parties. Artists would get more
              exposure and clients would have easier access to the art they wish
              for, since getting a tattoo is a lifelong decision. In the course
              I took in Iceland I made a business model for inkUp along with a
              business pitch that was pitched to investors and important people
              in the tech industry. I then took another similar course in Madrid
              when I re-iterated the business model and pitch, after getting
              artists and clients to take a number of surveys in order to get
              more in depth knowledge on inkUp s target market. I also designed
              the whole front end logic for the application using Figma and
              using a mock database, implemented a mock version of the
              application using Adalo, which is accesible here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
