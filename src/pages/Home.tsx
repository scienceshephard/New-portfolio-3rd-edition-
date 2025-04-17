
export const Home = () => {
  return (
    <main className="flex font-handlee shadow-homepage  p-[40px] gap-[20px]  font-bold bg-[var(--bg-color)] m-auto">
      <div className="flex flex-col justify-center items-start gap-[20px] w-[400px] h-[200px]">
        <p className="text-[16px] text-amber-100">Hi there! ✌🏿 I am</p>
        <p className="text-5xl text-white ml-[50px]">Opeyemi Raphael-Ogbe</p>
        <p className="text-amber-100">I am a software engineer. I am always ready to attend to your service.</p>
        <a href="/Opeyemi-Raphael-Ogbe-Resume.pdf" target="_blank" className="hover:text-[var(--nav-text-hover-color)] hover:duration-[10] hover:delay-[100] hover:ease-in-out "> My CV</a>
      </div>
      <div className="container w-[400px] ml-3 h-[400px] overflow-hidden rounded-full shadow-homepage">
        <img src="/Profile_Pic.jpg" alt="Opeyemi Ogbe Profile Picture"  className="w-full h-full object-cover"/>
      </div>
    </main>
  )
}
