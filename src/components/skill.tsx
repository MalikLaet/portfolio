
export default function Skill() {
  return (
    <div className="flex flex-col items-center justify-center  p-12 gap-12"> 
        <h1 className="text-text-green text-4xl">Skill</h1>

        <div className="flex flex-row gap-12 items-center justify-center">

        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/html-icon.svg" alt="" />
            <p className="text-white text-xl">HTML</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/css-icon.svg" alt="" />
            <p className="text-white text-xl">CSS</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/js-icon.svg" alt="" />
            <p className="text-white text-xl">JavaScript</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/react.svg" alt="" />
            <p className="text-white text-xl">React</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/tailwind.svg" alt="" />
            <p className="text-white text-xl">Tailwind</p>
        </div>
            {/* <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/typescript.svg" alt="" />    
            <p>TypeScript</p> */}
        </div>
    </div>
  )
}
