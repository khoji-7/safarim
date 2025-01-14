import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiBagSimpleBold } from "react-icons/pi";





const ProfileComp = () => {
    return (
        <div className="max-w-md w-[95%] mx-auto my-5">
            <div className="w-[80%] mx-auto flex flex-col items-center my-2 drop-shadow-2xl gap-3 bg-white rounded-2xl mt-20 py-16">
                <img
                    src="https://s3-alpha-sig.figma.com/img/5371/1eff/67b689309eb8138b640562a727188338?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=luG4gaNa2KJeA1-hOuCC0rY5yOIiHo~GLKbgv~XzOjeYefR3CWQ1WmyX6CPETg~~PhhFO1tvm51RcFKtnrr9m-SUK3PhqucuiBosC56ymN-l5Uo3-BxLfx32fXgfzSWpINQNEOCSlUh~c~1xEqH1eagn8xaTMqrL45YVbYz4yxy6f7EteeMeHcLDZfJtKYYYMQJylwhGGU75U~0PBZuyx3CdBBCmRh-FCU0x0OO6MrnZ6x9BrnuDxnqzm9r0s63w~4GDGtpmg7wi3dO8ae2xj65kNWcJD0UFw1M0jvlwHPlvCgEGxDiTf4oT9uWbfqX~gJLyNU7Z7hcVb1jbows3-Q__"
                    alt=""
                    className="rounded-full w-28 h-28 absolute top-[-70px] drop-shadow-2xl"
                />
                <p className="text-4xl font-medium ">
                Alexander
                </p>
                <p className="text-xl text-orange-500 font-bold flex items-center gap-2">
                    <FaRegStar/>
                    5.0 (722)
                </p>
                <p className="text-md text-gray-400 font-bold flex items-center gap-2">
                    <MdLanguage/>
                    English, Russian, Uzbek
                </p>
                <p className="text-md text-gray-400 font-bold flex items-center gap-2">
                    <FaRegCompass/>
                    3643 visited
                </p>
                <p className="text-md text-gray-400 font-bold flex items-center gap-2">
                    <FiMessageCircle/>
                    428 reviews
                </p>
                <p className="text-md text-gray-400 font-bold flex items-center gap-2">
                    <PiBagSimpleBold/>
                    Since 1995
                </p>

            </div>
        </div>
    );
};

export default ProfileComp;
