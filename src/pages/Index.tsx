import { useState } from 'react';
import Icon from '@/components/ui/icon';

const TRUCK_IMG = 'https://cdn.poehali.dev/projects/f0cc9908-1e16-4917-a61c-6353efaf5cc6/files/a7c581f2-61f9-4d3c-9297-b34104c5785e.jpg';

const content = {
  ru: {
    heading: ['Транспортно-', 'логистические', 'услуги'],
    subtitle: 'Организуем официальную доставку грузов из любого города Китая в любой город России.',
    promo: 'Прямые машины\nиз внутренних провинций Китая\nпо вашим запросам, любого типа\nи разной грузоподъёмностью:',
    services: [
      { icon: 'Truck', text: '– Перевозка грузов\nлюбых объёмов' },
      { icon: 'Boxes', text: '– Сборные перевозки' },
      { icon: 'PackageOpen', text: '– Перевозки\nнегабаритных грузов' },
    ],
    cta: 'Сделаем расчет, подберём\nоптимальный маршрут,\nоформим экспортные\nдокументы!',
    role: 'логист компании VolgaTrade',
  },
  en: {
    heading: ['Transport &', 'Logistics', 'Services'],
    subtitle: 'We organize official cargo delivery from any city in China to any city in Russia.',
    promo: 'Direct trucks\nfrom inland provinces of China\non your request, any type\nand various load capacity:',
    services: [
      { icon: 'Truck', text: '– Cargo transportation\nof any volume' },
      { icon: 'Boxes', text: '– Consolidated shipments' },
      { icon: 'PackageOpen', text: '– Oversized cargo\ntransportation' },
    ],
    cta: 'We will calculate, select\nthe optimal route,\nprepare all export\ndocuments!',
    role: 'Logistics Manager, VolgaTrade',
  },
};

const Index = () => {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 gap-4">

      {/* Language switcher */}
      <div className="flex gap-2">
        {(['ru', 'en'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold border-2 transition-all ${
              lang === l
                ? 'bg-[#1B5BC9] border-[#1B5BC9] text-white'
                : 'bg-white border-[#1B5BC9] text-[#1B5BC9]'
            }`}
          >
            {l === 'ru' ? 'RU' : 'EN'}
          </button>
        ))}
      </div>

      <div
        className="relative bg-white w-full max-w-[480px] shadow-2xl overflow-hidden"
        style={{ fontFamily: "'Golos Text', sans-serif" }}
      >
        {/* TOP SECTION */}
        <div className="relative bg-[#eef1f7] px-7 pt-8 pb-0 overflow-hidden min-h-[580px]">

          <h1
            className="font-display font-black uppercase leading-[0.9] text-[#0F2C5C] z-10 relative"
            style={{ fontSize: 'clamp(36px, 9vw, 54px)' }}
          >
            {t.heading.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>

          <p className="mt-5 text-[15px] text-[#1a1a1a] leading-snug z-10 relative max-w-[58%]">
            {t.subtitle}
          </p>

          <div className="mt-4 h-[3px] w-12 bg-[#1B5BC9] z-10 relative" />

          <div className="mt-5 z-10 relative max-w-[58%]">
            <p className="font-display font-bold text-[#1B5BC9] uppercase text-[11px] leading-snug tracking-wide whitespace-pre-line">
              {t.promo}
            </p>

            <div className="mt-4 space-y-3">
              {t.services.map((item) => (
                <div key={item.icon} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1B5BC9] text-white">
                    <Icon name={item.icon} size={16} />
                  </div>
                  <p className="text-[13px] text-[#1a1a1a] leading-tight whitespace-pre-line pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 mb-8 flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1B5BC9] text-white">
                <Icon name="FileText" size={16} />
              </div>
              <p className="font-display font-bold text-[#1B5BC9] uppercase text-[11px] leading-snug tracking-wide pt-1.5 whitespace-pre-line">
                {t.cta}
              </p>
            </div>
          </div>

          {/* Truck image */}
          <div className="absolute bottom-0 right-0 w-[55%] h-full pointer-events-none">
            <img
              src={TRUCK_IMG}
              alt="VolgaTrade truck"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
              }}
            />
          </div>
        </div>

        {/* BOTTOM SECTION — contacts */}
        <div className="bg-white px-7 py-6 border-t-2 border-[#eef1f7]">
          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-[#1B5BC9] text-[#1B5BC9]">
                <Icon name="User" size={18} />
              </div>
              <div>
                <p className="font-semibold text-[15px] text-[#1a1a1a] leading-tight">
                  {lang === 'ru' ? 'Егор,' : 'Egor,'}
                </p>
                <p className="text-[13px] text-[#666] leading-tight">{t.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-[#1B5BC9] text-[#1B5BC9]">
                <Icon name="Mail" size={18} />
              </div>
              <p className="text-[14px] text-[#1a1a1a]">m6.volga@mail.ru</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-[#1B5BC9] text-[#1B5BC9]">
                <Icon name="Phone" size={18} />
              </div>
              <p className="text-[14px] text-[#1a1a1a]">+7 917 101-74-44</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;