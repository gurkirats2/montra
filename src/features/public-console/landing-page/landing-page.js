
import './landing-page.css';
import montraFinal from '../../../assets/images/montraFinal.png';
import applelogo from '../../../assets/images/applelogo.png';
import googleLogo from '../../../assets/images/googlePlay.png';
import paymentqr from '../../../assets/images/paymentqr.png';
import mainimg from '../../../assets/images/main-img.png'
import banking from '../../../assets/images/banking img.png'
import lending from '../../../assets/images/lending.png'
import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import mobilepayment from '../../../assets/images/mobilepayment.png'
import profit from '../../../assets/images/profit.png'
import chatting from '../../../assets/images/chatting.png'
import chatnotification from '../../../assets/images/chatnotification.png'
import store from '../../../assets/images/store.png'
import book from '../../../assets/images/book.png'
import AccountOpening from '../../../assets/images/icons/AccountOpening.svg';
import kyc from '../../../assets/images/icons/KYC.svg';
import agencyBanking from '../../../assets/images/icons/AgencyBanking.svg';
import agencyBankingStatement from '../../../assets/images/icons/Agency  Banking Statement.svg'
import arrowBottom from '../../../assets/images/arrowbottom.png'
import compareLoanOffer from '../../../assets/images/icons/Compare Loan Offers.svg'
import instantLoan from '../../../assets/images/icons/Instant Loan Disbursements.svg';
import trackLoan from '../../../assets/images/icons/Track Loan Applications.svg';
import loanRepayment from '../../../assets/images/icons/Make Loan Repayments.svg';
import viewLoan from '../../../assets/images/icons/View Loan Statements.svg';
import getPaymentRemainder from '../../../assets/images/icons/Get Payment Reminders.svg';
import compareInsaurancePlan from '../../../assets/images/icons/Compare Insurance Plans.svg';
import viewPolicyDetail from '../../../assets/images/icons/View Policy Details.svg';
import renewInsaurance from '../../../assets/images/icons/Renew Insurance Policies.svg';
import compareFixedDepoistRates from '../../../assets/images/icons/Compare Fixed Deposit rates.svg';
import investInMutualFunds from '../../../assets/images/icons/Compare and Invest in Mutual Funds.svg';
import { NavLink } from 'react-router-dom';
import arrowForward from '../../../assets/images/arrowForward.svg';
import insauranceImg from '../../../assets/images/insurance img.png'
import Investmentimg from '../../../assets/images/Investment img.png'
import shoppingimg from '../../../assets/images/shopping img.png'

