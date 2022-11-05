import React from 'react'
import kdkLogo from '../images/kdk-logo.png'

export const NavBar = () => {

    // window.addEventListener("scroll", function(e){
    //     const navRow1 =  document.getElementById('nav-row1');
    //     navRow1.classList.toggle('hidden');
    // })

    const hamBurgerEffect = (e) => {
        // const bar1 = document.getElementById('bar1');
        // const bar2 = document.getElementById('bar2');
        // const bar3 = document.getElementById('bar3');
        // const nav = document.getElementById('nav');

        // const close = document.getElementById('close');
        const menu = document.getElementById('menu');


        menu.classList.remove("translate-x-[1000px]");

        // bar1.classList.toggle("translate-y-2");
        // bar1.classList.toggle("bg-yellow-300");
        // bar1.classList.toggle("rotate-45");
        // bar2.classList.toggle("invisible");
        // bar3.classList.toggle("-translate-y-2");
        // bar3.classList.toggle("-rotate-45");
        // bar3.classList.toggle("bg-yellow-300");

        // nav.classList.toggle("translate-y-[-1000px]");
    }

    const closeMenu = (e) => {
        // const close = document.getElementById('close');
        const menu = document.getElementById('menu');

        menu.classList.add("translate-x-[1000px]");

    }

    return (
        <>{/* <header className='w-[50%] border border-red-600'> */}
        <nav className='fixed  md:relative w-full bg-white z-10'>
             <div id='nav-row1' className='row hidden px-4 bg-blue-600 text-white h-12 md:flex items-center justify-between'>
                <div className='left font-semibold flex gap-10 '>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <span className='mx-2'>0123456789</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-envelope"></i>
                        <span className='mx-2'>lorem123@gmail.com</span>
                    </div>
                </div>
                <div className='right font-semibold '>
                    <ul className=' flex gap-5'>
                        <li>Admission 2022</li>
                        <li>Examination</li>
                        <li>Recruitment 2021-22</li>
                        <li>Payment Link</li>
                        <li>Useful Links</li>
                    </ul>
                </div>
            </div> 
            <div className='row px-2 bg-slate-300 flex md:px-4 py-2 justify-between'>
                <div className='left flex  '>
                    <div className='flex items-center cursor-pointer '>
                        <img src={kdkLogo} alt='college-logo' className='w-10 sm:w-20' />
                        <span className='mx-2 sm:text-xl font-bold'>K.D.K College of Engineering</span>
                    </div>
                    {/* <ul className='flex items-center'>
                <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                    <a href='/'>Home</a>
                </li>
                <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                    <a href='/'>About</a>
                </li>
                <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                    <a href='/'>Contact</a>
                </li>
            </ul>
             */}
                </div>
                <div className='right flex justify-end  items-center md:w-[50%]'>
                    <ul className='hidden md:flex items-center'>
                        <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                            <a href='/'>Home</a>
                        </li>
                        <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                            <a href='/'>About</a>
                        </li>
                        <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                            <a href='/'>Contact</a>
                        </li>
                        <li className='mx-2 text-xl hover:underline-offset-8 hover:underline '>
                            <a href='/' className='flex items-center'>
                                Login
                            </a>
                        </li>

                    </ul>

                    {/* Hamburger */}
                    <div className="w-7 h-12 flex flex-col justify-center  ww cursor-pointer  md:hidden" id="hamburger" onClick={hamBurgerEffect}>
                        <div className="bg-black  w-full h-1 rounded-md transition-all delay-150" id="bar1"></div>
                        <div className="bg-black my-1 w-full h-1 rounded-md transition-all  " id="bar2"></div>
                        <div className="bg-black  w-full h-1 rounded-md transition-all delay-150" id="bar3"></div>
                    </div>

                    {/* Sidebar */}
                    <div id='menu' className='sidebar md:hidden translate-x-[1000px] transition-all duration-700 z-[999999999] w-[97vw] h-screen top-0 right-0 p-5 fixed bg-slate-800 text-white  '>
                        <div className='close m-3' id='close' onClick={closeMenu}>
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                        <ul className='text-center my-10 text-xl'>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Home</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>About</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Contact</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Login</a></li>
                            {/* Admission 2022



*/}
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Admission</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Examination</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Recruitment 2021-22</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Payment Link</a></li>
                            <li className='border-b-2 py-3 border-b-slate-400'><a href='/'>Useful Links</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    {/* </header> */}
            
        </>
    )
}
