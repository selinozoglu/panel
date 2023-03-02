import React from 'react';
import '../../assets/css/soft-ui-dashboard-tailwind.css'

const Payment = () => {
    return (
        <>

            <nav navbar-main=""
                 className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                 navbar-scroll="true">
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
                            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                                aria-current="page">Order List
                            </li>
                        </ol>
                        <h6 className="mb-0 font-bold capitalize dark:text-white">Order List</h6>
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
                        <div className="flex items-center md:ml-auto md:pr-4">
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


                            <li className="flex items-center">
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
                            <li className="flex items-center px-4">
                                <a href="javascript:;"
                                   className="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white">
                                    <i fixed-plugin-button-nav="" className="cursor-pointer fa fa-cog"
                                       aria-hidden="true"></i>

                                </a>
                            </li>

                            <li className="relative flex items-center pr-2">
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
            <div className="w-full p-6 mx-auto">
                <div className="justify-between sm:flex">
                    <div>
                        <a href="javascript:;"
                           className="inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">New
                            Order</a>
                    </div>
                    <div className="flex">
                        <div className="relative inline">
                            <a href="javascript:;" dropdown-trigger=""
                               className="inline-block px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer select-auto hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-700 text-slate-700 hover:border-slate-700 hover:bg-transparent hover:opacity-75 active:border-slate-700 active:bg-slate-700 active:text-white"
                               aria-expanded="false">
                                Filters
                            </a>
                            <ul dropdown-menu=""
                                className="z-100 min-w-44 text-sm shadow-soft-3xl duration-250 transform-dropdown before:duration-350 before:font-awesome before:ease-soft before:text-5.5 dark:bg-gray-950 pointer-events-none absolute top-1.5 right-2 left-auto m-0 mt-2 block origin-top cursor-pointer list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all will-change-transform before:absolute before:top-0 before:right-5 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8'] sm:-mr-6">
                                <li className="relative"><a
                                    className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg px-4 font-normal text-slate-500 transition-colors hover:bg-gray-200 hover:text-slate-700 focus:bg-gray-200 focus:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:duration-300"
                                    href="javascript:;">Status: Paid</a></li>
                                <li className="relative"><a
                                    className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg px-4 font-normal text-slate-500 transition-colors hover:bg-gray-200 hover:text-slate-700 focus:bg-gray-200 focus:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:duration-300"
                                    href="javascript:;">Status: Refunded</a></li>
                                <li className="relative"><a
                                    className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg px-4 font-normal text-slate-500 transition-colors hover:bg-gray-200 hover:text-slate-700 focus:bg-gray-200 focus:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:duration-300"
                                    href="javascript:;">Status: Canceled</a></li>
                                <li className="relative">
                                    <hr className="h-px my-2 bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
                                </li>
                                <li className="relative"><a
                                    className="py-1.2 text-danger lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg px-4 font-normal text-red-600 transition-colors hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-200/80 lg:duration-300"
                                    href="javascript:;">Remove Filter</a></li>
                            </ul>
                        </div>
                        <button data-type="csv" type="button" export-button-list=""
                                className="inline-block px-6 py-3 mb-4 ml-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs border-slate-700 text-slate-700 hover:border-slate-700 hover:bg-transparent hover:opacity-75 active:border-slate-700 active:bg-slate-700 active:text-white">
 <span>
<i className="ni leading-none ni-archive-2"></i>
</span>
                            <span>Export CSV</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 flex-0">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="overflow-x-auto">
                                <div
                                    className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                    <div className="dataTable-top">
                                        <div className="dataTable-search"><input
                                            className="dataTable-input focus:shadow-soft-primary-outline dark:text-white/80 ease-soft focus:outline-none focus:transition-shadow"
                                            placeholder="Search..." type="text"/></div>
                                    </div>
                                    <div className="dataTable-container">
                                        <table className="table table-flush dataTable-table" datatable=""
                                               id="datatable-search-list">
                                            <thead className="thead-light">
                                            <tr>
                                                <th data-sortable="" style={{width: "14.9265%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Id</a>
                                                </th>
                                                <th data-sortable="" style={{width: "16.5441%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Date</a>
                                                </th>
                                                <th data-sortable="" style={{width: "16.0294%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Status</a>
                                                </th>
                                                <th data-sortable="" style={{width: "19.8529%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Customer</a>
                                                </th>
                                                <th data-sortable="" style={{width: "21.6912%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Product</a>
                                                </th>
                                                <th data-sortable="" style={{width: "10.9559%"}}><a href="#"
                                                                                                 className="dataTable-sorter">Revenue</a>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck1"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10421</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 10:20 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/img/team-2.jpg"
                                                             className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                             alt="user image"/>
                                                            <span>Orlando Imieto</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">Nike Sport V2</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$140,20</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck2"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10422</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 10:53 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/img/team-1.jpg"
                                                             className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                             alt="user image"/>
                                                            <span>Alice Murinho</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">Valvet T-shirt</span>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">$42,00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck3"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10423</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 11:13 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 cursor-pointer items-center border border-solid border-slate-700 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all hover:bg-transparent hover:text-slate-700 hover:opacity-75 hover:shadow-none active:bg-slate-700 active:text-white hover:active:bg-transparent hover:active:text-slate-700 hover:active:opacity-75 hover:active:shadow-none mb-0 mr-2 flex align-center justify-center">
                                                            <i className="fas fa-undo text-3xs" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Refunded</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div
                                                            className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl bg-gradient-to-tl from-gray-900 to-slate-800">
                                                            <span>M</span>
                                                        </div>
                                                        <span>Michael Mirra</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Leather Wallet
<span className="text-secondary ms-2"> +1 more </span>
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$25,50</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck4"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10424</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 12:20 PM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center">
                                                            <img src="../../../assets/img/team-3.jpg"
                                                                 className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                                 alt="user image"/>
                                                                <span>Andrew Nichel</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Bracelet Onu-Lino
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$19,40</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck5"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10425</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 1:40 PM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 cursor-pointer items-center border border-solid border-red-600 bg-transparent text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-white hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none mb-0 mr-2 flex align-center justify-center">
                                                            <i className="fas fa-times text-3xs" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Canceled</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center">
                                                            <img src="../../../assets/img/team-4.jpg"
                                                                 className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                                 alt="user image"/>
                                                                <span>Sebastian Koga</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Phone Case Pink
<span className="text-secondary ms-2"> x 2 </span>
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$44,90</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck6"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10426</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 2:19 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div
                                                            className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl bg-gradient-to-tl from-purple-700 to-pink-500">
                                                            <span>L</span>
                                                        </div>
                                                        <span>Laur Gilbert</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Backpack Niver
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$112,50</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck7"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10427</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">1 Nov, 3:42 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div
                                                            className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl bg-gradient-to-tl from-gray-900 to-slate-800">
                                                            <span>I</span>
                                                        </div>
                                                        <span>Iryna Innda</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Adidas Vio
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$200,00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck8"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10428</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">2 Nov, 9:32 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div
                                                            className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl bg-gradient-to-tl from-gray-900 to-slate-800">
                                                            <span>A</span>
                                                        </div>
                                                        <span>Arrias Liunda</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Airpods 2 Gen
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$350,00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck9"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10429</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">2 Nov, 10:14 AM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 mb-0 cursor-pointer border border-solid border-lime-500 bg-transparent text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none mr-2 flex items-center justify-center">
                                                            <i className="text-3xs fas fa-check" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Paid</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center">
                                                            <img src="../../../assets/img/team-5.jpg"
                                                                 className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                                 alt="user image"/>
                                                                <span>Rugna Ilpio</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Bracelet Warret
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$15,00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="min-h-6 pl-7 mb-0.5 block">
                                                            <input
                                                                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                                                                type="checkbox" id="customCheck10"/>
                                                        </div>
                                                        <p className="mb-0 ml-2 font-semibold leading-tight text-xs">#10430</p>
                                                    </div>
                                                </td>
                                                <td className="font-semibold">
                                                    <span className="my-2 leading-tight text-xs">2 Nov, 12:56 PM</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl p-1.2 h-6 w-6 cursor-pointer items-center border border-solid border-slate-700 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all hover:bg-transparent hover:text-slate-700 hover:opacity-75 hover:shadow-none active:bg-slate-700 active:text-white hover:active:bg-transparent hover:active:text-slate-700 hover:active:opacity-75 hover:active:shadow-none mb-0 mr-2 flex align-center justify-center">
                                                            <i className="fas fa-undo text-3xs" aria-hidden="true"></i>
                                                        </button>
                                                        <span>Refunded</span>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center">
                                                            <img src="../../../assets/img/ivana-squares.jpg"
                                                                 className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white transition-all duration-200 text-xs ease-soft-in-out rounded-xl"
                                                                 alt="user image"/>
                                                                <span>Anna Landa</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
<span className="my-2 leading-tight text-xs">
Watter Bottle India
<span className="text-secondary ms-2"> x 3 </span>
</span>
                                                </td>
                                                <td className="font-semibold leading-tight text-xs">
                                                    <span className="my-2 leading-tight text-xs">$25,00</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="dataTable-bottom">
                                        <div className="dataTable-info">Showing 1 to 10 of 12 entries</div>
                                        <nav className="dataTable-pagination">
                                            <ul className="dataTable-pagination-list">
                                                <li className="pager"><a href="#" data-page="1">‹</a></li>
                                                <li className="active"><a href="#" data-page="1">1</a></li>
                                                <li className=""><a href="#" data-page="2">2</a></li>
                                                <li className="pager"><a href="#" data-page="2">›</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;