/* Site-wide language and appearance preferences.
   Kinyarwanda text is a first editorial draft for owner review. */
(() => {
  "use strict";
  const LANGUAGE_KEY = "connect-consulting-language";
  const THEME_KEY = "connect-consulting-theme";
  const translations = {
    "Home":"Ahabanza",
    "About Us":"Ibyerekeye Twe",
    "Services":"Serivisi",
    "Insights":"Ubumenyi n'Inama",
    "Start a conversation":"Tuganire",
    "Practical insight. Purposeful progress.":"Ubushishozi bufatika. Iterambere rifite intego.",
    "Kigali, Rwanda":"Kigali, u Rwanda",
    "COMPANY LTD":"COMPANY LTD",
    "Grow your business":"Teza imbere ubucuruzi bwawe",
    "with clarity.":"mu cyerekezo gisobanutse.",
    "Business consulting · Kigali, Rwanda":"Ubujyanama mu bucuruzi · Kigali, u Rwanda",
    "We work alongside your business to strengthen business development, improve customer experience, and support confident financial decision-making.":"Dukorana n'ubucuruzi bwawe mu guteza imbere ibikorwa, kunoza ubunararibonye bw'abakiriya no gufasha mu gufata ibyemezo by'imari byizewe.",
    "Explore our services":"Reba serivisi zacu",
    "People · Performance · Progress":"Abantu · Imikorere · Iterambere",
    "About Connect-Consulting":"Ibyerekeye Connect-Consulting",
    "A thoughtful partner for your next step.":"Umufatanyabikorwa utekereza neza ku ntambwe ikurikira.",
    "Ready to move your business forward? We’ll listen to your priorities and work with you to find a practical next step. Discover how Connect-Consulting can support your business.":"Witeguye guteza imbere ubucuruzi bwawe? Tuzumva iby'ingenzi kuri wowe, dufatanye gushaka intambwe ifatika ikurikira. Menya uko Connect-Consulting ishobora kugufasha.",
    "Discover About Us":"Menya ibirenze kuri twe",
    "Our services":"Serivisi zacu",
    "Where would you like to make progress?":"Ni hehe wifuza kubona iterambere?",
    "Explore the three areas where Connect-Consulting can support your organisation.":"Reba ibyiciro bitatu Connect-Consulting ishobora gufashamo ikigo cyawe.",
    "Business Development":"Iterambere ry'Ubucuruzi",
    "Customer Experience":"Uburambe bw'Abakiriya",
    "Finance Consultancy":"Ubujyanama mu by'Imari",
    "Explore support for business priorities and growth.":"Menya uko twafasha mu by'ingenzi no mu kuzamura ubucuruzi.",
    "Learn about our customer experience consultancy.":"Menya serivisi zacu zijyanye n'ubunararibonye bw'abakiriya.",
    "See how financial consultancy could support your decisions.":"Reba uko ubujyanama mu by'imari bwafasha mu byemezo byawe.",
    "See all services and details":"Reba serivisi zose n'ibisobanuro byazo",
    "Our approach":"Uburyo dukoramo",
    "Thoughtful work, shaped around your organisation.":"Akazi gatekerejwe neza, gashingiye ku byo ikigo cyawe gikeneye.",
    "What would make the biggest difference to your business right now? You need a partner who listens, shapes support around your priorities, and helps measure progress against your goals.":"Ni iki cyagira uruhare rukomeye mu guteza imbere ubucuruzi bwawe ubu? Ukeneye umufatanyabikorwa wumva ibyo ukeneye, agategura ubufasha bujyanye n'iby'ingenzi kuri wowe kandi akagufasha gupima intambwe ugezeho.",
    "Explore our approach":"Menya uburyo dukoramo",
    "Ready to take the next step?":"Witeguye gutera indi ntambwe?",
    "Tell us what your business is working through. We’ll listen to your priorities and explore how we can support you.":"Tubwire ibibazo cyangwa intego ubucuruzi bwawe bufite. Tuzumva iby'ingenzi kuri wowe, turebe uko twagufasha.",
    "Business consulting in Kigali, Rwanda. Practical insight and purposeful progress for your organisation.":"Ubujyanama mu bucuruzi i Kigali, mu Rwanda. Ubushishozi bufatika n'iterambere rifite intego ku kigo cyawe.",
    "Explore":"Ibyo wakwiga",
    "Contact":"Twandikire",
    "Subscribe to our newsletter":"Iyandikishe ku makuru yacu",
    "Get practical ideas and occasional updates to support your business. No spam.":"Jya ubona ibitekerezo bifatika n'amakuru mashya yagufasha mu bucuruzi. Nta butumwa budakenewe.",
    "Your email address":"Aderesi yawe ya imeri",
    "Join":"Iyandikishe",
    "Insight that starts with listening.":"Ubushishozi butangirira ku kumva ibyo mukeneye.",
    "A practical partner for the work ahead.":"Umufatanyabikorwa mu bikorwa biri imbere.",
    "What guides us today, and where we’re going.":"Ibiyobora uyu munsi n'aho tugana.",
    "To help businesses strengthen growth, make informed financial decisions and build customer loyalty.":"Gufasha ibigo guteza imbere ubucuruzi, gufata ibyemezo by'imari bishingiye ku makuru no kubaka ubudahemuka bw'abakiriya.",
    "A business community where organisations grow with confidence, financial resilience and lasting customer relationships.":"Kubaka umuryango w'ubucuruzi aho ibigo bikura byizeye, bifite imbaraga mu by'imari kandi bifitanye umubano urambye n'abakiriya.",
    "What you can expect from us.":"Ibyo ushobora kutwitegaho.",
    "Integrity":"Ubunyangamugayo",
    "Innovation":"Guhanga udushya",
    "Transparency":"Gukorera mu mucyo",
    "Measurable Results":"Ibisubizo bipimika",
    "Client perspectives on thoughtful support.":"Ibitekerezo by'abakiriya ku bufasha butekerejweho.",
    "Illustrative placeholder testimonials for layout review. Replace them with verified, approved client feedback before publication.":"Ubu ni ubuhamya bw'agateganyo bwo kugerageza imiterere y'urubuga. Buzasimbuzwe ibitekerezo by'abakiriya byemejwe kandi bifite gihamya mbere yo gutangaza urubuga.",
    "Ready to talk about your business?":"Witeguye kuganira ku bucuruzi bwawe?",
    "Share what you’re working toward. We’ll listen to your priorities and explore how Connect-Consulting can support your next step.":"Tubwire ibyo wifuza kugeraho. Tuzumva iby'ingenzi kuri wowe turebe uko Connect-Consulting yagufasha gutera intambwe ikurikira.",
    "Focused expertise. Connected thinking.":"Ubumenyi bwihariye. Ibitekerezo bihuzwa.",
    "Choose one service, combine two, or bring all three together—depending on what your organisation needs. Each engagement is shaped around your priorities and the questions you need to address.":"Hitamo serivisi imwe, uhuze ebyiri cyangwa ukoreshe zose uko ari eshatu—bitewe n'ibyo ikigo cyawe gikeneye. Buri bufatanye butegurwa hashingiwe ku byo wimirije imbere no ku bibazo ushaka gukemura.",
    "Identify opportunities, attract clients and support practical business growth.":"Menya amahirwe, shaka abakiriya kandi uteze imbere ubucuruzi mu buryo bufatika.",
    "Clarify your target customers, sales process and priorities, then shape a practical approach for developing opportunities and following up leads.":"Sobanura abakiriya ugamije, uburyo bwo kugurisha n'iby'ingenzi kuri wowe, hanyuma utegure uburyo bufatika bwo kubona amahirwe no gukurikirana abayashobora kuba abakiriya.",
    "Identify potential partners and assess how aligned relationships could support your organisation’s goals, reach or capabilities.":"Shaka abafatanyabikorwa bashoboka kandi usuzume uko imikoranire ihuye n'intego zawe ishobora gufasha ikigo kugera kure cyangwa kongera ubushobozi.",
    "Gather and organise information about customers, market conditions and competitors to inform your next business decisions.":"Kusanya kandi utegure amakuru ku bakiriya, uko isoko rihagaze n'abahanganye nawe kugira ngo afashe mu byemezo bizakurikiraho.",
    "Plan a repeatable approach to attracting, tracking and following up prospective customers through suitable channels.":"Tegura uburyo buhoraho bwo gukurura abantu bashobora kuba abakiriya, kubakurikirana no kongera kuvugana na bo ukoresheje inzira ziboneye.",
    "Review how your organisation presents itself and shape marketing priorities around its audience, offer and objectives.":"Suzuma uko ikigo cyawe cyigaragaza, utegure iby'ingenzi mu kwamamaza ushingiye ku bo kigamije, ibyo gitanga n'intego zacyo.",
    "Review customer journeys and service delivery with your organisation’s goals in mind.":"Suzuma urugendo rw'umukiriya n'uko serivisi zitangwa, uzirikana intego z'ikigo cyawe.",
    "Set customer experience priorities that reflect what customers need and what your business aims to deliver.":"Shyiraho iby'ingenzi mu bunararibonye bw'abakiriya bijyanye n'ibyo bakeneye n'ibyo ubucuruzi bwawe bwiyemeje gutanga.",
    "Map key interactions with your organisation to surface friction points and opportunities to improve the customer experience.":"Garagaza intambwe z'ingenzi umukiriya anyuramo mu gukorana n'ikigo cyawe kugira ngo umenye ibimugora n'amahirwe yo kunoza ubunararibonye bwe.",
    "Review service processes and touchpoints, then identify practical changes that can make delivery clearer and more consistent.":"Suzuma uburyo serivisi zitangwa n'aho umukiriya ahurira n'ikigo, umenye impinduka zifatika zatuma serivisi zitangwa neza kandi mu buryo buhoraho.",
    "Support teams with relevant guidance and learning to strengthen day-to-day customer interactions.":"Fasha amatsinda y'abakozi kubona ubumenyi n'amabwiriza akenewe kugira ngo imikoranire ya buri munsi n'abakiriya irusheho kuba myiza.",
    "Set up practical ways to gather and review customer feedback so your team can identify patterns and decide what to improve.":"Tegura uburyo bufatika bwo gukusanya no gusuzuma ibitekerezo by'abakiriya kugira ngo itsinda ryawe ribone ibikunda kugaruka kandi rifate icyemezo ku bigomba kunozwa.",
    "Evaluate call handling and customer interactions against agreed service standards. Where relevant, review CRM records and Voice of Customer (VoC) feedback to identify patterns, coaching needs and practical improvement areas. Customer service quality specialists may support delivery, as noted in the company profile.":"Suzuma uko telefoni z'abakiriya zakirwa n'uko baganirizwa ugereranyije n'ibipimo bya serivisi mwumvikanyeho. Aho bikenewe, suzuma inyandiko za CRM n'ibitekerezo by'abakiriya (VoC) kugira ngo hamenyekane ibikunda kugaruka, ibyo abakozi bakeneye kwigishwa n'ibishobora kunozwa. Abahanga mu gusuzuma ireme rya serivisi bashobora kugira uruhare mu kazi.",
    "Support financial planning, analysis and advisory work around your organisation’s needs.":"Fasha mu igenamigambi ry'imari, isesengura n'ubujyanama bijyanye n'ibyo ikigo cyawe gikeneye.",
    "The exact scope of finance work, including regulated or qualification-dependent activities, should be agreed for each engagement.":"Imipaka nyayo ya serivisi z'imari, cyane cyane izisaba uruhushya cyangwa impamyabumenyi yihariye, igomba kumvikana kuri buri bufatanye.",
    "Build budgets, forecasts and planning scenarios to help you assess options and prepare for changing business needs.":"Tegura ingengo y'imari, ibiteganyijwe n'uburyo butandukanye bw'igenamigambi bigufasha gusuzuma amahitamo no kwitegura impinduka mu bucuruzi.",
    "Review financial and regulatory risks within the agreed scope, and identify areas that may need further attention or specialist advice.":"Suzuma ibyago by'imari n'ibijyanye n'amategeko mu byo mwumvikanyeho, umenye ibindi bice bikenera kwitabwaho cyangwa ubujyanama bw'inzobere.",
    "Explore tax planning considerations within the agreed scope, with specialist tax advice where required.":"Suzuma uburyo bwo gutegura imisoro mu byo mwumvikanyeho, kandi aho bikenewe hifashishwe inzobere mu by'imisoro.",
    "Examine costs, margins and revenue patterns to highlight areas for closer review and decision-making.":"Suzuma ibiciro n'ikiguzi, inyungu n'uko amafaranga yinjira kugira ngo hagaragare aho hakenewe isesengura n'ibyemezo byihariye.",
    "Assess business investment options against your objectives, available resources and agreed decision criteria.":"Suzuma amahitamo y'ishoramari ry'ubucuruzi ugereranyije n'intego zawe, ubushobozi ufite n'ibipimo mwumvikanyeho.",
    "Explore property investment considerations in line with your organisation’s objectives, resources and agreed scope.":"Suzuma ibijyanye no gushora imari mu mitungo itimukanwa ukurikije intego z'ikigo cyawe, ubushobozi bwacyo n'ibyo mwumvikanyeho.",
    "Listen. Design. Execute. Measure.":"Umva. Tegura. Shyira mu bikorwa. Pima.",
    "Understand your goals, people, context and the challenge behind the brief.":"Sobanukirwa intego zawe, abantu, uko ibintu bihagaze n'ikibazo nyamukuru.",
    "Develop a considered response with clear priorities and practical measures.":"Tegura igisubizo gitekerejweho gifite iby'ingenzi bisobanutse n'ingamba zifatika.",
    "Work with your team to put agreed actions into practice.":"Korana n'itsinda ryawe mushyire mu bikorwa ibyemejwe.",
    "Review progress against relevant indicators and adjust where needed.":"Suzuma intambwe imaze guterwa ukoresheje ibipimo biboneye, uhindure aho bikenewe.",
    "Not sure where to begin?":"Ntuzi aho watangirira?",
    "Tell us what you’re working through and we can start with a conversation.":"Tubwire ibyo urimo kugerageza gukemura, dutangire tubiganireho.",
    "Let’s talk":"Tuganire",
    "Start with a conversation.":"Tangira tuganira.",
    "Tell us a little about what you’re working toward. We’ll begin by understanding your priorities and exploring how we may be able to help.":"Tubwire muri make ibyo wifuza kugeraho. Tuzabanza kumva iby'ingenzi kuri wowe, hanyuma turebe uko twagufasha.",
    "We’d be glad to hear from you.":"Twishimiye kumva ubutumwa bwawe.",
    "Reach out by email or phone, or send a message using the form.":"Twandikire ukoresheje imeri cyangwa telefone, cyangwa utwoherereze ubutumwa ukoresheje iyi fishi.",
    "Your name":"Amazina yawe",
    "What would you like to discuss?":"Ni iki wifuza kuganiraho?",
    "Choose a service (optional)":"Hitamo serivisi (si ngombwa)",
    "General enquiry":"Ikibazo rusange",
    "Your message":"Ubutumwa bwawe",
    "Send enquiry":"Ohereza ubutumwa",
    "This prototype opens your email app to send the message to Connect-Consulting.":"Iyi verisiyo y'igerageza ifungura porogaramu ya imeri kugira ngo wohereze ubutumwa kuri Connect-Consulting.",
    "Connect-Consulting journal":"Inyandiko za Connect-Consulting",
    "Ideas for":"Ibitekerezo byo",
    "better business.":"guteza imbere ubucuruzi.",
    "Practical perspectives on business development, financial management and customer experience—written to help leaders ask better questions and make more confident decisions.":"Ibitekerezo bifatika ku iterambere ry'ubucuruzi, imicungire y'imari n'ubunararibonye bw'abakiriya—bigamije gufasha abayobozi kubaza ibibazo byiza no gufata ibyemezo bizewe.",
    "Business growth":"Iterambere ry'ubucuruzi",
    "Financial clarity":"Gusobanukirwa imari",
    "One recent perspective from each of our three consulting areas.":"Reba inyandiko nshya muri buri cyiciro muri serivisi zacu eshatu.",
    "A place to begin":"Aho watangirira",
    "Explore our coverage":"Reba ibyo twibandaho",
    "Find and pursue the right opportunities.":"Shaka kandi ukoreshe amahirwe akwiriye.",
    "Market direction, sales discipline, partnerships and the decisions that help organisations grow.":"Ibyerekezo by'isoko, uburyo bwo kugurisha, ubufatanye n'ibyemezo bifasha ibigo gukura.",
    "Build financial clarity and resilience.":"Gira imicungire y'imari isobanutse kandi ihamye.",
    "Planning, cash flow, reporting and performance insights for more informed business decisions.":"Igenamigambi, amafaranga azenguruka mu bucuruzi, raporo n'isesengura bifasha gufata ibyemezo bishingiye ku makuru.",
    "Make every interaction count.":"Gira buri mikoranire agaciro.",
    "Customer feedback, journeys, service design and the trust built through consistent experiences.":"Ibitekerezo by'abakiriya, urugendo rwabo, imiterere ya serivisi n'icyizere gishingiye ku bunararibonye buhoraho.",
    "Get practical ideas in your inbox.":"Jya ubona ibitekerezo bifatika muri imeri yawe.",
    "Receive occasional insights on business development, financial management and customer experience.":"Jya ubona rimwe na rimwe ibitekerezo ku iterambere ry'ubucuruzi, imicungire y'imari n'ubunararibonye bw'abakiriya.",
    "Occasional updates. No spam.":"Amakuru rimwe na rimwe. Nta butumwa budakenewe.",
    "Subscribe":"Iyandikishe",
    "Put an idea into action":"Shyira igitekerezo mu bikorwa",
    "Start a conversation":"Tuganire",
    "Business challenge":"Ikibazo cy'ubucuruzi",
    "This article is for general information and discussion. It is not a substitute for professional accounting, tax, legal, investment or other regulated advice. Confirm requirements and decisions with appropriately qualified advisers in the relevant jurisdiction.":"Iyi nyandiko igenewe gutanga amakuru rusange no kuganirwaho. Ntisimbura ubujyanama bw'inzobere mu ibaruramari, imisoro, amategeko, ishoramari cyangwa izindi serivisi zisaba ubuhanga bwihariye. Ibyemezo bigomba kugenzurwa n'inzobere zibifitiye ubushobozi mu gihugu bireba.",
    "Continue reading":"Komeza usome",
    "Related articles":"Izindi nyandiko bifitanye isano",
    "Sources & further reading":"Aho amakuru yavuye n'ibindi bisomwa",
    "Read article":"Soma inyandiko",
    "Loading article…":"Inyandiko irimo gutegurwa…",
    "Have a business question you would like to explore?":"Hari ikibazo cy'ubucuruzi wifuza kuganiraho?",
    "Tell us about your priorities. Connect-Consulting can help you consider practical next steps across business development, finance and customer experience.":"Tubwire iby'ingenzi kuri wowe. Connect-Consulting ishobora kugufasha gutekereza ku ntambwe zifatika mu iterambere ry'ubucuruzi, imari n'ubunararibonye bw'abakiriya.",
    "All topics":"Ibyiciro byose",
    "Browse by category":"Reba ibyiciro",
    "Stay informed":"Komeza kumenya amakuru",
    "Ideas for better business.":"Ibitekerezo biteza imbere ubucuruzi.",
    "A practical growth plan for SMEs looking beyond their home market":"Gahunda ifatika yo guteza imbere ibigo bito n'ibiciriritse bishaka amasoko mashya",
    "Is your sales pipeline healthy—or simply busy?":"Ese uburyo bwawe bwo gukurikirana abagura bumeze neza cyangwa burimo ibikorwa byinshi gusa?",
    "Partnerships that create market access: choosing the right business ally":"Ubufatanye bufungura amasoko: guhitamo umufatanyabikorwa ukwiriye",
    "The weekly cash-flow forecast: a simple discipline for better decisions":"Iteganyamari rya buri cyumweru: uburyo bworoshye bwo gufata ibyemezo byiza",
    "SME financial reporting: preparing for the 2027 IFRS update":"Raporo z'imari z'ibigo bito: kwitegura ivugururwa rya IFRS ryo mu 2027",
    "Investment readiness starts with reliable business information":"Kwitegura gushaka ishoramari bitangirira ku makuru yizewe y'ubucuruzi",
    "Cost analysis that protects margins without weakening the customer offer":"Isesengura ry'ibiciro ririnda inyungu ridahungabanya ibyo umukiriya ahabwa",
    "Customer feedback only creates value when the loop is closed":"Ibitekerezo by'abakiriya bigira agaciro iyo bikurikiranwe kugeza ku gisubizo",
    "Personalisation without losing customer trust":"Kugenera umukiriya serivisi zimubereye utatakaje icyizere cye",
    "Design a customer journey that works across channels":"Tegura urugendo rw'umukiriya rukorera mu nzira zitandukanye",
    "Measure customer experience with questions that lead to action":"Pima ubunararibonye bw'abakiriya ukoresheje ibibazo bitanga intambwe ifatika",
    "Start with the shape of the economy":"Banza wumve uko ubukungu buhagaze",
    "Translate the signal into a market decision":"Hindura amakuru y'isoko ayobore icyemezo",
    "Build an execution rhythm":"Shyiraho gahunda ihoraho yo gushyira mu bikorwa",
    "Expansion begins with evidence":"Kwagura ibikorwa bitangirana n'ibimenyetso",
    "Check the operating model":"Suzuma uburyo ibikorwa biteguye",
    "Make expansion a series of decisions":"Fata ibyemezo mu byiciro mu gihe wagura ibikorwa",
    "Measure movement, not just volume":"Pima intambwe yatewe, ntupime umubare gusa",
    "Give every opportunity a next step":"Ha buri mahirwe intambwe ikurikira",
    "Connect sales data to business performance":"Huza amakuru yo kugurisha n'imikorere y'ubucuruzi",
    "Define what the partnership must achieve":"Sobanura icyo ubufatanye bugomba kugeraho",
    "Check strategic and operational fit":"Suzuma niba intego n'imikorere bihuye",
    "Start with a written pilot":"Tangirira ku igerageza ryanditse",
    "Why a profitable business can still feel cash pressure":"Impamvu ubucuruzi bufite inyungu bushobora kubura amafaranga mu gihe gito",
    "Build a rolling view":"Tegura igenamigambi rihora rivugururwa",
    "Turn the forecast into action":"Hindura iteganyamari ibikorwa",
    "What has changed?":"Ni iki cyahindutse?",
    "Why preparation should start before the effective date":"Impamvu kwitegura bigomba gutangira mbere y'itariki itangiriraho",
    "A practical preparation checklist":"Urutonde rw'ibyo kwitegura",
    "Tell a coherent financial story":"Sobanura neza uko imari y'ubucuruzi ihagaze",
    "Organise the evidence before approaching funders":"Tegura ibimenyetso mbere yo kwegera abatanga imari",
    "Choose the right kind of capital":"Hitamo ubwoko bw'imari bukwiriye",
    "Understand the cost behind the service":"Sobanukirwa ikiguzi kiri inyuma ya serivisi",
    "Look for waste before cutting capability":"Banza ushake ibitagira umumaro mbere yo kugabanya ubushobozi",
    "Measure the effect of each change":"Pima ingaruka za buri mpinduka",
    "Move beyond collecting scores":"Ntugarukire ku gukusanya amanota gusa",
    "Create a closed-loop process":"Shyiraho uburyo bwo gukurikirana ibitekerezo kugeza ku gisubizo",
    "Show customers that their input matters":"Ereka abakiriya ko ibitekerezo byabo bifite agaciro",
    "Make relevance useful to the customer":"Gira ibyo utanga bifite akamaro ku mukiriya",
    "Be clear about data and choice":"Sobanura neza amakuru n'amahitamo",
    "Keep a human route available":"Komeza guha umukiriya uburyo bwo kuganira n'umuntu",
    "Map the journey from the customer’s point of view":"Garagaza urugendo uko umukiriya arubona",
    "Make the experience feel connected":"Huza ubunararibonye mu nzira zose",
    "Prioritise the moments that matter":"Banza ushyire imbere ibihe by'ingenzi",
    "Choose a measure for a reason":"Hitamo igipimo gifite impamvu",
    "Combine perception with operational evidence":"Huza uko abakiriya babyumva n'ibimenyetso by'imikorere",
    "Use the results in a regular review":"Koresha ibisubizo mu isuzuma rihoraho",
    "min read":"iminota yo gusoma",
    "Home page":"Urupapuro rw'itangiriro",
    "Main navigation":"Ibice by'ingenzi by'urubuga",
    "Open navigation":"Fungura menu",
    "Close navigation":"Funga menu",
    "Switch language to Kinyarwanda":"Hindura ururimi rube Ikinyarwanda",
    "Switch language to English":"Hindura ururimi rube Icyongereza",
    "Switch to dark theme":"Hindura ujye mu buryo bw'umwijima",
    "Switch to light theme":"Hindura ujye mu buryo bw'urumuri"
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = "en";
  let theme = "light";

  function readPreference(key, fallback) {
    try { return localStorage.getItem(key) || fallback; }
    catch (_) { return fallback; }
  }
  function savePreference(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }
  function translateValue(english, lang) {
    if (lang === "en") return english;
    if (/^\d+ min read$/.test(english)) return english.replace(" min read", " iminota yo gusoma");
    return translations[english] || english;
  }
  function translateTextNode(node, lang) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    const translated = translateValue(trimmed, lang);
    if (node.nodeValue !== leading + translated + trailing) node.nodeValue = leading + translated + trailing;
  }
  function translateAttributes(root, lang) {
    const nodes = [];
    if (root.nodeType === 1) nodes.push(root);
    if (root.querySelectorAll) nodes.push(...root.querySelectorAll("[aria-label],[title],[placeholder]"));
    nodes.forEach(el => ["aria-label","title","placeholder"].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      let originals = originalAttributes.get(el);
      if (!originals) { originals = {}; originalAttributes.set(el, originals); }
      if (!(attr in originals)) originals[attr] = el.getAttribute(attr);
      el.setAttribute(attr, translateValue(originals[attr], lang));
    }));
  }
  function translateTree(root, lang) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script,style,textarea,code,pre,.no-translate")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => translateTextNode(node, lang));
    translateAttributes(root, lang);
  }
  function updateControls() {
    const langButton = document.getElementById("language-toggle");
    const themeButton = document.getElementById("theme-toggle");
    if (langButton) {
      langButton.textContent = language === "en" ? "EN" : "RW";
      langButton.setAttribute("aria-label", language === "en" ? "Switch language to Kinyarwanda" : "Switch language to English");
      langButton.title = language === "en" ? "Kinyarwanda" : "English";
    }
    if (themeButton) {
      themeButton.textContent = theme === "light" ? "☾" : "☀";
      themeButton.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      themeButton.title = theme === "light" ? "Dark theme" : "Light theme";
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b1725" : "#102b4e");
  }
  function applyPreferences() {
    document.documentElement.lang = language === "rw" ? "rw" : "en";
    document.documentElement.dataset.theme = theme;
    translateTree(document.body, language);
    updateControls();
  }

  language = readPreference(LANGUAGE_KEY, "en") === "rw" ? "rw" : "en";
  theme = readPreference(THEME_KEY, "light") === "dark" ? "dark" : "light";
  applyPreferences();

  document.getElementById("language-toggle")?.addEventListener("click", () => {
    language = language === "en" ? "rw" : "en";
    savePreference(LANGUAGE_KEY, language);
    applyPreferences();
  });
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    savePreference(THEME_KEY, theme);
    applyPreferences();
  });

  const observer = new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === 1 || node.nodeType === 3) translateTree(node, language);
    }));
  });
  if (document.body) observer.observe(document.body, { childList:true, subtree:true });
  window.ConnectConsultingPreferences = {
    get language() { return language; },
    get theme() { return theme; },
    setLanguage(value) {
      if (value !== "en" && value !== "rw") return;
      language = value; savePreference(LANGUAGE_KEY, language); applyPreferences();
    },
    setTheme(value) {
      if (value !== "light" && value !== "dark") return;
      theme = value; savePreference(THEME_KEY, theme); applyPreferences();
    }
  };
})();