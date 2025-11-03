import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: radial-gradient(circle at center, #1e1e1e 0%, #121212 100%);
        color: #fff;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        overflow: hidden;
        padding: 1rem;
      }

      h1 {
        font-size: 2.8rem;
        margin-bottom: 0.5rem;
        color: #ff1744;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 0 0 10px rgba(255, 23, 68, 0.6);
      }

      p {
        font-size: 1.2rem;
        color: #ccc;
        margin-bottom: 2rem;
      }

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      a {
        display: inline-block;
        background: linear-gradient(135deg, #3f51b5, #1a237e);
        color: #fff;
        text-decoration: none;
        padding: 0.8rem 1.6rem;
        border-radius: 10px;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all 0.25s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }

      a:hover {
        transform: translateY(-3px) scale(1.05);
        background: linear-gradient(135deg, #5c6bc0, #303f9f);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
      }

      a:active {
        transform: translateY(0);
      }

      @media (max-width: 600px) {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1rem;
        }
        a {
          width: 100%;
          text-align: center;
        }
      }

    `
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
