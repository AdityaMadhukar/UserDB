import React, { useState, useEffect } from 'react'
import Card from './Card'

const Dashboard = () => {
    const [userData, setUserData] = useState();
    const [pageno, setPageno] = useState(1);
    const [query, setQuery] = useState("");
    const [filterVal, setFilterVal] = useState({
        gender:"All",
        domain:"All",
        available:"All",
    });
    const setdata = (e) => {
        const { name, value } = e.target;
        setFilterVal((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const getdata = async () => {
        // console.log(query, filterVal);
        const res = await fetch(`/getdata?q=${query}&g=${filterVal.gender}&a=${filterVal.available}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json(JSON.stringify(res));
        console.log(data);
        if (res.status == 404 || !data) {
            console.log("error")
        }
        else {
            console.log("data fetched");
            setUserData(data);
        }
    }

    useEffect(() => {
        getdata(pageno);
    },[query])

    return (
        <div>
            <div className='flex justify-between m-5 ml-20 mr-20'>
                <form class="w-1/2 flex flex-col md:flex-row gap-3">
                    <div class="flex">
                        <input type="text" placeholder="Search"
                            class=" md:w-80 px-3 h-10 rounded-l border-2 border-gray-800 focus:outline-none focus:border-gray-800"
                            onChange={(e)=>{setQuery(e.target.value)}}
                        />
                        <button class="bg-gray-800 text-white rounded-r px-2 md:px-3 py-0 md:py-1" onClick={() => { }}>Search</button>
                    </div>

                </form>
                {/* <select name="domain" value={filterVal.domain} onChange={(e)=>{setdata(e)}}
                    class=" h-10 border-2 border-gray-800 focus:outline-none focus:border-gray-800 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">Domain</option>
                    <option value="Domain">Domain</option>
                    <option value="Gender">Gender</option>
                    <option value="Availibilty">Availibilty</option>
                </select> */}
                <select name="gender" value={filterVal.gender} onChange={(e)=>{setdata(e)}}
                    class=" h-10 border-2 border-gray-800 focus:outline-none focus:border-gray-800 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">Gender</option>
                    <option value="Abinary">Abinary</option>
                    <option value="Agender">Agender</option>
                    {/* <option value="Ambigender">Ambigender</option> */}
                    <option value="Androgyne">Androgyne</option>
                    {/* <option value="Aporagender">Aporagender</option> */}
                    {/* <option value="Autigender">Autigender</option> */}
                    {/* <option value="Bakla">Bakla</option> */}
                    <option value="Bigender">Bigender</option>
                    <option value="Binary">Binary</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Omnigender">Omnigender</option>
                    <option value="Pangender">Pangender</option>
                    <option value="Polygender">Polygender</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Trigender">Trigender</option>
                </select>
                <select name="available" value={filterVal.available} onChange={(e)=>{setdata(e)}}
                    class=" h-10 border-2 border-gray-800 focus:outline-none focus:border-gray-800 text-gray-800 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" selected="">Availability</option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
                <button onClick={()=>{getdata()}} class="bg-gray-800 h-10 text-white rounded px-2 md:px-3 py-0 md:py-1">Filter</button>
            </div>



            <nav>
                <ul class="flex justify-center items-center -space-x-px h-10 text-base">
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => { if (pageno > 1) setPageno(pageno - 1) }}>
                            <span class="sr-only">Previous</span>
                            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>{if(pageno>2)setPageno(pageno-2);if(pageno==2)setPageno(1)}}>{pageno}</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>{if(pageno>1)setPageno(pageno-1)}}>{pageno +1}</a>
                    </li> */}
                    <li>
                        <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" >{pageno}</a>
                    </li>
                    {/* <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>{setPageno(pageno+1)}}>{pageno +3}</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>{setPageno(pageno+2)}}>{pageno +4}</a>
                    </li> */}
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => { if (pageno < userData?.length-1) setPageno(pageno + 1) }}>
                            <span class="sr-only">Next</span>
                            <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="m-5">
                <div class="grid grid-cols-4 gap-5">
                    {userData && userData[pageno-1]?.map((item, key) => {
                        return (
                            <div class="..."><Card item={item} /></div>
                        )
                    })}
                </div></div>


        </div>
    )
}

export default Dashboard