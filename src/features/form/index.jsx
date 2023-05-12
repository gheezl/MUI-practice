import { Box, useMediaQuery, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { useState } from "react";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [phoneRegExp] = useState(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/);
    const [initialValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: ""
    });
    const [userSchema] = useState(yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup
            .string()
            .email("invalid email")
            .required("required"),
        contact: yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required")
    }));

    const handleFormSubmit = values => {
        console.log(values)
    }

    return (
        <Box margin="20px">
            <Header title="CREATE USER" subtitle="Create a new user profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {
                    ({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleFormSubmit} >
                            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": {gridcolumn: isNonMobile ? null : "span"}}} >
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="First Name" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.firstName} 
                                    name="firstName"
                                    error={!!touched.firstName && !!errors.firstName} 
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}    
                                />
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="Last Name" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.lastName} 
                                    name="lastName"
                                    error={!!touched.lastName && !!errors.lastName} 
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="Email" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.email} 
                                    name="email"
                                    error={!!touched.email && !!errors.email} 
                                    helperText={touched.email && errors.email}
                                    // gridcolumn="span 4"
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="Contact Number" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.contactNumber} 
                                    name="contactNumber"
                                    error={!!touched.contactNumber && !!errors.contactNumber} 
                                    helperText={touched.contactNumber && errors.contactNumber}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="Address 1" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.address1} 
                                    name="address1"
                                    error={!!touched.address1 && !!errors.address1} 
                                    helperText={touched.address1 && errors.address1}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    fullWidth 
                                    variant="filled" 
                                    type="text" 
                                    label="Address 2" 
                                    onBlur={handleBlur} 
                                    onChange={handleChange} 
                                    value={values.address2} 
                                    name="firstName"
                                    error={!!touched.address2 && !!errors.address2} 
                                    helperText={touched.address2 && errors.address2}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                            </Box>
                            <Box display="flex" justifyContent="end" marginTop="20px" >
                                <Button type="submit" color="secondary" variant="contained" >Create New User</Button>
                            </Box>
                        </form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default Form;