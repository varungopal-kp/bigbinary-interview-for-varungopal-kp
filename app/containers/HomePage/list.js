import React, { Component } from 'react';

export default class list extends Component {
  render() {
    return (
      <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No:</th>
              <th>Launched (UTC)</th>
              <th>Location</th>
              <th>Mission</th>
              <th>Orbit</th>
              <th>Launched Status</th>
              <th>Rocket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>23-2-2020</td>
              <td>India</td>
              <td>Appolo 2</td>
              <td>GEO</td>
              <td>success</td>
              <td>Fighter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>24-2-2020</td>
              <td>USA</td>
              <td>Appolo 3</td>
              <td>GEO</td>
              <td>success</td>
              <td>Bird</td>
            </tr>
            <tr>
              <td>3</td>
              <td>23-2-2020</td>
              <td>India</td>
              <td>Appolo 2</td>
              <td>GEO</td>
              <td>success</td>
              <td>Fighter</td>
            </tr>
            <tr>
              <td>4</td>
              <td>24-2-2020</td>
              <td>USA</td>
              <td>Appolo 3</td>
              <td>GEO</td>
              <td>success</td>
              <td>Bird</td>
            </tr>
            <tr>
              <td>5</td>
              <td>23-2-2020</td>
              <td>India</td>
              <td>Appolo 2</td>
              <td>GEO</td>
              <td>success</td>
              <td>Fighter</td>
            </tr>
            <tr>
              <td>6</td>
              <td>23-2-2020</td>
              <td>India</td>
              <td>Appolo 2</td>
              <td>GEO</td>
              <td>success</td>
              <td>Fighter</td>
            </tr>
            <tr>
              <td>7</td>
              <td>24-2-2020</td>
              <td>USA</td>
              <td>Appolo 3</td>
              <td>GEO</td>
              <td>success</td>
              <td>Bird</td>
            </tr>
            <tr>
              <td>8</td>
              <td>23-2-2020</td>
              <td>India</td>
              <td>Appolo 2</td>
              <td>GEO</td>
              <td>success</td>
              <td>Fighter</td>
            </tr>
          </tbody>
        </table>
        <nav className="pagination-container" aria-label="...">
          <ul className="pagination pagination-md">
            <li className="page-item">
              <a className="page-link" href="#">
                {'<'}
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                {'>'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
