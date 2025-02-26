import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
                <div
                className="page-header__bg"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1506290690282-661fbd742be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                }}
                ></div>
                <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <div className="thm-breadcrumb__box">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                        <li>
                        <span className="icon-angle-left" />
                        </li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            {/*Page Header End*/}

        </>
    )
}
