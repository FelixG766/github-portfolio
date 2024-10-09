import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaUniversity, FaStackOverflow, FaAward } from 'react-icons/fa';
import profileImg from "../assets/profile.jpeg"

const About = () => {
    return (
        <section id="about" className="py-10 px-6 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <img src={profileImg} alt="Felix Guo" className="w-60 h-60 rounded-full object-cover"/>
                    </div>
                    <p className="text-xl text-gray-800">Hello, I'm <span className="text-indigo-700 font-bold">Felix Guo</span>.</p>
                    <p className="text-lg font-semibold text-gray-800">Fullstack Developer</p>
                    <p className="text-gray-800 mt-4 leading-relaxed">Dedicated and motivated, transitioning into software development with a strong foundation in both software development and applied mathematics. Passionate about using technology to innovatively solve complex problems and drive innovation in the IT industry.</p>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                            <FaUniversity className="text-blue-600 w-6 h-6" />
                            <span>Education</span>
                        </h3>
                        <ul className="mt-4 text-gray-700 text-sm list-disc pl-5">
                            <li><strong>Master of Information Technology</strong>, Software Development - UTS</li>
                            <li><strong>Bachelor of Science</strong>, Applied Mathematics - SXUFE</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                            <FaStackOverflow className="text-orange-500 w-6 h-6" />
                            <span>Skills</span>
                        </h3>
                        <ul className="mt-4 text-gray-700 text-sm list-disc pl-5">
                            <li>React, Express, Node.js, MongoDB</li>
                            <li>SpringBoot, SpringCloud, MySQL</li>
                            <li>Microservices, Containerisation</li>
                            <li>AWS S3, Nginx, Redis</li>
                            <li>Kafka, ElasticSearch</li>
                            <li>Design Patterns, Cloud Computing, Distributed Systems</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                            <FaAward className="text-gold-500 w-6 h-6" />
                            <span>Achievements</span>
                        </h3>
                        <ul className="mt-4 text-gray-700 text-sm list-disc pl-5">
                            <li>UTS Tech Festival 2023 - Software Engineering Showcase: Best Project Award</li>
                            <li>UTS Tech Festival 2023 - iOS Hackathon: First Place</li>
                            <li>2023 and 2024 FEIT Dean's List</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
