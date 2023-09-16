import { useState } from "react"
import Cards from "./cards/Cards"
import Cart from "./cart/Cart"
export default function Main() {
    const [selectCourses, setSelectCourse] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(0);
    // const [remaining, setRemaining] = useState(0);
    const handleSelectBtn = (newSelectCourse) => {
        // const newSelectCourse = [...selectCourse];
        // console.log(newSelectCourse);
        const isExist = selectCourses.find(selectCourse => selectCourse.id == newSelectCourse.id)
        { console.log(isExist) }
        if(isExist) {
        // if (!selectCourses.includes(newSelectCourse)) {
            return alert("already Booked");
        }
        else {
            const newSelectCourseList = [...selectCourses, newSelectCourse];
            setSelectCourse(newSelectCourseList);
            // setSelectCourse([...selectCourses]);
        }
        // setSelectCourse(newSelectCourse);

    }

    return (
        <>
            <div className='max-w-7xl mx-auto '>

                <div className="flex justify-between">
                    <div>

                        <Cards handleSelectBtn={handleSelectBtn}></Cards>
                    </div>
                    <div className="w-[1700px] h-auto">
                        <Cart selectCourses={selectCourses}></Cart>
                    </div>
                </div>
            </div>
        </>
    )
}
