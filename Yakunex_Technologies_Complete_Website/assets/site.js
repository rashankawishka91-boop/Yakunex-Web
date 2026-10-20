(() => {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation menu'); toggle.textContent='☰';
    }));
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === current) a.setAttribute('aria-current','page');
  });
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target);} });
  }, {threshold:.12}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('in-view'));
  const top = document.querySelector('.back-top');
  if (top) {
    window.addEventListener('scroll', () => top.classList.toggle('visible', window.scrollY > 500), {passive:true});
    top.addEventListener('click', () => window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  }
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    const group = btn.closest('[data-filter-group]'); if (!group) return;
    group.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b===btn)));
    const filter = btn.dataset.filter;
    group.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = !(filter === 'all' || card.dataset.category.split(' ').includes(filter));
    });
  }));
  document.querySelectorAll('.faq-question').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item'); const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('span:last-child').textContent = open ? '−' : '+';
  }));
  const form = document.querySelector('#contact-form');
  if(form) form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if(!form.reportValidity()){ status.textContent='Please complete the required fields.';status.setAttribute('role','alert');return; }
    const data = new FormData(form);
    const subject = encodeURIComponent('Website enquiry — ' + (data.get('service') || 'General enquiry'));
    const body = encodeURIComponent(
      'Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nPhone: '+(data.get('phone')||'Not provided')+
      '\nCompany: '+(data.get('company')||'Not provided')+'\nService: '+data.get('service')+
      '\nBudget: '+(data.get('budget')||'Not provided')+'\nTimeline: '+(data.get('timeline')||'Not provided')+
      '\n\nProject details:\n'+data.get('message')
    );
    // Replace with the confirmed company email or connect a server-side form endpoint before launch.
    const recipient = 'hello@yakunex.com';
    status.textContent='Your email application should open with the enquiry prepared. If it does not, contact us by phone. This form is not yet connected to a server.';
    status.setAttribute('role','status');
    window.location.href='mailto:'+recipient+'?subject='+subject+'&body='+body;
  });
  const year = document.querySelector('[data-year]'); if(year) year.textContent = new Date().getFullYear();
})();
