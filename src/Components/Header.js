import React from "react";

function Header() {
  return (
    <React.Fragment>
      <>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h1>Avery's Organics</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#schedule"
                  >
                    Schedule
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#produce">
                    Produce
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </React.Fragment>
  );
}

export default Header;
