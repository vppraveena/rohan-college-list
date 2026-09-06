// College list data for Rohan
// Profile: Moreau Catholic HS, Class of 2027 | SAT 1360 | GPA 3.4 UW / 3.6 W
// Spike: founder/entrepreneurship, AI/ML, active fintech sales internship (The Founders' Pool), performing arts/comedy, marketing & web dev
//
// Ranking basis: schools are drawn from the full US News Best Business Schools (MBA) ranking
// (https://www.usnews.com/best-graduate-schools/top-business-schools/mba-rankings), worked through
// to rank #48, then checked for whether the same university actually offers an undergraduate BS,
// BSBA, or BBA degree. Schools without one are listed in EXCLUDED_SCHOOLS, with the closest real
// BA-level/business-adjacent option covered in BA_PROGRAMS. A handful of strong-fit schools outside
// the MBA top 48 (Babson, Bentley, Chapman, LMU, Santa Clara, Denver, Arizona, Drexel, Alabama, Menlo,
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
    school: "University of Pennsylvania",
    knownFor: "Deepest student entrepreneurship ecosystem in the country (Venture Lab)",
    mbaRank: "#2",
    category: "Reach",
    sat: "1500–1560",
    gpa: "~3.9+ UW (most admits near 4.0)",
    fit: "Wharton lines up with the Orderly/CheqIn founder story and the active Founders' Pool sales internship, but sub-6% admit rates and a near-4.0 UW GPA norm put current stats well outside the middle 50% — a lottery-ticket reach. Note: a B in AP Microeconomics is a modest data point for a school whose degree is literally a BS in Economics; AP Statistics' 4.0 helps offset this on the quantitative side.",
    sat1450Effect: "Still below Wharton's 25th percentile (1500) — a 1450 doesn't change the assessment; still a lottery-ticket reach given sub-6% admit rates.",
    programs: [
      { name: "Wharton School — BS in Economics", url: "https://undergrad.wharton.upenn.edu/academics/" }
    ]
  },
  {
    school: "Massachusetts Institute of Technology",
    knownFor: "Extreme quantitative rigor",
    mbaRank: "#6",
    category: "Reach",
    sat: "1520–1570",
    gpa: "Extreme rigor; nearly all admits 4.0 UW",
    fit: "Strong thematic overlap with the AI/ML capstone and the Blue Stamp AI weather-station project, but MIT's quantitative admissions bar sits far above current GPA/SAT — reach in the truest sense.",
    sat1450Effect: "Still below MIT's range (1520+) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "MIT Sloan — Course 15-2, BS in Business Analytics", url: "https://mitsloan.mit.edu/programs/undergraduate/15-2-business-analytics" }
    ]
  },
  {
    school: "New York University",
    knownFor: "NYC fintech/finance pipeline",
    mbaRank: "#7 (tie)",
    category: "Reach",
    sat: "1470–1540",
    gpa: "~3.8+ UW",
    fit: "NYC's fintech/finance pipeline is a natural extension of the active Founders' Pool sales internship, but Stern's admitted middle 50% sits comfortably above current stats.",
    sat1450Effect: "1450 sits just below Stern's 25th percentile (1470) — a meaningful improvement that narrows the reach considerably, though it's still technically below the middle 50%.",
    programs: [
      { name: "Stern School of Business — BS", url: "https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business" }
    ]
  },
  {
    school: "UC Berkeley",
    knownFor: "Entrepreneurship & tech (joint M.E.T. program with Engineering)",
    mbaRank: "#10",
    category: "Reach (extreme)",
    sat: "Test-blind — the entire UC system does not consider SAT/ACT scores under current policy (in effect through at least this application cycle; under active faculty review, with a decision on possibly reinstating testing expected by June 2027)",
    gpa: "~3.9+ UC-recalculated weighted GPA (UC's own GPA formula counts only 10th–11th grade grades plus capped honors/AP bonus points — this differs from the standard weighted GPA and should be checked separately)",
    fit: "Haas is a straight-line Bay Area upgrade from Santa Clara/Menlo with the same startup ecosystem access — but Haas undergrad admits internally at roughly 3%, making it the single hardest business admit in the state regardless of testing policy.",
    sat1450Effect: "Not applicable — UC is currently test-blind, so no SAT score changes this assessment either way. Haas's ~3% internal admit rate (driven by GPA, coursework rigor, and the Personal Insight Questions) is the real bottleneck.",
    programs: [
      { name: "Haas School of Business — BS in Business Administration", url: "https://haas.berkeley.edu/undergrad/academics/curriculum/degree-requirements/" }
    ]
  },
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
    school: "Cornell University",
    knownFor: "Quant finance/analytics core",
    mbaRank: "#15",
    category: "Reach",
    sat: "1470–1550",
    gpa: "~3.85+ UW",
    fit: "Dyson's quant finance/analytics core pairs well with the AI/ML background, but Dyson admits around 7-9% within an already-selective Cornell — a clear reach.",
    sat1450Effect: "1450 is still just below Dyson's 25th percentile (1470) — a meaningful improvement, but this stays a reach given Cornell's overall selectivity.",
    programs: [
      { name: "Dyson School of Applied Economics and Management — BS", url: "https://business.cornell.edu/programs/bs-aem/" }
    ]
  },
  {
    school: "Carnegie Mellon University",
    knownFor: "Unusually quantitative, management-science-heavy business degree",
    mbaRank: "#16 (tie)",
    category: "Reach",
    sat: "1500–1560",
    gpa: "~3.9+ UW",
    fit: "Tepper's business degree is unusually quantitative, a strong thematic match for the AI/ML certification, and the 4.0 in AP Statistics is a genuinely useful data point here — but CMU's admissions bar overall makes this a clear reach.",
    sat1450Effect: "Still below Tepper's range (1500+) — 1450 doesn't meaningfully change this; still a reach.",
    programs: [
      { name: "Tepper School of Business — BS in Business Administration", url: "https://www.cmu.edu/tepper/programs/undergraduate-business/curriculum/majors-and-minors.html" }
    ]
  },
  {
    school: "University of Texas at Austin",
    knownFor: "Canfield Business Honors Program; Austin's fintech/startup scene",
    mbaRank: "#18 (tie)",
    category: "Reach",
    sat: "1400–1520",
    gpa: "~3.8+ UW",
    fit: "McCombs' Canfield Business Honors Program and Austin's booming fintech/startup scene are a good fit, but the direct-admit BBA (Texas top-6% auto-admit applies only to Texas residents; out-of-state review is fully holistic and highly selective) sits above current stats.",
    sat1450Effect: "1450 falls within McCombs' middle 50% (1400–1520) — this would shift the assessment from Reach to Target, though out-of-state review remains holistic regardless of score.",
    becomesTargetAt1450: true,
    programs: [
      { name: "McCombs School of Business — BBA", url: "https://catalog.utexas.edu/undergraduate/business/general-information/" }
    ]
  },
  {
    school: "Indiana University Bloomington",
    knownFor: "One of the only dedicated undergraduate Professional Sales programs in the country",
    mbaRank: "#21 (tie)",
    category: "Target / Reach",
    sat: "1220–1420 (IU overall; Kelley direct-admit skews higher)",
    gpa: "~3.6–3.9 (IU overall admits ~80%; Kelley direct-admit is the harder bar)",
    fit: "Kelley runs one of the only dedicated undergraduate Professional Sales programs in the country — a direct match to the now-active Founders' Pool AI-finance sales internship. IU's overall accessibility plus a competitive-but-reachable Kelley direct-admit bar make this the strongest reach-with-real-upside on the list.",
    clubsDeepDive: "Kelley's Sales Club, run through the Center for Global Sales Leadership, is as close to a formal extension of the Founders' Pool internship as any club on this list, and the selective 60-student Global Sales Workshop cohort (weekly meetings, competitions, corporate site visits) turns that experience into structured, repeatable skill-building. Kelley also hosts the National Team Selling Competition itself — 24 teams, a $6,000 prize pool — tied directly to its Professional Sales major, making this less a club to join and more a discipline to formally study.",
    sat1450Effect: "1450 sits well above Kelley's typical direct-admit range — this would solidify the assessment as a clear Target rather than Target/Reach.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Kelley School of Business — BS", url: "https://kelley.iu.edu/undergraduate/" }
    ]
  },
  {
    school: "University of North Carolina at Chapel Hill",
    knownFor: "High double-major rate; consulting/finance/entrepreneurship tracks",
    mbaRank: "#21 (tie)",
    category: "Reach",
    sat: "1400–1500",
    gpa: "~3.85+ UW",
    fit: "Kenan-Flagler's high double-major rate suits a student who already pairs business with AI/ML coursework, but its secondary-application admit process is highly competitive relative to current stats — a reach, more so for out-of-state applicants.",
    sat1450Effect: "1450 falls within Kenan-Flagler's middle 50% (1400–1500) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Kenan-Flagler Business School — BSBA", url: "https://catalog.unc.edu/undergraduate/programs-study/business-administration-major-bsba/" }
    ]
  },
  {
    school: "Emory University",
    knownFor: "Experiential consulting (IMPACT program)",
    mbaRank: "#23 (tie)",
    category: "Reach",
    sat: "1420–1540",
    gpa: "~3.85+ UW",
    fit: "Goizueta's IMPACT experiential consulting projects reward the kind of real-world building already shown with Orderly/CheqIn, but Emory's overall selectivity sits above current stats.",
    sat1450Effect: "1450 falls within Goizueta's middle 50% (1420–1540) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Goizueta Business School — BBA", url: "https://goizueta.emory.edu/undergraduate-business-degree" }
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
    knownFor: "Entrepreneurship (Lloyd Greif Center); LA entertainment-industry ties",
    mbaRank: "#25 (tie)",
    category: "Reach",
    sat: "1400–1530",
    gpa: "~3.85+ UW",
    fit: "USC's Lloyd Greif Center for Entrepreneurial Studies and LA's entertainment-industry adjacency match the comedy-club + startup dual track well, but overall selectivity is steep at current stats.",
    sat1450Effect: "1450 falls within Marshall's middle 50% (1400–1530) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Marshall School of Business — BS in Business Administration", url: "https://www.marshall.usc.edu/programs/undergraduate-programs/undergraduate-degrees/business-administration-program" }
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
    school: "Georgia Institute of Technology",
    knownFor: "\"Tech-savvy, business-smart\" — IT management, supply chain, analytics",
    mbaRank: "#27 (tie)",
    category: "Reach",
    sat: "1400–1540",
    gpa: "~3.85+ UW",
    fit: "Scheller markets itself as 'tech-savvy, business-smart,' with IT management and analytics certificates layered onto the BSBA — a strong pairing with the AI/ML background and the 4.0 in AP Statistics. Georgia Tech's overall admissions bar keeps this a reach.",
    sat1450Effect: "1450 falls within Scheller's middle 50% (1400–1540) — this would shift the assessment from Reach to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Scheller College of Business — BSBA", url: "https://www.scheller.gatech.edu/explore-programs/undergraduate/index.html" }
    ]
  },
  {
    school: "Washington University in St. Louis",
    knownFor: "Consulting (Taylor Community Consulting Program)",
    mbaRank: "#27 (tie)",
    category: "Reach",
    sat: "1500–1560",
    gpa: "~3.9+ UW",
    fit: "Olin's Taylor Community Consulting Program is a good experiential-learning match, but WashU is among the most selective schools on this list relative to current stats.",
    sat1450Effect: "Still below Olin's range (1500+) — 1450 doesn't meaningfully change this; still a reach.",
    programs: [
      { name: "Olin Business School — BSBA", url: "https://olin.washu.edu/programs/bs-business-administration/index.php" }
    ]
  },
  {
    school: "Arizona State University",
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
    school: "Georgetown University",
    knownFor: "#3 nationally in International Business",
    mbaRank: "#31",
    category: "Reach",
    sat: "1440–1540",
    gpa: "~3.9+ UW",
    fit: "McDonough is #3 nationally in International Business, and DC's policy/fintech overlap is a plausible fit for the finance-sales interest — but Georgetown's overall selectivity puts current stats well below the middle 50%.",
    sat1450Effect: "1450 sits right at McDonough's 25th percentile (1440) — a meaningful improvement that narrows the reach considerably, though Georgetown's overall selectivity keeps this competitive.",
    programs: [
      { name: "McDonough School of Business — BSBA", url: "https://msb.georgetown.edu/undergraduate/" }
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
    school: "University of Notre Dame",
    knownFor: "Accountancy (98% placement)",
    mbaRank: "#34 (tie)",
    category: "Reach",
    sat: "1450–1550",
    gpa: "~3.9+ UW",
    fit: "Mendoza's accountancy program (98% placement) is excellent, but Notre Dame's overall admissions bar is well above current stats — a clear reach.",
    sat1450Effect: "1450 sits right at Mendoza's 25th percentile (1450) — a meaningful improvement, though Notre Dame's overall selectivity keeps this a reach.",
    programs: [
      { name: "Mendoza College of Business — BBA", url: "https://mendoza.nd.edu/undergraduate/" }
    ]
  },
  {
    school: "Southern Methodist University",
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
    school: "Texas A&M University",
    knownFor: "Sales Leadership Institute / Professional Selling Initiative",
    mbaRank: "#36 (tie)",
    category: "Target",
    sat: "1180–1400 (Texas A&M overall; out-of-state applicants skew higher)",
    gpa: "3.5–3.8",
    fit: "Mays houses the Sales Leadership Institute and Professional Selling Initiative — one of the most direct matches on this list to the now-active Founders' Pool AI-finance sales internship. Admission to the BBA is a competitive internal 'gateway' process after prerequisite coursework, but overall stats put this in target range.",
    sat1450Effect: "1450 sits above Mays' typical range — this would move the assessment into Likely.",
    programs: [
      { name: "Mays Business School — BBA", url: "https://mays.tamu.edu/undergraduate/bba/" },
      { name: "Mays Business School — BBA, Marketing / Professional Selling & Sales Management track", url: "https://mays.tamu.edu/undergraduate/bba/marketing/" }
    ]
  },
  {
    school: "Iowa State University",
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
    school: "University of Florida",
    knownFor: "Finance/insurance track",
    mbaRank: "#39 (tie)",
    category: "Target / Reach",
    sat: "1350–1490",
    gpa: "3.7–3.95",
    fit: "Warrington's finance/insurance track is strong, but UF's admissions bar has risen sharply in recent cycles, putting this at the reach end of target.",
    sat1450Effect: "1450 sits within Warrington's upper range (1350–1490) — this would solidify the assessment as a comfortable Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Warrington College of Business — BSBA", url: "https://warrington.ufl.edu/undergraduate/" }
    ]
  },
  {
    school: "University of Miami",
    knownFor: "#1 entrepreneurship program in the South; real estate #11 nationally",
    mbaRank: "#39 (tie)",
    category: "Target",
    sat: "1340–1470",
    gpa: "3.6–3.9",
    fit: "Herbert is ranked #1 in the South for entrepreneurship — a direct match to the founder story — plus a strong real estate track; 1360 SAT sits at the lower end of the admitted range.",
    sat1450Effect: "1450 sits above Herbert's typical range (1340–1470) — this would strengthen the assessment toward Likely.",
    programs: [
      { name: "Herbert Business School — General Business (BBA; BSBA track available for more quantitative majors)", url: "https://www.herbert.miami.edu/undergraduate/degrees-majors-minors/bba-in-general-business.html" }
    ]
  },
  {
    school: "University of Utah",
    knownFor: "Goff Strategic Sales Program",
    mbaRank: "#39 (tie)",
    category: "Likely",
    sat: "1150–1350",
    gpa: "3.4–3.8",
    fit: "Eccles runs the Goff Strategic Sales Program, a dedicated undergraduate sales curriculum — a very direct match to the active Founders' Pool sales internship, at an accessible admit bar.",
    clubsDeepDive: "Eccles' Fintech Club is about as direct a match to the Founders' Pool AI-fintech internship as any club on this entire list, and the University Venture Fund lets students make real venture capital investment decisions alongside actual entrepreneurs and investors. The Lassonde Entrepreneur Institute is ranked top-10 nationally and supports 500+ startup teams a year — genuinely serious infrastructure for continuing to build Orderly — while the Crimson Quant Club and Student Investment Fund add further quantitative depth that pairs well with the AI/ML certification.",
    programs: [
      { name: "David Eccles School of Business — BS in Business Administration", url: "https://eccles.utah.edu/programs/undergraduate/business-administration/" }
    ]
  },
  {
    school: "University of Maryland, College Park",
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
    school: "University of Tennessee, Knoxville",
    knownFor: "Supply chain program (top-10 among publics)",
    mbaRank: "#43 (tie)",
    category: "Likely",
    sat: "1180–1380",
    gpa: "3.4–3.8",
    fit: "Haslam's supply chain program is top-10 among publics; overall admissions are accessible relative to current stats.",
    programs: [
      { name: "Haslam College of Business — BSBA", url: "https://haslam.utk.edu/undergraduate/" }
    ]
  },
  {
    school: "American University",
    knownFor: "DC placement for policy-adjacent fintech/consulting internships",
    mbaRank: "#46 (tie)",
    category: "Target / Likely",
    sat: "1220–1390",
    gpa: "3.5–3.8",
    fit: "DC placement gives access to policy-adjacent fintech and consulting internships; Kogod's business analytics track suits the AI/ML background at an accessible admit bar.",
    sat1450Effect: "1450 sits well above Kogod's typical range — this would strengthen the assessment to a comfortable Likely.",
    programs: [
      { name: "Kogod School of Business — BSBA", url: "https://kogod.american.edu/programs-admissions/undergraduate/business-administration" }
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
    school: "University of Arkansas",
    knownFor: "Retail/supply-chain proximity (Walmart, Tyson, J.B. Hunt)",
    mbaRank: "#48 (tie)",
    category: "Likely / Safety",
    sat: "1130–1330",
    gpa: "3.4–3.7",
    fit: "Walton's retail/supply-chain program benefits from direct Walmart/Tyson/J.B. Hunt proximity; a comfortable, generously-aided likely.",
    programs: [
      { name: "Sam M. Walton College of Business — BSBA", url: "https://walton.uark.edu/future-students/program-overview.php" }
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
    school: "University of Pennsylvania",
    knownFor: "The single best-branded business+tech dual degree in the country",
    category: "Reach (extreme, <5%)",
    sat: "1520+",
    gpa: "~3.95+ UW",
    fit: "A near-perfect thematic match to the founder/AI story on paper — but arguably the most competitive undergraduate admit in the US.",
    sat1450Effect: "Still below M&T's range (1520+) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "M&T — Management & Technology dual degree (Wharton BS-Econ + SEAS Engineering BSE)", url: "https://fisher.wharton.upenn.edu/learn/dual-degree/" }
    ]
  },
  {
    school: "UC Berkeley",
    knownFor: "M.E.T. — the most selective business+tech dual degree in the Bay Area",
    category: "Reach (extreme, <5%)",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~3.95+ UC-recalculated weighted GPA (see UC GPA-formula note on the Haas entry above)",
    fit: "A formal, single-admission dual-BS combining Haas business with an ABET-accredited engineering major — arguably the best-matched business+tech program to the founder/AI/ML profile anywhere on this list, but M.E.T. is one of the most selective undergraduate programs in the country regardless of testing policy.",
    sat1450Effect: "Not applicable — UC is currently test-blind. M.E.T.'s selective internal admit (GPA, rigor, essays) is the real bottleneck regardless of any SAT score.",
    programs: [
      { name: "Management, Entrepreneurship & Technology (M.E.T.) — joint Haas BS + College of Engineering BS, 4-year dual degree", url: "https://met.berkeley.edu/" }
    ]
  },
  {
    school: "Massachusetts Institute of Technology",
    knownFor: "Extreme quantitative rigor",
    category: "Reach (extreme)",
    sat: "1520–1570",
    gpa: "Extreme rigor",
    fit: "Cross-listed from the main Business section — a business degree that is inherently technical, matching the AI/ML capstone work directly.",
    sat1450Effect: "Still below MIT's range (1520–1570) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Sloan Course 15-2 — BS in Business Analytics", url: "https://mitsloan.mit.edu/programs/undergraduate/15-2-business-analytics" }
    ]
  },
  {
    school: "University of Southern California",
    knownFor: "Arts + Technology + Business hybrid, portfolio-based admission",
    category: "Reach",
    sat: "Holistic; test-optional common, portfolio + interview weighted heavily",
    gpa: "~3.7+ typical, but portfolio/interview carry major weight over test scores",
    fit: "Purpose-built for students who blend creative production, technology, and entrepreneurship — arguably the closest bespoke match to the creative portfolio and Orderly/CheqIn founder background of anything on this list. Admission is unusually holistic, but USC's overall ~10% admit rate still makes it a reach.",
    sat1450Effect: "USC Iovine and Young weighs portfolio and interview more heavily than test scores, so a 1450 helps marginally but wouldn't be the deciding factor — the creative portfolio and interview performance matter more here.",
    programs: [
      { name: "Iovine and Young Academy — BS in Arts, Technology and the Business of Innovation", url: "https://iovine-young.usc.edu/learn/undergraduate/bs-arts-technology-and-the-business-of-innovation" }
    ]
  },
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
  },
  {
    school: "Indiana University Bloomington",
    knownFor: "Newly launched combined Business Intelligence & Data Science BS (2025)",
    category: "Target / Reach (newly launched program, 2025)",
    sat: "1250–1430",
    gpa: "3.6–3.9",
    fit: "A purpose-built combined BS spanning Kelley's business strategy and Luddy's data science curriculum — fits the AI/ML certification and coding background directly, and the 4.0 in AP Statistics directly supports the data-science half of this degree.",
    sat1450Effect: "1450 sits above the typical range (1250–1430) — this would strengthen the assessment to a solid Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Kelley + Luddy Schools — BS in Business Intelligence & Data Science", url: "https://luddy.iu.edu/academics/undergraduate/bs-business-intelligence-data-science.html" }
    ]
  },
  {
    school: "Texas A&M University",
    knownFor: "Sales Leadership Institute's sales technology/CRM training",
    category: "Target",
    sat: "1180–1400 (Texas A&M overall; out-of-state applicants skew higher)",
    gpa: "3.5–3.8",
    fit: "The Sales Leadership Institute layers structured sales technology/CRM training onto the BBA — the most direct academic match on either list to an AI-finance sales internship track.",
    sat1450Effect: "1450 sits above Mays' typical range — this would move the assessment into Likely.",
    programs: [
      { name: "Mays Business School — BBA in Marketing, Professional Selling & Sales Management track", url: "https://mays.tamu.edu/undergraduate/bba/marketing/" }
    ]
  },
  {
    school: "University of Utah",
    knownFor: "Goff Strategic Sales Program's technology/CRM curriculum",
    category: "Likely",
    sat: "1150–1350",
    gpa: "3.4–3.8",
    fit: "A dedicated, technology-driven sales curriculum layered onto an accessible BS — directly matches the active fintech-sales internship at a comfortable admit bar.",
    programs: [
      { name: "David Eccles School of Business — BS + Goff Strategic Sales Program (sales technology/CRM curriculum)", url: "https://eccles.utah.edu/programs/undergraduate/business-administration/" }
    ]
  }
];

