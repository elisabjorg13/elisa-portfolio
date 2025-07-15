import Scene from "./components/Scene";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-center fixed top-0 z-10 shadow-md">
        <h1 className="text-lg font-bold">My 3D Portfolio</h1>
      </header>
      <Scene />
    </div>
  );
}
