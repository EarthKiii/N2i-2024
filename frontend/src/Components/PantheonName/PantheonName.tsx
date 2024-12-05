import './PantheonName.css'

function convertDate(dateAdd: EpochTimeStamp) {
    let convertDate = new Date(dateAdd * 1000);
    return convertDate;
}

const CreditName = ({name, dateAdd}: {name: string, dateAdd: EpochTimeStamp}) => {
    return (
        <div 
            className="creditName"
        >
            <p>{name}</p>&nbsp;
            <p>{convertDate(dateAdd).toLocaleDateString()}</p>
        </div>
    )
}

export default CreditName;