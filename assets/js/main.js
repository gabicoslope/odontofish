/* OdontoFish — interações mínimas, sem dependências */
(function () {
  'use strict';

  /* ---- menu do celular ---- */
  var toggle = document.querySelector('.hdr__toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!aberto));
      toggle.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
      nav.dataset.aberto = String(!aberto);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
        nav.dataset.aberto = 'false';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.dataset.aberto === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.dataset.aberto = 'false';
        toggle.focus();
      }
    });
  }

  /* ---- flutuantes: aparecem depois do hero ---- */
  var topoBtn = document.querySelector('.topo-btn');
  var waFloat = document.querySelector('.wa-float');
  var esperando = false;

  var ctaVisivel = false; // CTA grande do WhatsApp já está na tela?

  function atualizar() {
    esperando = false;
    var passou = window.scrollY > window.innerHeight * 0.7;
    if (topoBtn) topoBtn.hidden = !passou;
    if (waFloat) waFloat.hidden = !passou || ctaVisivel;
  }
  function agendar() {
    if (!esperando) { esperando = true; requestAnimationFrame(atualizar); }
  }
  window.addEventListener('scroll', agendar, { passive: true });

  // dobra o flutuante quando a seção de localização (com CTA próprio) aparece
  var alvoCta = document.getElementById('localizacao');
  if (alvoCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      ctaVisivel = entradas[0].isIntersecting;
      atualizar();
    }, { threshold: 0.35 }).observe(alvoCta);
  }

  atualizar();

  if (topoBtn) {
    topoBtn.addEventListener('click', function () {
      var suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
      var alvo = document.querySelector('.brand');
      if (alvo) alvo.focus({ preventScroll: true });
    });
  }

  /* ---- mapa sob demanda: nada de iframe no carregamento inicial ---- */
  var mapa = document.getElementById('mapa');
  if (mapa) {
    var btn = mapa.querySelector('.mapa__btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var frame = document.createElement('iframe');
        frame.src = mapa.dataset.src;
        frame.title = 'Mapa com a localização do consultório OdontoFish';
        frame.loading = 'lazy';
        frame.referrerPolicy = 'no-referrer-when-downgrade';
        frame.allowFullscreen = true;
        mapa.replaceChildren(frame);
      });
    }
  }

  /* ---- ano do rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
