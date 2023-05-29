import './pricing.css'
import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import pricingMain from '../../../assets/images/pricing-main.png';
import ladyimg from '../../../assets/images/lady-image.svg';
import AccountOpening from '../../../assets/images/icons/AccountOpening.svg'
import { NavLink } from 'react-router-dom'

function Pricing() {
    return (
        <div className="">
            <div className='slant'>
                <div className="justify-between pad-section align-center">
                    <section>
                        <div className="tabs">
                            <span className="active">
                                <NavLink to="/">
                                Personal
                                </NavLink>
                            </span>
                            <span className="pl-2">
                                <NavLink to="/business ">
                                    Business
                                </NavLink>
                            </span>
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <img src={wallet} alt="" className="mr-2" />
                                Payment
                            </li>
                            <li>
                                <img src={bank} alt="" className="mr-2" />
                                Banking
                            </li>
                            <li>
                                <img src={donate} alt="" className="mr-2" />
                                Lending
                            </li>
                            <li>
                                <img src={shield} alt="" className="mr-2" />
                                Insurance
                            </li>
                            <li>
                                <img src={gold} alt="" className="mr-2" />
                                Investment
                            </li>
                            <li>
                                <img src={cart} alt="" className="mr-2" />
                                Shopping
                            </li>
                        </ul>
                    </section>

                    <section>
                        <button className="theme-btn">
                            Montra Sign in
                        </button>
                    </section>
                </div>
                <div className='row z-index h-100'>
                    <div className='col-6 pl8 centerdiv flex-col1'>
                        <div className='fw-700 font-50'>Get Paid Instantly <br /> With Payment Links</div>
                        <div className='my-4'>
                            Sell online without a website or mobile app. Create a payment link in easy steps & share the link with your customers no coding required.
                        </div>
                        <section>
                            <div className='align-center'>
                                <div className='number-circle'>
                                    1
                                </div>
                                <div className='fw-600 ml-3'>Sign-in on your Montra app / merchant portal</div>
                            </div>
                            <div className='border-dashed'>
                                New users can Download Montra app to sign-up for Montra Business account. If you are a registered user, sign-in on your Montra app or Montra Merchant Portal
                            </div>
                            <div className='align-center'>
                                <div className='number-circle'>
                                    2
                                </div>
                                <div className='fw-600 ml-3'>Create a Payment Link</div>
                            </div>
                            <div className='border-dashed'>
                                Create a Payment Link to offer the product or service you are selling
                            </div>

                            <div className='align-center'>
                                <div className='number-circle'>
                                    3
                                </div>
                                <div className='fw-600 ml-3'>Share Payment Link and get paid</div>
                            </div>
                            <div className='border-dashed'>
                                Share the Payment Link through SMS, Email, WhatsApp etc. with the customer to make payment
                            </div>
                        </section>
                    </div>
                    <div className='col-6 centerdiv align-center'>
                        <img src={pricingMain} width={'88%'} alt="" />
                    </div>
                </div>
                <div className='slantdiv'>

                </div>
                <div className='p-relative' >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>

            <section className='mt20 mb-5'>
                <div className='row align-center'>
                    <div className='col-8'>
                        <div className='blue-head centerdiv col-7 mb-5'>Why Montra Payment Gateway</div>
                        <div className='row centerdiv'>
                            <div className="col-5">
                                <img src={AccountOpening} alt="" className="mb-3" />
                                <div className="text-left-border">Accept All payment Modes</div>
                                <div className="mt-3 col-8">
                                    With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay
                                    with Montra and net banking with most of the banks, Montra provides the most extensive
                                    set of payment methods                                </div>
                            </div>

                            <div className="col-5">
                                <img src={AccountOpening} alt="" className="mb-3" />
                                <div className="text-left-border">Checkout & Global Card Saving</div>
                                <div className="mt-3 col-8">
                                    An easy to integrate Checkout with cards saved across businesses so that
                                    your customers can pay seamlessly everywhere.
                                </div>
                            </div>

                            <div className="col-5 mt-4">
                                <img src={AccountOpening} alt="" className="mb-3" />
                                <div className="text-left-border">Powerful Dashboard</div>
                                <div className="mt-3 col-8">
                                    Get reports and detailed statistics on payments, settlements,refunds
                                    and much more for you to take better business decisions                                </div>
                            </div>

                            <div className="col-5 mt-4">
                                <img src={AccountOpening} alt="" className="mb-3" />
                                <div className="text-left-border">Built for Developers</div>
                                <div className="mt-3 col-8">
                                    Robust, clean,developer friendly APls, plugins and libraries for all majorlanguages and
                                    platforms that let you focus on building great products
                                </div>
                            </div>

                            <div className="col-10 mt-4">
                                <img src={AccountOpening} alt="" className="mb-3" />
                                <div className="text-left-border">Robust Security</div>
                                <div className="mt-3 col-5">
                                    PCI DSS Levellcompliant along with frequent third­ party audits anda dedicated internal
                                    security team to make sure your data is always safe
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={ladyimg} alt='' />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Pricing;
