import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    twitter: DS.attr('string'),
    'created-at': DS.attr('date'),
    type: DS.attr('string')
});