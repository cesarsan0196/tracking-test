import React from 'react'

function HeaderMain() {
    return (
        <>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>
        <div
            class="relative flex h-screen bg-blue-50"
            x-data="setup()"
            x-init="$refs.loadingScreen.classList.add('hidden')"
            >   
            <div
                x-ref="loadingScreen"
                className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600 bg-opacity-20"
                
            >
                <span className="text-2xl">Loading...</span>
            </div>
            <aside
                className="fixed left-0 right-0 z-10 flex-col flex-shrink-0 h-full overflow-hidden transition-all bg-transparent bottom-10 xl:h-screen top-16 xl:static xl:z-auto"
                className="{'flex xl:w-64': isSidebarOpen, 'hidden xl:flex xl:w-16': !isSidebarOpen}"
            >
                    
                <div
                className="flex-shrink-0 hidden px-2 max-h-14 xl:items-center xl:justify-start xl:space-x-3 xl:flex xl:max-h-14 xl:h-full xl:px-4"
                >
                    
                    <button
                        click="toggleSidebar"
                        className="p-2 text-blue-600 rounded-full hover:bg-blue-200"
                        aria-label="Sidenav button"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    <a
                        href="/#"
                        className="{'xl:hidden': !isSidebarOpen}"
                        className="flex-shrink-0 text-2xl font-bold tracking-widest text-blue-800 uppercase"
                    >
                        K-WD
                    </a>
                </div>
                    
                <div
                className="fixed left-0 flex flex-col flex-1 max-h-screen px-2 overflow-hidden right-3 top-16 bottom-10 xl:static xl:pt-2 xl:pl-4 xl:mb-4"
                >
                    <div
                        className="{'min-w-full xl:w-14': isSidebarOpen}"
                        className="flex-1 max-h-full p-2 overflow-hidden bg-white rounded-md shadow-2xl lg:shadow-md hover:overflow-y-scroll"
                    >
                        <nav className="">
                            <ul className="space-y-2">
                                <li className="">
                                    <button className="flex items-center space-x-2">
                                        <span>
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                        </span>
                                        <span className="{'xl:hidden': !isSidebarOpen}"> Dashboard </span>
                                    </button>
                                </li>
                                <li className="">
                                    <a href="/login.html" className="flex items-center space-x-2">
                                        <span>
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                />
                                            </svg>
                                        </span>
                                        <span className="{'xl:hidden': !isSidebarOpen}" className="whitespace-nowrap"> Login Page </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
                   

        <div className="relative flex flex-col flex-1 h-full max-h-full overflow-y-scroll">
            <header classNameName="sticky top-0 flex items-center flex-shrink-0 w-full h-full bg-opacity-100 bg-blue-50 max-h-14">
            <div classNameName="flex items-center flex-shrink-0 xl:hidden">
                <button
                click="toggleSidebar"
                classNameName="p-2 text-blue-600 rounded-full hover:bg-blue-200"
                aria-label="Sidenav button"
                >
                <svg
                    classNameName="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>                     
            <div classNameName ="flex items-center justify-between flex-1">
                <a
                href="/#"
                classNameName="{'xl:hidden ml-2':isSidebarOpen, 'block ml-2':!isSidebarOpen}"
                classNameName="flex-shrink-0 text-2xl font-bold tracking-widest text-blue-800 uppercase"
                >
                INKA SELECT FRUIT
                </a>
                
                
                <nav classNameName="relative flex items-center justify-end flex-1 ml-3 lg:justify-start">   
                    <div x-data="{ searchOpen: false, searchResult: false }">
                        <button
                        click="searchOpen = !searchOpen"
                        classNameName="inline-block p-2 bg-blue-100 rounded-full hover:bg-blue-200"
                        aria-label="Open Search box button"
                        >
                            <svg
                                classNameName="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>                       


                    </div>


                </nav>







            </div>
        </header>    
        </div>
        </div> 
        </>
    )
}

export default HeaderMain
