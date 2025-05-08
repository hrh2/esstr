import React from 'react';
import image1 from "../assets/culture.png";
import image2 from "../assets/sale.jpg";

function Landing() {
    return (
        <>
            {/*// <!-- Hero Section -->*/}
            <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-10 lg:mb-0 reveal">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Welcome
                                to <span className="text-green-600">Ecole Secondaire saint trinite</span> Ruhango</h1>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                                Empowering students with knowledge, skills, and values to excel in a rapidly evolving
                                world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/#academics"
                                   className="bg-indigo-600 text-white px-6 py-3 rounded-md text-center hover:bg-indigo-700 transition-colors">
                                    Our Programs
                                </a>
                                <a href="/#contact"
                                   className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md text-center hover:bg-indigo-50 transition-colors">
                                    Get in Touch
                                </a>
                                <a
                                    href="/rael"
                                    className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 font-bold text-white px-6 py-3 rounded-full inline-block shadow-lg hover:brightness-110 hover:scale-105 transform transition-all duration-300"
                                >
                                    SEE TRENDS
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 reveal">
                            <img src={image1} alt="Students studying" className="rounded-lg shadow-xl w-full"/>
                        </div>
                    </div>
                </div>
            </section>

            {/*// <!-- Academics Section -->*/}
            <section id="academics" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Our comprehensive curriculum provides students with a well-rounded education that prepares
                            them for college and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/*// <!-- Program 1 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2"> Academic Services</h3>
                                <p className="text-gray-700 mb-4">
                                    <ul>
                                        <li>teaching and learning</li>
                                        <li>Examinations and assessments</li>

                                        <li>Libraries and reading rooms</li>

                                        <li>Laboratories (science, computer, etc.)</li>

                                        <li>Special education support</li>
                                    </ul>


                                </p>
                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>

                        {/*// <!-- Program 2 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Liberal Arts</h3>
                                <p className="text-gray-700 mb-4">
                                    Our humanities and arts programs foster creativity, critical thinking, and cultural
                                    awareness.
                                </p>
                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>

                        {/*// <!-- Program 3 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-600"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Athletics</h3>
                                <p className="text-gray-700 mb-4">
                                    Our athletic programs promote physical fitness, teamwork, leadership, and personal
                                    growth.
                                </p>
                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*// <!-- About Section -->*/}
            <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 reveal">
                            <div className="relative">
                                <img src={image2} alt="School building" className="rounded-lg shadow-xl w-full"/>
                                <div
                                    className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 rounded-full -z-10"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 reveal">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our School</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                At saint trinite we believe in the power of
                                collaboration. Our students, teachers, and staff work together as a united team,
                                striving for excellence in all we do.
                                We foster a supportive and inclusive environment where everyone’
                                s voice is heard, and each individual’s contributions are valued.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                By promoting open communication and
                                mutual respect, we create a space where
                                collaborative learning thrives. Whether in the classroom, on projects, or in
                                extracurricular activities,
                                we believe that collective effort leads to shared success.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Experienced Faculty</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Modern Facilities</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Small Class Sizes</span>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Strong Community</span>
                                </div>
                            </div>

                            <a href="#"
                               className="bg-indigo-600 text-white px-6 py-3 rounded-md inline-block hover:bg-indigo-700 transition-colors">Learn
                                More About Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/*// <!-- Events Section -->*/}
            <section id="events" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Combination</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Join us for these exciting events and activities happening at Westfield High School.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/*// <!-- Event 1 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-indigo-100 text-indigo-800 rounded-md p-3 mr-4">
                                        <span className="block text-center font-bold text-xl">MCE</span>

                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Mathematics computer and economics</h3>
                                        <p className="text-gray-600">It’s one of the combinations offered in Advanced
                                            Level (A-Level) in secondary school,
                                            especially for students interested in technology, business, and analytical
                                            careers</p>
                                    </div>
                                </div>

                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>

                        {/*// <!-- Event 2 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-indigo-100 text-indigo-800 rounded-md p-3 mr-4">
                                        <span className="block text-center font-bold text-xl">MEG</span>

                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Mathematics, Economics, and Geography</h3>

                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    join us to prepares students for careers in urban planning, economics, teaching,
                                    environmental science, and more
                                </p>
                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>

                        {/*// <!-- Event 3 -->*/}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden reveal">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-indigo-100 text-indigo-800 rounded-md p-3 mr-4">
                                        <span className="block text-center font-bold text-xl">HGL</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">History, Geography, and Literature</h3>
                                        <p className="text-gray-600">This combination is common in the Arts stream and
                                            is great for students who are interested in
                                            society, culture, the environment, and communicatio</p>
                                    </div>
                                </div>

                                <a href="#"
                                   className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Learn
                                    more →</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12 reveal">
                        <a href="#"
                           className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md inline-block hover:bg-indigo-50 transition-colors">
                            a
                        </a>
                    </div>
                </div>
            </section>

            {/*// <!-- Contact Section -->*/}
            <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            do you Have questions about our school ? text us!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="reveal">
                            <form className="bg-white p-8 rounded-lg shadow-md">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your
                                            Name</label>
                                        <input type="text" id="name"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                               placeholder="John Doe"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email
                                            Address</label>
                                        <input type="email" id="email"
                                               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                               placeholder="ally@example.com"/>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject"
                                           className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input type="text" id="subject"
                                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                           placeholder="Admissions Inquiry"/>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message"
                                           className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" rows="5"
                                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                              placeholder="Your message here..."></textarea>
                                </div>

                                <button type="submit"
                                        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="lg:pl-8 reveal">
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="mt-1 bg-indigo-100 p-3 rounded-full mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Email</h4>
                                            <a href="mailto:info@westfieldhigh.edu"
                                               className="text-gray-700 hover:text-indigo-600 transition-colors">
                                                infos
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="mt-1 bg-indigo-100 p-3 rounded-full mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Phone</h4>
                                            <a href="tel:+15551234567"
                                               className="text-gray-700 hover:text-indigo-600 transition-colors">
                                                0789 689 662
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="mt-1 bg-indigo-100 p-3 rounded-full mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-1">Address</h4>
                                            <p className="text-gray-700">
                                                RUHANGO District<br/>
                                                southern province
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold mb-4">School Hours</h4>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between">
                                            <span className="text-gray-600">Monday - Friday</span>
                                            <span className="font-medium">8:30 AM - 7:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-gray-600">Saturday</span>
                                            <span className="font-medium">9:00 AM - 3:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-gray-600">Sunday</span>
                                            <span className="font-medium">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Landing;