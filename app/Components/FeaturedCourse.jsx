import React from 'react'
import Tutor from './Tutor'
import LearnUButton from './LearnUButton'
import SaveIcon from './SaveIcon'
/**
 * 
 * @param {object} course course object
 * @returns a featured course card
 */
export default function FeaturedCourse({ course }) {
    return (
        <>
            <div className='bg-primary-white rounded-2xl shadow-light-gray'>
                {/* CARD HEAD */}
                <div className='p-2'>
                    <div className={`p-2 w-full min-h-[100px] bg-no-repeat bg-cover bg-center bg rounded-2xl relative`}
                        style={{ backgroundImage: `url(${course.imageUrl})` }}>

                        <div className="max-w-max flex items-center bg-primary-white rounded-[50px] p-1 pr-4 absolute shadow-light-gray -bottom-5 -z-0">
                            <Tutor tutor={course?.tutor} />
                        </div>

                        <div className='absolute right-4 p-3 bg-primary-saved rounded-xl'>
                            <SaveIcon />
                        </div>
                    </div>
                </div>
                {/* CARD HEAD ENDS */}

                {/* CARD BODY STARTS*/}
                <div className="mt-8 pb-3 px-4">
                    <h3 className='mb-2'>
                        {course?.title}
                    </h3>
                    <div className='flex items-center max-2xl:flex-wrap gap-4 select-none'>
                        <p className='flex items-center gap-1'>
                            <span>
                                {/* clock icon */}
                                <svg
                                    style={{ width: "16px", height: "16px", overflow: "visible", opacity: "1", zIndex: "1", fill: "rgb(177, 177, 177)" }}
                                    viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                </svg>
                            </span>
                            <span>
                                {course?.duration}
                            </span>
                        </p>
                        <p className='flex items-center gap-1 mr-auto'>
                            <span>
                                {/* rating star icon */}
                                <svg
                                    style={{ width: "16px", height: "16px", overflow: "visible", opacity: "1", zIndex: "1", fill: "rgb(177, 177, 177)" }}
                                    viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            </span>
                            <span>
                                {course?.rating && (`${course.rating}/5`)}
                            </span>
                        </p>
                        <div className='max-2xl:w-full'>
                            <LearnUButton text={`$${course.price}`} bgColor='blue' borderRadius={20} paddingInline={25} width='full' />
                        </div>
                    </div>
                </div>
                {/* CARD BODY ENDS*/}
            </div>
        </>
    )
}
