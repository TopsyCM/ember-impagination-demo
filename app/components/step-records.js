import Ember from 'ember';

export default Ember.Component.extend({
  currentIndex: 0,
  step: 2,

  actions: {
    next() {
      console.log('next');
      this.set('currentIndex', this.get('currentIndex') + this.get('step') );
    },
    prev() {
      console.log('prev');
      this.set('currentIndex', this.get('currentIndex') - this.get('step') );
    }
  }
});
