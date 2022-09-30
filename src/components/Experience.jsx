import { useState } from "react"

 const Experience = () => {
    
    const [values, setValues] =  useState({
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
    });
    
    const handlePosition = (event) => {
        setValues({
            ...values,
            position: event.target.value
        });
    }
    
    const handleCompany = (event) => {
        setValues({
            ...values,
            company: event.target.value
        });
    }

    const handleCity = (event) => {
        setValues({
            ...values,
            city: event.target.value
        });
    }

    const handleFrom = (event) => {
        setValues({
            ...values,
            from: event.target.value
        });
    }

    const handleTo = (event) => {
        setValues({
            ...values,
            to: event.target.value
        });
    }

    return (
        <>
        <div className="w-full max-w-md appearance-none pt-20 ">
            <form className="bg-neutral-50 shadow-md rounded pl-28 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="position" 
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Position
                    </label>
                    <input 
                    type="text" 
                    className="form-input"
                    name="position"
                    placeholder="Software Engineer"
                    onChange={handlePosition}
                    value={values.position}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="company" 
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Company
                    </label>
                    <input 
                    type="text" 
                    className="form-input"
                    name="company"
                    placeholder="Google"
                    onChange={handleCompany}
                    value={values.company}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="city" 
                    className="block text-gray-700 text-sm font-bold mb-2">
                        City
                    </label>
                    <input 
                    type="text" 
                    className="form-input"
                    name="city"
                    placeholder="San Francisco"
                    onChange={handleCity}
                    value={values.city}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="from"
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Worked From
                    </label>
                    <input 
                    type="date" 
                    className="form-input"
                    name="from"
                    
                    onChange={handleFrom}
                    value={values.from}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="to"
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Worked Until
                    </label>
                    <input 
                    type="date" 
                    className="form-input"
                    name="to"
                    
                    onChange={handleTo}
                    value={values.to}
                    />
                </div>
            </form>
        </div>
    </>
    )
 }

 export default Experience;