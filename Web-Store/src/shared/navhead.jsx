import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function navhead() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="top-menu">
                        <div className="header-menu">
                            <div className="address-header">
                                <IoLocationOutline />
                                4/1 M.2 Bangkok Thailand
                            </div>

                            <div className="email-header">
                                <MdOutlineEmail />
                                deashokloysai@gmail.com
                            </div>
                        </div>

                        <div className="icon-header">
                            <div className="icon-social">
                                <IoLogoFacebook />
                                <FaInstagram />
                                <FaYoutube />
                                <FaSquareXTwitter />
                            </div>
                        </div>
                    </div>

                </div>
            </header>

        </>
    )
}