// Schools ranked in the US News MBA Top 48 that don't offer a qualifying BS/BSBA/BBA business degree.
// The closest real business-related option at each is covered in BA_PROGRAMS below.
const EXCLUDED_SCHOOLS = [
  { school: "Stanford University (GSB) — MBA #1", reason: "No undergraduate business major of any kind. Undergrads pursue Economics or Management Science & Engineering instead." },
  { school: "University of Chicago (Booth) — MBA #3", reason: "No standalone undergraduate business degree. Economics majors can add a 'Business Economics' specialization using some Booth courses, but it's a track within Economics, not a business degree." },
  { school: "Northwestern University (Kellogg) — MBA #4 (tie)", reason: "No undergraduate business major. Kellogg offers a 4-course non-degree Certificate Program for Undergraduates (Financial Economics or Managerial Analytics) only." },
  { school: "Harvard University (HBS) — MBA #4 (tie)", reason: "No undergraduate business major. Harvard College undergrads pursue Economics instead." },
  { school: "Columbia University (CBS) — MBA #7 (tie)", reason: "No undergraduate business degree. The 'Special Program in Business' is an add-on that requires a separate primary major, not a business degree itself." },
  { school: "Dartmouth College (Tuck) — MBA #9", reason: "No undergraduate business major or minor. Tuck offers three open-enrollment courses any undergrad can take, but no degree." },
  { school: "Yale University (SOM) — MBA #11 (tie)", reason: "No undergraduate business major. Yale College undergrads pursue Economics instead." },
  { school: "Duke University (Fuqua) — MBA #14", reason: "No undergraduate business major. Duke offers a 'Markets & Management Studies' certificate run outside Fuqua, not a business degree." },
  { school: "Vanderbilt University (Owen) — MBA #16 (tie)", reason: "No undergraduate business major. Owen offers a minor only; the closest full degree is Peabody College's Human & Organizational Development BS, which isn't a business degree." },
  { school: "UCLA (Anderson) — MBA #18 (tie)", reason: "Anderson is graduate-only. UCLA's closest undergraduate option is a 'Business Economics' BA run by the Economics department (not Anderson) — a BA, not a qualifying BS/BSBA/BBA." },
  { school: "University of Washington (Foster) — MBA #20", reason: "Foster does offer a full undergraduate business major, but the degree conferred is officially a BA (Bachelor of Arts in Business Administration), not a BS/BSBA/BBA." },
  { school: "Rice University (Jones) — MBA #29 (tie)", reason: "Rice launched a real undergraduate business major in 2021 (Finance, Management, or Marketing concentrations), but the degree conferred is a BA, not a BS/BSBA/BBA. See the BA-level section below for its program and syllabus links." }
];

