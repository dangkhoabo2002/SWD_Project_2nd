import React from "react";

export default function tableReservation() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-md-12 title-block">
                <h1 className="main-title">Manage Table Reservation</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <form className="col-md-12 form-inline job-seeker-frm">
                      <div className="form-group row col-md-12 search-input">
                        <div className="col-md-12">
                          <div
                            className="input-group"
                            style={{ width: "100%" }}
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                            />

                            <div className="input-group-append">
                              <button
                                type="submit"
                                className="btn btn-default"
                                style={{ minWidth: "50px" }}
                              >
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body table-responsive">
                    <table className="table table-hover text-nowrap job-seeker-tbl">
                      <thead>
                        <tr>
                          <th>Reservation ID</th>
                          <th>Customer ID</th>
                          <th>Restaurant ID</th>
                          <th>Time</th>
                          <th>Note</th>
                          <th>Guest Size</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>yyyy/mm/dd</td>
                          <td>3 persons, 2 kids,...</td>
                          <td>Guest</td>
                          <td>
                            <button className="active-btn">
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="active-btn">
                              <i className="far fa-file-alt"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2</td>
                          <td>2</td>
                          <td>yyyy/mm/dd</td>
                          <td>3 persons, 2 kids,...</td>
                          <td>Guest</td>
                          <td>
                            <button className="active-btn">
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="active-btn">
                              <i className="far fa-file-alt"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="card-footer">
                    <div className="pagination-block">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            <i className="fas fa-fast-backward"></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            <i className="fas fa-angle-double-left"></i>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#!">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            25
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            <i className="fas fa-angle-double-right"></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#!">
                            <i className="fas fa-fast-forward"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
