import React from "react"
import { Link } from "gatsby"
import Mailchimp from "react-mailchimp-form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import "./emaillist.css"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Ousseynou Diop"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `python`,
            `django`,
            `api`,
          ]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h2 style={{ marginTop: "0" }}>Hey people</h2>
        <p>A passionate software developer, trying to share his journey.</p>
        {/* <EmailListForm /> */}
        <Mailchimp
          action="https://tech.us20.list-manage.com/subscribe/post?u=3799ac916fde9c123fac76e1d&amp;id=e9328319b4"
          //Adding multiple fields:
          fields={[
            {
              name: "EMAIL",
              placeholder: "Your email address ",
              type: "email",
              required: true,
            },
          ]}
          // Change predetermined language
          messages={{
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "SUBSCRIBE!",
          }}
          // Add a personalized class
          className="EmailListForm"
        />
        <Link to="/blog/" style={{ textAlign: "center" }}>
          <Button marginTop="0rem">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
