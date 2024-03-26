import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '/logo.svg'

const MyFooter = () => {
    return (
        <Footer container className='bg-[#263238] text-white'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-8'>
                        <a href="" className="text-2xl font-semibold flex  items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" viewBox="0 0 44 30" fill="none">
                                <path d="M23.2259 16.2379L16.561 27.6527L9.89611 16.2379H23.2259ZM25.0114 15.2177H8.10339L16.561 29.6717L25.0114 15.2177Z" fill="white" />
                                <path d="M34.8137 2.0404L41.4786 13.4552H28.1488L34.8137 2.0404ZM34.8137 0L26.3561 14.454H43.2713L34.8137 0Z" fill="white" />
                                <path d="M0 0L7.09143 12.7846L14.8406 0.321025L0 0Z" fill="#4CAF4F" />
                                <path d="M16.5612 1.11987L23.9997 13.8332H9.1084L16.5612 1.11987Z" fill="#4CAF4F" />
                                <path d="M25.9152 16.6089L33.3608 29.6718H18.1154L25.6838 16.6089H25.9152Z" fill="#4CAF4F" />
                                <path d="M27.5271 15.8169L34.8137 28.68L42.2014 15.8169H27.5271Z" fill="#4CAF4F" />
                            </svg><span className="text-white">NEXCENT</span>
                        </a>
                        <div>
                            <p className='mb-1'>Copyright © 2020 Nexcent ltd.</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Designed by Erfan Heshmati™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default MyFooter;