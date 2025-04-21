
const About = () => {
  return (
    <article className=" ml-[5px] h-full font-bold text-[var(--text-color)]">
      <div className="flex items-center px-2.5  ">
        <span>My Skills:</span>
        <ul className=" flex bg-gradient-to-b text-2xl ml-auto from-cyan-400 to-indigo-400 text-transparent bg-clip-text  justify-between w-[80%] overflow-x-auto whitespace-nowrap  scroll-smooth">
          <li className="px-2 py-1 "> JavaScript</li>
          <li className="px-2 py-1"> React</li>
          <li className="px-2 py-1"> Angular</li>
          <li className="px-2 py-1"> Java</li>
          <li className="px-2 py-1">Kotlin</li>
          <li className="px-2 py-1">C++</li>
          <li className="px-2 py-1">C</li>
          <li className="px-2 py-1">Python</li>
          <li className="px-2 py-1">PHP</li>
        </ul>
      </div>
      <div className="flex h-full">
        <img src="image_profile.jpg" className="float-right h-full"  alt="Opeyemi picture" />
        <div className="indent-[100px] w-[50%] about mx-auto mt-[30px] flex flex-col">
          <p>
            My name is Opeyemi Raphael-Ogbe. I am software engineer and a professional saxophone player. I started coding with web devlopment on HTML, CSS and JavaScript for about a year around 2019. It took that long because I didn't really have access to a PC. After mastering the basics of frontend I moved to C++ because I wanted to become a game developer. But this time I had a laptop and the whole time during covid 19 lockdown. But the laptop couldn't cope on running any any engines like Unreal because the hardware requirements couldn't meet the software but during that time of the lockdown I learnt C++ and Java and I became proficeint in building Dektop applications especially with Java.
          </p>
          <p>
            Currently I am a Computer Science student at Adekunle Ajasin University. I am also working as a web tutor for Digital World Tech Academy where we build, and train people into any tech field of their desires.
          </p>
        </div>
      </div>
    </article>
  )
}

export default About