"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700 || /Mobi|Android/i.test(navigator.userAgent));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function ProjectsPage() {
  const isMobile = useIsMobile();
  return (
    <>
      <style jsx>{`
        @media (min-width: 1920px) {
          .text-container {
            max-width: 70% !important;
          }
        }
      `}</style>
      <main
        className={`h-screen w-full mx-auto flex flex-col items-start justify-start mt-2 md:mt-4 gap-4 md:gap-20 cursor-pointer ${isMobile ? 'text-sm' : 'text-base'} pb-20`}
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
        }}
      >
      {/* Emergency Exit Button */}
      <button
        onClick={() => window.location.href = '/'}
        style={{
          position: 'absolute',
          top: isMobile ? '10px' : '20px',
          left: isMobile ? '5px' : '20px',
          width: isMobile ? '40px' : '60px',
          height: isMobile ? '40px' : '60px',
          borderRadius: '50%',
          border: '2px solid white',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 100,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }}
      >
        <svg 
          width={isMobile ? "25" : "40"} 
          height={isMobile ? "25" : "40"} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 17L7 12L12 7" 
            stroke="#9333ea" 
            strokeWidth="1.2" 
            strokeLinecap="butt" 
            strokeLinejoin="miter"
          />
        </svg>
      </button>
      <div
        className={`flex flex-col gap-4 md:gap-10 ${isMobile ? 'px-4 pt-12' : 'ml-20 mr-10 pt-12'}`}
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
        }}
      >
        <h1 className={isMobile ? "text-xl" : "text-3xl"}>Projects - Content</h1>
        <div>
          <h2>Work From Home studios</h2>
          <p className={`text-container ${isMobile ? 'text-left' : 'mr-24'}`}>
            Work From Home Studios I cofounded with Katrín Hersisdóttir. It is a
            web design studio where I implement websites for various brands and
            artists.
          </p>
          <div className={`flex flex-col mt-4 gap-4 ${isMobile ? 'text-left' : ''}`}>
            <a
              href="https://www.suskin.is"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-customPurple hover:underline ${isMobile ? 'text-base  ml-10' : ' ml-8 text-xl'}`}
            >
              Suskin.is
            </a>
            <div className={`flex flex-col gap-4 ${isMobile ? 'items-center w-full' : 'items-center'}`}>
              <Image
                src="/images/suskinLanding.png"
                alt="Suskin Landing Page"
                width={isMobile ? 300 : 900}
                height={isMobile ? 200 : 700}
                className="h-auto"
              />
              <Image
                src="/images/suskinShopping.png"
                alt="Suskin Shopping Page"
                width={isMobile ? 300 : 900}
                height={isMobile ? 200 : 700}
                className="h-auto"
              />
            </div>
          </div>
          <div className={`flex flex-col mt-4 gap-4 ${isMobile ? 'text-left' : ''}`}>
            <a
              href="https://www.katrinhers.is"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-customPurple hover:underline ${isMobile ? 'text-base ml-10' : ' ml-8 text-xl'}`}
            >
              Katrinhers.is
            </a>
            <div className={`flex flex-col gap-4 ${isMobile ? 'items-center w-full' : 'items-center'}`}>
              <video
                src="/images/whitebgmockupcompressed.mp4"
                width={isMobile ? 350 : 900}
                height={isMobile ? 250 : 700}
                className="h-auto"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={isMobile ? "text-sm" : ""}>Indó Currency Converter</h2>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src="/images/indoConverter1.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={isMobile?100:200}
                height={isMobile?200:400}
                className="h-auto"
              />
              <Image
                src="/images/indoConverter2.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={isMobile?100:200}
                height={isMobile?200:400}
                className=" h-auto"
              />
            </div>
            <div className={`text-container text-justify ${isMobile ? 'mr-8 ml-8' : 'ml-0 mr-24'}`}>
              <p>
                During my time working for indo I gained experience in
                programming with Flutter, which was used to develop the front
                end of their application. Since I was new to the programming
                using Flutter, my first tasks revolved around all sorts of bug
                fixes in order to learn to navigate through the application and
                learn the basics. As my knowledge grew deeper I was trusted with
                larger tasks, and the most important feature I was trusted with
                was the currency converter, which I also got to design
                using Figma.
              </p>
              <p>
                It uses a backend API that regularly updates each currency,
                which is sourced from Enfuce. The converter has a larger
                selection of curencies than any other icelandic bank app, and
                prioritizes most recently used currencies to optimize the client
                experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Linear Regression</h2>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src="/images/pikkolo .png" // Must be in the public/ folder
                alt="Magic Wand"
                width={isMobile?200:300}
                height={isMobile?100:400}
                className=" h-auto"
              />
            </div>
            <div className={`text-container text-justify flex flex-col gap-8 ${isMobile ? 'mr-8 ml-8' : 'ml-0 mr-24'}`}>
              <div className="flex flex-col gap-2">
                <p>Motivation</p>
                <p>
                  Pikkoló strives for a more sustainable future in grocery
                  shopping by letting users pick up grocery orders in stations
                  located near them, thus minimizing air pollution and
                  encouraging users to be less dependent on daily car travels.
                  Me and another student were approached by a professor who was
                  at the time teaching us machine learning and operational
                  programming and given the opportunity to implement a visual
                  solution for pikkoló, calculating where to situate their pick
                  up stations.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Method</p>
                <p>
                  Linear regression was performed on data we found appropriate
                  for the project, sourced from the geographic information
                  system of Reykjavik and the GPS system TomTom. Data
                  analization and Linear Regression was performed using R and
                  mapped onto a map of Reykjavik, creating a simple and
                  understandeable solution that Pikkoló uses for potential
                  business opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Outcome</p>
                <p>
                  Linear regression was performed on data we found appropriate
                  for the project, sourced from the geographic information
                  system of Reykjavik and the GPS system TomTom. Data
                  analization and Linear Regression was performed using R and
                  mapped onto a map of Reykjavik, creating a simple and
                  understandeable solution that Pikkoló uses for potential
                  business opportunities.
                </p>
              </div>
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
                width={isMobile?100:200}
                height={isMobile?200:400}
                className="h-auto"
              />
              <Image
                src="/images/inkUp2.png" // Must be in the public/ folder
                alt="Magic Wand"
                width={isMobile?100:200}
                height={isMobile?200:400}
                className=" h-auto"
              />
            </div>
            <div className={`text-container text-justify flex flex-col gap-8 mb-8 ${isMobile ? 'ml-8 mr-8' : ' mr-24'}`}>
              <p className="">
                inkUp is a startup idea that was born when I took an
                entrepreneurially focused course in the University of Iceland.
                It is a platform that connects tattoo artists to potential
                customers in order to make the tattoo industry less underground
                than it is. The idea was born when me and my friends were going
                on a trip to Berlin and wanted to get tattoos, but had nowhere
                to look since we didnt know anyone that could advise us on where
                to look. That is when I thought that having a platform that
                connects where clients can get an overview on all artists and
                their portfolios in their nearby area would benefit both
                parties. Artists would get more exposure and clients would have
                easier access to the art they wish for, since getting a tattoo
                is a lifelong decision.
              </p>
              <p>
                In the course I took in Iceland I made a business model for
                inkUp along with a business pitch that was pitched to investors
                and important people in the tech industry. I then took another
                similar course in Madrid when I re-iterated the business model
                and pitch, after getting artists and clients to take a number of
                surveys in order to get more in depth knowledge on inkUp s
                target market. I also designed the whole front end logic for the
                application using Figma and using a mock database, implemented a
                mock version of the application using Adalo, which is
                accesible here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
