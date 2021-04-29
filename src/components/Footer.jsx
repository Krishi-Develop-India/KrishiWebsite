import React from 'react';
import { Formik, useFormik } from 'formik';

import Button from './Button';
import '../css/footer.css'

function Footer(props) {
    const formik = useFormik({
        initialValues: {
            interest: '',
            message: '',
        },
        onSubmit: values => {
            console.log(values)
            window.location.href = `https://wa.me/+916394233643?text=${values.interest}%0D%0A%0D%0A${values.message}`;
        }
    });
    return (
        <div className="footer">
            <h3>Want to work with us?</h3>
            <form className="form" onSubmit={formik.handleSubmit}>
                <input 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.interest}
                    name="interest"
                    className="input-form"
                    placeholder="Interest like Web dev" />
                <input 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    name="message"
                    className="input-form"
                    placeholder="Message"/>
                <Button styleButton="button-form" simple type="submit">Submit</Button>
            </form>
        </div>
    );
}

export default Footer;