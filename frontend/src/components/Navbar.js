import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

                <h1 class="w-3/12 text-xl font-bold">
                    USER DB
                </h1>


                <nav class="nav font-semibold text-lg">
                    <ul class="flex items-center">
                        <li class="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer active">
                            <a href="#" >Team</a>
                        </li>
                        <li class="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer">
                            <a href="#" onClick={()=>{props.setModal(true)}}>AddUser</a>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar