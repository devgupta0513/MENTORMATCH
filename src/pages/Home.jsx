import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from '../Components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../Components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../Components/core/HomePage/InstructorSection';
import ExploreMore from '../Components/core/HomePage/ExploreMore';
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice"
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { useEffect } from 'react';
import { useState } from 'react';
import RatingSlider from '../Components/core/Ratings/RatingSlider';


function Home() {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6475dbeb49dcc886b5698441";

    useEffect(() => {
        const fetchCatalogPageData = async () => {
            
                const result = await getCatalogaPageData(categoryID,dispatch);
                setCatalogPageData(result);
                // console.log("page data",CatalogPageData);
            
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])
    const dispatch = useDispatch();
  return (
    <div>
        <div className='relative flex flex-col items-center justify-between w-11/12 mx-auto text-white '>
            <Link onClick={()=>{dispatch(setProgress(100))}}  to={"/signup"}>
            <div className='p-1 mx-auto mt-16 font-bold transition-all duration-200 scale-95 rounded-full group bg-richblack-800 hover: w-fit max-w-maxContent'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p><FaArrowRight/>
                </div>
            </div>
            </Link>

            <div className='text-3xl font-semibold text-center md:text-4xl mt-7'>
                Empower Your Future With <HighlightText text={"Coding Skills"}/>
            </div>
            <div className=' mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row mt-8 gap-7'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"} >Book a Demo</CTAButton>
            </div>

            <div className='mx-3 my-12 shadow-blue-200 w-[70%] relative'>
              <div className='grad2 -top-10 w-[800px]'></div>
            <video className='video'
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

        <div >
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-2xl font-semibold lg:text-4xl sm:w-full'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"white"}
                backgroudGradient={"grad"}
            />
        </div>
        <div className='box-content w-full py-12 mx-auto max-w-maxContentTab px- lg:max-w-maxContent'>
        <h2 className='mb-6 text-xl section_heading md:text-3xl'>
           Most Popular Courses
        </h2>
        <CourseSlider Courses={CatalogPageData?.selectedCourses}/>
      </div>       
        <div className='box-content w-full py-12 mx-auto max-w-maxContentTab px- lg:max-w-maxContent'>
        <h2 className='mb-6 text-xl section_heading md:text-3xl'>
           Students are learning
        </h2>
        <CourseSlider Courses={CatalogPageData?.differentCourses}/>
      </div>       


                {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"grad2"}
            />
        </div>


        <ExploreMore/>


        </div>
        <div className='hidden lg:block lg:h-[200px]'></div>


        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

                <div className='flex flex-col items-center justify-between w-11/12 gap-5 mx-auto max-w-maxContent'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row text-white gap-7 '>
                        <CTAButton active={true} linkto={"/catalog/Web Developement"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='flex flex-col items-center justify-between w-11/12 mx-auto max-w-maxContent gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                <LearningLanguageSection />

            </div>
      </div>



       <div className='flex-col items-center justify-between w-11/12 gap-8 mx-auto text-white max-w-maxContent first-letter bg-richblack-900'>

            <InstructorSection />

            {/* Review Slider here */}
      </div>
      <div className='mt-3 mb-16 '>
        <h2 className='mt-8 mb-5 text-2xl font-semibold text-center md:text-4xl text-richblack-5'>Reviews from other learners</h2>
        <RatingSlider />
      </div>
    </div>
  )
}

export default Home