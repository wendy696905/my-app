import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center w-full max-w-screen-xl px-4 sm:px-8">
        <Image
          className="w-4/5 sm:w-1/2 h-auto object-cover mx-auto"
          src="/background.webp"
          alt="Next.js logo"
          width={1920}
          height={1080}
          priority
        />
        <h1 className="text-4xl font-bold text-center px-4 sm:px-60">
          Wendy&apos;s Raspberry Pi Project
        </h1>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex justify-center items-center gap-2 bg-[#4F4F4F] hover:bg-[#4a4a4a] dark:hover:bg-white text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-10"
          href="/stats"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raspberry Pi Status
        </a>
      </main>
    </div>
  );
}
