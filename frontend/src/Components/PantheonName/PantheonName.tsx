import './PantheonName.css'

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