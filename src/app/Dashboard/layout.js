import Login from "./Login/page"
import Signup from "./Signup/page"

export default function AdminLayout({children}){
    return(
        <section>
            {children}
        </section>
    )
}