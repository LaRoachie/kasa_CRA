import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { Banner } from "../../components/Banner";
import { Cards } from "../../components/Cards";
import { Location } from "../../_models/location";
import Bkg from "../../assets/home_bkg.png";

import './style.scss';

export function HomePage() {
	const logements: Location[] = useLoaderData() as Location[]
	return (
		<div className="home-page">
			<Banner src={Bkg} title='Chez vous, partout et ailleurs' />
			<div className="location-container">
				{logements.map(logement => <Link key={logement.id} to={`/location/${logement.id}`}><Cards location={logement} /></Link>)}
			</div>
		</div>
	)
};

export async function loader() {
	return (
		await import("../../assets/logements.json")
	).default
}