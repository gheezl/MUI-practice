import { Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [phoneRegExp, setPhoneRegExp] = useState(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/);
    const [initialValues, setInitialValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: ""
    });
    const [userSchema, setUserSchema] = useState(yup.object().shape({
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
                        <form onSubmit={handleSubmit} >
                            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": {gridcolumn: isNonMobile ? undefind : "span"}}} ></Box>
                        </form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default Form;