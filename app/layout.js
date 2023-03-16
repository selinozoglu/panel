'use client';
import './globals.css'
import '../assets/css/full-calendar.css'
import "../assets/css/nucleo-icons.css";
import "../assets/css/datatable.css";
import "../assets/css/choices.css";
import "../assets/css/dropzone.css";
import "../assets/css/editor-quill.css";
import "../assets/css/flatpickr.css";
import "../assets/css/full-calendar.css";
import "../assets/css/kanban.css";
// import "../assets/css/leaflet.css";
import "../assets/css/noui-slider.css";
import "../assets/css/nucleo-icons.css";
import "../assets/css/perfect-scrollbar.css";
import "../assets/css/photo-swipe.css";
import "../assets/css/sweet-alerts.css";
import "../assets/css/tooltips.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard-tailwind.css";
import "../assets/css/soft-ui-dashboard-tailwind.min.css";
// import "js/charts";
// import "js/plugins/chartjs.min";
// import 'js/plugins/fullcalendar.min'
import Head from "next/head";
import Image from "next/image";
import Script from 'next/script'
import SideBar from "../components/SideBar/SideBar";
import Footer from "./../components/Footer";
// import 'js/charts';
import '../assets/css/soft-ui-dashboard-tailwind.css'
// import 'js/charts'
// import 'js/plugins/chartjs.min'


import {Open_Sans} from 'next/font/google'
import React from "react";
import facebook from "@/assets/img/icons/facebook.svg";
import apple from "@/assets/img/icons/apple.svg";
import google from "@/assets/img/icons/google.svg";
import Link from "next/link";
import axios from "axios";

import Context, {MemberContext} from "../context/context";
import {useContext} from "react";
import {useRouter} from "next/router";


const inter = Open_Sans({subsets: ['latin']})

export default function RootLayout({children}) {
    let member = localStorage.getItem('member')
    return (
        <html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png"/>
            <link rel="icon" type="image/png" href="../assets/img/favicon.png"/>
            <title>Soft UI Dashboard PRO Tailwind by Creative Tim</title>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>

            <link href="../assets/css/nucleo-icons.css" rel="stylesheet"/>
            <link href="../assets/css/nucleo-svg.css" rel="stylesheet"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet"/>
            <Script src="js/plugins/fullcalendar.min.js"/>

            <Script src="js/charts.js"/>
            <Script src="js/plugins/threejs.js"/>
            <Script src="js/plugins/orbit-controls.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
            <Script src="js/soft-ui-dashboard-pro-tailwind.js?v=1.0.1"/>
            <Script src="js/plugins/fullcalendar.min.js"/>
            <Script src="js/plugins/chartjs.min.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
            <Script src="js/plugins/perfect-scrollbar.min.js"/>
        </Head>
        <body className="m-0 font-sans text-base antialiased
                      font-normal text-left leading-default dark:bg-slate-950
                      bg-gray-50 text-slate-500 dark:text-white">

        {member ? <SideBar/> : null}

        <main
            className={inter.className + ' relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl'}>
            <Context>
                {children}
            </Context>
            <Footer/>
        </main>


        <Script src="/charts.js"/>
        <Script src="/Chart.extension.js"/>
        <Script src="/chartjs.min.js"/>

        </body>
        </html>
    )
    // }

}
