const ExplainationPopup = ({title, text, onClose}: {title: string, text: string, onClose: Function}) => {
    return <div className="absolute h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-10">
        <div className="bg-white rounded-2xl p-4 flex flex-col h-96 w-96">
            <h2 className="text-blue-600 text-2xl font-bold">{title}</h2>
            <p className="my-3">{text}</p>
            <div className="bg-blue-600 text-white rounded-full py-2 mt-auto text-center" onClick={() => {onClose()}}>OK</div>
        </div>
    </div>
}

export default ExplainationPopup;