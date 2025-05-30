"use client";
import React from 'react';
import Marquee from "react-fast-marquee";

function Brandscroll() {
    return (
        <Marquee autoFill={true} speed={20}>
            <div className="flex gap-8">
                <img src="/images/acc.png" alt="Tata Steel" className="h-16 w-auto" />
                <img src="/images/adani.png" alt="Malabar TMT" className="h-16 w-auto" />
                <img src="/images/ambuja.png" alt="Apollo" className="h-16 w-auto" />
                <img src="/images/apollo.png" alt="Everlast Sheets" className="h-16 w-auto" />
                <img src="/images/dalmia.png" alt="Ramco Cements" className="h-16 w-auto" />
                <img src="/images/everlast.png" alt="Adani Cements" className="h-16 w-auto" />
                <img src="/images/malabar.png" alt="Dr Fixit" className="h-16 w-auto" />
                <img src="/images/ramco.png" alt="Aquastar" className="h-16 w-auto" />
                <img src="/images/tata.png" alt="Tata Steel" className="h-24 w-auto" />
                <img src="/images/ultratech.png" alt="Malabar TMT" className="h-16 w-auto" />
                
            </div>
        </Marquee>
    )
}

export default Brandscroll
