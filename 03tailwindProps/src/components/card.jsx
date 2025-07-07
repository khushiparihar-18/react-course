import React from 'react'
import picoImg from './picoctf.jpg'; 

function Profile({username,btnText = "Visit me!"}) {
    // console.log("Props:" , props);
    console.log(username);
    
    return (
        <>
            <div className="relative h-[400px] w-[300px] rounded-md mt-5 ">
                <img
                    src={picoImg}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-lg font-semibold text-white">{username}</h3>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                       {/* {btnText || "Visit Me!"} */}
                       {btnText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile