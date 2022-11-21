import { useLocation } from "react-router-dom"

export default function SinglePost() {
    const location = useLocation()

    console.log(location)

    return (
        <div className="container">
        <div className="single-post">
        <h1>{location.state.author}</h1>
        <img src="https://source.unsplash.com/random?sig=1" alt="" />
        </div> 
        </div> 
    )
}