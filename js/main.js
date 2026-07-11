document.addEventListener('DOMContentLoaded', function () {
  var diagram = document.getElementById('bridgeDiagram');
  if (diagram) {
    var posts = diagram.querySelectorAll('.bpost');
    var reveal = function () {
      diagram.classList.add('reveal');
      posts.forEach(function (p) { p.classList.add('reveal'); });
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { reveal(); observer.disconnect(); }
      });
    }, { threshold: 0.15 });
    observer.observe(diagram);
    // Safety net: if the observer never fires (e.g. element already filled the
    // viewport before it could register), reveal anyway after a short delay.
    setTimeout(reveal, 2500);
  }

  var cue = document.querySelector('[data-scroll-target]');
  if (cue) {
    cue.addEventListener('click', function () {
      var target = document.getElementById(cue.getAttribute('data-scroll-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  var flow = document.getElementById('approachFlow');
  if (flow) {
    var steps = flow.querySelectorAll('.flow-step');
    var revealFlow = function () {
      flow.classList.add('reveal');
      steps.forEach(function (s, i) {
        setTimeout(function () { s.classList.add('reveal'); }, i * 200);
      });
    };
    var flowObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { revealFlow(); flowObserver.disconnect(); }
      });
    }, { threshold: 0.15 });
    flowObserver.observe(flow);
    setTimeout(revealFlow, 2500);
  }
});
