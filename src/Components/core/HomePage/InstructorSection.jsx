import React from 'react'
import Instructor from "../../../assets/Images/Mentor3.jpg"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col md:flex-row gap-20 items-center'>

        <div className='w-[50%]'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white shadow-[-1.3rem_-1rem_0_0]'
            />
        </div>

        <div className='md:w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semobold md:w-[50%]'>
                Become a <br/>
                <HighlightText text={"Mentor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on MentorMatch. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit mx-auto'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Guide Mentees Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
