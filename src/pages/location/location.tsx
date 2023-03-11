import { useLoaderData } from "react-router-dom";

import { Carousel } from "../../components/Carousel";
import { Collapse } from "../../components/Collapse";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Location } from "../../_models/location";

import "./style.scss";

export function LocationPage() {
	const logement: Location = useLoaderData() as Location
	return (
		<div className="location-page">
			<Carousel pictures={logement.pictures} />

			<div className="location_infos">
				<div className="location_infos_left">
					<h1 className="location_infos_left_title">{logement.title}</h1>
					<h2 className="location_infos_left_location">{logement.location}</h2>
					<Tag />
				</div>

				<div className="location_infos_right">
					<div className="location_infos_right_host">
						<p className="location_infos_right_name">{logement.host.name}</p>
						<img src={logement.host.picture} alt="" className="location_infos_right_picture" />
					</div>
					<div className="location_infos_right_rating">
						<div className="rate-container">
							<Rating score={logement.rating} />
						</div>
					</div>
				</div>
			</div>

			<div className="location_details">
				<Collapse title="Description"> <p>{logement.description}</p></Collapse>
				<Collapse title="Equipements"> {logement.equipments.map(equipment => (<p key={equipment}>{equipment}</p>))}</Collapse>
			</div>
		</div>
	)
};

export async function loader({ params }: any) {
	const logementId = params.logementId as string
	const logements: Location[] = (
		await import("../../assets/logements.json")
	).default as Location[]
	return logements.find(logement => logementId === logement.id)
}