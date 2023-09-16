import { useState } from "react"
import Cards from "./cards/Cards"
import Cart from "./cart/Cart"
export default function Main() {
    const [selectCourses, setSelectCourse] = useState([]);
    // const [totalCredit, setTotalCredit] = useState(0);

    // let totalCredit = 0
    const [remaining, setRemaining] = useState(0);
    // const [remaining, setRemaining] = useState(0);

    const handleSelectBtn = (newSelectCourse) => {
        // const newSelectCourse = [...selectCourse];
        // console.log(newSelectCourse);
        const isExist = selectCourses.find(selectCourse => selectCourse.id == newSelectCourse.id)
        // console.log(totalCredit + newSelectCourse.credit)
        // setTotalCredit(totalCredit + newSelectCourse.credit)
        // totalCredit = newSelectCourse.credit
        
        
        // totalCredit = totalCredit + newSelectCourse.credit;
        let count = newSelectCourse.credit ; //1
        // setTotalCredit(newSelectCourse.credit)//2
        if (isExist) {
            // if (!selectCourses.includes(newSelectCourse)) {
            return alert("Already Selected");
        }
        else {
            selectCourses.forEach((course) => {
                count = count + course.credit; //1
                // setTotalCredit(totalCredit + course.credit) //2
                // console.log(count);

            })
            if(count <= 20){ //1
            // if (totalCredit <= 20) { //2
                setSelectCourse([...selectCourses, newSelectCourse]);

            }
            else {
                return alert("Credit Overload")
            }
        }
        // else if (totalCredit <= 20) {


        //     if (totalCredit > 20) {
        //         return alert("Total Credit Exiced");
        //     }
        //     else {
        //         const newSelectCourseList = [...selectCourses, newSelectCourse];
        //         setSelectCourse(newSelectCourseList);
        //     }

        //     // setSelectCourse([...selectCourses]);
        // }
        // else{
        //     return alert("Overload");
        // }
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
