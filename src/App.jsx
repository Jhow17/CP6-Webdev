import { Icon } from "@iconify/react";
import Board from "./Board";

function App() {

  return (
    <>
    <div className="h-100vh bg-gradient-to-r from-[#6BD1B3] to-[#06B481]
 flex items-center justify-center flex-col gap-4 text-white">
      <div className="bg-black/20 flex justify-center gap-2 bg-gray-200 m-1 p-2 rounded">
        <Icon icon="game-icons:card-random" className="text-2xl" />
        <div className="ml-2 text-3xl font-bold">
          Jogo da Memória
        </div>
      </div>
      <Board />

    </div>
      
    </>
  )
}

export default App
