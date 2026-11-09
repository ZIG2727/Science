const portraits = {
  einstein: "https://upload.wikimedia.org/wikipedia/commons/2/28/Albert_Einstein_Head_cleaned.jpg",
  galileo: "https://www.meisterdrucke.at/kunstwerke/1260px/Justus%20Sustermans%20-%20Portrait%20of%20Galileo%20Galilei%20%281564-1642%29%20%20-%20%28MeisterDrucke-158535%29.jpg",
  popov: "https://www.so-ups.ru/fileadmin/news_import/16031859.jpg",
  lomonosov: "https://www.thefamouspeople.com/profiles/images/mikhail-lomonosov-3.jpg",
  mendeleev: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/08/13/DmitriMendeleev.jpg?auto=webp&quality=75&width=1200",
  tsiolkovsky: "https://kosmosnews.fr/wp-content/uploads/2022/09/Tsiolkovsky-Konstantin-Hor_03-standard-width-2000px-768x605.jpg",
  kurchatov: "https://avatars.mds.yandex.net/get-entity_search/5504037/931019008/S600xU_2x"
};

const scientists = {
  einstein: {
    index: "FILE / 01",
    name: "Альберт Эйнштейн",
    dates: "1879 — 1955 · ТЕОРЕТИЧЕСКАЯ ФИЗИКА",
    lead: "Физик, который изменил представления о пространстве, времени, свете и гравитации. Его идеи стали фундаментом современной физики.",
    heading: "Идеи, изменившие картину мира",
    tags: ["Теория относительности", "Квантовая физика", "Нобелевская премия"],
    quote: "Его работы показали, что даже самые привычные понятия — пространство и время — требуют нового взгляда.",
    paragraphs: [
      "В 1905 году, который часто называют «годом чудес» Эйнштейна, он опубликовал несколько работ, изменивших физику. Учёный объяснил броуновское движение, предложил квантовое объяснение фотоэффекта и сформулировал специальную теорию относительности.",
      "Связь массы и энергии выражается знаменитой формулой E = mc². Она показывает, что масса и энергия — разные формы одной физической величины. В 1915 году Эйнштейн завершил общую теорию относительности: гравитация в ней описывается как искривление пространства-времени.",
      "В 1921 году Эйнштейну присудили Нобелевскую премию по физике — прежде всего за объяснение закона фотоэлектрического эффекта. Теория относительности сделала его всемирно известным, но именно фотоэффект был указан в формулировке премии. Помимо науки, Эйнштейн выступал за мир, гуманизм и международное сотрудничество."
    ],
    achievements: [
      ["1905 · СПЕЦИАЛЬНАЯ ОТНОСИТЕЛЬНОСТЬ", "Показал, что измерения времени и пространства зависят от движения наблюдателя, а скорость света в вакууме постоянна."],
      ["E = mc² · МАССА И ЭНЕРГИЯ", "Установил эквивалентность массы и энергии — одну из самых известных связей в физике."],
      ["1915 · ОБЩАЯ ОТНОСИТЕЛЬНОСТЬ", "Создал новую теорию гравитации, описывающую её через геометрию пространства-времени."],
      ["1921 · НОБЕЛЕВСКАЯ ПРЕМИЯ", "Получил премию по физике за объяснение фотоэлектрического эффекта и вклад в теоретическую физику."]
    ],
    timeline: [["1879", "Родился в немецком городе Ульм."], ["1905", "Опубликовал ключевые работы «года чудес»."], ["1915", "Представил общую теорию относительности."], ["1922", "Получил Нобелевскую премию за 1921 год."]],
    sources: [["Nobel Prize — биография и работы", "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/"], ["Nobel Prize — за что присуждена премия", "https://www.nobelprize.org/prizes/physics/1921/summary/"], ["Max Planck Society — Эйнштейн", "https://www.nobel.mpg.de/en/albert-einstein"], ["Wikimedia Commons — портрет", "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head_cleaned.jpg"]],
    imageSource: "Портрет: Wikimedia Commons"
  },
  galileo: {
    index: "FILE / 02",
    name: "Галилео Галилей",
    dates: "1564 — 1642 · АСТРОНОМИЯ И ФИЗИКА",
    lead: "Астроном, математик и физик, чьи наблюдения с телескопом изменили представление человечества о Солнечной системе.",
    heading: "Человек, который приблизил звёзды",
    tags: ["Телескопические наблюдения", "Механика", "Научный метод"],
    quote: "Галилей показал, что природу нужно не только описывать, но и внимательно наблюдать и проверять опытом.",
    paragraphs: [
      "В начале XVII века Галилей усовершенствовал телескоп и направил его на небесные объекты. Он увидел горы и кратеры на Луне, обнаружил четыре крупнейших спутника Юпитера и наблюдал фазы Венеры. Эти наблюдения противоречили старой картине, в которой Земля считалась неподвижным центром всех небесных движений.",
      "Открытие спутников Юпитера показало, что не все небесные тела обращаются вокруг Земли. Фазы Венеры стали важным аргументом в пользу движения Венеры вокруг Солнца. Галилей также наблюдал солнечные пятна и исследовал Млечный Путь, обнаружив, что он состоит из множества слабых звёзд.",
      "В физике Галилей изучал движение тел, падение и инерцию. Он делал акцент на измерениях, математическом описании и опыте. Такой подход стал одной из важных основ экспериментального естествознания."
    ],
    achievements: [
      ["1610 · СПУТНИКИ ЮПИТЕРА", "Открыл четыре крупнейших спутника планеты: Ио, Европу, Ганимед и Каллисто."],
      ["ЛУНА · РЕЛЬЕФ ПОВЕРХНОСТИ", "С помощью телескопа увидел горы и неровности на Луне, показав, что небесные тела не идеальны и не гладкие."],
      ["ВЕНЕРА · ФАЗЫ ПЛАНЕТЫ", "Наблюдал полный набор фаз Венеры — важное подтверждение того, что она обращается вокруг Солнца."],
      ["МЕХАНИКА · ДВИЖЕНИЕ ТЕЛ", "Исследовал свободное падение и движение, заложив основы математического изучения механики."]
    ],
    timeline: [["1564", "Родился в Пизе, Италия."], ["1609", "Создал усовершенствованный телескоп."], ["1610", "Опубликовал наблюдения в «Звёздном вестнике»."], ["1632", "Вышел «Диалог о двух главнейших системах мира»." ]],
    sources: [["NASA — наблюдения Луны, Юпитера и Венеры", "https://science.nasa.gov/solar-system/moon/galileos-observations-of-the-moon-jupiter-venus-and-the-sun/"], ["Stanford Encyclopedia — Galileo", "https://plato.stanford.edu/entries/galileo/"], ["MeisterDrucke — портрет Галилея", "https://www.meisterdrucke.at/kunstwerke/Justus-Sustermans/158535/Portr%C3%A4t-von-Galileo-Galilei-%281564-1642%29.html"]],
    imageSource: "Портрет: Justus Sustermans / MeisterDrucke"
  },
  popov: {
    index: "FILE / 03",
    name: "Александр Попов",
    dates: "1859 — 1906 · ФИЗИКА И РАДИОТЕХНИКА",
    lead: "Русский физик и электротехник, один из пионеров радиосвязи. Его приёмник позволил обнаруживать и принимать электромагнитные сигналы без проводов.",
    heading: "Сигнал, который преодолел расстояние",
    tags: ["Радиоприёмник", "Электромагнитные волны", "Беспроводная связь"],
    quote: "Эксперименты Попова помогли превратить невидимые электромагнитные волны в практическое средство связи.",
    paragraphs: [
      "Александр Попов преподавал физику и электротехнику в Кронштадте и много экспериментировал с электромагнитными волнами. В 1895 году он собрал прибор для обнаружения и регистрации электрических колебаний. Устройство реагировало на сигналы и могло отмечать атмосферные разряды — поэтому его также называли грозоотметчиком.",
      "7 мая 1895 года Попов публично представил свой приёмник на заседании Русского физико-химического общества. Позднее он усовершенствовал систему и добавил телеграфный аппарат, чтобы передавать сообщения с помощью азбуки Морзе. В марте 1896 года была продемонстрирована беспроводная передача сигнала на расстояние около 250 метров.",
      "История радио связана с работой нескольких исследователей в разных странах. Попов занимает важное место среди пионеров радиотехники благодаря раннему приёмнику, экспериментам и созданию практических систем беспроводной связи."
    ],
    achievements: [
      ["1895 · РАДИОПРИЁМНИК", "Создал прибор, который обнаруживал и регистрировал электромагнитные колебания."],
      ["1895 · ГРОЗООТМЕТЧИК", "Применил приёмник для регистрации сигналов атмосферного происхождения, включая электрические разряды."],
      ["1896 · РАДИОТЕЛЕГРАФ", "Добавил телеграфный аппарат Морзе и продемонстрировал передачу сигнала без проводов."],
      ["ПРАКТИКА · РАДИОСВЯЗЬ", "Его схема стала одной из важных ранних основ аппаратуры радиосвязи."]
    ],
    timeline: [["1859", "Родился в Пермской губернии."], ["1882", "Окончил Санкт-Петербургский университет."], ["1895", "Представил радиоприёмник научному обществу."], ["1896", "Показал беспроводную передачу телеграфного сигнала."]],
    sources: [["Музей связи Попова — первый радиоприёмник", "https://rustelecom-museum.ru/specialists/monuments/pervyy-radiopriemnik-a-s-popova/"], ["Музей «Нижегородская радиолаборатория»", "https://nrl.unn.ru/pervjy-modul/"], ["СПбГЭТУ «ЛЭТИ» — Александр Попов", "https://new.etu.ru/ru/home/istoriya/pochetnye-zvaniya-i-znaki/pochetnyj-inzhener-elektrik/popov-aleksandr-stepanovich"], ["Системный оператор — портрет Попова", "https://www.so-ups.ru/memorial-day/history-event/news/15321/"]],
    imageSource: "Портрет: Системный оператор ЕЭС России"
  },
  lomonosov: {
    index: "FILE / 04",
    name: "Михаил Ломоносов",
    dates: "1711 — 1765 · ЕСТЕСТВОЗНАНИЕ И ХИМИЯ",
    lead: "Учёный-энциклопедист, физик, химик и астроном. Он развивал экспериментальную науку и помог создать университетскую научную традицию в России.",
    heading: "Учёный, которому было тесно в одной науке",
    tags: ["Физическая химия", "Закон сохранения материи", "Астрономия"],
    quote: "Ломоносов соединял наблюдение, эксперимент и смелую мысль — от химической лаборатории до изучения планет.",
    paragraphs: [
      "Интересы Михаила Ломоносова охватывали физику, химию, астрономию, геологию, историю и литературу. В 1748 году при Академии наук по его инициативе была создана первая в России химическая лаборатория, где проводились систематические эксперименты.",
      "В письме Леонарду Эйлеру 1748 года Ломоносов сформулировал принцип сохранения материи и движения: изменения в природе не означают исчезновения материи. В 1756 году он проводил опыты с нагреванием металлов в запаянных сосудах. Эти исследования стали важной частью истории закона сохранения массы.",
      "Ломоносов развивал физическую химию, исследовал тепловые явления и свойства веществ. В 1761 году, наблюдая прохождение Венеры по диску Солнца, он пришёл к выводу о наличии у планеты атмосферы. Он также участвовал в создании Московского университета, открытого в 1755 году, и разработал технологию цветного стекла для мозаик."
    ],
    achievements: [
      ["1748 · СОХРАНЕНИЕ МАТЕРИИ", "Сформулировал принцип сохранения материи и движения, ставший важной частью естественно-научной картины мира."],
      ["1748 · ХИМИЧЕСКАЯ ЛАБОРАТОРИЯ", "Добился создания первой в России научной химической лаборатории для экспериментальных исследований."],
      ["1761 · АТМОСФЕРА ВЕНЕРЫ", "Во время прохождения Венеры по диску Солнца обнаружил признаки её атмосферы."],
      ["1755 · МОСКОВСКИЙ УНИВЕРСИТЕТ", "Был одним из инициаторов основания университета, который сегодня носит его имя."]
    ],
    timeline: [["1711", "Родился в деревне Денисовка на Севере России."], ["1748", "Сформулировал принцип сохранения материи и движения."], ["1755", "Открылся Московский университет."], ["1761", "Наблюдал прохождение Венеры и сделал вывод об атмосфере планеты."]],
    sources: [["МГУ — к 300-летию Ломоносова", "https://www.journ.msu.ru/about/lomonosov/"], ["Российская академия наук — химическая лаборатория", "https://www.ras.ru/lomonosov/29bfeb71-490b-4899-8068-d7a1d3d57f2d.aspx?hidetoc=0"], ["American Physical Society — Ломоносов", "https://www.aps.org/apsnews/2011/11/this-month-in-physics-history"], ["The Famous People — портрет Ломоносова", "https://www.thefamouspeople.com/profiles/mikhail-lomonosov-7496.php"]],
    imageSource: "Портрет: TheFamousPeople / исторический портрет"
  },
  mendeleev: {
    index: "FILE / 05",
    name: "Дмитрий Менделеев",
    dates: "1834 — 1907 · ХИМИЯ",
    lead: "Химик, создавший периодическую систему элементов. Его таблица не просто упорядочила известные элементы, но и позволила предсказывать существование новых.",
    heading: "Порядок среди элементов",
    tags: ["Периодический закон", "Таблица элементов", "Химия"],
    quote: "Периодическая система стала картой химического мира: положение элемента в ней раскрывает закономерности его свойств.",
    paragraphs: [
      "В XIX веке химики знали уже много элементов, но общей системы, которая убедительно объясняла бы сходство их свойств, ещё не существовало. Менделеев искал закономерность и в феврале 1869 года представил вариант периодической системы, расположив элементы по возрастанию атомной массы и повторяемости свойств.",
      "Главная сила таблицы была не только в классификации. Менделеев оставил в ней места для ещё не открытых элементов и предсказал свойства некоторых из них. Позже открытие галлия, скандия и германия подтвердило точность его прогнозов и укрепило доверие к периодическому закону.",
      "Менделеев занимался не только периодической системой: он писал учебники, исследовал растворы и свойства газов, интересовался нефтяной промышленностью и вопросами измерений. В 1893 году он возглавил Главную палату мер и весов, способствуя развитию метрологии в России."
    ],
    achievements: [
      ["1869 · ПЕРИОДИЧЕСКАЯ СИСТЕМА", "Предложил систему, показывающую периодическое повторение свойств химических элементов."],
      ["ПРЕДСКАЗАНИЯ · НОВЫЕ ЭЛЕМЕНТЫ", "Оставил места для неизвестных элементов и описал свойства будущих галлия, скандия и германия."],
      ["ХИМИЯ · УЧЕБНИКИ И ИССЛЕДОВАНИЯ", "Создал учебник «Основы химии» и внёс вклад в изучение растворов, газов и нефтяных смесей."],
      ["1893 · МЕТРОЛОГИЯ", "Возглавил Главную палату мер и весов, занимаясь вопросами точных измерений и стандартов."]
    ],
    timeline: [["1834", "Родился в Тобольске."], ["1869", "Представил первую версию периодической системы."], ["1875–1886", "Были открыты элементы, предсказанные системой."], ["1893", "Возглавил Главную палату мер и весов."]],
    sources: [["Royal Society of Chemistry — история таблицы", "https://periodic-table.rsc.org/history/about"], ["Royal Society of Chemistry — история периодической системы", "https://periodic-table.rsc.org/about/the-story-and-the-meaning/"], ["The Independent — портрет Менделеева", "https://www.independent.co.uk/news/people/dmitri-mendeleev-profile-google-doodle-marks-the-182nd-birthday-of-the-man-who-invented-the-periodic-table-a6860826.html"]],
    imageSource: "Портрет: The Independent / историческая фотография"
  },
  tsiolkovsky: {
    index: "FILE / 06",
    name: "Константин Циолковский",
    dates: "1857 — 1935 · ТЕОРИЯ КОСМОНАВТИКИ",
    lead: "Теоретик космонавтики, который математически исследовал движение ракет и возможность полётов за пределы Земли задолго до начала космической эры.",
    heading: "От земных расчётов к космическим полётам",
    tags: ["Ракетная техника", "Космический полёт", "Орбитальные станции"],
    quote: "Циолковский превратил мечту о космосе в задачу, которую можно описать формулами и инженерными принципами.",
    paragraphs: [
      "Константин Циолковский самостоятельно изучал математику и физику, а затем работал учителем. Его интересовали воздухоплавание, реактивное движение и возможность путешествий за пределы Земли. В 1903 году была опубликована его работа «Исследование мировых пространств реактивными приборами», ставшая одним из важных ранних теоретических трудов по космонавтике.",
      "Циолковский вывел формулу, связывающую изменение скорости ракеты с отношением её начальной и конечной массы и скоростью истечения газов. Сегодня она известна как формула Циолковского. Он также подробно рассматривал многоступенчатые ракеты, жидкое топливо и движение аппаратов в космическом пространстве.",
      "В своих трудах учёный описывал орбитальные станции, выход человека в открытый космос и использование ракет для межпланетных путешествий. Он не строил космические ракеты, но его теоретические работы повлияли на развитие ракетной техники и стали частью научной основы будущей космонавтики."
    ],
    achievements: [
      ["1903 · РАКЕТНОЕ ДВИЖЕНИЕ", "Опубликовал работу о применении реактивных приборов для исследования космического пространства."],
      ["ФОРМУЛА ЦИОЛКОВСКОГО", "Вывел математическую зависимость, описывающую изменение скорости ракеты при расходовании топлива."],
      ["МНОГОСТУПЕНЧАТЫЕ РАКЕТЫ", "Исследовал идею последовательного отделения ступеней для достижения больших скоростей."],
      ["ОРБИТАЛЬНЫЕ СТАНЦИИ", "Рассматривал проекты станций на орбите, скафандров и длительного пребывания человека в космосе."]
    ],
    timeline: [["1857", "Родился в селе Ижевское Рязанской губернии."], ["1878", "Вернулся после учёбы и начал преподавать."], ["1903", "Опубликовал труд о космических полётах на ракетах."], ["1920–1930-е", "Развивал идеи орбитальных станций и межпланетных путешествий."]],
    sources: [["NASA History — биография Циолковского", "https://www.nasa.gov/wp-content/uploads/static/history/sputnik/kon.html"], ["NASA — биографии пионеров космонавтики", "https://www.nasa.gov/history/sputnik/bio.html"], ["Kosmosnews — портрет Циолковского", "https://kosmosnews.fr/2022/09/17/qui-etait-konstantin-e-tsiolkovsky/"]],
    imageSource: "Портрет: Kosmosnews / историческая фотография"
  },
  kurchatov: {
    index: "FILE / 07",
    name: "Игорь Курчатов",
    dates: "1903 — 1960 · ЯДЕРНАЯ ФИЗИКА",
    lead: "Физик, организатор крупных научных проектов и один из руководителей развития ядерной науки в СССР. Важной частью его поздней работы стало мирное применение атомной энергии.",
    heading: "Энергия атома и сила науки",
    tags: ["Ядерная физика", "Реакторы", "Мирный атом"],
    quote: "История Курчатова — это пример того, как фундаментальные исследования переходят в большие инженерные проекты.",
    paragraphs: [
      "Игорь Курчатов начинал научную карьеру с исследований радиоактивности и физических свойств вещества. В 1930-е годы он стал одним из ведущих специалистов по ядерной физике и участвовал в создании циклотрона — установки для ускорения заряженных частиц.",
      "В 1943 году Курчатов возглавил большую программу исследований в области ядерной физики. Работа потребовала координации множества научных коллективов и инженеров. В дальнейшем учёный всё активнее выступал за развитие мирного использования атомной энергии.",
      "Под научным руководством Курчатова развивались проекты, связанные с атомной энергетикой. В 1954 году начала работу Обнинская АЭС — первая в мире атомная электростанция, вырабатывавшая электричество для энергосистемы. Учёный также поддерживал исследования управляемого термоядерного синтеза; в этой области появился токамак — установка для изучения горячей плазмы."
    ],
    achievements: [
      ["1930-е · ЯДЕРНАЯ ФИЗИКА", "Проводил исследования радиоактивности и участвовал в развитии экспериментальной базы ядерной физики."],
      ["1937 · ЦИКЛОТРОН", "Участвовал в создании первого советского циклотрона — установки для ускорения заряженных частиц."],
      ["1954 · ОБНИНСКАЯ АЭС", "Под его научным руководством была создана первая в мире промышленная атомная электростанция."],
      ["1950-е · ТОКАМАК", "Поддерживал исследования управляемого термоядерного синтеза и развитие установок для изучения плазмы."]
    ],
    timeline: [["1903", "Родился в городе Сим."], ["1925", "Начал работу в Физико-техническом институте."], ["1937", "Завершилось создание первого советского циклотрона."], ["1954", "Начала работу Обнинская атомная электростанция."]],
    sources: [["Президентская библиотека — Игорь Курчатов", "https://www.prlib.ru/Great_Russia/outstanding_scientists_XX/Kurchatov"], ["Atomic Heritage Foundation — Игорь Курчатов", "https://ahf.nuclearmuseum.org/ahf/profile/igor-kurchatov/"], ["История Обнинска — архивное фото", "https://nickpivnev.github.io/"]],
    imageSource: "Портрет: историческое фото, архивная публикация об Обнинске"
  }
};

