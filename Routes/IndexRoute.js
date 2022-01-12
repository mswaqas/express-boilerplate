const IndexController = require('../Controllers/IndexController')

module.exports = function (app, validators) {
    /**
     * static URLS to be on top..
     */
    app.get('/', IndexController.index)
    app.post('/', validators.demoValidator, IndexController.indexPost)

}