import { useState } from "react";

const DateDuJour = () => {

    const [date, setDate] = useState(new Date());

    const montrerDate = date.toLocaleDateString("fr-BE", { 
        day: "numeric" ,
        month: "long",
        year: "numeric"
    })
    return (
        <p>{montrerDate}</p>
    )
}
export default DateDuJour;