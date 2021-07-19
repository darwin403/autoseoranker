import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-3 mb-4 bg-primary text-white border-bottom">
      <div className="container d-flex flex-wrap justify-content-center ">
        <Link href="/">
          <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-light">
            <span className="fs-4">AutoSEORanker.com</span>
          </a>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="#faqs">
              <a className="nav-link text-light">FAQs</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="mailto:developer@studiohawk.com.au">
              <a className="nav-link text-light">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
