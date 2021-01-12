// Imports
import plugin0 from '__react_static_root__/node_modules/react-static-plugin-google-tag-manager/dist/browser.api.js'
import plugin1 from '__react_static_root__/node_modules/react-static-plugin-reach-router/browser.api.js'

// Plugins
const plugins = [{
        location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
        plugins: [],
        hooks: {}
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-google-tag-manager/dist",
        plugins: [],
        hooks: plugin0({"id":"GTM-K82WJHL","debug":true})
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
        plugins: [],
        hooks: plugin1({})
      },
{
        location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
        plugins: [],
        hooks: {}
      },
{
        location: "__react_static_root__/",
        plugins: [],
        hooks: {}
      }]

// Export em!
export default plugins