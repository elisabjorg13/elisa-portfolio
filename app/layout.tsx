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
        <link rel="preload" href="/models/me.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/models/computerwall.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/images/sky.hdr" as="image" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
