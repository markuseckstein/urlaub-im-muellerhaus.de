/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const get = require("lodash/get");
const fs = require("fs");
const iptc = require("node-iptc");

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === "ImageSharp" && node.id.includes("img/")) {
        const absolutePath = node.id.split(" ")[0];
        const fileContent = fs.readFileSync(absolutePath);
        const iptcData = iptc(fileContent);

        const title = get(iptcData, ["caption"], "");

        console.log("****  iptc caption of " + node.id, title);
        createNodeField({
            node,
            name: "exif",
            value: {
                title
            }
        });
    }
};

exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /hammerjs/,
            loader: "null-loader"
        });
    }
};
