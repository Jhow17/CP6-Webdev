import { useRef, useEffect, useState } from "react";
import Card from "./Card";

export default function Board() {
    const [ cards, setCards ] = useState([])
    const[tents, setTent] = useState(0)
    let lastCard = null

    function buildCards() {
        let vetCards = []
        
        for(let i=0; i< 16; i=i+2) {
            let imgid = parseInt(Math.random()*100)
            
            vetCards.push({ id: i, imgid, isOpen: true })
            vetCards.push({ id: i+1, imgid, isOpen: true })
            
        }
        setCards(vetCards)
        setTimeout(() => {
            console.log("passou 7 segundos");            
            for(let i in vetCards) {
                vetCards[i].isOpen = false
            }
            setCards([...vetCards])
        },7000)
    }

    useEffect(() => {
        buildCards()
    },[])
    
    function onClick(elem) {
        const abertos = cards.filter((card) => card.isOpen )
        if (abertos.length <= 1){
            console.log("onClick",elem);
            cards[elem.id].isOpen = !cards[elem.id].isOpen
            setCards([...cards])
        }
        else{
            const newCards = cards.map((card) => ({ ...card, isOpen: false }));
            setCards(newCards);
            setTent(tents + 1)
        }
        
    }

    return (
        <>
            <div className="bg-black/75 m-2 rounded-[2vw] p-10">
                <div className="mb-8">
                    <span className="ml-2 text-3xl font-bold">Tentativas:</span>
                    <span className="ml-2 text-2xl font-bold">
                            {tents}
                    </span>
                </div>
            
                <div className="grid grid-cols-4 gap-1 w-120">
                    {
                        cards.map((e, idx) => <Card imgid={e.imgid} id={e.id} key={idx} isOpen={e.isOpen} onClick={onClick} />)
                    }
                </div>
            </div>
        </>
    )
}