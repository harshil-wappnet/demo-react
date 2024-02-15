import * as yup from "yup";
export const BasicSchema = () => {
    yup.object().shape({
        email: yup.string().required("Required"),
        age: yup.number().positive().integer().required("Required")
    });
}

