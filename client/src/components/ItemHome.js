import React from 'react'
import icons from '../ultils/icon'
import { Link } from 'react-router-dom'
import { formatVietNameseToSring } from '../ultils/common/formatVietNameseToSring'
import { formatMonneyVietNam } from '../ultils/common/formatMonneyVietNam'

const { IoLocation } = icons

const ItemHome = ({ city, name, price, image, id }) => {
    return (
        <Link
            to={`/chi-tiet/${formatVietNameseToSring(name)}/${id}`}
            className='flex flex-col gap-1.5 cursor-pointer'
        >
            <img src={`data:image/png;base64,${image}`}
                className='w-[245px] h-[200px] object-contain'
            />
            <span className='font-semibold'>{name}</span>
            <div className='flex items-center'>
                <IoLocation className="text-blue-400" />
                <span className='text-blue-400 text-sm'>{city}</span>
            </div>
            <span className='text-sm text-gray-600'>Giá mỗi đêm chưa gồm thuế và phí</span>
            <span className='text-red-600 font-medium'>{formatMonneyVietNam(price)} </span>
        </Link>
    )
}

export default ItemHome
