import { Card } from "./Card";

export const CardSection = (props) => {
  return (
    <div className="card-container">
      {props.pdf && (
        <div className="column-47i">
          <h2>Convert from PDF</h2>
          {props.all && (
            <a className="section-gs6" href="/movies/">
              All
              <svg
                className=""
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="ChevronRightIcon"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
            </a>
          )}
        </div>
      )}
      <div className="card-section">
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
    </div>
  );
};
