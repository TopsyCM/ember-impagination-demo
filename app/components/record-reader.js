import Ember from 'ember';

export default Ember.Component.extend({
  currentIndex: 0,
  records: null,

  getColor( index ) {
    let record = this.get('records').objectAt( index );
    if ( record && record.isResolved ) {
      return record.content.hsl;
    } else {
      return null;
    }
  },

  recordA: Ember.computed('indexA', 'records', {
    get() {
      console.log('recordA get', this.get('indexA'));
      return this.getColor( this.get('indexA') );
    }
  }),
  recordB: Ember.computed('indexB', 'records', {
    get() {
      console.log('recordB get', this.get('indexB'));
      return this.getColor( this.get('indexB') );
    }
  }),

  indexA: Ember.computed.readOnly('currentIndex'),
  indexB: Ember.computed('currentIndex', {
    get() {
      let page = this.get('currentIndex');
      if ( (page % 2) === 0 ) {
          return page - 1;
      } else {
          return page;
      }
    }
  }),


});
