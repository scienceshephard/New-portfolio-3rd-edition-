
export const Home = () => {
  return (
    <main className=" flex font-handlee shadow-homepage  p-[40px] gap-[20px]  font-bold bg-[var(--bg-color)] m-auto mainHome">
      <div className="flex flex-col justify-center items-start gap-[20px] w-[400px] h-[200px]">
        <p className=" animate-hometyping w-[16ch] text-nowrap overflow-clip  text-[32px] text-amber-100">Hi there! ✌🏿 I am</p>
        <p className="text-5xl ope-gradient pb-0.5 text-white ml-[50px]">Opeyemi Raphael-Ogbe</p>
        <p className="text-amber-100 text-[20px] ">I am a software engineer.  Always ready to attend to your service.</p>
        <a href="/Opeyemi-Raphael-Ogbe-Resume.pdf" target="_blank" className="hover:text-[var(--nav-text-hover-color)] hover:duration-[10] hover:delay-[100] hover:ease-in-out "> My CV</a>
      </div>
      <div className=" w-[400px] ml-3 h-[400px] overflow-hidden rounded-full shadow-homepage">
        <img src="/Profile_Pic.jpg" alt="Opeyemi Ogbe Profile Picture"  className="w-full h-full object-cover"/>
      </div>
    </main>
  )
}
  