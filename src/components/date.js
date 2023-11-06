import moment from "moment/moment";
export default function Date({ dateString }) {
    const parsedDate = moment(dateString).format("YYYY-MM-DD hh:mm A");
    return <time dateTime={dateString}> {parsedDate}</time>;
}