// Section D: BA-level and business-adjacent programs at schools whose undergraduate side does not
// offer a BS/BSBA/BBA. Each entry keeps the main program page link and adds a syllabus/curriculum/
// requirements link where the school publishes one separately. Schools with more than one relevant
// program (Stanford, Northwestern, Vanderbilt) are listed once with multiple programs underneath.
const BA_PROGRAMS = [
  {
    school: "Stanford University",
    knownFor: "No undergraduate business school exists — Economics and Management Science & Engineering are the two closest paths",
    mbaRank: "MBA #1",
    category: "Reach (extreme)",
    sat: "1520–1570",
    gpa: "~3.95+ UW",
    fit: "Stanford's ~4% admit rate puts this far beyond current stats regardless of major. MS&E is arguably a closer thematic match to the AI/ML + founder profile than Economics — and the Statistics 4.0 supports that quantitative angle better than the B in AP Microeconomics supports the pure-Econ path.",
    sat1450Effect: "Still below Stanford's range (1520+) regardless of major — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Economics — BA", url: "https://economics.stanford.edu/undergraduate/major", syllabusUrl: "https://economics.stanford.edu/undergraduate/major/economics-ba" },
      { name: "Management Science & Engineering (MS&E) — BS", url: "https://msande.stanford.edu/academics-admissions/undergraduate/undergraduate-major", syllabusUrl: "https://bulletin.stanford.edu/programs/MGTSC-BS" }
    ]
  },
  {
    school: "University of Chicago",
    knownFor: "Business Economics specialization uses actual Booth courses",
    mbaRank: "MBA #3",
    category: "Reach (extreme)",
    sat: "1520–1560",
    gpa: "~3.9+ UW",
    fit: "Lets Economics majors take a set of Booth courses as a formal specialization — the closest UChicago undergrads get to Booth. Extreme reach given UChicago's overall admissions bar; a B in AP Microeconomics is also a modest signal for a program built entirely on economics coursework.",
    sat1450Effect: "Still below UChicago's range (1520–1560) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Economics — Business Economics Specialization (BA)", url: "https://economics.uchicago.edu/undergraduate-study/curriculum/business-economics-specialization", syllabusUrl: "https://economics.uchicago.edu/undergraduate-study/curriculum/business-economics-specialization" }
    ]
  },
  {
    school: "Northwestern University",
    knownFor: "Kellogg-taught undergraduate certificates (Financial Economics and Managerial Analytics)",
    mbaRank: "MBA #4 (tie)",
    category: "Reach (extreme)",
    sat: "1500–1550",
    gpa: "~3.9+ UW",
    fit: "Two 4-course certificate tracks taught by Kellogg faculty, layered onto any Northwestern major. Financial Economics overlaps directly with the active fintech-sales internship; Managerial Analytics pairs well with the AI/ML coding background. Still requires admission to a highly selective university first.",
    sat1450Effect: "Still below Northwestern's range (1500–1550) — 1450 doesn't meaningfully change this; still an extreme reach, independent of which certificate track.",
    programs: [
      { name: "Kellogg Certificate Program for Undergraduates — Financial Economics track", url: "https://www.kellogg.northwestern.edu/programs/certificate/", syllabusUrl: "https://www.kellogg.northwestern.edu/programs/certificate/academics/financial-economics-certificate/" },
      { name: "Kellogg Certificate Program for Undergraduates — Managerial Analytics track", url: "https://www.kellogg.northwestern.edu/programs/certificate/", syllabusUrl: "https://www.kellogg.northwestern.edu/programs/certificate/academics/managerial-analytics-certificate/" }
    ]
  },
  {
    school: "Harvard University",
    knownFor: "Effectively the only business-adjacent path at Harvard College",
    mbaRank: "MBA #4 (tie)",
    category: "Reach (extreme)",
    sat: "1520–1580",
    gpa: "~3.95+ UW",
    fit: "A ~3% admit rate makes this the longest of long shots on the list regardless of program fit; the B in AP Microeconomics doesn't help the case for a pure Economics concentration either.",
    sat1450Effect: "Still below Harvard's range (1520–1580) — 1450 doesn't meaningfully change this; still an extreme reach given the ~3% admit rate.",
    programs: [
      { name: "Economics Concentration — BA", url: "https://www.economics.harvard.edu/concentrating-economics", syllabusUrl: "https://www.economics.harvard.edu/concentrator-guide" }
    ]
  },
  {
    school: "Columbia University",
    knownFor: "Adds real CBS-taught coursework on top of a Columbia College major",
    mbaRank: "MBA #7 (tie)",
    category: "Reach (extreme)",
    sat: "1510–1560",
    gpa: "~3.9+ UW",
    fit: "Requires a competitive in-college GPA (3.4+) to even declare, on top of Columbia's ~4% admit rate.",
    sat1450Effect: "Still below Columbia's range (1510–1560) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Special Program in Business Management (secondary credential alongside a BA)", url: "https://bulletin.columbia.edu/columbia-college/departments-instruction/business/", syllabusUrl: "https://bulletin.columbia.edu/columbia-college/departments-instruction/business/" }
    ]
  },
  {
    school: "Dartmouth College",
    knownFor: "Any undergrad can take real Tuck MBA-style courses without declaring a major",
    mbaRank: "MBA #9",
    category: "Reach (extreme)",
    sat: "1500–1560",
    gpa: "~3.9+ UW",
    fit: "Financial Accounting, Marketing, and Business Strategy courses are open-enrollment — a nice practical option if admitted, but admission itself is the entire challenge here.",
    sat1450Effect: "Still below Dartmouth's range (1500–1560) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Tuck Undergraduate Courses (open-enrollment, no major required)", url: "https://undergrad.tuck.dartmouth.edu/", syllabusUrl: "https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/tuck-undergraduate/tuck-tuck-undergraduate/" }
    ]
  },
  {
    school: "Yale University",
    knownFor: "Standard business-adjacent path at a school with no undergraduate business school",
    mbaRank: "MBA #11 (tie)",
    category: "Reach (extreme)",
    sat: "1510–1560",
    gpa: "~3.9+ UW",
    fit: "Extreme reach given Yale's ~4-5% admit rate, independent of program fit; the AP Microeconomics B is a minor data point either way at this admit rate.",
    sat1450Effect: "Still below Yale's range (1510–1560) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Economics Major — BA", url: "https://economics.yale.edu/undergraduate/undergraduate", syllabusUrl: "https://economics.yale.edu/undergraduate/major-requirements" }
    ]
  },
  {
    school: "Duke University",
    knownFor: "Interdisciplinary business certificate run outside Fuqua",
    mbaRank: "MBA #14",
    category: "Reach (extreme)",
    sat: "1510–1570",
    gpa: "~3.9+ UW",
    fit: "A 7-course certificate (gateway + core + 4 electives + capstone) — the closest thing to a business minor at Duke. Still requires clearing Duke's very selective overall admissions bar.",
    sat1450Effect: "Still below Duke's range (1510–1570) — 1450 doesn't meaningfully change this; still an extreme reach.",
    programs: [
      { name: "Markets & Management Studies (MMS) Certificate", url: "https://markets.duke.edu/about", syllabusUrl: "https://markets.duke.edu/certificate/requirements" }
    ]
  },
  {
    school: "Vanderbilt University",
    knownFor: "Owen-taught business minor; HOD BS is the closest full business-adjacent degree",
    mbaRank: "MBA #16 (tie)",
    category: "Reach (extreme)",
    sat: "1500–1560",
    gpa: "~3.9+ UW",
    fit: "The Hoogland minor is real Owen-taught business coursework layered onto any major. HOD's leadership/organizational-development focus maps well onto the comedy-club operations & marketing leadership experience. Both still require clearing Vanderbilt's overall admissions bar, which sits far above current stats.",
    sat1450Effect: "Still below Vanderbilt's range (1500–1560) — 1450 doesn't meaningfully change this; still an extreme reach, for either the minor or the HOD degree.",
    programs: [
      { name: "Hoogland Undergraduate Business Program — Business Minor (Owen Graduate School)", url: "https://business.vanderbilt.edu/business-minor/", syllabusUrl: "https://business.vanderbilt.edu/business-minor/curriculum/" },
      { name: "Human & Organizational Development (HOD), Peabody College — BS", url: "https://peabody.vanderbilt.edu/academics/undergraduate-majors/human-organizational-development/", syllabusUrl: "https://peabody.vanderbilt.edu/departments/hod/undergraduate-program/hod_core_requirements.php" }
    ]
  },
  {
    school: "UCLA",
    knownFor: "Closest thing to a business major, run by Economics (not Anderson)",
    mbaRank: "MBA #18 (tie)",
    category: "Reach",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~3.85+ UC-recalculated weighted GPA (see UC GPA-formula note on the Haas entry in the main Business section)",
    fit: "UCLA's overall admit rate (~9% for out-of-state) still makes this a clear reach regardless of testing policy. Worth noting for a Business Economics major specifically: AP Microeconomics came in at a B, while AP Statistics' 4.0 is the stronger supporting data point.",
    sat1450Effect: "Not applicable — UC is currently test-blind, so no SAT score factors into this at all. UCLA's low overall admit rate is driven entirely by GPA, coursework, and the Personal Insight Questions.",
    programs: [
      { name: "Business Economics — BA", url: "https://economics.ucla.edu/undergraduate/current-students/majors-and-minors/business-economics", syllabusUrl: "https://economics.ucla.edu/wp-content/uploads/2024/10/9-Bus-Econ-Major-Requirement-Worksheet-2020-2022.pdf" }
    ]
  },
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
  },
  {
    school: "Rice University",
    knownFor: "Newest elite undergrad business major (launched 2021); Lilie entrepreneurship center",
    mbaRank: "MBA #29 (tie)",
    category: "Reach",
    sat: "1470–1560",
    gpa: "~3.85+ UW",
    fit: "A strong founder-story fit given the adjacent Lilie entrepreneurship center. Still a reach given Rice's ~9% admit rate.",
    sat1450Effect: "Still below Rice's range (1470–1560) — 1450 doesn't meaningfully change this much; still a reach given Rice's ~9% admit rate, though it narrows the gap.",
    programs: [
      { name: "Undergraduate Business Major — Finance / Management / Marketing concentrations (BA)", url: "https://business.rice.edu/undergraduate-business-major", syllabusUrl: "https://business.rice.edu/undergraduate-business-major/undergraduate-business-major-requirements" }
    ]
  }
];

