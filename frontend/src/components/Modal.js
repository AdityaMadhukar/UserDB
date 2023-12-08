import React,{useState} from 'react'

const Modal = (props) => {
    const [inpval, setInpval] = useState({
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        domain:"",
        available:"",
        avatar:""
    });
    const setdata = (e) => {
        const { name, value } = e.target;
        setInpval((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const handleAdd = async (e) => {
        
        console.log(inpval);
        const {first_name, last_name, email, gender, domain, available, avatar} = inpval;
        const res= await fetch("/create", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                first_name, last_name, email, gender, domain, available, avatar
            })
        })
        const data = res;
        console.log(data);
        if(res.status ==404 || !data){
            alert(data)
        }
        else{
            alert("User Added");
        }
    }
    return (
        <div>
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="backdrop-blur flex overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Add New User
                            </h3>
                            <button type="button" onClick={() => { props.setModal(false) }} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="first_name" value={inpval.first_name} onChange={(e)=>{setdata(e)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="John" required="" />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="last_name" value={inpval.last_name} onChange={(e)=>{setdata(e)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" required="" />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" value={inpval.email} onChange={(e)=>{setdata(e)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="johndoe@gmail.com" required="" />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <select name='gender' onChange={(e)=>{setdata(e)}} value={inpval.gender} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select Gender</option>
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
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domain</label>
                                    <select name='domain' onChange={(e)=>{setdata(e)}} value={inpval.domain} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select Domain</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Availibility</label>
                                    <select name='available' onChange={(e)=>{setdata(e)}} value={inpval.available} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select Availibility</option>
                                        <option value={true}>Available</option>
                                        <option value={false}>Unavailable</option>
                                    </select>
                                </div>
                                <div class="col-span-2">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar Url</label>
                                    <textarea id="description" name='avatar' value={inpval.avatar} onChange={(e)=>{setdata(e)}} rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://robohash.org/dolorumvelitquam.png?size=50x50&set=set1"></textarea>
                                </div>
                            </div>
                            <button onClick={(e)=>{handleAdd(e)}} class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal