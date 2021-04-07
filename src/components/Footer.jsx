import React from 'react';
import { Formik } from 'formik';

import Button from './Button';
import '../css/footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <h3>Want to work with us?</h3>
            <Formik 
            initialValues={{ interest: '', email: '' }}
            onSubmit={(data) => console.log(data)}
            >
                {({values, handleChange, handleBlur}) => (
                    <form className="form">
                        <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.interest}
                        name="interest"
                        className="input-form"
                        placeholder="Interest like Web dev" />
                        <input 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        value={values.email}
                        name="email"
                        className="input-form"
                        placeholder="Email"
                        type="email" />
                        <Button styleButton="button-form">Submit</Button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Footer;