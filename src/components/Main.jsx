import Cards from "./cards/Cards"
import Cart from "./cart/Cart"
export default function Main() {
    return (
        <>
            <div className='max-w-7xl mx-auto '>
                <div className="flex justify-between">
                    <div>
                        <Cards></Cards>
                    </div>
                    <div className="w-[1700px] h-auto">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </>
    )
}
