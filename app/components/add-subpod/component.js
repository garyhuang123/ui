import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  model: null,
  currentController: null,
  label: 'Add',

  classNames: ['btn', 'btn-primary', 'add-to-pod'],

  click: function() {
    this.sendAction();
  }
});
