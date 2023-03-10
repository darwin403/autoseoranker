export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="d-lg-flex justify-content-lg-between">
          <div className="text-muted mb-3 mb-md-0">
            &#169; Copyright {new Date().getFullYear()}. All rights reserved.
          </div>
          <div className="text-muted">
            This isn&apos;t a scam, it&apos;s just a meme website. Made by{" "}
            <a href="https://studiohawk.com.au">StudioHawk</a>, with love.
          </div>
        </div>
      </div>
    </footer>
  );
}
