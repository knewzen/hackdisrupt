'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Page from './page'
import Row from './../ui/row'
import Logo from './../ui/logo'
import { colors, typography, phone } from './../theme'

const Poll = ({ title, description, options }) => {
  const choices = options.map(({ vote, result, alt }) => {
    return (
      <li key={alt}>
        <a href={vote}>
          <img src={result} alt={alt} />
        </a>

        <style jsx>{`
          li {
            flex-basis: 48%;
            margin-bottom: 30px;
            border: 1px solid #eaeaea;
            transition: 0.2s;
          }

          li:hover {
            border: 1px solid #ccc;
          }

          a {
            display: block;
            padding: 15px 10px 10px;
          }

          img {
            max-width: 100%;
          }

          @media ${phone} {
            li {
              flex-basis: 100%;
            }

            img {
              width: 100%;
            }
          }
        `}</style>
      </li>
    )
  })

  return (
    <Page>
      <Row>
        <header>
          <div className="title">
            <Link href="/">
              <span>
                <Logo size="200px" />
              </span>
            </Link>

            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </header>

        <section>
          <ul>{choices}</ul>
        </section>

        <footer>
          <p>
            powered by{' '}
            <a className="link" href="https://github.com/apex/gh-polls">
              apex/gh-polls
            </a>.
          </p>
        </footer>
      </Row>

      <style jsx>{`
        span {
          cursor: pointer;
        }

        header {
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          max-width: 500px;
        }

        h2 {
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          font-size: ${typography.f16};
          margin-top: 100px;
        }

        p {
          color: ${colors.black};
          font-size: 14px;
          font-weight: 300;
          margin-top: 10px;
          text-transform: lowercase;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        footer {
          padding-top: 50px;
          padding-bottom: 50px;
          text-align: center;
        }

        footer p {
          font-weight: ${typography.regular};
        }

        a {
          padding: 0;
          display: inline-block;
          color: #777;
          font-weight: ${typography.medium};
        }

        a:hover {
          text-decoration: underline;
          color: ${colors.black};
        }
      `}</style>
    </Page>
  )
}

Poll.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  description: PropTypes.string
}

export default Poll