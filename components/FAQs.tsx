import { Accordion } from "react-bootstrap";

export default function FAQs() {
  return (
    <div
      className="container px-4 py-5"
      id="faqs"
      style={{ maxWidth: "720px" }}
    >
      <h2 className="pb-2 text-center mb-5">FAQs</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Is getting first on Google for my keyword really that easy?
          </Accordion.Header>
          <Accordion.Body>
            <b>Absolutely!</b> Google spends billions of dollars on its search
            and a million other companies depend on it to get seen on the web.
            Therefore, it is not a surprise a simple and yet-legal method always
            exists while all other Fortune 500 companies have missed out.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are SEO agencies unreliable?</Accordion.Header>
          <Accordion.Body>
            <strong>Ranking on google is easy stuff.</strong> If anyone says
            otherwise they are probably lying to you. With this tool you the
            first hand experience how easy it is to get ranked on Google!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
