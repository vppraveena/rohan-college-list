function badgeClass(category) {
  const c = category.toLowerCase();
  if (c.includes("reach")) return "reach";
  if (c.includes("target")) return "target";
  if (c.includes("safety")) return "safety";
  return "likely";
}

function renderProgramRow(p) {
  const syllabus = p.syllabusUrl && p.syllabusUrl !== p.url
    ? ` <a class="syllabus-link" href="${p.syllabusUrl}" target="_blank" rel="noopener">(syllabus)</a>`
    : "";
  return `<div class="program-row">${p.name} — <a class="card-link" href="${p.url}" target="_blank" rel="noopener">Program page &rarr;</a>${syllabus}</div>`;
}

function renderCard(item, showMbaRank) {
  const badge = badgeClass(item.category);
  const improvesAt1450 = badge === "reach" && item.becomesTargetAt1450 === true;
  const visualBadge = improvesAt1450 ? "reach-improves" : badge;
  const programsHtml = item.programs.map(renderProgramRow).join("");
  return `
    <div class="college-card" data-category="${badge}">
      <div class="card-top">
        <h3>${item.school}</h3>
        <span class="badge ${visualBadge}">${item.category}</span>
      </div>
      ${item.knownFor ? `<div class="known-for">Known for: ${item.knownFor}</div>` : ""}
      ${showMbaRank && item.mbaRank ? `<div class="mba-rank">US News business-school tier: ${item.mbaRank}</div>` : ""}
      <div class="meta-row">
        <div><strong>${item.sat}</strong>SAT range</div>
        <div><strong>${item.gpa}</strong>GPA range</div>
      </div>
      <p class="fit-text">${item.fit}</p>
      ${item.sat1450Effect ? `<p class="sat1450-text"><strong>At a 1450 SAT:</strong> ${item.sat1450Effect}</p>` : ""}
      <div class="program-list">${programsHtml}</div>
    </div>
  `;
}

function renderProfile() {
  document.getElementById("profile-name").textContent = PROFILE.name;
  document.getElementById("profile-school").textContent = `${PROFILE.school} — ${PROFILE.grad}`;
  document.getElementById("stat-sat").textContent = PROFILE.sat;
  document.getElementById("stat-gpa-uw").textContent = PROFILE.gpaUW;
  document.getElementById("stat-gpa-w").textContent = PROFILE.gpaW;
  const spikeEl = document.getElementById("spike-list");
  spikeEl.innerHTML = PROFILE.spike.map(s => `<li>${s}</li>`).join("");
}

function reachDisplayPriority(item) {
  const badge = badgeClass(item.category);
  if (badge !== "reach") return 2;
  return item.becomesTargetAt1450 === true ? 0 : 1;
}

function setupSection(sectionId, gridId, controlsId, data, showMbaRank) {
  const grid = document.getElementById(gridId);
  const sorted = [...data].sort((a, b) => reachDisplayPriority(a) - reachDisplayPriority(b));
  grid.innerHTML = sorted.map(item => renderCard(item, showMbaRank)).join("");

  const controls = document.getElementById(controlsId);
  const buttons = controls.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      grid.querySelectorAll(".college-card").forEach(card => {
        card.style.display = (filter === "all" || card.dataset.category === filter) ? "" : "none";
      });
    });
  });
}

function renderExcluded() {
  const container = document.getElementById("excluded-list");
  container.innerHTML = EXCLUDED_SCHOOLS.map(item => `
    <div class="excluded-row">
      <strong>${item.school}</strong>
      <span>${item.reason}</span>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  setupSection("bs-business", "bs-business-grid", "bs-business-controls", BS_BUSINESS, true);
  setupSection("business-tech", "business-tech-grid", "business-tech-controls", BUSINESS_TECH, false);
  setupSection("ba-programs", "ba-programs-grid", "ba-programs-controls", BA_PROGRAMS, true);
  setupSection("beyond-mba", "beyond-mba-grid", "beyond-mba-controls", BEYOND_MBA_RANKING, true);
  renderExcluded();
});
