export default function Card({course}) {
// export default function Card(props) {
    const {title, cover, details, price, courseCreditHour} = course;
    // console.log(props);
    console.log(title);
    return (
        <div>
            <div>
                <img src={cover} alt={title} />
            </div>
            <h1>{title}</h1>
            <p>
                {details}
            </p>
            <div>
                <span>{price}</span>
                <span>{courseCreditHour}</span>
            </div>
        </div>
    )
}
