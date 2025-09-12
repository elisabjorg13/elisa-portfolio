
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
            I am a 22 yr old programmer and UX designer. I graduated with a
            bachelors degree in software engineering from the University of
            Iceland in June 2023, after taking my last semester abroad in
            Madrid. I grew up in London but later moved to Iceland, where I am
            situated now.
          </p>
        </div>
        <div>
          <h1>My work</h1>
          <p>
            During my time studying my degree, I found myself drawn to front end
            design and programming, along with computer graphics. I also gained
            a lot of interest in data visualisation when I took part in a
            research project. Throughout my degree and beyond, I have developed
            software for various companies. Over time, I became increasingly
            involved in digital design as well. In the dynamic environment of
            small startups, versatility is key, and I discovered the importance
            of blending development skills with design knowledge. This hands-on
            experience allowed me to refine my abilities in both areas.
          </p>
        </div>
        <div>
          <h1 >
            Creative projects
          </h1>
          <p>
            During my time studying my degree, I found myself drawn to front end
            design and programming, along with computer graphics. I also gained
            a lot of interest in data visualisation when I took part in a
            research project. Throughout my degree and beyond, I have developed
            software for various companies. Over time, I became increasingly
            involved in digital design as well. In the dynamic environment of
            small startups, versatility is key, and I discovered the importance
            of blending development skills with design knowledge. This hands-on
            experience allowed me to refine my abilities in both areas.
          </p>
        </div>
      </div>


    </main>
  );
}
