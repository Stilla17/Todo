import React from 'react'
import { useLocation, useParams } from 'react-router'

const InfoMovies = () => {
    const { id } = useParams()
    const {state} = useLocation()

    return (
            <div className="flex bg-[#1a1a1a] text-white w-[100%] px-[20px] py-[20px] rounded-2xl shadow-xl gap-6 mx-auto">
              <div className="flex-1 space-y-4">
                <h1 className="text-[55px] font-bold">item.title</h1>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At provident aliquid laboriosam quaerat dignissimos sapiente ratione in consequatur, nobis iste numquam? Omnis tempore illo tenetur ab, id quod laborum explicabo facere, optio, excepturi voluptates! Optio eius obcaecati quasi quos, aspernatur provident voluptatem cum odio minus exercitationem laborum vitae id, pariatur nesciunt quas aut tenetur eaque et rem quis quaerat voluptatibus ipsum corrupti beatae! Consectetur deserunt neque fugiat odio qui! Vel illo quaerat repellat, voluptas dolores accusamus architecto temporibus. Voluptatem aliquid ad ipsum, vero dolorum repellendus minima accusamus maiores voluptatibus provident, culpa molestias quam aliquam dolor, error tempore at veritatis. Reiciendis dolorum harum consequuntur non mollitia tempora error, incidunt rem! Neque quisquam rem, nesciunt, voluptate optio, deserunt eaque delectus vel vero dolores debitis! Omnis quos, ut aperiam quas ipsam soluta vero! Earum velit laboriosam, eius tempora odio accusamus hic vero nam architecto non ipsam nihil et libero nesciunt quisquam numquam at? Sapiente quis tenetur sunt? Atque omnis officiis quibusdam, aliquid ipsa, exercitationem ratione quis maiores voluptates similique quam, fugiat soluta! Sed accusamus nihil deleniti sequi exercitationem unde tenetur quibusdam ratione, velit sapiente facere perspiciatis enim, nisi ullam atque officiis cumque eligendi optio porro iure! Illum numquam esse similique sequi laboriosam qui.
                  </p>
        
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1">
                    <span className="text-gray-400">Страны:</span>
                    <span>item.nimadir</span>
                  </div>
        
                  <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1 ">
                    <span className="text-gray-400">Оценки:</span>
                    <div className="flex items-center gap-3">
                      <span>nimadir </span>
                    </div>
                  </div>
        
                  <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1">
                    <span className="text-gray-400">Жанры:</span>
                    <div className="flex gap-2">
                      <span className="bg-gray-800 px-2 py-0.5 rounded">item.nimadir</span>
                    </div>
                  </div>
        
                  <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1">
                    <span className="text-gray-400">Языки:</span>
                    <span>item.nimadir</span>
                  </div>
        
                  <div className="flex justify-between h-[40px] items-center py-1 mb-[40px]">
                    <span className="text-gray-400">Длительность:</span>
                    <span>item.nimadir</span>
                  </div>
                </div>
        
                <div className="flex gap-4 mt-4">
                  <button
                    className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
                  >
                    Смотреть
                  </button>
                </div>
                <br />
              </div>
        
              <div className="w-full md:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_.jpg"
                  alt="Item.img"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
    )
}

export default InfoMovies