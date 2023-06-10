import arrow from '../../../assets/images/arrow.png'
import './verified.css'
import mainimg from '../../../assets/images/verifiy-main-img.png'
import montraFinal from '../../../assets/images/montraFinal.png';
import applelogo from '../../../assets/images/applelogo.png';
import googleLogo from '../../../assets/images/googlePlay.png';
import bankingBusiness from '../../../assets/images/banking-business.svg';
import verified from '../../../assets/images/verified.png';

function Verified() {

    return (
        <div>
            {/* section 1 */}
            <div className='slant-green'>
                <div className="justify-between pad-section align-center">
                    <div>
                        <img src={verified} />
                    </div>
                    <section>
                        <ul>
                            <li className='black'>
                                {/* <img src={wallet} className="mr-2" /> */}
                                DTS
                            </li>
                            <li className='black'>
                                {/* <img src={bank} className="mr-2" /> */}
                                DCP
                            </li>
                            <li className='black'>
                                {/* <img src={donate} className="mr-2" /> */}
                                Duo App
                            </li>
                            <li className='black'>
                                {/* <img src={shield} className="mr-2" /> */}
                                DUO Web Portal
                            </li>
                            <li className='black'>
                                {/* <img src={gold} className="mr-2" /> */}
                                Customer Onboarding
                            </li>
                            <li className='black'>
                                {/* <img src={cart} className="mr-2" /> */}
                                Limit Management
                            </li>
                        </ul>
                    </section>

                    <section>
                        <button className="green-btn">
                            Montra Sign in
                        </button>
                    </section>
                </div>
                <div className='row z-index h-100'>
                    <div className='col-6 pl8 centerdiv flex-col1'>
                        <div className="text-head black">
                            Soft Token <br />
                            158 107
                        </div>
                        <div class="text-description py-3 black col-8 fw-500">
                            When you enable 2-Step Verification (also known as two-factor authentication), 
                            you add an extra layer of security to your account.
                        </div>
                        <button className="download-btn white w-40 ">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>
                    </div>
                    <div className='col-6 centerdiv align-center'>
                        <img src={mainimg} width={'100%'} />
                    </div>
                </div>
                <div className='slantDivGreen'>

                </div>
                <div className='p-relative' >
                    <img className="arrow1" src={arrow} />
                </div>
            </div>


            {/* section 2 */}
            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-head green align-center">Hyperverge face Verification solutions</div>
                        <div className="payment-description blue-dark fw-700 py-2">
                            HV Authentication
                        </div>
                        <div className='col-8'>
                            Auhenticate repeat users and transcations instantly.Deliver a better customer experience while preventing frauds
                        </div>

                        <button className='blue-btn mt-4'>Get a Demo</button>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>


            {/* section 3 */}
            <section class="pl8 mt-15 bg-lightgreen">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-head green align-center">Hyperverge Identity Verification solutions</div>
                        <div className="payment-description blue-dark fw-700 py-2">
                            Onboard Everyone  but not just anyone
                        </div>
                        <div className='col-8'>
                            Ensure customers are who they claim to be instantly,with our end-to end identity verification services across 195 countries                        </div>

                        <button className='blue-btn mt-4'>Get a free Demo</button>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <div className='slantDarkGreen bg-white pl8 pt-15 py-6 p-relative'>
                <section class="pl8 z-index">
                    <div className="row pt7">
                        <div className="col-6">
                            <div className="payment-head white align-center">Hyperverge Video kyc solutions</div>
                            <div className="payment-description white fw-700 py-2">
                                Hyper Verge video KYC
                            </div>
                            <div className='col-8'>
                                Onboard users remotely with very high confidence  over video with or without assistance from an agent, and stay compliant                       </div>

                            <button className='blue-btn mt-4'>Get a free Demo</button>
                        </div>
                        <div className="col-6">
                            <img src={bankingBusiness} className="ml-2" />
                        </div>
                    </div>
                </section>

                <div className='slantdivDarkgreen'>
                </div>
            </div>
        </div>
    )
}

export default Verified