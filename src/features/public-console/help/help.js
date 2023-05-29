import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import { NavLink } from 'react-router-dom'
import './help.css';
import arrow from '../../../assets/images/arrow.png'
import search from '../../../assets/images/search.png';
import phone from '../../../assets/images/phone.png'
function Help() {
    return (
        <div>
            <section className="bg-img-help p-relative">
                {/* page-header-2 */}
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

                <section className='centerdiv help'>
                    <div className='fw-700 font-34 white'>
                        We are here to help you
                    </div>
                    <div className='p-relative'>
                        <img src={search} className='search-img' alt="" />
                        <input type="text" placeholder='Ask a questions' className='my-4 form-control' />
                        <button className='search-btn'>Search</button>
                    </div>
                    <div className='font-30 white'>*We are collect your searching keywords to improve our FAQ</div>
                </section>

                <div className="arrow">
                    <img src={arrow} alt="" />
                </div>
            </section>


            <section className='mt-5'>
                <div className='blue font-34 fw-700 text-center'>Or choose a category to quickly find <br />the help you need</div>
                <div className='row centerdiv mt-5'>
                    <div className='col-3'>
                        <div className='white-card mr-3'>
                            <div className='fw-700'>Getting started</div>
                            <div className='mt-2'>All you need from A to Z to getting <br />started are available.</div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='white-card  mr-3'>
                            <div className='fw-700'>Getting started</div>
                            <div className='mt-2'>All you need from A to Z to getting <br />started are available.</div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='white-card  mr-3'>
                            <div className='fw-700'>Getting started</div>
                            <div className='mt-2'>All you need from A to Z to getting <br />started are available.</div>
                        </div>
                    </div>
                </div>

                <div className='blue font-34 fw-700 text-center mt-5'>FAQ</div>
                <div className='text-center blue mt-2 mb-5'>Frequently asked questions about Pricing Plan</div>
            </section>

            <section>
                <div className='row centerdiv'>
                    <div className='col-8'>
                        <div className='white-card text-left'>
                            <div className='fw-700'>How do I pay for the Essentials or Premium plan?</div>
                            <div>You can pay with a credit card or via net banking and if youre in United States.
                                We will renew your subscription automatically at <br /> the end of every billing cycle.</div>
                        </div>
                    </div>

                    <div className='col-8 mt-3'>
                        <div className='white-card text-left'>
                            <div className='fw-700'>Can I cancel my Essentials or Premium plan subscription at any time?</div>

                        </div>
                    </div>

                    <div className='col-8 mt-3'>
                        <div className='white-card text-left'>
                            <div className='fw-700'>We need to add new users to our team. How will that be billed?</div>

                        </div>
                    </div>

                    <div className='col-8 mt-3'>
                        <div className='white-card text-left'>
                            <div className='fw-700'>My team wants to cancel its subscription. How do we do that? Can we get a refund??</div>
                        </div>
                    </div>
                    <div className='col-8 mt-3'>
                        <div className='white-card text-left'>
                            <div className='fw-700'>Do you offer discounts for non-profit organizations or educational institutions??</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb15'>
                <div className='blue font-34 fw-700 text-center mt-5'>Still have a questions?</div>
                <div className='text-center blue mt-2 mb-5'>If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!</div>

                <div className='row centerdiv mt-5'>
                    <div className='col-3'>
                        <div className='white-card mr-3'>
                            <img src={phone} className='mb-2' />
                            <div className='fw-700'>+1 (646) 786-5060</div>
                            <div className='mt-2'>We are always happy to help.</div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='white-card  mr-3'>
                            <img src={phone} className='mb-2' />
                            <div className='fw-700'>support@helpcenter.com</div>
                            <div className='mt-2'>Alternative way to get anwser faster.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default Help;
