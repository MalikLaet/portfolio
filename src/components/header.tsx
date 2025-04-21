import github from "../../public/github.svg"
import email from "../../public/icon-mail.svg"

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white px-4 pt-10 pb-6 gap-6 sm:gap-8 md:gap-12 max-w-screen-xl mx-auto">
      <a
        href="mailto:isklikma@gmail.com"
        className="flex items-center gap-2 hover:opacity-80 hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <img src={email} alt="email" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <p className="text-base sm:text-lg md:text-xl">Email</p>
      </a>
{/* 
      <a
        href="https://www.instagram.com/maliklaet"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <img src={insta} alt="instagram" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <p className="text-base sm:text-lg md:text-xl">Instagram</p>
      </a> */}

      <a
        href="https://github.com/maliklaet"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <img src={github} alt="github" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <p className="text-base sm:text-lg md:text-xl">Github</p>
      </a>
    </div>
  )
}
