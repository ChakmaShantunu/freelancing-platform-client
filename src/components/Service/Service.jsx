import React from 'react';
import { IoCheckbox } from "react-icons/io5";
import webImg from '../../assets/web.png'
import uiImg from '../../assets/ui.png'
import videoImg from '../../assets/video.jpg'
import writingImg from '../../assets/writing.jpg'



const Service = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-24'>
            <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row">
                <figure className="md:w-1/3 w-full">
                    <img src={webImg} alt="Web Design & Development" className="w-full h-auto object-cover md:h-full" />
                </figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-3xl font-semibold">Web Design & Development</h2>
                    <p className='text-lg'>"Modern, responsive, and SEO-friendly websites tailored to boost your brand and grow your business."</p>
                    <ul className='list-none space-y-2 mt-4'>
                        <li className='flex items-center gap-2'><IoCheckbox /> Fully responsive website (mobile & desktop)</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Cross-browser compatibility</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Fast loading speed</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Git & GitHub for version control</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Tailwind CSS, React.js</li>
                    </ul>
                    <div className="card-actions mt-4">
                        <button className="btn btn-outline">Explore more</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row">
                <figure className="md:w-1/3 w-full">
                    <img src={uiImg} alt="UI/UX Design" className="w-full h-auto object-cover md:h-full" />
                </figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-3xl font-semibold">UI/UX Design</h2>
                    <p className='text-lg'>"Intuitive and visually stunning designs that enhance user experience and boost engagement."</p>
                    <ul className='list-none space-y-2 mt-4'>
                        <li className='flex items-center gap-2'><IoCheckbox /> Clean, modern, and visually appealing design</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> User-centered design approach for better usability</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Responsive layouts for mobile, tablet & desktop</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Interactive prototypes for user flow demonstration</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Consistent color schemes, typography & branding</li>
                    </ul>
                    <div className="card-actions mt-4">
                        <button className="btn btn-outline">Explore more</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row">
                <figure className="md:w-1/3 w-full">
                    <img src={videoImg} alt="Professional Video Editing" className="w-full h-auto object-cover md:h-full" />
                </figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-3xl font-semibold">Professional Video Editing</h2>
                    <p className='text-lg'>"High-quality, engaging, and professionally edited videos that capture attention and deliver your message with impact."</p>
                    <ul className='list-none space-y-2 mt-4'>
                        <li className='flex items-center gap-2'><IoCheckbox /> Smooth cuts and transitions</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Color correction & grading</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Sound enhancement & background music</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Logo animation & intros/outros</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Text overlays & motion graphics</li>
                    </ul>
                    <div className="card-actions mt-4">
                        <button className="btn btn-outline">Explore more</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row">
                <figure className="md:w-1/3 w-full">
                    <img src={writingImg} alt="Professional Writing Services" className="w-full h-auto object-cover md:h-full" />
                </figure>
                <div className="card-body md:w-2/3">
                    <h2 className="card-title text-3xl font-semibold">Professional Writing Services</h2>
                    <p className='text-lg'>"Clear, compelling, and well-researched content tailored to your audience and business goals."</p>
                    <ul className='list-none space-y-2 mt-4'>
                        <li className='flex items-center gap-2'><IoCheckbox /> SEO-friendly blog posts & articles</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Engaging website & landing page copy</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Product descriptions that sell</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> Proofreading & editing for flawless content</li>
                        <li className='flex items-center gap-2'><IoCheckbox /> On-time delivery & unlimited revisions</li>
                    </ul>
                    <div className="card-actions mt-4">
                        <button className="btn btn-outline">Explore more</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;