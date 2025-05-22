import { useRef, useEffect, useState } from "react";
import Card from "./Card";

export default function Board() {
    const [ cards, setCards ] = useState([])
    const [viradas, setViradas] = useState([])
    const [bloqueado, setBloqueado] = useState(false);
    const[tents, setTent] = useState(0)
    const[certas, setCertas] = useState(0)


    function buildCards() {
        let vetCards = []
        const validIds = [
    2544, 201939, 203081, 1629029, 203999, 1629027, 1626164,
    1629627, 203954, 1628369, 1629028, 893, 760, 1911, 201567,
    201935, 203507, 1628983, 203468, 1628374, 1627759, 1629630,
    1630178
];

        let i = 0
        while (i < 16) {
            let imgid = parseInt(Math.random() * validIds.length)
            const found = vetCards.find((carta) => carta.imgid === validIds[imgid])
            console.log(vetCards)
            if (!found){
                vetCards.push({ id: i, imgid: validIds[imgid], isOpen: true })
                vetCards.push({ id: i+1, imgid: validIds[imgid], isOpen: true })
                i += 2
            }
            
        }
        
        setCards(vetCards)
        setTimeout(() => {
            console.log("passou 3 segundos");            
            for(let i in vetCards) {
                vetCards[i].isOpen = false
            }
            setCards([...vetCards])
        },3000)
    }

    useEffect(() => {
        buildCards()
    },[])

    useEffect(() => {
        if (viradas.length === 2){
            
            setBloqueado(true)
            const [primeiro, segundo] = viradas
        
        if(primeiro.imgid === segundo.imgid){
            setCertas(certas + 1)
            setViradas([])
            setBloqueado(false)
        }else{
            setTimeout(()=>{
                const novoCards = cards.map((card) => {
                    if(card.id === primeiro.id || card.id === segundo.id ){
                        return {...card, isOpen : false}

                    }
                    return card
                })
                setCards(novoCards)
                setViradas([])
                setBloqueado(false)
                
            },1000)
        }
        setTent(tents + 1)
    
    }



    }, [viradas])
    
    function onClick(elem) {
        if (certas > 7){
            alert(`Parabéns\n Você terminou o jogo da Memória em:\n Tentativas ${tents}`)
        }
        console.log(certas)
        if(bloqueado || cards[elem.id].isOpen || viradas.length >= 2){
            return
        }
        const newCards = [...cards]

        newCards[elem.id] = {...newCards[elem.id], isOpen : !newCards[elem.id].isOpen}
        setCards(newCards)
        setViradas((viradas) => [...viradas,elem
        ])


 
        
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
                        
                        cards.sort(() => Math.random() - 0.5).map((e, idx) => <Card imgid={e.imgid} id={e.id} key={idx} isOpen={e.isOpen} onClick={onClick} />)
                    }
                </div>
            </div>
        </>
    )
}