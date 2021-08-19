import Button from "../elements/button"
import { useState } from "react"
import { fetchAPI } from "utils/api"
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { MdMailOutline, MdBusiness, MdCall } from "react-icons/md"

const ContactForm = ({ data }) => {
  const [loading, setLoading] = useState(false)

  const LeadSchema = yup.object().shape({
    name: yup.string().required("Name is invalid").min(2),
    phone: yup.number().required("Phone is invalid"),
    email: yup.string().email().required("Email is invalid"),
  })

  return (
    <div className="container justify-between flex flex-col lg:flex-row lg:flex-wrap my-20">
      <div className="w-full md:w-1/2">
        <div className="p-2">
          <p className="text-4xl font-semibold">Contact Our Team of Digital Experts today</p>
          <p className="py-4">If you need advices One Pixel Media is happy to help!</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 rounded flex">
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            message: "",
          }}
          validationSchema={LeadSchema}
          onSubmit={async (values, { setStatus, setSubmitting, setErrors, resetForm }) => {
            setLoading(true)
            resetForm(true)
            setStatus({
              sent: true,
              msg: "Successed! We will reach back to you soon.",
            })

            try {
              setErrors({ api: null })
              await fetchAPI("/contact-requests", {
                method: "POST",
                body: JSON.stringify({
                  name: values.name,
                  phone: values.phone,
                  email: values.email,
                  message: values.message,
                }),
              })
            } catch (err) {
              setErrors({ api: err.message })
            }

            setLoading(false)
            setSubmitting(false)
          }}
        >
          {({ status, isSubmitting }) => (
            <div>
              <Form className="w-full max-w-lg">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-dark text-sm text-left font-bold mt-3 mb-2">{data.namePlaceholder}</label>
                    <Field
                      className="appearance-none block w-full text-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 h-12 text-sm mt-1" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-dark text-sm text-left font-bold mt-3 mb-2">{data.phonePlaceholder}</label>
                    <Field
                      className="appearance-none block w-full text-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="numberic"
                      name="phone"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 h-12 text-sm mt-1" />
                  </div>
                  <div className="w-full px-3">
                    <label className="block tracking-wide text-dark text-sm text-left font-bold mt-3 mb-2">{data.emailPlaceholder}</label>
                    <Field
                      className="appearance-none block w-full text-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 h-12 text-sm mt-1" />
                  </div>
                  <div className="w-full px-3">
                    <label className="block tracking-wide text-dark text-sm text-left font-bold mt-3 mb-2">{data.message}</label>
                    <Field
                      className="appearance-none block w-full text-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="message"
                      as="textarea"
                    />
                  </div>
                  <div className="w-full md:w-1/3 mt-5 ml-3 md:mb-0">
                    <Button type="submit" appearance="dark" button={data.submitButton} disabled={isSubmitting} loading={loading} />
                  </div>
                  <div className="w-full px-3">{status && status.msg && <p className="bg-green-100 text-green-500 border-l-3 border-green-500 p-3 rounded-r-md mt-5">{status.msg}</p>}</div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ContactForm
