import Layout from "../components/Layout";
import FAQs from "../components/FAQs";

import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [startVideo, setStartVideo] = useState(false);
  const router = useRouter();
  const website = router.query.website as string;
  const [windowDimensions, setWindowDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  // get window dimensions
  useEffect(() => {
    if (window) {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return (
    <Layout>
      {windowDimensions?.width && windowDimensions?.height && (
        <Confetti
          width={windowDimensions?.width}
          height={windowDimensions?.height}
          numberOfPieces={800}
          recycle={false}
        />
      )}
      <div className="container">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Congratulations!</h1>
            <p className="col-md-8 fs-4 lead">
              Your website{" "}
              <a href={website} target="new">
                {website}
              </a>{" "}
              now ranks <b>first</b> on Google! Check out a sample Google Search
              result for a keyword from your website{" "}
              <a
                target="_blank"
                href="https://bit.ly/3BkmqTq"
                onClick={(e) => {
                  // check if desktop since autoplay doesn't work on mobile
                  if (typeof window.orientation == "undefined") {
                    e.preventDefault();
                    setStartVideo(true);
                  }

                  setTimeout(() => {
                    setShowModal(true);
                  }, 2000);
                }}
              >
                here
              </a>
            </p>
          </div>
          {startVideo && (
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Rick rolled."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <FAQs />
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <>
          <Modal.Header closeButton>
            <Modal.Title>Sorry to pull a sly one on you!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Unfortunately real SEO takes time, but we have a whole series of
              free videos that can help you here:{" "}
              <a href="http://hawkacademy.co">HawkAcademy</a>
            </p>
          </Modal.Body>
        </>
      </Modal>
    </Layout>
  );
}
