/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const get = require("lodash/get")
const fs = require("fs")
const iptc = require("node-iptc")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "ImageSharp") {
    const fileNode = getNode(node.parent)

    const fileContent = fs.readFileSync(fileNode.absolutePath)
    const iptcData = iptc(fileContent)

    const title = get(iptcData, ["caption"], "")
    if (!title) {
      console.log(
        "*** iptc data of " + fileNode.absolutePath + ":\n     ",
        iptcData,
      )
    }

    createNodeField({
      node,
      name: "file",
      value: {
        path: fileNode.absolutePath.toString(),
      },
    })
    createNodeField({
      node,
      name: "exif",
      value: {
        title,
      },
    })
  }
}
