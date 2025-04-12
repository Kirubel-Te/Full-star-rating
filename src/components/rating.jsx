import React from "react"
import Star from './star'



export default function Rating(){
    const [rating,setrating] = React.useState(0)

    function handleRating(starIndex,isLeftHalf) {
        const newRating = isLeftHalf ? starIndex + 0.5 : starIndex + 1
        setrating(newRating)
    }
    return(
        <div className="flex justify-center items-center min-h-screen bg-red-50">
            <div className="bg-[#f5ffbe] rounded-xl shadow-xl text-center p-5 sm:p-10 md:p-14 lg:p-18">
                <h2 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-500 mb-4 sm:mb-6">Star Rating</h2>
                <div className="flex justify-center mb-4 gap-1 sm:gap-2">
                    {Array.from({length: 5},(_,index)=> (
                        <Star key={index} index={index} rating={rating} onRatingChange={handleRating} />
                    ))}
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-500">{rating} out of 5</p>
            </div>
        </div>
    )
}