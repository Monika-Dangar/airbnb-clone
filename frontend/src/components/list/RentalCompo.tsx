import { wishlistHeader } from '../../data'
import RentalList from './RentalList'

const RentalCompo = () => {
    return (
        <>
            {wishlistHeader.map((header) =>
                <div key={header.id} className='flex justify-center mt-4'>
                    <div className='w-11/12'>
                        <p className="text-2xl font-bold w-2xl mb-2 cursor-pointer">{header.title} &rarr;</p>
                        <RentalList />
                    </div>
                </div>
            )}
        </>
    )
}

export default RentalCompo