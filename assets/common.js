/* Starbucks Rewards Vietnam – MIS prototype · shared helpers */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sb: {
          green: '#00704A', mid: '#006241', dark: '#1E3932', deep: '#0B2A22',
          light: '#D4E9E2', cream: '#F2F0EB', gold: '#CBA258', neon: '#2BEE9B'
        }
      },
      fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] }
    }
  }
};

(function () {
  const css = `
  html{scroll-behavior:smooth}
  body{font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  @keyframes sbFade{from{opacity:0}to{opacity:1}}
  @keyframes sbPop{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}
  @keyframes sbPulseRed{0%,100%{box-shadow:0 0 0 0 rgba(248,113,113,.55)}50%{box-shadow:0 0 0 8px rgba(248,113,113,0)}}
  @keyframes sbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  .sb-fade{animation:sbFade .18s ease-out}
  .sb-pop{animation:sbPop .22s ease-out}
  .sb-pulse-red{animation:sbPulseRed 1.6s infinite}
  .sb-float{animation:sbFloat 5s ease-in-out infinite}
  .no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}
  .clickable{cursor:pointer;transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease}
  .clickable:hover{transform:translateY(-2px);box-shadow:0 10px 30px -10px rgba(0,112,74,.35)}
  .clickable:focus-visible,a:focus-visible,button:focus-visible{outline:3px solid #2BEE9B;outline-offset:2px}
  .glass{background:rgba(255,255,255,.06);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12)}
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
})();

window.SB = {
  info: {},

  logo(size = 40) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#00704A"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" stroke-width="3"/>
      <circle cx="50" cy="50" r="27" fill="#fff"/>
      <path d="M50 30l5.9 12.1 13.3 1.9-9.6 9.4 2.3 13.3L50 60.4l-11.9 6.3 2.3-13.3-9.6-9.4 13.3-1.9z" fill="#00704A"/>
    </svg>`;
  },

  /* ---------- header / footer ---------- */
  header(active, dark) {
    const links = [
      ['index.html', 'Trang chủ', 'home'],
      ['requirements.html', 'Yêu cầu hệ thống', 'req'],
      ['customer-app.html', 'App khách hàng', 'app'],
      ['kds.html', 'Màn hình Barista', 'kds'],
      ['roi.html', 'Phân tích ROI', 'roi']
    ];
    const bar = dark ? 'bg-sb-deep/95 text-white border-white/10' : 'bg-white/95 text-sb-dark border-black/5';
    const el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur border-b ${bar}">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="Starbucks – về trang chủ" title="Về trang chủ">
          ${SB.logo(40)}
          <span class="hidden sm:block leading-tight">
            <span class="block font-extrabold tracking-tight text-[15px]">Starbucks Rewards</span>
            <span class="block text-[11px] ${dark ? 'text-sb-neon' : 'text-sb-green'} font-semibold uppercase tracking-widest">Vietnam · MIS Project</span>
          </span>
        </a>
        <nav class="flex-1 flex gap-1 overflow-x-auto no-scrollbar justify-end" aria-label="Điều hướng chính">
          ${links.map(([h, t, k]) => `<a href="${h}" class="whitespace-nowrap px-3 py-2 rounded-full text-sm font-semibold transition ${
            k === active
              ? 'bg-sb-green text-white'
              : (dark ? 'text-white/80 hover:bg-white/10' : 'text-sb-dark/80 hover:bg-sb-light')
          }">${t}</a>`).join('')}
        </nav>
      </div>
    </header>`;
  },

  footer() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
    <footer class="bg-sb-dark text-white/80 mt-16">
      <div class="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <a href="index.html" class="flex items-center gap-3 mb-3" title="Về trang chủ">${SB.logo(36)}<span class="font-bold text-white">Starbucks Rewards Vietnam</span></a>
          <p class="text-white/60">Prototype học thuật cho môn Hệ thống thông tin quản lý (MIS). Logo là bản vẽ minh họa, số liệu là giả định.</p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Khu vực</h4>
          <ul class="space-y-2">
            <li><a class="hover:text-sb-neon" href="requirements.html">Yêu cầu chức năng &amp; phi chức năng</a></li>
            <li><a class="hover:text-sb-neon" href="customer-app.html">Giao diện App khách hàng</a></li>
            <li><a class="hover:text-sb-neon" href="kds.html">Màn hình Barista (KDS)</a></li>
            <li><a class="hover:text-sb-neon" href="roi.html">Bảng ROI 3 năm</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Điểm nhấn giải pháp</h4>
          <ul class="space-y-2 text-white/70">
            <li>• Xóa "Phantom Inventory" bằng API tồn kho thời gian thực</li>
            <li>• Thời gian chờ động theo tải trọng cửa hàng</li>
            <li>• KDS tách đơn Walk-in / đơn App</li>
          </ul>
        </div>
      </div>
    </footer>`;
  },

  /* ---------- modal ---------- */
  modal(o) {
    SB.closeModal(true);
    const actions = o.actions || [];
    const dark = !!o.dark;
    const el = document.createElement('div');
    el.id = 'sb-modal';
    el.className = 'fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 sb-fade';
    el.innerHTML = `
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" data-close></div>
      <div role="dialog" aria-modal="true" class="relative w-full ${o.wide ? 'sm:max-w-3xl' : 'sm:max-w-lg'} max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl sb-pop ${dark ? 'bg-[#10241d] text-white border border-white/10' : 'bg-white text-slate-700'}">
        <div class="sticky top-0 z-10 flex items-start gap-3 p-5 pb-3 ${dark ? 'bg-[#10241d]' : 'bg-white'}">
          ${o.icon ? `<div class="text-2xl leading-none mt-0.5">${o.icon}</div>` : ''}
          <h3 class="flex-1 text-lg font-extrabold ${dark ? 'text-white' : 'text-sb-dark'}">${o.title || ''}</h3>
          <button data-close aria-label="Đóng" class="w-8 h-8 rounded-full grid place-items-center ${dark ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-100 hover:bg-slate-200'}">✕</button>
        </div>
        <div class="px-5 pb-5 text-sm leading-relaxed">${o.html || ''}</div>
        ${actions.length ? `<div class="px-5 pb-5 flex flex-wrap gap-2 justify-end">
          ${actions.map((a, i) => {
            const cls = `px-4 py-2.5 rounded-full text-sm font-bold transition ${a.primary
              ? 'bg-sb-green text-white hover:bg-sb-mid'
              : (dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-sb-light text-sb-dark hover:bg-sb-green/20')}`;
            return a.href
              ? `<a href="${a.href}" class="${cls}">${a.label}</a>`
              : `<button data-act="${i}" class="${cls}">${a.label}</button>`;
          }).join('')}
        </div>` : ''}
      </div>`;
    el.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) { SB.closeModal(); return; }
      const b = e.target.closest('[data-act]');
      if (b) {
        const a = actions[+b.dataset.act];
        if (a.close !== false) SB.closeModal();
        if (a.onClick) a.onClick();
      }
    });
    document.body.appendChild(el);
    document.body.style.overflow = 'hidden';
    if (o.onOpen) o.onOpen(el);
  },

  closeModal(silent) {
    const el = document.getElementById('sb-modal');
    if (el) el.remove();
    document.body.style.overflow = '';
  },

  toast(msg, tone) {
    const t = document.createElement('div');
    const bg = tone === 'warn' ? 'bg-amber-500 text-black' : 'bg-sb-dark text-white';
    t.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] px-5 py-3 rounded-full shadow-xl text-sm font-semibold sb-pop ${bg}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  },

  money(n) { return Math.round(n).toLocaleString('vi-VN') + 'đ'; },
  usd(n) { const v = Math.round(n); return (v < 0 ? '-$' : '$') + Math.abs(v).toLocaleString('en-US'); },

  /* ---------- shared demo state (app ⇄ KDS) ---------- */
  state: {
    key: 'sbux_demo_v1',
    def() { return { load: 1, mode: 'auto', oos: { matcha: true }, logs: [] }; },
    get() {
      try { return Object.assign(SB.state.def(), JSON.parse(localStorage.getItem(SB.state.key) || '{}')); }
      catch (e) { return SB.state.def(); }
    },
    set(patch) {
      const v = Object.assign(SB.state.get(), patch);
      try { localStorage.setItem(SB.state.key, JSON.stringify(v)); } catch (e) {}
      return v;
    },
    reset() { try { localStorage.removeItem(SB.state.key); } catch (e) {} }
  }
};

/* any element with data-info="key" opens SB.info[key] in a modal */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-info]');
  if (!t) return;
  const d = SB.info[t.dataset.info];
  if (d) { e.preventDefault(); SB.modal(typeof d === 'function' ? d() : d); }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') SB.closeModal();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-info][role=button]')) {
    e.preventDefault(); e.target.click();
  }
});
