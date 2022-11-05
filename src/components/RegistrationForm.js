import React from 'react'
import registrationFormImg from '../images/registration-image.png'

export const RegistrationForm = () => {
    return (
        <>
            <h2 className='text-3xl sm:text-4xl font-bold text-center my-20'>Training & Placement - Registration Form</h2>
            <div className='container border  mx-auto w-[90%] md:h-[700px] flex flex-col md:flex-row   '>
                <div className='left md:w-1/3 pt-5 flex justify-center items-center '>
                    <img src={registrationFormImg} alt='registrationFormImg' />
                </div>
                <div className='right pt-5 md:w-2/3 md:overflow-y-scroll'>
                    <div className='section-1'>
                        <div className='pb-3 border-b-2 border-black'>
                            <h3 className='text-2xl font-semibold  '>Personal Details of Applicant</h3>
                        </div>
                        <div className='row-1 flex flex-col md:flex-row gap-3 my-5'>
                            <div className='first-name flex flex-col'>
                                <label className=' py-2'>First Name</label>
                                <input type='text' name='firstName' id='firstName' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='first-name flex flex-col'>
                                <label className=' py-2'>Middle Name</label>
                                <input type='text' name='firstName' id='firstName' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='last-name flex flex-col'>
                                <label className=' py-2'>Last Name</label>
                                <input type='text' name='lastName' id='lastName' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-2 flex flex-col md:flex-row gap-3 my-2'>
                            <div className='father-name flex flex-col'>
                                <label className=' py-2'>Father's Name</label>
                                <input type='text' name='fatherName' id='fatherName' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='mother-name flex flex-col'>
                                <label className=' py-2'>Mother's Name</label>
                                <input type='text' name='motherName' id='motherName' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='date-of-birth flex flex-col'>
                                <label className=' py-2'>Date of Birth</label>
                                <input type='date' name='dob' id='dob' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-3 flex flex-col md:flex-row gap-3 my-2'>
                            <div className='university-enroll-no flex flex-col'>
                                <label className=' py-2'>Enrollment Number</label>
                                <input type='text' name='enrollmentNumber' id='enrollmentNumber' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='mobile flex flex-col'>
                                <label className=' py-2'>Mobile</label>
                                <input type='text' name='mobile' id='mobile' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='mobile-parent flex flex-col'>
                                <label className=' py-2'>Parent's Mobile</label>
                                <input type='text' name='mobile-parent' id='mobileParent' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-4 flex flex-col md:flex-row gap-3 my-2'>
                            <div className='student-email flex flex-col'>
                                <label className=' py-2'>Email</label>
                                <input type='email' name='email' id='email' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='student-branch flex flex-col'>
                                <label className=' py-2'>Branch</label>
                                <input type='text' name='branch' id='branch' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='student-gender flex flex-col'>
                                <label className=' py-2'>Gender</label>
                                 <div className='flex gap-2 '>
                                    <div>
                                        <input type='radio' name='gender' className='border px-4 py-2  outline-blue-500 ' required />
                                        <label> Male</label>
                                    </div>
                                    <div>
                                        <input type='radio' name='gender' className='border px-4 py-2  outline-blue-500 ' required />
                                        <label> Female</label>
                                    </div>
                                    <div>

                                        <input type='radio' name='gender' className='border px-4 py-2  outline-blue-500 ' required />
                                        <label> Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-5 flex flex-col gap-4 my-2'>
                        <div className='student-current-address flex flex-col'>
                                <label className=' py-2'>Current Address</label>
                                <textarea rows={2} name='current-address' id='currentAddress' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        <div className='student-permanent-address flex flex-col'>
                                <label className=' py-2'>Permanent Address</label>
                                <textarea rows={2} name='permanent-address' id='permanentAddress' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                    </div>
                    <div className='section-2 my-14'>
                    <div className='pb-3 border-b-2 border-black'>
                            <h3 className='text-2xl font-semibold  '>Academic Details</h3>
                        </div>
                        <div className='row-1 flex  flex-col md:flex-row gap-3 my-5'>
                            <div className='10th flex flex-col'>
                                <label className=' py-2'>10th Percentage</label>
                                <input type='number' name='xthPercent' id='xthPercent' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='10th-year-of-passing flex flex-col'>
                                <label className=' py-2'>Year of Passing</label>
                                <input type='number' name='10th-year-of-passing' id='10th-year-of-passing' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='10th-board flex flex-col'>
                                <label className=' py-2'>10th Board</label>
                                <input type='text' name='10th-board' id='10th-board' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-2 flex  flex-col md:flex-row gap-3 my-5'>
                            <div className='12th flex flex-col'>
                                <label className=' py-2'>12th Percentage</label>
                                <input type='number' name='12thPercent' id='12thPercent' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='12th-year-of-passing flex flex-col'>
                                <label className=' py-2'>Year of Passing</label>
                                <input type='number' name='12th-year-of-passing' id='12th-year-of-passing' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='12th-board flex flex-col'>
                                <label className=' py-2'>12th Board</label>
                                <input type='text' name='12th-board' id='12th-board' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-3 flex  flex-col md:flex-row gap-3 my-5'>
                            <div className='UG flex flex-col'>
                                <label className=' py-2'>UG(%)</label>
                                <input type='number' name='UGPercent' id='UGPercent' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='UG-year-of-passing flex flex-col'>
                                <label className=' py-2'>Year of Passing</label>
                                <input type='number' name='UG-year-of-passing' id='UG-year-of-passing' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='12th-board flex flex-col'>
                                <label className=' py-2'>Board</label>
                                <input type='text' name='UG-board' id='UG-board' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                        <div className='row-4 flex  flex-col md:flex-row gap-3 my-5'>
                            <div className='current-backlog flex flex-col'>
                                <label className=' py-2'>Current backlog</label>
                                <input type='number' name='current-backlog' id='current-backlog' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='history-backlog flex flex-col'>
                                <label className=' py-2'>History backlog</label>
                                <input type='number' name='history-backlog' id='history-backlog' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                            <div className='internship-details flex flex-col'>
                                <label className=' py-2'>Internship Details (if any)</label>
                                <input type='text' name='internship-details' id='internship-details' className='border px-4 py-2  outline-blue-500 ' required />
                            </div>
                        </div>
                    </div>
                    <div className='section-3'>
                    <div className='pb-3 border-b-2 border-black'>
                            <h3 className='text-2xl font-semibold  '>Terms & Conditions</h3>
                        </div>
                        <div>
                            
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt tempore quae consequatur laborum, nulla quos dicta saepe adipisci culpa sint eum, similique veritatis voluptate, iure corrupti obcaecati ipsam facere eos nostrum consequuntur itaque ratione! Quis maxime commodi, ex laborum voluptas veritatis aspernatur aut blanditiis libero error, ut quia illum odit totam aliquam in, voluptate ad harum soluta obcaecati possimus culpa hic. Provident consectetur reiciendis aliquid dolorum, quasi minima alias tenetur temporibus, numquam doloribus adipisci maxime doloremque porro harum laudantium dignissimos quaerat magnam inventore voluptates voluptatum, quibusdam ipsam dicta libero. Ipsa consectetur accusamus possimus neque iusto. Inventore laboriosam magnam cumque.
<br /><br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt tempore quae consequatur laborum, nulla quos dicta saepe adipisci culpa sint eum, similique veritatis voluptate, iure corrupti obcaecati ipsam facere eos nostrum consequuntur itaque ratione! Quis maxime commodi, ex laborum voluptas veritatis aspernatur aut blanditiis libero error, ut quia illum odit totam aliquam in, voluptate ad harum soluta obcaecati possimus culpa hic. Provident consectetur reiciendis aliquid dolorum, quasi minima alias tenetur temporibus, numquam doloribus adipisci maxime doloremque porro harum laudantium dignissimos quaerat magnam inventore voluptates voluptatum, quibusdam ipsam dicta libero. Ipsa consectetur accusamus possimus neque iusto. Inventore laboriosam magnam cumque.
                        </div>
                        <div>
                            
                        <div className='student-gender flex flex-col mt-5'>
                                 <div className='flex gap-2 '>
                                    <div>
                                        <input type='radio' name='gender' className='border px-4 py-2  outline-blue-500 ' required />
                                        <label className='font-medium'> I here by accept all terms & conditions provided by my college.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-4 my-14 flex justify-center'>
                        <button className='p-4 py-2 border bg-purple-600 text-white font-semibold text-xl rounded-md focus-within:ring-4 focus-within:ring-purple-300 hover:bg-purple-700'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
