// College list data for Rohan
// Profile: Moreau Catholic HS, Class of 2027 | SAT 1360 | GPA 3.4 UW / 3.6 W
// Spike: founder/entrepreneurship, AI/ML, active fintech sales internship (The Founders' Pool), performing arts/comedy, marketing & web dev
//
// Ranking basis: schools are drawn from the full US News Best Business Schools (MBA) ranking
// (https://www.usnews.com/best-graduate-schools/top-business-schools/mba-rankings), worked through
// to rank #48, then checked for whether the same university actually offers an undergraduate BS,
// BSBA, or BBA degree. Schools without one are listed in EXCLUDED_SCHOOLS, with the closest real
// BA-level/business-adjacent option covered in BA_PROGRAMS. A handful of strong-fit schools outside
// the MBA top 48 (Babson, Bentley, Chapman, LMU, Santa Clara, Denver, Arizona, Drexel, Menlo,
// Pacific) are included too since they're well-matched to Rohan's profile.
//
// Each school appears as ONE card. If a school has more than one relevant program, they're listed
// together under "programs" as {name, url, syllabusUrl} rather than repeating the school as a
// separate card. "knownFor" flags what each school is specifically known for when relevant.
// mbaRank reflects the actual US News MBA ranking position. SAT/GPA bands are approximate middle-50%
// figures for directional planning, not guarantees.

const PROFILE = {
  name: "Srinivas",
  school: "Moreau Catholic High School, Fremont, CA",
  grad: "Class of 2027",
  sat: 1360,
  gpaUW: "3.4",
  gpaW: "3.6",
  spike: [
    "CEO & Co-Founder, Orderly (student productivity app integrating with Canvas)",
    "Pitched CheqIn app; Blue Ocean Competition Top 100; BIZWORLD Finalist; Conrad Challenge",
    "AI/ML coding certification (capstone in neural networks, deep learning, NLP); Blue Stamp Engineering AI weather station",
    "VEX Robotics team member & mentor",
    "Operations/Marketing Lead + Web Designer/Developer, Bldg18 Comedy Club",
    "Stand-up comedian (600+ audience, charity shows for Community Seva)",
    "Unpaid Sales Intern, The Founders' Pool (AI-powered fintech platform for early-stage businesses)",
    "AP coursework: Statistics (4.0), Microeconomics (3.0), US History (3.0)",
    "Creative portfolio positions him at the intersection of AI innovation, financial literacy, and performing arts"
  ]
};

