import React from 'react';

const Page = () => {
    return (
        <>
            <nav navbar=""
                 className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-0 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                 navbar-scroll="flase">
                <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                    <nav>

                        <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                            <li className="leading-normal text-sm breadcrumb-item">
                                <a className="text-slate-700 opacity-30 dark:text-white" href="javascript:;">
                                    {/*<svg width="12px" height="12px" className="mb-1" viewBox="0 0 45 40" version="1.1"*/}
                                    {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                    {/*    <title>shop</title>*/}
                                    {/*    <g className="dark:fill-white" stroke="none" stroke-width="1" fill="none"*/}
                                    {/*       fill-rule="evenodd">*/}
                                    {/*        <g className="dark:fill-white"*/}
                                    {/*           transform="translate(-1716.000000, -439.000000)" fill="#252f40"*/}
                                    {/*           fill-rule="nonzero">*/}
                                    {/*            <g className="dark:fill-white"*/}
                                    {/*               transform="translate(1716.000000, 291.000000)">*/}
                                    {/*                <g className="dark:fill-white"*/}
                                    {/*                   transform="translate(0.000000, 148.000000)">*/}
                                    {/*                    <path*/}
                                    {/*                        d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"></path>*/}
                                    {/*                    <path*/}
                                    {/*                        d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>*/}
                                    {/*                </g>*/}
                                    {/*            </g>*/}
                                    {/*        </g>*/}
                                    {/*    </g>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                                <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Pages</a>
                            </li>
                            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                                <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Account</a>
                            </li>
                            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                                aria-current="page">Settings
                            </li>
                        </ol>
                        <h6 className="font-bold capitalize dark:text-white">Settings</h6>
                    </nav>
                    <div className="flex items-center">
                        <a mini-sidenav-burger="" href="javascript:;"
                           className="hidden p-0 transition-all ease-nav-brand text-sm text-slate-500 xl:block"
                           aria-expanded="false">
                            <div className="w-4.5 overflow-hidden">
                                <i className="ease-soft mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                <i className="ease-soft relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                            </div>
                        </a>
                    </div>
                    <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
                         id="navbar">
                        <div className="items-center hidden md:ml-auto md:pr-4">
                            <div
                                className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
<span
    className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
<i className="fas fa-search" aria-hidden="true"></i>
</span>
                                <input type="text"
                                       className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                       placeholder="Type here..."/>
                            </div>
                        </div>
                        <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">


                            <li className="items-center hidden">
                                <a href="../../../pages/authentication/signin/illustration.html"
                                   className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 dark:text-white">
                                    <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                                    <span className="hidden sm:inline">Sign In</span>
                                </a>
                            </li>
                            <li className="flex items-center pl-4 xl:hidden">
                                <a sidenav-trigger=""
                                   className="block p-0 transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                                   href="javascript:;" aria-expanded="false">
                                    <div className="w-4.5 overflow-hidden">
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                        <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="items-center hidden px-4">
                                <a href="javascript:;"
                                   className="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white">
                                    <i fixed-plugin-button-nav="" className="cursor-pointer fa fa-cog"
                                       aria-hidden="true"></i>

                                </a>
                            </li>

                            <li className="relative items-center hidden pr-2">
                                <p className="hidden transform-dropdown-show"></p>
                                <a dropdown-trigger="" href="javascript:;"
                                   className="block p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                                   aria-expanded="false">
                                    <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i>
                                </a>
                                <ul dropdown-menu=""
                                    className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-gray-950 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">

                                    <li className="relative mb-2">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div className="my-auto">
                                                    <img src="../../../assets/img/team-2.jpg"
                                                         className="inline-flex items-center justify-center mr-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"/>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                                                        <span className="font-semibold">New message</span> from Laur
                                                    </h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        13 minutes ago
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="relative mb-2">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div className="my-auto">
                                                    <img src="../../../assets/img/small-logos/logo-spotify.svg"
                                                         className="inline-flex items-center justify-center mr-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"/>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">
                                                        <span className="font-semibold">New album</span> by Travis Scott
                                                    </h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        1 day
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80"
                                           href="javascript:;">
                                            <div className="flex py-1">
                                                <div
                                                    className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-sm bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                    {/*<svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1"*/}
                                                    {/*     xmlns="http://www.w3.org/2000/svg"*/}
                                                    {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                                    {/*    <title>credit-card</title>*/}
                                                    {/*    <g stroke="none" stroke-width="1" fill="none"*/}
                                                    {/*       fill-rule="evenodd">*/}
                                                    {/*        <g transform="translate(-2169.000000, -745.000000)"*/}
                                                    {/*           fill="#FFFFFF" fill-rule="nonzero">*/}
                                                    {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                                    {/*                <g transform="translate(453.000000, 454.000000)">*/}
                                                    {/*                    <path className="color-background"*/}
                                                    {/*                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"*/}
                                                    {/*                          opacity="0.593633743"></path>*/}
                                                    {/*                    <path className="color-background"*/}
                                                    {/*                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>*/}
                                                    {/*                </g>*/}
                                                    {/*            </g>*/}
                                                    {/*        </g>*/}
                                                    {/*    </g>*/}
                                                    {/*</svg>*/}
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-1 font-normal leading-normal text-sm group-hover:text-slate-700 dark:text-white">Payment
                                                        successfully completed</h6>
                                                    <p className="mb-0 leading-tight text-xs text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
                                                        <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                                                        2 days
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-full px-6 mx-auto mt-6">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-8/12 lg:w-4/12">
                        <div className="relative right-0">
                            <ul nav-pills=""
                                className="relative flex flex-wrap p-1 mb-0 list-none dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-xl bg-gray-50"
                                role="tablist">
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link="" active=""
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="true"> Messages </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link=""
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Social </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link=""
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Notifications </a>
                                </li>
                                <li className="z-30 flex-auto text-center">
                                    <a nav-link=""
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit bg-none dark:text-white"
                                       href="javascript:;" role="tab" aria-selected="false"> Backup </a>
                                </li>
                                <div
                                    className="z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block"
                                    moving-tab="" nav-link=""
                                    style={{padding: "0px", transition: "all 0.5s ease 0s", transform: "translate3d(0px, 0px, 0px)", width: "114px"}}>
                                    <a nav-link="" active=""
                                       className="block w-full py-1 transition-colors border-0 rounded-lg ease-soft-in-out bg-none dark:text-white bg-white text-white shadow-soft-xxs"
                                       href="javascript:;" role="tab" aria-selected="true"
                                       style={{animation: "0.2s ease 0s 1 normal none running none"}}>-</a></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 py-4 mx-auto my-4">
                <div className="flex flex-wrap mb-12 -mx-3">
                    <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-3/12">
                        <div
                            className="sticky flex flex-col min-w-0 break-words bg-white border-0 top-1/100 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <ul className="flex flex-col flex-wrap p-4 mb-0 list-none rounded-xl">
                                <li>
                                    <a href="#profile"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>spaceship</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(4.000000, 301.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"*/}
                                            {/*                          opacity="0.598539807"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"*/}
                                            {/*                          opacity="0.598539807"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Profile</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#basic-info"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>document</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(154.000000, 300.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"*/}
                                            {/*                          opacity="0.603585379"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Basic Info</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#password"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>box-3d-50</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(603.000000, 0.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"*/}
                                            {/*                          opacity="0.7"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"*/}
                                            {/*                          opacity="0.7"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Change Password</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#2FA"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>switches</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1870.000000, -440.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(154.000000, 149.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z"*/}
                                            {/*                          opacity="0.6"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">2FA</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#accounts"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>time-alarm</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-2319.000000, -440.000000)" fill="#923DFA"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(603.000000, 149.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z"*/}
                                            {/*                          opacity="0.6"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z"*/}
                                            {/*                          opacity="0.6"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Accounts</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#notifications"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>megaphone</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-2168.000000, -591.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(452.000000, 300.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z"*/}
                                            {/*                          opacity="0.601050967"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z"*/}
                                            {/*                          opacity="0.601050967"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Notifications</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#sessions"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>settings</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(304.000000, 151.000000)">*/}
                                            {/*                    <polygon className="fill-slate-800"*/}
                                            {/*                             opacity="0.596981957"*/}
                                            {/*                             points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"*/}
                                            {/*                          opacity="0.596981957"></path>*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Sessions</span>
                                    </a>
                                </li>
                                <li className="pt-2">
                                    <a href="#delete"
                                       className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                                        <div className="inline-block mr-2 text-black fill-current h-4 w-4 stroke-none">
                                            {/*<svg className="mb-1 text-dark" width="16px" height="16px"*/}
                                            {/*     viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                            {/*    <title>shop</title>*/}
                                            {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                            {/*        <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF"*/}
                                            {/*           fill-rule="nonzero">*/}
                                            {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                            {/*                <g transform="translate(0.000000, 148.000000)">*/}
                                            {/*                    <path className="fill-slate-800"*/}
                                            {/*                          d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"*/}
                                            {/*                          opacity="0.598981585"></path>*/}
                                            {/*                    <path className="fill-gray-900"*/}
                                            {/*                          d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>*/}
                                            {/*                </g>*/}
                                            {/*            </g>*/}
                                            {/*        </g>*/}
                                            {/*    </g>*/}
                                            {/*</svg>*/}
                                        </div>
                                        <span className="leading-normal text-sm dark:text-white">Delete Account</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-9/12">
                        <div
                            className="relative flex flex-col flex-auto min-w-0 p-4 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="profile">
                            <div className="flex flex-wrap items-center justify-center -mx-3">
                                <div className="w-4/12 max-w-full px-3 flex-0 sm:w-auto">
                                    <div
                                        className="w-19 h-19 text-base ease-soft-in-out relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                        <img className="w-full shadow-soft-sm rounded-xl"
                                             src="../../../assets/img/bruce-mars.jpg" alt="bruce"/>
                                    </div>
                                </div>
                                <div className="w-8/12 max-w-full px-3 my-auto flex-0 sm:w-auto">
                                    <div className="h-full">
                                        <h5 className="mb-1 font-bold dark:text-white">Alec Thompson</h5>
                                        <p className="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
                                    </div>
                                </div>
                                <div
                                    className="flex max-w-full px-3 mt-4 sm:flex-0 shrink-0 sm:mt-0 sm:ml-auto sm:w-auto">
                                    <label profile-visibility-toggle-label="" htmlFor="profile-visibility-toggle"
                                           className="inline-block mb-0 ml-1 font-normal cursor-pointer text-sm text-slate-700 dark:text-white/80">
                                        <small>Switch to invisible</small>
                                    </label>
                                    <div className="min-h-6 ml-2 mb-0.5 block pl-12">
                                        <input checked="" profile-visibility-toggle=""
                                               className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                               type="checkbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="basic-info">
                            <div className="p-6 mb-0 rounded-t-2xl">
                                <h5 className="dark:text-white">Basic Info</h5>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                               htmlFor="First Name">First Name</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="text" name="First Name" placeholder="Alec"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                               htmlFor="Last Name">Last Name</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="text" name="Last Name" placeholder="Thompson"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0 sm:w-4/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="gender">I'm</label>
                                        <div className="choices" data-type="select-one" tabindex="0" role="combobox"
                                             aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                            <div className="choices__inner"><select choice="" name="choices-gender"
                                                                                    id="choices-gender"
                                                                                    className="choices__input" hidden=""
                                                                                    tabindex="-1" data-choice="active">
                                                <option value="Male">Male</option>
                                            </select>
                                                <div className="choices__list choices__list--single">
                                                    <div className="choices__item choices__item--selectable"
                                                         data-item="" data-id="1" data-value="Male"
                                                         data-custom-properties="null" aria-selected="true">Male
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choices__list choices__list--dropdown"
                                                 aria-expanded="false"><input type="text"
                                                                              className="choices__input choices__input--cloned"
                                                                              autoComplete="off" autoCapitalize="off"
                                                                              spellCheck="false" role="textbox"
                                                                              aria-autocomplete="list"
                                                                              aria-label="false" placeholder=""/>
                                                <div className="choices__list" role="listbox">
                                                    <div id="choices--choices-gender-item-choice-1"
                                                         className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                         role="option" data-choice="" data-id="1" data-value="Female"
                                                         data-select-text="Press to select" data-choice-selectable=""
                                                         aria-selected="true">Female
                                                    </div>
                                                    <div id="choices--choices-gender-item-choice-2"
                                                         className="choices__item choices__item--choice is-selected choices__item--selectable"
                                                         role="option" data-choice="" data-id="2" data-value="Male"
                                                         data-select-text="Press to select"
                                                         data-choice-selectable="">Male
                                                    </div>
                                                </div></div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-8/12">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="w-5/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-month">Birth Date</label>
                                                <div className="choices" data-type="select-one" tabindex="0"
                                                     role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                     aria-expanded="false">
                                                    <div className="choices__inner"><select choice=""
                                                                                            name="choices-month"
                                                                                            id="choices-month"
                                                                                            className="choices__input"
                                                                                            hidden="" tabindex="-1"
                                                                                            data-choice="active">
                                                        <option value="5">May</option>
                                                    </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                 data-item="" data-id="1" data-value="5"
                                                                 data-custom-properties="null" aria-selected="true">May
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                         aria-expanded="false"><input type="text"
                                                                                      className="choices__input choices__input--cloned"
                                                                                      autoComplete="off"
                                                                                      autoCapitalize="off"
                                                                                      spellCheck="false" role="textbox"
                                                                                      aria-autocomplete="list"
                                                                                      aria-label="false" placeholder=""/>
                                                        <div className="choices__list" role="listbox">
                                                            <div id="choices--choices-month-item-choice-1"
                                                                 className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                 role="option" data-choice="" data-id="1" data-value="4"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="" aria-selected="true">April
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-2"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="2" data-value="8"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">August
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-3"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="3"
                                                                 data-value="12" data-select-text="Press to select"
                                                                 data-choice-selectable="">December
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-4"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="4" data-value="2"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">February
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-5"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="5" data-value="1"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">January
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-6"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="6" data-value="7"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">July
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-7"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="7" data-value="6"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">June
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-8"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="8" data-value="3"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">March
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-9"
                                                                 className="choices__item choices__item--choice is-selected choices__item--selectable"
                                                                 role="option" data-choice="" data-id="9" data-value="5"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">May
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-10"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="10"
                                                                 data-value="11" data-select-text="Press to select"
                                                                 data-choice-selectable="">November
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-11"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="11"
                                                                 data-value="10" data-select-text="Press to select"
                                                                 data-choice-selectable="">October
                                                            </div>
                                                            <div id="choices--choices-month-item-choice-12"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="12"
                                                                 data-value="9" data-select-text="Press to select"
                                                                 data-choice-selectable="">September
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>
                                            <div className="w-4/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-day">&nbsp;</label>
                                                <div className="choices" data-type="select-one" tabindex="0"
                                                     role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                     aria-expanded="false">
                                                    <div className="choices__inner"><select choice="" name="choices-day"
                                                                                            id="choices-day"
                                                                                            className="choices__input"
                                                                                            hidden="" tabindex="-1"
                                                                                            data-choice="active">
                                                        <option value="3">3</option>
                                                    </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                 data-item="" data-id="1" data-value="3"
                                                                 data-custom-properties="null" aria-selected="true">3
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                         aria-expanded="false"><input type="text"
                                                                                      className="choices__input choices__input--cloned"
                                                                                      autoComplete="off"
                                                                                      autoCapitalize="off"
                                                                                      spellCheck="false" role="textbox"
                                                                                      aria-autocomplete="list"
                                                                                      aria-label="false" placeholder=""/>
                                                        <div className="choices__list" role="listbox">
                                                            <div id="choices--choices-day-item-choice-1"
                                                                 className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                 role="option" data-choice="" data-id="1" data-value="1"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="" aria-selected="true">1
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-2"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="2" data-value="2"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">2
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-3"
                                                                 className="choices__item choices__item--choice is-selected choices__item--selectable"
                                                                 role="option" data-choice="" data-id="3" data-value="3"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">3
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-4"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="4" data-value="4"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">4
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-5"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="5" data-value="5"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">5
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-6"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="6" data-value="6"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">6
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-7"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="7" data-value="7"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">7
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-8"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="8" data-value="8"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">8
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-9"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="9" data-value="9"
                                                                 data-select-text="Press to select"
                                                                 data-choice-selectable="">9
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-10"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="10"
                                                                 data-value="10" data-select-text="Press to select"
                                                                 data-choice-selectable="">10
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-11"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="11"
                                                                 data-value="11" data-select-text="Press to select"
                                                                 data-choice-selectable="">11
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-12"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="12"
                                                                 data-value="12" data-select-text="Press to select"
                                                                 data-choice-selectable="">12
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-13"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="13"
                                                                 data-value="13" data-select-text="Press to select"
                                                                 data-choice-selectable="">13
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-14"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="14"
                                                                 data-value="14" data-select-text="Press to select"
                                                                 data-choice-selectable="">14
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-15"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="15"
                                                                 data-value="15" data-select-text="Press to select"
                                                                 data-choice-selectable="">15
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-16"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="16"
                                                                 data-value="16" data-select-text="Press to select"
                                                                 data-choice-selectable="">16
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-17"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="17"
                                                                 data-value="17" data-select-text="Press to select"
                                                                 data-choice-selectable="">17
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-18"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="18"
                                                                 data-value="18" data-select-text="Press to select"
                                                                 data-choice-selectable="">18
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-19"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="19"
                                                                 data-value="19" data-select-text="Press to select"
                                                                 data-choice-selectable="">19
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-20"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="20"
                                                                 data-value="20" data-select-text="Press to select"
                                                                 data-choice-selectable="">20
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-21"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="21"
                                                                 data-value="21" data-select-text="Press to select"
                                                                 data-choice-selectable="">21
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-22"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="22"
                                                                 data-value="22" data-select-text="Press to select"
                                                                 data-choice-selectable="">22
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-23"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="23"
                                                                 data-value="23" data-select-text="Press to select"
                                                                 data-choice-selectable="">23
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-24"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="24"
                                                                 data-value="24" data-select-text="Press to select"
                                                                 data-choice-selectable="">24
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-25"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="25"
                                                                 data-value="25" data-select-text="Press to select"
                                                                 data-choice-selectable="">25
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-26"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="26"
                                                                 data-value="26" data-select-text="Press to select"
                                                                 data-choice-selectable="">26
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-27"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="27"
                                                                 data-value="27" data-select-text="Press to select"
                                                                 data-choice-selectable="">27
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-28"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="28"
                                                                 data-value="28" data-select-text="Press to select"
                                                                 data-choice-selectable="">28
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-29"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="29"
                                                                 data-value="29" data-select-text="Press to select"
                                                                 data-choice-selectable="">29
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-30"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="30"
                                                                 data-value="30" data-select-text="Press to select"
                                                                 data-choice-selectable="">30
                                                            </div>
                                                            <div id="choices--choices-day-item-choice-31"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="31"
                                                                 data-value="31" data-select-text="Press to select"
                                                                 data-choice-selectable="">31
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>
                                            <div className="w-3/12 max-w-full px-3 flex-0">
                                                <label
                                                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                                    htmlFor="choices-year">&nbsp;</label>
                                                <div className="choices" data-type="select-one" tabindex="0"
                                                     role="combobox" aria-autocomplete="list" aria-haspopup="true"
                                                     aria-expanded="false">
                                                    <div className="choices__inner"><select choice=""
                                                                                            name="choices-year"
                                                                                            id="choices-year"
                                                                                            className="choices__input"
                                                                                            hidden="" tabindex="-1"
                                                                                            data-choice="active">
                                                        <option value="2022">2022</option>
                                                    </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                 data-item="" data-id="1" data-value="2022"
                                                                 data-custom-properties="null" aria-selected="true">2022
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                         aria-expanded="false"><input type="text"
                                                                                      className="choices__input choices__input--cloned"
                                                                                      autoComplete="off"
                                                                                      autoCapitalize="off"
                                                                                      spellCheck="false" role="textbox"
                                                                                      aria-autocomplete="list"
                                                                                      aria-label="false" placeholder=""/>
                                                        <div className="choices__list" role="listbox">
                                                            <div id="choices--choices-year-item-choice-1"
                                                                 className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                 role="option" data-choice="" data-id="1"
                                                                 data-value="1900" data-select-text="Press to select"
                                                                 data-choice-selectable="" aria-selected="true">1900
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-2"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="2"
                                                                 data-value="1901" data-select-text="Press to select"
                                                                 data-choice-selectable="">1901
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-3"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="3"
                                                                 data-value="1902" data-select-text="Press to select"
                                                                 data-choice-selectable="">1902
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-4"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="4"
                                                                 data-value="1903" data-select-text="Press to select"
                                                                 data-choice-selectable="">1903
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-5"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="5"
                                                                 data-value="1904" data-select-text="Press to select"
                                                                 data-choice-selectable="">1904
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-6"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="6"
                                                                 data-value="1905" data-select-text="Press to select"
                                                                 data-choice-selectable="">1905
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-7"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="7"
                                                                 data-value="1906" data-select-text="Press to select"
                                                                 data-choice-selectable="">1906
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-8"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="8"
                                                                 data-value="1907" data-select-text="Press to select"
                                                                 data-choice-selectable="">1907
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-9"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="9"
                                                                 data-value="1908" data-select-text="Press to select"
                                                                 data-choice-selectable="">1908
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-10"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="10"
                                                                 data-value="1909" data-select-text="Press to select"
                                                                 data-choice-selectable="">1909
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-11"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="11"
                                                                 data-value="1910" data-select-text="Press to select"
                                                                 data-choice-selectable="">1910
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-12"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="12"
                                                                 data-value="1911" data-select-text="Press to select"
                                                                 data-choice-selectable="">1911
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-13"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="13"
                                                                 data-value="1912" data-select-text="Press to select"
                                                                 data-choice-selectable="">1912
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-14"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="14"
                                                                 data-value="1913" data-select-text="Press to select"
                                                                 data-choice-selectable="">1913
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-15"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="15"
                                                                 data-value="1914" data-select-text="Press to select"
                                                                 data-choice-selectable="">1914
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-16"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="16"
                                                                 data-value="1915" data-select-text="Press to select"
                                                                 data-choice-selectable="">1915
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-17"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="17"
                                                                 data-value="1916" data-select-text="Press to select"
                                                                 data-choice-selectable="">1916
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-18"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="18"
                                                                 data-value="1917" data-select-text="Press to select"
                                                                 data-choice-selectable="">1917
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-19"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="19"
                                                                 data-value="1918" data-select-text="Press to select"
                                                                 data-choice-selectable="">1918
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-20"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="20"
                                                                 data-value="1919" data-select-text="Press to select"
                                                                 data-choice-selectable="">1919
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-21"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="21"
                                                                 data-value="1920" data-select-text="Press to select"
                                                                 data-choice-selectable="">1920
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-22"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="22"
                                                                 data-value="1921" data-select-text="Press to select"
                                                                 data-choice-selectable="">1921
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-23"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="23"
                                                                 data-value="1922" data-select-text="Press to select"
                                                                 data-choice-selectable="">1922
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-24"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="24"
                                                                 data-value="1923" data-select-text="Press to select"
                                                                 data-choice-selectable="">1923
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-25"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="25"
                                                                 data-value="1924" data-select-text="Press to select"
                                                                 data-choice-selectable="">1924
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-26"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="26"
                                                                 data-value="1925" data-select-text="Press to select"
                                                                 data-choice-selectable="">1925
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-27"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="27"
                                                                 data-value="1926" data-select-text="Press to select"
                                                                 data-choice-selectable="">1926
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-28"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="28"
                                                                 data-value="1927" data-select-text="Press to select"
                                                                 data-choice-selectable="">1927
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-29"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="29"
                                                                 data-value="1928" data-select-text="Press to select"
                                                                 data-choice-selectable="">1928
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-30"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="30"
                                                                 data-value="1929" data-select-text="Press to select"
                                                                 data-choice-selectable="">1929
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-31"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="31"
                                                                 data-value="1930" data-select-text="Press to select"
                                                                 data-choice-selectable="">1930
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-32"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="32"
                                                                 data-value="1931" data-select-text="Press to select"
                                                                 data-choice-selectable="">1931
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-33"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="33"
                                                                 data-value="1932" data-select-text="Press to select"
                                                                 data-choice-selectable="">1932
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-34"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="34"
                                                                 data-value="1933" data-select-text="Press to select"
                                                                 data-choice-selectable="">1933
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-35"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="35"
                                                                 data-value="1934" data-select-text="Press to select"
                                                                 data-choice-selectable="">1934
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-36"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="36"
                                                                 data-value="1935" data-select-text="Press to select"
                                                                 data-choice-selectable="">1935
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-37"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="37"
                                                                 data-value="1936" data-select-text="Press to select"
                                                                 data-choice-selectable="">1936
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-38"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="38"
                                                                 data-value="1937" data-select-text="Press to select"
                                                                 data-choice-selectable="">1937
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-39"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="39"
                                                                 data-value="1938" data-select-text="Press to select"
                                                                 data-choice-selectable="">1938
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-40"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="40"
                                                                 data-value="1939" data-select-text="Press to select"
                                                                 data-choice-selectable="">1939
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-41"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="41"
                                                                 data-value="1940" data-select-text="Press to select"
                                                                 data-choice-selectable="">1940
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-42"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="42"
                                                                 data-value="1941" data-select-text="Press to select"
                                                                 data-choice-selectable="">1941
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-43"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="43"
                                                                 data-value="1942" data-select-text="Press to select"
                                                                 data-choice-selectable="">1942
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-44"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="44"
                                                                 data-value="1943" data-select-text="Press to select"
                                                                 data-choice-selectable="">1943
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-45"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="45"
                                                                 data-value="1944" data-select-text="Press to select"
                                                                 data-choice-selectable="">1944
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-46"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="46"
                                                                 data-value="1945" data-select-text="Press to select"
                                                                 data-choice-selectable="">1945
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-47"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="47"
                                                                 data-value="1946" data-select-text="Press to select"
                                                                 data-choice-selectable="">1946
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-48"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="48"
                                                                 data-value="1947" data-select-text="Press to select"
                                                                 data-choice-selectable="">1947
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-49"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="49"
                                                                 data-value="1948" data-select-text="Press to select"
                                                                 data-choice-selectable="">1948
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-50"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="50"
                                                                 data-value="1949" data-select-text="Press to select"
                                                                 data-choice-selectable="">1949
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-51"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="51"
                                                                 data-value="1950" data-select-text="Press to select"
                                                                 data-choice-selectable="">1950
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-52"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="52"
                                                                 data-value="1951" data-select-text="Press to select"
                                                                 data-choice-selectable="">1951
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-53"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="53"
                                                                 data-value="1952" data-select-text="Press to select"
                                                                 data-choice-selectable="">1952
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-54"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="54"
                                                                 data-value="1953" data-select-text="Press to select"
                                                                 data-choice-selectable="">1953
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-55"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="55"
                                                                 data-value="1954" data-select-text="Press to select"
                                                                 data-choice-selectable="">1954
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-56"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="56"
                                                                 data-value="1955" data-select-text="Press to select"
                                                                 data-choice-selectable="">1955
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-57"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="57"
                                                                 data-value="1956" data-select-text="Press to select"
                                                                 data-choice-selectable="">1956
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-58"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="58"
                                                                 data-value="1957" data-select-text="Press to select"
                                                                 data-choice-selectable="">1957
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-59"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="59"
                                                                 data-value="1958" data-select-text="Press to select"
                                                                 data-choice-selectable="">1958
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-60"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="60"
                                                                 data-value="1959" data-select-text="Press to select"
                                                                 data-choice-selectable="">1959
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-61"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="61"
                                                                 data-value="1960" data-select-text="Press to select"
                                                                 data-choice-selectable="">1960
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-62"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="62"
                                                                 data-value="1961" data-select-text="Press to select"
                                                                 data-choice-selectable="">1961
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-63"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="63"
                                                                 data-value="1962" data-select-text="Press to select"
                                                                 data-choice-selectable="">1962
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-64"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="64"
                                                                 data-value="1963" data-select-text="Press to select"
                                                                 data-choice-selectable="">1963
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-65"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="65"
                                                                 data-value="1964" data-select-text="Press to select"
                                                                 data-choice-selectable="">1964
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-66"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="66"
                                                                 data-value="1965" data-select-text="Press to select"
                                                                 data-choice-selectable="">1965
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-67"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="67"
                                                                 data-value="1966" data-select-text="Press to select"
                                                                 data-choice-selectable="">1966
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-68"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="68"
                                                                 data-value="1967" data-select-text="Press to select"
                                                                 data-choice-selectable="">1967
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-69"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="69"
                                                                 data-value="1968" data-select-text="Press to select"
                                                                 data-choice-selectable="">1968
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-70"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="70"
                                                                 data-value="1969" data-select-text="Press to select"
                                                                 data-choice-selectable="">1969
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-71"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="71"
                                                                 data-value="1970" data-select-text="Press to select"
                                                                 data-choice-selectable="">1970
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-72"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="72"
                                                                 data-value="1971" data-select-text="Press to select"
                                                                 data-choice-selectable="">1971
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-73"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="73"
                                                                 data-value="1972" data-select-text="Press to select"
                                                                 data-choice-selectable="">1972
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-74"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="74"
                                                                 data-value="1973" data-select-text="Press to select"
                                                                 data-choice-selectable="">1973
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-75"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="75"
                                                                 data-value="1974" data-select-text="Press to select"
                                                                 data-choice-selectable="">1974
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-76"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="76"
                                                                 data-value="1975" data-select-text="Press to select"
                                                                 data-choice-selectable="">1975
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-77"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="77"
                                                                 data-value="1976" data-select-text="Press to select"
                                                                 data-choice-selectable="">1976
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-78"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="78"
                                                                 data-value="1977" data-select-text="Press to select"
                                                                 data-choice-selectable="">1977
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-79"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="79"
                                                                 data-value="1978" data-select-text="Press to select"
                                                                 data-choice-selectable="">1978
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-80"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="80"
                                                                 data-value="1979" data-select-text="Press to select"
                                                                 data-choice-selectable="">1979
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-81"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="81"
                                                                 data-value="1980" data-select-text="Press to select"
                                                                 data-choice-selectable="">1980
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-82"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="82"
                                                                 data-value="1981" data-select-text="Press to select"
                                                                 data-choice-selectable="">1981
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-83"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="83"
                                                                 data-value="1982" data-select-text="Press to select"
                                                                 data-choice-selectable="">1982
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-84"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="84"
                                                                 data-value="1983" data-select-text="Press to select"
                                                                 data-choice-selectable="">1983
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-85"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="85"
                                                                 data-value="1984" data-select-text="Press to select"
                                                                 data-choice-selectable="">1984
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-86"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="86"
                                                                 data-value="1985" data-select-text="Press to select"
                                                                 data-choice-selectable="">1985
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-87"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="87"
                                                                 data-value="1986" data-select-text="Press to select"
                                                                 data-choice-selectable="">1986
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-88"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="88"
                                                                 data-value="1987" data-select-text="Press to select"
                                                                 data-choice-selectable="">1987
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-89"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="89"
                                                                 data-value="1988" data-select-text="Press to select"
                                                                 data-choice-selectable="">1988
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-90"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="90"
                                                                 data-value="1989" data-select-text="Press to select"
                                                                 data-choice-selectable="">1989
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-91"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="91"
                                                                 data-value="1990" data-select-text="Press to select"
                                                                 data-choice-selectable="">1990
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-92"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="92"
                                                                 data-value="1991" data-select-text="Press to select"
                                                                 data-choice-selectable="">1991
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-93"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="93"
                                                                 data-value="1992" data-select-text="Press to select"
                                                                 data-choice-selectable="">1992
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-94"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="94"
                                                                 data-value="1993" data-select-text="Press to select"
                                                                 data-choice-selectable="">1993
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-95"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="95"
                                                                 data-value="1994" data-select-text="Press to select"
                                                                 data-choice-selectable="">1994
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-96"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="96"
                                                                 data-value="1995" data-select-text="Press to select"
                                                                 data-choice-selectable="">1995
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-97"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="97"
                                                                 data-value="1996" data-select-text="Press to select"
                                                                 data-choice-selectable="">1996
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-98"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="98"
                                                                 data-value="1997" data-select-text="Press to select"
                                                                 data-choice-selectable="">1997
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-99"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="99"
                                                                 data-value="1998" data-select-text="Press to select"
                                                                 data-choice-selectable="">1998
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-100"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="100"
                                                                 data-value="1999" data-select-text="Press to select"
                                                                 data-choice-selectable="">1999
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-101"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="101"
                                                                 data-value="2000" data-select-text="Press to select"
                                                                 data-choice-selectable="">2000
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-102"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="102"
                                                                 data-value="2001" data-select-text="Press to select"
                                                                 data-choice-selectable="">2001
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-103"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="103"
                                                                 data-value="2002" data-select-text="Press to select"
                                                                 data-choice-selectable="">2002
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-104"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="104"
                                                                 data-value="2003" data-select-text="Press to select"
                                                                 data-choice-selectable="">2003
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-105"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="105"
                                                                 data-value="2004" data-select-text="Press to select"
                                                                 data-choice-selectable="">2004
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-106"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="106"
                                                                 data-value="2005" data-select-text="Press to select"
                                                                 data-choice-selectable="">2005
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-107"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="107"
                                                                 data-value="2006" data-select-text="Press to select"
                                                                 data-choice-selectable="">2006
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-108"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="108"
                                                                 data-value="2007" data-select-text="Press to select"
                                                                 data-choice-selectable="">2007
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-109"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="109"
                                                                 data-value="2008" data-select-text="Press to select"
                                                                 data-choice-selectable="">2008
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-110"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="110"
                                                                 data-value="2009" data-select-text="Press to select"
                                                                 data-choice-selectable="">2009
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-111"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="111"
                                                                 data-value="2010" data-select-text="Press to select"
                                                                 data-choice-selectable="">2010
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-112"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="112"
                                                                 data-value="2011" data-select-text="Press to select"
                                                                 data-choice-selectable="">2011
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-113"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="113"
                                                                 data-value="2012" data-select-text="Press to select"
                                                                 data-choice-selectable="">2012
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-114"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="114"
                                                                 data-value="2013" data-select-text="Press to select"
                                                                 data-choice-selectable="">2013
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-115"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="115"
                                                                 data-value="2014" data-select-text="Press to select"
                                                                 data-choice-selectable="">2014
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-116"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="116"
                                                                 data-value="2015" data-select-text="Press to select"
                                                                 data-choice-selectable="">2015
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-117"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="117"
                                                                 data-value="2016" data-select-text="Press to select"
                                                                 data-choice-selectable="">2016
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-118"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="118"
                                                                 data-value="2017" data-select-text="Press to select"
                                                                 data-choice-selectable="">2017
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-119"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="119"
                                                                 data-value="2018" data-select-text="Press to select"
                                                                 data-choice-selectable="">2018
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-120"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="120"
                                                                 data-value="2019" data-select-text="Press to select"
                                                                 data-choice-selectable="">2019
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-121"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="121"
                                                                 data-value="2020" data-select-text="Press to select"
                                                                 data-choice-selectable="">2020
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-122"
                                                                 className="choices__item choices__item--choice choices__item--selectable"
                                                                 role="option" data-choice="" data-id="122"
                                                                 data-value="2021" data-select-text="Press to select"
                                                                 data-choice-selectable="">2021
                                                            </div>
                                                            <div id="choices--choices-year-item-choice-123"
                                                                 className="choices__item choices__item--choice is-selected choices__item--selectable"
                                                                 role="option" data-choice="" data-id="123"
                                                                 data-value="2022" data-select-text="Press to select"
                                                                 data-choice-selectable="">2022
                                                            </div>
                                                        </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Email">Email</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Email" placeholder="example@email.com"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Confirmation Email">Confirmation Email</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Confirmation Email"
                                                   placeholder="example@email.com"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Your location">Your location</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="email" name="Your location" placeholder="Sydney, A"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                    <div className="w-6/12 max-w-full px-3 flex-0">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Phone Number">Phone Number</label>
                                        <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                                            <input type="tel" name="Phone Number" placeholder="+40 735 631 620"
                                                   className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="self-center w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Language">Language</label>
                                        <div className="choices" data-type="select-one" tabindex="0" role="combobox"
                                             aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                            <div className="choices__inner"><select choice="" name="Language"
                                                                                    id="choices-language"
                                                                                    className="choices__input" hidden=""
                                                                                    tabindex="-1" data-choice="active">
                                                <option value="English">English</option>
                                            </select>
                                                <div className="choices__list choices__list--single">
                                                    <div className="choices__item choices__item--selectable"
                                                         data-item="" data-id="1" data-value="English"
                                                         data-custom-properties="null" aria-selected="true">English
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choices__list choices__list--dropdown"
                                                 aria-expanded="false"><input type="text"
                                                                              className="choices__input choices__input--cloned"
                                                                              autoComplete="off" autoCapitalize="off"
                                                                              spellCheck="false" role="textbox"
                                                                              aria-autocomplete="list"
                                                                              aria-label="false" placeholder=""/>
                                                <div className="choices__list" role="listbox">
                                                    <div id="choices--choices-language-item-choice-1"
                                                         className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                                         role="option" data-choice="" data-id="1" data-value="English"
                                                         data-select-text="Press to select" data-choice-selectable=""
                                                         aria-selected="true">English
                                                    </div>
                                                    <div id="choices--choices-language-item-choice-2"
                                                         className="choices__item choices__item--choice choices__item--selectable"
                                                         role="option" data-choice="" data-id="2" data-value="French"
                                                         data-select-text="Press to select"
                                                         data-choice-selectable="">French
                                                    </div>
                                                    <div id="choices--choices-language-item-choice-3"
                                                         className="choices__item choices__item--choice choices__item--selectable"
                                                         role="option" data-choice="" data-id="3" data-value="Spanish"
                                                         data-select-text="Press to select"
                                                         data-choice-selectable="">Spanish
                                                    </div>
                                                </div></div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                        <label
                                            className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                            htmlFor="Skills">Skills</label>
                                        <div className="choices" data-type="text" aria-haspopup="true"
                                             aria-expanded="false">
                                            <div className="choices__inner"><input choice="" name="Skills"
                                                                                   id="choices-skills" type="text"
                                                                                   value="vuejs,angular,react"
                                                                                   placeholder="Enter something"
                                                                                   className="choices__input" hidden=""
                                                                                   tabindex="-1" data-choice="active"/>
                                                <div className="choices__list choices__list--multiple">
                                                    <div className="choices__item choices__item--selectable"
                                                         data-item="" data-id="1" data-value="vuejs"
                                                         data-custom-properties="null" aria-selected="true"
                                                         data-deletable="">vuejs
                                                        <button type="button" className="choices__button"
                                                                aria-label="Remove item: 'vuejs'" data-button="">Remove
                                                            item
                                                        </button>
                                                    </div>
                                                    <div className="choices__item choices__item--selectable"
                                                         data-item="" data-id="2" data-value="angular"
                                                         data-custom-properties="null" aria-selected="true"
                                                         data-deletable="">angular
                                                        <button type="button" className="choices__button"
                                                                aria-label="Remove item: 'angular'"
                                                                data-button="">Remove item
                                                        </button>
                                                    </div>
                                                    <div className="choices__item choices__item--selectable"
                                                         data-item="" data-id="3" data-value="react"
                                                         data-custom-properties="null" aria-selected="true"
                                                         data-deletable="">react
                                                        <button type="button" className="choices__button"
                                                                aria-label="Remove item: 'react'" data-button="">Remove
                                                            item
                                                        </button>
                                                    </div>
                                                </div>
                                                <input type="text" className="choices__input choices__input--cloned"
                                                       autoComplete="off" autoCapitalize="off" spellCheck="false"
                                                       role="textbox" aria-autocomplete="list" aria-label="false"/></div>
                                            <div className="choices__list choices__list--dropdown"
                                                 aria-expanded="false"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="password">
                            <div className="p-6 mb-0 rounded-t-2xl">
                                <h5 className="dark:text-white">Change Password</h5>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="Current password">Current password</label>
                                <div className="mb-4">
                                    <input type="password" name="Current password" placeholder="Current password"
                                           className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="New password">New password</label>
                                <div className="mb-4">
                                    <input type="password" name="New password" placeholder="New password"
                                           className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <label
                                    className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                                    htmlFor="Confirm new password">Confirm new password</label>
                                <div className="mb-4">
                                    <input type="password" name="Confirm new password" placeholder="Confirm password"
                                           className="focus:shadow-soft-primary-outline
                                           dark:bg-gray-950 dark:placeholder:text-white/80
                                           dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none
                                           rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding
                                           px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"/>
                                </div>
                                <h5 className="mt-12 dark:text-white">Password requirements</h5>
                                <p className="mb-2 text-slate-500 dark:text-white/60">Please follow this guide for a
                                    strong password:</p>
                                <ul className="float-left pl-6 mb-0 list-disc text-slate-500">
                                    <li>
                                        <span className="leading-normal text-sm">One special characters</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">Min 6 characters</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">One number (2 are recommended)</span>
                                    </li>
                                    <li>
                                        <span className="leading-normal text-sm">Change it often</span>
                                    </li>
                                </ul>
                                <button href="javascript:;"
                                        className="inline-block float-right px-8 py-2 mt-16 mb-0 font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Update
                                    Password
                                </button>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="2FA">
                            <div className="flex p-6 rounded-t-2xl">
                                <h5 className="mb-0 dark:text-white">Two-factor authentication</h5>
                                <span
                                    className="py-2.2 px-3.6 text-xs rounded-1.8 ml-auto inline-block whitespace-nowrap bg-lime-200 text-center align-baseline font-bold uppercase leading-none text-lime-600">Enabled</span>
                            </div>
                            <div className="flex-auto p-6">
                                <div className="flex">
                                    <p className="my-auto dark:text-white/60">Security keys</p>
                                    <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">No
                                        Security Keys</p>
                                    <button
                                        className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">Add
                                    </button>
                                </div>
                                <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                    <div className="flex">
                                        <p className="my-auto dark:text-white/60">SMS number</p>
                                        <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">+4012374423</p>
                                        <button
                                            className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">Edit
                                        </button>
                                    </div>
                                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                        <div className="flex">
                                            <p className="my-auto dark:text-white/60">Authenticator app</p>
                                            <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">Not
                                                Configured</p>
                                            <button
                                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">Set
                                                up
                                            </button>
                                        </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="accounts">
                            <div className="p-6 rounded-t-2xl">
                                <h5 className="dark:text-white">Accounts</h5>
                                <p className="leading-normal text-sm dark:text-white/60">Here you can setup and manage
                                    your integration settings.</p>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <div className="flex">
                                    <img className="w-12" src="../../../assets/img/small-logos/logo-slack.svg"
                                         alt="logo-slack"/>
                                        <div className="my-auto ml-4">
                                            <div className="h-full">
                                                <h5 className="mb-0 dark:text-white">Slack</h5>
                                                <a className="leading-normal text-sm text-slate-500 dark:text-white"
                                                   href="javascript:;">
                                                    Show less
                                                    <i className="ml-1 leading-tight fas fa-chevron-up text-xs"
                                                       aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white/80">Enabled</p>
                                        <div className="block pl-12 my-auto min-h-6">
                                            <input checked=""
                                                   className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                   type="checkbox"/>
                                        </div>
                                </div>
                                <div className="pt-4 pl-12 ml-4">
                                    <p className="mb-0 leading-normal text-sm dark:text-white/60">
                                        You haven't added your Slack yet or you aren't authorized. Please add our Slack
                                        Bot to your account by clicking on
                                        <a className="dark:text-white" href="javascript:;">here</a>. When you've added
                                        the bot, send your verification code that you have received.
                                    </p>
                                    <div className="p-2 my-6 rounded-xl bg-gray-50 dark:bg-gray-600 sm:flex">
                                        <p className="my-auto font-semibold leading-normal text-sm sm:pl-2">Verification
                                            Code</p>
                                        <input
                                            className="min-h-unset sm:w-15/100 text-xs focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease-soft mt-2 block w-2/5 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none sm:mt-0 sm:ml-auto"
                                            type="text" name="code" value="1172913" data-target="tooltip_trigger"/>
                                            <div className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                 id="tooltip" role="tooltip" data-popper-placement="top"
                                                 style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(1557.5px, 1581.5px, 0px)"}}
                                                 data-popper-reference-hidden="" data-popper-escaped="">
                                                Copy!
                                                <div
                                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                                    data-popper-arrow=""
                                                    style={{position: "absolute", left: "0px", transform: "translate3d(0px, 0px, 0px)"}}></div>
                                            </div>
                                    </div>
                                    <div className="p-2 my-6 rounded-xl bg-gray-50 dark:bg-gray-600 sm:flex">
                                        <p className="my-auto font-semibold leading-normal text-sm sm:pl-2">Connected
                                            account</p>
                                        <h6 className="my-auto ml-auto mr-4 leading-normal text-sm dark:text-white">hello@creative-tim.com</h6>
                                        <button type="button"
                                                className="inline-block px-8 py-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer tracking-tight-soft ease-soft-in leading-pro bg-gradient-to-tl from-red-600 to-rose-400 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Delete
                                        </button>
                                    </div>
                                </div>
                                <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                    <div className="flex">
                                        <img className="w-12" src="../../../assets/img/small-logos/logo-spotify.svg"
                                             alt="logo-spotify"/>
                                            <div className="my-auto ml-4">
                                                <div className="h-full">
                                                    <h5 className="mb-0 dark:text-white">Spotify</h5>
                                                    <p className="mb-0 leading-normal text-sm dark:text-white/60">Music</p>
                                                </div>
                                            </div>
                                            <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white/80">Enabled</p>
                                            <div className="block pl-12 my-auto min-h-6">
                                                <input checked=""
                                                       className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                       type="checkbox"/>
                                            </div>
                                    </div>
                                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                        <div className="flex">
                                            <img className="w-12"
                                                 src="../../../assets/img/small-logos/logo-atlassian.svg"
                                                 alt="logo-atlassian"/>
                                                <div className="my-auto ml-4">
                                                    <div className="h-full">
                                                        <h5 className="mb-0 dark:text-white">Atlassian</h5>
                                                        <p className="mb-0 leading-normal text-sm dark:text-white/60">Payment
                                                            vendor</p>
                                                    </div>
                                                </div>
                                                <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white/80">Enabled</p>
                                                <div className="block pl-12 my-auto min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                        </div>
                                        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                            <div className="flex">
                                                <img className="w-12"
                                                     src="../../../assets/img/small-logos/logo-asana.svg"
                                                     alt="logo-asana"/>
                                                    <div className="my-auto ml-4">
                                                        <div className="h-full">
                                                            <h5 className="mb-0 dark:text-white">Asana</h5>
                                                            <p className="mb-0 leading-normal text-sm dark:text-white/60">Organize
                                                                your team</p>
                                                        </div>
                                                    </div>
                                                    <div className="block pl-12 my-auto ml-auto min-h-6">
                                                        <input
                                                            className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                            type="checkbox"/>
                                                    </div>
                                            </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="notifications">
                            <div className="p-6 rounded-t-2xl">
                                <h5 className="dark:text-white">Notifications</h5>
                                <p className="leading-normal text-sm dark:text-white/60">Choose how you receive
                                    notifications. These notification settings apply to the things you’re watching.</p>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <div className="overflow-x-auto">
                                    <table
                                        className="w-full mb-0 align-top border-gray-200 text-slate-500 dark:border-white/40">
                                        <thead className="align-bottom">
                                        <tr>
                                            <th colSpan="4"
                                                className="px-6 py-3 pl-1 font-semibold capitalize align-middle bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white">
                                                <p className="mb-0 dark:text-white/60">Activity</p>
                                            </th>
                                            <th className="px-6 py-3 font-semibold text-center capitalize align-middle bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white">
                                                <p className="mb-0 dark:text-white/60">Email</p>
                                            </th>
                                            <th className="px-6 py-3 font-semibold text-center capitalize align-middle bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white">
                                                <p className="mb-0 dark:text-white/60">Push</p>
                                            </th>
                                            <th className="px-6 py-3 font-semibold text-center capitalize align-middle bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white">
                                                <p className="mb-0 dark:text-white/60">SMS</p>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40 dark:text-white"
                                                colSpan="4">
                                                <div className="my-auto">
                                                    <span
                                                        className="block leading-normal text-sm text-slate-700 dark:text-white">Mentions</span>
                                                    <span
                                                        className="font-normal leading-tight text-xs dark:text-white/60">Notify when another user mentions you in a comment</span>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input
                                                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                        type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input
                                                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                        type="checkbox"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40 dark:text-white"
                                                colSpan="4">
                                                <div className="my-auto">
                                                    <span
                                                        className="block leading-normal text-sm text-slate-700 dark:text-white">Comments</span>
                                                    <span
                                                        className="font-normal leading-tight text-xs dark:text-white/60">Notify when another user comments your item.</span>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input
                                                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                        type="checkbox"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40 dark:text-white"
                                                colSpan="4">
                                                <div className="my-auto">
                                                    <span
                                                        className="block leading-normal text-sm text-slate-700 dark:text-white">Follows</span>
                                                    <span
                                                        className="font-normal leading-tight text-xs dark:text-white/60">Notify when another user follows you.</span>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input
                                                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                        type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input
                                                        className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                        type="checkbox"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 pl-1 align-top border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white"
                                                colSpan="4">
                                                <div className="my-auto">
                                                    <p className="mb-0 leading-normal text-sm dark:text-white/60">Log in
                                                        from a new device</p>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                            <td className="p-2 align-top bg-transparent border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white">
                                                <div className="flex items-center justify-center pl-12 mb-0 min-h-6">
                                                    <input checked=""
                                                           className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                           type="checkbox"/>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="sessions">
                            <div className="p-6 pb-4 rounded-t-2xl">
                                <h5 className="dark:text-white">Sessions</h5>
                                <p className="leading-normal text-sm dark:text-white/60">This is a list of devices that
                                    have logged into your account. Remove those that you do not recognize.</p>
                            </div>
                            <div className="flex-auto p-6 pt-0">
                                <div className="flex items-center">
                                    <div className="text-center w-5/100">
                                        <i className="fas fa-desktop text-lg opacity-60" aria-hidden="true"></i>
                                    </div>
                                    <div className="my-auto ml-4">
                                        <div className="h-full">
                                            <p className="mb-1 leading-normal text-sm dark:text-white/60">Bucharest
                                                68.133.163.201</p>
                                            <p className="mb-0 leading-tight text-xs dark:text-white/60">Your current
                                                session</p>
                                        </div>
                                    </div>
                                    <span
                                        className="py-1.8 text-xxs px-3 rounded-1 my-auto ml-auto mr-4 inline-block whitespace-nowrap bg-lime-200 text-center align-baseline font-bold uppercase leading-none text-lime-600">Active</span>
                                    <p className="my-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">EU</p>
                                    <a href="javascript:;"
                                       className="my-auto leading-normal text-sm group text-fuchsia-500">
                                        See more
                                        <i className="group-hover:translate-x-1.25 fas fa-arrow-right text-xs ease-bounce ml-1 leading-tight transition-all duration-200"
                                           aria-hidden="true"></i>
                                    </a>
                                </div>
                                <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                    <div className="flex items-center">
                                        <div className="text-center w-5/100">
                                            <i className="fas fa-desktop text-lg opacity-60" aria-hidden="true"></i>
                                        </div>
                                        <p className="my-auto ml-4 dark:text-white/60">Chrome on macOS</p>
                                        <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">US</p>
                                        <a href="javascript:;"
                                           className="my-auto leading-normal text-sm group text-fuchsia-500">
                                            See more
                                            <i className="group-hover:translate-x-1.25 fas fa-arrow-right text-xs ease-bounce ml-1 leading-tight transition-all duration-200"
                                               aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                        <div className="flex items-center">
                                            <div className="text-center w-5/100">
                                                <i className="fas fa-mobile text-lg opacity-60" aria-hidden="true"></i>
                                            </div>
                                            <p className="my-auto ml-4 dark:text-white/60">Safari on iPhone</p>
                                            <p className="my-auto ml-auto mr-4 leading-normal text-sm text-slate-400 dark:text-white dark:opacity-80">US</p>
                                            <a href="javascript:;"
                                               className="my-auto leading-normal text-sm group text-fuchsia-500">
                                                See more
                                                <i className="group-hover:translate-x-1.25 fas fa-arrow-right text-xs ease-bounce ml-1 leading-tight transition-all duration-200"
                                                   aria-hidden="true"></i>
                                            </a>
                                        </div>
                            </div>
                        </div>
                        <div
                            className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"
                            id="delete">
                            <div className="p-6 rounded-t-2xl">
                                <h5 className="dark:text-white">Delete Account</h5>
                                <p className="mb-0 leading-normal text-sm dark:text-white/60">Once you delete your
                                    account, there is no going back. Please be certain.</p>
                            </div>
                            <div className="flex-auto p-6 pt-0 sm:flex">
                                <div className="flex items-center mb-6 sm:mb-0">
                                    <div>
                                        <div className="block pl-12 mb-0 min-h-6">
                                            <input
                                                className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                                type="checkbox"/>
                                        </div>
                                    </div>
                                    <div className="ml-2">
                                        <span
                                            className="block font-semibold leading-normal text-sm text-slate-700 dark:text-white">Confirm</span>
                                        <span
                                            className="block leading-tight text-xs">I want to delete my account.</span>
                                    </div>
                                </div>
                                <button type="button"
                                        className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs hover:active:scale-102 border-slate-400 text-slate-400 hover:text-slate-400 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-400 active:bg-slate-400 active:text-white hover:active:border-slate-400 hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none">Deactivate
                                </button>
                                <button type="button"
                                        className="inline-block px-6 py-3 m-0 ml-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-red-600 to-rose-400 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Delete
                                    account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;