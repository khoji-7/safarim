import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdDiscount } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";




const Recomended = () => {
    return (
        <div className="max-w-md mx-auto w-[94%] mb-3">
            <h1 className="flex justify-between text-2xl font-semibold items-center">
                Recomended
                <span className="text-sm font-normal">show all</span>
            </h1>
            <div className="flex flex-col gap-3">
                <div className="py-3 px-5 border-2 border-gray-400 rounded-2xl flex">
                    <div className="w-20 h-20 mb-2">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/aefb/2b39/556719e43e62edf058b04a00bd46f49e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDh64wfM8F87ocNIRZFOZOVAQQPBHh6SM3hg6tPhVJyVl9CzjgpK-zhJ~40Yyx5DTXRfp71cpdiTR8c1KUURDgniNBJ~w8nvRJNU19yeiXrrFvnrNcU9fk7t46eZQM~mussIE42btx0vkYn7Mc2ET4pT4ufuUBchJdGEDs2q-qUHH9-5coou05yFM1Xpc4pzW8o373oF9ESuFwhrYnz6unsEnYtnzz-A9nYCpE1Z5Rj5S4WzwH4P6qqt7QpgC5CZMZmKPVj3gjuU9o~tT0SqKlItVMufi4cFyKQHVm5oaoxz6ul-GyVGxeiE8TluEgdSAnq1iqXX6GbKBeYeedRUzw__"
                            alt=""
                            className="w-[72px] h-[72px] rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-md font-semibold">
                        Samarkand One day Tour
                        </p>
                        <div className="text-sm text-orange-500 flex items-center font-bold gap-2 mb-2">
                            <FaRegStar/> <p> 5.0  (722)</p>
                        </div>
                        <div className="text-sm text-gray-400 font-bold flex  items-center gap-2">
                            <CiLocationOn/> 
                            <p>
                            Samarkand, Uzbekistan                            </p>
                            <p className="text-black flex flex-row ml-2 items-end">
                                $450 <span className="text-[9px] text-gray-400 ">/night</span>
                            </p>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="bg-[#EDFEF9] text-sm text-[#009684] px-2 py-1 flex items-center gap-2 w-fit rounded-md">
                                <MdDiscount/> <p className="text-[8px] font-semibold">
                                Book now pay later
                                </p>
                            </div>
                            <div className="bg-[#EEF4FF] text-[#0060F8] text-sm w-fit rounded-md flex gap-2 items-center px-2 py-1">
                                <RiDiscountPercentLine/> <p className=" text-[8px] font-semibold">
                                35% discount
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="py-3 px-5 border-2 border-gray-400 rounded-2xl flex">
                    <div className="w-20 h-20 mb-2">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/aefb/2b39/556719e43e62edf058b04a00bd46f49e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDh64wfM8F87ocNIRZFOZOVAQQPBHh6SM3hg6tPhVJyVl9CzjgpK-zhJ~40Yyx5DTXRfp71cpdiTR8c1KUURDgniNBJ~w8nvRJNU19yeiXrrFvnrNcU9fk7t46eZQM~mussIE42btx0vkYn7Mc2ET4pT4ufuUBchJdGEDs2q-qUHH9-5coou05yFM1Xpc4pzW8o373oF9ESuFwhrYnz6unsEnYtnzz-A9nYCpE1Z5Rj5S4WzwH4P6qqt7QpgC5CZMZmKPVj3gjuU9o~tT0SqKlItVMufi4cFyKQHVm5oaoxz6ul-GyVGxeiE8TluEgdSAnq1iqXX6GbKBeYeedRUzw__"
                            alt=""
                            className="w-[72px] h-[72px] rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-md font-semibold">
                        Samarkand One day Tour
                        </p>
                        <div className="text-sm text-orange-500 flex items-center font-bold gap-2 mb-2">
                            <FaRegStar/> <p> 5.0  (722)</p>
                        </div>
                        <div className="text-sm text-gray-400 font-bold flex  items-center gap-2">
                            <CiLocationOn/> 
                            <p>
                            Samarkand, Uzbekistan                            </p>
                            <p className="text-black flex flex-row ml-2 items-end">
                                $450 <span className="text-[9px] text-gray-400 ">/night</span>
                            </p>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="bg-[#EDFEF9] text-sm text-[#009684] px-2 py-1 flex items-center gap-2 w-fit rounded-md">
                                <MdDiscount/> <p className="text-[8px] font-semibold">
                                Book now pay later
                                </p>
                            </div>
                            <div className="bg-[#EEF4FF] text-[#0060F8] text-sm w-fit rounded-md flex gap-2 items-center px-2 py-1">
                                <RiDiscountPercentLine/> <p className=" text-[8px] font-semibold">
                                35% discount
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recomended;
