
import wallet from '../../../assets/images/wallet.png'
import bank from '../../../assets/images/bank.png'
import donate from '../../../assets/images/donate.png'
import shield from '../../../assets/images/shield.png'
import gold from '../../../assets/images/gold.png'
import cart from '../../../assets/images/cart.png'
import { NavLink } from 'react-router-dom'
import arrow from '../../../assets/images/arrow.png'
import companyPage from '../../../assets/images/company-page.png'
import './company.css';
import companyImg from '../../../assets/images/company-img.png'
import ourvision from '../../../assets/images/icons/Scan Pay.svg'
import ourMision from '../../../assets/images/icons/Fund Transfer.svg'
import access from '../../../assets/images/access.svg'
import mastercard from '../../../assets/images/mastercard.svg'
import up from '../../../assets/images/UP.svg'


function Company() {
    return (
        <div className="">
            <section className="bg-section-first p-relative">
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
                                <img src={wallet}  className="mr-2" />
                                Payment
                            </li>
                            <li>
                                <img src={bank}  className="mr-2" />
                                Banking
                            </li>
                            <li>
                                <img src={donate}  className="mr-2" />
                                Lending
                            </li>
                            <li>
                                <img src={shield}  className="mr-2" />
                                Insurance
                            </li>
                            <li>
                                <img src={gold}  className="mr-2" />
                                Investment
                            </li>
                            <li>
                                <img src={cart}  className="mr-2" />
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
                    <div className='row'>
                        <div className='col-6'>
                            <div className='txt-white'>
                                MoneyLink introduces innovative products  &
                                solutions that promote Financial Inclusion across emerging economies towards
                                transition from cash to Digital Payments & making accessibility to Credit
                                easy for everyone
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src={companyPage}  />
                        </div>

                    </div>
                </section>

                <div className="arrow">
                    <img src={arrow}  />
                </div>
            </section>

            <section>
                <div className='row mt-5'>
                    <div className='col-6 centerdiv flex-col'>
                        <section className='w-50'>
                            <img src={ourvision} />
                            <div className="text-left-border my-3">Our Vision</div>
                            <div className='blue'>Our Vision is to offer innovative products and services in collaboration
                                with other players in financial ecosystem, transforming lives and towards
                                contributing to sustainable living throughout emerging economies</div>
                        </section>

                        <section className='w-50 mt-5'>
                            <img src={ourMision} />
                            <div className="text-left-border my-3">Our Mission</div>
                            <div className='blue'>Our Mission is to introduce innovative products & solutions
                                that promote Financial Inclusion across emerging economies towards transition from
                                cash to digital payments and making accessibility to Credit easy for everyone</div>
                        </section>
                    </div>
                    <div className='col-6'>
                        <img src={companyImg}  />
                    </div>
                </div>
            </section>

            <section className='my5'>
                <div className='row centerdiv'>
                    <div className='col-3'>
                        <div className='white-card-shadow mr-3'>
                            <div className='align-center'>
                                <img src={access}  />
                                <div>Issuer Partners</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='white-card-shadow mx-3'>
                            <div className='align-center'>
                                <img src={mastercard}  />
                                <div className='ml-3'>Issuer Partners</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='white-card-shadow ml-3'>
                            <div className='align-center'>
                                <img src={up}  />
                                <div className='ml-3'>Processing Partners</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Company;