// Section A: Undergraduate Business Programs (BS, BSBA, and BBA)
const BS_BUSINESS = [
  {
    school: "University of Virginia",
    knownFor: "Team-based consulting projects (Integrated Core)",
    mbaRank: "#11 (tie)",
    category: "Reach",
    sat: "1420–1520",
    gpa: "~3.85+ UW",
    fit: "McIntire's team-based 'Integrated Core' mirrors real consulting/startup project work, a natural extension of the Orderly build cycle — but McIntire's secondary-application admit (after a competitive first year) sits well above current stats.",
    sat1450Effect: "1450 falls within McIntire's middle 50% (1420–1520) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "McIntire School of Commerce — BS in Commerce", url: "https://www.commerce.virginia.edu/bs-commerce/academics" }
    ]
  },
  {
    school: "University of Michigan",
    knownFor: "Entrepreneurship (Zell Lurie Institute) and sales/marketing electives",
    mbaRank: "#13",
    category: "Target / Reach",
    sat: "1360–1530",
    gpa: "~3.85+ UW",
    fit: "Ross's Zell Lurie Institute for Entrepreneurial Studies and a strong sales/marketing elective track match the founder + fintech-sales internship experience well, and 1360 now sits right at the floor of Ross's middle 50% — but Michigan's overall admit rate (~18%) and Ross's competitive sophomore-year admit process keep this a genuine stretch even with stats technically in range.",
    sat1450Effect: "1450 would sit comfortably within Ross's middle 50% (rather than right at the floor) — this would further solidify the assessment as a clear Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Ross School of Business — BBA", url: "https://michiganross.umich.edu/undergraduate/bba/curriculum" }
    ]
  },
  {
    school: "Indiana University Bloomington",
    highlightColor: "green",
    knownFor: "One of the only dedicated undergraduate Professional Sales programs in the country; also runs a newly launched combined Business Intelligence & Data Science BS (2025)",
    mbaRank: "#21 (tie)",
    category: "Target / Reach",
    sat: "1220–1420 (IU overall; Kelley direct-admit skews higher)",
    gpa: "~3.6–3.9 (IU overall admits ~80%; Kelley direct-admit is the harder bar)",
    fit: "Kelley runs one of the only dedicated undergraduate Professional Sales programs in the country — a direct match to the now-active Founders' Pool AI-finance sales internship. IU's overall accessibility plus a competitive-but-reachable Kelley direct-admit bar make this the strongest reach-with-real-upside on the list. The newly launched Kelley + Luddy combined Business Intelligence & Data Science BS is a purpose-built alternative that fits the AI/ML certification and coding background directly.",
    clubsDeepDive: "Kelley's Sales Club, run through the Center for Global Sales Leadership, is as close to a formal extension of the Founders' Pool internship as any club on this list, and the selective 60-student Global Sales Workshop cohort (weekly meetings, competitions, corporate site visits) turns that experience into structured, repeatable skill-building. Kelley also hosts the National Team Selling Competition itself — 24 teams, a $6,000 prize pool — tied directly to its Professional Sales major, making this less a club to join and more a discipline to formally study.",
    sat1450Effect: "1450 sits well above Kelley's typical direct-admit range — this would solidify the assessment as a clear Target rather than Target/Reach.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Kelley School of Business — BS", url: "https://kelley.iu.edu/undergraduate/" },
      { name: "Kelley + Luddy Schools — BS in Business Intelligence & Data Science", url: "https://luddy.iu.edu/academics/undergraduate/bs-business-intelligence-data-science.html" }
    ]
  },
  {
    school: "University of Texas at Dallas",
    knownFor: "Dedicated Professional Sales track; AI-integrated business tracks",
    mbaRank: "#23 (tie)",
    category: "Target / Likely",
    sat: "1250–1450",
    gpa: "3.5–3.9",
    fit: "Jindal deliberately grants a BS (not a BBA) and runs a dedicated Professional Sales track plus AI-integrated business tracks — a close double match to the active Founders' Pool fintech-sales internship, at a meaningfully more accessible admit bar than the flagship UT Austin campus.",
    sat1450Effect: "1450 sits well above Jindal's typical range — this would strengthen the assessment to a comfortable Likely.",
    programs: [
      { name: "Naveen Jindal School of Management — BS in Business Administration", url: "https://osim.utdallas.edu/bs-ba" }
    ]
  },
  {
    school: "University of Southern California",
    knownFor: "Entrepreneurship (Lloyd Greif Center); LA entertainment-industry ties; also home to the Iovine and Young Academy's portfolio-based Arts+Tech+Business program",
    mbaRank: "#25 (tie)",
    category: "Reach",
    sat: "Marshall: 1400–1530. Iovine and Young Academy uses holistic, portfolio + interview-weighted admission instead of a numeric SAT range.",
    gpa: "~3.85+ UW (Marshall); Iovine and Young typical ~3.7+, though portfolio/interview carry more weight than test scores",
    fit: "USC's Lloyd Greif Center for Entrepreneurial Studies and LA's entertainment-industry adjacency match the comedy-club + startup dual track well, but overall selectivity is steep at current stats. The Iovine and Young Academy's BS in Arts, Technology and the Business of Innovation is purpose-built for students who blend creative production, technology, and entrepreneurship — arguably the closest bespoke match to the creative portfolio and Orderly/CheqIn founder background of anything on this list, admitted through a separate, more holistic portfolio + interview process.",
    sat1450Effect: "For Marshall: 1450 falls within its middle 50% (1400–1530) — this would shift the assessment from Reach to Target. For Iovine and Young: portfolio and interview matter more than test scores, so 1450 helps only marginally.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Marshall School of Business — BS in Business Administration", url: "https://www.marshall.usc.edu/programs/undergraduate-programs/undergraduate-degrees/business-administration-program" },
      { name: "Iovine and Young Academy — BS in Arts, Technology and the Business of Innovation", url: "https://iovine-young.usc.edu/learn/undergraduate/bs-arts-technology-and-the-business-of-innovation" }
    ]
  },
  {
    school: "University of Georgia",
    knownFor: "#1-ranked public BBA program (Niche); 95% employment rate",
    mbaRank: "#25 (tie)",
    category: "Target / Reach",
    sat: "1290–1440 (Terry's internal BBA admission is more selective than UGA overall)",
    gpa: "3.6–3.9",
    fit: "Terry is the #1-ranked public BBA program by Niche with a 95% employment rate — strong brand for a business-only degree. Out-of-state admission plus Terry's competitive internal BBA selection process make this a target leaning reach at current stats.",
    sat1450Effect: "1450 sits above Terry's typical range (1290–1440) — this would move the assessment solidly into Target, above the reach threshold.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Terry College of Business — BBA", url: "https://www.terry.uga.edu/undergraduate/" }
    ]
  },
  {
    school: "Arizona State University",
    highlightColor: "blue",
    knownFor: "Supply Chain Management ranked top-5 nationally",
    mbaRank: "#29 (tie)",
    category: "Likely / Safety",
    sat: "1080–1320",
    gpa: "3.3–3.8",
    clubsDeepDive: "W.P. Carey's ProSales Club and Sales Scholars program plug directly into the Founders' Pool sales internship, with real competitions like the Sun Devil Sales Pitch and the 15-school Arizona Collegiate Sales Competition. The New Venture Challenge — an 8-week accelerator that has funded past winners $25K-$40K — and Venture Devils (university-wide mentorship plus a Demo Day for $250K+ in funding) are a strong structured next step for Orderly, turning a personal project into something pitched for real investment. The AI in Business Club rounds it out, giving the AI/ML coding background a home inside the business school itself.",
    fit: "ASU is highly accessible (~90% overall admit) with a nationally top-5 Supply Chain Management program — a real safety net with genuine program strength. Note the intended major must be one of the ~12 BS-granting tracks (Finance, Accountancy, Supply Chain, Data Analytics, etc.); the general 'Business Administration' major is a BA, not a BS.",
    programs: [
      { name: "W.P. Carey School of Business — BS majors (Finance, Accountancy, Supply Chain Management, Business Data Analytics, and others)", url: "https://degrees.apps.asu.edu/bachelors/major/ASU00/BABUSBA/business" }
    ]
  },
  {
    school: "Ohio State University",
    knownFor: "Business analytics; supply chain",
    mbaRank: "#32 (tie)",
    category: "Target / Reach",
    sat: "1300–1460",
    gpa: "3.6–3.9",
    fit: "Fisher's business analytics and supply chain tracks suit the tech background well; Ohio State overall is accessible (~55% admit) but Fisher's direct-admit business bar is meaningfully more competitive.",
    sat1450Effect: "1450 sits above Fisher's typical range (1300–1460) — this would move the assessment solidly into Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Max M. Fisher College of Business — BSBA", url: "https://fisher.osu.edu/undergraduate" }
    ]
  },
  {
    school: "University of Minnesota",
    knownFor: "Marketing analytics",
    mbaRank: "#32 (tie)",
    category: "Target",
    sat: "1320–1480",
    gpa: "3.6–3.9",
    fit: "Carlson's marketing analytics track pairs reasonably with the AI/ML and sales interests; 1360 SAT sits near the lower end of Carlson's admitted range.",
    sat1450Effect: "1450 sits near the top of Carlson's range (1320–1480) — this would strengthen the assessment well within Target.",
    programs: [
      { name: "Carlson School of Management — BSB", url: "https://carlsonschool.umn.edu/undergraduate" }
    ]
  },
  {
    school: "University of Rochester",
    knownFor: "Business Analytics and Entrepreneurship tracks, taught partly by Simon MBA faculty",
    mbaRank: "#34 (tie)",
    category: "Reach",
    sat: "1420–1520",
    gpa: "~3.85+ UW",
    fit: "Taught partly by Simon MBA/MS faculty with dedicated Entrepreneurship and Business Analytics tracks — a genuinely strong match for the founder + AI background and the 4.0 in AP Statistics, but Rochester's overall admissions bar sits above current stats. Confirm current administrative home (College vs. Simon) before applying, since the move was slated for Fall 2026.",
    sat1450Effect: "1450 falls within Rochester's middle 50% (1420–1520) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Business Program (Florescue, joining Simon Business School) — BS", url: "https://simon.rochester.edu/undergraduate-business-program" }
    ]
  },
  {
    school: "Southern Methodist University",
    highlightColor: "green",
    knownFor: "Entrepreneurship Club; student-run $5M Boulevard Investment Group fund",
    mbaRank: "#36 (tie)",
    category: "Target",
    sat: "1250–1430",
    gpa: "~3.7 average enrolled GPA",
    fit: "Cox's Entrepreneurship Club and student-run $5M Boulevard Investment Group fund pair well with the Orderly/CheqIn founder story and the fintech-sales internship experience; Dallas's Global 500 business hub also means dense finance/sales internship access. 1360 SAT sits near the middle of Cox's admitted range.",
    clubsDeepDive: "The SMU Sales Club is a direct extension of the Founders' Pool sales internship, and the Cox Marketing Academy is a credible next step for the marketing and promotion skills built running Bldg18 Comedy Club's outreach. The PEVC Club (private equity/venture capital) adds a fintech-adjacent angle, while the Caruth Institute's Startup Launch and Elevator Pitch Competitions give Orderly another live pitching stage — all inside a Dallas business hub with dense real-world sales and finance internship access.",
    sat1450Effect: "1450 sits above Cox's typical range (1250–1430) — this would strengthen the assessment well into Likely territory.",
    programs: [
      { name: "Cox School of Business — BBA", url: "https://www.smu.edu/cox/business-degrees/undergraduate/bachelor-business-administration" }
    ]
  },
  {
    school: "Iowa State University",
    highlightColor: "blue",
    knownFor: "Entrepreneurship ranked #9 worldwide (Princeton Review)",
    mbaRank: "#38",
    category: "Likely / Safety",
    sat: "1080–1320",
    gpa: "3.3–3.7",
    fit: "Ivy's entrepreneurship program is ranked #9 worldwide by the Princeton Review — an unusually strong founder-fit at a very accessible admit bar (Iowa State overall admits ~85%).",
    clubsDeepDive: "Iowa State's Entrepreneur Club (E-Club) gives direct access to real entrepreneurs and hands-on venture-building conversations, while the Ivy College of Business round of the College-by-College Pitch Off — a fast, 90-second pitch format with $5,000/$2,500/$1,500 prizes run through the Pappajohn Center — rewards exactly the kind of concise, high-energy pitching built through Blue Ocean and BIZWORLD. Combined with Iowa State's very accessible admit bar at current stats, this is a place to lead clubs rather than just join them.",
    programs: [
      { name: "Ivy College of Business — BBA", url: "https://www.ivybusiness.iastate.edu/academics/undergraduate-programs/bachelor-of-business-administration/" }
    ]
  },
  {
    school: "Brigham Young University",
    knownFor: "Sales and entrepreneurship placement record",
    mbaRank: "#39 (tie)",
    category: "Target",
    sat: "1280–1440",
    gpa: "3.6–3.9",
    fit: "Marriott's sales and entrepreneurship placement record is strong, but note BYU requires an ecclesiastical endorsement and honor code commitment for admission regardless of academic fit — a real practical factor to weigh, not just a stats question.",
    sat1450Effect: "1450 sits above Marriott's typical range (1280–1440) — this would move the assessment into Likely, honor-code/endorsement considerations aside.",
    programs: [
      { name: "Marriott School of Business — BS in Business Management", url: "https://catalog.byu.edu/business/management/business-management-bs" }
    ]
  },
  {
    school: "University of Utah",
    highlightColor: "pink",
    knownFor: "Goff Strategic Sales Program",
    mbaRank: "#39 (tie)",
    category: "Likely",
    sat: "1150–1350",
    gpa: "3.4–3.8",
    fit: "Eccles runs the Goff Strategic Sales Program, a dedicated, technology-driven undergraduate sales curriculum (including sales technology/CRM training) — a very direct match to the active Founders' Pool sales internship, at an accessible admit bar.",
    clubsDeepDive: "Eccles' Fintech Club is about as direct a match to the Founders' Pool AI-fintech internship as any club on this entire list, and the University Venture Fund lets students make real venture capital investment decisions alongside actual entrepreneurs and investors. The Lassonde Entrepreneur Institute is ranked top-10 nationally and supports 500+ startup teams a year — genuinely serious infrastructure for continuing to build Orderly — while the Crimson Quant Club and Student Investment Fund add further quantitative depth that pairs well with the AI/ML certification.",
    programs: [
      { name: "David Eccles School of Business — BS in Business Administration", url: "https://eccles.utah.edu/programs/undergraduate/business-administration/" }
    ]
  },
  {
    school: "University of Maryland, College Park",
    highlightColor: "green",
    knownFor: "Pitch Dingman Competition (student entrepreneurship pitch contest)",
    mbaRank: "#43 (tie)",
    category: "Target / Reach",
    sat: "1360–1500",
    gpa: "3.6–3.9",
    fit: "Smith's Pitch Dingman Competition is a direct parallel to the Blue Ocean/BIZWORLD/Conrad Challenge competition track already on the resume — strong founder fit, though Maryland's out-of-state admit bar leans toward reach.",
    clubsDeepDive: "The Pitch Dingman Competition is one of the most well-funded student venture competitions on this entire list — $170,000+ across its fall semifinals and winter finals — and it's an almost exact parallel to the Blue Ocean/BIZWORLD/Conrad Challenge track already on the resume. The Collegiate Entrepreneurship Network is the club home behind it, and the Dingman Center's Mentor Network and Spark Fund add mentorship and small grants for student-run events.",
    sat1450Effect: "1450 falls within Smith's middle 50% (1360–1500) — this would shift the assessment solidly into Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Robert H. Smith School of Business — BS", url: "https://www.rhsmith.umd.edu/programs/undergraduate" }
    ]
  },
  {
    school: "Boston University",
    knownFor: "Entrepreneurship concentration",
    mbaRank: "#46 (tie)",
    category: "Reach",
    sat: "1390–1500",
    gpa: "~3.8+ UW",
    fit: "Questrom's entrepreneurship concentration is well regarded, but BU's admit rate has fallen to roughly 11%, pushing it out of target range at current stats.",
    sat1450Effect: "1450 falls within Questrom's middle 50% (1390–1500) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Questrom School of Business — BSBA", url: "https://www.bu.edu/academics/questrom/programs/undergrad" }
    ]
  },
  {
    school: "Michigan State University",
    knownFor: "Supply Chain Management ranked #1 nationally",
    mbaRank: "#43 (tie)",
    category: "Target / Likely",
    sat: "1120–1330",
    gpa: "3.4–3.8",
    fit: "Broad's Supply Chain Management program is ranked #1 nationally — a strong operations/analytics angle for the AI/ML background — at an accessible admit bar. Note the degree only became a BS in Fall 2025 (converted from BA for most majors; Hospitality Business remains a BA), so double-check this is still current when applying.",
    sat1450Effect: "1450 sits well above Broad's typical range (1120–1330) — this would strengthen the assessment to a comfortable Likely.",
    programs: [
      { name: "Eli Broad College of Business — BS", url: "https://broad.msu.edu/undergraduate/programs/" }
    ]
  },
  {
    school: "University of Pittsburgh",
    knownFor: "Trading-floor Financial Analysis Laboratory",
    mbaRank: "#48 (tie)",
    category: "Target / Likely",
    sat: "1250–1420",
    gpa: "3.5–3.8",
    fit: "Pitt Business runs a real trading-floor Financial Analysis Laboratory, a good hands-on finance match for the fintech-sales internship experience.",
    sat1450Effect: "1450 sits well above Pitt's typical range (1250–1420) — this would strengthen the assessment to a comfortable Likely.",
    programs: [
      { name: "Pitt Business (College of Business Administration) — BSBA", url: "https://www.cba.pitt.edu/" }
    ]
  },
  {
    school: "University of Wisconsin-Madison",
    knownFor: "Actuarial science/risk management and real estate tracks",
    mbaRank: "#48 (tie)",
    category: "Target / Reach",
    sat: "1350–1490",
    gpa: "3.6–3.9",
    fit: "Wisconsin's actuarial science/risk management and real estate tracks are unusually strong, but Wisconsin's rising out-of-state selectivity leans this toward the reach side of target.",
    sat1450Effect: "1450 sits within Wisconsin's upper range (1350–1490) — this would shift the assessment solidly into Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Wisconsin School of Business — BBA", url: "https://business.wisc.edu/undergraduate/" }
    ]
  },
];

