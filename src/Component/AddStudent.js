import React from 'react';
import { BiCalendar } from 'react-icons/bi'
const AddStudent = () => {
    return (
        <div>
            <div class="h-screen w-min-screen px-6">
                <h1 className='py-4 font-mono font-bold text-red-600 text-xl'>Add Student</h1>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>Full Name</h1>
                    <input type="text" placeholder='Name' className='input input-bordered h-10' required />
                </div>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>Date of birth</h1>
                    <div className='flex justify-between items-center'>
                        <input type="date" className='input input-bordered h-10' required />
                        <BiCalendar className='text-4xl'></BiCalendar>
                    </div>
                </div>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>School</h1>
                    <select type="text" className='input input-bordered w-[190px] h-10' required>
                        <option>School</option>
                    </select>
                </div>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>Division</h1>
                    <select type="text" className='input input-bordered w-[190px] h-10' required>
                        <option disabled selected>Division</option>
                        <option>Science</option>
                        <option>General</option>
                        <option>Commerce</option>
                    </select>
                </div>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>Division</h1>
                    <select type="text" className='input input-bordered w-[190px] h-10' required>
                        <option disabled selected>Class</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className='flex justify-between items-center w-1/2'>
                    <h1 className='text-xl font-mono my-4'>Status</h1>
                    <div className='flex justify-around items-center'>
                        <input type="radio" name='age' placeholder='Name' className='input input-bordered h-10 mx-4' id='active' required />
                        <label form='active'>Active</label>
                        <input type="radio" name="age" placeholder='Name' className='input input-bordered h-10 mx-4' id='active' required />
                        <label form='active'>Invoice</label>
                    </div>
                </div>
                <div className='flex justify-center w-1/2 mt-4'>
                    <button className='btn btn-primary px-8 text-white'>Save</button>
                </div>
            </div>
        </div >
    );
};

export default AddStudent;