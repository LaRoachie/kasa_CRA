import React from "react";
import { useLoaderData } from "react-router-dom";

import { Banner } from "../../components/Banner";
import { Collapse } from "../../components/Collapse";
import { About } from "../../_models/about";
import Bkg from "../../assets/about_bkg.png"

import "./style.scss"

export function AboutPage() {
    const abouts: About[] = useLoaderData() as About[]
    return (
        <div className="about-page">
            <Banner src={Bkg} title="" />

            {abouts.map(about => (
                <Collapse key={about.title} title={about.title}>{about.content}</Collapse>
            ))}

        </div>
    )
}

export async function loader() {
    return (
        await import("../../assets/about.json")
    ).default
}