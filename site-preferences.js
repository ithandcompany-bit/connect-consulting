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
    "Switch to light theme":"Hindura ujye mu buryo bw'urumuri",
    "Good work starts by listening.":"Akazi keza gatangirira ku kumva ibyo mukeneye.",
    "Get to know the thinking behind our work.":"Menya ibitekerezo biyobora ibyo dukora.",
    "Who we are":"Abo turi bo",
    "Connect-Consulting Company Ltd is a Kigali-based consulting business supporting organisations across business development, finance consultancy and customer experience. We work alongside your team to understand what matters, focus effort where it can help, and move from discussion to practical next steps.":"Connect-Consulting Company Ltd ni ikigo cy'ubujyanama giherereye i Kigali, gifasha ibindi bigo mu iterambere ry'ubucuruzi, ubujyanama mu by'imari no kunoza ubunararibonye bw'abakiriya. Dukorana n'itsinda ryawe kugira ngo dusobanukirwe iby'ingenzi, dushyire imbaraga aho zikenewe kandi duhindure ibiganiro intambwe zifatika.",
    "Every organisation has different priorities. We listen first, shape our support around your needs, and stay engaged as agreed work moves forward.":"Buri kigo kigira iby'ingenzi byacyo. Tubanza kumva, tugategura ubufasha bujyanye n'ibyo ukeneye, kandi tugakomeza gukorana nawe mu gihe ibikorwa twumvikanyeho bishyirwa mu bikorwa.",
    "Thoughtful advice. Practical progress.":"Ubujyanama butekerejweho. Iterambere rifatika.",
    "Our purpose & vision":"Intego n'Icyerekezo byacu",
    "Our Mission":"Inshingano zacu",
    "Our Vision":"Icyerekezo cyacu",
    "How we work":"Uko dukora",
    "Our values shape how we listen, work alongside your team and support your priorities.":"Indangagaciro zacu ziyobora uko twumva ibyo ukeneye, dukorana n'itsinda ryawe kandi tugushyigikira mu byo wimirije imbere.",
    "We bring relevant knowledge and practical capability to the priorities agreed for each engagement.":"Tuzana ubumenyi bukenewe n'ubushobozi bufatika mu byo twemeranyije gushyira imbere muri buri bufatanye.",
    "We communicate clearly, prepare carefully and treat your team, time and information with respect.":"Tuvugana mu buryo busobanutse, tugategura neza kandi tukubaha itsinda ryawe, igihe cyawe n'amakuru yawe.",
    "We stay committed to your agreed priorities and work in partnership as needs evolve.":"Dukomeza kwiyemeza iby'ingenzi twemeranyijeho kandi tugakorana nawe uko ibyo ukeneye bihinduka.",
    "Testimonials":"Ubuhamya",
    "Illustrative placeholder":"Urugero rw'agateganyo",
    "The conversations helped us clarify our priorities and focus on practical next steps for the business.":"Ibiganiro byadufashije gusobanura iby'ingenzi kuri twe no kwibanda ku ntambwe zifatika z'ubucuruzi.",
    "Client name placeholder":"Izina ry'umukiriya rizashyirwamo",
    "Business leader · placeholder":"Umuyobozi w'ubucuruzi · urugero",
    "We valued the thoughtful questions and the care taken to understand our organisation before shaping the support.":"Twishimiye ibibazo byatekerejweho n'ubwitange bwo kubanza gusobanukirwa ikigo cyacu mbere yo gutegura ubufasha.",
    "The support brought our business goals, customer experience and financial considerations into one clear discussion.":"Ubufasha bwahuje intego z'ubucuruzi bwacu, ubunararibonye bw'abakiriya n'ibijyanye n'imari mu kiganiro kimwe gisobanutse.",
    "Let’s move forward":"Dukomeze dutere imbere",
    "01 / Growth & Direction":"01 / Iterambere n'Icyerekezo",
    "Discuss this service":"Ganira natwe kuri iyi serivisi",
    "02 / Customer Relationships":"02 / Imikoranire n'Abakiriya",
    "03 / Financial Strength":"03 / Imbaraga mu by'Imari",
    "Sales Strategy Consulting":"Ubujyanama mu Ngamba zo Kugurisha",
    "Partnership Development":"Guteza Imbere Ubufatanye",
    "Market Research & Analysis":"Ubushakashatsi n'Isesengura ry'Isoko",
    "Lead Generation Systems":"Uburyo bwo Kubona Abakiriya Bashya",
    "Brand & Marketing Consultancy":"Ubujyanama ku Kirango no Kwamamaza",
    "CX Strategy Consulting":"Ubujyanama mu Ngamba z'Ubunararibonye bw'Abakiriya",
    "Customer Journey Mapping":"Gushushanya Urugendo rw'Umukiriya",
    "Service Design & Optimization":"Gutegura no Kunoza Serivisi",
    "Training & Enablement Programs":"Amahugurwa no Kongerera Abakozi Ubushobozi",
    "Feedback & Insights Management":"Gucunga Ibitekerezo n'Amakuru y'Abakiriya",
    "Call Center Service Quality Evaluation":"Gusuzuma Ireme rya Serivisi zo kuri Telefoni",
    "Financial Planning & Forecasting":"Igenamigambi n'Iteganyamari",
    "Risk & Compliance Advisory":"Ubujyanama ku Byago no Kubahiriza Amategeko",
    "Tax Optimization Strategies":"Ingamba zo Kunoza Imitangire y'Imisoro",
    "Profitability & Cost Analysis":"Isesengura ry'Inyungu n'Ibiciro",
    "Corporate Investment Advisory":"Ubujyanama mu Ishoramari ry'Ibigo",
    "Property Investment":"Ishoramari mu Mitungo Itimukanwa",
    "01 / LISTEN":"01 / TEGĀ",
    "02 / DESIGN":"02 / TEGURA",
    "03 / EXECUTE":"03 / SHYIRA MU BIKORWA",
    "04 / MEASURE":"04 / PIMA",
    "Load more articles":"Reba izindi nyandiko",
    "Customer experience":"Uburambe bw'abakiriya",
    "Email":"Imeri",
    "Phone":"Telefoni",
    "Address":"Aderesi",
    "Reading Rwanda’s growth signals: what business leaders should plan for next":"Gusoma ibimenyetso by'ubukungu bw'u Rwanda: ibyo abayobozi b'ibigo bakwiye guteganyiriza",
    "National growth figures can reveal where demand is moving. The opportunity for business leaders is to turn those signals into focused market choices and practical execution.":"Imibare y'izamuka ry'ubukungu ishobora kwerekana aho isoko riri kwerekeza. Amahirwe ku bayobozi b'ibigo ni uguhindura ayo makuru amahitamo asobanutse ku isoko n'ibikorwa bifatika.",
    "A practical growth plan for SMEs looking beyond their home market":"Gahunda ifatika yo guteza imbere ibigo bito n'ibiciriritse bishaka amasoko mashya",
    "Regional expansion is not only a sales decision. It asks a business to test demand, understand how customers buy and prepare its operations to deliver reliably.":"Kwagura ibikorwa mu karere si icyemezo cyo kugurisha gusa. Bisaba kugenzura niba hari abakiriya, gusobanukirwa uko bagura no gutegura ibikorwa kugira ngo serivisi zitangwe neza.",
    "A long list of prospects can create activity without creating predictable revenue. A useful pipeline shows fit, progress, ownership and the next action.":"Urutonde rurerure rw'abashobora kuba abakiriya rushobora gutuma habaho ibikorwa byinshi ariko ntirubyare amafaranga ateganyijwe. Uburyo bwiza bwo gukurikirana abakiriya bwerekana uko bahuye n'ibyo utanga, intambwe bagezeho, ubabishinzwe n'igikorwa gikurikira.",
    "The right partnership can provide access, capability or trust. The wrong one can add cost and complexity. Start with the business outcome, not the announcement.":"Ubufatanye bukwiriye bushobora gutanga amahirwe, ubushobozi cyangwa icyizere. Ubupfuye bushobora kongera ikiguzi n'ingorane. Tangirira ku musaruro w'ubucuruzi ushaka kugeraho, aho gutangirira ku gutangaza ubufatanye.",
    "Profit and cash are not the same. A rolling forecast helps management see when money is expected to arrive, when commitments fall due and where a gap may emerge.":"Inyungu n'amafaranga ari mu bubiko si kimwe. Iteganyamari rihora rivugururwa rifasha ubuyobozi kubona igihe amafaranga azinjirira, igihe ubwishyu bugomba gukorwa n'aho hashobora kuvuka icyuho.",
    "The third edition of the IFRS for SMEs Accounting Standard is effective for annual periods beginning on or after 1 January 2027. Businesses should understand whether and when it applies to them.":"Igitabo cya gatatu cy'amahame ya IFRS agenewe ibigo bito n'ibiciriritse kizatangira gukurikizwa ku bihe by'ibaruramari by'umwaka bitangira ku ya 1 Mutarama 2027 cyangwa nyuma yayo. Ibigo bikwiye kumenya niba ayo mahame abireba n'igihe azatangirira kubireba.",
    "When a business seeks external capital, the quality of its records and the clarity of its plan shape how confidently others can assess the opportunity.":"Iyo ubucuruzi bushaka igishoro kivuye hanze, ireme ry'inyandiko zabwo n'ubusobanuro bwa gahunda yabwo bifasha abandi gusuzuma ayo mahirwe bizeye.",
    "Cost reduction is not simply about spending less. It is about understanding which costs create value, which create waste and what customers actually depend on.":"Kugabanya ikiguzi si ukugabanya amafaranga akoreshwa gusa. Ni ugusobanukirwa ibiciro byongera agaciro, ibipfushwa ubusa n'ibyo abakiriya bakeneye by'ukuri.",
    "Collecting comments is the beginning, not the outcome. A useful feedback process acknowledges the customer, identifies the cause and changes the service where needed.":"Gukusanya ibitekerezo ni intangiriro, si wo musaruro wa nyuma. Uburyo bwiza bwo kwakira ibitekerezo bwemera ko umukiriya yatanze igitekerezo, bukamenya impamvu y'ikibazo kandi bugahindura serivisi aho bikenewe.",
    "Relevant experiences can make interactions easier, but personalisation only works when customers understand the value and feel their information is treated responsibly.":"Serivisi zijyanye n'ibyo umukiriya akeneye zishobora koroshya imikoranire, ariko kumugenera ibimubereye bigira akamaro iyo asobanukiwe inyungu yabyo kandi akizera ko amakuru ye acungwa neza.",
    "Customers often move between in-person, phone, messaging and digital interactions. The organisation experiences these as one relationship, so the journey should feel connected.":"Abakiriya bakunze guhinduranya inzira zo guhura n'ikigo, guhamagara, kohereza ubutumwa no gukoresha ikoranabuhanga. Ikigo kigomba kubibona nk'umubano umwe, bityo urugendo rw'umukiriya rukaba ruhujwe.",
    "A dashboard full of scores can still leave teams unsure what to improve. Choose measures that connect customer perceptions to operational causes and next steps.":"Raporo yuzuye amanota ishobora gusiga itsinda ritazi icyo rikwiye kunoza. Hitamo ibipimo bihuza uko abakiriya babona serivisi n'impamvu z'imikorere ndetse n'intambwe zikurikira.",
    "Connect-Consulting Company Ltd | Clarity for your next move":"Connect-Consulting Company Ltd | Icyerekezo gisobanutse cy'intambwe ikurikira",
    "About Us | Connect-Consulting Company Ltd":"Ibyerekeye Twe | Connect-Consulting Company Ltd",
    "Services | Connect-Consulting Company Ltd":"Serivisi | Connect-Consulting Company Ltd",
    "Insights & Articles | Connect-Consulting Company Ltd":"Ubumenyi n'Inyandiko | Connect-Consulting Company Ltd",
    "Let’s Talk | Connect-Consulting Company Ltd":"Tuganire | Connect-Consulting Company Ltd",
    "Article | Connect-Consulting Company Ltd":"Inyandiko | Connect-Consulting Company Ltd",
    "Rwanda’s 2025 national accounts, published by the National Institute of Statistics of Rwanda in April 2026, reported real GDP growth of 9.4%. Services contributed 52% of GDP, industry 22%, and agriculture 20%. Within services, wholesale and retail trade grew by 15%, as did information and communication services. These figures describe the wider economy; they do not guarantee demand for any individual business.":"Raporo y'ibarurishamibare ry'igihugu y'u Rwanda yo mu 2025, yasohowe n'Ikigo cy'Igihugu cy'Ibarurishamibare muri Mata 2026, yagaragaje ko Umusaruro Mbumbe w'Igihugu (GDP) wazamutseho 9.4%. Serivisi zagize 52% bya GDP, inganda zigira 22%, naho ubuhinzi bugira 20%. Mu rwego rwa serivisi, ubucuruzi bw'ibicuruzwa byinshi n'iby'amaduka bwazamutseho 15%, kimwe na serivisi z'itumanaho n'ikoranabuhanga. Iyi mibare igaragaza uko ubukungu bw'igihugu buhagaze muri rusange; ntivuga ko buri bucuruzi buzabona abakiriya benshi.",
    "For a business owner, the useful question is not simply whether the economy is growing. It is where customers are spending, which needs are changing, and whether the organisation has a credible offer for a reachable market.":"Ku muntu uyobora ubucuruzi, ikibazo gifite akamaro si ukumenya gusa niba ubukungu buri kuzamuka. Ni ukumenya aho abakiriya bakoresha amafaranga, ibyo bakeneye biri guhinduka n'uko ikigo gifite igicuruzwa cyangwa serivisi bifite agaciro ku isoko gishobora kugeraho.",
    "Choose a defined customer group before choosing a campaign. Map its needs, buying process, location, spending capacity and alternatives. Then test whether the business can serve that group consistently and profitably. A broad ambition to ‘grow across the region’ becomes more actionable when it is narrowed to a segment, a location and a specific customer problem.":"Banza uhitemo neza itsinda ry'abakiriya ugamije mbere yo gutegura ubukangurambaga. Menya ibyo bakeneye, uko bagura, aho baherereye, ubushobozi bwabo bwo kwishyura n'ibindi bishobora kubanyura. Hanyuma ugerageze kureba niba ubucuruzi bwawe bushobora kubaha serivisi ihoraho kandi ikunguka. Intego rusange yo “kwagura ibikorwa mu karere” irushaho gufatika iyo uyigabanyijemo itsinda ry'abakiriya, ahantu runaka n'ikibazo cyihariye ushaka gukemura.",
    "Use market conversations, competitor reviews and a small number of structured sales experiments to validate assumptions. Track qualified enquiries, conversion rates, repeat purchases and contribution margin—not just reach or social-media engagement.":"Koresha ibiganiro n'abakiriya, isesengura ry'abo muhanganye ku isoko n'igerageza rito ry'uburyo bwo kugurisha kugira ngo urebe niba ibyo watekerezaga ari ukuri. Kurikirana ibibazo by'abakiriya bashobora kugura koko, umubare w'abahinduka abakiriya, abagaruka kugura n'inyungu isigara nyuma y'ibiciro bihinduka. Ntukarebe gusa umubare w'abagezweho n'ubutumwa cyangwa ibikorwa ku mbuga nkoranyambaga.",
    "Turn the chosen opportunity into a short plan with an owner, budget, milestones and review dates. Compare actual results with the assumptions behind the plan. If enquiries are strong but conversion is weak, investigate the sales process. If sales rise but cash remains tight, review pricing, collection terms and working capital.":"Hindura amahirwe wahisemo gahunda ngufi igaragaza uzayishinzwe, ingengo y'imari, intambwe z'ingenzi n'amatariki yo gusuzuma uko bigenda. Gereranya ibisubizo byabonetse n'ibyo wari warateganyije. Niba abantu benshi babaza ariko bake bakagura, suzuma uburyo bwo kugurisha. Niba igurishwa ryiyongera ariko amafaranga akabura, ongera urebe ibiciro, igihe cyo kwishyurwa n'amafaranga akoreshwa mu bikorwa bya buri munsi.",
    "The figures below are a starting point for questions, not a substitute for customer research. A disciplined business-development process connects market evidence to decisions and then checks whether those decisions are working.":"Iyi mibare ni intangiriro yo kubaza ibibazo, si umusimbura w'ubushakashatsi ku bakiriya. Uburyo bufite gahunda bwo guteza imbere ubucuruzi buhuza ibimenyetso byo ku isoko n'ibyemezo, hanyuma bugasuzuma niba ibyo byemezo bitanga umusaruro.",
    "A neighbouring market may look attractive because it is geographically close or culturally familiar. That is not enough to justify expansion. Before committing significant resources, identify the customer segment, the problem your offer solves, the alternatives already available and the conditions that would make a customer switch.":"Isoko ryo mu gihugu gituranyi rishobora kugaragara nk'iryiza kubera ko riri hafi cyangwa rifite umuco usa n'uwo musanzwe muzi. Ibyo byonyine ntibihagije kugira ngo mwagure ibikorwa. Mbere yo gukoresha umutungo munini, menya itsinda ry'abakiriya, ikibazo ibyo mutanga bikemura, ibindi bisubizo biri ku isoko n'impamvu zatuma umukiriya ahitamo guhindura aho agurira.",
    "Use interviews with potential buyers, distributor conversations, competitor mapping and a limited pilot to gather evidence. Separate what customers say they might buy from what they are willing and able to purchase.":"Kusanya ibimenyetso ukoresheje ibiganiro n'abashobora kugura, ibiganiro n'abacuruzi bakwirakwiza ibicuruzwa, isesengura ry'abo muhanganye n'igerageza rito. Tandukanya ibyo abakiriya bavuga ko bashobora kugura n'ibyo koko bashaka kandi bafite ubushobozi bwo kugura.",
    "A new market can introduce different payment habits, delivery expectations, partner arrangements, language needs and regulatory requirements. A business should understand these before promising a launch date or price. Confirm how orders will be fulfilled, how complaints will be handled and who is accountable when a partner is involved.":"Isoko rishya rishobora kugira imigenzereze itandukanye mu kwishyura, ibyo abantu biteze ku itangwa ry'ibicuruzwa, uburyo bwo gukorana n'abafatanyabikorwa, ibikenewe mu rurimi n'amategeko agenga ibikorwa. Ubucuruzi bukwiye kubanza kubisobanukirwa mbere yo gutangaza itariki yo gutangira cyangwa igiciro. Menya uko ibyo abakiriya bategetse bizagezwa kuri bo, uko ibibazo bizakemurwa n'uzabibazwa igihe hari umufatanyabikorwa.",
    "The Rwanda Development Board’s 2025 reporting describes investment activity across sectors and projects. Such national-level investment information can help frame market conversations, but it does not replace sector-specific due diligence or validation with potential customers.":"Raporo y'Urwego rw'Igihugu rushinzwe Iterambere (RDB) yo mu 2025 igaragaza ibikorwa by'ishoramari mu nzego n'imishinga itandukanye. Amakuru nk'ayo ku rwego rw'igihugu ashobora gufasha mu biganiro ku isoko, ariko ntasimbura isesengura ryimbitse ry'urwego runaka cyangwa kugenzura ibitekerezo by'abashobora kuba abakiriya.",
    "Set a pilot objective, a maximum test budget and clear thresholds for continuing, changing or stopping. Monitor customer acquisition cost, conversion, fulfilment time, gross margin and repeat demand. Review the numbers alongside customer feedback so that growth does not outpace service capacity.":"Shyiraho intego y'igerageza, ingengo y'imari ntarengwa n'ibipimo bisobanutse bizafasha gufata icyemezo cyo gukomeza, guhindura cyangwa guhagarika. Kurikirana ikiguzi cyo kubona umukiriya mushya, umubare w'abagura, igihe cyo kugeza serivisi ku mukiriya, inyungu rusange n'abagaruka kugura. Suzuma iyi mibare hamwe n'ibitekerezo by'abakiriya kugira ngo ibikorwa bitaguka birenze ubushobozi bwo gutanga serivisi.",
    "A measured approach does not mean thinking small. It means using evidence to decide where to invest next and scaling the parts of the model that customers have demonstrated they value.":"Gukora ugereranya ibyavuye mu bipimo ntibisobanura kugira intego nto. Bisobanura gukoresha ibimenyetso mu guhitamo aho ishoramari rikurikira rigomba kujya no kwagura ibice by'uburyo bw'ubucuruzi abakiriya bagaragaje ko bifite agaciro.",
    "A pipeline is useful when it shows how a potential customer moves from first contact to a decision. Counting names or enquiries alone can hide stalled opportunities, poor-fit leads and deals that have not had a meaningful conversation in weeks.":"Urutonde rukurikirana amahirwe yo kugurisha rugira akamaro iyo rugaragaza uko ushobora kuba umukiriya ava ku kiganiro cya mbere akagera ku cyemezo. Kubara amazina cyangwa ibibazo by'abantu gusa bishobora guhisha amahirwe yahagaze, abantu badakwiye kugenerwa serivisi cyangwa ibiganiro bitigeze bikomeza mu byumweru byinshi.",
    "Define a small number of stages that reflect observable customer actions. For example: qualified need confirmed, solution discussed, proposal submitted, decision pending and won or lost. Agree what must happen before an opportunity moves to the next stage.":"Sobanura ibyiciro bike bishingiye ku bikorwa by'umukiriya bishobora kugaragara. Urugero: kwemeza ko akeneye serivisi, kuganira ku gisubizo, kohereza igitekerezo cy'ubufatanye, gutegereza icyemezo, cyangwa gutsinda/gutakaza amahirwe. Mwumvikane ku bigomba kuba byabaye mbere y'uko amahirwe ajya mu kindi cyiciro.",
    "Each active opportunity should have an owner, an estimated value, a realistic decision date and a dated next action. If the next action is unclear, the opportunity may not be as advanced as the sales team believes. Record why deals are lost so the organisation can distinguish price objections from timing, trust, product fit or service issues.":"Buri mahirwe ari gukurikiranwa agomba kugira uyashinzwe, agaciro kagereranyijwe, itariki nyayo ishoboka yo gufata icyemezo n'igikorwa gikurikira gifite itariki. Niba igikorwa gikurikira kidasobanutse, ayo mahirwe ashobora kuba ataragera kure nk'uko itsinda ryo kugurisha ribitekereza. Andika impamvu amahirwe yatakaye kugira ngo ikigo gitandukanye ikibazo cy'igiciro n'ibibazo by'igihe, icyizere, guhuza igicuruzwa n'ibyo umukiriya akeneye cyangwa ireme rya serivisi.",
    "Review ageing opportunities and stage conversion regularly. A high number of proposals with few decisions may point to weak qualification or unclear value—not necessarily insufficient lead generation.":"Jya usuzuma buri gihe amahirwe amaze igihe kirekire n'umubare w'ayava mu cyiciro kimwe akajya mu kindi. Ibyifuzo byinshi byoherejwe ariko ibyemezo bikaba bike bishobora kugaragaza ko abakiriya batatoranyijwe neza cyangwa agaciro k'ibyo mutanga kadasobanutse; ntibivuga byanze bikunze ko abantu bashobora kuba abakiriya ari bake.",
    "A pipeline forecast is an estimate, not guaranteed income. Compare forecasts with actual results over time and use the difference to improve assumptions. Also check whether new sales are profitable after delivery costs, discounts, commissions and collection delays.":"Iteganyamari ry'amahirwe yo kugurisha ni igereranya, si amafaranga yizewe ko azinjira. Gereranya ibyo mwateganyije n'ibyabaye koko uko igihe kigenda, ukoreshe itandukaniro mu kunoza ibyo mwashingiragaho. Nanone suzuma niba ibicuruzwa bishya bigurishijwe byunguka nyuma yo gukuramo ikiguzi cyo kubigeza ku bakiriya, kugabanyiriza ibiciro, komisiyo no gutinda kwishyurwa.",
    "Keep the process simple enough for people to use consistently. A well-maintained spreadsheet can be more useful than a complex CRM that nobody updates. Technology should make good sales habits easier, not replace them.":"Ubu buryo bugire bworoshye ku buryo abakozi babukoresha buri gihe. Imbonerahamwe ibungabunzwe neza ishobora kurusha akamaro CRM igoye ariko ntihagire uyivugurura. Ikoranabuhanga rikwiye koroshya imikorere myiza yo kugurisha, ntirikwiye kuyisimbura.",
    "A partnership should solve a specific business problem. It might extend distribution, add a capability the organisation does not have, improve service coverage or help reach a customer group. If the intended outcome cannot be explained clearly, it will be difficult to judge whether the relationship is working.":"Ubufatanye bukwiye gukemura ikibazo cyihariye cy'ubucuruzi. Bushobora gufasha gukwirakwiza ibicuruzwa ahantu hanini, kongera ubushobozi ikigo kitari gifite, kunoza aho serivisi itangirwa cyangwa kugera ku itsinda rishya ry'abakiriya. Iyo umusaruro witezwe udashobora gusobanurwa neza, biragorana kumenya niba ubufatanye buri gutanga umusaruro.",
    "List what each party contributes and what each expects to receive. Be specific about customer access, staff time, technology, funding, facilities, data and responsibility for delivery.":"Andika ibyo buri ruhande ruzatanga n'ibyo rwiteze kungukiramo. Sobanura neza uruhare mu kugera ku bakiriya, igihe cy'abakozi, ikoranabuhanga, amafaranga, ibikoresho, amakuru n'ushinzwe kugeza serivisi ku mukiriya.",
    "Assess the potential partner’s reputation, service standards, financial capacity, decision-making process and alignment with your customer promise. Discuss how leads will be handled, how revenue or costs will be shared, who owns customer relationships and how disagreements will be resolved.":"Suzuma izina n'icyizere umufatanyabikorwa ashobora kuba afite, ireme rya serivisi ze, ubushobozi bw'imari, uko afata ibyemezo n'uko ibyo akora bihuye n'ibyo wasezeranyije abakiriya. Muganire ku buryo abakiriya bazakurikiranywa, uko amafaranga yinjira cyangwa ikiguzi bizagabanywa, uzacunga umubano n'abakiriya n'uko kutumvikana kuzakemurwa.",
    "National investment figures can indicate activity in an economy, but a partnership decision still requires direct checks on the organisations involved and the market they intend to serve.":"Imibare y'ishoramari ku rwego rw'igihugu ishobora kugaragaza ibikorwa biri mu bukungu, ariko icyemezo cy'ubufatanye gisaba kugenzura mu buryo butaziguye ibigo birebwa n'isoko byifuza gukorera.",
    "Before making a long-term commitment, agree a limited pilot with a defined scope, period, budget and success measures. Review lead quality, fulfilment, customer feedback and the value created for both parties. Document what happens to customer information and confidential material.":"Mbere yo kwiyemeza gukorana igihe kirekire, mwumvikane ku igerageza rifite imipaka isobanutse, igihe, ingengo y'imari n'ibipimo byo gupima intsinzi. Suzuma ireme ry'abakiriya bashya, uko ibyo mwiyemeje bitangwa, ibitekerezo by'abakiriya n'agaciro buri ruhande rubona. Andika uko amakuru y'abakiriya n'ibanga ry'ubucuruzi bizacungwa.",
    "A strong partnership is managed after it is signed. Regular reviews, transparent communication and a clear exit process help protect both organisations if priorities change.":"Ubufatanye bukomeye bukomeza gucungwa na nyuma yo gusinyana amasezerano. Isuzuma rihoraho, ibiganiro bisobanutse n'uburyo bwumvikanyweho bwo guhagarika ubufatanye bifasha kurinda ibigo byombi igihe iby'ingenzi bihindutse.",
    "A sale may be recorded before the customer pays. At the same time, salaries, rent, suppliers, tax obligations and loan payments have due dates. If money leaves the business before customer receipts arrive, management can face a cash shortage even when sales appear healthy.":"Igurishwa rishobora kwandikwa mu bitabo mbere y'uko umukiriya yishyura. Ariko umushahara, ubukode, kwishyura abatanga ibicuruzwa, imisoro n'inguzanyo bigira igihe bigomba kwishyurirwaho. Iyo amafaranga asohotse mbere y'uko ay'abakiriya yinjira, ubuyobozi bushobora guhura n'ibura ry'amafaranga nubwo igurishwa risa n'iryiza.",
    "A cash-flow forecast makes timing visible. It is a management planning tool, not a guarantee that every receipt or payment will happen exactly as expected.":"Iteganyamari ry'uko amafaranga yinjira n'asohoka rigaragaza igihe ibikorwa by'amafaranga biteganyijwe. Ni igikoresho cy'igenamigambi ry'ubuyobozi, si isezerano ko buri mafaranga azinjira cyangwa asohoke neza uko byateganyijwe.",
    "Start with the opening bank balance. List expected customer receipts by likely date, separating confirmed payments from estimates. Then record operating payments, payroll, supplier commitments, taxes, debt service and planned purchases. Calculate the expected closing balance for each week and update the forecast as new information arrives.":"Tangirira ku mafaranga ari kuri konti ya banki mu ntangiriro. Andika amafaranga utegereje kwishyurwa n'abakiriya ukurikije amatariki ashoboka, utandukanye ayemejwe n'agereranyijwe. Hanyuma wandike amafaranga yo gukora ibikorwa, imishahara, imyenda y'abatanga ibicuruzwa, imisoro, kwishyura inguzanyo n'ibyo uteganya kugura. Buri cyumweru bara amafaranga uteganya gusigarana, uvugurure igenamigambi uko amakuru mashya aboneka.",
    "Use realistic assumptions. For overdue invoices, estimate the likely collection date rather than assuming the invoice will be paid on its due date. For costs, include irregular and seasonal commitments rather than looking only at routine monthly expenses.":"Koresha ibiteganyijwe bishoboka. Ku mafaranga yishyurwa yarengeje igihe, gereranya igihe bishobora kwishyurirwaho aho gutekereza ko azishyurwa ku munsi wagenwe. Ku biciro, shyiramo n'ibitari iby'igihe cyose cyangwa iby'ibihe by'umwaka, aho kureba amafaranga asanzwe akoreshwa buri kwezi gusa.",
    "If the forecast shows a possible shortfall, investigate early. Options may include following up receivables, agreeing supplier timing, adjusting discretionary spending, revisiting stock levels or discussing financing with a qualified provider. Each option has consequences, so decisions should reflect the business’s contractual and regulatory obligations.":"Niba igenamigambi rigaragaza ko hashobora kubaho icyuho cy'amafaranga, tangira kugishakira igisubizo hakiri kare. Ushobora gukurikirana abatarishyura, kumvikana n'abatanga ibicuruzwa ku gihe cyo kwishyura, kugabanya amafaranga atari ngombwa, kongera gusuzuma ingano y'ibicuruzwa biri mu bubiko cyangwa kuganira ku nguzanyo n'utanga serivisi ubifitiye ubushobozi. Buri mahitamo agira ingaruka, bityo ibyemezo bigomba kubahiriza amasezerano n'amategeko bireba ubucuruzi.",
    "Review the forecast at a consistent weekly meeting. Compare last week’s estimate with actual receipts and payments, explain material differences and improve the assumptions. Over time, this creates a more useful view of liquidity and decision timing.":"Jya usuzuma igenamigambi mu nama ya buri cyumweru ihoraho. Gereranya ibyo mwari mwateganyije mu cyumweru gishize n'amafaranga yinjiye n'asohotse koko, usobanure itandukaniro rikomeye kandi unoze ibyo mwashingiragaho. Uko igihe kigenda, ibi bitanga ishusho nziza y'ubushobozi bwo kwishyura n'igihe cyo gufatira ibyemezo.",
    "The International Accounting Standards Board issued the third edition of the IFRS for SMEs Accounting Standard in February 2025. The IFRS Foundation states that the edition is effective for annual periods beginning on or after 1 January 2027, with early application permitted.":"Urwego Mpuzamahanga rushyiraho Amahame y'Ibaruramari (IASB) rwasohoye inyandiko ya gatatu y'amahame ya IFRS agenewe ibigo bito n'ibiciriritse muri Gashyantare 2025. Umuryango wa IFRS uvuga ko ayo mahame azatangira gukurikizwa ku bihe by'ibaruramari by'umwaka bitangira ku ya 1 Mutarama 2027 cyangwa nyuma yayo, kandi ko ikigo gishobora kuyatangira mbere y'icyo gihe.",
    "The update includes changes across areas such as financial instruments, fair value measurement, business combinations and revenue from contracts with customers. It is intended for eligible entities without public accountability that publish general-purpose financial statements; it is not automatically the right framework for every small business.":"Iri vugururwa ririmo impinduka ku bikoresho by'imari, gupima agaciro k'ibintu ku isoko, guhuza ibigo n'amafaranga ava mu masezerano n'abakiriya. Rigenewe ibigo byujuje ibisabwa, bidafite inshingano zo kubazwa n'abaturage muri rusange kandi bisohora raporo z'imari zigenewe abakoresha batandukanye. Si ko buri kigo gito kigomba guhita gikoresha ayo mahame.",
    "Changes in accounting requirements can affect policies, data collection, estimates, contracts, disclosures and the way financial information is explained to owners, lenders and other users. Waiting until the reporting period begins can leave too little time to identify information gaps or train the people who prepare the accounts.":"Impinduka mu bisabwa by'ibaruramari zishobora kugira ingaruka ku mabwiriza y'ibaruramari, gukusanya amakuru, ibigereranyo, amasezerano, ibisobanuro bitangwa muri raporo n'uko amakuru y'imari asobanurirwa ba nyiri ibigo, abatanga inguzanyo n'abandi bayakoresha. Gutegereza ko igihe cya raporo gitangira bishobora gutuma habura igihe gihagije cyo kumenya amakuru abura cyangwa guhugura abategura ibitabo by'ibaruramari.",
    "Start by asking your accountant which reporting framework the entity is required or permitted to use in its jurisdiction, whether the company qualifies to apply the Standard and whether early application is being considered.":"Banza ubaze umubaruramari wawe amahame y'ibaruramari ikigo kigomba cyangwa gishobora gukoresha mu gihugu gikoreramo, niba cyujuje ibisabwa kugira ngo gikoreshe aya mahame n'uko gitekereza kuyatangira mbere y'igihe.",
    "Identify transactions and balances that may be affected. Review accounting policies and the chart of accounts with a qualified professional. Check whether existing systems capture the information needed for new or revised requirements. Plan staff briefings and agree who will oversee implementation.":"Menya ibikorwa n'amafaranga asigaye mu bitabo bishobora kugirwaho ingaruka. Ongera usuzume amabwiriza y'ibaruramari n'urutonde rw'ibyiciro by'konti uri kumwe n'inzobere ibifitiye ubushobozi. Reba niba uburyo mukoresha ubu bushobora kubika amakuru akenewe n'ibisabwa bishya cyangwa ibyavuguruwe. Tegura ibiganiro byo gusobanurira abakozi kandi mwumvikane uzakurikirana ishyirwa mu bikorwa.",
    "The IFRS Foundation publishes the Standard and supporting materials. Local adoption, regulatory requirements and entity-specific treatment must be confirmed with the relevant professional advisers and authorities.":"Umuryango wa IFRS usohora ayo mahame n'inyandiko ayasobanura. Uko azemezwa mu gihugu, ibisabwa n'inzego zigenzura n'uko agomba gukoreshwa ku kigo runaka bigomba kugenzurwa n'abajyanama b'inzobere n'inzego zibifitiye ububasha.",
    "A business seeking investment should be able to explain how it earns revenue, what drives its costs, how cash moves through the organisation and what additional capital would enable. Financial statements, management accounts, budgets and forecasts should tell a consistent story.":"Ikigo gishaka ishoramari kigomba kuba gishobora gusobanura uko cyinjiza amafaranga, ibitera ibiciro byacyo, uko amafaranga azenguruka mu bikorwa byacyo n'icyo igishoro cyiyongereye cyagifasha kugeraho. Raporo z'imari, ibitabo by'ubuyobozi, ingengo y'imari n'iteganyamari bigomba gutanga ishusho imwe ihuje.",
    "The story should include assumptions and risks. A forecast is more useful when a reader can see the expected sales volume, pricing, cost base, funding requirement and the conditions that could cause results to differ.":"Ibisobanuro bigomba kugaragaza ibyo mwashingiragaho n'ibyago bishobora kubaho. Iteganyamari rigira akamaro kurushaho iyo urisoma ashobora kubona ingano y'igurishwa riteganyijwe, ibiciro, ibiciro by'ibikorwa, igishoro gikenewe n'ibintu bishobora gutuma ibisubizo bihinduka.",
    "Prepare up-to-date financial records, tax and statutory documents where relevant, details of existing borrowing, major contracts, ownership information and a clear use-of-funds plan. Keep supporting evidence for key assumptions. Ensure that figures in a presentation agree with the underlying records.":"Tegura inyandiko z'imari zigezweho, inyandiko z'imisoro n'izisabwa n'amategeko aho bikenewe, ibisobanuro by'inguzanyo zisanzwe, amasezerano akomeye, amakuru ya ba nyir'ikigo na gahunda isobanutse y'uko amafaranga azakoreshwa. Bika ibimenyetso bishyigikira ibyo mwashingiragaho. Menya neza ko imibare iri mu nyandiko yo kumurika umushinga ihuye n'iri mu bitabo by'ikigo.",
    "NISR’s 2025 Foreign Private Capital Census reports investment inflows surveyed across private-sector enterprises in Rwanda. This is useful macro-level context, but it does not mean every enterprise has equal access to capital or that a particular funding route is suitable.":"Ibarura ry'ishoramari ry'abikorera ryo mu mahanga rya NISR ryo mu 2025 rigaragaza amafaranga y'ishoramari yinjiye mu bigo by'abikorera byakoreweho ubushakashatsi mu Rwanda. Aya ni amakuru afasha gusobanukirwa ubukungu muri rusange, ariko ntasobanura ko buri kigo gifite amahirwe angana yo kubona igishoro cyangwa ko uburyo bumwe bwo kukibona bukwiye buri wese.",
    "Equity, debt, grants, supplier credit and strategic partnerships have different costs, obligations and implications for control. Compare the repayment profile, security requirements, dilution, reporting duties and timing before making a decision.":"Imari shingiro itangwa hagamijwe kugira imigabane, inguzanyo, inkunga, kwishyura abatanga ibicuruzwa nyuma cyangwa ubufatanye bufite intego bigira ibiciro, inshingano n'ingaruka bitandukanye ku burenganzira bwo kuyobora ikigo. Gereranya uko uzishyura, ingwate isabwa, kugabana imigabane, inshingano zo gutanga raporo n'igihe bikorerwamo mbere yo gufata icyemezo.",
    "Seek qualified financial, legal and tax advice for the specific transaction. Investment readiness is about making the business easier to assess; it is not a promise that funding will be approved.":"Shaka ubujyanama bw'inzobere mu by'imari, amategeko n'imisoro ku gikorwa cyihariye. Kwitegura gushaka ishoramari ni ugutuma ubucuruzi bworohera abandi gusuzuma; si isezerano ko amafaranga azatangwa.",
    "Start by separating direct costs, operating overheads, financing costs and one-off expenditure. Then examine how costs behave as sales or service volumes change. A cost that appears fixed may rise when capacity is stretched; a variable cost may become more efficient at higher volumes.":"Tangira utandukanya ibiciro bitaziguye, ibiciro rusange by'imikorere, ibiciro by'ibirarane n'inguzanyo n'amafaranga akoreshwa rimwe gusa. Hanyuma urebe uko ibiciro bihinduka uko ingano y'igurishwa cyangwa serivisi ihinduka. Ikiguzi gisa n'ikidahinduka gishobora kwiyongera iyo ibikorwa byagutse; ikiguzi gihinduka na cyo gishobora kugabanuka kuri buri gicuruzwa iyo umusaruro wiyongereye.",
    "Where possible, analyse cost by product, service, customer segment or location. This can reveal that a high-revenue activity contributes little margin, or that a small group of customers requires disproportionate support.":"Aho bishoboka, sesengura ibiciro ukurikije igicuruzwa, serivisi, itsinda ry'abakiriya cyangwa ahantu ibikorwa bikorerwa. Ibi bishobora kugaragaza ko igikorwa kinjiza amafaranga menshi ariko gisigaraho inyungu nke, cyangwa ko itsinda rito ry'abakiriya risaba ubufasha bwinshi cyane.",
    "Review rework, delays, idle stock, duplicated processes, avoidable fees, poor purchasing terms and activities that do not support the customer promise. Ask staff who perform the work where time or resources are repeatedly lost.":"Suzuma imirimo isubirwamo kubera amakosa, ubukererwe, ibicuruzwa bimaze igihe mu bubiko bidakoreshwa, ibikorwa bisubirwamo, amafaranga yashoboraga kwirindwa, amasezerano mabi yo kugura n'ibikorwa bitongera agaciro ku mukiriya. Baza abakozi bakora iyo mirimo aho igihe cyangwa umutungo bikunda gupfushirizwa ubusa.",
    "Be cautious about cuts to maintenance, quality checks, training or customer support. A short-term saving can create defects, complaints, lost customers or higher costs later.":"Jya witonda mbere yo kugabanya amafaranga yo gufata neza ibikoresho, kugenzura ireme, guhugura abakozi cyangwa gufasha abakiriya. Amafaranga wabika mu gihe gito ashobora gutera ibicuruzwa bifite inenge, ibirego, gutakaza abakiriya cyangwa ibiciro byinshi kurushaho mu gihe kizaza.",
    "Before implementing a cost initiative, record the baseline and define the expected saving. Afterward, check actual costs alongside quality, delivery time, complaints, repeat business and employee workload. This prevents a narrow financial measure from hiding damage elsewhere.":"Mbere yo gushyira mu bikorwa gahunda yo kugabanya ibiciro, andika uko ibintu bihagaze ubu kandi usobanure amafaranga witeze kuzigama. Nyuma yayo, suzuma ibiciro byabayeho koko hamwe n'ireme, igihe cyo kugeza serivisi, ibirego, abakiriya bagaruka n'umurimo w'abakozi. Ibi birinda ko kureba amafaranga gusa bihisha ibindi byangiritse.",
    "The goal is not the lowest possible cost. It is a cost structure that supports a sustainable offer and leaves the organisation with enough capacity to serve its customers.":"Intego si ukugira ikiguzi gito gishoboka kurusha ibindi. Ni ukugira imiterere y'ibiciro ishyigikira serivisi irambye kandi igasigira ikigo ubushobozi buhagije bwo gukorera abakiriya.",
    "Surveys, reviews, call notes, complaints and frontline conversations can reveal friction in the customer journey. But collecting more responses does not automatically improve the experience. Customers need to see that their input is understood and acted on.":"Ubushakashatsi, ibitekerezo byatanzwe, inyandiko z'ibiganiro kuri telefoni, ibirego n'ibiganiro abakozi bagirana n'abakiriya bishobora kugaragaza ibibazo mu rugendo rw'umukiriya. Ariko gukusanya ibisubizo byinshi ntibihita binoza ubunararibonye. Abakiriya bakeneye kubona ko ibitekerezo byabo byumviswe kandi hari igikorwa cyabikurikiye.",
    "A 2025 customer-experience priorities report found that respondents placed high importance on service quality, customer loyalty and simplifying the customer journey. It also identified feedback and survey management as a focus area for many organisations. The findings are directional research, not a guarantee that every sector or customer group behaves the same way.":"Raporo yo mu 2025 ku by'ingenzi mu bunararibonye bw'abakiriya yagaragaje ko abatanze ibisubizo baha agaciro gakomeye ireme rya serivisi, ubudahemuka bw'abakiriya no koroshya urugendo rwabo. Yanagaragaje ko gucunga ibitekerezo n'ubushakashatsi ku bakiriya ari kimwe mu byo ibigo byinshi byibandaho. Ibi ni ibyavuye mu bushakashatsi bifasha kwerekana icyerekezo, si gihamya ko inzego zose cyangwa amatsinda yose y'abakiriya yitwara kimwe.",
    "Make it clear who receives feedback, who categorises it, who investigates the cause and who is authorised to resolve the issue. For individual cases, acknowledge the customer and communicate what will happen next. For recurring themes, assign an owner and track the improvement through to completion.":"Sobanura neza uwakira ibitekerezo, ubishyira mu byiciro, ukora iperereza ku mpamvu yabyo n'ufite ububasha bwo gukemura ikibazo. Ku kibazo cy'umukiriya umwe, emera ko ubutumwa bwakiriwe kandi umumenyeshe igikurikira. Ku bibazo bikunda kugaruka, shyiraho ubishinzwe kandi ukurikirane uko igisubizo gishyirwa mu bikorwa kugeza kirangiye.",
    "Combine quantitative measures with customer language. A satisfaction score may show that something is wrong; comments and journey evidence can help explain where the friction occurs.":"Huza ibipimo by'imibare n'amagambo abakiriya bakoresha. Amanota yo kunyurwa ashobora kugaragaza ko hari ikibazo; ibitekerezo byabo n'ibimenyetso byo mu rugendo rwabo bishobora gusobanura aho ikibazo kiri.",
    "Tell customers when a change has been made because of feedback, where appropriate. Internally, share patterns with the teams that influence the experience, including sales, operations, finance and service staff.":"Aho bikwiye, menyesha abakiriya impinduka zakozwe bitewe n'ibitekerezo batanze. Mu kigo, sangiza ayo makuru amatsinda agira uruhare ku bunararibonye bw'abakiriya, harimo kugurisha, ibikorwa, imari n'abatanga serivisi.",
    "Review response rates, time to resolution, recurring complaint themes and whether the same problem returns. The strongest feedback programme is not the one that gathers the most comments; it is the one that helps the organisation make and sustain useful improvements.":"Suzuma umubare w'abasubiza, igihe bifata kugira ngo ikibazo gikemurwe, ibirego bikunda kugaruka n'uko ikibazo kimwe cyongera kugaragara. Gahunda ikomeye yo gukusanya ibitekerezo si iyakusanya byinshi kurusha izindi; ni iyifasha ikigo gukora impinduka zifite akamaro no kuzihoraho.",
    "Personalisation can include remembering a customer’s preferences, providing relevant product information, recognising a service history or avoiding repeated questions. It should reduce effort or improve relevance—not simply increase the number of messages a business sends.":"Kugenera umukiriya ibimubereye bishobora kuba ukwibuka ibyo akunda, kumuha amakuru ajyanye n'igicuruzwa, kumenya amateka ya serivisi yahawe cyangwa kwirinda kumubaza inshuro nyinshi ikintu kimwe. Bigomba kugabanya imbaraga ashyiraho cyangwa bikamuha serivisi imunogeye, aho kongera gusa ubutumwa ubucuruzi bumwoherereza.",
    "Qualtrics’ 2026 Consumer Experience Trends Report surveyed 20,000 consumers across 14 countries and 18 industries. It reports that 86% of consumers would share more personal data when organisations are transparent and clear about how it will be used. That does not mean customers will accept any data collection: perceived value, choice and trust remain important.":"Raporo ya Qualtrics yo mu 2026 ku cyerekezo cy'ubunararibonye bw'abaguzi yakoze ubushakashatsi ku bantu 20.000 bo mu bihugu 14 no mu nzego 18. Ivuga ko 86% by'abaguzi bemera gutanga andi makuru yabo igihe ibigo bisobanutse kandi bikagaragaza uko ayo makuru azakoreshwa. Ibi ntibivuga ko abakiriya bemera gukusanyirizwa amakuru yose: agaciro babona, uburenganzira bwo guhitamo n'icyizere biracyafite akamaro.",
    "Collect only information that has a clear purpose, explain how it will be used and respect applicable privacy and data-protection requirements. Give customers meaningful choices where required. Avoid using sensitive or unexpected information in ways that could make an interaction feel intrusive.":"Kusanya gusa amakuru afite impamvu isobanutse, usobanure uko azakoreshwa kandi wubahirize ibisabwa bijyanye n'ubuzima bwite no kurinda amakuru. Aho amategeko abiteganya, ha abakiriya amahitamo yumvikana. Irinde gukoresha amakuru y'ibanga cyangwa atari ategerejwe mu buryo bushobora gutuma umukiriya yumva ko ari gukurikiranwa mu buryo bumubangamiye.",
    "A business should also check whether information is accurate and current. A wrong name, outdated preference or poorly timed message can make automated personalisation feel less personal, not more.":"Ubucuruzi bugomba no kugenzura niba amakuru ari ukuri kandi agezweho. Izina ritari ryo, ibyo umukiriya yakundaga bitagihuye n'ubu cyangwa ubutumwa bwoherejwe mu gihe kitari cyo bishobora gutuma uburyo bwikoresha bwita ku mukiriya butagaragara nk'ubumwitayeho.",
    "Automation can help answer common questions or route requests, but customers should be able to reach a person when the situation is complex, emotional or unusual. Make escalation paths visible and ensure staff can see enough context to avoid asking the customer to start again.":"Uburyo bwikoresha bushobora gusubiza ibibazo bisanzwe cyangwa kohereza ubusabe ahabugenewe, ariko umukiriya agomba kubona umuntu igihe ikibazo gikomeye, gifite amarangamutima cyangwa kidasanzwe. Sobanura uko ikibazo gishobora kuzamurwa ku rwego rwo hejuru kandi uhe abakozi amakuru ahagije kugira ngo batongera gusaba umukiriya gutangira ibisobanuro bundi bushya.",
    "Measure whether personalisation improves task completion, resolution, satisfaction or repeat engagement. Do not judge success by the volume of automated messages or the amount of customer data collected.":"Pima niba kugenera umukiriya ibimubereye bifasha kurangiza ibyo yashakaga, gukemura ikibazo, kongera kunyurwa cyangwa gutuma agaruka. Ntupime intsinzi ushingiye ku bwinshi bw'ubutumwa bwikoresha cyangwa ku bwinshi bw'amakuru y'abakiriya yakusanyijwe.",
    "List the stages a customer moves through: discovering the business, asking questions, comparing options, buying, receiving the service, requesting help and returning. At each stage, record the channel used, the customer’s question, the information they need and the effort involved.":"Andika ibyiciro umukiriya anyuramo: kumenya ubucuruzi, kubaza ibibazo, kugereranya amahitamo, kugura, guhabwa serivisi, gusaba ubufasha no kugaruka. Kuri buri cyiciro, andika inzira yakoreshejwe, ikibazo umukiriya yabajije, amakuru yari akeneye n'imbaraga yashyizemo.",
    "Look for hand-offs where information is lost. A customer who explains the same issue to several people, receives conflicting answers or cannot continue a request on another channel is experiencing an organisational problem—not simply a channel problem.":"Shaka aho amakuru atakara igihe umukiriya yimurirwa ku wundi mukozi cyangwa indi serivisi. Umukiriya usobanura ikibazo kimwe ku bantu benshi, agahabwa ibisubizo bivuguruzanya cyangwa ntabashe gukomereza ubusabe bwe ku yindi nzira aba ahuye n'ikibazo cy'imiterere y'ikigo, si ikibazo cy'inzira imwe gusa.",
    "A connected journey does not require every business to buy an expensive platform. It does require clear ownership, consistent information, agreed service standards and a reliable way to record customer interactions. Smaller organisations can begin with shared procedures and a well-managed customer record.":"Urugendo rw'umukiriya ruhujwe ntirusaba ko buri kigo kigura ikoranabuhanga rihenze. Ariko rusaba ko inshingano zisobanutse, amakuru ahuzwa, ibipimo bya serivisi byumvikanyweho n'uburyo bwizewe bwo kwandika imikoranire n'abakiriya. Ibigo bito bishobora gutangirira ku mabwiriza ahuriweho no ku nyandiko z'abakiriya zicunzwe neza.",
    "IBM’s 2025 customer-experience trends discussion highlights omnichannel integration and proactive engagement as important themes. The practical lesson is to coordinate the experience across touchpoints rather than optimise each channel in isolation.":"Ibisobanuro bya IBM byo mu 2025 ku cyerekezo cy'ubunararibonye bw'abakiriya bishimangira guhuza inzira zitandukanye no kwegera abakiriya mbere y'uko bagira ikibazo. Isomo rifatika ni uguhuza ubunararibonye mu hantu hose umukiriya ahurira n'ikigo aho kunoza buri nzira ukwayo.",
    "Do not try to redesign everything at once. Use complaints, lost-sale reasons, waiting times and frontline observations to identify the moments that create the most friction. Improve one or two priority journeys, then test whether customers can complete their task more easily.":"Ntugerageze guhindura ibintu byose icyarimwe. Koresha ibirego, impamvu zituma igurishwa ritabaho, igihe cyo gutegereza n'ibyo abakozi bakorera imbere babona kugira ngo umenye ibihe bitera ingorane nyinshi. Banza unoze urugendo rumwe cyangwa ebyiri z'ingenzi, hanyuma ugerageze kureba niba abakiriya basigaye bashobora kurangiza ibyo baje gukora mu buryo bworoshye.",
    "Review the journey with employees as well as customers. Staff often know where policies, systems or hand-offs make it difficult to deliver the service the organisation intends.":"Ongera usuzume urugendo rw'umukiriya uri kumwe n'abakozi ndetse n'abakiriya. Akenshi abakozi baba bazi aho amabwiriza, uburyo bw'akazi cyangwa kwimurira umukiriya ku wundi mukozi bituma bigorana gutanga serivisi ikigo cyifuza.",
    "Customer satisfaction (CSAT), customer effort and recommendation measures such as NPS can each provide a different view. None explains the whole experience on its own. Select a measure based on the question the organisation needs to answer and the moment in the journey being assessed.":"Ibipimo byo kunyurwa kw'abakiriya (CSAT), imbaraga umukiriya ashyiraho n'ibipimo byo gusaba ko abandi bamenyeshwa serivisi (nka NPS) bitanga amashusho atandukanye. Nta na kimwe muri byo gisobanura ubunararibonye bwose cyonyine. Hitamo igipimo ukurikije ikibazo ikigo gishaka gusubiza n'icyiciro cy'urugendo rw'umukiriya kiri gusuzumwa.",
    "For example, a short post-resolution question can help assess a support interaction. A broader relationship survey may be more suitable for understanding the overall relationship. Avoid sending repeated surveys that create fatigue without leading to visible action.":"Urugero, ikibazo kigufi kibazwa nyuma yo gukemura ikibazo gishobora gufasha gusuzuma uko ubufasha bwatanzwe. Ubushakashatsi bwagutse ku mubano n'umukiriya bushobora kuba bwiza mu gusobanukirwa umubano muri rusange. Irinde kohereza ubushakashatsi inshuro nyinshi butuma abakiriya barambirwa kandi ntibugaragaze igikorwa cyafashwe.",
    "Pair customer responses with service information such as resolution time, repeat contacts, abandoned enquiries, delivery performance, error rates and complaint themes. If a satisfaction score falls, operational data can help locate the process that may be contributing to the change.":"Huza ibisubizo by'abakiriya n'amakuru ya serivisi nk'igihe cyo gukemura ikibazo, kongera kuvugana n'ikigo, ubusabe butarakurikiranywe, uko ibyo abakiriya bategetse bitangwa, umubare w'amakosa n'ibirego bikunda kugaruka. Niba amanota yo kunyurwa agabanutse, amakuru y'imikorere ashobora gufasha kubona uburyo bw'akazi bushobora kuba intandaro y'iyo mpinduka.",
    "Segment results carefully by service, channel or customer group where sample sizes allow. A single average can hide a serious problem affecting a smaller group.":"Gabanya ibisubizo ukurikije serivisi, inzira yakoreshejwe cyangwa itsinda ry'abakiriya aho umubare w'abatanze ibisubizo uhagije. Impuzandengo imwe ishobora guhisha ikibazo gikomeye kigira ingaruka ku itsinda rito.",
    "Assign an owner to each priority insight. Agree what change will be tested, how success will be measured and when the team will review it. Close the loop with customers when a specific issue has been resolved and share learning across teams.":"Shyiraho umuntu ushinzwe gukurikirana buri gitekerezo cy'ingenzi. Mwumvikane impinduka izageragezwa, uko intsinzi izapimwa n'igihe itsinda rizongera kuyisuzuma. Menyesha abakiriya igihe ikibazo runaka cyakemuwe kandi musangize andi matsinda amasomo mwigiye muri icyo gikorwa.",
    "Measures are useful when they improve decisions. The goal is not to maximise a score in isolation, but to make it easier for customers to achieve what they came to do.":"Ibipimo bigira akamaro iyo bifasha gufata ibyemezo byiza. Intego si ukuzamura amanota gusa, ahubwo ni korohereza abakiriya kugera ku cyo baje gukora."
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = "en";
  let theme = "light";
  const originalDocumentTitle = document.title;

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
    document.title = translateValue(originalDocumentTitle, language);
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