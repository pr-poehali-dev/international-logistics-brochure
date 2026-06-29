import Icon from '@/components/ui/icon';

const TRUCK_IMG =
  'https://cdn.poehali.dev/projects/f0cc9908-1e16-4917-a61c-6353efaf5cc6/files/430d9394-f3e9-46e6-add0-933bfa3a0f4d.jpg';

const services = [
  { icon: 'Truck', title: 'Перевозка грузов любых объёмов', desc: 'Полные и частичные загрузки по всем направлениям' },
  { icon: 'Boxes', title: 'Сборные отправки', desc: 'Консолидация грузов от разных поставщиков' },
  { icon: 'FileText', title: 'Экспортные документы', desc: 'Полное оформление сопроводительной документации' },
  { icon: 'ShieldCheck', title: 'Таможенное оформление', desc: 'Чистое прохождение границы под ключ' },
];

const routes = [
  { from: 'Гуанчжоу', to: 'Москва' },
  { from: 'Иу', to: 'Санкт-Петербург' },
  { from: 'Шэньчжэнь', to: 'Екатеринбург' },
  { from: 'Пекин', to: 'Новосибирск' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy">
      <div className="mx-auto max-w-[820px] shadow-2xl">
        {/* HERO */}
        <header className="relative overflow-hidden bg-gradient-to-b from-[#EAF1FB] to-white px-8 pt-10 pb-6">
          <div className="absolute right-6 top-8 flex gap-2 text-4xl">
            <span>🇨🇳</span>
            <span>🇷🇺</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-navy">
              <Icon name="Container" size={26} className="text-white" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-wide text-brand-navy leading-none">
                ВОЛГА<span className="text-brand-blue">ТРЕЙД</span>
              </p>
              <p className="text-xs tracking-widest text-brand-blue/70">МЕЖДУНАРОДНАЯ ЛОГИСТИКА</p>
            </div>
          </div>

          <h1 className="mt-8 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Транспортно-
            <br />
            логистические
            <br />
            <span className="text-brand-blue">услуги</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-snug text-brand-navy/80">
            Организуем официальную доставку грузов из любого города Китая в любой город России.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-brand-blue" />
        </header>

        {/* TRUCK IMAGE */}
        <div className="relative">
          <img src={TRUCK_IMG} alt="Грузоперевозки ВолгаТрейд" className="h-64 w-full object-cover md:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* SERVICES */}
        <section className="px-8 py-10">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Наши услуги</p>
          <h2 className="mt-1 font-display text-3xl font-bold uppercase leading-tight">
            Прямые машины из внутренних провинций Китая
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl border border-brand-blue/15 bg-[#F7FAFF] p-5 transition-shadow hover:shadow-md"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-blue text-white">
                  <Icon name={s.icon} size={22} />
                </div>
                <div>
                  <p className="font-semibold leading-tight">{s.title}</p>
                  <p className="mt-1 text-sm text-brand-navy/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ROUTES */}
        <section className="bg-brand-navy px-8 py-10 text-white">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky">Маршруты</p>
          <h2 className="mt-1 font-display text-3xl font-bold uppercase">Из Китая — в любую точку России</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {routes.map((r) => (
              <div
                key={r.from + r.to}
                className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 ring-1 ring-white/10"
              >
                <span className="font-semibold">{r.from}</span>
                <Icon name="MoveRight" size={20} className="mx-3 text-brand-sky" />
                <span className="font-semibold">{r.to}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/60">
            Подберём оптимальный маршрут под ваш груз и сроки — отправка от 1 паллеты до полной фуры.
          </p>
        </section>

        {/* CONTACTS */}
        <footer className="bg-gradient-to-br from-[#0A1F45] to-brand-navy px-8 py-10 text-white">
          <h3 className="font-display text-2xl font-bold uppercase">Сделаем расчёт бесплатно</h3>
          <p className="mt-2 max-w-md text-white/70">
            Подберём маршрут, оформим экспортные документы и проведём таможню под ключ.
          </p>

          <div className="mt-7 space-y-4">
            {[
              { icon: 'User', text: 'Логист компании ВолгаТрейд' },
              { icon: 'Mail', text: 'info@volga-trade.ru' },
              { icon: 'Phone', text: '+7 963 464-40-25' },
            ].map((c) => (
              <div key={c.text} className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30">
                  <Icon name={c.icon} size={18} />
                </div>
                <span className="text-lg">{c.text}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-sky px-7 py-3 font-semibold text-white transition-transform hover:scale-105">
            Оставить заявку
            <Icon name="ArrowRight" size={18} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
