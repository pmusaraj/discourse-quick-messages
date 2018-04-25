import { observes } from 'ember-addons/ember-computed-decorators';
import MountWidget from 'discourse/components/mount-widget';

export default MountWidget.extend({
  widget: 'docked-post',

  @observes('post.cooked')
  _rerender() {
    this.queueRerender();
  },

  buildArgs() {
    return {
      post: this.get('post')
    };
  }
});
