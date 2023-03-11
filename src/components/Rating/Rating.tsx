import FullStar from "../../assets/fullStar.svg";
import EmptyStar from "../../assets/emptyStar.svg";

import "./style.scss";

interface RatingProps {
    score: any
}

export function Rating({ score }: RatingProps) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rate-comp">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src={FullStar}
                        alt="rating star"
                    />) : (
                    <img
                        key={level.toString()}
                        className="star"
                        src={EmptyStar}
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}