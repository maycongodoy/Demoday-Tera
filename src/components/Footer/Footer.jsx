import React from "react";

function Footer () {
    return (
        <footer className="bg-theme ">
            <div className=" flex justify-center gap-8 py-8 px-6 md:grid-cols-4 sm:px-0">
                <div className="px-14 ">
                    <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-400">Company</h2>
                    <ul className=" text-gray-100 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="px-14 sm:hidden">
                    <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-400">Help center</h2>
                    <ul className="text-gray-100 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="px-14">
                    <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-400">Legal</h2>
                    <ul class="text-gray-100 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                <div className="px-14 md:hidden">
                    <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-gray-400">Download</h2>
                    <ul class="text-gray-100 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">iOS</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Android</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Windows</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">MacOS</a>
                        </li>
                    </ul>
                </div>
            </div>
           
        </footer>
    )
}      

export default Footer
