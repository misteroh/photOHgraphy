import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            categories: [
                {
                    name: 'Action',
                    background: '/assets/action1.jpg'
                },
                {
                    name: 'Music',
                    background: '/assets/music1.jpg'
                },
                {
                    name: 'People',
                    background: '/assets/people1.jpg'
                },
                {
                    name: 'Landscape',
                    background: '/assets/landscape1.jpg'
                }
            ]
        }
    }
});
