import React from 'react';
import "./tableStyle.css"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
const ViewStudent = () => {
    return (
        <div>

            <div class="h-screen w-min-screen px-6 overflow-x-auto">
                <h1 className='py-4 font-mono font-bold text-red-600 text-xl'>View Student</h1>
                <div className='flex mb-4'>
                    <input type="text" placeholder="Name" class="input input-bordered w-28 h-10 mx-2" />
                    <input type="text" placeholder="Age" class="input input-bordered w-28 h-10 mx-2" />
                    <select type="text" placeholder="School" class="input input-bordered w-28 h-10 mx-2">
                        <option>School</option>
                        <option>Dhaka college</option>
                    </select>
                    <select type="text" placeholder="School" class="input input-bordered w-28 h-10 mx-2">
                        <option>Class</option>
                        <option>Dhaka college</option>
                    </select>
                    <select type="text" placeholder="School" class="input input-bordered w-28 h-10 mx-2">
                        <option>Division</option>
                        <option>Dhaka college</option>
                    </select>
                    <button class="bg-[#021f5b] rounded-md text-white w-28 h-10 mx-2">Search</button>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID'V</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>School</th>
                            <th>Class</th>
                            <th>Division</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td className='text-blue-600 underline cursor-pointer'>Edit</td>
                        <td className='text-blue-600 underline cursor-pointer'>Delete</td>

                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
                <div className='flex justify-between'>
                    <button className='btn mt-6 btn-primary'>Download Excel</button>
                    <div className='flex justify-center items-center text-xl'>
                        <button><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
                        <div className='text-white text-lg'>
                            <span className='border-1 px-1 m-1 bg-[#021f5b]'>1</span>
                            <span className='border-1 px-1 m-1 bg-[#021f5b]'>2</span>
                            <span className='border-1 px-1 m-1 bg-[#021f5b]'>3</span>
                        </div>
                        <button><MdKeyboardArrowRight></MdKeyboardArrowRight></button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ViewStudent;