import arrow from '../../../assets/images/arrow.png'
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import mainimg from '../../../assets/images/main-img.png'
import './duo.css'
import bankingBusiness from '../../../assets/images/banking-business.svg';
import tickOrange from '../../../assets/images/tick-orange.svg';
import duocreditcard from '../../../assets/images/duocreditcard.png';
import issuer from '../../../assets/images/issuer.png';
import couchmen from '../../../assets/images/couchmen.png';
import googlePlay from '../../../assets/images/Google Play.png'
import appleStore from '../../../assets/images/App Store.png'

function Duo() {
    return (
        <div className="">
            {/* section 1 */}
            <div className='slant-black'>
                <div className="justify-between pad-section align-center">
                    <section>
                        <ul>
                            <li>
                                <img src={wallet} className="mr-2" />
                                DTS
                            </li>
                            <li>
                                <img src={bank} className="mr-2" />
                                DCP
                            </li>
                            <li>
                                <img src={donate} className="mr-2" />
                                Duo App
                            </li>
                            <li>
                                <img src={shield} className="mr-2" />
                                DUO Web Portal
                            </li>
                            <li>
                                <img src={gold} className="mr-2" />
                                Customer Onboarding
                            </li>
                            <li>
                                <img src={cart} className="mr-2" />
                                Limit Management
                            </li>
                        </ul>
                    </section>

                    <section>
                        <button className="yellow-btn">
                            Partner Sign in
                        </button>
                    </section>
                </div>
                <div className='row z-index h-100'>
                    <div className='col-6 pl8 centerdiv flex-col1'>
                        <div className="text-head">
                            Enjoy DUO Card  <br />
                            Experience with both  <br /> Credit and Debit  <br /> Cards in a single card
                        </div>
                        <div class="text-description py-3">
                            An innovation enabling credit card usage from any <br /> existing Debit Card
                        </div>
                        <button className="yellow-btn w-30">
                            Become a partner
                        </button>
                    </div>
                    <div className='col-6 centerdiv align-center'>
                        <img src={mainimg} width={'100%'} />
                    </div>
                </div>
                <div className='slantDivBlack'>

                </div>
                <div className='p-relative' >
                    <img className="arrow1" src={arrow} />
                </div>
            </div>

            {/* section 2 */}
            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-head orange align-center">DUAL TRANSACTION SERVICE-DTS</div>
                        <div className="payment-description black fw-700 py-2">
                            More than a Debit Card
                        </div>
                        <div style={{ color: 'rgb(5 5 5 / 71%)', fontWeight: '600', fontSize: '18px' }}>
                            An innovation enabling credit card usage from any <br /> existing debit card
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                DUO comes with revolutionary Dual Transaction Service (DTS) that enables  <br /> you to access Credit Limit that has been pre-approved by your bank instantly  <br /> through
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Now you don't have to apply for a Credit Card by submitting application form  <br /> and documents or even visit a bank branch to collect it once it is approved.                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Simply activate DTS by registering on DUO App introduced by your bank and  <br /> start accessing your Credit Card instantly from the existing Debit Card that  <br /> you already                            </div>
                        </div>
                        <button className='yellow-btn mt-4'>Know More</button>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <div className='slant-black'>
                <section class="pl8 z-index">
                    <div className="row pt7">
                        <div className="col-6">
                            <img src={bankingBusiness} className="ml-2" />
                        </div>
                        <div className="col-6">
                            <div className="payment-description white fw-700 py-2">
                                Enjoy DUO Card experience <br /> with both Credit and Debit <br /> cards in a single card
                            </div>

                            <div className='d-flex mt-3'>
                                <div className='tick-orange'> <img src={tickOrange} /></div>
                                <div>
                                    DUO Card Product ((DCP) comes with Two Chips /
                                    Magnetic stripes, one <br /> each for making a Debit &
                                    Credit transaction requests from anywhere in the  <br /> world.
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className='tick-orange'> <img src={tickOrange} /></div>
                                <div>
                                    Simply dip or swipe the Credit or Debit side based on where you choose to pay  <br /> from without carrying multiple cards.
                                </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className='tick-orange'> <img src={tickOrange} /></div>
                                <div>
                                    Similarly you can Withdraw cash on any ATM, anywhere in the world from  <br /> either of your Credit & Debit accounts.                            </div>
                            </div>
                            <div className='d-flex mt-3'>
                                <div className='tick-orange'> <img src={tickOrange} /></div>
                                <div>
                                    Use DUO for making online transactions by entering details of the Credit or  <br /> Debit side without having to select from multiple cards.                            </div>
                            </div>
                            <button className='yellow-btn mt-4'>Know More</button>

                        </div>


                    </div>
                </section>
                <div className='slantDivBlack'>

                </div>
            </div>

            {/* section 4 */}

            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-description black fw-800 py-2">
                            Save time, stay informed <br />
                            Get the DUO Mobile app <br /> introduced by your bank
                        </div>

                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Simply register on DUO App to Activate Dual Transaction Service (DTS) <br /> being offered by your bank.                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Access all details related to your Credit Limit, Available balance, Minimum  <br /> repayment due, Repayment due date, Card & Payment Status.                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Get your Virtual Credit Card details for making online payment                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                View your transaction history for all the transactions you have made using  <br /> your Virtual Credit Card through your existing Debit Card or DUO App.                         </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                View your recent Credit  and Debit card statements.                         </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Make repayments against your credit card outstanding                     </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Place requests to upgrade to Duo Card Product (DCP).                    </div>
                        </div>
                        <button className='yellow-btn mt-4'>Know More</button>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>


            {/* section 5 */}
            <div className='slant-black'>
                <section class="pl8 z-index">
                    <div className="row pt7">

                        <div className="col-6">
                            <div className="payment-description white fw-700 py-2">
                                DUO Portal
                            </div>
                            <div>
                                DUO Web Portal enables issuers to onboard <br /> customer data, review & manage portfolio , view <br />  variety of reports to facilitate reconciliation <br />  & settlement processes.
                            </div>
                            <button className='yellow-btn mt-4'>Know More</button>
                        </div>
                        <div className="col-6">
                            <img src={bankingBusiness} className="ml-2" />
                        </div>

                    </div>
                </section>
                <div className='slantDivBlack transform-top-left'>

                </div>
            </div>

            {/* section 6 */}

            <section class="pl8 my-15">
                <div className="row pt7">
                    <div className="col-6">
                        <div className="payment-description black fw-800 py-2">
                            Features
                        </div>

                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Simply register on DUO App to Activate Dual Transaction Service (DTS) <br /> being offered by your bank.                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Access all details related to your Credit Limit, Available balance, Minimum  <br /> repayment due, Repayment due date, Card & Payment Status.                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Get your Virtual Credit Card details for making online payment                          </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                View your transaction history for all the transactions you have made using  <br /> your Virtual Credit Card through your existing Debit Card or DUO App.                         </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                View your recent Credit  and Debit card statements.                         </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Make repayments against your credit card outstanding                     </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='tick-orange'> <img src={tickOrange} /></div>
                            <div>
                                Place requests to upgrade to Duo Card Product (DCP).                    </div>
                        </div>
                        <button className='yellow-btn mt-4'>Know More</button>
                    </div>
                    <div className="col-6">
                        <img src={bankingBusiness} className="ml-2" />
                    </div>
                </div>
            </section>

            {/* section 7 */}
            <div className='slant-black'>
                <section class=" z-index">
                    <div className='fw-700 white font-34 text-center mb-5'>Consumer</div>
                    <div className='row centerdiv'>
                        <div className='col2'>
                            <div className='card mr-3'>
                                <img src={duocreditcard} style={{ width: '100%', height: '200px', borderRadius: '12px 12px 0px 0px' }} />
                                <section className='p-3'>
                                    <div className='black fw-700 font-16'>What is DUO Credit Card Preposition?</div>
                                    <div className='black font-13 mt-2'>
                                        Get to know more about DUO proposition and how you benefit from it..
                                    </div>
                                    <div className='orange mt-3 font-13'>
                                        Read More
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='card mr-3'>
                                <img src={duocreditcard} style={{ width: '100%', height: '200px', borderRadius: '12px 12px 0px 0px' }} />
                                <section className='p-3'>
                                    <div className='black fw-700 font-16'>What is DUO Credit Card Preposition?</div>
                                    <div className='black font-13 mt-2'>
                                        Get to know more about DUO proposition and how you benefit from it..
                                    </div>
                                    <div className='orange mt-3 font-13'>
                                        Read More
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='card mr-3'>
                                <img src={duocreditcard} style={{ width: '100%', height: '200px', borderRadius: '12px 12px 0px 0px' }} />
                                <section className='p-3'>
                                    <div className='black fw-700 font-16'>What is DUO Credit Card Preposition?</div>
                                    <div className='black font-13 mt-2'>
                                        Get to know more about DUO proposition and how you benefit from it..
                                    </div>
                                    <div className='orange mt-3 font-13'>
                                        Read More
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className='card'>
                                <img src={duocreditcard} style={{ width: '100%', height: '200px', borderRadius: '12px 12px 0px 0px' }} />
                                <section className='p-3'>
                                    <div className='black fw-700 font-16'>What is DUO Credit Card Preposition?</div>
                                    <div className='black font-13 mt-2'>
                                        Get to know more about DUO proposition and how you benefit from it..
                                    </div>
                                    <div className='orange mt-3 font-13'>
                                        Read More
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='slantDivBlack transform-top-left'>

                </div>
            </div>

            {/* section 8 */}

            <section class="my-15">
                <div className='fw-700 black font-34 text-center mb-5'>Issuers</div>
                <div className="row">
                    <div className="col-6">
                        <img src={issuer} className="ml-2" />
                    </div>
                    <div className="col-6">
                        <div className="payment-description black fw-800 ">
                            DUO Proposition for Issuers?
                        </div>
                        <div className='col-9 my-4'>
                            This explainer Video depicts all the benefits Issuers have from DUO offering. Partnership with Artha Fintech not only helps Issuers in creating / improving Credit Card product program but also help them in driving acquisitions & activations digitally for the product besides helping Issuers manage Credit Card portfolio, usage & collections against delinquent customers.
                        </div>
                        <button className='yellow-btn '>Become our Issuer Partner</button>
                    </div>

                </div>
            </section>

            {/* section 9 */}

            <section className='bg-gray ht-600'>
                <div className='row centerdiv align-center'>
                    <div className='col4'>
                        <img src={couchmen} />
                    </div>
                    <div className='col4'>
                        <div className='font-26 fw-700'>Download Our Mobile App</div>
                        <div className='font-16 mt-3'>Introduced by your bank</div>
                    </div>
                    <div className='col4'>
                        <div className='align-center'>
                            <img src={googlePlay} className='mr-3' />
                            <img src={appleStore} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Duo;
