import React from 'react'
import { Input } from '../ui/input'
import { Button } from "../ui/button"

const index = ({ isOpen, isClose }) => {
    return (
        <>
            {isOpen && (
                <div className='absolute bg-gray-500 h-64 w-98 rounded-md p-2'>
                    <p className='text-center'> Create wishlist</p>
                    <Input />
                    <div className='flex justify-between bottom-2'>
                        <button>Cancel</button>
                        <Button variant="outline">Create</Button>                    </div>
                </div>
            )}
        </>
    )
}

export default index