/* Starbucks Rewards Vietnam – MIS prototype · shared theme, menu, state, UI helpers */
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sb: {
          green: '#00704A', mid: '#006241', dark: '#1E3932', deep: '#0B2A22',
          light: '#D4E9E2', pale: '#EAF4F0', cream: '#F2F0EB', gold: '#CBA258', neon: '#2BEE9B'
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
  @keyframes sbFlash{0%{background-color:rgba(43,238,155,.45)}100%{background-color:transparent}}
  .sb-fade{animation:sbFade .18s ease-out}
  .sb-pop{animation:sbPop .22s ease-out}
  .sb-pulse-red{animation:sbPulseRed 1.6s infinite}
  .sb-flash{animation:sbFlash 2.4s ease-out}
  .no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}
  .clickable{cursor:pointer;transition:transform .15s ease, box-shadow .15s ease, border-color .15s ease}
  .clickable:hover{transform:translateY(-2px);box-shadow:0 10px 30px -10px rgba(0,112,74,.35)}
  .clickable:focus-visible,a:focus-visible,button:focus-visible{outline:3px solid #2BEE9B;outline-offset:2px}
  .glass{background:rgba(255,255,255,.06);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12)}
  .embed #site-header,.embed #site-footer,.embed .embed-hide{display:none!important}
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
  if (/[?&]embed=1/.test(location.search)) document.documentElement.classList.add('embed');
})();

