import { FiFilm } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
export function Footer() {
    return (
        <div className="bg-indigo-700 mt-15">
            <div className="flex w-[1360px] text-white p-[40px] m-auto mt-6 justify-between">
                <div className="flex gap-2">

                    <div>
                        <div className="flex gap-1 items-center">
                            <FiFilm />
                            <p>Movie Z</p>
                        </div>

                        <p>© 2024 Movie Z. All Rights Reserved.</p>
                    </div>

                </div>
                <div className="flex gap-25">
                    <div>

                        <p>Contact Information</p>
                        <br />
                        <div className="flex items-center gap-3 mb-4">
                            <MdOutlineEmail />
                            <div>
                                <p>Email: </p>
                                <p>support@movieZ.com</p>
                            </div>
                            <br />
                        </div>
                        <div className="flex items-center gap-3">
                            <FiPhone />
                            <div>
                                <p>Phone: </p>
                                <p>+976 (11) 123-4567</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Follow us </p><br />
                        <p>Facebook Instagram Twitter Youtube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}