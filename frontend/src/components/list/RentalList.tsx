import { useState } from 'react'
import { wishlistItem } from '../../data/index'
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Modal from '../modal/index'
const RentalList = () => {
    const [favorites, setFavorites] = useState<number[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const toggleFavorite = (id: number) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );

        setModalOpen((prev) => !prev)
    };


    return (
        <>
            <div className={`relative ${modalOpen ? 'opacity-20' : ""} flex justify-center`}>
                {wishlistItem.map((item) => (
                    <div
                        key={item.id}
                        className="p-2 cursor-pointer"
                    >
                        <div className='relative border rounded-lg shadow-md overflow-hidden text-white bg-white'>
                            {/* Top badge and heart icon */}
                            <div className='absolute top-2 left-2 right-2 flex items-center justify-between z-10 cursor-pointer'>
                                <p className='rounded-full bg-white font-bold text-black px-3 py-1 text-sm'>
                                    Guest favourite
                                </p>
                                <button onClick={() => toggleFavorite(item.id)} className="cursor-pointer">
                                    {favorites.includes(item.id) ? (
                                        <FaHeart className="fill-pink-400 h-6 w-6 mr-2" />
                                    ) : (
                                        <FaRegHeart className="text-white fill-gray-200 h-6 w-6 mr-2" />
                                    )}
                                </button>
                            </div>

                            {/* Image */}
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="h-48 w-52 object-cover"
                            />
                        </div>

                        <div className="p-1">
                            <p className="text-sm font-semibold">{item.name}</p>
                            <p className="text-sm flex items-center text-gray-600 font-medium">₹{item.pricePerNight} for {item.availableNights} nights <FaStar className='ml-1 text-gray-600' /> {item.rating}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-pink-300 flex justify-center items-center'>
                <Modal isOpen={modalOpen} isClose={modalOpen} />
            </div>
        </>
    )
}

export default RentalList