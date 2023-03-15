import { Link } from "react-router-dom"

export function EmailConfirm () {

    return (
        <div className='mt-24'>
            <div>
                Your Email has been sent.
            </div>
            <Link to='/'>Return to main page</Link>
        </div>
    )
}