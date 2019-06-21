'use strict';
(function(){

    var GalleryItem = React.createClass({
        propTypes: {
            image: React.PropTypes.object.isRequired,
        },

        render: function() {
            return (
                React.createElement('div', {},
                    React.createElement('h2', {}, this.props.image.name),
                    React.createElement('img', {src: this.props.image.src})
                )
            )
        },
    });

    var imagesSet = {
        name: 'Kotek',
        src: 'http://imgur.com/n8OYCzR.png'
    };

    var element = React.createElement(GalleryItem, {image: imagesSet});
    ReactDOM.render(element, document.getElementById('app'));

    /*
    var movies = [
        {
            id: 1,
            title: 'Das Boot',
            desc: 'Very long movie (ca. 4 hrs) about German submarine during IIWW',
            poster: '../images/dasboot.jpg'
        },
        {
            id: 2,
            title: 'Terminator',
            desc: 'The movie about two humanoids fighting about the futer of human raca. Career jump for Arnold Schwarzenegger',
            poster: '../images/terminator.jpg'
        },
        {
            id: 3,
            title: 'Twin Peaks (TV series)',
            desc: 'The portrait of north welathy states small towns societies shown on a patter of mysterius and brutal murder of a youn girl',
            poster: '../images/twinpeaks.jpg'
        },
        {
            id: 4,
            title: 'Platoon',
            desc: 'One of the major anti-war movies illustrating high-level of degenration hitting human minds',
            poster: '../images/platoon.jpg'
        }
    ];

    var moviesElements = movies.map(function(movie) {
        return React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('img', {src:movie.poster, alt:'movie poster', width:'200'})
          );
      });

    var element =
        React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        );

    ReactDOM.render(element, document.getElementById('app'));
    */

})();