import { Typography, IconButton } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { 
    GiAbstract020 as ChallengeIcon, 
    GiNextButton as NextIcon, 
    GiPreviousButton as PrevIcon,
} from "react-icons/gi"
import { PiTarget as TargetIcon, PiFire as StreakIcon } from 'react-icons/pi'
import { MdOutlineRedeem as RedeemIcon } from 'react-icons/md'

/* Carousel display for Rewards Section */

export function FeaturedRew(){
    return(
        <div className="flex flex-col items-center justify-center h-full">
            <Typography variant="h4" className="!font-main !font-normal ">
                    How to Earn Rewards?
                </Typography>
            <Carousel 
                className="rounded-xl h-full"
                autoplay={true}
                autoplayDelay={4500}
                loop={true}
                transition={ { 
                    type: "tween",
                    duration: 1.5} }
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer 
                            rounded-2xl transition-all content-[''] 
                            ${activeIndex === i ? "w-8 bg-dark-green" : "w-4 bg-dark-green/50"}`}
                            onClick={() => setActiveIndex(i)}
                        />
                        ))}
                    </div>
                    )}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4"
                    >
                        <PrevIcon className="text-emerald h-6 w-6" />
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                            <NextIcon className="text-emerald h-6 w-6" />
                    </IconButton>
                )}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Typography variant="h3" className="!font-main !font-normal text-emerald">
                        Complete Daily Challenges!
                    </Typography>
                    <ChallengeIcon className="h-10 w-10 text-purple-400" />
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Typography variant="h3" className="!font-main !font-normal text-emerald">
                        Hit Your Daily and Monthly Targets!
                    </Typography>
                    <TargetIcon className="h-10 w-10 text-teal-400" />
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Typography variant="h3" className="!font-main !font-normal text-emerald">
                        Buy Exciting Rewards Using Collected Points!
                    </Typography>
                    <RedeemIcon className="h-10 w-10 text-orange-400" />
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <Typography variant="h3" className="!font-main !font-normal text-emerald">
                        Maintain Streaks To Get Additional Rewards!
                    </Typography>
                    <StreakIcon className="h-10 w-10 text-red-400" />
                </div>
            </Carousel>
        </div>
    )
}