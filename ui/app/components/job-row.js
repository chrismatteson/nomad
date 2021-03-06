import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  classNames: ['job-row', 'is-interactive'],

  job: null,

  onClick() {},

  click(event) {
    this.get('onClick')(event);
  },

  didReceiveAttrs() {
    // Reload the job in order to get detail information
    const job = this.get('job');
    if (job) {
      job.reload();
    }
  },
});
