import { useState } from "react";
import "../index.css";


const Personal = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleFirstName = (event) => {
        setValues({
            ...values,
            firstName: event.target.value,
        });
    }

    const handleLastName = (event) => {
        setValues({
            ...values,
            lastName: event.target.value,
        });
    }
    
    const handleEmail = (event) => {
        setValues({
            ...values,
            email: event.target.value,
        });
    }

    const handlePhone = (event) => {
        setValues({
            ...values,
            phone: event.target.value,
        })
    }
    return (
        <>
            <div className="w-full max-w-md appearance-none ">
                <form className=" bg-neutral-50 shadow-md rounded pl-28 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="firstName" 
                        className="block text-gray-700 text-sm font-bold mb-2">
                            First Name
                        </label>
                        <input 
                        type="text" 
                        className="form-input"
                        name="firstName"
                        placeholder="Avanna"
                        onChange={handleFirstName}
                        value={values.firstName}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                        htmlFor="lastName" 
                        className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input 
                        type="text" 
                        className="form-input"
                        name="lastName"
                        placeholder="Sukacokov"
                        onChange={handleLastName}
                        value={values.lastName}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                        htmlFor="email" 
                        className="block text-gray-700 text-sm font-bold mb-2">
                            E-mail
                        </label>
                        <input 
                        type="email" 
                        className="form-input"
                        name="email"
                        placeholder="example@example.com"
                        onChange={handleEmail}
                        value={values.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                        htmlFor="phone"
                        className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input 
                        type="tel" 
                        className="form-input"
                        name="phone"
                        placeholder="(555)-555-5555"
                        onChange={handlePhone}
                        value={values.phone}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Personal;