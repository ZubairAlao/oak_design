import HousePic from "@/assets/images/about-us-first-row/house.png"
import FamilyPic from "@/assets/images/about-us-first-row/family.png"
import ApplicationPic from "@/assets/images/about-us-first-row/application.png"
import officePic from "@/assets/images/about-us-first-row/office.png"

import HomePic from "@/assets/images/about-us-second-row/home.png"
import HomeLawnPic from "@/assets/images/about-us-second-row/home-lawn.png"
import SkyScrappersPic from "@/assets/images/about-us-second-row/sky-scrappers.png"
import Trainpic from "@/assets/images/about-us-second-row/train.png"

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
        link: "/",
    },
    {
        label: "WHO WE ARE",
        link: "/about",
    },
    {
        label: "WHAT WE DO",
        link: "/services",
    }
]

export const aboutPicFirstRow = [HousePic, FamilyPic, officePic, ApplicationPic]
export const aboutPicSecondRow = [SkyScrappersPic, HomePic, HomeLawnPic, Trainpic]

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