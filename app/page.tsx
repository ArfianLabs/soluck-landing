import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <div className="flex items-center">
        <p className="text-[20px] sm:text-[30px] md:text-[50px] text-white">
          Coming Soon to Bonkathon
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="bounce drop-shadow-glow">
            <Image
              src="/soluck-logo-tp.png"
              alt="Soluck Logo"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image src="/x.svg" alt="X Icon" width={100} height={100} />
          </div>
          <div className="w-[300px] h-[300px] flex items-center justify-center">
            <Image src="/bonk.svg" alt="Bonk Logo" width={200} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
}
