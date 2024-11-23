import { SiSwift, SiSqlite, SiUnity, SiCsharp, SiGithub, SiMysql, SiRedis, SiGooglecloud, SiSpringboot, SiSpring, SiElasticsearch, SiRabbitmq, SiDocker, SiGit, SiFirebase, SiGooglemaps, SiIos, SiGoogle, SiApple, SiIcloud, SiTypescript, SiMongodb, SiReactrouter, SiJsonwebtokens, SiNextdotjs, SiGoogletagmanager } from 'react-icons/si';
import { FaChartLine, FaFilePdf, FaBrain, FaDraftingCompass, FaPuzzlePiece, FaRoute, FaCalendarAlt, FaMoon, FaReact, FaNode } from 'react-icons/fa';
import { RiRouteLine, RiDatabase2Fill } from 'react-icons/ri';
import { GiLockedFortress } from 'react-icons/gi';
import { IoIosLocate, IoIosApps } from 'react-icons/io';
import { MdOutlineTextFields, MdCookie} from 'react-icons/md';
import { AiOutlineRobot } from 'react-icons/ai';

import onlinemallarchitecturemap from '../assets/onlinemallarchitecture.jpg';
import pactcatImg from '../assets/paccatImg.png';
import travelconnectImg from '../assets/travelconnectImg.png';
import easyrouteImg from '../assets/easyrouteImg.png'
import expensetrackerImg from '../assets/expensetrackerImg.png'
import missioncontrolImg from '../assets/missioncontrolImg.png'

export const projectsData = [
    {
        name: "Online Mall - Large Scale Distributed Ecommerce System",
        description: "EcomHub Refactor is a modernisation initiative for an e-commerce platform written in Java inspired by the Gulimall open-source project. The project involves refactoring and upgrading the codebase to enhance performance, scalability, and maintainability, leveraging the latest technologies and best practices in software development, with Swagger for documentation purposes.",
        link: "https://github.com/FelixG766/OnlineMall",
        technologies: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Redis', icon: <SiRedis /> },
            { name: 'AWS S3', icon: <SiGooglecloud /> },
            { name: 'Spring Boot', icon: <SiSpringboot /> },
            { name: 'Spring Framework', icon: <SiSpring /> },
            { name: 'Elasticsearch', icon: <SiElasticsearch /> },
            { name: 'RabbitMQ', icon: <SiRabbitmq /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Git', icon: <SiGit /> },
        ],
        projectImage: onlinemallarchitecturemap
    },
    {
        name: "Expense Tracker - expense management mobile app",
        description: "A native iOS application meticulously developed as a comprehensive solution for finance tracking and management. Crafted using Swift and iOS Storyboarding, the application integrates a suite of robust services and frameworks including Cocoa, iOS Charts, PDFKit, Vision and OCR, and the ChatGPT API, all underpinned by a SQLite database for persistent data storage.",
        link: "https://github.com/FelixG766/ExpenseTracker",
        technologies: [
            { name: 'Swift', icon: <SiSwift /> },
            { name: 'SQLite Database', icon: <SiSqlite /> },
            { name: 'iOS Storyboarding', icon: <IoIosApps /> },
            { name: 'Cocoa Framework', icon: <SiIcloud /> }, 
            { name: 'iOS Charts', icon: <FaChartLine /> },
            { name: 'PDFKit', icon: <FaFilePdf /> },
            { name: 'Vision and OCR', icon: <MdOutlineTextFields /> },
            { name: 'ChatGPT API', icon: <AiOutlineRobot /> },
        ],
        projectImage: expensetrackerImg
    },
    {
        name: "Mission Control - Modern Task Management Application",
        description: "Mission Control is a web-based task management application designed to streamline project management and improve productivity. It allows users to create, assign, and track tasks in real time, providing detailed progress monitoring and analytics. The app incorporates features such as JWT-based authentication, real-time updates, and seamless navigation with React Router. Built with a modern tech stack, TaskFlow ensures a user-friendly and efficient experience.",
        link: "https://github.com/FelixG766/MissionControl",
        technologies: [
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Node.js', icon: <FaNode /> },
            { name: 'React Router', icon: <SiReactrouter /> },
            { name: 'JWT Token', icon: <SiJsonwebtokens /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Google Tag Manager', icon: <SiGoogletagmanager /> },
            { name: 'Cookie Consent', icon: <MdCookie /> },
        ],
        projectImage: missioncontrolImg
    },    
    {
        name: "TravelConnect - Comprehensive travel planning and live chat mobile app",
        description: "TravelConnect is a sophisticated iOS app designed for seamless travel planning and sharing. Key features include Map Kit for route visualisation, Firebase Auth for secure login, CoreLocation for tracking, and EventKit for scheduling. It integrates iOS system extensions, CoreData, Firestore, Google APIs, and Weather.com's data, offering a comprehensive travel management experience in a user-friendly interface.",
        link: "https://github.com/FelixG766/TravelConnect",
        technologies: [
            { name: 'iOS Development', icon: <SiIos /> },
            { name: 'Map Kit', icon: <FaRoute /> },
            { name: 'Firebase Auth', icon: <GiLockedFortress /> },
            { name: 'CoreLocation', icon: <IoIosLocate /> },
            { name: 'EventKit', icon: <FaCalendarAlt /> },
            { name: 'CoreData', icon: <RiDatabase2Fill /> },
            { name: 'Firestore', icon: <SiFirebase /> },
            { name: 'Google APIs', icon: <SiGoogle /> },
            { name: 'Google Maps', icon: <SiGooglemaps /> },
        ],
        projectImage: travelconnectImg
    },
    {
        name: "Paccat - A remake of classic game Pacman",
        description: "Developed a reimagined version of the classic game Pacman using Unity, featuring custom visual and audio assets for a unique gaming experience. Crafted reusable classes to introduce distinct behavioural logic for each ghost, enhancing gameplay complexity and player engagement.",
        link: "https://github.com/FelixG766/GameDevelopmentProject_Pacman",
        technologies: [
            { name: 'Unity', icon: <SiUnity /> },
            { name: 'C#', icon: <SiCsharp /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'Object-Oriented Design (OOD)', icon: <FaPuzzlePiece /> },
            { name: 'Mathematics', icon: <FaDraftingCompass /> },
            { name: 'Path Searching Algorithm', icon: <RiRouteLine /> },
            { name: 'Game Design', icon: <FaBrain /> }
        ],
        projectImage: pactcatImg
    },
    {
        name: "EasyRoutes NSW - Public transport planning mobile app",
        description: "EasyRoutes NSW is an iOS native app designed to help users manage their journeys through public transport in an efficient and effective manner. This app utilizes the Google Route API and MapKit for the transport routing system, with a primary focus on New South Wales (NSW). However, the routing system can potentially be applied to other regions, depending on the availability of the Google Route API.",
        link: "https://github.com/FelixG766/EasyRoute-NSW",
        technologies: [
            { name: 'iOS Development', icon: <SiIos /> },
            { name: 'Google Route API', icon: <SiGooglemaps /> },
            { name: 'MapKit', icon: <SiApple /> },
            { name: 'CoreData', icon: <RiDatabase2Fill /> },
            { name: 'CloudKit', icon: <SiIcloud /> },
            { name: 'Dark Mode Support', icon: <FaMoon /> },
        ],
        projectImage: easyrouteImg
    }
];