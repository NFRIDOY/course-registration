import { useEffect, useState } from "react"
import Card from "./Card"
// import { data } from "autoprefixer";
export default function Cards() {
    const [courses, setCourses]= useState([]);
    useEffect(()=> {
        fetch("CourseData.json")
        .then(res => res.json())
        // .then(data => console.log(data[0].cover))
        .then(data => setCourses(data))
    }, [])
    return (
        <>
            <div>
                {/* <img src={data[0].cover} alt="" /> */}
                {
                    courses.map((course) => <img src={course.cover} alt="" /> )

                }
            </div>
        </>
    )
}
