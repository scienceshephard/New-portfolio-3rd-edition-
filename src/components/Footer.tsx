
export const Footer = () => {
  return (
    <footer className=" flex justify-between bg-gray-800 text-center mt-auto">
        <div className="flex ">
            <span className="p-[20px]">My Social links:</span>
            <a href="https://x.com/opeogbe" className=" p-[20px]"><img width={"30px"} src="/twitter-fill.svg" alt="Twitter link" /></a>
            <a href="https://github.com/scienceshephard" className=" p-[20px]"><img width={"30px"} src="/github-fill.svg" alt="GitHub link" /></a>
            <a href="https://www.instagram.com/opeogbe" className=" p-[20px]"><img width={"30px"} src="/linkedin-box-fill.svg" alt="Linkdln Link" /></a>
            <a href="www.linkedin.com/in/opeogbe" className=" p-[20px]"><img width={"30px"} src="/instagram-line.svg" alt="Instagram Link"/></a>
        </div>
        <div className="flex">
          <a href="maito:opeogbe22@gmail.com" className="p-[20px] hover:text-[var(--nav-text-hover-color)] transition-all ease-in-out duration-200 ">opeogbe22@gmail.com</a>
          <a href="https://wa.me/07042419880?text=Nice+to+meet+you.+I+need+your+service" className="border p-[20px]"><img width={"30px"} src="/whatsapp-fill.svg" alt="Whatsapp link" /></a>
        </div>
    </footer>
  )
}
