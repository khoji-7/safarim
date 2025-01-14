import React from "react";
import {FaPersonWalkingLuggage} from "react-icons/fa6";
import {FaRegStar} from "react-icons/fa";

const ListOfGuides = () => {
    return (
        <div className="max-w-md mx-auto w-[95%] ">
            <div className="h-[30vh] bg-gradient-to-br from-green-200 via-lime-300 to-green-400 flex flex-col items-center justify-center rounded-3xl">
                    <div className="text-center">
                        <h1 className="text-black text-lg font-medium">Hey, Salimbek!</h1>
                        <h2 className="text-black text-2xl font-bold mt-2">Ready to explore</h2>
                        <h1 className="text-2xl font-semibold">List of Guides</h1>
            <div className="flex gap-3">
                <div className="bg-white max-w-36  drop-shadow-lg py-4 px-3 rounded-xl flex justify-between">
                    <div>
                        <p className="text-sm font-medium ">Alexander</p>
                        <p className="flex gap-1 text-[8px] items-center">
                            <FaPersonWalkingLuggage />
                            3643 visited
                        </p>
                        <p className="text-[8px] flex gap-1 items-center text-orange-500 font-semibold">
                            <FaRegStar />
                            5.0 (722)
                        </p>
                    </div>
                    <img
                    src="https://s3-alpha-sig.figma.com/img/bd96/89c9/99bf51911b8fb96771c3462efa79a4c7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cSLJU9RhB25LncjIa~wO3Mi0FG5J3H33hjdA23pwMG8r1Bkjo92QgU5cZMcIWeZxNe2gOKKZ6d6UKh6f-aFAE29OqM28AmPLMUcorHfLbCPTNPDsAUoQk2pgKtRgpqtZQiPXe5viy7lsnMIRD9oWDoK7EKg0YdzwUynpowP2vsStFbMqUmi2tnVv6yfY9jtVaJKmivEcpfTnpcG0D3SGhf4xJhzMrIO49lKR0E0~PWxLPFHRydnfmWGuyzbtzKIvkN~mfJpOFg5~Wy7a~ZGM4aplYuihmyrwuAIaJeQ1zkaYUD8onBUNZgbQfwE94C6xm954gOEA8wL0balvyQgugw__"
                    alt=""
                    className="rounded-full w-11 h-11 "
                />
                </div>
                <div className="bg-white max-w-36  drop-shadow-lg py-4 px-3 rounded-xl flex justify-between">
                    <div>
                        <p className="text-sm font-medium ">Alexander</p>
                        <p className="flex gap-1 text-[8px] items-center">
                            <FaPersonWalkingLuggage />
                            3643 visited
                        </p>
                        <p className="text-[8px] flex gap-1 items-center text-orange-500 font-semibold">
                            <FaRegStar />
                            5.0 (722)
                        </p>
                    </div>
                    <img
                    src="https://s3-alpha-sig.figma.com/img/bd96/89c9/99bf51911b8fb96771c3462efa79a4c7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cSLJU9RhB25LncjIa~wO3Mi0FG5J3H33hjdA23pwMG8r1Bkjo92QgU5cZMcIWeZxNe2gOKKZ6d6UKh6f-aFAE29OqM28AmPLMUcorHfLbCPTNPDsAUoQk2pgKtRgpqtZQiPXe5viy7lsnMIRD9oWDoK7EKg0YdzwUynpowP2vsStFbMqUmi2tnVv6yfY9jtVaJKmivEcpfTnpcG0D3SGhf4xJhzMrIO49lKR0E0~PWxLPFHRydnfmWGuyzbtzKIvkN~mfJpOFg5~Wy7a~ZGM4aplYuihmyrwuAIaJeQ1zkaYUD8onBUNZgbQfwE94C6xm954gOEA8wL0balvyQgugw__"
                    alt=""
                    className="rounded-full w-11 h-11 "
                />
                </div>
                
                
                
            </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ListOfGuides;
