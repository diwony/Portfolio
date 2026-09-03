(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Project cards + detail modal ---------- */
  var PROJECTS = [
    {
      num: '01', tag: 'VIDEO PROJECT', title: '영상 프로젝트 01',
      period: '2주', contribution: '100%(개인)',
      stack: ['Premiere', 'After Effects', 'Nano Banana', 'Gemini', 'Suno'],
      overview: "CJ대한통운을 '배송' 중심 이미지에서 첨단기술 기반 '물류 디자인 기업'으로 리브랜딩하기 위한 숏폼 광고 영상 기획",
      problems: [
        '배송 위주의 전통적 이미지 → AI·로봇 등 첨단기술을 시각화해 기술 신뢰도 있는 브랜드로 인식 전환',
        '10일이라는 짧은 제작 기간을 AI 툴 활용(이미지/영상/음성 생성)으로 기획~편집 전 과정을 효율화하여 해결',
        '다수 사운드 레이어 속 내레이션 명료도 저하 문제를 배경음 자동 감쇠 처리로 해결'
      ],
      poster: './assets/project-01-poster.png',
      video: './assets/project-01.mp4',
      links: [
        { label: 'GitHub View', href: '#' },
        { label: '기획서 View', href: '#' },
        { label: '영상 보기', href: 'https://drive.google.com/file/d/1E7H-bXvBvGZLOeGdQftnWEwpQyWTVkxz/view?usp=sharing' }
      ]
    },
    {
      num: '02', tag: 'VIDEO PROJECT', title: '영상 프로젝트 02',
      period: '기간을 입력하세요', contribution: '기여도를 입력하세요',
      stack: ['STACK 01', 'STACK 02', 'STACK 03'],
      overview: '프로젝트의 목표와 핵심 내용을 입력하세요.',
      problems: ['문제 상황과 해결 방식을 입력하세요.'],
      poster: null,
      links: [{ label: 'GitHub View', href: '#' }, { label: '기획서 View', href: '#' }]
    },
    {
      num: '03', tag: 'WEB RENEWAL', title: '홈페이지 리뉴얼 01',
      period: '기간을 입력하세요', contribution: '기여도를 입력하세요',
      stack: ['STACK 01', 'STACK 02', 'STACK 03'],
      overview: '프로젝트의 목표와 핵심 내용을 입력하세요.',
      problems: ['문제 상황과 해결 방식을 입력하세요.'],
      poster: null,
      links: [{ label: 'GitHub View', href: '#' }, { label: '기획서 View', href: '#' }]
    },
    {
      num: '04', tag: 'WEB RENEWAL', title: '홈페이지 리뉴얼 02',
      period: '기간을 입력하세요', contribution: '기여도를 입력하세요',
      stack: ['STACK 01', 'STACK 02', 'STACK 03'],
      overview: '프로젝트의 목표와 핵심 내용을 입력하세요.',
      problems: ['문제 상황과 해결 방식을 입력하세요.'],
      poster: null,
      links: [{ label: 'GitHub View', href: '#' }, { label: '기획서 View', href: '#' }]
    },
    {
      num: '05', tag: 'PERSONAL PROJECT', title: '개인 프로젝트 (이름 미정)',
      period: '기간을 입력하세요', contribution: '기여도를 입력하세요',
      stack: ['STACK 01', 'STACK 02', 'STACK 03'],
      overview: '프로젝트의 목표와 핵심 내용을 입력하세요.',
      problems: ['문제 상황과 해결 방식을 입력하세요.'],
      poster: null,
      links: [{ label: 'GitHub View', href: '#' }, { label: '기획서 View', href: '#' }]
    }
  ];

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderProjectCards() {
    var list = document.querySelector('.project-list');
    if (!list) return;
    list.innerHTML = PROJECTS.map(function (p, i) {
      var media = p.poster
        ? '<img class="project-card__thumb" src="' + p.poster + '" alt="' + escapeHtml(p.title) + ' 썸네일" loading="lazy">'
        : '<div class="project-card__thumb project-card__thumb--empty">PROJECT IMAGE REPLACE HERE</div>';
      return '<li class="card" style="--index:' + (i + 1) + '">' +
          '<article class="card__content project-card reveal" data-project-index="' + i + '">' +
            '<div class="project-card__media">' + media + '</div>' +
            '<div class="project-card__face">' +
              '<div class="project-card__face-head"><span class="project-card__num">' + p.num + '</span><span class="project-card__tag">' + escapeHtml(p.tag) + '</span></div>' +
              '<h3 class="project-card__title">' + escapeHtml(p.title) + '</h3>' +
              '<div class="project-card__face-meta">' +
                '<span class="project-card__period">제작기간 · ' + escapeHtml(p.period) + '</span>' +
                '<button class="project-card__detail-btn" type="button">자세히 보기<span aria-hidden="true">→</span></button>' +
              '</div>' +
            '</div>' +
          '</article>' +
        '</li>';
    }).join('');
  }

  function openProjectModal(index) {
    var p = PROJECTS[index];
    var modal = document.getElementById('projectModal');
    if (!modal || !p) return;

    modal.querySelector('.project-modal__eyebrow').textContent = p.num + ' · ' + p.tag;
    modal.querySelector('.project-modal__title').textContent = p.title;
    modal.querySelector('[data-field="period"]').textContent = p.period;
    modal.querySelector('[data-field="contribution"]').textContent = p.contribution;
    modal.querySelector('[data-field="overview"]').textContent = p.overview;

    modal.querySelector('[data-field="problems"]').innerHTML = p.problems.map(function (t) {
      return '<li>' + escapeHtml(t) + '</li>';
    }).join('');

    modal.querySelector('[data-field="stack"]').innerHTML = p.stack.map(function (s) {
      return '<span class="project-modal__stack-tag">' + escapeHtml(s) + '</span>';
    }).join('');

    var linksWrap = modal.querySelector('.project-modal__links');
    linksWrap.innerHTML = p.links.map(function (l) {
      var isActive = l.href && l.href !== '#';
      return '<a class="project-modal__link-btn' + (isActive ? ' is-active' : '') + '" href="' + l.href + '"' +
        (isActive ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + escapeHtml(l.label) + '</a>';
    }).join('');
    /* modal link buttons are rebuilt on every open, so (re)bind the fill here */
    linksWrap.querySelectorAll('.project-modal__link-btn').forEach(bindCursorFill);

    var mediaWrap = modal.querySelector('.project-modal__media');
    var mediaImg = mediaWrap.querySelector('img');
    var mediaVideo = mediaWrap.querySelector('video');
    var playBtn = mediaWrap.querySelector('.project-modal__play');

    mediaWrap.classList.remove('is-playing');
    mediaVideo.pause();
    mediaVideo.removeAttribute('src');
    mediaVideo.load();
    mediaVideo.controls = false;

    if (p.poster) {
      mediaImg.src = p.poster;
      mediaImg.alt = p.title + ' 이미지';
      mediaImg.style.display = '';
    } else {
      mediaImg.removeAttribute('src');
      mediaImg.style.display = 'none';
    }

    if (p.video) {
      mediaVideo.src = p.video;
      mediaVideo.poster = p.poster || '';
      playBtn.style.display = '';
    } else {
      playBtn.style.display = 'none';
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeProjectModal() {
    var modal = document.getElementById('projectModal');
    if (!modal) return;
    var mediaWrap = modal.querySelector('.project-modal__media');
    var mediaVideo = mediaWrap.querySelector('video');
    mediaVideo.pause();
    mediaWrap.classList.remove('is-playing');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  renderProjectCards();

  /* ---------- Stacking-card scroll animation (WAAPI ViewTimeline) ---------- */
  function initProjectCardStack() {
    if (reduceMotion) return;
    /* The stacking effect runs at every breakpoint — mobile included — so the
       projects section behaves identically on phone and desktop. */

    var cardsWrapper = document.getElementById('cards');
    var cards = document.querySelectorAll('.card__content');
    if (!cardsWrapper || !cards.length) return;

    var numCards = cards.length;
    cardsWrapper.style.setProperty('--numcards', numCards);

    /* Use the native scroll timeline where available. */
    if (typeof ViewTimeline !== 'undefined' && typeof CSS !== 'undefined' && CSS.percent) {
      var viewTimeline = new ViewTimeline({ subject: cardsWrapper, axis: 'block' });

      cards.forEach(function (card, index0) {
        var index = index0 + 1;
        var reverseIndex0 = numCards - index;

        card.animate(
          { transform: ['scale(1)', 'scale(' + (1 - 0.1 * reverseIndex0) + ')'] },
          {
            timeline: viewTimeline,
            fill: 'forwards',
            rangeStart: 'exit-crossing ' + CSS.percent(index0 / numCards * 100),
            rangeEnd: 'exit-crossing ' + CSS.percent(index / numCards * 100)
          }
        );
      });
      return;
    }

    /* Fallback for browsers without ViewTimeline support. */
    var ticking = false;
    function updateStackScale() {
      var wrapperRect = cardsWrapper.getBoundingClientRect();
      var scrollDistance = Math.max(cardsWrapper.offsetHeight - window.innerHeight, 1);
      var progress = Math.min(1, Math.max(0, -wrapperRect.top / scrollDistance));

      cards.forEach(function (card, index0) {
        var start = index0 / numCards;
        var end = (index0 + 1) / numCards;
        var phase = Math.min(1, Math.max(0, (progress - start) / (end - start)));
        var targetScale = 1 - 0.1 * (numCards - index0 - 1);
        card.style.transform = 'scale(' + (1 + (targetScale - 1) * phase) + ')';
      });
    }

    function requestStackUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        updateStackScale();
        ticking = false;
      });
    }

    updateStackScale();
    window.addEventListener('scroll', requestStackUpdate, { passive: true });
    window.addEventListener('resize', requestStackUpdate);
  }
  initProjectCardStack();

  var projectList = document.querySelector('.project-list');
  if (projectList) {
    projectList.addEventListener('click', function (e) {
      var card = e.target.closest('.project-card');
      if (!card) return;
      openProjectModal(Number(card.getAttribute('data-project-index')));
    });
  }

  var projectModalEl = document.getElementById('projectModal');
  if (projectModalEl) {
    projectModalEl.addEventListener('click', function (e) {
      if (e.target === projectModalEl) closeProjectModal();
    });
    var closeBtn = projectModalEl.querySelector('.project-modal__close');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

    var playBtn = projectModalEl.querySelector('.project-modal__play');
    if (playBtn) {
      playBtn.addEventListener('click', function () {
        var mediaWrap = projectModalEl.querySelector('.project-modal__media');
        var mediaVideo = mediaWrap.querySelector('video');
        mediaVideo.controls = true;
        mediaVideo.play();
        mediaWrap.classList.add('is-playing');
      });
    }
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeProjectModal();
  });

  /* Split an element's text into per-character .char-rise spans so each letter
     can rise in a staggered sequence. `start` seeds --char-index, so passing a
     running counter lets a group of elements flow as one continuous cascade.
     <br> and any element children are preserved. Returns the next index. */
  function splitChars(el, start) {
    var label = el.textContent;
    var idx = start;
    var frag = document.createDocumentFragment();
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var text = node.nodeValue;
        for (var i = 0; i < text.length; i++) {
          var span = document.createElement('span');
          span.className = 'char-rise';
          span.textContent = text[i];
          span.setAttribute('aria-hidden', 'true');
          span.style.setProperty('--char-index', idx++);
          frag.appendChild(span);
        }
      } else if (node.nodeName === 'BR') {
        frag.appendChild(document.createElement('br'));
      } else {
        frag.appendChild(node.cloneNode(true));
      }
    });
    el.setAttribute('aria-label', label);
    el.textContent = '';
    el.appendChild(frag);
    el.classList.add('is-split');
    return idx;
  }

  /* ---------- Hero intro reveal (fires once on load) ---------- */
  var hero = document.querySelector('.hero');
  if (hero) {
    /* Headline lines + name flow as one continuous cascade. */
    var splitCount = 0;
    hero.querySelectorAll('.hero__line, .hero__name').forEach(function (el) {
      splitCount = splitChars(el, splitCount);
    });

    /* The ABOUT label runs its own short cascade, restarting from zero. */
    var about = hero.querySelector('.hero__about');
    var aboutLabel = about && about.querySelector('span');
    if (aboutLabel) {
      splitChars(aboutLabel, 0);
      about.classList.add('is-split');
    }

    if (reduceMotion) {
      hero.classList.add('is-loaded');
    } else {
      setTimeout(function () { hero.classList.add('is-loaded'); }, 50);
    }
  }

  /* ---------- CTA heading per-character reveal (fires when the section
       scrolls into view — .cta is a .reveal, so it gains .is-visible then). ---------- */
  var cta = document.querySelector('.cta');
  if (cta) {
    var ctaCount = 0;
    var ctaHeading = cta.querySelector('h2');
    var ctaLead = cta.querySelector('p');
    if (ctaHeading) ctaCount = splitChars(ctaHeading, ctaCount);
    if (ctaLead) splitChars(ctaLead, ctaCount);
  }

  /* ---------- Cursor-follow radial fill (hero buttons, header CONTACT, CTA button, contact cards, project "자세히 보기", modal link buttons) ----------
     Matches GSAP's "Magnetic Button" demo (.index-style__ButtonMain): on
     enter the fill circle springs out from the cursor, tracks the cursor
     while inside, and on leave collapses back toward the last cursor point.
     The growth/shrink is a CSS transition on --hero-btn-fill; JS only sets
     the cursor position (instant, like GSAP's quickSetter). */
  function bindCursorFill(btn) {
    if (btn.dataset.cursorFill) return;
    btn.dataset.cursorFill = '1';
    var rect = null;

    function setPoint(e) {
      if (!rect) rect = btn.getBoundingClientRect();
      btn.style.setProperty('--hero-btn-x', (e.clientX - rect.left) + 'px');
      btn.style.setProperty('--hero-btn-y', (e.clientY - rect.top) + 'px');
    }

    btn.addEventListener('pointerenter', function (e) {
      rect = btn.getBoundingClientRect();
      setPoint(e);
      btn.style.setProperty('--hero-btn-fill', '100%');
    });
    btn.addEventListener('pointermove', setPoint);
    btn.addEventListener('pointerleave', function () {
      btn.style.setProperty('--hero-btn-fill', '0%');
      rect = null;
    });
  }

  document.querySelectorAll(
    '.hero__actions .button, .contact-link, .site-header nav a[href="#contact"], ' +
    '.cta > .button, .contact-cards a, .project-card__detail-btn'
  ).forEach(bindCursorFill);

  /* ---------- Reveal on scroll ---------- */
  var pending = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  /* ---------- Donut chart fill + number count-up ---------- */
  var DONUT_CIRCUMFERENCE = 334.99;

  document.querySelectorAll('.skill-card').forEach(function (card) {
    var donut = card.querySelector('.donut');
    var label = card.querySelector('p');
    if (donut && label) label.textContent = label.textContent.trim() + ' ' + donut.dataset.percent + '%';
  });

  if (!reduceMotion) {
    document.querySelectorAll('.donut span').forEach(function (span) { span.textContent = '0%'; });
  }

  function animateDonut(card) {
    var donut = card.querySelector && card.querySelector('.donut');
    if (!donut || donut.dataset.animated) return;
    donut.dataset.animated = 'true';
    var pct = parseFloat(donut.dataset.percent) || 0;
    var circle = donut.querySelector('.donut__progress');
    var span = donut.querySelector('span');
    var targetOffset = (DONUT_CIRCUMFERENCE * (1 - pct / 100)).toFixed(2);

    if (reduceMotion) {
      if (circle) circle.style.strokeDashoffset = targetOffset;
      return;
    }

    requestAnimationFrame(function () {
      if (circle) circle.style.strokeDashoffset = targetOffset;
    });

    if (span) {
      var duration = 1400;
      var start = null;
      var tick = function (now) {
        if (start === null) start = now;
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3);
        span.textContent = Math.round(pct * eased) + '%';
        if (t < 1) requestAnimationFrame(tick);
        else span.textContent = pct + '%';
      };
      requestAnimationFrame(tick);
    }
  }

  function checkReveal() {
    if (!pending.length) return;
    var vh = window.innerHeight;
    for (var i = pending.length - 1; i >= 0; i--) {
      if (pending[i].getBoundingClientRect().top < vh * 0.88) {
        pending[i].classList.add('is-visible');
        if (pending[i].classList.contains('skill-card')) animateDonut(pending[i]);
        pending.splice(i, 1);
      }
    }
  }

  if (reduceMotion) {
    pending.forEach(function (el) {
      el.classList.add('is-visible');
      if (el.classList.contains('skill-card')) animateDonut(el);
    });
    pending = [];
  }

  /* ---------- Run on native scroll (throttled via rAF) ---------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      checkReveal();
      ticking = false;
    });
  }

  checkReveal();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- Safety net: catch anything a missed scroll event left behind ---------- */
  var safetyTimer = setInterval(function () {
    checkReveal();
    if (!pending.length) clearInterval(safetyTimer);
  }, 250);

})();
