class PostController {
    show(req, res, next) {
        res.render('post/detail')
    }

    create(req, res, next) {
        res.render('post/create')
    }

    store(req, res, next) {
    }

    update(req, res, next) {
        res.render('post/update')
    }
}

module.exports = new PostController