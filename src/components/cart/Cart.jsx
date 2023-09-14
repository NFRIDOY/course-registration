import { useState } from "react"

export default function Cart({ selectCourses }) {
    const [credit, setCredit] = useState(0);
    // setCredit()
    let creditList = [...selectCourses.map(selectCourseCredit => selectCourseCredit.credit)]
    // console.log(creditList);
    let totalCredit = creditList.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return (
        <div className="w-auto bg-white rounded-xl h-fit">
            <h1 className="text-primary font-bold text-lg text-center py-4">Credit Hour Remaining {7} hr</h1>
            <hr className="border w-11/12 mx-auto" />
            <h1 className="font-bold text-xl py-4 mx-4">Course Name</h1>
            <ol className="list-decimal mx-9 mb-4">
                {
                    selectCourses.map(selectCourse => <li>{selectCourse.title}</li>)
                }
            </ol>
            <hr className="border w-11/12 mx-auto" />
            <h2 className="py-4 mx-4">Total Credit Hour : {totalCredit}</h2>
            <hr className="border w-11/12 mx-auto" />
            <h2 className="py-4 mx-4">Total Price : {100} USD</h2>
        </div>
    )
}
