import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import './payment-gateway.css';
import { NavLink } from 'react-router-dom';
import montraFinal from '../../../assets/images/montraFinal.png';
import applelogo from '../../../assets/images/applelogo.png';
import googleLogo from '../../../assets/images/googlePlay.png';
import mainimg from '../../../assets/images/main-img.png'
import bankingBusiness from '../../../assets/images/banking-business.svg';
import tick from '../../../assets/images/tick-icon.svg'
import tickWhite from '../../../assets/images/tick-white.svg'
import arrowBottom from '../../../assets/images/arrowbottom.png';
import ladyimg from '../../../assets/images/lady-image.svg';
import AccountOpening from '../../../assets/images/icons/AccountOpening.svg'

function PaymentGateway() {
    return (
        <div>
            <div className='slant-business'>
                <div className="justify-between pad-section align-center">
                    <section>
                        <div className="tabs">
                            <span className="pr-2">
                                <NavLink to="/">
                                    Personal
                                </NavLink>
                            </span>
                            <span className="pl-2 active">
                                <NavLink to="/business ">
                                    Business
                                </NavLink>
                            </span>
                        </div>
                    </section>
                    <section>
                        <ul>
                            <li>
                                <img src={wallet} className="mr-2" />
                                Payment
                            </li>
                            <li>
                                <img src={bank} className="mr-2" />
                                Banking
                            </li>
                            <li>
                                <img src={donate} className="mr-2" />
                                Lending
                            </li>
                            <li>
                                <img src={shield} className="mr-2" />
                                Insurance
                            </li>
                            <li>
                                <img src={gold} className="mr-2" />
                                Investment
                            </li>
                            <li>
                                <img src={cart} className="mr-2" />
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
                        <div className="text-head">
                            Power your business <br /> with Montra <br /> Payment Gateway
                        </div>
                        <div class="text-description py-3">
                            With the easiest integration, completely online <br /> onboarding,
                            feature filled checkout & best in class <br /> performance, quickly go live
                            with Montra <br /> & experience the future of payments
                        </div>
                        <button className="download-btn white w-40">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>
                    </div>
                    <div className='col-6 centerdiv align-center'>
                        <img src={mainimg} width={'100%'} />
                    </div>
                </div>
                <div className='slantdivBusiness'>

                </div>
                <div className='p-relative' >
                    <img className="arrow1" src={arrow} />
                </div>
            </div>

            {/* section 2 */}
            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-head align-center"><img src={wallet} className="mr-2" />Pay with card</div>
                        <div className="payment-description fw-700 py-3">
                            Payments on Websites <br />
                            and Mobile apps of our merchant
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Ask your customers to directly pay from any of their
                                <span className='fw-600 theme-color'> Credit or Debit <br />
                                    Cards</span> & instantly complete the checkout on your website or mobile app
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                <span className='fw-600 theme-color'>Accept international card payments</span>  from customers across the world
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Your customers can <span className='fw-600 theme-color'>save card details </span>and use them for future payments
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>


            </section>

            {/* section 3 */}
            <section class="pl8 my-15">
                <div className="row">
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                    <div className="col-6">
                        <div className="payment-head align-center"><img src={wallet} className="mr-2" />Pay with card</div>
                        <div className="payment-description fw-700 py-3">
                            Merchant Stores enabled with QR  <br /> code payments from Montra  <br /> customers using their Montra apps
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                On your Physical Stores, ask your customers to <span className='fw-600 theme-color'>Scan your QR code</span> to <br /> access merchant details on Montra app
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Customers share their card details on Montra app to make payment                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Your customers can <span className='fw-600 theme-color'>save card details </span>and use them for future payments
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}

            <div className='slant-business-1 bg-white pl8 pt-15 py-6 p-relative'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} />
                </div>
                <div className="row pt-5 z-index white">
                    <div className="col-6">
                        <div className="payment-head"><img src={donate} className="mr-2" />Pay with Banks</div>
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Payments on Websites & <br />Mobile apps of our merchant </span>
                        </div>
                        <div>
                            Accept payments through bank transfers. Customers can select a <br /> bank from the list
                            of banks available, and input their bank account<br /> number, followed by the authorization
                            process towards making <br />payment.
                        </div>
                        <div className='mt-5'>
                            <img src={bankingBusiness} width="30%" className="ml-2" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Merchant Stores enabled with QR <br /> code payments from Montra <br />  customers using their Montra apps </span>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer bg-circle-blue'> <img src={tickWhite} /></div>
                            <div>
                                On your Physical Stores, ask your customers to <span className='fw-600 theme-color'>Scan your QR code</span> to <br /> access merchant details on Montra app
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer bg-circle-blue'> <img src={tickWhite} /></div>
                            <div>
                                Cutomers can make payment from the bank accounts they have <br /> linked on their Montra app                            </div>
                        </div>
                        <div className='mt-5'>
                            <img src={bankingBusiness} width="30%" className="ml-2" />
                        </div>
                    </div>
                </div>
                <div className='slantdivBusiness-1'>
                </div>
            </div>

            {/* section 5 */}
            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-head align-center"><img src={wallet} className="mr-2" />
                            Pay with QR</div>
                        <div className="payment-description fw-700 py-3">
                            Payments on Websites & Mobile <br /> apps of our merchant
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Montra allows you to accept payment with
                                <span className='fw-600 theme-color'>
                                    banks mobile application</span> of <br />
                                your customer. Customers can scan the QR code
                                on the payment page <br /> and make payment from their
                                bank’s mobile banking app.pp
                            </div>
                        </div>


                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>

            {/* section 6 */}
            <section class="pl8 ">
                <div className="row">
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                    <div className="col-6">
                        <div className="payment-head align-center"><img src={wallet} className="mr-2" />Pay with QR</div>
                        <div className="payment-description fw-700 py-3">
                            Merchant Stores enabled with QR  <br /> code payments from Montra  <br /> customers using their Montra apps
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                On your Physical Stores, ask your customers to <span className='fw-600 theme-color'>Scan your QR code</span> to <br /> access merchant details on Montra app
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-outer'> <img src={tick} /></div>
                            <div>
                                Customers share their card details on Montra app to make payment                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 7 */}

            <div className='slantdiv-skyblue pl8 pt-15 py-6 p-relative'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} />
                </div>
                <div className="row pt-5 z-index">
                    <div className="col-6 box-center">

                        <div className="payment-head"><img src={donate} className="mr-2" />Pay with Montra</div>
                        <div className="payment-description  py-3">
                            <span className="fw-700">  Payments on Websites <br /> & Mobile apps of our merchant </span>
                        </div>
                        <div>
                            With our Checkout form, pay with Montra
                            is as easy as it can get.<br /> <span className='fw-600 theme-color'>Montra app</span> users
                            are asked to enter their Montra ID and submit<br /> payment
                            request. Customer will receive a mobile notification in
                            their<br /> Montra app to accept it to complete payment. Not a
                            single extra line<br /> of code is required for accepting using
                            “Pay with Montra” from <br />Montra app users
                        </div>
                    </div>

                    <div className="col-6">
                        <img src={bankingBusiness} width="30%" className="ml-2" />
                        <img src={bankingBusiness} width="30%" className="ml-2" />
                        <img src={bankingBusiness} width="30%" className="ml-2" />

                    </div>
                </div>
                <div className='slant-skyblue'>
                </div>
            </div>

            {/* section 8 */}
            <div className=' pl8 pt-15 py-6 p-relative'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} />
                </div>

                <div className="row pt-5 z-index">
                    <div className="col-6">
                        <img src={bankingBusiness} width="30%" className="ml-2" />
                        <img src={bankingBusiness} width="30%" className="ml-2" />
                        <img src={bankingBusiness} width="30%" className="ml-2" />

                    </div>
                    <div className="col-6 box-center">
                        <div className="payment-head"><img src={donate} className="mr-2" />Pay with loan</div>
                        <div className="payment-description  py-3">
                            <span className="fw-700">  Payments on Websites <br /> & Mobile apps of our merchant </span>
                        </div>
                        <div>
                            With our Checkout form, pay with  <span className='fw-600 theme-color'>Montra is as easy</span> as
                            it can get.<br /> Montra app users are asked to enter their
                            Montra ID and submit <br /> payment request. Customer will receive
                            a mobile notification in their <br /> Montra app to accept it to complete
                            payment. Not a single extra line <br /> of code is required for accepting
                            using “Pay with Montra” from <br /> Montra app users
                        </div>
                    </div>
                </div>
            </div>

            {/* section 9 */}
            <section className='slant-business-1 bg-white mb-5'>
                <div className='row align-center z-index'>
                    <div className='col-8'>
                        <div className='blue-head centerdiv col-7 mb-5'>Why Montra Payment Gateway</div>
                        <div className='row centerdiv'>
                            <div className="col-5">
                                <img src={AccountOpening} className="mb-3" />
                                <div className="text-left-border-white">Accept All payment Modes</div>
                                <div className="mt-3 col-8">
                                    With Domestic and International Credit and Debit cards,Escrow Pay, Payment Links,Pay
                                    with Montra and net banking with most of the banks, Montra provides the most extensive
                                    set of payment methods                                </div>
                            </div>

                            <div className="col-5">
                                <img src={AccountOpening} className="mb-3" />
                                <div className="text-left-border-white">Checkout & Global Card Saving</div>
                                <div className="mt-3 col-8">
                                    An easy to integrate Checkout with cards saved across businesses so that
                                    your customers can pay seamlessly everywhere.
                                </div>
                            </div>

                            <div className="col-5 mt-4">
                                <img src={AccountOpening} className="mb-3" />
                                <div className="text-left-border-white">Powerful Dashboard</div>
                                <div className="mt-3 col-8">
                                    Get reports and detailed statistics on payments, settlements,refunds
                                    and much more for you to take better business decisions                                </div>
                            </div>

                            <div className="col-5 mt-4">
                                <img src={AccountOpening} className="mb-3" />
                                <div className="text-left-border-white">Built for Developers</div>
                                <div className="mt-3 col-8">
                                    Robust, clean,developer friendly APls, plugins and libraries for all majorlanguages and
                                    platforms that let you focus on building great products
                                </div>
                            </div>

                            <div className="col-10 mt-4">
                                <img src={AccountOpening} className="mb-3" />
                                <div className="text-left-border-white">Robust Security</div>
                                <div className="mt-3 col-5">
                                    PCI DSS Levellcompliant along with frequent third­ party audits anda dedicated internal
                                    security team to make sure your data is always safe
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={ladyimg} />
                    </div>
                </div>
                <div className='slantdivBusiness-1'>
                </div>
            </section>
        </div>
    );
}

export default PaymentGateway;
