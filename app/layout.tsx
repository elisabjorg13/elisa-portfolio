import "./globals.css";

export const metadata = {
  title: "Elisa Portfolio",
  description: "Elisa's 3D Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet" />
        <link rel="preload" href="/models/computer1.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/images/sky.hdr" as="image" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
