import { useEffect, useState } from "react"

export default function Cart({ selectCourses }) {
    // const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(0);
    // setCredit()

    const creditList = [...selectCourses.map(selectCourseCredit => selectCourseCredit.credit)]
    // console.log(creditList);
    const totalCredit = creditList.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const totalPriceList = [...selectCourses.map(price => price.price)]
    const totalPrice = totalPriceList.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    useEffect(() => {
        setRemaining(20 - totalCredit)
    },[totalCredit])
    return (
        <div className="w-auto bg-white rounded-xl h-fit">
            <h1 className="text-primary font-bold text-lg text-center py-4">Credit Hour Remaining {remaining} hr</h1>
            <hr className="border w-11/12 mx-auto" />
            <h1 className="font-bold text-xl py-4 mx-4">Course Name</h1>
            <ol className="list-decimal mx-9 mb-4">
                {
                    selectCourses.map((selectCourse) => <li key={selectCourse.id} className="text-base font-normal text-[#1c1b1b] opacity-60">{selectCourse.title}</li>)
                }
            </ol>
            <hr className="border w-11/12 mx-auto" />
            <h2 className="py-4 mx-4">Total Credit Hour : {totalCredit}</h2>
            <hr className="border w-11/12 mx-auto" />
            <h2 className="py-4 mx-4">Total Price : {totalPrice} USD</h2>
        </div>
    )
}
