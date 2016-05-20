import Ember from 'ember';

export default Ember.Controller.extend({
  emberCollection: false,


  initialReadOffset: 0,
  loadHorizon: 10,
  unloadHorizon: 40,
  pageSize: 10,

  actions: {
    observeDataset( dataset, datasetActions ) {
      console.log('datasetstate updated');
      this.set('dataset', dataset);
      this.set('datasetActions', datasetActions);
    }
  },

});
