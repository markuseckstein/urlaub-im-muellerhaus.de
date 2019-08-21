/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const get = require("lodash/get");
const fs = require("fs");
const iptc = require("node-iptc");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === "ImageSharp") {
        const fileNode = getNode(node.parent);

        const fileContent = fs.readFileSync(fileNode.absolutePath);
        const iptcData = iptc(fileContent);

        console.log(
            "**** iptc data of " + fileNode.absolutePath + ":\n   ",
            iptcData
        );
        const title = get(iptcData, ["caption"], "");

        createNodeField({
            node,
            name: "file",
            value: {
                path: fileNode.absolutePath.toString()
            }
        });
        createNodeField({
            node,
            name: "exif",
            value: {
                title
            }
        });
    }
};
