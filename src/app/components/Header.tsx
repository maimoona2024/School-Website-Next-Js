import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="bg-purple-950 w-screen">
                <div className="mx-5 py-2 md:flex justify-between">
                    <div className="font-sans font-bold text-white">Sunshine School</div>
                    <ul className="text-white flex flex-col items-center mt-3 text-sm font-sans font-bold md:flex-row md:mt-0 md:gap-5">
                        <li><a className="hover:text-gray-400" href="#home">HOME</a></li>
                        <li><a className="hover:text-gray-400" href="#why">WHY-US</a></li>
                        <li><a className="hover:text-gray-400" href="#goals">GOALS</a></li>
                        <li><a className="hover:text-gray-400" href="#reviews">REVIEWS</a></li>
                        <li><a className="hover:text-gray-400" href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
