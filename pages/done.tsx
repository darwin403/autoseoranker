import Layout from "../components/Layout";
import FAQs from "../components/FAQs";

import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
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
              <a href="https://bit.ly/3BkmqTq">here</a>
            </p>
          </div>
        </div>
      </div>
      <FAQs />
    </Layout>
  );
}
