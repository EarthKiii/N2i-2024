import './PantheonName.css'

function convertDate(dateAdd: EpochTimeStamp) {
    let convertDate = new Date(dateAdd * 1000);
    return convertDate;
}

const PantheonName = ({name, dateAdd}: {name: string, dateAdd: Date}) => {
    return (
        <div 
            className="creditName"
        >
            <p>{name}</p>&nbsp;
            <p>{dateAdd.toDateString()}</p>
        </div>
    )
}

export default PantheonName;