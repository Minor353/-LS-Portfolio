module.exports = function(){
    const WIN = window;
    const DOC = document;
    const $articles = $('.blog__article-item'); // статьи справа
    const articles = $articles.toArray(); // []
    const $articlesList = $('#blog__article-list'); // ul со списком статей слева
    const $articleTitles = $('#blog__article-titles'); // aside
    let activeArticleId = null;

    function getCoords(elem) {
        const box = elem.getBoundingClientRect(); // {top: 123, left: 123}

        return {
            top: box.top + WIN.pageYOffset,
            left: box.left + WIN.pageXOffset
        };
    }

    function setArticleActive() {
        function setActive(artcl) {
            if (artcl.dataset.idtitle !== activeArticleId) {
                $('.blog__title-item').removeClass('blog__title-item--active');
                $(`#${artcl.dataset.idtitle}`).addClass('blog__title-item--active');
                activeArticleId = artcl.dataset.idtitle;
            }
        }

        if (WIN.pageYOffset < getCoords(articles[0]).top) {
            setActive(articles[0]);
        }
        else if (WIN.pageYOffset + WIN.innerHeight === DOC.body.offsetHeight) {
            setActive(articles[articles.length - 1]);
        }
        else {
            articles.forEach((article) => {
                const elemTop = getCoords(article).top;
                if (WIN.pageYOffset > elemTop - 150) {
                    setActive(article);
                }
            });
        }
    }

    function setArticleChords() {
        // в elemChords получаем объект с координатами aside
        const elemChords = getCoords($articleTitles[0]);

        if (WIN.pageYOffset >= elemChords.top - 30) {

            $articlesList.css({
                'position': 'fixed',
                'top': 30 + 'px',
                // 'left': elemChords.left + 'px'
            })
        }
        else {
            $articlesList.css({
                'position': 'static'
            })
        }
    }

    if ($articlesList.length && $articles.length) {
        $articlesList.css({
            'width': $articlesList.outerWidth()
        });

        // выполниться только тогда когда будет действия скроллинг
        $(WIN).scroll(() => {
            setArticleChords();
            setArticleActive();
        });

        // выполниться при загрузке кода
        setArticleChords();
        setArticleActive();

        $(WIN).resize(() => {
            $articlesList.css({
                'width': $articlesList.outerWidth()
            });
        });

    }
};