import React from 'react';

const dummyExperienceData = [
    {
        role: "Software Developer",
        company: "ABC",
        companyUrl: "",
        duration: "",
        location: "",
        responsibilities: [
            ""
        ],
    }
]

const Experience = ({ data = dummyExperienceData }) => {
    return (
        <section id="experience" className="py-8 px-4 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-6">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-bold">{item.role} at <a href={item.companyUrl} className="text-blue-500 hover:underline">{item.company}</a></h3>
                            <p className="text-gray-500">{item.duration} | {item.location}</p>
                            <ul className="list-disc list-inside mt-4">
                                {item.responsibilities.map((duty, idx) => (
                                    <li key={idx}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
