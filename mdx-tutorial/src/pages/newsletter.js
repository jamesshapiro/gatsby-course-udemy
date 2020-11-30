import React, { useLayoutEffect } from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <useLayoutEffect>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write every few weeks</h4>
          <form className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </useLayoutEffect>
  )
}

export default NewsLetter
