import "./CharCard.css"

function CharCard (props) {

    return(
        <div className = "divBodyPerson">
            {props.listed.map(item => (
                <div className = "divPerson">
                    {item.status === "Dead" ? (
                        <div className = "personDaed">
                            {item.name}
                            <img src={item.image} className = "image"/>   
                        </div>
                    ):(
                        <div>
                            {item.name}
                            <img src={item.image} className = "image"/>    
                        </div>
                    )}
                </div>
            ))}
        </div>
    )

}

export default CharCard;

