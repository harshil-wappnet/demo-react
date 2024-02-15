import { useFormik } from "formik";
import * as yup from "yup";
// import { BasicSchema } from "./VSchema"
const Form2 = () => {
    // const BasicSchema = yup.object().shape({
    //     email: yup.string().email("Enter valid Email").required("Required"),
    //     age: yup.number().required("Required")
    // });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            age: "",
        },
        validationSchema: yup.object({
            name: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            age: yup.number().positive().integer('Age must be a positive integer').required('Required'),
            startDate: yup.date().required().max(new Date(), 'Date must be before or equal to today'),
            endDate: yup.date()
                .required("Required")
                .min(yup.ref('startDate'), "End date can't be before start date"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    // console.log(formik);
    return (
        <>
            <h1>Formik Forms</h1>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}<br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}<br />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.touched.age && formik.errors.age ? (
                    <div>{formik.errors.age}</div>
                ) : null}<br />
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    id="startDate"
                    value={formik.values.startDate}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.touched.startDate && formik.errors.startDate ? (
                    <div>Not valid Date</div>
                ) : null}<br />
                <label htmlFor="endDate">End Date</label>
                <input
                    type="date"
                    id="endDate"
                    value={formik.values.endDate}
                    min={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.touched.endDate && formik.errors.endDate ? (
                    <div>{formik.errors.endDate}</div>
                ) : null}<br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form2;