// Section B: Business + Technology programs, including dual degrees
const BUSINESS_TECH = [
  {
    school: "Lehigh University",
    knownFor: "Named, structured dual-BS cohort (business + engineering)",
    category: "Reach / Target",
    sat: "1330–1470 (Lehigh overall; IBE cohort admission is more selective)",
    gpa: "3.7–4.0",
    fit: "A named, structured dual-BS cohort combining business fundamentals with a full engineering major in four years — matches the 'business and technology, dual degree' brief directly.",
    sat1450Effect: "1450 sits near the top of Lehigh's overall range (1330–1470) — this would shift the assessment solidly into Target, though the IBE cohort itself remains more selective than Lehigh overall.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Integrated Business and Engineering (IBE) — dual BS degree", url: "https://ibe.lehigh.edu/about/dual-degrees" }
    ]
  }
];

// Schools ranked in the US News MBA Top 48 that don't offer a qualifying BS/BSBA/BBA business degree.
// The closest real business-related option at each is covered in BA_PROGRAMS below.
const EXCLUDED_SCHOOLS = [
  { school: "University of Washington (Foster) — MBA #20", reason: "Foster does offer a full undergraduate business major, but the degree conferred is officially a BA (Bachelor of Arts in Business Administration), not a BS/BSBA/BBA." }
];

