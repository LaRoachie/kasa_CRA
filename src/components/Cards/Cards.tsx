import { Location } from '../../_models/location';

import './style.scss';

interface CardsProps {
    location: Location
}

export function Cards({ location }: CardsProps) {
    return (
        <div className="thumb">
            <h2 className="thumb_title">{location.title}</h2>
            <div className="thumb_overlay"></div>
            <img className="thumb_cover" src={location.cover} alt=""/>
        </div>
    );
};