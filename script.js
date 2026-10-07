(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Project cards + detail modal ---------- */
  var PROJECTS = [
    {
      num: '01', tag: 'VIDEO PROJECT', title: 'CJ대한통운 숏폼 광고 영상 제작 프로젝트',
      titleHtml: '<img class="project-card__title-logo" src="./assets/art_600145_1682904729.png" alt="CJ대한통운"> 숏폼 광고 영상 제작 프로젝트',
      period: '2주', contribution: '100%(개인)',
      stack: ['Premiere', 'After Effects', 'Nano Banana', 'Gemini', 'Suno'],
      overview: "CJ대한통운을 '배송' 중심 이미지에서 첨단기술 기반 '물류 디자인 기업'으로 리브랜딩하기 위한 숏폼 광고 영상 기획",
      problems: [
        '배송 위주의 전통적 이미지 → AI·로봇 등 첨단기술을 시각화해 기술 신뢰도 있는 브랜드로 인식 전환',
        '10일이라는 짧은 제작 기간을 AI 툴 활용(이미지/영상/음성 생성)으로 기획~편집 전 과정을 효율화하여 해결',
        '다수 사운드 레이어 속 내레이션 명료도 저하 문제를 배경음 자동 감쇠 처리로 해결'
      ],
      poster: './assets/project-01-poster.jpeg',
      video: './assets/project-01.mp4',
      links: [
        { label: '기획서 View', href: 'https://drive.google.com/file/d/103mHgIx7HwE27wAM4Y9jEFAKXb405ouF/view?usp=drive_link' },
        { label: 'StoryBoard View', href: 'https://drive.google.com/file/d/1pZ5lkgrPMwceLwKUeqTtjO0zJbRWe_Bq/view?usp=sharing' },
        { label: '영상 보기', href: 'https://drive.google.com/file/d/1E7H-bXvBvGZLOeGdQftnWEwpQyWTVkxz/view?usp=sharing', primary: true }
      ]
    },
    {
      num: '02', tag: 'VIDEO PROJECT', accent: 'night',
      title: '나는 매일 꿈을 꾼다 — AI 공포 옴니버스 숏필름',
      period: '7일 (2026.09.28 ~ 10.07, 주말 · 공휴일 제외)',
      contribution: '100% (1인 기획 · 제작)',
      stack: ['Google Flow', 'Claude', 'Higgsfield · Seedance 2.5', 'Premiere Pro', 'CapCut', 'Envato Elements'],
      overview: '한 남자가 매일 밤 다른 악몽을 꾸고, 마지막에 "깨어 있는 동안"도 꿈이었음이 드러나는 세로형 공포 옴니버스 숏필름. 인트로 + 6편 + 엔딩을 한 편으로 이어 붙인 2분 8초 분량(9:16 · 1080×1920 · 30fps)으로, 주제 설정 · 시나리오 · 레퍼런스 이미지 · 프롬프트 설계 · AI 영상 생성 · 편집 · 자막 · 마감까지 전 과정을 1인 기획 · 제작으로 진행. 기획 2일 → 영상 생성 2일 → 편집 3일로 작업',
      problems: [
        '편마다 다른 꿈인데 같은 인물이어야 하는 문제 → Google Flow로 주인공 레퍼런스 이미지를 먼저 확정해 모든 생성에 첨부하고, 영상 프롬프트에서는 얼굴 묘사를 빼 편별 의상 · 공간만 바꿔 동일 인물 유지',
        'AI 생성 특유의 과장된 연기 · 손 왜곡을 프롬프트 끝 [금지사항] 블록으로 차단("과장 없이 절제된 공포", "손가락 다섯 개 · 괴물 발톱 · CG 금지")하고, 글자는 생성하지 않고 편집에서 입힘',
        '짧은 한국어 대사의 발음이 뭉개지는 문제를 속마음 내레이션으로 바꾸거나, 편집 단계에서 음성을 분리해 TTS · 직접 녹음으로 교체해 해결',
        '6편이 따로 노는 옴니버스가 되지 않도록 1~4편 모티프를 5편에서 한꺼번에 회수하고, 편당 컷 수를 달리해(4편 약 5컷 정적 긴장 / 5편 약 11컷 빠른 회수) 리듬을 설계',
        '생성 원본이 720×1280에 그치는 한계를 업스케일 1080×1920 출력과 전체 조정 레이어 필름 그레인 · 컬러 매칭으로 보완해 편 간 질감을 통일'
      ],
      poster: './assets/project-02-poster.jpg',
      phone: true, still: './assets/project-02-still.jpg', video: './assets/project-02.mp4',
      links: [
        { label: '포트폴리오 View', href: 'https://drive.google.com/file/d/1PiVocmBkLq48LGLPAjoYYQS2tnr1GKA6/view?usp=sharing' },
        { label: '영상 보기', href: 'https://drive.google.com/file/d/16YvomgN79JhEhgpgQ8vTISzrcIeRel_8/view?usp=sharing', primary: true }
      ]
    },
    {
      num: '03', tag: 'WEB RENEWAL', accent: 'green', title: '풀무원 웹사이트 리디자인 프로젝트',
      titleHtml: '<img class="project-card__title-logo project-card__title-logo--pulmuone" src="./assets/pulmuone-logo.png" alt="풀무원"> 웹사이트 리디자인 프로젝트',
      period: '약 3주 (총 작업일 18일)', contribution: '33%(Team) — 리서치·UX/UI 디자인·퍼블리싱',
      stack: ['Figma', 'Tailwind CSS', 'GSAP', 'Swiper', 'HTML/CSS/JS', 'GitHub', 'Claude Code', 'Codex'],
      overview: '풀무원 ESG 웹사이트를 정보 나열형에서 사용자가 이해·경험하는 ESG 플랫폼으로 리디자인하고, PC·태블릿·모바일 반응형 웹사이트로 구현·배포한 프로젝트',
      problems: [
        '정적인 정보·수치 나열 → ESG 데이터·키워드를 시각적 디자인 요소로 재구성해 누구나 이해하는 경험형 구조로 전환',
        '18일의 짧은 일정을 AI 툴 활용(바이브 코딩)으로 디자인 시안~반응형 구현 전 과정을 효율화하여 해결',
        '이미지 과다로 인한 모바일 전송량·성능 저하 문제를 WebP 전환·반응형 소스·지연 로딩으로 전송량 약 60% 감축'
      ],
      poster: './assets/project-03-poster.jpg',
      shots: { desktop: './assets/project-03-desktop.jpg', tablet: './assets/project-03-tablet.jpg', mobile: './assets/project-03-mobile.jpg' },
      links: [{ label: 'GitHub View', href: 'https://github.com/icerence/kiwik-project' }, { label: '기획서 View', href: 'https://drive.google.com/file/d/13ipthNM4yUBRVQWvSoFvmLFcGWYYJo2n/view?usp=sharing' }, { label: '홈페이지', href: 'https://icerence.github.io/kiwik-project/', primary: true }]
    },
    {
      num: '04', tag: 'WEB · APP PROJECT', title: 'FoodPlay — 냉장고 재료로 찾는 유튜브 요리 도우미',
      titleHtml: '<img class="project-card__title-logo project-card__title-logo--foodplay" src="./assets/foodplay-logo.png" alt="FoodPlay"> 냉장고 재료로 찾는 유튜브 요리 도우미',
      period: '약 5일', contribution: '100%(개인)',
      stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Expo · React Native 0.86', 'PWA · TWA (Android APK)', 'YouTube IFrame Player API', 'Cloudflare Workers · KV', 'YouTube Data API v3', 'Claude API (빌드 타임)'],
      overview: '냉장고 재료를 입력하면 만들 수 있는 유튜브 요리 영상을 찾아주고, 조리 스텝의 타임스탬프를 누르면 영상의 그 장면으로 바로 이동하는 요리 도우미 웹·모바일 앱. 검색 없이 훑어보다 발견하는 홈, 자취생·1인가구 등 페르소나 맞춤 추천, 롱폼/숏폼 전환, 절약 금액·댓글 반응 요약도 함께 제공하며, 기획·디자인·프론트엔드부터 자막→스텝 변환 파이프라인(Claude API)까지 1인 진행.',
      problems: [
        '레시피 영상에서 원하는 장면 찾기가 번거로움 → 스텝별 타임스탬프 seek + 스크롤 시 미니 플레이어(PiP) 고정, iframe 재생성 없이 CSS만 바꿔 재생 끊김 제거',
        '"가진 재료로 뭘 할지 모르겠다" → 재료·기분·상황을 칩·자유 문장으로 받는 매칭·랭킹 로직, 4가지 시작 모드로 진입점 분리',
        '조회수 정렬 시 인기 채널이 상단 독식 → 채널 반복마다 커지는 감점으로 그리디 재정렬해 비슷한 후보 사이에서만 다양화',
        '정적 배포라 API 키 노출·목록 노후 위험 → 키 숨긴 Cloudflare Workers 프록시 + 11,000+ 영상 풀로 조용히 폴백',
        'iOS 개발자 계정 없이 웹 코드 하나로 여러 플랫폼 배포 → PWA로 만들고 PWABuilder TWA로 감싼 Android APK를 사이드로딩, Digital Asset Links로 주소창 제거·웹 갱신 시 앱도 자동 최신화'
      ],
      poster: './assets/project-05-poster.jpg',
      demos: { desktop: './assets/project-05-desktop.mp4', mobile: './assets/project-05-mobile.mp4', app: './assets/project-05-app.mp4' },
      links: [{ label: 'GitHub View', href: 'https://github.com/diwony/FoodPlay' }, { label: '기획서 View', href: 'https://drive.google.com/file/d/1wjr_MZsKc5YZIhwMqF87HfpOCUOS38De/view?usp=sharing' }, { label: 'Android App', href: 'https://github.com/diwony/FoodPlay/releases/latest', primary: true }, { label: '홈페이지', href: 'https://diwony.github.io/FoodPlay/', primary: true }]
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
          '<article class="card__content project-card reveal" data-project-index="' + i + '"' + (p.accent ? ' data-accent="' + p.accent + '"' : '') + '>' +
            '<div class="project-card__media">' + media + '</div>' +
            '<div class="project-card__face">' +
              '<div class="project-card__face-head"><span class="project-card__num">' + p.num + '</span><span class="project-card__tag">' + escapeHtml(p.tag) + '</span></div>' +
              '<h3 class="project-card__title">' + (p.titleHtml || escapeHtml(p.title)) + '</h3>' +
              '<div class="project-card__face-meta">' +
                '<span class="project-card__period">제작기간 · ' + escapeHtml(p.period) + '</span>' +
                '<button class="project-card__detail-btn" type="button">자세히 보기<span aria-hidden="true">→</span></button>' +
              '</div>' +
            '</div>' +
          '</article>' +
        '</li>';
    }).join('');
  }

  /* ---------- Device page preview (홈페이지 리뉴얼 01 modal only) ----------
     Fills the media box with a device switcher (데스크톱 / 태블릿 / 모바일) over
     a vertically-scrollable full-page screenshot so the whole site can be
     browsed inside the modal at each breakpoint. */
  var PREVIEW_VIEWS = [
    { key: 'desktop', label: '데스크톱' },
    { key: 'tablet', label: '태블릿' },
    { key: 'mobile', label: '모바일' },
    { key: 'app', label: 'App' }
  ];

  /* A single upright iPhone holding a 9:16 film, for projects whose deliverable
     is the vertical video itself. Click-to-play with sound, like project 01 —
     the 16:9 media box would otherwise crop a portrait film to a letterbox. */
  function buildPhoneVideo(mediaWrap, p, title) {
    mediaWrap.classList.add('has-phone');
    var pv = document.createElement('div');
    pv.className = 'project-modal__preview is-phone';
    pv.innerHTML =
      '<div class="project-modal__phones">' +
        '<figure class="project-modal__phone is-ios">' +
          '<div class="project-modal__phone-screen">' +
            '<video src="' + p.video + '" poster="' + (p.still || '') + '" playsinline preload="none"' +
              ' aria-label="' + escapeHtml(title) + ' 영상"></video>' +
            '<button class="project-modal__play" type="button" aria-label="영상 재생"></button>' +
          '</div>' +
        '</figure>' +
      '</div>';
    mediaWrap.appendChild(pv);

    var screen = pv.querySelector('.project-modal__phone-screen');
    var vid = pv.querySelector('video');
    pv.querySelector('.project-modal__play').addEventListener('click', function () {
      screen.classList.add('is-playing');
      vid.controls = true;
      vid.play().catch(function () {});
    });
  }

  function clearProjectPreview(mediaWrap) {
    mediaWrap.classList.remove('has-preview');
    mediaWrap.classList.remove('has-phone');
    var existing = mediaWrap.querySelector('.project-modal__preview');
    if (existing) {
      existing.querySelectorAll('video').forEach(function (v) { v.pause(); v.removeAttribute('src'); v.load(); });
      existing.remove();
    }
  }

  function buildProjectPreview(mediaWrap, shots, title, isDemo) {
    var views = PREVIEW_VIEWS.filter(function (v) { return shots[v.key]; });
    if (!views.length) return;

    mediaWrap.classList.add('has-preview');
    var pv = document.createElement('div');
    pv.className = 'project-modal__preview' + (isDemo ? ' is-demo' : '');
    pv.innerHTML =
      '<div class="project-modal__preview-bar">' +
        views.map(function (v, i) {
          return '<button type="button" class="project-modal__preview-tab' + (i === 0 ? ' is-active' : '') +
            '" data-view="' + v.key + '">' + v.label + '</button>';
        }).join('') +
      '</div>' +
      '<div class="project-modal__preview-stage is-' + views[0].key + '">' +
        views.map(function (v) {
          var label = escapeHtml(title) + ' ' + v.label + (isDemo ? ' 사용 예시' : ' 전체 화면');
          if (isDemo) {
            var vid = '<video class="project-modal__preview-shot is-' + v.key + '-shot" src="' + shots[v.key] +
              '" muted loop playsinline autoplay preload="auto" aria-label="' + label + '"></video>';
            /* the App tab plays the capture on a single fixed iPhone */
            if (v.key === 'app') {
              return '<div class="project-modal__preview-shot is-app-shot project-modal__phones">' +
                '<figure class="project-modal__phone is-ios">' +
                  '<div class="project-modal__phone-screen">' +
                    '<video class="project-modal__preview-shot is-app-shot" src="' + shots[v.key] +
                    '" muted loop playsinline autoplay preload="auto" aria-label="' + label + '"></video>' +
                  '</div>' +
                '</figure>' +
              '</div>';
            }
            return vid;
          }
          return '<img class="project-modal__preview-shot is-' + v.key + '-shot" src="' + shots[v.key] +
            '" alt="' + label + '">';
        }).join('') +
      '</div>' +
      (isDemo ? '' : '<span class="project-modal__preview-hint" aria-hidden="true">스크롤하여 전체 페이지 보기</span>');
    mediaWrap.appendChild(pv);

    var stage = pv.querySelector('.project-modal__preview-stage');
    var hint = pv.querySelector('.project-modal__preview-hint');
    var tabs = pv.querySelectorAll('.project-modal__preview-tab');
    var vids = pv.querySelectorAll('video');

    function playView(key) {
      vids.forEach(function (vd) {
        if (vd.classList.contains('is-' + key + '-shot')) {
          try { vd.currentTime = 0; } catch (e) {}
          vd.play().catch(function () {});
        } else {
          vd.pause();
        }
      });
    }
    if (isDemo) playView(views[0].key);

    /* same cursor-follow radial fill ("자기장 효과") as the other buttons */
    tabs.forEach(bindCursorFill);

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
        views.forEach(function (v) {
          stage.classList.toggle('is-' + v.key, v.key === tab.dataset.view);
        });
        stage.scrollTop = 0;
        if (hint) hint.style.opacity = '';
        if (isDemo) playView(tab.dataset.view);
      });
    });

    if (hint) {
      stage.addEventListener('scroll', function () {
        hint.style.opacity = stage.scrollTop > 8 ? '0' : '';
      }, { passive: true });
    }
  }

  function openProjectModal(index) {
    var p = PROJECTS[index];
    var modal = document.getElementById('projectModal');
    if (!modal || !p) return;

    modal.querySelector('.project-modal__eyebrow').textContent = p.num + ' · ' + p.tag;
    modal.querySelector('.project-modal__title').textContent = 'Project Details';
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
      var isExternal = l.href && l.href !== '#';
      return '<a class="project-modal__link-btn' + (l.primary ? ' is-active' : '') + '" href="' + l.href + '"' +
        (isExternal ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + escapeHtml(l.label) + '</a>';
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

    if (p.video && !p.phone) {
      mediaVideo.src = p.video;
      mediaVideo.poster = p.poster || '';
      playBtn.style.display = '';
    } else {
      playBtn.style.display = 'none';
    }

    clearProjectPreview(mediaWrap);
    if (p.phone) {
      mediaImg.style.display = 'none';
      playBtn.style.display = 'none';
      buildPhoneVideo(mediaWrap, p, p.title);
    } else if (p.demos) {
      mediaImg.style.display = 'none';
      playBtn.style.display = 'none';
      buildProjectPreview(mediaWrap, p.demos, p.title, true);
    } else if (p.shots) {
      mediaImg.style.display = 'none';
      playBtn.style.display = 'none';
      buildProjectPreview(mediaWrap, p.shots, p.title);
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
    clearProjectPreview(mediaWrap);
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
    '.hero__actions .button, .contact-link, .site-header nav a, ' +
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
