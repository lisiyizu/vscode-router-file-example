const virtualModuleCwd = require("virtual-module-cwd");
// vue.config.js
module.exports = {
    configureWebpack: config => {
        config.plugins.push(virtualModuleCwd);
    }
};
