import Dollar from '../../assets/dollar-sign.svg'
import Credit from '../../assets/Credit.png'
import PropTypes from 'prop-types';
export default function Card({ course, handleSelectBtn }) {
    // export default function Card(props) {
    const { title, cover, details, price, credit } = course;
    // console.log(props);
    // console.log(title);
    return (
        <div className="w-11/12 p-4 bg-white rounded-xl flex flex-col justify-between ">
            <div className='main'>
                <div>
                    <img className="rounded-lg" src={cover} alt={title} />
                </div>
                <h1 className="text-lg font-semibold my-4">{title}</h1>
                <p className="text-sm">{details}</p>

            </div>
            <div className="Price-Credit flex justify-between font-semibold text-base my-4">
                <span>
                    <img className='inline h-5/6' src={Dollar} alt="" /> Price: {price}
                </span>
                <span>
                    <img className='inline h-5/6' src={Credit} alt="" /> Credit : {credit}hr
                </span>
            </div>
            <button onClick={() => handleSelectBtn(course)} className='justify-items-end btn btn-primary text-white'>Select</button>
        </div>
    )
}
Card.propTypes = {
    handleSelectBtn: PropTypes.func
}