window.SB = {
  info: {},
  embed: /[?&]embed=1/.test(location.search),

  /* Logo Starbucks (file SVG chính thức trong assets/) */
  logo(size = 40) {
    return `<img src="assets/starbucks-logo.svg" width="${size}" height="${size}" alt="Starbucks" class="block shrink-0 select-none" style="width:${size}px;height:${size}px;object-fit:contain" draggable="false">`;
  },

  /* ---------- header / footer ---------- */
  header(active, dark) {
    const links = [
      ['index.html', 'Trang chủ', 'home'],
      ['demo.html', 'Demo song song', 'demo'],
      ['customer-app.html', 'App khách hàng', 'app'],
      ['kds.html', 'Màn hình Barista', 'kds'],
      ['roi.html', 'Phân tích ROI', 'roi'],
      ['requirements.html', 'Yêu cầu', 'req']
    ];
    const bar = dark ? 'bg-sb-deep/95 text-white border-white/10' : 'bg-white/95 text-sb-dark border-black/5';
    const el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur border-b ${bar}">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="Starbucks – về trang chủ" title="Về trang chủ">
          ${SB.logo(44)}
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
          <a href="index.html" class="flex items-center gap-3 mb-3" title="Về trang chủ">${SB.logo(40)}<span class="font-bold text-white">Starbucks Rewards Vietnam</span></a>
          <p class="text-white/60">Prototype học thuật cho môn Hệ thống thông tin quản lý (MIS). Logo và thương hiệu thuộc về Starbucks Corporation; số liệu và thực đơn chỉ mang tính minh họa.</p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Khu vực</h4>
          <ul class="space-y-2">
            <li><a class="hover:text-sb-neon" href="demo.html">Demo App ⇄ KDS song song</a></li>
            <li><a class="hover:text-sb-neon" href="customer-app.html">Giao diện App khách hàng</a></li>
            <li><a class="hover:text-sb-neon" href="kds.html">Màn hình Barista (KDS)</a></li>
            <li><a class="hover:text-sb-neon" href="roi.html">Bảng ROI 3 năm</a></li>
            <li><a class="hover:text-sb-neon" href="requirements.html">Yêu cầu chức năng &amp; phi chức năng</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Điểm nhấn giải pháp</h4>
          <ul class="space-y-2 text-white/70">
            <li>• Xóa "Phantom Inventory" bằng tồn kho thời gian thực</li>
            <li>• Đơn App hiện ngay trên KDS kèm tên khách</li>
            <li>• Hết nguyên liệu trên KDS → món bị khóa trên App</li>
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
              ? `<a href="${a.href}" ${SB.embed ? 'target="_top"' : ''} class="${cls}">${a.label}</a>`
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

  closeModal() {
    const el = document.getElementById('sb-modal');
    if (el) el.remove();
    document.body.style.overflow = '';
  },

  toast(msg, tone) {
    const t = document.createElement('div');
    const bg = tone === 'warn' ? 'bg-amber-500 text-black' : tone === 'ok' ? 'bg-sb-green text-white' : 'bg-sb-dark text-white';
    t.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] px-5 py-3 rounded-full shadow-xl text-sm font-semibold sb-pop max-w-[92vw] text-center ${bg}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  },

  money(n) { return Math.round(n).toLocaleString('vi-VN') + 'đ'; },
  usd(n) { const v = Math.round(n); return (v < 0 ? '-$' : '$') + Math.abs(v).toLocaleString('en-US'); },
  esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); },

  /* ======================================================================
     THỰC ĐƠN & NGUYÊN LIỆU (dùng chung App + KDS)
     ====================================================================== */
  CATS: [
    { id: 'coffee', name: 'Cà phê', ico: '☕' },
    { id: 'tea', name: 'Trà', ico: '🍵' },
    { id: 'frap', name: 'Frappuccino', ico: '🥤' },
    { id: 'food', name: 'Bánh & Đồ ăn', ico: '🥐' }
  ],
  /* Nguyên liệu: khi báo hết trên KDS, mọi món dùng nguyên liệu này bị khóa trên App */
  ING: {
    matcha:    { name: 'Bột matcha',           ico: '🍵' },
    caramel:   { name: 'Sốt caramel',          ico: '🍯' },
    choco:     { name: 'Sốt chocolate',        ico: '🍫' },
    cookie:    { name: 'Cookie vụn',           ico: '🍪' },
    coldbrew:  { name: 'Cold brew pha sẵn',    ico: '🧊' },
    peach:     { name: 'Syrup đào',            ico: '🍑' },
    lotus:     { name: 'Hạt sen & trà ướp sen', ico: '🪷' },
    croissant: { name: 'Bánh croissant',       ico: '🥐' },
    tiramisu:  { name: 'Bánh tiramisu',        ico: '🍰' },
    muffin:    { name: 'Bánh muffin',          ico: '🧁' },
    chicken:   { name: 'Gà sandwich',          ico: '🥪' },
    oat:       { name: 'Sữa yến mạch',         ico: '🌾' },
    soy:       { name: 'Sữa đậu nành',         ico: '🫘' }
  },
  /* drink=true → có tuỳ chọn size / đường / sữa */
  MENU: [
    { id: 'americano',  cat: 'coffee', name: 'Americano',               price: 59000, ico: '☕', bg: 'from-stone-300 to-stone-500',     drink: true, desc: 'Espresso đậm hòa nước nóng.', ing: [] },
    { id: 'latte',      cat: 'coffee', name: 'Caffe Latte',             price: 75000, ico: '☕', bg: 'from-amber-100 to-amber-300',     drink: true, desc: 'Espresso, sữa nóng và lớp foam mịn.', ing: [] },
    { id: 'cappu',      cat: 'coffee', name: 'Cappuccino',              price: 75000, ico: '☕', bg: 'from-amber-200 to-amber-400',     drink: true, desc: 'Foam dày, vị cà phê rõ.', ing: [] },
    { id: 'caramel',    cat: 'coffee', name: 'Caramel Macchiato',       price: 85000, ico: '🍯', bg: 'from-amber-300 to-orange-400',    drink: true, desc: 'Vani, sữa, espresso và sốt caramel.', ing: ['caramel'], best: true },
    { id: 'mocha',      cat: 'coffee', name: 'Caffe Mocha',             price: 79000, ico: '🍫', bg: 'from-amber-700 to-stone-700',     drink: true, desc: 'Espresso, chocolate và sữa.', ing: ['choco'] },
    { id: 'coldbrew',   cat: 'coffee', name: 'Cold Brew',               price: 69000, ico: '🧊', bg: 'from-sky-200 to-slate-400',       drink: true, desc: 'Ủ lạnh 20 giờ, êm và ít chua.', ing: ['coldbrew'] },
    { id: 'cbcream',    cat: 'coffee', name: 'Vanilla Cold Brew Cream', price: 79000, ico: '🧊', bg: 'from-slate-300 to-slate-500',     drink: true, desc: 'Cold brew phủ kem vani béo nhẹ.', ing: ['coldbrew'] },
    { id: 'phin',       cat: 'coffee', name: 'Phin Sữa Đá',             price: 55000, ico: '🇻🇳', bg: 'from-orange-300 to-amber-600',   drink: true, desc: 'Cà phê phin truyền thống, sữa đặc.', ing: [] },
    { id: 'matcha',     cat: 'tea',    name: 'Matcha Latte',            price: 79000, ico: '🍵', bg: 'from-lime-200 to-emerald-400',    drink: true, desc: 'Matcha Nhật Bản với sữa tươi.', ing: ['matcha'], best: true },
    { id: 'peachtea',   cat: 'tea',    name: 'Trà Đào Cam Sả',          price: 65000, ico: '🍑', bg: 'from-orange-200 to-pink-300',     drink: true, desc: 'Trà đen, đào, cam và sả thơm.', ing: ['peach'] },
    { id: 'lotus',      cat: 'tea',    name: 'Trà Sen Vàng',            price: 65000, ico: '🪷', bg: 'from-yellow-200 to-lime-300',     drink: true, desc: 'Trà ướp sen, topping hạt sen.', ing: ['lotus'] },
    { id: 'mochafrap',  cat: 'frap',   name: 'Mocha Frappuccino',       price: 89000, ico: '🥤', bg: 'from-stone-400 to-amber-800',     drink: true, desc: 'Cà phê, chocolate, đá xay và kem.', ing: ['choco'] },
    { id: 'caramelfrap',cat: 'frap',   name: 'Caramel Frappuccino',     price: 89000, ico: '🥤', bg: 'from-amber-200 to-orange-400',    drink: true, desc: 'Cà phê, sốt caramel, đá xay.', ing: ['caramel'] },
    { id: 'matchafrap', cat: 'frap',   name: 'Matcha Cream Frappuccino',price: 89000, ico: '🥤', bg: 'from-emerald-200 to-green-500',   drink: true, desc: 'Matcha xay mịn với kem tươi.', ing: ['matcha'] },
    { id: 'cookiefrap', cat: 'frap',   name: 'Cookie Cream Frappuccino',price: 92000, ico: '🍪', bg: 'from-stone-200 to-stone-500',     drink: true, desc: 'Cookie vụn, kem tươi, đá xay.', ing: ['cookie'] },
    { id: 'croissant',  cat: 'food',   name: 'Croissant bơ',            price: 55000, ico: '🥐', bg: 'from-orange-200 to-amber-400',    drink: false, desc: 'Hâm nóng, vỏ giòn bơ thơm.', ing: ['croissant'] },
    { id: 'tiramisu',   cat: 'food',   name: 'Bánh Tiramisu',           price: 69000, ico: '🍰', bg: 'from-amber-100 to-amber-300',     drink: false, desc: 'Mềm mịn vị cà phê & mascarpone.', ing: ['tiramisu'] },
    { id: 'muffin',     cat: 'food',   name: 'Muffin Chocolate',        price: 49000, ico: '🧁', bg: 'from-stone-400 to-stone-700',     drink: false, desc: 'Muffin chocolate chip.', ing: ['muffin'] },
    { id: 'sandwich',   cat: 'food',   name: 'Sandwich Gà Phô Mai',     price: 79000, ico: '🥪', bg: 'from-yellow-200 to-orange-300',   drink: false, desc: 'Gà áp chảo, phô mai, nướng nóng.', ing: ['chicken'] }
  ],
  SIZES: [{ n: 'Tall', add: 0 }, { n: 'Grande', add: 6000 }, { n: 'Venti', add: 12000 }],
  MILKS: [{ n: 'Sữa tươi', ing: null, add: 0 }, { n: 'Sữa đậu nành', ing: 'soy', add: 8000 }, { n: 'Sữa yến mạch', ing: 'oat', add: 10000 }],
  SWEET: ['Bình thường', 'Ít ngọt', 'Không đường'],

  item(id) { return SB.MENU.find(m => m.id === id); },
  /* trả về nguyên liệu hết đang chặn món (hoặc null) */
  blockedBy(item, oos) { const k = (item.ing || []).find(i => oos[i]); return k || null; },

  /* ======================================================================
     TRẠNG THÁI DÙNG CHUNG (localStorage) – App ⇄ KDS
     ====================================================================== */
  state: {
    key: 'sbux_demo_v2',
    _seed() {
      const ago = (m, s = 0) => Date.now() - (m * 60 + s) * 1000;
      const it = (q, id, size, mods) => ({ q, id, n: SB.item(id).name, s: size || '', m: mods || [] });
      return {
        load: 1, mode: 'auto', oos: { matcha: true }, logs: [], done: 14,
        seq: { W: 104, M: 891 }, customer: 'Võ Minh',
        tickets: [
          { id: 'W-099', src: 'walk', name: 'Thu Hà',      start: ago(11, 40), status: 'making', where: 'Tại quầy',     items: [it(1, 'caramel', 'Grande', ['Ít ngọt', 'Sữa đậu nành']), it(1, 'croissant', '', ['Hâm nóng'])] },
          { id: 'W-101', src: 'walk', name: 'Quốc Bảo',    start: ago(5, 30),  status: 'new',    where: 'Dùng tại chỗ', items: [it(2, 'americano', 'Tall', ['Thêm 1 shot'])] },
          { id: 'W-102', src: 'walk', name: 'Minh Anh',    start: ago(2, 10),  status: 'new',    where: 'Mang đi',      items: [it(1, 'coldbrew', 'Grande', ['Ít đá', 'Ít ngọt']), it(1, 'latte', 'Tall', ['Sữa yến mạch'])] },
          { id: 'W-103', src: 'walk', name: 'Lan Phương',  start: ago(0, 45),  status: 'new',    where: 'Mang đi',      items: [it(1, 'peachtea', 'Grande', [])] },
          { id: 'M-884', src: 'app',  name: 'Đức Trí',     start: ago(12, 5),  status: 'making', where: 'Hẹn lấy 11:30', items: [it(2, 'mochafrap', 'Grande', ['Không kem', 'Thêm sốt'])] },
          { id: 'M-886', src: 'app',  name: 'Phương Thảo', start: ago(6, 20),  status: 'new',    where: 'Hẹn lấy 11:40', items: [it(1, 'caramel', 'Grande', ['Ít ngọt', 'Sữa đậu nành']), it(1, 'croissant', '', [])] },
          { id: 'M-889', src: 'app',  name: 'Hoàng Nam',   start: ago(1, 50),  status: 'new',    where: 'Ngay khi sẵn sàng', items: [it(1, 'cbcream', 'Tall', ['Ít đá'])] }
        ]
      };
    },
    get() {
      let v = null;
      try { v = JSON.parse(localStorage.getItem(SB.state.key) || 'null'); } catch (e) {}
      if (!v || !v.tickets) { v = Object.assign(SB.state._seed(), v ? { load: v.load, mode: v.mode, oos: v.oos || {}, logs: v.logs || [] } : {}); SB.state._write(v); }
      return v;
    },
    _write(v) { try { localStorage.setItem(SB.state.key, JSON.stringify(v)); } catch (e) {} },
    set(patch) { const v = Object.assign(SB.state.get(), patch); SB.state._write(v); return v; },
    /* sửa trực tiếp rồi lưu: fn(state) */
    mutate(fn) { const v = SB.state.get(); fn(v); SB.state._write(v); return v; },
    reset() { try { localStorage.removeItem(SB.state.key); } catch (e) {} },
    /* lắng nghe thay đổi từ tab/iframe khác (storage event + polling dự phòng) */
    subscribe(cb) {
      let last = localStorage.getItem(SB.state.key);
      const check = () => { const now = localStorage.getItem(SB.state.key); if (now !== last) { last = now; cb(SB.state.get()); } };
      window.addEventListener('storage', e => { if (e.key === SB.state.key || e.key === null) check(); });
      setInterval(check, 1200);
      return () => { last = localStorage.getItem(SB.state.key); };   // gọi sau khi tự ghi để bỏ qua thay đổi của chính mình
    }
  }
};

/* mọi phần tử có data-info="key" mở SB.info[key] trong modal */
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