// Section D: BA-level and business-adjacent programs at schools whose undergraduate side does not
// offer a BS/BSBA/BBA. Each entry keeps the main program page link and adds a syllabus/curriculum/
// requirements link where the school publishes one separately. Schools with more than one relevant
// program (Vanderbilt) are listed once with multiple programs underneath.
const BA_PROGRAMS = [
  {
    school: "University of Washington",
    knownFor: "Buerk Center for Entrepreneurship",
    mbaRank: "MBA #20",
    category: "Reach",
    sat: "1350–1500",
    gpa: "3.7–3.9",
    fit: "A real, full business school — just a BA rather than a BS. Foster's Buerk Center for Entrepreneurship is a strong founder-story fit, but Foster's direct-admit process is competitive within an already-selective UW.",
    sat1450Effect: "1450 sits within Foster's upper range (1350–1500) — this would shift the assessment solidly into Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Foster School of Business — BA in Business Administration (BABA)", url: "https://foster.uw.edu/academics/degree-programs/undergraduate-programs/", syllabusUrl: "https://foster.uw.edu/academics/degree-programs/undergraduate-programs/curriculum" }
    ]
  }
];

// Section E: Colleges & programs NOT in the US News MBA top-48 ranking. Includes the previously-listed
// non-MBA-ranked schools (Babson, Bentley, Fordham, Chapman, LMU, Santa Clara, Denver, Arizona, Drexel,
// Menlo, Pacific — consolidated into single cards here) plus additional schools worth
// considering given Srinivas's profile: strong co-op/entrepreneurship/tech-forward business programs
// at a range of selectivity levels, plus one niche performing-arts/business crossover pick (Berklee).
const BEYOND_MBA_RANKING = [
  {
    school: "Babson College",
    knownFor: "#1-ranked entrepreneurship program in the country (US News specialty ranking)",
    mbaRank: "Not a nationally ranked full-time MBA program; #1 nationally for entrepreneurship",
    category: "Target",
    sat: "1290–1450",
    gpa: "3.5–3.9 (holistic, EC-weighted)",
    fit: "Best fit on the entire list. Babson's admissions process explicitly rewards founder experience, competition results, and a demonstrated business track record — directly rewarding the Orderly/CheqIn CEO role, Blue Ocean Top 100 finish, BIZWORLD final, and Conrad Challenge. A 1360 SAT sits right at Babson's median.",
    sat1450Effect: "1450 sits at the very top of Babson's range — this would push the profile from a comfortable Target toward Likely, especially combined with the founder-story extracurriculars.",
    programs: [
      { name: "BS in Business Administration — Entrepreneurship concentration", url: "https://www.babson.edu/undergraduate/academics/concentrations/entrepreneurship/" },
      { name: "BS in Business Administration — Technology, Entrepreneurship & Design minor", url: "https://www.babson.edu/undergraduate/academics/concentrations/entrepreneurship/" }
    ]
  },
  {
    school: "Fordham University",
    highlightColor: "pink",
    knownFor: "NYC finance/fintech internship density",
    mbaRank: "Not in MBA top 48; regionally strong AACSB business school",
    category: "Target",
    sat: "1310–1470",
    gpa: "3.6–3.9",
    fit: "NYC placement gives direct access to the fintech-startup and sales-internship ecosystem that The Founders' Pool (where he now interns) sits in; Gabelli's finance offerings plus NYC internship density fit the sales+fintech spike.",
    clubsDeepDive: "Fordham's Entrepreneurship Society and the Fordham Foundry (the university's entrepreneurship incubator) give Orderly a natural next home, while the PEVCC (Private Equity/Venture Capital Club) connects directly to the fintech angle behind the Founders' Pool internship. The Fordham Marketing Association, an official collegiate AMA chapter, is also a credible landing spot for the marketing/promotion skills already built running Bldg18 Comedy Club's outreach — and NYC placement means these clubs come with real industry proximity.",
    sat1450Effect: "1450 sits near the top of Gabelli's range — strengthens this well within Target, close to Likely.",
    programs: [
      { name: "Gabelli School of Business — BS", url: "https://www.fordham.edu/gabelli-school-of-business/academic-programs-and-admissions/undergraduate-programs/" }
    ]
  },
  {
    school: "Loyola Marymount University",
    highlightColor: "green",
    knownFor: "LA entertainment-industry ties",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Target",
    sat: "1200–1370",
    gpa: "3.6–3.9",
    fit: "LA entertainment-industry ties plus a growing entrepreneurship program suit the performing-arts/business hybrid brand built up in the creative portfolio. Note: confirm exact degree title (BS vs. BBA) for the intended major directly with LMU CBA admissions.",
    clubsDeepDive: "The LMU Entrepreneurship Society, housed in the Fred Kiesner Center, and the LMU Marketing Society both give direct homes for Orderly and for the promotional skills built through Bldg18 Comedy Club. The Kiesner Center's New Idea Pitch Competition, alongside Startup Weekend and the POWER Summit, add multiple live pitching venues in a single academic year. Combined with LA's entertainment-industry proximity, LMU is one of the few schools on this list where a comedy/marketing background and a startup founder story can genuinely reinforce each other on campus.",
    sat1450Effect: "1450 sits above LMU's typical range entirely — this would flip to Likely.",
    programs: [
      { name: "College of Business Administration — BS/BBA in Business Administration", url: "https://cba.lmu.edu/academics/undergrad/" }
    ]
  },
  {
    school: "Santa Clara University",
    highlightColor: "green",
    knownFor: "Silicon Valley startup/VC ecosystem access",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Target (upper end)",
    sat: "1330–1480",
    gpa: "3.7–4.0",
    fit: "25 minutes from home in Fremont and embedded in Silicon Valley's startup/VC ecosystem — Leavey's entrepreneurship programming and tech proximity match the Orderly/CheqIn founder story and AI/ML background directly. Stats sit at/slightly below the middle 50%, so this is the stretchier side of target.",
    clubsDeepDive: "The Bronco Venture Accelerator is a real, equity-free summer accelerator ending in a VC/angel Demo Day — about as close to a scaled-up version of the Orderly journey as exists on this list, run right in Silicon Valley. The Venture Capital Association gives a club home for the fintech/investing side of the Founders' Pool internship, and the Global Social Benefit Incubator connects social-impact entrepreneurship to the volunteer work already done with Community Seva — a genuine, less-obvious thread tying the whole profile together in one place.",
    sat1450Effect: "1450 sits comfortably within Leavey's middle 50% — this would move the profile from the stretchier side of Target to a solid, comfortable Target, and would also open the door to the 5-year Commerce+Engineering double degree.",
    programs: [
      { name: "Leavey School of Business — BS in Commerce", url: "https://www.scu.edu/business/undergraduates/academics/" },
      { name: "5-year Double Degree — BS in Commerce + BS in Engineering", url: "https://www.scu.edu/registrar/forms/request-for-double-degree/" }
    ]
  },
  {
    school: "University of Denver",
    highlightColor: "pink",
    knownFor: "Experiential Bridge Project",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Target / Likely",
    sat: "1180–1360",
    gpa: "3.5–3.8",
    fit: "Daniels' small class sizes and project-based Bridge Project suit a portfolio-heavy, EC-driven applicant; a solid target with good merit-aid potential.",
    clubsDeepDive: "Daniels' Pioneer Venture Group is DU's first fully student-run venture capital fund — students actually source and evaluate real startup investments, a genuinely rare hands-on credential for an undergraduate. The Pioneer Sales Club is a direct extension of the active Founders' Pool sales internship, and DO U gives a general entrepreneurship home for continuing to build out Orderly. Between a real student-managed VC fund and a dedicated sales club, Daniels offers an unusually concrete path from the current internship and founder experience into resume-ready college credentials.",
    sat1450Effect: "1450 sits well above Daniels' typical range — this would comfortably flip to Likely.",
    programs: [
      { name: "Daniels College of Business — BSBA", url: "https://daniels.du.edu/undergraduate-programs/" }
    ]
  },
  {
    school: "University of Arizona",
    highlightColor: "pink",
    knownFor: "McGuire Center for Entrepreneurship",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Likely",
    sat: "1140–1350",
    gpa: "3.5–3.9 (Honors College admission would be a reach)",
    fit: "Eller's McGuire Center for Entrepreneurship and a direct-admit BSBA pathway make this a comfortable likely with real program depth rather than just a fallback.",
    clubsDeepDive: "Eller's Professional Sales Club and its Suit Up Sales Challenge (plus entries in the Arizona and National Collegiate Sales Competitions) plug directly into the Founders' Pool sales internship with real, judged 15-minute sales-call competitions — about as literal a translation of that internship into campus life as exists on this list. The Student Entrepreneurship Association, based out of the McGuire Center, adds a general founder-community home for Orderly, rounding out a campus that treats sales as a serious, competitive discipline rather than an afterthought.",
    programs: [
      { name: "Eller College of Management — BSBA", url: "https://eller.arizona.edu/programs/undergraduate/academics/business-majors" },
      { name: "Eller College of Management — BSBA + Management Information Systems (MIS) dual path", url: "https://eller.arizona.edu/programs/undergraduate/academics/business-majors" }
    ]
  },
  {
    school: "Drexel University",
    highlightColor: "pink",
    knownFor: "Mandatory 6-month co-op (paid, structured placement)",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Likely",
    sat: "1200–1390",
    gpa: "3.5–3.8",
    fit: "Drexel's mandatory 6-month co-op converts the internship experience already gained at The Founders' Pool into a structured, resume-building placement cycle.",
    clubsDeepDive: "Drexel's Business Analytics Club is a strong extension of the AI/ML coding background, and the Close School of Entrepreneurship's Close Club plus the Baiada Institute for Entrepreneurship (mentorship, funding, and competitions) give Orderly real infrastructure to grow inside. A Drexel Sales Club is also listed on LeBow's own site, though worth confirming its current activity level directly since public detail beyond the page itself was limited — a reasonable thing to ask about on a campus visit given how directly it would connect to the Founders' Pool internship.",
    programs: [
      { name: "LeBow College of Business — BSBA (with mandatory co-op)", url: "https://www.lebow.drexel.edu/academics/undergraduate/degrees-programs/business-administration" },
      { name: "LeBow Business & Engineering dual-degree option (with co-op)", url: "https://www.lebow.drexel.edu/academics/undergraduate/degrees-programs/business-administration" }
    ]
  },
  {
    school: "Northeastern University",
    knownFor: "Nationally renowned 6-month paid co-op program (95%+ of students complete at least one)",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Reach",
    sat: "1450–1520",
    gpa: "~3.9+ UW",
    fit: "D'Amore-McKim's co-op model would turn the internship experience already gained at The Founders' Pool into a structured, paid, resume-building placement, and its Entrepreneurship/Technology concentrations fit well — but Northeastern's admit rate has fallen below 7%, putting this firmly in reach territory at current stats.",
    sat1450Effect: "1450 sits right at D'Amore-McKim's 25th percentile — a meaningful improvement that moves this from a hard Reach to a borderline Reach/Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "D'Amore-McKim School of Business — Business Administration (BSBA, with mandatory co-op)", url: "https://damore-mckim.northeastern.edu/undergraduate-programs/" }
    ]
  },
  {
    school: "Villanova University",
    knownFor: "New Analytics & AI co-major plus Entrepreneurial Leadership & Innovation minor",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Reach",
    sat: "1440–1520",
    gpa: "~3.8+ UW",
    fit: "The new AI/Machine Learning minor pairs directly with the coding/AI certification background, and the Entrepreneurial Leadership & Innovation minor fits the founder story — but Villanova's rising selectivity (test-optional pool skews stats higher) makes this a reach at current numbers.",
    sat1450Effect: "1450 sits right at Villanova's 25th percentile — a meaningful improvement that would shift this from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Villanova School of Business — BS (per major, e.g. BS in Finance)", url: "https://www.villanova.edu/university/business/academics/undergraduate-programs.html" }
    ]
  },
  {
    school: "Elon University",
    highlightColor: "pink",
    knownFor: "Dedicated Entrepreneurship & Innovation major; ~100% internship completion rate",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Target / Likely",
    sat: "avg ~1244 (test-optional)",
    gpa: "3.4–3.7",
    fit: "Elon's dedicated Entrepreneurship & Innovation major and near-universal internship placement are a strong founder-story fit at an accessible admit bar.",
    clubsDeepDive: "Elon's Chandler Family Professional Sales Center is a dedicated hub for sales competitions and training, a near-exact match to the active Founders' Pool sales internship, with Pi Sigma Epsilon (the co-ed sales/marketing fraternity) as a social extension of the same skill set. The Center for Organizational Analytics runs real-company data projects and case competitions that connect well to the AI/ML background, and the Doherty Center for Creativity, Innovation and Entrepreneurship's pop-up shops and micro-business support give Orderly a genuine low-stakes place to keep growing.",
    sat1450Effect: "1450 sits well above Elon's typical admitted average — this would flip the profile solidly to Likely.",
    programs: [
      { name: "Martha and Spencer Love School of Business — BSBA", url: "https://www.elon.edu/u/academics/business/programs/" }
    ]
  },
  {
    school: "Champlain College",
    knownFor: "Tech-forward business curriculum (Cybersecurity, Information Systems & Technology)",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Likely / Safety",
    sat: "1170–1370 (test-optional)",
    gpa: "3.0–3.5",
    fit: "Champlain's tech-forward business curriculum and hands-on work with real Vermont companies starting freshman year pair well with the AI/ML coding background at a very accessible admit bar.",
    programs: [
      { name: "Business Administration — BSBA", url: "https://www.champlain.edu/academics/undergraduate-academics/degrees-programs/business-administration/" }
    ]
  },
{
    school: "Pennsylvania State University",
    highlightColor: "green",
    knownFor: "Nationally top-ranked Supply Chain & Risk Management/Insurance programs; huge corporate recruiting pipeline",
    mbaRank: "Penn State has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Test-optional; submitters run ~1360–1470",
    gpa: "~3.8+ UW recommended; Smeal direct-admit runs ~18%",
    fit: "Smeal's recruiting pipeline is enormous, but the recommended GPA/SAT band for direct admission sits above current stats — a real reach despite Penn State's large overall class size.",
    clubsDeepDive: "The Nittany AI Student Society and the associated Nittany AI Challenge — a $30,000-prize-pool competition spanning agriculture, health, and education applications — are a direct, well-funded home for the AI/ML coding background. The Farrell Center's Propel Business program is a venture-creation hub for turning an idea like Orderly into something formally built out with mentorship, and the Happy Valley Pitch Competition adds another live pitching venue.",
    sat1450Effect: "1450 falls within Smeal's typical submitter range — this would meaningfully improve the odds and shift the assessment toward Target.",
    programs: [
      { name: "Smeal College of Business — BS", url: "https://undergrad.smeal.psu.edu/apply" }
    ]
  },
  {
    school: "Virginia Tech",
    highlightColor: "green",
    knownFor: "Business Information Technology major; strong consulting/tech recruiting",
    mbaRank: "Virginia Tech has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "University middle 50% ~1250–1420 (SAT reinstated as a requirement for the 2025–26 cycle)",
    gpa: "3.5–3.8",
    fit: "Pamplin's Business Information Technology major pairs business with real tech coursework — a good match for the AI/ML background. 1360 sits within the university's typical range, closer to the middle than before.",
    clubsDeepDive: "The Virginia Tech Entrepreneur Challenge, run through the Apex Center, offers $60,000 in total prizes including a $25,000 grand prize — a serious step up from Blue Ocean or BIZWORLD for Orderly. AMA@VT is a standout: a real, student-run full-service marketing agency (not just a discussion club) operating since 2015, a near-exact structural match to the marketing/ops work already done for Bldg18 Comedy Club. Add Pi Sigma Epsilon, the sales/marketing professional fraternity, and the general E-Club, and Pamplin covers entrepreneurship, sales, and applied marketing as real, active organizations.",
    sat1450Effect: "1450 sits in the upper half of Virginia Tech's range — this would strengthen the assessment toward Likely.",
    programs: [
      { name: "Pamplin College of Business — BS / BSBUS", url: "https://pamplin.vt.edu/ug/admissions.html" }
    ]
  },
  {
    school: "Rutgers University–New Brunswick",
    knownFor: "Financial Data Analytics & FinTech concentration; NYC/Wall Street proximity",
    mbaRank: "Rutgers has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "Optional but recommended; submitters average ~1416",
    gpa: "3.5–3.8",
    fit: "The Financial Data Analytics & FinTech concentration is one of the most direct academic matches on this entire list to the active Founders' Pool fintech-sales internship, and NYC proximity means dense internship access — but the submitter average sits above current stats.",
    sat1450Effect: "1450 sits right at Rutgers' submitter average — this would shift the assessment solidly into Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Rutgers Business School — BS, Financial Data Analytics & FinTech concentration", url: "https://www.business.rutgers.edu/" }
    ]
  },
  {
    school: "University of Massachusetts Amherst",
    highlightColor: "green",
    knownFor: "#1-ranked Sport Management program; strong retailing track",
    mbaRank: "UMass Amherst has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "University 1290–1450; Isenberg-specific average ~1375",
    gpa: "3.6–3.9",
    fit: "Isenberg admits more selectively (~37%) than the university overall (~64%), but 1360 now sits nearly at its internal average (~1375) — a real, comfortably-positioned target rather than a stretch.",
    clubsDeepDive: "Isenberg's Entrepreneurship Club has real momentum (it won the 2024 and 2025 Sammy Awards for campus impact), and the Berthiaume Center's Minute Pitch Competition — a 60-second, no-slides format — rewards the same tight, high-pressure delivery skill built through stand-up comedy and competitive pitching alike. The Isenberg Stock Pitch Competition, tied to the student-managed Minutemen Equity Fund, adds a genuinely quantitative credential that pairs well with the AI/ML background.",
    sat1450Effect: "1450 would sit right at Isenberg's average — a further, though now marginal, improvement over the already-close 1360.",
    programs: [
      { name: "Isenberg School of Management — BBA", url: "https://www.isenberg.umass.edu/admissions" }
    ]
  },
  {
    school: "University of South Carolina",
    knownFor: "Perennial #1-ranked undergraduate International Business program (US News)",
    mbaRank: "South Carolina has no MBA program in the US News full-time top 48",
    category: "Target / Likely",
    sat: "Moore School average SAT ~1294 — now meaningfully above current stats",
    gpa: "3.5–3.8",
    fit: "1360 sits comfortably above Moore's average admitted SAT (~1294) — one of the more favorable stats comparisons on the entire list — and the #1-ranked International Business program (with heavy study-abroad integration) is a genuine standout credential.",
    sat1450Effect: "1450 would sit meaningfully above Moore's average — this would strengthen the assessment to a comfortable Likely.",
    programs: [
      { name: "Darla Moore School of Business — BS", url: "https://sc.edu/study/colleges_schools/moore/" }
    ]
  },
  {
    school: "University of Iowa",
    knownFor: "Guaranteed freshman direct-admit business program; Actuarial Science/Enterprise Leadership tracks",
    mbaRank: "Iowa has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "Direct-admit threshold: SAT 1230+ / ACT 26+",
    gpa: "Iowa's stated direct-admit GPA threshold is 3.6+ unweighted — worth flagging directly, since current unweighted GPA is 3.4, meaning the guaranteed direct-admit path may not apply even though the SAT (1360) clears the floor; this would need verifying directly with Tippie admissions rather than assumed.",
    fit: "Tippie's guaranteed direct-admit business program is attractive on paper, and 1360 clears the stated SAT floor with more room to spare — but the stated 3.6 unweighted GPA threshold is above the current 3.4 unweighted, which is the real risk factor here, not the test score.",
    sat1450Effect: "The SAT isn't the limiting factor for Tippie's direct-admit threshold — the stated 3.6 unweighted GPA bar matters more here, and a higher SAT wouldn't offset a GPA below that threshold.",
    programs: [
      { name: "Tippie College of Business — BBA", url: "https://tippie.uiowa.edu/undergraduate/admissions" }
    ]
  },
  {
    school: "Auburn University",
    knownFor: "Top-ranked Supply Chain Management program; family-business/entrepreneurship ties",
    mbaRank: "Auburn has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "University middle 50% ~1240–1390",
    gpa: "3.4–3.7",
    fit: "1360 sits within Auburn's typical range, now in its upper half, and the Harbert supply-chain program is nationally strong — a solid target with a manageable pre-business-then-declare structure.",
    sat1450Effect: "1450 sits in the upper half of Auburn's range — this would strengthen the assessment toward Likely.",
    programs: [
      { name: "Harbert College of Business — BSBA", url: "https://harbert.auburn.edu/" }
    ]
  },
  {
    school: "Clemson University",
    knownFor: "Unique Graphic Communications major; family-business/entrepreneurship ties",
    mbaRank: "Clemson has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "University middle 50% 1240–1400 (business is among Clemson's more competitive intended majors)",
    gpa: "3.5–3.8",
    fit: "1360 sits within Clemson's overall range, now closer to its upper end, but business is one of the university's more competitive intended majors internally — worth treating as a slight stretch relative to the university-wide numbers.",
    sat1450Effect: "1450 sits in the upper half of Clemson's range — this would meaningfully improve odds for the more competitive business major specifically.",
    programs: [
      { name: "Wilbur O. and Ann Powers College of Business — BS", url: "https://www.clemson.edu/business/" }
    ]
  },
  {
    school: "University of Oregon",
    highlightColor: "blue",
    knownFor: "Sports Product Management major (Nike/Knight legacy) — a strong entrepreneurship angle",
    mbaRank: "Oregon has no MBA program in the US News full-time top 48",
    category: "Likely",
    sat: "Test-optional; university range ~1130–1360",
    gpa: "3.0+ UW guarantees major admission — comfortably cleared by current stats",
    fit: "A 3.0 GPA guarantees admission to the business major outright, which the current 3.4 UW clears comfortably. The Sports Product Management major (tied to Nike's Oregon roots) is a distinctive entrepreneurship-adjacent option.",
    clubsDeepDive: "The Oregon Founders Club gives early access to entrepreneurship workshops and founder speakers, while the Operations and Business Analytics Club is a natural fit for the AI/ML coding background applied to real business data. The standout is the Oregon Innovation Challenge — a pitch/venture competition that has supported over 750 student startups through the Lundquist Center for Entrepreneurship, the kind of track record Orderly could plug into directly alongside the founder experience already built through Blue Ocean, BIZWORLD, and the Conrad Challenge.",
    programs: [
      { name: "Lundquist College of Business — BS", url: "https://business.uoregon.edu/" }
    ]
  },
  {
    school: "University of Colorado Boulder",
    highlightColor: "pink",
    knownFor: "Deming Center for Entrepreneurship — #1 GCEC award for entrepreneurship education, active student venture fund",
    mbaRank: "CU Boulder has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "University ~1180–1390 (a separate Business Honors track exists at 1450+/3.9 GPA, not relevant at current stats)",
    gpa: "3.4–3.7",
    fit: "The Deming Center is genuinely one of the strongest entrepreneurship programs on this whole list, complete with a student-run venture fund — an excellent founder-story fit at 1360, which sits comfortably within the upper half of Leeds' typical range.",
    clubsDeepDive: "The Deming Center's Spark CU program runs Spark FOUNDERS, a student-run incubator cohort of just 5-6 ventures a year — genuinely selective, hands-on infrastructure for Orderly. The New Venture Challenge funds winning teams up to $100,000, a serious step beyond Blue Ocean or BIZWORLD, and the student-managed Deming Center Venture Fund gives real investment-decision experience most undergrads never get. Leeds was also named the #1 program nationally for entrepreneurship education by the GCEC, so this club ecosystem is the school's core identity, not a side feature.",
    sat1450Effect: "1450 would open the door to CU Boulder's separate Business Honors track (1450+/3.9 GPA, not otherwise relevant at current stats) in addition to strengthening the standard Leeds admission.",
    programs: [
      { name: "Leeds School of Business — BSBA", url: "https://www.colorado.edu/business/" }
    ]
  },
  {
    school: "Syracuse University",
    highlightColor: "green",
    knownFor: "#21 US News undergraduate Entrepreneurship ranking; Blackstone LaunchPad + Couri Hatchery incubator",
    mbaRank: "Syracuse has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "Average ~1349",
    gpa: "3.5–3.8",
    fit: "Whitman's Blackstone LaunchPad and Couri Hatchery incubator are real, active startup resources — a strong founder-story fit, and 1360 now sits slightly above Whitman's average SAT, though the ~37% business-school acceptance rate keeps this a genuine (not guaranteed) target.",
    clubsDeepDive: "Blackstone LaunchPad has a genuine decade-long track record (6,000+ students engaged) and runs the annual Ideas Fest pitch competition, a strong venue for Orderly. The Couri Hatchery Student Business Incubator goes further, offering mentorship, workspace, and funding that feed directly into the Orange Tank Pitch Competition and the Panasci Business Plan Competition — meaning there isn't just one pitch opportunity here but a full pipeline from incubation to competition, a meaningfully deeper level of startup infrastructure than most schools on this list offer.",
    sat1450Effect: "1450 would extend the lead over Whitman's average further, though the ~37% internal acceptance rate remains the bigger factor regardless of score.",
    whyEssayUrl: "syracuse-why.html",
    programs: [
      { name: "Whitman School of Management — BS", url: "https://whitman.syracuse.edu/" }
    ]
  },
  {
    school: "University of Connecticut",
    knownFor: "Actuarial science/insurance (Hartford, the insurance capital); new STEM-designated FinTech program",
    mbaRank: "UConn has no MBA program in the US News full-time top 48",
    category: "Likely / Target",
    sat: "Average ~1264; university range 1210–1440",
    gpa: "3.3+ plus a required accounting-course gate",
    fit: "The new STEM-designated FinTech program is a strong direct match to the active Founders' Pool internship, and Hartford's insurance-industry density adds real actuarial/finance career access — all at an accessible admit bar given 1360 sits further above UConn's average.",
    programs: [
      { name: "School of Business — BS, FinTech program available", url: "https://www.business.uconn.edu/" }
    ]
  },
  {
    school: "University of Richmond",
    knownFor: "Dedicated Entrepreneurship & Management Consulting concentrations; ~20-student average class size",
    mbaRank: "Richmond has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Robins average ~1440; university range 1350–1490",
    gpa: "3.5+ preferred",
    fit: "Robins' small classes and dedicated entrepreneurship concentration are a strong thematic fit, but the ~22% business-school acceptance rate and high average SAT put current stats well below the typical admit — a clear reach.",
    sat1450Effect: "1450 sits right at Robins' average — this would meaningfully close the gap and shift the assessment toward Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Robins School of Business — BSBA", url: "https://robins.richmond.edu/" }
    ]
  },
  {
    school: "Loyola University Chicago",
    highlightColor: "pink",
    knownFor: "Chicago finance/consulting proximity; Baumhart Center for Social Enterprise",
    mbaRank: "Loyola Chicago has no MBA program in the US News full-time top 48",
    category: "Target / Likely",
    sat: "Test-optional; university range 1180–1370",
    gpa: "3.4–3.7",
    fit: "1360 sits within Loyola's typical range, now near its upper end, and Chicago placement adds real finance/consulting internship density at a comfortable (~68%) overall admit rate.",
    clubsDeepDive: "Loyola Future Founders gives a straightforward entrepreneurship home for Orderly, while the Loyola AI Society is a direct, named landing spot for the AI/ML coding background inside the business school. The Rambler Investment Fund — a real, roughly $1.6 million student-managed endowment — and the Rambler Consulting Group offer serious quantitative/analytical credibility beyond pitch competitions alone, and the Quinlan AMA chapter is a natural fit for the marketing experience already built through Bldg18 Comedy Club's promotion work.",
    programs: [
      { name: "Quinlan School of Business — BBA", url: "https://www.luc.edu/quinlan/" }
    ]
  },
  {
    school: "Texas Christian University",
    highlightColor: "pink",
    knownFor: "Strong national Entrepreneurship ranking; Values-Based Leadership emphasis",
    mbaRank: "TCU has no MBA program in the US News full-time top 48",
    category: "Target / Likely",
    sat: "University range ~1240–1340 (per TCU's own Fall 2025 figures)",
    gpa: "3.5–3.8",
    clubsDeepDive: "TCU's E-ship Club runs FrogShop, an actual pop-up retail experience for students to practice running a business, and the Richards Barrentine Values and Ventures Competition is an international pitch competition for 'conscious capitalism' ventures with $5,000+ in prizes — a strong stage for Orderly. The CREATE Program goes further, running fall workshops into a spring pitch competition for up to $50,000 in funding, a genuinely substantial step up from Blue Ocean and BIZWORLD. The CEO and AMA chapters round out a surprisingly deep club bench for a mid-sized program.",
    fit: "1360 now sits above TCU's typical range, and Neeley's national entrepreneurship ranking plus its Values-Based Leadership emphasis are a reasonable fit for the founder story, though direct-admit is highly competitive within TCU overall regardless of the university-wide range.",
    sat1450Effect: "Already above TCU's typical range at 1360 — 1450 would extend that further, solidifying this as a comfortable Likely.",
    programs: [
      { name: "Neeley School of Business — BBA", url: "https://www.neeley.tcu.edu/" }
    ]
  },
  {
    school: "Oregon State University",
    highlightColor: "blue",
    knownFor: "Very accessible admit bar with a large, broad club ecosystem (20+ student orgs)",
    mbaRank: "Oregon State has no MBA program in the US News full-time top 48",
    category: "Likely / Safety",
    sat: "University-wide test-optional; middle 50% ~1080–1290 (avg ~1250)",
    gpa: "~3.15+ recommended for admission to the business major; university average ~3.6",
    fit: "1360 sits comfortably above OSU's typical range, and the College of Business recommends only a 3.15 GPA for major admission — a genuinely accessible safety with real room to lead rather than just join campus organizations. Note the degree is titled Business Administration (BA/BS), with Honors BA/BS options — worth confirming the specific concentration's exact degree letter before applying.",
    clubsDeepDive: "Oregon State's College of Business runs over 20 student clubs, though the school doesn't publish a full public roster — worth checking OSU's current club portal directly rather than assuming a specific one exists. What's verifiable is the admit bar: 1360 clears the university's typical range comfortably, and the business major only requires a 3.15 GPA to declare, meaning there's real room to build a leadership track record from freshman year instead of competing just to get in the door. Given the Orderly founder story and the Founders' Pool sales internship, the practical move here is arriving with intent to found or lead a sales, analytics, or entrepreneurship club rather than assuming the right one is already waiting.",
    programs: [
      { name: "College of Business — Business Administration (BA/BS; Honors BA/BS also available)", url: "https://business.oregonstate.edu/programs/undergraduate" }
    ]
  },
  {
    school: "University of Cincinnati",
    highlightColor: "blue",
    knownFor: "Birthplace of the cooperative education (co-op) model — multiple paid, full-time work rotations built into the degree",
    mbaRank: "Cincinnati has no MBA program in the US News full-time top 48",
    category: "Target / Likely",
    sat: "University-wide middle 50% ~1150–1360 (avg ~1250); Lindner uses holistic review, no separate published cutoff",
    gpa: "3.3–3.7",
    fit: "1360 sits right at the top of Cincinnati's typical range, and Lindner's direct-admit process is holistic rather than cutoff-driven. UC essentially invented the co-op model, meaning the degree itself builds in multiple paid, full-time work rotations — a structural advantage that converts the internship-seeking pattern already shown at The Founders' Pool into a formal part of the curriculum rather than something squeezed in around classes.",
    clubsDeepDive: "Cincinnati literally invented the cooperative education model, and Lindner's co-op program would turn the internship-seeking pattern already shown at The Founders' Pool into multiple full-time, paid, resume-building rotations before graduation — a structural advantage few other schools on this list can match. On the club side, the Sales Leadership Club is a direct extension of the active sales internship, the Cryptocurrency Club and Business Analytics Club connect to the AI-fintech angle, the American Marketing Association chapter runs an in-house agency and case competitions, and UC Startup Weekend offers a 3-day format to prototype and pitch a new venture, similar in spirit to the Orderly build-and-pitch cycle.",
    programs: [
      { name: "Carl H. Lindner College of Business — Business Administration, BBA", url: "https://www.business.uc.edu/future-students/admissions-requirements.html" }
    ]
  },
  {
    school: "Purdue University",
    highlightColor: "pink",
    knownFor: "Boiler Blockchain and the Purdue Fintech Center — a genuine AI-fintech club ecosystem, though selectivity has risen sharply",
    mbaRank: "Purdue has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Fall 2025 incoming class average ~1397; acceptance rate has fallen to roughly 23%",
    gpa: "3.6–3.9",
    fit: "Purdue's Mitchell E. Daniels School of Business has become notably more selective in the last few admissions cycles — the average admitted SAT (~1397) now sits meaningfully above 1360, and the acceptance rate has dropped to roughly 23%. This is a real reach today in a way it may not have been a few years ago, so it's worth treating as a genuine stretch rather than a safe state-school pick.",
    sat1450Effect: "1450 would sit above Purdue Daniels' recent average admitted SAT (~1397) — this would meaningfully improve the odds and shift the assessment toward Target.",
    becomesTargetAt1450: true,
    clubsDeepDive: "Boiler Blockchain, a 100+ member student-run fintech/blockchain organization, and the Purdue Fintech Center's AI/fintech conference programming are close matches to the Founders' Pool AI-fintech internship, while the university-wide Purdue Center for Professional Selling (technically housed in a different college but open to Daniels students) runs a full sales-competition circuit. The Entrepreneurship and Innovations Club rounds out a home for Orderly. The bigger story, though, is Daniels' rapid rise in selectivity — average admitted SAT has jumped to roughly 1397 in the most recent cycle, so this now reads as a genuine reach rather than the more accessible state-school option it might have been a few years ago.",
    whyEssayUrl: "purdue-why.html",
    communityEssayUrl: "purdue-community-essay.html",
    programs: [
      { name: "Mitchell E. Daniels, Jr. School of Business — BS", url: "https://business.purdue.edu/undergraduate/" }
    ]
  },
  {
    school: "William & Mary",
    knownFor: "Alan B. Miller Entrepreneurship Center — Tribe Ventures startup launch program",
    mbaRank: "William & Mary has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Mason BBA-specific average ~1412; internal acceptance rate ~24.9%",
    gpa: "3.6–3.9",
    fit: "Mason is the only selective undergraduate major at William & Mary, with a holistic secondary-application process (leadership, communication, resilience, collaborative potential) layered on top of an already-selective university. The internal average admitted SAT (~1412) sits above 1360, and a ~25% internal acceptance rate makes this a genuine reach even for students who clear William & Mary's general admission bar. Starting Fall 2026, students can apply to Mason after 39 credit hours (often by the end of freshman year), which is worth knowing as a planning detail regardless of the reach classification.",
    sat1450Effect: "1450 would sit right around Mason's internal average SAT — this would meaningfully improve the odds and shift the assessment toward Target, though the ~25% internal acceptance rate keeps this competitive regardless of score.",
    becomesTargetAt1450: true,
    clubsDeepDive: "The Alan B. Miller Entrepreneurship Center — a dedicated co-working space with 50+ students, coaches, and faculty — runs Tribe Ventures, a program that pairs current students with expert guidance and coaching to actually launch a company, plus the Launchpad Incubator and the StartupTree platform for connecting with other student entrepreneurs. This is a close match to the Orderly/CheqIn founder story, with real staff support rather than just a club meeting space.",
    programs: [
      { name: "Raymond A. Mason School of Business — BBA", url: "https://mason.wm.edu/undergraduate/admissions/" }
    ]
  }
];
