import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const testimonials = [
    {
        id: 1,
        title: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        name: "John Doe",
        role: "UI Designer",
        company: "DesignPro",
        image: "https://i.pravatar.cc/100?img=1"
    },
    {
        id: 2,
        title: "I was amazed at how quickly my posture improved. It's simple yet effective.",
        name: "Jane Smith",
        role: "Fitness Coach",
        company: "FitLife",
        image: "https://i.pravatar.cc/100?img=2"
    },
    {
        id: 3,
        title: "Great value for money and surprisingly comfortable to wear throughout the day.",
        name: "Michael Lee",
        role: "Software Engineer",
        company: "TechWorld",
        image: "https://i.pravatar.cc/100?img=3"
    },
    {
        id: 4,
        title: "My back pain has reduced significantly. I highly recommend this!",
        name: "Emily Davis",
        role: "Nurse",
        company: "MediCare",
        image: "https://i.pravatar.cc/100?img=4"
    },
    {
        id: 5,
        title: "Perfect for office workers who sit for long hours. Loving the results.",
        name: "Robert Wilson",
        role: "Product Manager",
        company: "InnovateX",
        image: "https://i.pravatar.cc/100?img=5"
    },
    {
        id: 6,
        title: "My daily confidence has increased just by fixing my posture. Brilliant idea!",
        name: "Sarah Johnson",
        role: "Content Writer",
        company: "WriteWell",
        image: "https://i.pravatar.cc/100?img=6"
    },
    {
        id: 7,
        title: "Lightweight, easy to use, and works like a charm. Would buy again.",
        name: "David Brown",
        role: "Teacher",
        company: "Greenhill School",
        image: "https://i.pravatar.cc/100?img=7"
    },
    {
        id: 8,
        title: "Simple solution to a long-standing problem. Thank you for this innovation!",
        name: "Olivia Martinez",
        role: "Architect",
        company: "UrbanBuild",
        image: "https://i.pravatar.cc/100?img=8"
    },

    {
        id: 9,
        title: "This service completely changed the way. Super efficient and user-friendly!",
        name: "Ayesha Siddiqua",
        role: "E-commerce Owner",
        company: "ShopSmart",
        image: "https://i.pravatar.cc/100?img=12"
    },
    {
        id: 10,
        title: "Excellent customer support and fast delivery times. I highly recommend their service.",
        name: "Mahmudul Hasan",
        role: "Logistics Manager",
        company: "QuickMove",
        image: "https://i.pravatar.cc/100?img=15"
    },
    {
        id: 11,
        title: "Very reliable and professional. My customers are happier than ever!",
        name: "Sharmin Akter",
        role: "Online Seller",
        company: "TrendyWear",
        image: "https://i.pravatar.cc/100?img=17"
    },
    {
        id: 12,
        title: "The platform is simple to use, and everything is delivered on time. Great experience.",
        name: "Rayhan Chowdhury",
        role: "Entrepreneur",
        company: "ParcelPro",
        image: "https://i.pravatar.cc/100?img=22"
    },
    {
        id: 13,
        title: "A must-have for any business that relies on quick delivery. Truly impressed!",
        name: "Nilufa Yeasmin",
        role: "Business Owner",
        company: "Nilu Collection",
        image: "https://i.pravatar.cc/100?img=29"
    },
    {
        id: 14,
        title: "The best courier service I’ve used so far. Timely and trustworthy.",
        name: "Jahid Hossain",
        role: "Retail Manager",
        company: "ShopNow BD",
        image: "https://i.pravatar.cc/100?img=32"
    },
    {
        id: 15,
        title: "Fantastic delivery tracking and support system. Highly recommended!",
        name: "Farzana Karim",
        role: "Dropshipper",
        company: "Click & Go",
        image: "https://i.pravatar.cc/100?img=38"
    },
    {
        id: 16,
        title: "Great service with competitive pricing. My business runs smoother now.",
        name: "Tanvir Ahmed",
        role: "Marketing Executive",
        company: "BD Express",
        image: "https://i.pravatar.cc/100?img=40"
    },
    {
        id: 17,
        title: "Loved the real-time updates and professional handling. Never worried about my parcels again!",
        name: "Sadia Nahar",
        role: "Fashion Blogger",
        company: "StyleMe",
        image: "https://i.pravatar.cc/100?img=45"
    },
    {
        id: 18,
        title: "Affordable, fast, and reliable – three things every courier should be. These guys nailed it.",
        name: "Rakibul Islam",
        role: "SME Owner",
        company: "MiniMart BD",
        image: "https://i.pravatar.cc/100?img=50"
    },
    {
        id: 19,
        title: "Excellent pickup and delivery process. Everything is managed so smoothly!",
        name: "Tanjina Rahman",
        role: "Book Seller",
        company: "Booky",
        image: "https://i.pravatar.cc/100?img=56"
    },
    {
        id: 20,
        title: "Helpful support and wide coverage across Bangladesh. My go-to delivery partner now.",
        name: "Mehedi Alam",
        role: "Tech Entrepreneur",
        company: "GadgetZone",
        image: "https://i.pravatar.cc/100?img=60"
    }
];


const Review = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 relative">
            <div className='flex justify-center'>
                <img src="" alt="" />
            </div>
            <div className='text-center space-y-4 mt-4 mb-8'>
                <h1 className='text-5xl font-bold'>What our freelancer are sayings</h1>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3.8}
                centeredSlides={true}
                initialSlide={Math.floor(testimonials.length / 2)}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3.8,
                    },
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-base-100 p-6 rounded-2xl shadow-md transition-all duration-300 relative my-16">
                            <FaQuoteLeft className="text-4xl mb-4" />
                            <p className="mb-6">{item.title}</p>
                            <div className='border border-gray-300 border-dashed my-4'></div>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                                    alt="profile"
                                />
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-sm">{item.role} @ {item.company}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;