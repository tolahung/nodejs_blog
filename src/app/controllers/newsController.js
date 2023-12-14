class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/sontung
    show(req, res) {
        res.render('newSontung');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('newSontung');
    }
}

module.exports = new NewsController();
