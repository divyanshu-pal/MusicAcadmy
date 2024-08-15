'use client'
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient"
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

//Course become datatype so course:Course collon use to dentote that
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="mx-auto bg-slate-800 py-12">
      {/* <div className='text-center'>
        <h1 className='text-sky-700 text-sm mx-auto mt-1'>FEATURED COURSES</h1>
        <p className='text-white text-3xl  md:text-4xl mx-auto mt-2'>Learn With The Best</p>
     </div>

     <div>
        {
            featuredCourses.map((course:Course)=>(

                 <div key={course.id}>
                          <p>{course.title}</p>
                          <p>{course.description}</p>
                 </div>
            ))
        }
     </div> */}

      <div>
        <div className="text-center">
          <h1 className="text-white ">FEATURED COURSES</h1>
          <p className="text-white text-3xl">Learn With The Best</p>
        </div>
      </div>

      <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link className ="hover:bg-green-500 rounded-md p-1"href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>

      <div className="text-center mt-10">
        <Link href="/courses" className="text-white rounded-md bg-green-500 p-2 hover:bg-slate-500 ">
             View All Courses
         </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
