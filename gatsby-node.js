/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const get = require("lodash/get");
const fs = require("fs");
const iptc = require("node-iptc");
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === "ImageSharp") {
        const fileNode = getNode(node.parent)

        const fileContent = fs.readFileSync(fileNode.absolutePath);
        const iptcData = iptc(fileContent);

        const title = get(iptcData, ["caption"], "");

        console.log("****  iptc caption of " + fileNode.absolutePath, title);
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

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /hammerjs/,
                        use: ["null-loader"]
                    }
                ]
            }
        });
    }
};
