
"use client";
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

export default function AboutPage() {
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen w-full flex flex-col items-start justify-start cursor-pointer">
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
      <div className={`max-w-[1200px] flex flex-col gap-[4rem]  ${isMobile ? 'px-4 pt-12 pb-4' : 'px-20 pt-12 pb-20 w-3/4'}`}>
        <div>
          <h1>About me</h1>
          <p>
            I&apos;m a junior software engineer from the University of Iceland. I currently work as a teacher in  computer science at Menntaskólinn í Reykjavík and collaborate on various programming projects. I DJ and produce music and perform at nightclubs in a duo called DJ ÓK.
            I&apos;m at my best around people, building connections and collaborating, while staying organized, structured, and persistent. I work across the mediums of 3D, sound and interfaces.
            My passion lies in the intersection of art and technology.

          </p>
        </div>
      </div>
    </main>
  );
}
