import "./Win.css"
import WinRange from "../../Components/WinRange/WinRange";

function postName()
{
    let name=document.getElementById("name")?.textContent;
    if(name!=null)
    {
        const headers = new Headers();
        headers.set('Content-type', 'application/json'),
        headers.set('Accept', 'application/json');

        const request: RequestInfo= new Request('http://localhost:3000/sherlock/pantheon',{
            method: 'POST',
            headers: headers,
            body: JSON.stringify({playerName: name})
        });

        return fetch(request);
    }
}

function showName()
{
    let name="";
    for(let i=0;i<10;i++)
    {
        let char=document.getElementById("value"+i)?.textContent;
        name+=String.fromCharCode(Number(char)%26+65);
    }
    let newDiv = document.getElementById("name");
    if(newDiv != null)
    {
        newDiv.textContent=name;
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

function addLetter(letterNumber: number)
{
    return <WinRange letterNumber={letterNumber} random={getRandomInt(26)}/>;
}

const Win = () => {
    let letter=0;
  return (
    <div>
        <div className="win" id="win">
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter++)}
            {addLetter(letter)}
            <button onClick={(() => showName())}>Montrer le nom</button>
            <div id="name"></div>
            <button onClick={() => postName()}>Entrer au <b>PANTHEON</b></button>
        </div>
    </div>

  )
};

export default Win;