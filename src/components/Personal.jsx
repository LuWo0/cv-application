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
        <form>
            <input 
            type="text" 
            className="form-input px-4 py-3 rounded-full"
            name="firstName"
            placeholder="First Name"
            onChange={handleFirstName}
            value={values.firstName}
            />

            <input 
            type="text" 
            className="form-input"
            name="lastName"
            placeholder="Last Name"
            onChange={handleLastName}
            value={values.lastName}
            />

            <input 
            type="email" 
            className="form-input"
            name="email"
            placeholder="example@example.com"
            onChange={handleEmail}
            value={values.email}
            />

            <input 
            type="tel" 
            className="form-input"
            name="phone"
            placeholder="Phone:(555)-5555"
            onChange={handlePhone}
            value={values.phone}
            />
        </form>
    )
}

export default Personal;