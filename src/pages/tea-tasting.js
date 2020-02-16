import React from "react"
import Layout from '../components/Layout';

import { 
  Formik, 
  Form, 
  Field,
  ErrorMessage
} from 'formik'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default () => (
	<Layout>
  <Formik
    initialValues={{
      userName: '',
    }}
    onSubmit={
	  (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-demo", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }
  }
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if(!values.userName) {
        errors.userName = 'Your Name Required'
      }
      if(!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required'
      }
      if(!values.teaName) {
        errors.teaName = 'Tea Name Required'
      }
      return errors;
    }}
  >

  {() => (
		<Form className="tansparent" name="tea-tasting" data-netlify={true}>

	      <h1> Personal Info </h1>

	      <label htmlFor="userName">Your Name: </label>
	      <Field name="userName" />
	      <ErrorMessage name="userName" />

	      <label htmlFor="email">Email: </label>
	      <Field name="email" />
	      <ErrorMessage name="email" />

	      <h1> Tea Info </h1>

	      <label htmlFor="teaName">Tea Name: </label>
	      <Field name="teaName"/>
	      <ErrorMessage name="teaName" />

	      <label htmlFor="Type">Type: </label>
	      <Field name="Type" />
	      <ErrorMessage name="Type" />

	      <label htmlFor="Origin">Origin: </label>
	      <Field name="Origin" />
	      <ErrorMessage name="Origin" />
	      
	      <label htmlFor="Company">Company: </label>
	      <Field name="Company" />
	      <ErrorMessage name="Company" />
	      
	      <label htmlFor="Price">Price: </label>
	      <Field name="Price" />
	      <ErrorMessage name="Price" />
	      
	      <label htmlFor="Details">Details of Harvest, Production, and Storage: </label>
	      <Field name="Details" component="textarea"/>
	      <ErrorMessage name="Details" />
	      
	      <label htmlFor="Description">Description: </label>
	      <Field name="Description" component="textarea" />
	      <ErrorMessage name="Description" />
	      
	      <h1> ABFabs </h1>

	      <label htmlFor="numAroma">Aroma 1-10: </label>
	      <Field name="numAroma" type="number" />
	      <ErrorMessage name="numAroma" />
	      
	      <label htmlFor="tagAroma">Aroma Notes: </label>
	      <Field name="tagAroma" component="textarea" />
	      <ErrorMessage name="tagAroma" />
	      
	      <label htmlFor="numBody">Body 1-10: </label>
	      <Field name="numBody" type="number" />
	      <ErrorMessage name="numBody" />
	      
	      <label htmlFor="tagBody">Body Notes: </label>
	      <Field name="tagBody" component="textarea" />
	      <ErrorMessage name="tagBody" />
	      
	      <label htmlFor="numFlavor">Flavor 1-10: </label>
	      <Field name="numFlavor" type="number" />
	      <ErrorMessage name="numFlavor" />
	      
	      <label htmlFor="tagFlavor">Flavor Notes: </label>
	      <Field name="tagFlavor" component="textarea" />
	      <ErrorMessage name="tagFlavor" />
	      
	      <label htmlFor="num">Astringency 1-10: </label>
	      <Field name="num"  type="number" />
	      <ErrorMessage name="num" />
	      
	      <label htmlFor="tagAstringency">Astringent Notes: </label>
	      <Field name="tagAstringency" component="textarea" />
	      <ErrorMessage name="tagAstringency" />

	      <label htmlFor="numBitterness">Bitterness 1-10: </label>
	      <Field name="numBitterness" type="number" />
	      <ErrorMessage name="numBitterness" />
	      
	      <label htmlFor="tagBitterness">Bitter Notes: </label>
	      <Field name="tagBitterness" component="textarea" />
	      <ErrorMessage name="tagBitterness" />
	      
	      <label htmlFor="numSweetness">Sweetness 1-10: </label>
	      <Field name="numSweetness" type="number" />
	      <ErrorMessage name="numSweetness" />
	      
	      <label htmlFor="tagSweetness">Sweet Notes: </label>
	      <Field name="tagSweetness" component="textarea" />
	      <ErrorMessage name="tagSweetness" />
	   	      	   	      
	      <h1> Notes </h1>


	      <label htmlFor="FIX">General Notes: </label>
	      <Field name="FIX" component="textarea"/>
	      <ErrorMessage name="FIX" />
	   	      
	      <label htmlFor="FIX">Notes to Novices: </label>
	      <Field name="FIX" component="textarea" />
	      <ErrorMessage name="FIX" />
	   	      
	      <label htmlFor="FIX">Questions for Experts: </label>
	      <Field name="FIX" component="textarea" />
	      <ErrorMessage name="FIX" />
	   	      
<br />

	      <button type="submit">Send</button>
	    </Form>
  )}
  </Formik>
  </Layout>
)
