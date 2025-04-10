import github from "../../public/github.svg"
import email from "../../public/icon-mail.svg"
import insta from "../../public/icon-instagram.svg"

export default function Header() {
  return (
    <div className="flex justify-center items-center text-white p-4 pt-12 gap-12">
      <a href="mailto:isklikma@gmail.com" className="flex flex-row items-center gap-2 justify-center hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out">
        <img src={email} alt="email" className="w-8 h-8" />
        <p className="text-xl">Email</p>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/maliklaet" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 justify-center hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out">
        <img src={insta} alt="instagram" className="w-8 h-8" />
        <p className="text-xl">Instagram</p>
      </a>

      {/* GitHub */}
      <a href="https://github.com/maliklaet" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 justify-center hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out">
        <img src={github} alt="github" className="w-8 h-8" />
        <p className="text-xl">Github</p>
      </a>
{/* 
      <a href="https://wa.me/5511999038780" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 justify-center hover:opacity-80 transition">
        <img src="/public/icon-whatsapp.svg" alt="whatsapp" className="w-8 h-8" />
        <p className="text-xl">WhatsApp</p>
      </a>  */}
        </div>
    
  )
}