// Section E: Colleges & programs NOT in the US News MBA top-48 ranking. Includes the previously-listed
// non-MBA-ranked schools (Babson, Bentley, Fordham, Chapman, LMU, Santa Clara, Denver, Arizona, Drexel,
// Alabama, Menlo, Pacific — consolidated into single cards here) plus additional schools worth
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
    school: "Bentley University",
    knownFor: "Computer Information Systems (CIS) — every business major is tech-infused",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Target / Likely",
    sat: "1210–1390",
    gpa: "3.5–3.8",
    fit: "A business-only campus with a strong Information Design & Corporate Communication / Computer Information Systems pipeline that plays to the AI/ML coding background; 1360 SAT sits comfortably above Bentley's median.",
    sat1450Effect: "1450 sits well above Bentley's typical admitted range — this would comfortably flip the profile to Likely.",
    programs: [
      { name: "BS in Corporate Finance and Accounting", url: "https://www.bentley.edu/academics/undergraduate-programs/corporate-finance-accounting" },
      { name: "BS in Business — Computer Information Systems emphasis", url: "https://www.bentley.edu/academics/undergraduate-programs/corporate-finance-accounting" }
    ]
  },
  {
    school: "Fordham University",
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
    school: "Chapman University",
    knownFor: "Formal bridge with Dodge College of Film & Media (business + entertainment)",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Target",
    sat: "1220–1400",
    gpa: "3.6–3.9",
    fit: "Chapman pairs a real business school with Dodge College of Film & Media — one of the few formal bridges between entertainment/creative production and business, mirroring the comedy-club + startup dual identity in the creative portfolio.",
    sat1450Effect: "1450 sits above Chapman's typical range entirely — this would flip to Likely.",
    programs: [
      { name: "Argyros School of Business & Economics — BS in Business Administration", url: "https://www.chapman.edu/business/academic-programs/undergraduate/business-administration.aspx" }
    ]
  },
  {
    school: "Loyola Marymount University",
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
    school: "University of Alabama",
    knownFor: "Endowed undergraduate Professional Sales program; large automatic merit-aid ladder",
    mbaRank: "Not a nationally ranked full-time MBA program; regionally strong AACSB business school",
    category: "Likely",
    sat: "1150–1340",
    gpa: "3.5–4.0 (large automatic merit-scholarship ladder at these bands)",
    fit: "Strong likely admit with substantial automatic merit aid at this GPA/SAT band. Culverhouse also runs one of the only endowed undergraduate Professional Sales programs in the country — a direct match to the active Founders' Pool sales internship.",
    programs: [
      { name: "Culverhouse College of Business — BS", url: "https://culverhouse.ua.edu/programs/undergraduate/" }
    ]
  },
  {
    school: "Menlo College",
    knownFor: "In-house startup accelerator",
    mbaRank: "Not a nationally ranked full-time MBA program; small AACSB-track business college",
    category: "Safety",
    sat: "Test-optional / not required",
    gpa: "Flexible, holistic review",
    fit: "Atherton, CA — 30 minutes from Fremont, small and entrepreneurship-focused with an in-house startup accelerator. A genuine safety net that still offers real Silicon Valley startup access.",
    programs: [
      { name: "BS in Business — Entrepreneurship option", url: "https://www.menlo.edu/degree/entrepreneurship/" }
    ]
  },
  {
    school: "University of the Pacific",
    knownFor: "Small classes; accessible in-state safety",
    mbaRank: "Not a nationally ranked full-time MBA program; small AACSB-track business school",
    category: "Safety",
    sat: "1080–1300",
    gpa: "3.3–3.8",
    fit: "Stockton, CA — in-state, small classes, accessible safety with a real accredited business school.",
    programs: [
      { name: "Eberhardt School of Business — BS in Business Administration", url: "https://www.pacific.edu/business/academics/business-administration-major" }
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
    school: "Miami University (Ohio)",
    knownFor: "Strong direct-admit Midwest business brand with solid job placement",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Target / Likely",
    sat: "1230–1370 (avg ~1236)",
    gpa: "3.5–3.8",
    fit: "A well-regarded, moderately selective business school with solid finance/marketing/entrepreneurship options — a good target at a more accessible bar than the coastal private schools on this list, with strong 'public ivy' brand recognition.",
    sat1450Effect: "1450 sits well above Farmer's typical admitted range — this would comfortably flip the profile to Likely/Safety.",
    programs: [
      { name: "Farmer School of Business — BS", url: "https://miamioh.edu/fsb/index.html" }
    ]
  },
  {
    school: "Bryant University",
    knownFor: "Concentrations in Digital Marketing and Financial Services",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Likely",
    sat: "1190–1330",
    gpa: "3.3–3.7",
    fit: "An accessible AACSB business-only school with real digital marketing and financial-services concentrations that pair reasonably with the sales/fintech interest — a comfortable likely admit.",
    programs: [
      { name: "College of Business — Business Administration (BSBA)", url: "https://www.bryant.edu/undergraduate/academics/undergraduate-programs/business-administration" }
    ]
  },
  {
    school: "Elon University",
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
    school: "University of San Diego",
    knownFor: "Fowler Business Concept Challenge (entrepreneurship competition); test-blind admissions",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Target",
    sat: "Test-blind — SAT/ACT not considered even if submitted",
    gpa: "3.5–3.8",
    fit: "The Fowler Business Concept Challenge is a direct parallel to the Blue Ocean/BIZWORLD/Conrad Challenge track already on the resume, and USD doesn't even consider SAT scores in admission — a strong target regardless of test score, with small capped classes (~35 students).",
    sat1450Effect: "USD is test-blind, so a 1450 wouldn't change anything in the admissions process itself — GPA, essays, and activities (like the competition record) carry all the weight here.",
    programs: [
      { name: "Knauss School of Business — BBA", url: "https://www.sandiego.edu/business/academics/majors-and-minors/" }
    ]
  },
  {
    school: "Butler University",
    knownFor: "Students launch and run a real business with $1,000 seed funding by end of sophomore year",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Likely",
    sat: "1170–1330 (avg ~1256, test-optional)",
    gpa: "3.4–3.7",
    fit: "Butler's Entrepreneurship & Innovation major — where students launch and run a real funded business by sophomore year, plus coursework in 'salesmanship' — is one of the most hands-on founder-focused programs on this entire list, and it's a comfortable admit at current stats.",
    programs: [
      { name: "Andre B. Lacy School of Business — Entrepreneurship & Innovation (BS)", url: "https://www.butler.edu/lacy-business/undergraduate-programs/" }
    ]
  },
  {
    school: "High Point University",
    knownFor: "99.2% graduate placement rate",
    mbaRank: "Not in MBA top 48; not nationally ranked for full-time MBA",
    category: "Safety",
    sat: "1120–1300 (avg ~1198, test-optional)",
    gpa: "3.0–3.5",
    fit: "A very accessible, career-services-heavy business school with an adjacent entrepreneurship school for cross-registration — a comfortable safety with real placement outcomes.",
    programs: [
      { name: "Earl N. Phillips School of Business — BSBA", url: "https://www.highpoint.edu/business/" }
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
    school: "Berklee College of Music",
    knownFor: "Audition-free business/entrepreneurship track for the creative industries",
    mbaRank: "Not in MBA top 48; not a business school (specialty music/entertainment college)",
    category: "Target (niche)",
    sat: "Test-blind (SAT/ACT not considered); ~43.5% acceptance rate",
    gpa: "Holistic — GPA is not the primary factor",
    fit: "A deliberate outlier pick, not a BS/BSBA/BBA. The BA in Music Industry Leadership and Innovation doesn't require an audition (unlike Berklee's performance degrees) and covers entrepreneurship, design thinking, and strategic leadership in the entertainment industry — an unconventional but genuine match to the stand-up comedy and comedy-club operations/marketing thread running through the creative portfolio. Flagged here rather than in the main lists since the degree is a BA, not a business degree in the conventional sense.",
    sat1450Effect: "Berklee is test-blind, so a 1450 changes nothing in the admissions process — portfolio, essays, and the applicant's creative/business narrative are what matter here.",
    programs: [
      { name: "Music Industry Leadership and Innovation — BA (no audition required)", url: "https://college.berklee.edu/music-business-management/bachelor-of-arts-in-music-industry-leadership-and-innovation" }
    ]
  },
  {
    school: "California Institute of Technology (Caltech)",
    knownFor: "Business, Economics, and Management (BEM) option — a genuinely quantitative BS business degree run through the Linde Institute",
    mbaRank: "Caltech has no MBA program and isn't in the US News MBA ranking at all",
    category: "Reach (extreme)",
    sat: "1540–1580 (near-perfect Math section expected)",
    gpa: "Effectively 4.0 UW with the most demanding STEM course load available at the high school",
    fit: "On paper, BEM is an unusually strong thematic match: it fuses economics/finance with computer science and advanced math, and the Linde Institute actively supports student entrepreneurship, which lines up with the Orderly/CheqIn founder story and the AI/ML background better than almost anything else on this list. The catch isn't just the SAT/GPA gap — Caltech's admissions process is built around demonstrated STEM competition and research excellence (USAMO/Olympiad-tier math, research publications) rather than the extracurricular breadth and entrepreneurial/creative-portfolio profile this list is otherwise built around. That makes this a longer shot than the Ivy-tier reaches even before accounting for stats. A single AP Statistics 4.0 is a nice signal but far short of the depth of quantitative coursework/competition record a typical Caltech admit shows.",
    sat1450Effect: "Still well below Caltech's range (1540+), and more importantly, a higher SAT alone doesn't address the bigger gap — Caltech weighs STEM competition/research achievement far more heavily than the entrepreneurship/business-competition profile built up here. This stays an extreme reach independent of the SAT.",
    programs: [
      { name: "Business, Economics, and Management (BEM) Option — BS", url: "https://www.admissions.caltech.edu/why-caltech/academics/majors-minors/business-economics-and-management", syllabusUrl: "https://catalog.caltech.edu/current/information-for-undergraduate-students/graduation-requirements-all-options/business-economics-and-management-option-bem/" }
    ]
  },
  {
    school: "UC Davis",
    knownFor: "Brand-new STEM-designated BS in Business (launched Fall 2025) with Marketing & Business Analytics / Strategy & Management tracks",
    mbaRank: "Davis runs an MBA through its Graduate School of Management, but it isn't in the US News full-time MBA top 48",
    category: "Reach",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules (see the Haas entry in the main Business section for the policy caveat)",
    gpa: "~3.9–4.2 UC-recalculated weighted GPA in recent snapshots — but this is a brand-new major (Fall 2025 launch), so admit patterns are still settling; verify current-cycle data directly with UC Davis",
    fit: "The most quantitatively-branded 'Business' degree in the UC system — STEM-designated, with a Marketing & Business Analytics track that pairs directly with the AI/ML background and the AP Statistics 4.0. The long-established Managerial Economics BS is a solid fallback within the same department. Because the major is so new, admit competitiveness is a genuine unknown rather than a settled data point.",
    sat1450Effect: "Not applicable — UC is currently test-blind. GPA, coursework rigor, and the Personal Insight Questions are what matter here.",
    programs: [
      { name: "Business — BS (Marketing & Business Analytics / Strategy & Management tracks)", url: "https://gsm.ucdavis.edu/undergraduate/business-major", syllabusUrl: "https://catalog.ucdavis.edu/departments-programs-degrees/graduate-school-management/business-bs/" },
      { name: "Managerial Economics — BS (established alternative, Business Economics concentration available)", url: "https://managerialeconomics.ucdavis.edu/major" }
    ]
  },
  {
    school: "UC Santa Barbara",
    knownFor: "No formal business major — the Technology Management Certificate runs an annual New Venture Competition for student startups",
    mbaRank: "UCSB has no MBA program and isn't in the US News MBA ranking",
    category: "Reach",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~3.96–4.28 UC-recalculated weighted GPA in recent snapshots — one of the more competitive UC campuses",
    fit: "Worth flagging clearly: UCSB has no standalone undergraduate business major. Economics (BA or BS) is the closest full degree, and the Technology Management Certificate — explicitly built for 'driven, innovative, entrepreneurial students,' with cash prizes at its New Venture Competition — is a strong bolt-on credential for a founder profile, but it's a certificate layered onto another major, not a business degree itself.",
    sat1450Effect: "Not applicable — UC is currently test-blind either way.",
    programs: [
      { name: "Economics — BA/BS (closest substitute to a business major)", url: "https://econ.ucsb.edu/" },
      { name: "Technology Management Certificate (entrepreneurship-focused bolt-on, not a standalone major)", url: "https://tmp.ucsb.edu/academics/undergraduate-certificate-program" }
    ]
  },
  {
    school: "UC Santa Cruz",
    knownFor: "Business Management Economics major with a formal Accounting concentration",
    mbaRank: "UC Santa Cruz has no MBA program and isn't in the US News MBA ranking",
    category: "Target",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~3.7–4.1 UC-recalculated weighted GPA in recent snapshots — a less selective UC tier than Berkeley/UCLA/UCSB/UCSD/UCI/Davis",
    fit: "A real, named business major (not just Economics), blending economics with accounting, management, and business law. No dedicated entrepreneurship or fintech track, but the least selective full 'business' major in the UC system covered here besides Merced, which fits the current GPA profile reasonably well. Note the degree is a BA, not a BS.",
    sat1450Effect: "Not applicable — UC is currently test-blind either way.",
    programs: [
      { name: "Business Management Economics — BA", url: "https://programmaps.ucsc.edu/program/business-management-economics/", syllabusUrl: "https://catalog.ucsc.edu/en/current/general-catalog/academic-units/social-sciences-division/economics/business-management-economics-ba/" }
    ]
  },
  {
    school: "UC Irvine",
    knownFor: "Full AACSB-accredited business school (Merage) with 6 emphases including Finance and Marketing",
    mbaRank: "UC Irvine runs an MBA through the Merage School, but it isn't in the US News full-time MBA top 48",
    category: "Reach",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~3.96–4.26 UC-recalculated weighted GPA in recent snapshots — a competitive UC tier",
    fit: "A genuinely full-featured undergraduate business school with Finance, Marketing, Information Systems, and Organization & Management emphases — solid all-around fit for a sales/marketing-leaning profile. Note the degree conferred is a BA, not a BS, despite Merage being a real AACSB business school.",
    sat1450Effect: "Not applicable — UC is currently test-blind either way.",
    programs: [
      { name: "Business Administration — BA (Paul Merage School of Business)", url: "https://merage.uci.edu/programs/undergraduate/index.html", syllabusUrl: "https://catalogue.uci.edu/thepaulmerageschoolofbusiness/businessadministration_ba/" }
    ]
  },
  {
    school: "UC San Diego",
    knownFor: "Business Analytics & Data Science major run jointly with the Halıcıoğlu Data Science Institute",
    mbaRank: "UC San Diego's Rady School runs an MBA, but it isn't in the US News full-time MBA top 48",
    category: "Reach",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "~4.03–4.28 UC-recalculated weighted GPA in recent snapshots — the most competitive of the UC campuses covered here",
    fit: "Rady's Business Analytics & Data Science major is a near-direct match to the AI/ML coding background, and San Diego's biotech/tech startup density feeds a real undergraduate entrepreneurship pipeline. Business Economics is the more traditional BS alternative within the same school. Both are genuine BS degrees, not BAs — a rarer combination among the UC's business-adjacent programs.",
    sat1450Effect: "Not applicable — UC is currently test-blind either way.",
    programs: [
      { name: "Business Analytics & Data Science — BS (Rady School / Halıcıoğlu Data Science Institute)", url: "https://rady.ucsd.edu/programs/undergraduate/majors/" },
      { name: "Business Economics — BS", url: "https://economics.ucsd.edu/undergraduate-program/major-minor-requirements/BusEcon.html" }
    ]
  },
  {
    school: "UC Riverside",
    knownFor: "Largest undergraduate business program in the UC system; the only Actuarial Science program housed in a UC business school",
    mbaRank: "UC Riverside has no MBA program and isn't in the US News MBA ranking",
    category: "Target / Likely",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "High-3.4s–3.9s UC-recalculated weighted GPA in recent snapshots — the most accessible UC campus with a real business school covered here",
    fit: "A genuine BS business degree at the most accessible admit tier among the larger UC business programs, with Business Analytics and the UC system's only Actuarial Science major as standout options for a quant-leaning profile. One planning note: freshmen enter as 'Pre-Business' and formally declare the major at the end of sophomore year rather than being admitted directly.",
    sat1450Effect: "Not applicable — UC is currently test-blind either way.",
    programs: [
      { name: "Business Administration — BS", url: "https://business.ucr.edu/undergraduate" },
      { name: "Business Analytics — BS", url: "https://business.ucr.edu/undergraduate" },
      { name: "Actuarial Science — BS", url: "https://business.ucr.edu/undergraduate" }
    ]
  },
  {
    school: "UC Merced",
    knownFor: "Most accessible UC business option; the BS track is the more quantitative path",
    mbaRank: "UC Merced has no MBA program and isn't in the US News MBA ranking",
    category: "Likely / Safety",
    sat: "Test-blind — UC systemwide policy; no SAT/ACT considered under the current cycle's rules",
    gpa: "Low-3.2s–3.7 UC-recalculated weighted GPA in recent snapshots — the most accessible UC campus overall",
    fit: "The most realistic safety-tier UC option on this list. Management & Business Economics (BS) is the more quantitative, finance/accounting-and-quant-methods-heavy path and the better fit given the AI/ML background; Business Administration (BA) is the more applied alternative within the same department.",
    programs: [
      { name: "Management & Business Economics — BS", url: "https://www.ucmerced.edu/majors-and-minors/management-and-business-economics-bs" },
      { name: "Business Administration — BA (more applied alternative)", url: "https://www.ucmerced.edu/majors-and-minors/business-administration-ba" }
    ]
  },
{
    school: "Pennsylvania State University",
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
    school: "Louisiana State University",
    knownFor: "Stephenson Entrepreneurship Institute",
    mbaRank: "LSU has no MBA program in the US News full-time top 48",
    category: "Likely",
    sat: "University average 1150–1330 (~74% overall acceptance)",
    gpa: "3.3–3.7",
    fit: "1360 now sits above LSU's typical range, and the Stephenson Entrepreneurship Institute is a reasonable founder-story fit at a very accessible admit bar. Note the internal business gate (30 credit hours, minimum grades in pre-business core courses) applies after matriculation, but is unrelated to admissions test scores.",
    programs: [
      { name: "E.J. Ourso College of Business — BS", url: "https://www.lsu.edu/business/" }
    ]
  },
  {
    school: "University of Kentucky",
    knownFor: "Von Allmen Center for Entrepreneurship",
    mbaRank: "Kentucky has no MBA program in the US News full-time top 48",
    category: "Likely",
    sat: "Test-optional; recent class average ~1210",
    gpa: "3.4–3.7",
    fit: "1360 sits further above Kentucky's recent average, and the Von Allmen Center gives real entrepreneurship programming at an accessible admit bar. Students enter pre-major and gain full admission sophomore year via College Readiness Indicators.",
    programs: [
      { name: "Gatton College of Business & Economics — BSBA", url: "https://gatton.uky.edu/BSBA" }
    ]
  },
  {
    school: "University of Missouri",
    knownFor: "Actuarial science and real estate tracks",
    mbaRank: "Missouri has no MBA program in the US News full-time top 48",
    category: "Likely",
    sat: "University average ~1175",
    gpa: "3.3–3.6",
    fit: "1360 sits even more comfortably above Mizzou's average, making this an accessible likely; the two-tier admission (undeclared freshman year, then upper-level application at 45–60 credit hours with a 2.6 GPA minimum) is a manageable, low-risk path.",
    programs: [
      { name: "Trulaske College of Business — BSBA", url: "https://business.missouri.edu/" }
    ]
  },
  {
    school: "University of Central Florida",
    knownFor: "Entertainment Management minor (cross-listed with Orlando's entertainment industry)",
    mbaRank: "UCF has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "BSBA-specific mid-range ~1310–1430",
    gpa: "Reported minimum weighted GPA around 4.1 on UCF's own recalculated scale for limited-access BSBA entry — this is a different scale than the standard 3.6 weighted GPA and should be verified directly with UCF admissions before relying on it",
    fit: "The Entertainment Management minor (tied to Orlando's theme-park/entertainment industry, cross-listed with Rosen College and Arts & Humanities) is a genuinely unusual match for the performing-arts/business hybrid built up in the creative portfolio — but UCF's limited-access BSBA entry is more competitive internally than the university at large, and the GPA bar quoted is on UCF's own weighted scale, not directly comparable to the standard 3.6.",
    sat1450Effect: "1450 sits within UCF Business's mid-range — this would meaningfully improve the odds, though the GPA gate (on UCF's own scale) is the bigger unknown to verify directly.",
    programs: [
      { name: "College of Business Administration — BSBA, Entertainment Management minor available", url: "https://business.ucf.edu/" }
    ]
  },
  {
    school: "University of South Florida",
    knownFor: "New STEM-designated FinTech certificate; Tampa Bay financial-services hub",
    mbaRank: "USF has no MBA program in the US News full-time top 48",
    category: "Target / Likely",
    sat: "Average ~1230–1350",
    gpa: "3.4–3.7",
    fit: "USF's new undergraduate FinTech certificate is a direct academic complement to the active Founders' Pool sales internship, and Tampa Bay's financial-services industry density adds real internship access at an accessible admit bar.",
    programs: [
      { name: "Muma College of Business — BSBA, FinTech certificate available", url: "https://www.usf.edu/business/" }
    ]
  },
  {
    school: "Florida State University",
    knownFor: "Nationally strong Real Estate and Risk Management/Insurance tracks",
    mbaRank: "FSU has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "University middle 50% 1240–1390",
    gpa: "3.5–3.8",
    fit: "1360 sits within FSU's typical range, now in its upper half. Admission works by certifying into the business major after general FSU admission, adding a manageable second step rather than a separate competitive gate.",
    sat1450Effect: "1450 sits in the upper half of FSU's range — this would strengthen the assessment toward Likely.",
    programs: [
      { name: "College of Business (Wertheim) — BS", url: "https://wertheim.fsu.edu/" }
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
    knownFor: "#21 US News undergraduate Entrepreneurship ranking; Blackstone LaunchPad + Couri Hatchery incubator",
    mbaRank: "Syracuse has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "Average ~1349",
    gpa: "3.5–3.8",
    fit: "Whitman's Blackstone LaunchPad and Couri Hatchery incubator are real, active startup resources — a strong founder-story fit, and 1360 now sits slightly above Whitman's average SAT, though the ~37% business-school acceptance rate keeps this a genuine (not guaranteed) target.",
    clubsDeepDive: "Blackstone LaunchPad has a genuine decade-long track record (6,000+ students engaged) and runs the annual Ideas Fest pitch competition, a strong venue for Orderly. The Couri Hatchery Student Business Incubator goes further, offering mentorship, workspace, and funding that feed directly into the Orange Tank Pitch Competition and the Panasci Business Plan Competition — meaning there isn't just one pitch opportunity here but a full pipeline from incubation to competition, a meaningfully deeper level of startup infrastructure than most schools on this list offer.",
    sat1450Effect: "1450 would extend the lead over Whitman's average further, though the ~37% internal acceptance rate remains the bigger factor regardless of score.",
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
    school: "University of Delaware",
    knownFor: "Dedicated FinTech B.S. major — one of the rare stand-alone undergraduate fintech degrees in the country",
    mbaRank: "Delaware has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "Lerner average ~1277",
    gpa: "3.5–3.8",
    fit: "The dedicated FinTech B.S. is arguably the single most literal academic match to the active Founders' Pool AI-finance sales internship on this entire list — but Lerner admits internally at roughly 12%, considerably more selective than the modest average SAT alone suggests.",
    sat1450Effect: "1450 sits well above Lerner's average — this would meaningfully improve the odds against that internally competitive ~12% admit rate, likely shifting the assessment to Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Lerner College of Business & Economics — BS, dedicated FinTech major", url: "https://lerner.udel.edu/" }
    ]
  },
  {
    school: "Tulane University",
    knownFor: "New Orleans startup ecosystem; unique Legal Studies in Business major",
    mbaRank: "Tulane has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Test-optional; middle 50% 1410–1500 (Tulane recommends only submitting scores above ~1450)",
    gpa: "3.7–3.9",
    fit: "Freeman's New Orleans startup ties are a reasonable founder-story fit, but Tulane's rising selectivity puts current stats meaningfully below the middle 50% — a genuine reach.",
    sat1450Effect: "1450 sits right at the bottom of Tulane's range, and is also the score Tulane itself recommends as the floor for submitting — this would meaningfully improve the odds and is close to the threshold where submitting a score becomes worthwhile at all.",
    programs: [
      { name: "A.B. Freeman School of Business — BSM (Bachelor of Science in Management)", url: "https://freeman.tulane.edu/undergraduate/bachelor-science-management" }
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
    school: "Bucknell University",
    knownFor: "Unique Markets, Innovation & Design major (branding/product design) — a genuine creative+business crossover",
    mbaRank: "Bucknell has no MBA program in the US News full-time top 48",
    category: "Reach",
    sat: "Test-optional pilot through 2026–27; Freeman average ~1372",
    gpa: "~3.6 average; ~25% Freeman acceptance",
    fit: "The Markets, Innovation & Design major is one of the more distinctive creative/business hybrids on this whole list — a real thematic match to the creative portfolio — but the ~25% acceptance rate and average SAT sit above current stats.",
    sat1450Effect: "1450 sits above Freeman's average — this would meaningfully improve the odds, shifting the assessment toward Target.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Freeman College of Management — BSBA, Markets, Innovation & Design major", url: "https://www.bucknell.edu/academics/freeman-college-management" }
    ]
  },
  {
    school: "University of Tampa",
    knownFor: "Lowth Entrepreneurship Center — named the world's top university entrepreneurship center (GCEC/Nasdaq, 2017); Spartan Incubator",
    mbaRank: "Tampa has no MBA program in the US News full-time top 48",
    category: "Likely / Safety",
    sat: "Test-blind — SAT/ACT not considered even if submitted; university average ~1070–1300",
    gpa: "3.0–3.5",
    fit: "One of the best entrepreneurship-to-accessibility ratios on the entire list: a globally-recognized entrepreneurship center and student startup incubator at Tampa's very accessible (~53%) admit rate. A genuine likely/safety with real founder-relevant resources, not just a fallback.",
    programs: [
      { name: "Sykes College of Business — BS", url: "https://www.ut.edu/academics/sykes-college-of-business" }
    ]
  },
  {
    school: "Loyola University Chicago",
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
    school: "DePaul University",
    knownFor: "Coleman Entrepreneurship Center — one of the oldest, most established entrepreneurship centers in the country",
    mbaRank: "DePaul has no MBA program in the US News full-time top 48",
    category: "Likely / Safety",
    sat: "Test-optional; university range ~1100–1300",
    gpa: "3.2–3.6",
    fit: "1360 now sits above DePaul's typical range, and the Loop location plus the well-regarded Coleman Entrepreneurship Center make this a very comfortable likely with real founder-relevant programming, not just a fallback.",
    programs: [
      { name: "Driehaus College of Business — BS", url: "https://business.depaul.edu/" }
    ]
  },
  {
    school: "Baylor University",
    knownFor: "John F. Baugh Center for Entrepreneurship & Free Enterprise — a top-50 global program; Oso Launch Program and 1846 Business Incubator",
    mbaRank: "Baylor has no MBA program in the US News full-time top 48",
    category: "Target",
    sat: "Test-optional; university range ~1210–1400",
    gpa: "3.5–3.8",
    fit: "The Baugh Center is one of the more nationally recognized entrepreneurship programs on this entire list, with a real student incubator (1846) and launch program — a strong founder-story fit, with 1360 sitting within Baylor's typical range, now in its upper half.",
    sat1450Effect: "1450 sits in the upper half of Baylor's range — this would strengthen the assessment toward Likely.",
    programs: [
      { name: "Hankamer School of Business — BBA", url: "https://hankamer.baylor.edu/" }
    ]
  },
  {
    school: "Texas Christian University",
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
    school: "Pepperdine University",
    knownFor: "Malibu/LA location — a natural entertainment-industry crossover, similar in spirit to Chapman and LMU",
    mbaRank: "Pepperdine has no MBA program in the US News full-time top 48",
    category: "Target / Reach",
    sat: "Test-optional; university range ~1285–1480",
    gpa: "3.5–3.8",
    fit: "The Business Administration major sits within Seaver College (the liberal arts college) rather than a standalone named business school, but Malibu/LA placement gives the same entertainment-industry adjacency that made Chapman and LMU strong fits for the performing-arts/business hybrid built up in the creative portfolio. Full major admission requires 48 completed units and a 2.5 GPA, a manageable second step.",
    sat1450Effect: "1450 sits in the upper half of Pepperdine's range — this would strengthen the assessment toward Likely.",
    becomesTargetAt1450: true,
    programs: [
      { name: "Seaver College — Business Administration, BS", url: "https://seaver.pepperdine.edu/business/undergraduate/business/" }
    ]
  },
  {
    school: "Marquette University",
    knownFor: "Kohler Center for Entrepreneurship; Milwaukee corporate ties (Northwestern Mutual — actuarial/insurance)",
    mbaRank: "Marquette has no MBA program in the US News full-time top 48",
    category: "Likely",
    sat: "Test-optional; university range 1220–1350",
    gpa: "3.4–3.7",
    fit: "1360 now sits above Marquette's typical range, with direct-admit into the business college at matriculation. The Kohler Center gives real entrepreneurship programming, and Milwaukee's insurance-industry presence (Northwestern Mutual) adds an actuarial/finance angle.",
    programs: [
      { name: "College of Business Administration — BS", url: "https://www.marquette.edu/business/undergraduate/" }
    ]
  },
  {
    school: "Oregon State University",
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
  }
];
