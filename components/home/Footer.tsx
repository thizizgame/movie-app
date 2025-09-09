import { FiFilm } from "react-icons/fi";
export function Footer() {
    return (
        <div className="bg-indigo-700">
            <div className="flex w-[1360px] text-white p-[40px] m-auto mt-6 justify-between">
                <div className="flex gap-2 items-center">

                    <div>
                        <div className="flex gap-1 items-center">
                            <FiFilm />
                            <p>Movie Z</p>
                        </div>

                        <p>© 2024 Movie Z. All Rights Reserved.</p>
                    </div>

                </div>
                <div className="flex gap-5">
                    <div>
                        <p>Contact Information</p>
                        <p>Email: support@movieZ.com</p>
                        <p>Phone: +976 (11) 123-4567</p>
                    </div>
                    <div>
                        <p>Follow us </p>
                        <p>Facebook Instagram Twitter Youtube</p>
                    </div>
                </div>
            </div>
        </div>

    )
}