import { useState } from "react"

const Education = () => {
    const [values, setValues] = useState({
        schoolName: "",
        city: "",
        degree: "",
        from: "",
        to: "",
    });

    const handleSchoolName = (event) => {
        setValues({
            ...values, 
            schoolName: event.target.value
        });
    }

    const handleCity = (event) => {
        setValues({
            ...values, 
            city: event.target.value
        });
    }

    const handleDegree = (event) => {
        setValues({
            ...values, 
            degree: event.target.value
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
        <div className="w-full max-w-xs appearance-none ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="school-name" 
                    className="block text-gray-700 text-sm font-bold mb-2">
                        School Name
                    </label>
                    <input 
                    type="text" 
                    className="form-input"
                    name="school-name"
                    placeholder="South Harmon Institute of Technology"
                    onChange={handleSchoolName}
                    value={values.schoolName}
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
                    placeholder="New York"
                    onChange={handleCity}
                    value={values.city}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="degree" 
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Degree
                    </label>
                    <input 
                    type="text" 
                    className="form-input"
                    name="degree"
                    placeholder="High School Diploma"
                    onChange={handleDegree}
                    value={values.degree}
                    />
                </div>
                <div className="mb-4">
                    <label 
                    htmlFor="from"
                    className="block text-gray-700 text-sm font-bold mb-2">
                        Attended From
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
                        Attended Until
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
    );
}

export default Education;