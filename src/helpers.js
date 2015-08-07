export default {
  addClass: function (element, className) {
    if (!element) { return; }
    element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
  },

  removeClass: function(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(className, '');
  },

  scrollUp: function() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      var self = this;
      window.requestAnimationFrame(function() {self.scrollUp();});
      window.scrollTo(0, currentScroll - (currentScroll/5));
    }
  }
}
