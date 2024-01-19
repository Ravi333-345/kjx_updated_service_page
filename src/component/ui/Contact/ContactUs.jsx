import call from '../../../assets/contct/call.png'
import sms from '../../../assets/contct/sms.png'
import chat from '../../../assets/contct/chat.png'
import vector from '../../../assets/contct/Vector.png'
import question from '../../../assets/contct/question.png'

const ContactUs = () => {

    const handleCall = () => {

    }


    const handleEmail = () => {

    }

    const handleChat = () => {
        let url = `https://wa.me/9661087999`;
        window.open(url);
    }
    return ( 

        <div>
            <div className="bg-[url('https://i.ibb.co/48MgFp8/flower-bg-1.png')] bg-cover bg-center h-[800px] ">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-items-center">
                        <div className="group relative mx-auto items-center">
                            <img onClick={handleCall} src={call} alt='' className="cursor-pointer " />
                            <div className="mt-4 flex flex-col text-center">
                                <p className='text-[#292126]'>+91966108799</p>
                                <p><span className='text-[#006400]'>Mon-Fri</span> 10 am - 8 pm IST</p>

                            </div>
                        </div>
                        <div className="group relative mx-auto items-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/hrdepartment@kjxsofttech.com">
                                <img onClick={handleEmail} src={sms} alt='' className="cursor-pointer " />
                            </a>


                            <div className="mt-4 flex flex-col text-center">
                                <p className='text-[#292126]'><span className='text-[#006400]' >
                                    <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/hrdepartment@kjxsofttech.com">
                                        Click Here
                                    </a>
                                </span> to send</p>
                                <p className='text-[#292126]'>us an email</p>

                            </div>
                        </div>
                        <div className="group relative mx-auto items-center">
                            <img onClick={handleChat} src={chat} alt='' className="cursor-pointer " />
                            <div className="mt-4 flex flex-col text-center">
                                <p className='text-[#292126]'><span className='text-[#006400]'>Mon-Fri</span> 10 am - 8 pm IST</p>


                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className='bg-white p-20'>
                <div className="grid grid-cols-1 p-10 gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 justify-items-center  ">
                    <div className="ml-10 justify-center text-center justify-items-center ">
                        <img src={vector} alt='' />
                    </div>
                    <div className=" text-left sm:text-center">
                        <h5 className='text-[#08092B] mb-2 font-extrabold text-left sm:text-center'>ADDITIONAL CONTACTS</h5>
                        <p className='text-[#7B7B7B]'>For any queries Please reach out to our team members
                        </p>
                        <p className='text-[#7B7B7B]'>hrdepartment@kjxsofttech.com faisal.ahmad@kjxsofttech.com
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 p-10 gap-4  sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 justify-items-center ">
                    <div className="ml-10 justify-center text-center justify-items-center">
                        <img src={question} alt='' />
                    </div>
                    <div className=" text-left sm:text-center">
                        <h5 className='text-[#08092B] mb-2 font-extrabold text-left sm:text-center' >HELP TOPICS</h5>
                        <p className='text-[#7B7B7B]'>Home,portfolio,Career</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default ContactUs