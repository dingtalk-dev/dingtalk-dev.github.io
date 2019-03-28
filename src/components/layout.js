/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, subtitle, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={title || data.site.siteMetadata.title}
          siteDescription={subtitle || data.site.siteMetadata.description} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 720,
            minHeight: 'calc(100vh - 20.3rem)',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main style={{ padding: '3rem 0' }}>{children}</main>
        </div>
        <footer>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2.8rem 1.45rem' }}>
            <div style={{ display: 'flex' }}>
              <div className="footer-col">
                <h1 style={{ fontSize: '1rem', margin: '0 0 0.7rem 0' }}>公司</h1>
                <a href="https://dingtalk.com">官网首页</a>
                <a href="https://tms.dingtalk.com/markets/dingtalk/download">产品下载</a>
                <a href="https://im.dingtalk.com">钉钉网页版</a>
                <a href="https://job.alibaba.com/zhaopin/positionList.htm?spm=a3140.8736650.2231772.14.7f153a1aMgRYNR&keyWord=JXU5NDg5JXU5NDg5&_input_charset=UTF-8">工作机会</a>
              </div>
              <div className="footer-col">
                <h1 style={{ fontSize: '1rem', margin: '0 0 0.7rem 0' }}>团队</h1>
                <a href="/">博客</a>
                <a href="https://github.com/dingtalk-dev">GitHub</a>
              </div>
            </div>
            <p style={{ color: '#7f8186', margin: 0 }}>
              © {new Date().getFullYear()}, Built with ❤️ by
              {` `}
              <a href="https://dingtalk.com">DingTalk</a> Team
            </p>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