const systemShell = document.getElementById("systemShell");
const articleModal = document.getElementById("articleModal");
const relativityOverlay = document.getElementById("relativityOverlay");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lastFocusedElement = null;
let relativityBusy = false;

function makeStars() {
  const host = document.getElementById("systemStars");
  if (!host) return;
  for (let i = 0; i < 82; i++) {
    const star = document.createElement("span");
    star.className = "star-speck";
    star.style.left = `${(i * 37.17) % 100}%`;
    star.style.top = `${(i * 61.73) % 100}%`;
    star.style.setProperty("--duration", `${2.2 + (i % 7) * .6}s`);
    star.style.setProperty("--delay", `${(i % 9) * -.41}s`);
    if (i % 9 === 0) { star.style.width = "3px"; star.style.height = "3px"; }
    host.appendChild(star);
  }
}
makeStars();

function openUniverse() {
  const section = document.getElementById("universe");
  section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => systemShell.classList.add("is-open"), reducedMotion ? 0 : 350);
}
["navScientists", "heroScientists", "revealScientists", "closingScientists"].forEach(id => {
  document.getElementById(id)?.addEventListener("click", openUniverse);
});

function safeText(tag, value) {
  tag.textContent = value;
}

function renderArticle(key) {
  const person = scientists[key];
  if (!person) return;
  lastFocusedElement = document.activeElement;
  articleModal.dataset.theme = key;
  articleModal.querySelector(".article-sheet").dataset.theme = key;
  safeText(document.getElementById("articleIndex"), person.index);
  safeText(document.getElementById("articleDates"), person.dates);
  safeText(document.getElementById("articleName"), person.name);
  safeText(document.getElementById("articleLead"), person.lead);
  safeText(document.getElementById("articleHeading"), person.heading);
  safeText(document.getElementById("articleQuote"), person.quote);
  safeText(document.getElementById("articleImageCaption"), person.imageSource.toUpperCase());

  const image = document.getElementById("articleImage");
  image.src = portraits[key];
  image.alt = `Портрет: ${person.name}`;
  image.onerror = () => {
    image.style.opacity = "0";
    image.parentElement.classList.add("image-unavailable");
  };
  image.onload = () => {
    image.style.opacity = "1";
    image.parentElement.classList.remove("image-unavailable");
  };

  const tags = document.getElementById("articleTags");
  tags.replaceChildren(...person.tags.map(label => {
    const span = document.createElement("span");
    span.className = "article-tag";
    span.textContent = label;
    return span;
  }));

  const paragraphs = document.getElementById("articleParagraphs");
  paragraphs.replaceChildren(...person.paragraphs.map(text => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }));

  const achievements = document.getElementById("articleAchievements");
  achievements.replaceChildren(...person.achievements.map(([label, text]) => {
    const item = document.createElement("div");
    item.className = "achievement-item";
    const heading = document.createElement("b");
    heading.textContent = label;
    const copy = document.createElement("p");
    copy.textContent = text;
    item.append(heading, copy);
    return item;
  }));

  const timeline = document.getElementById("articleTimeline");
  timeline.replaceChildren(...person.timeline.map(([year, text]) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    const date = document.createElement("span");
    date.className = "timeline-year";
    date.textContent = year;
    const copy = document.createElement("span");
    copy.className = "timeline-text";
    copy.textContent = text;
    item.append(date, copy);
    return item;
  }));

  const sources = document.getElementById("articleSources");
  sources.replaceChildren(...person.sources.map(([label, url]) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  }));

  articleModal.hidden = false;
  document.body.classList.add("modal-open");
  articleModal.scrollTop = 0;
  document.getElementById("closeArticle").focus({ preventScroll: true });
}

