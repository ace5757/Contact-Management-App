// All contacts are visible here and edit and delete option is also available
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"
import React from "react";
const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-white  p-4  w-full ">
            <div className="m-4">
                <button className="rounded-lg shadow shadow-slate-700 font-bold bg-blue-600 p-3 text-2xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length === 0 && <div className=" m-auto w-fit p-4 align-middle text-black justify-center">

                    <img className="m-auto w-40" src={require("../utils/wrong.png")} alt=""/>
                

                <h1 className="text-3xl">No Contact Found<br/> Add new contact from Create Contact Button</h1>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-blue-500 rounded-md shadow-xl m-4 p-1 text-center text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <img className="w-full rounded-lg" src={require("../utils/contact.png")} alt="" />
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left text">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Mobile   : {el.mob}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-emerald-400 text-black">
                                        Update
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">
                                    Delete
                                </button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts