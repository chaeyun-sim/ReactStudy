import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1>The Home Page!</h1>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>  {/* replace : 새 페이지로 */}
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    )
};

export default HomePage;