function closeArticle() {
  if (articleModal.hidden) return;
  articleModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus({ preventScroll: true });
}

document.querySelectorAll("[data-scientist]").forEach(node => {
  node.addEventListener("click", () => renderArticle(node.dataset.scientist));
});
document.getElementById("closeArticle").addEventListener("click", closeArticle);
document.getElementById("articleBackToMap").addEventListener("click", closeArticle);
document.querySelector("[data-close-article]").addEventListener("click", closeArticle);

function sleep(ms) { return new Promise(resolve => window.setTimeout(resolve, ms)); }
async function startRelativity() {
  if (relativityBusy) return;
  relativityBusy = true;
  closeArticle();
  systemShell.classList.add("is-open");
  systemShell.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  relativityOverlay.hidden = false;
  relativityOverlay.classList.remove("phase-warp");
  void relativityOverlay.offsetWidth;
  relativityOverlay.classList.add("phase-gray");
  safeText(document.getElementById("relativityMessage"), "ПРОСТРАНСТВО И ВРЕМЯ — ЧАСТИ ЕДИНОГО ЦЕЛОГО");

  await sleep(reducedMotion ? 80 : 2000);
  safeText(document.getElementById("relativityMessage"), "ПРИБЛИЖЕНИЕ К ГОРИЗОНТУ СОБЫТИЙ");
  relativityOverlay.classList.remove("phase-gray");
  relativityOverlay.classList.add("phase-warp");
  systemShell.classList.add("is-warping");

  await sleep(reducedMotion ? 80 : 3000);
  relativityOverlay.classList.remove("phase-warp");
  relativityOverlay.hidden = true;
  systemShell.classList.remove("is-warping");
  renderArticle("einstein");
  relativityBusy = false;
}
document.getElementById("einsteinNode").addEventListener("click", startRelativity);

// Keyboard handling and scroll effects.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeArticle();
    if (relativityBusy) return;
  }
});

const progress = document.getElementById("scrollProgress");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${amount}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

// A subtle parallax movement gives the hero and star map a sense of depth.
if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  let pointerFrame = null;
  window.addEventListener("pointermove", event => {
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - .5) * 10;
      const y = (event.clientY / window.innerHeight - .5) * 10;
      const visual = document.querySelector(".hero-visual");
      if (visual && window.scrollY < window.innerHeight) visual.style.translate = `${x * .35}px ${y * .35}px`;
      const nebula = document.querySelector(".system-nebula");
      if (nebula) nebula.style.translate = `${x * .2}px ${y * .2}px`;
    });
  }, { passive: true });
}
