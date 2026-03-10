"use client";

import Image from "next/image";

export default function CVPage() {
  return (
    <div
      id="cv-root"
      className="w-screen h-screen bg-white relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col p-4 md:p-6 gap-6 md:gap-10 text-black overflow-y-auto">
        <div className="w-full flex flex-row gap-6 md:gap-12">
          <Image
            src="/images/CVimage.jpeg"
            alt="Elisa"
            width={100}
            height={70}
            className="w-16 h-17 md:w-24 md:h-25"
          />
          <p className="text-xs md:text-sm">Elísa Björg Tryggvadóttir</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 text-xs">
          <div className="flex flex-col gap-4">
            <p>Skills</p>
            <div className="flex flex-col gap-1">
              <p>Next.js</p>
              {/* <p>React</p> */}
              <p>CSS</p>
              {/* <p>Vercel deployment</p> */}
              <p>Blender</p>
              <p>Touchdesigner</p>
              <p>SQL</p>
              <p>Unity</p>
              {/* <p>AWS</p> */}
              {/* <p>Prismic CMS</p> */}
              <p>Blender</p>
              <p>FL Studio</p>
              <p>Ableton</p>
              <p>English - Mother tongue</p>
              <p>French - Mother tongue</p>
              <p>Icelandic - Mother tongue</p>
              <p>Spanish - fluent</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p>Education</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>University of Iceland</p>
                <p>Bsc in software engineering</p>
                <p>August 2020-June 2023</p>
              </div>
              <div className="flex flex-col">
                <p>Universided Comillas Madrid</p>
                <p>Software engineering exchange program</p>
                <p>January 2023-June 2023</p>
              </div>
              <div className="flex flex-col">
                <p>Menntaskólinn í Reykjavík</p>
                <p>Junior college degree in sciences</p>
                <p>August 2017-May 2020</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-20 md:mt-0">
            <p>Work Experience</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Co teacher for Digital Methodologies</p>
                <p>Icelandic University of the Arts, 101 RVK</p>
                <p>February 2026 - current</p>
              </div>
              <div className="flex flex-col">
                <p>Programmer / Data visualizer</p>
                <p>MSRS navigation</p>
                <p>
                  Building a maritime navigation system using inertial
                  navigation
                </p>
                <p>Fall 2025 - current</p>
              </div>
              <div className="flex flex-col">
                <p>Computer science teacher</p>
                <p>Menntaskólinn í Reykjavík, 101 RVK</p>
                <p>2024 - current</p>
              </div>
              <div className="flex flex-col">
                <p>Website design and programming</p>
                <p>Work From Home Studios</p>
                <p>Freelance website making and designing.</p>
                <p>2024 - current</p>
              </div>
              <div className="flex flex-col">
                <p>Full stack developer</p>
                <p>Pikkolo, Bjargargata 102 RVK</p>
                <p>
                  Developed software in Next.js as well as designing in Figma
                </p>
                <p>Aug 2023 - Dec 2023</p>
              </div>
              <div className="flex flex-col">
                <p>Assistant teacher in Database theory</p>
                <p>University of Iceland, Sæmundargata 102 RVK</p>
                <p>Fall 2022</p>
              </div>
              <div className="flex flex-col">
                <p>Data analyst</p>
                <p>Pikkolo</p>
                <p>Rannís innovation project using linear regression.</p>
                <p>Summer 2022</p>
              </div>
              <div className="flex flex-col">
                <p>Front end internship</p>
                <p>Indo, Lagmuli, 108 RVK</p>
                <p>Programming in Flutter and design in Figma</p>
                <p>Summer 2022</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p>Other</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Workshop in creative coding</p>
                <p>WFH studios</p>
                <p>
                  Led a workshop for women and non-binary participants,
                  supporting confidence and ownership in digital creation.
                </p>
              </div>
              <div className="flex flex-col">
                <p>Board member</p>
                <p>Vertonet</p>
                <p>
                  Icelandic association of women and non-binary in technology
                </p>
              </div>
              <div className="flex flex-col">
                <p>DJ ÓK</p>
                <p>DJ and host events in Reykjavík</p>
                <p>Monthly radio show on drif.live</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print button (hidden on mobile, visible on desktop) */}
      <button
        onClick={() => window.print()}
        className="hidden md:block fixed right-4 bottom-4 px-4 py-2 print:hidden text-[#4d4d4d]"
        aria-label="Print this page"
      >
        Print
      </button>
    </div>
  );
}
