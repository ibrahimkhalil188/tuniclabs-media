import React from 'react';
import { BsChevronDown } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom';
const Students = () => {
    return (
        <div className='w-min-screen p-12 '>
            <div class="drawer drawer-mobile shadow-slate-600 shadow-2xl">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side -z-0 border-r-2 border-black">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <span className='ml-4 flex justify-between'>Student<BsChevronDown></BsChevronDown></span>
                        <li><Link to="viewStudent">View students</Link></li>
                        <li><Link to="addStudent">Add students</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Students;