function LandingPage() {
    return (
        <div>
            {/* section 1 */}
            <section className="slant-business">
                {/* page-header-2 */}
                <div className="justify-between pad-section align-center z-index">
                    <section>
                        <div className="tabs">
                            <span className="active">
                                <NavLink to="/">
                                    Personal
                                </NavLink>
                            </span>
                            <span className="pl-2">
                                <NavLink to="business">
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
                        <button className="theme-btn align-center">
                            <div>Montra Sign in</div>
                            <img src={arrowForward} className='ml-2 mt-1' />
                        </button>
                    </section>
                </div>

                <div className="row z-index ">
                    <div className="col-5 mt-5 pt-5 pl8">
                        <div className="text-head">
                            Powering Digital <br />
                            Payments Lending <br />
                            for Everyone
                        </div>
                        <div class="text-description py-3">
                            Marketplaces for multiparty payments, Lending,<br />
                            Insurance Investment Products
                        </div>
                        <button className="download-btn white w-40">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>
                    </div>
                    <div className="col-7 mt-5 text-right p-relative">
                        <div class="main-img">
                            <img src={mainimg} width={'100%'} />
                        </div>
                    </div>
                </div>
                <div className='slantdivBusiness'>
                    <img className="arrow" src={arrow} />
                </div>
            </section>

            {/* section 2 */}
            <section class="pl8 my-15">
                <div className="row pt-5">
                    <div className="col-5">
                        <div className="payment-head align-center"><img src={wallet} className="mr-2" />Payments</div>
                        <div className="payment-description py-3">Pay anyone directly from your <br />
                            <span className="fw-700">bank accounts</span> or linked <span className="fw-700">cards</span></div>
                        <button className="download-btn blue">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-6">
                                <img src={paymentqr} className="ml-2" width={'100%'} />
                            </div>
                            <div className="col-6 font-12">
                                <div class="bg-gray mt-5">
                                    <div className="fw-600 mb-2 font-14">Scan and pay</div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:1</div>
                                        <div className="col-10">Scan the QR code of a Montra merchant or enter the Mobile Number</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:2</div>
                                        <div className="col-10">Enter the amount</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-2">Step:3</div>
                                        <div className="col-10">Select from multiple Bank Accounts or Cards you have linked to Montra personal appr</div>
                                    </div>   <div className="row mb-2" >
                                        <div className="col-2">Step:4</div>
                                        <div className="col-10">Enter your Payment PIN</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2">Step:5</div>
                                        <div className="col-10">Initiate Payment request</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-8 mt-3">
                    <div className="row">
                        <div className="col-4">
                            <img src={mobilepayment} className="mb-3" />
                            <div className="text-left-border">Scan Pay</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App & simply make payment directly f
                            </div>
                        </div>

                        <div className="col-4">
                            <img src={profit} className="mb-3" />

                            <div className="text-left-border">Fund Transfer</div>
                            <div className="mt-3 col-8">
                                Transfer Funds to any bank account directly from your bank accounts linked to your App
                            </div>
                        </div>

                        <div className="col-4">
                            <img src={chatting} className="mb-3" />

                            <div className="text-left-border">Chat Pay</div>
                            <div className="mt-3 col-8">
                                Chat with other Montra users & send or receive payments while chatting
                            </div>
                        </div>

                        <section className="row mt-5">
                            <div className="col-4">
                                <img src={store} className="mb-3" />

                                <div className="text-left-border">Payment Marketplace</div>
                                <div className="mt-3 col-8">
                                    Our payment Marketplace offers access to payment services such as buy Airtime, Data & DTH .
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={book} className="mb-3" />

                                <div className="text-left-border">Transaction History</div>
                                <div className="mt-3 col-8">
                                    Get an easy access to track all your transactions on your Personal Montra app
                                </div>
                            </div>

                            <div className="col-4">
                                <img src={chatnotification} className="mb-3" />

                                <div className="text-left-border">Payment Reminders</div>
                                <div className="mt-3 col-8">
                                    We will notify you about the upcoming payments on Montra Personal app
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>


            {/* section 3 */}

            <section className="row bg-skyblue pl8 mt-5 py-5 ht-540">
                <div className="col-5 center-div">
                    <div className="payment-head">                                <img src={bank} className="mr-2" />
                        Banking</div>
                    <div className="payment-description py-3">
                        <span className="fw-700"> Open a bank account <br /> instantly </span> with our partner <br />  banks and operate through <br />  our Agent Network
                    </div>
                    <button className="download-btn blue w-40">Download
                        <img src={montraFinal} className="px-1" />
                        <img src={applelogo} />
                        <img src={googleLogo} className="pl-1" />
                    </button>
                </div>
                <div className="col-7 m-auto">
                    <img src={banking} />
                </div>
            </section>


            {/* section 4 */}
            <section className="row bg-skyblue pb-5">
                <div className="col-5">
                    <div className="row">
                        <div className="col-8">
                            <div class="bg-white center-div">
                                <div className="fw-700 mb-2 font-18 blue">Agency Banking</div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:1</div>
                                    <div className="col-10">Open a new Bank account or use an exiting bank account linked </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:2</div>
                                    <div className="col-10">Customer or Merchant enters the amount customer </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-2">Step:3</div>
                                    <div className="col-10">App generates QR code with amount details on Personal </div>
                                </div>   <div className="row mb-2" >
                                    <div className="col-2">Step:4</div>
                                    <div className="col-10">Customer Agent scan the QR code to initiate the transaction</div>
                                </div>
                                <div className="row">
                                    <div className="col-2">Step:5</div>
                                    <div className="col-10">Montra facilitates the transaction of payment from /Customer t</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4" style={{ background: 'linear-gradient(180deg, #2B458A 0%, #061C58 100%)' }}>
                            <div class="bg-agency-banking">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7 center-div pl-4">
                    <div className="row centerdiv">
                        <div className="col-5">
                            <img src={AccountOpening} className="mb-3" />
                            <div className="text-left-border">Account Opening</div>
                            <div className="mt-3 col-8">
                                Customers can open a bank account instantly with any of our parner banks
                            </div>
                        </div>

                        <div className="col-5">
                            <img src={kyc} className="mb-3" />

                            <div className="text-left-border">KYC</div>
                            <div className="mt-3 col-8">
                                Customers can submit documents and complete kyc through Montra personal app for the newly opened account
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 centerdiv">

                        <div className="col-5">

                            <img src={agencyBanking} className="mb-3" />
                            <div className="text-left-border">Agency Banking</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts
                            </div>
                        </div>

                        <div className="col-5">
                            <img src={agencyBankingStatement} className="mb-3" />

                            <div className="text-left-border">Agency  Banking Statement</div>
                            <div className="mt-3 col-8">
                                Scan QR code of any Montra Merchant using Personal App  and simply make payment directly from any of your bank accounts
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <img src={cuttingedge} />
                </div> */}
            </section>


            {/* section 5 */}

            <div className='slant-lending pl8 pt-15 py-6'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} />
                </div>
                <div className="row pt-5 z-index white align-center">
                    <div className="col-6">
                        <div className="payment-head"><img src={donate} className="mr-2" />Lending</div>
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Compare the loan offers from  <br />our Lending Partners and </span>  get  <br /> them disbursed instantly in  <br /> your bank accounts
                        </div>
                        <button className="download-btn blue w-40">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>

                    </div>
                    <div className="col-6">
                        <div className="p-relative">
                            <img src={lending} />
                        </div>
                    </div>
                    <div className="col-8 mt-5 pt-5">
                        <div className="row white">
                            <div className="col-4">
                                <img src={compareLoanOffer} className="mb-3" />
                                <div className="text-left-border-white">Compare Loan Offers</div>
                                <div className="mt-3 col-8">
                                    Customers can apply for variety of Instant  and Other loan products offered by our Lending partners on Montra Personal app                            </div>
                            </div>

                            <div className="col-4">
                                <img src={instantLoan} className="mb-3" />
                                <div className="text-left-border-white">Instant Loan Disbursements</div>
                                <div className="mt-3 col-8">
                                    Upon successfully submitting loan applications for Instant Loan products, Montra get the amount disbursed into customers’ bank accounts instantly                            </div>
                            </div>

                            <div className="col-4">
                                <img src={trackLoan} className="mb-3" />
                                <div className="text-left-border-white">Track Loan Applications</div>
                                <div className="mt-3 col-8">
                                    Customers can track the status of the loans applied on Montra Personal app to see their status                            </div>
                            </div>

                            <section className="row mt-5">
                                <div className="col-4">
                                    <img src={loanRepayment} className="mb-3" />
                                    <div className="text-left-border-white ">Make Loan Repayments</div>
                                    <div className="mt-3 col-8">
                                        Customers can initiate payment of Due monthly installments on Montra Personal app                                </div>
                                </div>

                                <div className="col-4">
                                    <img src={viewLoan} className="mb-3" />

                                    <div className="text-left-border-white ">View Loan Statements</div>
                                    <div className="mt-3 col-8">
                                        Customers can view Loan Statements for all the loans they have availed on Montra Personal app                                </div>
                                </div>

                                <div className="col-4">
                                    <img src={getPaymentRemainder} className="mb-3" />

                                    <div className="text-left-border-white">Get Payment Reminders</div>
                                    <div className="mt-3 col-8">
                                        Montra sends alerts reminding Customers to pay against the due & delinquent amounts for them to avoid paying penal charges                                </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='slantdivLending'>
                    <img className="arrow" src={arrow} />
                </div>
            </div>

            {/* section 6 */}

            <section className="row pl8 mt-15 align-center ht-540">
                <div className="col-5 ">
                    <img src={insauranceImg} />
                </div>
                <div className="col-7 center-div">

                    <div className="payment-head"> <img src={shield} className="mr-2" />
                        Insurance</div>
                    <div className="payment-description py-3">
                        <span className="fw-700">Compare Insurance Policy <br />
                            Premiums</span> and Features to buy <br /> the <span className="fw-700"> most suitable plan from <br />
                            our Insurance Partners</span>
                    </div>
                    <button className="download-btn blue w-40">Download
                        <img src={montraFinal} className="px-1" />
                        <img src={applelogo} />
                        <img src={googleLogo} className="pl-1" />
                    </button>
                </div>
            </section>
            {/* section 7 */}
            <div className="col-9 mb-15 mt-5 pl8">
                <div className="row">
                    <div className="col-4">
                        <img src={compareInsaurancePlan} className="mb-3" />
                        <div className="text-left-border">Compare Insurance Plans</div>
                        <div className="mt-3 col-8">
                            Customers can apply for variety of Insurance Products and compare the plans for the premium amounts and features towards making a more informed decision
                        </div>
                    </div>

                    <div className="col-4">
                        <img src={viewPolicyDetail} className="mb-3" />
                        <div className="text-left-border">View Policy Details</div>
                        <div className="mt-3 col-8">
                            Now customers can find details of all the polices purchased on Montra Personal app in their pocket
                        </div>
                    </div>

                    <div className="col-4">
                        <img src={renewInsaurance} className="mb-3" />
                        <div className="text-left-border">Renew Insurance Policies</div>
                        <div className="mt-3 col-8">
                            Customers can easily renew the existing policies on Montra Personal app
                        </div>                    </div>
                </div>
            </div>

            {/* section 8 */}
            <section className="row pl8  py-10  bg-skyblue">
                <div className="col-6 center-div">

                    <div className="payment-head"><img src={gold} className="mr-2" />
                        Investment</div>
                    <div className="payment-description py-3">
                        <span className="fw-700">Compare  best investment <br /> plans </span> available towards <br /> maximizing your returns
                    </div>
                    <button className="download-btn blue w-40">Download
                        <img src={montraFinal} className="px-1" />
                        <img src={applelogo} />
                        <img src={googleLogo} className="pl-1" />
                    </button>
                    <div className="row  mt-5">
                        <div className="col-6">
                            <img src={compareFixedDepoistRates} className="mb-3" />

                            <div className="blue font-20 fw-700">Compare Fixed Deposit rates</div>
                            <div className="mt-3 col-8">
                                Customers can compare Fixed Deposit rates available from our
                                Banking Partners and park deposits where the returns
                                are most attractive
                            </div>
                        </div>

                        <div className="col-6">
                            <img src={investInMutualFunds} className="mb-3" />
                            <div className="blue font-20 fw-700">Compare and Invest in Mutual Funds</div>
                            <div className="mt-3 col-8">
                                Customers can Compare best Investment plans available towards maximizing your returns
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-6 m-auto">
                    <img src={Investmentimg} />
                </div>

            </section>

            {/* section-9 */}

            <section className="slant-shopping  pl8 pt22 p-relative">
                <section className="arrowBottom">
                    <img src={arrowBottom} />
                </section>
                <div className="row z-index">
                    <div className="col-6 m-auto">
                        <div className="p-relative">
                            <img src={shoppingimg} />
                        </div>
                    </div>

                    <div className="col-6 center-div">
                        <div className="payment-head">   <img src={cart} className="mr-2" />
                            Shopping</div>
                        <div className="payment-description white py-3">
                            Connect to sellers on <br />
                            Montra app for <span className="fw-700">exciting deals  </span>
                        </div>

                        <div className="white mb-4">
                            Montra shoppers can find what they are looking for online and <br />
                            in person. From delivering fresh produce to their doorstep to <br />
                            creating and distributing movies, music, and more, we are  <br />
                            always finding new ways to delight our customers.
                        </div>
                        <button className="download-btn blue w-40 ">Download
                            <img src={montraFinal} className="px-1" />
                            <img src={applelogo} />
                            <img src={googleLogo} className="pl-1" />
                        </button>
                    </div>
                </div>
                <div className='slantDivShopping '>
                </div>

                <div className="arrowBottomDown">
                    <img src={arrow} />
                </div>
            </section>

        </div>
    );
}

export default LandingPage;
