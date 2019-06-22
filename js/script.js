'use strict';
(function(){

    var movieSet = [
        {
            id: 1,
            ttl: 'Das Boot',
            desc: 'Very long movie (ca. 4 hrs) about German submarine during IIWW',
            poster: 'https://m.media-amazon.com/images/M/MV5BNGRmOWY0MGUtNTVhMy00NzRlLTljNDAtNTBiNTRlODgxNmY2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg'
        },
        {
            id: 2,
            ttl: 'Terminator',
            desc: 'The movie about two humanoids fighting about the futer of human raca. Career jump for Arnold Schwarzenegger',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
        },
        {
            id: 3,
            ttl: 'Twin Peaks (TV series)',
            desc: 'The portrait of north welathy states small towns societies shown on a patter of mysterius and brutal murder of a youn girl',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_SY1000_CR0,0,781,1000_AL_.jpg'
        },
        {
            id: 4,
            ttl: 'Platoon',
            desc: 'One of the major anti-war movies illustrating high-level of degenration hitting human minds',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2Y1NTQyNWYtNDViNy00ZWRhLTk3MTMtOTI3ZGQ5MDFiNWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,646,1000_AL_.jpg'
        }
    ];

    var MoviesList = React.createClass({
        render: function () {
            var listOfMovies = movieSet.map(function (movie) {
                return React.createElement(Movie, {key: movie.id, movie: movie});
            });
            return (
                React.createElement('div', {},
                    React.createElement('h1', {}, 'Lista filmów'),
                    React.createElement('div', {}, listOfMovies))
            );
        }
    });

    var Movie = React.createClass({
        propTypes: {
            movie: React.PropTypes.object.isRequired,
        },
        render: function () {
            return (
                React.createElement('div', {},
                    React.createElement(MovieTitle, {title: this.props.movie.ttl}),
                    React.createElement(MovieDescription, {description: this.props.movie.desc}),
                    React.createElement(MovieImg, {img: this.props.movie.poster})
                )
            )
        },
    });

    var MovieTitle = React.createClass({
        propTypes: {
            title: React.PropTypes.string.isRequired,
        },
        render: function () {
            return (React.createElement('h2', {}, this.props.title))
        },
    });

    var MovieDescription = React.createClass({
        propTypes: {
            description: React.PropTypes.string.isRequired,
        },
        render: function () {
            return (React.createElement('p', {}, this.props.description))
        },
    });

    var MovieImg = React.createClass({
        propTypes: {
            img: React.PropTypes.string.isRequired,
        },
        render: function () {
            return (React.createElement('img', {src: this.props.img, alt:'movie poster', width:'200'}))
        }
    });

    var list = React.createElement(MoviesList);
    ReactDOM.render(list, document.getElementById('app'));

})();