import { Icon } from '@iconify/react/dist/iconify.js';


export default function Card({ id, imgid, isOpen, onClick }) {

    function click() {
        onClick({ id, imgid, isOpen })
    }

    return (
        <>
            <div className="relative m-1 w-26 h-26 cursor-pointer">
                {
                    isOpen ?
                        <div onClick={click} className="top-0 border rounded bg-gray-300">
                            <img src={`https://cdn.nba.com/headshots/nba/latest/260x190/${imgid}.png`} className="rounded w-26 h-26" alt="" />
                        </div>
                        :
                        <div onClick={click} className="absolute flex items-center justify-center top-0 w-full h-full border rounded bg-gray-300">
                            <Icon icon="game-icons:card-random" className="text-3xl text-gray-500" />
                        </div>
                }
            </div>
        </>
    )
}