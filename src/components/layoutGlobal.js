import React from 'react';


function LayoutGlobal() {
    return (
        <>
              <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>K-WD Dashboard | Two Columns Sidebar</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="../build/css/tailwind.css" />
                    
                    <script src="https://cdn.jsdelivr.net/gh/alpine-collective/alpine-magic-helpers@0.5.x/dist/component.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>
                    
                </head>
                <body>
                    <div
                    x-data="setup()"
                    x-init="$refs.loading.classNameList.add('hidden'); setColors(color);"
                    className="{ 'dark': isDark}"
                    resize="watchScreen()"
                    >
                        <div className ="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
                              <div
                            x-ref="loading"
                            className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-primary-darker"
                            >
                                Loading......
                            </div> 
                            <div
                            show="isSidebarOpen"
                            onClick="isSidebarOpen = false"
                            className="fixed inset-0 z-10 bg-primary-darker lg:hidden"
                            style={{"opacity": 0.5}}
                            aria-hidden="true"
                            >                                
                            </div>
                            <x-transition
                                enter="transition-all transform duration-300 ease-in-out"
                                enter-start="-translate-x-full opacity-0"
                                enter-end="translate-x-0 opacity-100"
                                leave="transition-all transform duration-300 ease-in-out"
                                leave-start="translate-x-0 opacity-100"
                                leave-end="-translate-x-full opacity-0"
                            >
                            <aside
                                show="isSidebarOpen"
                                x-ref="sidebar"
                                keydown="window.innerWidth <= 1024 ? isSidebarOpen = false : ''"
                                tabIndex="-1"
                                className="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-primary-darker dark:bg-darker focus:outline-none"  
                            >
                                <div className="flex flex-col h-full">
                                    <nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                                        <div x-data="{ isActive: false, open: false}">
                                            <a
                                            href="/#"
                                            onClick="$event.preventDefault(); open = !open"
                                            className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                                            className="{'bg-primary-100 dark:bg-primary': isActive || open}"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="(open || isActive) ? 'true' : 'false'"
                                            >
                                                <span aria-hidden="true">
                                                    <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm"> Dashboards </span>
                                                <span className="ml-auto" aria-hidden="true">
                                                    
                                                    <svg
                                                    className="w-4 h-4 transition-transform transform"
                                                    className="{ 'rotate-180': open }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div role="menu" x-show="open" className="mt-2 space-y-2 px-7" aria-label="Dashboards">
                                                <a
                                                    href="../index.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Default
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Project Mangement (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    E-Commerce (soon)
                                                </a>  
                                            </div>
                                        </div>

                                        <div x-data="{ isActive: false, open: false }">
                                            <a
                                            href="/#"
                                            onClick="$event.preventDefault(); open = !open"
                                            className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                                            className="{ 'bg-primary-100 dark:bg-primary': isActive || open }"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="(open || isActive) ? 'true' : 'false'"
                                            >
                                                <span aria-hidden="true">
                                                    <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                    />
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm"> Components </span>
                                                <span aria-hidden="true" className="ml-auto">
                                                    
                                                    <svg
                                                    className="w-4 h-4 transition-transform transform"
                                                    className="{ 'rotate-180': open }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div x-show="open" className="mt-2 space-y-2 px-7" role="menu" arial-label="Components"> 
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Alerts (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Buttons (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Cards (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Dropdowns (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Forms (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Lists (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Modals (soon)
                                                </a>
                                            </div>
                                        </div>
                                        <div x-data="{ isActive: false, open: false }"> 
                                            <a
                                            href="/#"
                                            onClick="$event.preventDefault(); open = !open"
                                            className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                                            className="{ 'bg-primary-100 dark:bg-primary': isActive || open }"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="(open || isActive) ? 'true' : 'false'"
                                            >
                                                <span aria-hidden="true">
                                                    <svg
                                                        className="w-5 h-5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm"> Pages </span>
                                                <span aria-hidden="true" className="ml-auto">                                                    
                                                    <svg
                                                        className="w-4 h-4 transition-transform transform"
                                                        className="{ 'rotate-180': open }"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div x-show="open" className="mt-2 space-y-2 px-7" role="menu" arial-label="Pages">
                                                <a
                                                    href="../pages/blank.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Blank
                                                </a>
                                                <a
                                                    href="../pages/404.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    404
                                                </a>
                                                <a
                                                    href="../pages/500.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    500
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Profile (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Pricing (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Kanban (soon)
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Feed (soon)
                                                </a>
                                            </div>
                                        </div>
                                        <div x-data="{ isActive: false, open: false}"> 
                                            <a
                                            href="/#"
                                            onClick="$event.preventDefault(); open = !open"
                                            className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                                            className="{'bg-primary-100 dark:bg-primary': isActive || open}"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="(open || isActive) ? 'true' : 'false'"
                                            >
                                                <span aria-hidden="true">
                                                    <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm"> Authentication </span>
                                                <span aria-hidden="true" className="ml-auto">
                                                    
                                                    <svg
                                                    className="w-4 h-4 transition-transform transform"
                                                    className="{ 'rotate-180': open }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div x-show="open" className="mt-2 space-y-2 px-7" role="menu" aria-label="Authentication">
                                                <a
                                                    href="../auth/register.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Register
                                                </a>
                                                <a
                                                    href="../auth/login.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Login
                                                </a>
                                                <a
                                                    href="../auth/forgot-password.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Forgot Password
                                                </a>
                                                <a
                                                    href="../auth/reset-password.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Reset Password
                                                </a>
                                            </div>                                    
                                        </div>

                                        <div x-data="{ isActive: true, open: true}">
                                            <a
                                                href="/#"
                                                onClick="$event.preventDefault(); open = !open"
                                                className="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                                                className="{'bg-primary-100 dark:bg-primary': isActive || open}"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="(open || isActive) ? 'true' : 'false'"
                                                >
                                                <span aria-hidden="true">
                                                    <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                                    />
                                                    </svg>
                                                </span>
                                                <span className="ml-2 text-sm"> Layouts </span>
                                                <span aria-hidden="true" className="ml-auto">
                                                    
                                                    <svg
                                                    className="w-4 h-4 transition-transform transform"
                                                    className="{ 'rotate-180': open }"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div x-show="open" className="mt-2 space-y-2 px-7" role="menu" aria-label="Layouts">
                                                <a
                                                    href="two-columns-sidebar.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Two Columns Sidebar
                                                </a>
                                                <a
                                                    href="mini-plus-one-columns-sidebar.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Mini + One Columns Sidebar
                                                </a>
                                                <a
                                                    href="mini-column-sidebar.html"
                                                    role="menuitem"
                                                    className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                >
                                                    Mini Column Sidebar
                                                </a>        
                                            </div>
                                        </div>
                                    </nav>
                                    
                                    <div className="relative flex items-center justify-center flex-shrink-0 px-2 py-4 space-x-4">
                                        <button
                                            onClick="openSearchPanel"
                                            className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                                        >
                                            <span className="sr-only">Open search panel</span>
                                            <svg
                                            className="w-7 h-7"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                            </svg>
                                        </button>
                                        <div className="" x-data="{ open: false }">
                                            <button
                                                onClick="open = !open; $nextTick(() => { if(open){ $refs.userMenu.focus() } })"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="open ? 'true' : 'false'"
                                                className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                                                >
                                                <span className="sr-only">User menu</span>
                                                <img className="w-12 h-12 rounded-full" src="../build/images/avatar.jpg" alt="Pepito" />
                                            </button>
                                            <x-transition
                                                enter="transition-all transform ease-out"
                                                enter-start="-translate-y-1/2 opacity-0"
                                                enter-end="translate-y-0 opacity-100"
                                                leave="transition-all transform ease-in"
                                                leave-start="translate-y-0 opacity-100"
                                                leave-end="-translate-y-1/2 opacity-0"                                            
                                            >
                                            <div
                                                x-show="open"
                                                x-ref="userMenu"
                                                onClick="open = false"
                                                keydown="open = false"
                                                className="absolute max-w-xs py-1 bg-white rounded-md shadow-lg min-w-max left-5 right-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
                                                tabIndex="-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-label="User menu"
                                            >
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                                                >
                                                    Your Profile
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                                                >
                                                    Settings
                                                </a>
                                                <a
                                                    href="/#"
                                                    role="menuitem"
                                                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                                                >
                                                    Logout
                                                </a>                                              
                                            </div>
                                            </x-transition>
                                        </div>
                                        <button
                                            onClick="openSettingsPanel"
                                            className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
                                        >
                                            <span className="sr-only">Open settings panel</span>
                                            <svg
                                                className="w-7 h-7"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </aside>
                            </x-transition>
                            <div
                                x-show="isSecondSidebarOpen"
                                onClick="isSecondSidebarOpen = false"
                                className="fixed inset-0 z-10 bg-primary-darker lg:hidden"
                                style={{opacity: 0.5}}
                                aria-hidden="true"
                            >
                            </div>
                            <x-transition
                                enter="transition-all transform duration-300 ease-in-out"
                                enter-start="-translate-x-full opacity-0"
                                enter-end="translate-x-0 opacity-100"
                                leave="transition-all transform duration-300 ease-in-out"
                                leave-start="translate-x-0 opacity-100"
                                leave-end="-translate-x-full opacity-0"
                            >
                            <section
                                x-show="isSecondSidebarOpen"

                                x-ref="secondSidebar"
                                escape="window.innerWidth <= 1024 ? isSecondSidebarOpen = false : ''"
                                tabIndex="-1"
                                className="fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r dark:border-primary-darker dark:bg-darker lg:static focus:outline-none"
                                aria-labelledby="secondSidebarHeader"
                            >
                                <div className="flex flex-col h-screen">
                                    
                                    <div className="flex-shrink-0">
                                    <div className="px-4 pt-4 border-b dark:border-primary-darker">
                                        <h2 id="secondSidebarHeader" className="pb-4 font-semibold">Header</h2>
                                    </div>
                                    </div>

                                    {/* <!-- Panel content -->     */}
                                    <div className="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
                                    <div className="space-y-4">
                                        {/* <!-- Content --> */}
                                        <p className="px-4">Content</p>
                                    </div>
                                    </div>
                                </div>
                            </section>
                            </x-transition>
                            <div className="fixed flex items-center space-x-4 top-5 right-10 lg:hidden">
                                <button
                                    onClick="isSidebarOpen = true; $nextTick(() => { $refs.sidebar.focus() })"
                                    className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:ring"
                                >
                                    <span className="sr-only">Toggle main manu</span>
                                    <span aria-hidden="true">
                                        <svg
                                            x-show="!isSidebarOpen"
                                            className="w-8 h-8"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                        <svg
                                            x-show="isSidebarOpen"
                                            className="w-8 h-8"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                </button> 
                                <button
                                    onClick="isSecondSidebarOpen = true; $nextTick(() => { $refs.secondSidebar.focus() })"
                                    className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:ring"
                                >
                                    <span className="sr-only">Toggle second sidebar panel</span>
                                    <span aria-hidden="true">
                                        <svg
                                            className="w-8 h-8 transition-transform transform"
                                            className="{ 'rotate-180': isSecondSidebarOpen }"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>                                 
                            </div>
                            <main className="flex-1">
                                <div
                                    className="flex flex-col items-center justify-center flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto"
                                >
                                    <h1 className="mb-4 text-2xl font-semibold text-center md:text-3xl">Two Columns - Sidebar</h1>
                                    <div className="space-y-4">
                                    <div className="relative flex p-1 space-x-1 bg-white shadow-md w-80 h-72 dark:bg-darker">
                                        <div className="w-16 h-full bg-gray-200 dark:bg-dark"></div>
                                        <div className="w-16 h-full bg-gray-200 dark:bg-dark"></div>
                                        <div className="flex-1 h-full bg-gray-100 dark:bg-dark"></div>
                                    </div>
                                    </div>
                                </div>
                            </main>
                            <x-transition
                                enter="transition duration-300 ease-in-out"
                                enter-start="opacity-0"
                                enter-end="opacity-100"
                                leave="transition duration-300 ease-in-out"
                                leave-start="opacity-100"
                                leave-end="opacity-0"
                            >
                            <div
                                
                                x-show="isSettingsPanelOpen"
                                onClick="isSettingsPanelOpen = false"
                                className="fixed inset-0 z-10 bg-primary-darker"
                                style={{"opacity": 0.5}}
                                aria-hidden="true"
                            >
                            </div>
                            </x-transition>
                            <x-transition
                                enter="transition duration-300 ease-in-out transform sm:duration-500"
                                enter-start="translate-x-full"
                                enter-end="translate-x-0"
                                leave="transition duration-300 ease-in-out transform sm:duration-500"
                                leave-start="translate-x-0"
                                leave-end="translate-x-full"
                            >
                            <section                                
                                x-ref="settingsPanel"
                                tabIndex="-1"
                                x-show="isSettingsPanelOpen"
                                keydown="isSettingsPanelOpen = false"
                                className="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
                                aria-labelledby="settinsPanelLabel"
                            >
                                <div className="absolute left-0 p-2 transform -translate-x-full">
                                <button
                                    onClick="isSettingsPanelOpen = false"
                                    className="p-2 text-white rounded-md focus:outline-none focus:ring"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                </div>
                                {/* <!-- Panel content -->  */}
                                <div className="flex flex-col h-screen"> 
                                    {/* <!-- Panel header --> */}
                                    <div
                                        className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark"
                                    >
                                    <span aria-hidden="true" className="text-gray-500 dark:text-primary">
                                        <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                            />
                                        </svg>
                                    </span>
                                    <h2 id="settinsPanelLabel" className="text-xl font-medium text-gray-500 dark:text-light">Settings</h2>
                                    </div>
                                    {/* <!-- Content --> */}
                                    <div className="flex-1 overflow-hidden hover:overflow-y-auto">
                                        {/* <!-- Theme --> */}
                                        <div className="p-4 space-y-4 md:p-8">
                                            <h6 className="text-lg font-medium text-gray-400 dark:text-light">Mode</h6>
                                            <div className="flex items-center space-x-8">
                                                {/* <!-- Light button --> */}
                                                <button
                                                    onClick="setLightTheme"
                                                    className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
                                                    className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': !isDark, 'text-gray-500 dark:text-primary-light': isDark }"
                                                >
                                                    <span>
                                                    <svg
                                                        className="w-6 h-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                        />
                                                    </svg>
                                                    </span>
                                                    <span>Light</span>
                                                </button>
                                                {/* <!-- Dark button --> */}
                                                <button
                                                    onClick="setDarkTheme"
                                                    className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
                                                    className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': isDark, 'text-gray-500 dark:text-primary-light': !isDark }"
                                                >
                                                    <span>
                                                    <svg
                                                        className="w-6 h-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                        />
                                                    </svg>
                                                    </span>
                                                    <span>Dark</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- Colors --> */}
                                        <div className="p-4 space-y-4 md:p-8">
                                            <h6 className="text-lg font-medium text-gray-400 dark:text-light">Colors</h6>
                                            <div>
                                                <button
                                                    onClick="setColors('cyan')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": "cyan"}}
                                                ></button>
                                                <button
                                                    onClick="setColors('teal')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": "teal"}}
                                                ></button>
                                                <button
                                                    onClick="setColors('green')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": 'green'}}
                                                ></button>
                                                <button
                                                    onClick="setColors('fuchsia')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": 'fuchsia'}}
                                                ></button>
                                                <button
                                                    onClick="setColors('blue')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": 'blue'}}
                                                ></button>
                                                <button
                                                    onClick="setColors('violet')"
                                                    className="w-10 h-10 rounded-full"
                                                    style={{"backgroundColor": 'violet'}}
                                                ></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            </x-transition>

                            {/* <!-- Search panel -->
                            <!-- Backdrop --> */}
                            <x-transition
                                enter="transition duration-300 ease-in-out"
                                enter-start="opacity-0"
                                enter-end="opacity-100"
                                leave="transition duration-300 ease-in-out"
                                leave-start="opacity-100"
                                leave-end="opacity-0"
                            >
                            <div
                                x-show="isSearchPanelOpen"
                                onClick="isSearchPanelOpen = false"
                                className="fixed inset-0 z-10 bg-primary-darker"
                                style={{"opacity": 0.5}}
                                aria-hidden="true"
                            >
                            </div>
                            </x-transition>
                            {/* <!-- Panel --> */}
                            <x-transition
                              enter="transition duration-300 ease-in-out transform sm:duration-500"
                              enter-start="-translate-x-full"
                              enter-end="translate-x-0"
                              leave="transition duration-300 ease-in-out transform sm:duration-500"
                              leave-start="translate-x-0"
                              leave-end="-translate-x-full"
                            >
                            <section                           
                             x-show="isSearchPanelOpen"
                             keydown="isSearchPanelOpen = false"
                             className="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
                            >
                                <div className="absolute right-0 p-2 transform translate-x-full">
                                    {/* <!-- Close button --> */}
                                    <button onClick="isSearchPanelOpen = false" className="p-2 text-white rounded-md focus:outline-none focus:ring">
                                        <svg
                                            className="w-5 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>       
                                </div>
                                <h2 className="sr-only">Search panel</h2>
                                {/* <!-- Panel content --> */}
                                <div className="flex flex-col h-screen">
                                    {/* <!-- Panel header (Search input) --> */}
                                    <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700">
                                        <span className="absolute inset-y-0 inline-flex items-center px-4">
                                            <svg
                                            className="w-5 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </span>
                                        <input
                                            x-ref="searchInput"
                                            type="text"
                                            className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
                                            placeholder="Search..."
                                        />
                                    </div>
                                    {/* <!-- Panel content (Search result) --> */}
                                    <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
                                    <h3 className="py-2 text-sm font-semibold text-gray-600 dark:text-light">History</h3>
                                    <p className="px=4">Search resault</p>
                                    {/* <!--  -->
                                    <!-- Search content -->
                                    <!--  --> */}
                                    </div>  
                                </div>
                            </section>
                            </x-transition>
                        </div>
                    </div>
                    <script src="/scripsito.js"></script>                               
                </body>            
        </>
    )
}

export default LayoutGlobal
