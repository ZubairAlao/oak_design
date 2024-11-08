import HousePic from "@/assets/images/about-us-first-row/house.jpg"
import FamilyPic from "@/assets/images/about-us-first-row/family.jpg"
import ApplicationPic from "@/assets/images/about-us-first-row/application.jpg"
import officePic from "@/assets/images/about-us-first-row/office.jpg"
import HousePicOptimized from "@/assets/images/about-us-first-row/house-optimized.webp"
import FamilyPicOptimized from "@/assets/images/about-us-first-row/family-optimized.webp"
import ApplicationPicOptimized from "@/assets/images/about-us-first-row/application-optimized.webp"
import officePicOptimized from "@/assets/images/about-us-first-row/office-optimized.webp"

import HomePic from "@/assets/images/about-us-second-row/home.jpg"
import HomeLawnPic from "@/assets/images/about-us-second-row/home-lawn.jpg"
import SkyScrappersPic from "@/assets/images/about-us-second-row/sky-scrappers.jpg"
import Trainpic from "@/assets/images/about-us-second-row/train.jpg"
import HomePicOptimized from "@/assets/images/about-us-second-row/home-optimized.webp"
import HomeLawnPicOptimized from "@/assets/images/about-us-second-row/home-lawn-optimized.webp"
import SkyScrappersPicOptimized from "@/assets/images/about-us-second-row/sky-scrappers-optimized.webp"
import TrainpicOptimized from "@/assets/images/about-us-second-row/train-optimized.webp"

import SmartWatchSVG from "@/assets/images/capital-list/smartwatch.svg"
import FinanceMarketingSVG from "@/assets/images/capital-list/finance-marketing.svg"
import HealthMedicalSVG from "@/assets/images/capital-list/health-medical.svg"
import AgricultureSVG from "@/assets/images/capital-list/agriculture.svg"

import PhoneIcon from "@/assets/images/phone-icon.svg"
import LocationIcon from "@/assets/images/location-icon.svg"
import EmailIcon from "@/assets/images/email.svg"

import GoldenPhoneIcon from "@/assets/images/golden-phone.svg"
import GoldenLocationIcon from "@/assets/images/golden-location.svg"
import GoldenEmailIcon from "@/assets/images/golden-email.svg"


export const navHeaders = [
    {
        label: "HOME",
        link: "home",
    },
    {
        label: "WHO WE ARE",
        link: "oakHolding",
    },
    {
        label: "WHAT WE DO",
        link: "oakHome",
    }
]

export const aboutPicFirstRow = [
    {image: HousePic, optimizedImage: HousePicOptimized},
    {image: FamilyPic, optimizedImage: FamilyPicOptimized}, 
    {image: officePic, optimizedImage: officePicOptimized},
    {image: ApplicationPic, optimizedImage: ApplicationPicOptimized},
]
export const aboutPicSecondRow = [
    {image: SkyScrappersPic, optimizedImage: SkyScrappersPicOptimized},
    {image: HomePic, optimizedImage: HomePicOptimized},
    {image: HomeLawnPic, optimizedImage: HomeLawnPicOptimized},
    {image: Trainpic, optimizedImage: TrainpicOptimized},
]

export const OakCapitalList = [
    {
        image: SmartWatchSVG,
        label:"Technological innovations"
    },
    {
        image: FinanceMarketingSVG,
        label:"Financial inclusion"
    },
    {
        image: HealthMedicalSVG,
        label:"Healthcare services"
    },
    {
        image: AgricultureSVG,
        label:"Agriculture"
    },
]

export const contactInfo = [
    {
        image: LocationIcon,
        label:"4, Ribadu street, Ikoyi Lagos, Nigeria."
    },
    {
        image: EmailIcon,
        label:"support@theoakholdings.com"
    },
    {
        image: PhoneIcon,
        label:"+234 909 000 0015"
    },
]

export const goldenContactInfo = [
    {
        image: GoldenLocationIcon,
        label:"4, Ribadu street, Ikoyi Lagos, Nigeria."
    },
    {
        image: GoldenEmailIcon,
        label:"support@theoakholdings.com"
    },
    {
        image: GoldenPhoneIcon,
        label:"+234 909 000 0015"
    },
]