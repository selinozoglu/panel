'use client';
import Script from "next/script";
import Chart from "../assets/js/charts";
// Import the FontAwesomeIcon component
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faSearch,
    faUser,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {

  return (<>
          <nav navbar-main
               className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
               navbar-scroll="true">
              <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                  <nav>

                      <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                          <li className="text-sm leading-normal breadcrumb-item">
                              <a className="text-slate-700 opacity-30 dark:text-white" href="javascript:;">
                                  {/**/}
                              </a>
                          </li>
                          <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                              <a className="opacity-50 text-slate-700 dark:text-white" href="javascript:;">Pages</a>
                          </li>
                          <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
                              aria-current="page">Dashboard
                          </li>
                      </ol>
                      <h6 className="mb-0 font-bold capitalize dark:text-white">Dashboard</h6>
                  </nav>

                  <div className="flex items-center">
                      <a mini-sidenav-burger href="javascript:;"
                         className="hidden p-0 text-sm transition-all ease-nav-brand text-slate-500 xl:block"
                         aria-expanded="false">
                          <div className="w-4.5 overflow-hidden">
                              <i className="ease-soft mb-0.75 relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                              <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                              <i className="ease-soft relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                          </div>
                      </a>
                  </div>

                  <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto" id="navbar">
                      <div className="flex items-center md:ml-auto md:pr-4">
                          <div
                              className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span
                    className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">

                       <FontAwesomeIcon
                           icon={faSearch}
                       />
                </span>
                              <input type="text"
                                     className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                     placeholder="Type here..."/>
                          </div>
                      </div>
                      <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">

                          <li className="flex items-center">
                              <a href="./pages/authentication/signin/illustration.html"
                                 className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500 dark:text-white">
                                  <FontAwesomeIcon className={' sm:mr-1'}
                                      icon={faUser}
                                  />
                                  <span className="hidden sm:inline">Sign In</span>
                              </a>
                          </li>
                          <li className="flex items-center pl-4 xl:hidden">
                              <a sidenav-trigger
                                 className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white"
                                 href="javascript:;" aria-expanded="false">
                                  <div className="w-4.5 overflow-hidden">
                                      <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                      <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                      <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                                  </div>
                              </a>
                          </li>
                          <li className="flex items-center px-4">
                              <Link href="/settings"
                                 className="p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white">

                                  <FontAwesomeIcon className={' sm:mr-1'}
                                                   icon={faCog}
                                  />
                              </Link>
                          </li>



                          <li className="relative flex items-center pr-2">
                              <p className="hidden transform-dropdown-show"></p>
                              <a dropdown-trigger href="javascript:;"
                                 className="block p-0 text-sm transition-all ease-nav-brand text-slate-500 dark:text-white"
                                 aria-expanded="false">
                                  <i className="cursor-pointer fa fa-bell" aria-hidden="true"></i>
                              </a>

                              <ul dropdown-menu
                                  className="text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7 before:text-5.5 dark:bg-gray-950 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">

                                  <li className="relative mb-2">
                                      <a className="group ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 dark:hover:bg-gray-200/80 lg:transition-colors"
                                         href="javascript:;">
                                          <div className="flex py-1">
                                              <div className="my-auto">
                                                  <img src="./assets/img/team-2.jpg"
                                                       className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"/>
                                              </div>
                                              <div className="flex flex-col justify-center">
                                                  <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                                                      <span className="font-semibold">New message</span> from Laur</h6>
                                                  <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
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
                                                  <img src="./assets/img/small-logos/logo-spotify.svg"
                                                       className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"/>
                                              </div>
                                              <div className="flex flex-col justify-center">
                                                  <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">
                                                      <span className="font-semibold">New album</span> by Travis Scott
                                                  </h6>
                                                  <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
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
                                                  className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">

                                              </div>
                                              <div className="flex flex-col justify-center">
                                                  <h6 className="mb-1 text-sm font-normal leading-normal group-hover:text-slate-700 dark:text-white">Payment
                                                      successfully completed</h6>
                                                  <p className="mb-0 text-xs leading-tight text-slate-400 group-hover:text-slate-700 dark:text-white dark:opacity-80">
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
          <div className={"w-full p-6 mx-auto"}>
              <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-7/12 xl:w-8/12">
                      <div className="flex flex-wrap -mx-3">
                          <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="p-4 pb-0 rounded-t-2xl">
                                      <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Capacity</p>
                                      <h5 className="mb-0 font-bold dark:text-white">
                                          5,927
                                          <span className="font-bold leading-normal text-sm text-lime-500">+55%</span>
                                      </h5>
                                  </div>
                                  <div className="flex-auto p-0">
                                      <div>
                                          <canvas id="chart-line-1" className="chart-canvas" height="100"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-4/12">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="p-4 pb-0 rounded-t-2xl">
                                      <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Income</p>
                                      <h5 className="mb-0 font-bold dark:text-white">
                                          $130,832
                                          <span className="font-bold leading-normal text-sm text-lime-500">+90%</span>
                                      </h5>
                                  </div>
                                  <div className="flex-auto p-0">
                                      <div>
                                          <canvas id="chart-line-2" className="chart-canvas" height="100"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col overflow-hidden break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="p-4 pb-0 rounded-t-2xl">
                                      <p className="mb-0 font-semibold leading-normal capitalize text-sm dark:text-white dark:opacity-60">Analytics</p>
                                      <h5 className="mb-0 font-bold dark:text-white">
                                          5,927
                                          <span className="font-bold leading-normal text-sm text-lime-500">+55%</span>
                                      </h5>
                                  </div>
                                  <div className="flex-auto p-0">
                                      <div>

                                          <canvas id="chart-line-3" className="chart-canvas" height="100"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="flex flex-wrap mt-6 -mx-3">
                          <div className="w-full max-w-full px-3 flex-0">
                              <div
                                  className="widget-calendar border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="p-4 pb-0 rounded-t-2xl">
                                      <h6 className="mb-0 dark:text-white">Calendar</h6>
                                      <div className="flex">
                                          <div
                                              className="mb-0 font-semibold leading-normal widget-calendar-day text-sm"></div>
                                          <span>,&nbsp;</span>
                                          <div
                                              className="mb-1 font-semibold leading-normal widget-calendar-year text-sm"></div>
                                      </div>
                                  </div>
                                  <div className="flex-auto p-4">
                                      <div data-toggle="widget-calendar"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 lg:flex-0 shrink-0 lg:mt-0 lg:w-5/12 xl:w-4/12">
                      <div className="flex flex-wrap -mx-3">
                          <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 lg:w-full">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                                  <div
                                      className="relative h-full overflow-hidden rounded-xl bg-[url('./../assets/img/ivancik.jpg')] bg-cover">
                                  <span
                                      className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 opacity-80"></span>
                                      <div className="relative z-10 flex-auto h-full p-4">
                                          <h6 className="mb-4 font-bold text-white">Hey John!</h6>
                                          <p className="mb-4 text-white dark:opacity-60">Wealth creation is an
                                              evolutionarily recent positive-sum game. It is all about who take the
                                              opportunity first.</p>
                                          <a className="active:shadow-soft-xs active:opacity-85 leading-pro text-xs ease-soft-in rounded-3.5xl hover:scale-102 mb-0 inline-block cursor-pointer border border-solid border-white/75 bg-white/10 py-3 px-6 text-center align-middle font-bold uppercase text-white shadow-none transition-all hover:border-white hover:bg-transparent hover:text-white hover:opacity-75 hover:shadow-none active:border-white active:bg-white active:text-black hover:active:bg-transparent hover:active:text-white hover:active:opacity-75 hover:active:shadow-none"
                                             href="javascript:;">
                                              Read More
                                              <i className="ml-1 leading-normal text-sm fas fa-arrow-right"
                                                 aria-hidden="true"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-full">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative mt-6 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="p-4 pb-0 rounded-t-4">
                                      <h6 className="mb-0 dark:text-white">Categories</h6>
                                  </div>
                                  <div className="flex-auto p-4">
                                      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                          <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                                              <div className="flex items-center">
                                                  <div
                                                      className="inline-block w-8 h-8 mr-4 text-center text-black bg-center fill-current stroke-none shadow-soft-2xl bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 rounded-xl">
                                                      {/*<svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1"*/}
                                                      {/*     xmlns="http://www.w3.org/2000/svg"*/}
                                                      {/*     xmlns:xlink="http://www.w3.org/1999/xlink" className="mt-1">*/}
                                                      {/*    <title>spaceship</title>*/}
                                                      {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                                      {/*        <g transform="translate(-1720.000000, -592.000000)"*/}
                                                      {/*           fill="#FFFFFF" fill-rule="nonzero">*/}
                                                      {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                                      {/*                <g transform="translate(4.000000, 301.000000)">*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"*/}
                                                      {/*                    ></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"*/}
                                                      {/*                        opacity="0.598539807"></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"*/}
                                                      {/*                        opacity="0.598539807"></path>*/}
                                                      {/*                </g>*/}
                                                      {/*            </g>*/}
                                                      {/*        </g>*/}
                                                      {/*    </g>*/}
                                                      {/*</svg>*/}
                                                  </div>
                                                  <div className="flex flex-col">
                                                      <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Devices</h6>
                                                      <span className="leading-tight text-xs">250 in stock, <span
                                                          className="font-semibold">346+ sold</span></span>
                                                  </div>
                                              </div>
                                              <div className="flex">
                                                  <button
                                                      className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6 w-6 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                                                      <i className="ni leading-none ease-bounce text-3xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                                                         aria-hidden="true"></i></button>
                                              </div>
                                          </li>
                                          <li className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit">
                                              <div className="flex items-center">
                                                  <div
                                                      className="inline-block w-8 h-8 mr-4 text-center text-black bg-center fill-current stroke-none shadow-soft-2xl bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 rounded-xl">
                                                      {/*<svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1"*/}
                                                      {/*     xmlns="http://www.w3.org/2000/svg"*/}
                                                      {/*     xmlns:xlink="http://www.w3.org/1999/xlink" className="mt-1">*/}
                                                      {/*    <title>settings</title>*/}
                                                      {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                                      {/*        <g transform="translate(-2020.000000, -442.000000)"*/}
                                                      {/*           fill="#FFFFFF" fill-rule="nonzero">*/}
                                                      {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                                      {/*                <g transform="translate(304.000000, 151.000000)">*/}
                                                      {/*                    <polygon opacity="0.596981957"*/}
                                                      {/*                             points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"*/}
                                                      {/*                        opacity="0.596981957"></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>*/}
                                                      {/*                </g>*/}
                                                      {/*            </g>*/}
                                                      {/*        </g>*/}
                                                      {/*    </g>*/}
                                                      {/*</svg>*/}
                                                  </div>
                                                  <div className="flex flex-col">
                                                      <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Tickets</h6>
                                                      <span className="leading-tight text-xs">123 closed, <span
                                                          className="font-semibold">15 open</span></span>
                                                  </div>
                                              </div>
                                              <div className="flex">
                                                  <button
                                                      className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6 w-6 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                                                      <i className="ni leading-none ease-bounce text-3xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                                                         aria-hidden="true"></i></button>
                                              </div>
                                          </li>
                                          <li className="relative flex justify-between py-2 pr-4 border-0 rounded-b-lg rounded-xl text-inherit">
                                              <div className="flex items-center">
                                                  <div
                                                      className="inline-block w-8 h-8 mr-4 text-center text-black bg-center fill-current stroke-none shadow-soft-2xl bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 rounded-xl">
                                                      {/*<svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1"*/}
                                                      {/*     xmlns="http://www.w3.org/2000/svg"*/}
                                                      {/*     xmlns:xlink="http://www.w3.org/1999/xlink" className="mt-1">*/}
                                                      {/*    <title>box-3d-50</title>*/}
                                                      {/*    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                                                      {/*        <g transform="translate(-2319.000000, -291.000000)"*/}
                                                      {/*           fill="#FFFFFF" fill-rule="nonzero">*/}
                                                      {/*            <g transform="translate(1716.000000, 291.000000)">*/}
                                                      {/*                <g transform="translate(603.000000, 0.000000)">*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"*/}
                                                      {/*                        opacity="0.7"></path>*/}
                                                      {/*                    <path*/}
                                                      {/*                        d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"*/}
                                                      {/*                        opacity="0.7"></path>*/}
                                                      {/*                </g>*/}
                                                      {/*            </g>*/}
                                                      {/*        </g>*/}
                                                      {/*    </g>*/}
                                                      {/*</svg>*/}
                                                  </div>
                                                  <div className="flex flex-col">
                                                      <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Error
                                                          logs</h6>
                                                      <span className="leading-tight text-xs">1 is active, <span
                                                          className="font-semibold">40 closed</span></span>
                                                  </div>
                                              </div>
                                              <div className="flex">
                                                  <button
                                                      className="group ease-soft-in leading-pro text-xs rounded-3.5xl p-1.2 h-6 w-6 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                                                      <i className="ni leading-none ease-bounce text-3xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                                                         aria-hidden="true"></i></button>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12 lg:w-full">
                              <div
                                  className="border-black/12.5 shadow-soft-xl dark:bg-gray-950 dark:shadow-soft-dark-xl relative mt-6 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                  <div className="flex-auto p-4">
                                      <div className="flex flex-wrap -mx-3">
                                          <div className="w-4/12 max-w-full px-3 flex-0">
                                              <img src="../../assets/img/kal-visuals-square.jpg" alt="kal"
                                                   className="w-full shadow-soft-2xl rounded-xl"/>
                                          </div>
                                          <div className="w-8/12 max-w-full px-3 my-auto flex-0">
                                              <p className="font-semibold leading-normal text-sm text-slate-500 dark:text-white dark:opacity-60">Today
                                                  is Martina's birthday. Wish her the best of luck!</p>
                                              <a className="inline-block px-8 py-2 mb-0 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25"
                                                 href="javascript:;">Send Message</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-wrap mt-6 -mx-3">
                  <div className="w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-6/12">
                      <div
                          className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
                          <div className="p-4 pb-0 rounded-t-2xl">
                              <div className="flex flex-wrap -mx-3">
                                  <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                      <h6 className="mb-0 dark:text-white">Transactions</h6>
                                  </div>
                                  <div
                                      className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                      <i className="mr-2 far fa-calendar-alt"></i>
                                      <small>23 - 30 March 2021</small>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-auto p-4">
                              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                  <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-down text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Netflix</h6>
                                                  <span className="leading-tight text-xs">27 March 2020, at 12:30 PM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">-
                                                  $ 2,500</p>
                                          </div>
                                      </div>
                                      <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                  </li>
                                  <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-up text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Apple</h6>
                                                  <span className="leading-tight text-xs">23 March 2020, at 04:30 AM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                  $ 2,000</p>
                                          </div>
                                      </div>
                                      <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                  </li>
                                  <li className="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-up text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Partner
                                                      #22213</h6>
                                                  <span className="leading-tight text-xs">19 March 2020, at 02:50 AM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                  $ 1,400</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 sm:flex-0 shrink-0 sm:mt-0 sm:w-6/12">
                      <div
                          className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl border-slate-100 bg-clip-border dark:border-slate-700">
                          <div className="p-4 pb-0 rounded-t-2xl">
                              <div className="flex flex-wrap -mx-3">
                                  <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                      <h6 className="mb-0 dark:text-white">Revenue</h6>
                                  </div>
                                  <div
                                      className="flex items-center justify-end w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                                      <i className="mr-2 far fa-calendar-alt"></i>
                                      <small>01 - 07 June 2021</small>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-auto p-4">
                              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                  <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-t-inherit rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-up text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">via
                                                      PayPal</h6>
                                                  <span className="leading-tight text-xs">07 June 2021, at 09:00 AM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                  $ 4,999</p>
                                          </div>
                                      </div>
                                      <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                  </li>
                                  <li className="relative justify-between block py-2 pb-0 pl-0 pr-4 border-0 rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-lime-500 bg-transparent p-4 text-center align-middle font-bold text-lime-500 shadow-none transition-all hover:bg-transparent hover:text-lime-500 hover:opacity-75 hover:shadow-none active:bg-lime-500 active:text-black hover:active:bg-transparent hover:active:text-lime-500 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-up text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Partner
                                                      #90211</h6>
                                                  <span className="leading-tight text-xs">07 June 2021, at 09:00 AM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">+
                                                  $ 700</p>
                                          </div>
                                      </div>
                                      <hr className="h-px mt-4 mb-2 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"/>
                                  </li>
                                  <li className="relative justify-between block py-2 pl-0 pr-4 mb-2 border-0 rounded-b-inherit rounded-xl text-inherit">
                                      <div className="flex">
                                          <div className="flex items-center">
                                              <button
                                                  className="active:shadow-soft-xs active:opacity-85 ease-soft-in leading-pro text-xs bg-150 bg-x-25 rounded-3.5xl h-6 w-6 mb-0 mr-4 flex cursor-pointer items-center justify-center border border-solid border-red-600 bg-transparent p-4 text-center align-middle font-bold text-red-600 shadow-none transition-all hover:bg-transparent hover:text-red-600 hover:opacity-75 hover:shadow-none active:bg-red-600 active:text-black hover:active:bg-transparent hover:active:text-red-600 hover:active:opacity-75 hover:active:shadow-none">
                                                  <i className="fas fa-arrow-down text-3xs"></i>
                                              </button>
                                              <div className="flex flex-col">
                                                  <h6 className="mb-1 leading-normal text-sm text-slate-700 dark:text-white">Services</h6>
                                                  <span className="leading-tight text-xs">07 June 2021, at 07:10 PM</span>
                                              </div>
                                          </div>
                                          <div className="flex items-center justify-center ml-auto">
                                              <p className="relative z-10 inline-block mb-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">-
                                                  $ 1,800</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>


          </div>
      <Script src="../assets/js/plugins/chartjs.min.js"/>
      <Script src="../assets/js/charts.js"/>
  </>

  )
}
