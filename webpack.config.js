
const webpack = require("webpack");
module.exports = {
    output: {
        filename: "entry.js"
    },
    mode: "development",
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ["popper.js","default"]
          })
    ]
}