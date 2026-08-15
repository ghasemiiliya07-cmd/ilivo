"use client";

import { FormEvent, useState } from "react";

const WA = "989122971546";

const waLink = (message: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const portfolio = [
  {
    title: "فروشگاه ساعت",
    type: "فروشگاهی",
    image: "/portfolio/project-watch-hd.jpg"
  },
  {
    title: "استودیو معماری مدرن",
    type: "شرکتی",
    image: "/portfolio/project-green-hd.jpg"
  },
  {
    title: "املاک لوکس",
    type: "شرکتی",
    image: "/portfolio/project-realestate-hd.jpg"
  },
  {
    title: "کافه مدرن",
    type: "لندینگ پیج",
    image: "/portfolio/project-cafe-hd.jpg"
  }
];

const services = [
  ["▦","طراحی سایت","سایت‌های اختصاصی و مدرن"],
  ["▣","فروشگاه اینترنتی","فروش آنلاین حرفه‌ای"],
  ["⌂","سایت شرکتی","معرفی برند و خدمات"],
  ["↗","لندینگ پیج","صفحات هدفمند برای فروش"],
  ["◇","طراحی UI/UX","تجربه کاربری جذاب"],
  ["⌕","سئو","بهینه‌سازی برای رشد"]
];

const reviews = [
  ["ع","علی رضایی","مدیر املاک","سایت جدید ما خیلی حرفه‌ای‌تر از چیزی شد که تصور می‌کردیم."],
  ["س","سارا محمدی","مدیر شرکت","پشتیبانی سریع و طراحی دقیق، تجربه همکاری خیلی خوبی بود."],
  ["م","محمد احمدی","مدیر فروشگاه","ilivo دقیقاً چیزی را ساخت که برای برندمان لازم داشتیم."]
];

export default function Home() {
  const [filter,setFilter] = useState("همه");
  const [sent,setSent] = useState(false);
  const [modalOpen,setModalOpen] = useState(false);
  const [project,setProject] = useState({ name:"", type:"", budget:"" });

  const filters = ["همه","فروشگاهی","شرکتی","لندینگ پیج"];
  const projects = filter === "همه" ? portfolio : portfolio.filter(x => x.type === filter);

  function openProjectModal() {
    setModalOpen(true);
    setSent(false);
  }

  function closeProjectModal() {
    setModalOpen(false);
  }

  function sendProjectToWhatsApp() {
    if (!project.name || !project.type || !project.budget) return;

    const message =
      `سلام ilivo 👋\\n\\n` +
      `می‌خواهم برای طراحی سایت پروژه ثبت کنم.\\n\\n` +
      `👤 نام: ${project.name}\\n` +
      `💻 نوع سایت: ${project.type}\\n` +
      `💰 بودجه: ${project.budget}`;

    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const details = String(data.get("details") || "");
    const message =
      `سلام ilivo 👋\n\nمی‌خواهم برای طراحی سایت پروژه ثبت کنم.\n\nنام: ${name}\nشماره تماس: ${phone}\nتوضیحات پروژه: ${details}`;
    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="grid-bg"/>

      <header className="sticky top-0 z-50 border-b border-white/[.06] bg-[#02050b]/85 backdrop-blur-xl">
        <div className="wrap flex h-[68px] items-center justify-between">
          <a className="logo" href="#"><i>i</i>livo</a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a className="nav active" href="#">صفحه اصلی</a>
            <a className="nav" href="#services">خدمات</a>
            <a className="nav" href="#portfolio">نمونه‌کارها</a>
            <a className="nav" href="#process">فرآیند کار</a>
            <a className="nav" href="#pricing">قیمت‌ها</a>
            <a className="nav" href="#contact">تماس با ما</a>
          </nav>

          <button
            className="primary rounded-xl px-5 py-2.5 text-[10px] font-black"
            onClick={openProjectModal}
          >
            شروع پروژه
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap grid items-center gap-5 lg:grid-cols-[1fr_1.08fr]">
          <div className="hero-copy">
            <div className="mb-4 inline-flex rounded-full border border-blue-400/15 bg-blue-400/[.04] px-4 py-2 text-[9px] text-blue-200">
              طراحی سایت حرفه‌ای برای کسب‌وکارهای مدرن
            </div>
            <h1>
              طراحی وب‌سایت‌های حرفه‌ای که
              <br/>
              کسب‌وکار شما را <span className="gradient">متفاوت</span> می‌کند
            </h1>
            <p className="mt-5">
              سایت‌های سریع، مدرن و اختصاصی که فقط زیبا نیستند، بلکه برای اعتماد، فروش و رشد کسب‌وکار شما ساخته می‌شوند.
            </p>
            <div className="hero-buttons mt-7 flex gap-2.5 flex-wrap">
              <button
                className="primary rounded-xl px-6 py-3 text-[10px] font-black"
                onClick={openProjectModal}
              >
                شروع پروژه ←
              </button>
              <a className="outline rounded-xl px-6 py-3 text-[10px] font-black" href="#portfolio">
                مشاهده نمونه‌کارها
              </a>
            </div>
            <div className="hero-proof mt-7 flex items-center gap-4">
              <div className="avatars">
                {["ع","س","م","ن"].map(x=><div className="avatar" key={x}>{x}</div>)}
              </div>
              <div className="text-[9px] leading-5 text-slate-400">
                <b className="text-white">+۹۸٪ رضایت مشتری</b><br/>+۳۰ پروژه موفق
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="orb"/>
            <img
              className="hero-photo"
              src="/hero-devices.jpg"
              alt="محیط حرفه‌ای طراحی سایت"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">پروژه‌هایی که با افتخار طراحی و اجرا کرده‌ایم</div>
            <h2 className="title">نمونه‌کارهای ما</h2>
          </div>

          <div className="filters">
            {filters.map(f =>
              <button key={f} className={`filter ${filter===f?"active":""}`} onClick={()=>setFilter(f)}>{f}</button>
            )}
          </div>

          <div className="projects">
            {projects.map(p =>
              <article className="project glass" key={p.title}>
                <img className="project-photo" src={p.image} alt={p.title}/>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.type}</p>
                </div>
              </article>
            )}
          </div>

          <div className="mt-7 text-center">
            <a
              className="outline rounded-xl px-5 py-2.5 text-[9px] font-bold"
              href={waLink("سلام ilivo 👋\nمی‌خواهم نمونه‌کارهای بیشتری ببینم و درباره طراحی سایت صحبت کنم.")}
              target="_blank" rel="noreferrer"
            >
              درخواست نمونه‌کارهای بیشتر
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section pt-5">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">راهکارهای دیجیتال متناسب با نیاز شما</div>
            <h2 className="title">خدمات ما</h2>
          </div>
          <div className="services">
            {services.map(([icon,title,text]) =>
              <div className="service glass" key={title}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section pt-5">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">تجربه، کیفیت و همراهی در کنار شما</div>
            <h2 className="title">چرا ilivo؟</h2>
          </div>
          <div className="reasons glass">
            {[
              ["✧","طراحی اختصاصی","بدون قالب‌های تکراری"],
              ["◉","پشتیبانی واقعی","پاسخ‌گویی سریع"],
              ["▣","سرعت بالا","بهینه و سبک"],
              ["✿","تضمین کیفیت","تست کامل پروژه"]
            ].map(([icon,title,text]) =>
              <div className="reason" key={title}>
                <div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="process" className="section pt-5">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">از ایده تا سایت آماده</div>
            <h2 className="title">فرآیند کار ما</h2>
          </div>
          <div className="process">
            {[
              ["۰۱","مشاوره","بررسی نیاز و هدف"],
              ["۰۲","طراحی","ساخت ظاهر اولیه"],
              ["۰۳","توسعه","کدنویسی کامل"],
              ["۰۴","تست","بررسی و رفع ایراد"],
              ["۰۵","تحویل","پشتیبانی و آموزش"]
            ].map(([n,t,d]) =>
              <div className="step" key={n}>
                <div className="num">{n}</div><h3>{t}</h3><p>{d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="section pt-5">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">شفاف و متناسب با بودجه</div>
            <h2 className="title">قیمت‌گذاری</h2>
          </div>

          <div className="prices">
            <div className="price glass">
              <div className="price-name">شروع</div>
              <div className="price-num">۵,۹۰۰,۰۰۰ <small>تومان</small></div>
              <ul><li>✓ طراحی تا ۵ صفحه</li><li>✓ ریسپانسیو</li><li>✓ پنل مدیریت</li><li>✓ پشتیبانی ۱ ماهه</li></ul>
              <a className="outline price-btn" href={waLink("سلام ilivo 👋\nبرای پکیج شروع طراحی سایت پیام می‌دهم.")} target="_blank" rel="noreferrer">سفارش این پکیج</a>
            </div>

            <div className="price glass popular">
              <div className="badge">محبوب‌ترین</div>
              <div className="price-name">حرفه‌ای</div>
              <div className="price-num">۹,۹۰۰,۰۰۰ <small>تومان</small></div>
              <ul><li>✓ طراحی تا ۱۰ صفحه</li><li>✓ ریسپانسیو</li><li>✓ پنل مدیریت پیشرفته</li><li>✓ سئو پایه</li><li>✓ پشتیبانی ۳ ماهه</li></ul>
              <a className="primary price-btn" href={waLink("سلام ilivo 👋\nبرای پکیج حرفه‌ای طراحی سایت پیام می‌دهم.")} target="_blank" rel="noreferrer">سفارش این پکیج</a>
            </div>

            <div className="price glass">
              <div className="price-name">اختصاصی</div>
              <div className="price-num">تماس بگیرید</div>
              <ul><li>✓ طراحی کاملاً اختصاصی</li><li>✓ امکانات سفارشی</li><li>✓ سئو حرفه‌ای</li><li>✓ پشتیبانی ویژه</li></ul>
              <a className="outline price-btn" href={waLink("سلام ilivo 👋\nبرای پروژه اختصاصی سایت می‌خواهم مشاوره بگیرم.")} target="_blank" rel="noreferrer">مشاوره رایگان</a>
            </div>

            <div className="stats glass p-5">
              <div className="stat"><b>✧</b><div><strong>+۳۰</strong><span>پروژه موفق</span></div></div>
              <div className="stat"><b>♡</b><div><strong>+۹۸٪</strong><span>رضایت مشتری</span></div></div>
              <div className="stat"><b>◷</b><div><strong>۲۴/۷</strong><span>پشتیبانی</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-5">
        <div className="wrap">
          <div className="text-center">
            <div className="eyebrow">مشتریان درباره همکاری با ما چه می‌گویند؟</div>
            <h2 className="title">نظرات مشتریان</h2>
          </div>
          <div className="reviews">
            {reviews.map(([i,n,r,t]) =>
              <div className="review glass" key={n}>
                <div className="quote">“</div>
                <p>{t}</p>
                <div className="person">
                  <div className="person-avatar">{i}</div>
                  <div><strong>{n}</strong><span>{r}</span></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="section pt-5">
        <div className="wrap">
          <div className="cta">
            <img
              className="cta-photo"
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=88"
              alt=""
            />
            <div className="cta-content">
              <div>
                <div className="eyebrow">پروژه بعدی شما</div>
                <h2>می‌تواند همین‌جا با <span className="gradient">ilivo</span> شروع شود.</h2>
              </div>
              <button
                className="primary rounded-xl px-6 py-3 text-[10px] font-black whitespace-nowrap"
                onClick={openProjectModal}
              >
                شروع پروژه در واتساپ ←
              </button>
            </div>
          </div>

          <form className="glass rounded-[14px] p-5 mt-4" onSubmit={submit}>
            <div className="text-center">
              <div className="eyebrow">فرم درخواست پروژه</div>
              <h2 className="title text-[22px]">اطلاعات پروژه را بفرستید</h2>
              <p className="subtitle">بعد از زدن دکمه، واتساپ با متن آماده برای شما باز می‌شود.</p>
            </div>
            <div className="contact-box">
              <input name="name" required placeholder="نام شما"/>
              <input name="phone" required placeholder="شماره تماس"/>
              <textarea className="contact-full" name="details" required placeholder="توضیح کوتاه درباره سایت، امکانات یا بودجه موردنظر..."/>
              <button className="primary contact-full rounded-xl py-3 text-[10px] font-black" type="submit">
                {sent ? "در حال انتقال به واتساپ..." : "ارسال درخواست در واتساپ"}
              </button>
            </div>
          </form>
        </div>
      </section>


      {modalOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeProjectModal();
          }}
        >
          <div className="project-modal">
            <button className="modal-close" onClick={closeProjectModal} aria-label="بستن">×</button>

            <div className="modal-orb one" />
            <div className="modal-orb two" />

            <div className="modal-head">
              <div className="modal-mini-logo"><span>i</span>livo</div>
              <div className="modal-kicker">شروع پروژه جدید</div>
              <h2>پروژه‌ات را همین‌جا شروع کن ✦</h2>
              <p>سه مورد کوتاه را انتخاب کن، بعد با یک کلیک اطلاعات آماده را به واتساپ بفرست.</p>
            </div>

            <div className="modal-form">
              <label>
                <span>👤 اسم شما</span>
                <input
                  value={project.name}
                  onChange={e => setProject({...project, name:e.target.value})}
                  placeholder="مثلاً ایلیا رضایی"
                  autoFocus
                />
              </label>

              <label>
                <span>💻 نوع سایت</span>
                <div className="modal-options">
                  {["فروشگاهی","شرکتی","لندینگ پیج","سایت شخصی","سایت اختصاصی"].map(type => (
                    <button
                      type="button"
                      key={type}
                      className={`modal-option ${project.type === type ? "selected" : ""}`}
                      onClick={() => setProject({...project, type})}
                    >
                      {type}
                      {project.type === type && <b>✓</b>}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>💰 بودجه تقریبی</span>
                <div className="modal-options budget-options">
                  {["زیر ۱۰ میلیون","۱۰ تا ۲۰ میلیون","۲۰ تا ۴۰ میلیون","۴۰ میلیون به بالا","هنوز مشخص نیست"].map(budget => (
                    <button
                      type="button"
                      key={budget}
                      className={`modal-option ${project.budget === budget ? "selected" : ""}`}
                      onClick={() => setProject({...project, budget})}
                    >
                      {budget}
                      {project.budget === budget && <b>✓</b>}
                    </button>
                  ))}
                </div>
              </label>

              <button
                className="primary modal-whatsapp"
                onClick={sendProjectToWhatsApp}
                disabled={!project.name || !project.type || !project.budget}
              >
                {sent ? "واتساپ باز شد ✓" : "ارسال اطلاعات به واتساپ ↗"}
              </button>

              <div className="modal-note">
                شماره مقصد: <strong>09122971546</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <div className="logo"><i>i</i>livo</div>
            <p>طراحی و توسعه سایت‌های حرفه‌ای برای برندهایی که می‌خواهند متفاوت دیده شوند.</p>
          </div>
          <div><h3>خدمات</h3><a href="#services">طراحی سایت</a><a href="#services">فروشگاه</a><a href="#services">سایت شرکتی</a></div>
          <div><h3>لینک‌ها</h3><a href="#portfolio">نمونه‌کارها</a><a href="#pricing">قیمت‌ها</a><a href="#process">فرآیند کار</a></div>
          <div><h3>تماس</h3><a href={waLink("سلام ilivo 👋") } target="_blank" rel="noreferrer">واتساپ</a><a href="tel:09122971546">۰۹۱۲۲۹۷۱۵۴۶</a><span>ایران</span></div>
        </div>
        <div className="copyright">© ۲۰۲۶ ilivo. تمامی حقوق محفوظ است.</div>
      </footer>
    </main>
  );
}
