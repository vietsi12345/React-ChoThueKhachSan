import React from 'react';
import { DatePicked, SearchItem, SearchOfPeople } from '../../components';
import icons from '../../ultils/icon';
import Provice from './Provice';

const { CiSearch, IoPeopleOutline, LuCalendarSearch } = icons

const Search = () => {
    return (
        <div className='w-full relative'>
            <img src='https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png'
                alt="logo"
                className='w-full h-[320px] object-cover'
            // style={{ zIndex: -1 }} // Đặt z-index của hình ảnh là -1 để nó đè dưới phần tử khác
            />

            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-2xl font-bold">RONG CHƠI BỐN PHƯƠNG, GIÁ VẪN "YÊU THƯƠNG"</h1>
                <p className="text-lg">Tìm kiếm và đặt phòng khách sạn dễ dàng</p>
            </div>

            <div className='bg-gray-200 flex flex-col gap-10 absolute top-[50%] left-[18%] w-1020 shadow-xl rounded-3xl py-5 px-10'>
                <div className='bg-white flex gap-3 h-[60px] rounded-lg items-center px-3 cursor-pointer'>
                    <CiSearch size='30' />
                    <span className='text-xl'>Đà nẵng</span>
                </div>
                <div className='w-full h-full flex justify-around gap-8 pb-10' >
                    <div className='w-[476.8px] '>
                        <DatePicked />
                    </div>
                    <div className='w-1/2'>
                        <SearchOfPeople />
                    </div>
                </div>
            </div>
            <button className='bg-blue-500 shadow-md rounded-lg hover:bg-blue-300 absolute top-[125%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 w-[490px] h-[64px]'>
                <span className='text-white text-2xl font-semibold'>TÌM</span>
            </button>

        </div>
    );
}

export default Search;
