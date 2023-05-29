import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import './business.css'
import mainimg from '../../../assets/images/main-img.png'
import montraFinal from '../../../assets/images/montraFinal.png';
import applelogo from '../../../assets/images/applelogo.png';
import googleLogo from '../../../assets/images/googlePlay.png';
import bankingBusiness from '../../../assets/images/banking-business.svg';
import mobilepayment from '../../../assets/images/mobilepayment.png'
import arrowBottom from '../../../assets/images/arrowbottom.png';
import iphone12 from '../../../assets/images/iPhone12pro.svg';
import lending from '../../../assets/images/lending.png'
import compareLoanOffer from '../../../assets/images/icons/Compare Loan Offers.svg'
import instantLoan from '../../../assets/images/icons/Instant Loan Disbursements.svg';
import trackLoan from '../../../assets/images/icons/Track Loan Applications.svg';
import loanRepayment from '../../../assets/images/icons/Make Loan Repayments.svg';
import viewLoan from '../../../assets/images/icons/View Loan Statements.svg';
import getPaymentRemainder from '../../../assets/images/icons/Get Payment Reminders.svg';
import girlshopping from '../../../assets/images/girlshopping.svg'
import { NavLink } from 'react-router-dom';

function Business() {
    return (
        <div className="">
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
                                <NavLink to="business ">
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
                        <div className="text-head">
                            Grow your business <br />
                            with Montra
                        </div>
                        <div class="text-description py-3">
                            Upgrade your business to let Montra help you <br /> achieve your business goals
                        </div>
                        <button className="download-btn white w-40">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                    </div>
                    <div className='col-6 centerdiv align-center'>
                        <img src={mainimg} width={'100%'} alt="" />
                    </div>
                </div>
                <div className='slantdivBusiness'>

                </div>
                <div className='p-relative' >
                    <img className="arrow1" src={arrow} alt="" />
                </div>
            </div>

            {/* section 2 */}
            <section class="pl8 my-15">
                <div className="row pt-5">
                    <div className="col-8">
                        <div className="payment-head align-center"><img src={wallet} alt="" className="mr-2" />Banking</div>
                        <div className="payment-description fw-700 py-3">
                            Accept payments online with ease and grow <br /> your business with Montra for Business app
                        </div>
                        <button className="download-btn blue">Download

                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                        <div className="col-12 mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Accept Payments</div>
                                    <div className="mt-3 col-8">
                                        Register on Montra for Business App to get personalized QR code issued which can be shared as well as printed for Customers to Scan the some to make payment. Merchants con also show this on the phone screen for accepting payments                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Manage multiple Tis</div>
                                    <div className="mt-3 col-8">
                                        Merchants con odd multiple Tills in the some store or multiple in Tills in multiple Stores. Ti s would accept payments into the collection account odder by the merchant. Tills hove limited access to the Business append con only use the opp for collection while Merchant con access oll features                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Collection statement</div>
                                    <div className="mt-3 col-8">
                                        Merchonts con view the doily, weekly,monthly collection stotements besides viewing the some for customized dote ronge                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-4">

                        <img src={bankingBusiness} className="ml-2" alt="" />



                    </div>
                </div>


            </section>

            {/* section 3 */}
            <section class="pl8  py-6 pt-15 bg-lightblue">
                <div className="row pt-5">
                    <div className="col-5">
                        <img src={bankingBusiness} className="ml-2" alt="" />
                    </div>
                    <div className="col-7">
                        <div className="payment-head align-center"><img src={wallet} alt="" className="mr-2" />Payment</div>
                        <div className="payment-description fw-700 py-3">
                            Merchants can earn incremental <br /> income by offering the Agency <br /> Banking Services offered on <br /> Mantra for Business app                        </div>
                        <button className="download-btn blue">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                        <div className="col-12 mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Agency Banking</div>
                                    <div className="mt-3 col-8">
                                        Merchants can Accept & Pay Cash to customer through Montra for Business opp & earn commission for facilitating cash withdrawer or deposited request for customers                                  </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Agency Banking Statement</div>
                                    <div className="mt-3 col-8">
                                        Merchant can view all Agency Banking transactions in their Agency Banking statement on Montra for Business app
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </section>


            {/* section 4 */}

            <div className='slant-business-1 pl8 pt-15 py-6'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} alt='' />
                </div>
                <div className="row pt-5 z-index white">
                    <div className="col-8">
                        <div className="payment-head"><img src={donate} alt="" className="mr-2" />Lending</div>
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Compare the loan offers from  <br />our Lending Partners and </span>  get  <br /> them disbursed instantly in  <br /> your bank accounts
                        </div>
                        <button className="download-btn blue w-40">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                        <div className="col-12 mt-5">
                            <div className="row white">
                                <div className="col-4">
                                    <img src={compareLoanOffer} alt="" className="mb-3" />
                                    <div className="text-left-border-white">Compare Loan Offers</div>
                                    <div className="mt-3 col-8">
                                        Customers can apply for variety of Instant  and Other loan products offered by our Lending partners on Montra Personal app                            </div>
                                </div>

                                <div className="col-4">
                                    <img src={instantLoan} alt="" className="mb-3" />
                                    <div className="text-left-border-white">Instant Loan Disbursements</div>
                                    <div className="mt-3 col-8">
                                        Upon successfully submitting loan applications for Instant Loan products, Montra get the amount disbursed into customers’ bank accounts instantly                            </div>
                                </div>

                                <div className="col-4">
                                    <img src={trackLoan} alt="" className="mb-3" />
                                    <div className="text-left-border-white">Track Loan Applications</div>
                                    <div className="mt-3 col-8">
                                        Customers can track the status of the loans applied on Montra Personal app to see their status                            </div>
                                </div>

                                <section className="row mt-5">
                                    <div className="col-4">
                                        <img src={loanRepayment} alt="" className="mb-3" />
                                        <div className="text-left-border-white ">Make Loan Repayments</div>
                                        <div className="mt-3 col-8">
                                            Customers can initiate payment of Due monthly installments on Montra Personal app                                </div>
                                    </div>

                                    <div className="col-4">
                                        <img src={viewLoan} alt="" className="mb-3" />

                                        <div className="text-left-border-white ">View Loan Statements</div>
                                        <div className="mt-3 col-8">
                                            Customers can view Loan Statements for all the loans they have availed on Montra Personal app                                </div>
                                    </div>

                                    <div className="col-4">
                                        <img src={getPaymentRemainder} alt="" className="mb-3" />

                                        <div className="text-left-border-white">Get Payment Reminders</div>
                                        <div className="mt-3 col-8">
                                            Montra sends alerts reminding Customers to pay against the due & delinquent amounts for them to avoid paying penal charges                                </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-relative">
                            <img src={iphone12} alt="" />
                        </div>
                    </div>
                </div>
                <div className='slantdivBusiness-1'>
                </div>
            </div>

            {/* section 5 */}

            <section class="pl8 my-15">
                <div className="row pt-5">
                    <div className="col-8">
                        <div className="payment-head align-center"><img src={shield} alt="" className="mr-2" />Insurance</div>
                        <div className="payment-description fw-700 py-3">
                            Merchants can create and send <br /> invoices it to Customers for the <br /> products they sell to customers<br /> using Montra for Business app
                        </div>
                        <button className="download-btn blue">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                        <div className="col-12 mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Invoicing</div>
                                    <div className="mt-3 col-8">
                                        Merchants can make invoices using the inventory tracker tool on Montra for Business app.
                                        Invoices are shared to customers on their Personal app.                           </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Manage Credit Sales</div>
                                    <div className="mt-3 col-8">
                                        Merchants can view the credit sales for tracking payments.
                                        Montra for Business facilities collections for due balance
                                        between the seller on Business app and Buyers through Personal App.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={bankingBusiness} className="ml-2" alt="" />
                    </div>
                </div>
            </section>

            <section class="pl8 py-6 bg-lightblue">
                <div className="row">
                    <div className="col-8">
                        <div className="payment-head align-center"><img src={shield} alt="" className="mr-2" />Insurance</div>
                        <div className="payment-description fw-700 py-3">
                            Merchants can now manage their <br /> inventories using Montra for Business <br /> app for the stock purchased and sold  <br /> through Montra Eco system
                        </div>
                        <button className="download-btn blue">Download
                            <img src={montraFinal} className="px-1" alt="" />
                            <img src={applelogo} alt="" />
                            <img src={googleLogo} className="pl-1" alt="" />
                        </button>
                        <div className="col-12 mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Buy Inventory</div>
                                    <div className="mt-3 col-8">
                                        Merchants can buy an inventory that has been invoiced by another Merchant by making payment through Montra for Business App                         </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Sell Inventory</div>
                                    <div className="mt-3 col-8">
                                        Merchants can sell inventory to another Merchant through Montra for Business app
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={mobilepayment} alt="" className="mb-3" />
                                    <div className="text-left-border">Manage Inventory</div>
                                    <div className="mt-3 col-8">
                                        Merchants can view the Inventory that is purchased and sold through Montra for Business app                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={bankingBusiness} className="ml-2" alt="" />
                    </div>
                </div>
            </section>


            <div className='slant-business-1 pl8 pt-15 py-6'>
                <div className='arrowBottom-1'>
                    <img src={arrowBottom} alt='' />
                </div>
                <div className="row pt-5 z-index white">
                    <div className="col-6">
                        <div className="payment-head"><img src={donate} alt="" className="mr-2" />Shopping</div>
                        <div className="payment-description white py-3">
                            <span className="fw-700">  Montra the Customer you <br /> want with Montra Stores</span>

                        </div>

                        <div>
                            <div className="col-12 mt-5">
                                <div className="text-left-border-white">Make your products easy to discover</div>
                                <div className="mt-3 col-12">
                                    You can tell your story and highlight products seamlessly,<br /> so people can easily shop in the moment of discovery                         </div>
                            </div>

                            <div className="col-12 mt-5">
                                <div className="text-left-border-white">Tap The Power Of Photos And Videos</div>
                                <div className="mt-3 col-12">
                                    Use real-time and pre-made content to create an <br /> interactive, visual shopping experience that deepens <br /> connections and shows off your products to the world.                                                          </div>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="text-left-border-white">Connect with people who love to shop</div>
                                <div className="mt-3 col-12">
                                    Nearly half of people surveyed use Instagram to shop <br /> weekly .Meet your customers where they are
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-6">
                        <div className="p-relative">
                            <img className='mt-minus-7' src={girlshopping} alt="" />
                        </div>
                    </div>
                </div>
                <div className='slantdivBusiness-1'>
                </div>
            </div>
        </div>
    );
}

export default Business;
