import { Link } from "react-router-dom";
import styles from "../event-list/EventList.module.css";

export default function EventList({
    _id,
    imageUrl,
    title,
    location,
    date
}) {
    return (
        <div className="flex max-w-xl flex-col items-start justify-between">
            <img className={styles.imageEventList} src={imageUrl} alt="Image race" />
            <dt className="flex max-w-xl flex-col items-start justify-between text-2xl font-semibold text-gray-900 sm:text-4xl">{title}</dt>
            <dd className="text-base leading-7 text-gray-600">Location: {location}</dd>
            <dd className="text-base leading-7 text-gray-600">Date: {date}</dd>
            <Link to={`/events/${_id}`}
                className="flex-none rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
            >
                Details
            </Link>
        </div>
    );
}