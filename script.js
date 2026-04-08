const renewals = [
  {
    id: "RN-10482",
    customer: "Greenlight",
    broker: "Aston Brokers",
    policy: "Commercial Property",
    lob: "Property",
    brand: "Gadget",
    renewalDate: "2026-03-28",
    premium: "€148,200",
    status: "At risk",
    owner: "Priya Shah",
    progress: 62,
    exceptionType: "Missing underwriting decision",
    lastUpdated: "2h ago",
    notes: "Waiting for underwriter approval after exposure change on 2 locations.",
    blockers: ["Referral still pending", "Exposure values updated but not reviewed", "Broker expects quote before Friday"],
    actions: ["Chase underwriting decision", "Confirm revised TIV details", "Prepare fallback terms if referral slips"]
  },
  {
    id: "RN-10411",
    customer: "Islands",
    broker: "North Coast",
    policy: "Fleet",
    lob: "Motor",
    brand: "Bicy",
    renewalDate: "2026-03-24",
    premium: "€82,450",
    status: "Needs review",
    owner: "Marta Klein",
    progress: 74,
    exceptionType: "Pricing deviation",
    lastUpdated: "5h ago",
    notes: "Premium decrease exceeds delegated authority threshold.",
    blockers: ["Pricing justification not attached", "Approval route unclear for this segment"],
    actions: ["Attach pricing rationale", "Route to delegated approver", "Notify broker of review status"]
  },
  {
    id: "RN-10398",
    customer: "Harbor Group",
    broker: "Lumen Risk",
    policy: "Liability",
    lob: "Casualty",
    brand: "Tungsten",
    renewalDate: "2026-03-30",
    premium: "€231,900",
    status: "Ready",
    owner: "Daniel Reed",
    progress: 91,
    exceptionType: "None",
    lastUpdated: "1d ago",
    notes: "Quote prepared and ready for release pending scheduler run.",
    blockers: [],
    actions: ["Release in next batch", "Export quote pack"]
  },
  {
    id: "RN-10467",
    customer: "Blue Pine",
    broker: "Axis Advisory",
    policy: "Cyber",
    lob: "Specialty",
    brand: "Gadget",
    renewalDate: "2026-04-02",
    premium: "€95,700",
    status: "Blocked",
    owner: "Elena Voss",
    progress: 48,
    exceptionType: "Missing claims data",
    lastUpdated: "45m ago",
    notes: "Claims feed did not arrive for last policy term.",
    blockers: ["Claims integration timeout", "Cannot rate final terms without loss data", "Customer requested early visibility"],
    actions: ["Retry claims sync", "Escalate to integration support", "Surface fallback manual upload option"]
  },
  {
    id: "RN-10405",
    customer: "Oak & Vale",
    broker: "BridgePoint",
    policy: "Employers Liability",
    lob: "Casualty",
    brand: "Bicy",
    renewalDate: "2026-03-26",
    premium: "€44,120",
    status: "Quoted",
    owner: "Tom Meyer",
    progress: 100,
    exceptionType: "None",
    lastUpdated: "3h ago",
    notes: "Quote issued and awaiting broker response.",
    blockers: [],
    actions: ["Monitor response", "Send reminder in 2 days"]
  }
];

const batches = [
  { id: "B-2403-A", scheduled: "Tonight, 23:30", status: "Scheduled", ready: 128, blocked: 7, completed: 0 },
  { id: "B-2403-M", scheduled: "Tomorrow, 09:00", status: "Queued", ready: 52, blocked: 3, completed: 0 },
  { id: "B-2402-Z", scheduled: "Yesterday, 23:30", status: "Completed", ready: 0, blocked: 0, completed: 143 }
];

const reportBase = {
  kpis: {
    batchesRun: 38,
    policiesProcessed: 12842,
    successRate: 96.4,
    exceptions: 317,
    missingOutputs: 9
  },
  outcomesOverTime: [
    { period: "Wk 1", invite: 420, accept: 375, lapse: 62, exception: 24 },
    { period: "Wk 2", invite: 448, accept: 392, lapse: 58, exception: 26 },
    { period: "Wk 3", invite: 401, accept: 355, lapse: 65, exception: 29 },
    { period: "Wk 4", invite: 467, accept: 410, lapse: 70, exception: 31 }
  ],
  dueForRenewal: [
    { label: "Next 7 days", value: 284 },
    { label: "Next 14 days", value: 552 },
    { label: "Next 30 days", value: 1198 },
    { label: "Next 60 days", value: 2140 }
  ],
  recentBatchRuns: [
    { id: "RB-4802", type: "Invite", started: "08:15", completed: "08:23", policies: 468, status: "Completed" },
    { id: "RB-4801", type: "Accept", started: "06:00", completed: "06:20", policies: 395, status: "Completed with exceptions" },
    { id: "RB-4799", type: "Lapse", started: "03:40", completed: "04:02", policies: 210, status: "No output detected" },
    { id: "RB-4798", type: "Invite", started: "01:10", completed: "01:38", policies: 512, status: "Failed" },
    { id: "RB-4797", type: "Accept", started: "00:05", completed: "In progress", policies: 298, status: "In progress" }
  ],
  exceptionBreakdown: [
    { label: "Invite errors", count: 71 },
    { label: "Accept errors", count: 89 },
    { label: "Lapse errors", count: 53 },
    { label: "Record locked", count: 46 },
    { label: "Payment/update issue", count: 58 }
  ],
  monitoringSignals: [
    { label: "Expected output missing", count: 3 },
    { label: "Output file empty", count: 2 },
    { label: "Run delayed", count: 6 },
    { label: "Downstream process issue", count: 4 }
  ],
  batchReports: [
    { date: "2026-04-08", batchId: "RB-4802", type: "Invite", policies: 468, success: "98.5%", exceptions: 7, output: "invite_20260408_0815.csv" },
    { date: "2026-04-08", batchId: "RB-4801", type: "Accept", policies: 395, success: "95.2%", exceptions: 19, output: "accept_20260408_0600.csv" },
    { date: "2026-04-08", batchId: "RB-4799", type: "Lapse", policies: 210, success: "90.0%", exceptions: 21, output: "No output" },
    { date: "2026-04-07", batchId: "RB-4795", type: "Invite", policies: 522, success: "97.7%", exceptions: 12, output: "invite_20260407_2310.csv" },
    { date: "2026-04-07", batchId: "RB-4794", type: "Accept", policies: 336, success: "96.1%", exceptions: 13, output: "accept_20260407_2120.csv" },
    { date: "2026-04-06", batchId: "RB-4788", type: "Lapse", policies: 188, success: "92.0%", exceptions: 15, output: "lapse_20260406_2350.csv" }
  ]
};

const reportFilters = {
  time: "7 days",
  renewalType: "All",
  brand: "All",
  businessLine: "All"
};

let currentFilter = "all";
let currentSearch = "";
let selectedRenewalId = null;

const routeToView = {
  overview: "overviewView",
  batchHealth: "batchHealthView",
  reports: "reportsView",
  referrals: "referralsView"
};

const renewalList = document.getElementById("renewalList");
const detailContent = document.getElementById("detailContent");
const batchList = document.getElementById("batchList");
const referralsList = document.getElementById("referralsList");
const searchInput = document.getElementById("searchInput");
const renewalsOverTimeChart = document.getElementById("renewalsOverTimeChart");
const dueForRenewalsChart = document.getElementById("dueForRenewalsChart");
const newRenewalBtn = document.getElementById("newRenewalBtn");
const timeFilter = document.getElementById("timeFilter");
const renewalTypeFilter = document.getElementById("renewalTypeFilter");
const assignedToFilter = document.getElementById("assignedToFilter");
const assignedToOptions = document.getElementById("assignedToOptions");

const reportsKpiGrid = document.getElementById("reportsKpiGrid");
const recentBatchRunsBody = document.getElementById("recentBatchRunsBody");
const exceptionBreakdown = document.getElementById("exceptionBreakdown");
const monitoringSignals = document.getElementById("monitoringSignals");
const batchReportsBody = document.getElementById("batchReportsBody");

const reportTimeFilter = document.getElementById("reportTimeFilter");
const reportRenewalTypeFilter = document.getElementById("reportRenewalTypeFilter");
const reportBrandFilter = document.getElementById("reportBrandFilter");
const reportBusinessLineFilter = document.getElementById("reportBusinessLineFilter");
const reportDownloadAction = document.getElementById("reportDownloadAction");

let openBatchMenuId = null;

const timeContextLabelMap = {
  "7 days": "Last 7 days",
  "14 days": "Last 14 days",
  Month: "Last month",
  "3 months": "Last 3 months",
  "6 months": "Last 6 months",
  "12 months": "Last 12 months"
};

const assignedOwners = ["Marijana Andrevska", "Laurence Abbott", "Katerina Danilovska", "Andrej Cilkov", "Mark Feltwell"];
const overviewFilters = { time: "7 days", renewalType: "All", assignedTo: "Marijana Andrevska" };

function getBadgeClass(status) {
  if (status === "Blocked" || status === "Failed" || status === "No output detected") return "blocked";
  if (status === "At risk" || status === "Completed with exceptions") return "atrisk";
  if (status === "Needs review") return "review";
  if (status === "Ready" || status === "Completed") return "ready";
  if (status === "In progress") return "quoted";
  return "";
}

function monthLabel(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", { month: "short", year: "2-digit" });
}

function daysUntil(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateString);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function renderBarChart(container, entries, barClass) {
  if (!container) return;
  container.innerHTML = "";
  if (!entries.length) {
    container.innerHTML = '<p class="muted">No data available.</p>';
    return;
  }

  const maxValue = Math.max(...entries.map((entry) => entry.value), 1);
  entries.forEach((entry) => {
    const group = document.createElement("div");
    group.className = "bar-group";

    const wrap = document.createElement("div");
    wrap.className = "bar-wrap";

    const bar = document.createElement("div");
    bar.className = `bar ${barClass}`;
    bar.style.height = `${Math.max((entry.value / maxValue) * 160, 8)}px`;
    bar.title = `${entry.label}: ${entry.value}`;

    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = entry.value;

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = entry.label;

    bar.appendChild(value);
    wrap.appendChild(bar);
    group.appendChild(wrap);
    group.appendChild(label);
    container.appendChild(group);
  });
}

function renderRenewalsOverTimeChart() {
  const totalsByMonth = renewals.reduce((acc, renewal) => {
    const label = monthLabel(renewal.renewalDate);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(totalsByMonth).map(([label, value]) => ({ label, value }));
  renderBarChart(renewalsOverTimeChart, chartData, "bar-primary");
}

function renderDueForRenewalsChart() {
  const buckets = [
    { label: "0-7d", value: 0 },
    { label: "8-14d", value: 0 },
    { label: "15-30d", value: 0 },
    { label: "31+d", value: 0 }
  ];

  renewals.forEach((renewal) => {
    const days = daysUntil(renewal.renewalDate);
    if (days <= 7) buckets[0].value += 1;
    else if (days <= 14) buckets[1].value += 1;
    else if (days <= 30) buckets[2].value += 1;
    else buckets[3].value += 1;
  });

  renderBarChart(dueForRenewalsChart, buckets, "bar-secondary");
}

function renderRenewals() {
  if (!renewalList) return;
  renewalList.innerHTML = "";

  const filtered = renewals.filter((item) => {
    const matchesStatus = currentFilter === "all" || item.status === currentFilter;
    const text = `${item.customer} ${item.policy} ${item.broker} ${item.owner} ${item.id}`.toLowerCase();
    const matchesSearch = text.includes(currentSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.className = "renewal-item";
    if (item.id === selectedRenewalId) div.classList.add("active");

    div.innerHTML = `
      <div class="row-top">
        <div>
          <div class="row-title">${item.customer}</div>
          <div class="row-subtitle">${item.policy} • ${item.broker} • ${item.id}</div>
        </div>
        <span class="badge ${getBadgeClass(item.status)}">${item.status}</span>
      </div>
      <div class="row-subtitle">Renewal date: ${item.renewalDate}</div>
      <div class="row-subtitle">Owner: ${item.owner} | Premium: ${item.premium} | Progress: ${item.progress}%</div>
    `;

    div.addEventListener("click", () => {
      selectedRenewalId = item.id;
      renderRenewals();
      renderDetail(item);
    });

    renewalList.appendChild(div);
  });

  if (!filtered.length) {
    renewalList.innerHTML = '<p class="muted">No renewals found for this filter.</p>';
  }
}

function renderDetail(item) {
  if (!detailContent) return;
  detailContent.innerHTML = `
    <div class="detail-section">
      <h2>${item.customer}</h2>
      <p class="muted">${item.policy} • ${item.id} • ${item.lob}</p>
    </div>
    <div class="detail-section">
      <h4>Status</h4>
      <span class="badge ${getBadgeClass(item.status)}">${item.status}</span>
    </div>
    <div class="detail-section">
      <h4>Renewal summary</h4>
      <p><strong>Owner:</strong> ${item.owner}</p>
      <p><strong>Renewal date:</strong> ${item.renewalDate}</p>
      <p><strong>Premium:</strong> ${item.premium}</p>
      <p><strong>Last updated:</strong> ${item.lastUpdated}</p>
      <p><strong>Exception type:</strong> ${item.exceptionType}</p>
    </div>
    <div class="detail-section"><h4>What is happening</h4><p>${item.notes}</p></div>
    <div class="detail-section"><h4>Blockers</h4>${item.blockers.length ? `<ul>${item.blockers.map((b) => `<li>${b}</li>`).join("")}</ul>` : '<p class="muted">No blockers recorded.</p>'}</div>
    <div class="detail-section"><h4>Suggested next actions</h4><ul>${item.actions.map((a) => `<li>${a}</li>`).join("")}</ul></div>
    <div class="detail-actions">
      <button class="primary-btn" onclick="alert('Mock action: Resolve exception')">Resolve exception</button>
      <button class="detail-action" onclick="alert('Mock action: Assign owner')">Assign owner</button>
      <button class="detail-action" onclick="alert('Mock action: Open renewal record')">Open renewal record</button>
    </div>
  `;
}

function renderBatches() {
  if (!batchList) return;
  batchList.innerHTML = "";
  batches.forEach((batch) => {
    const div = document.createElement("div");
    div.className = "batch-item";
    div.innerHTML = `
      <div class="row-top">
        <div>
          <div class="row-title">${batch.id}</div>
          <div class="row-subtitle">${batch.status}</div>
        </div>
      </div>
      <div class="row-subtitle">Scheduled: ${batch.scheduled}</div>
      <div class="row-subtitle">Ready: ${batch.ready} | Blocked: ${batch.blocked} | Completed: ${batch.completed}</div>
    `;
    div.addEventListener("click", () => {
      alert(`Batch ${batch.id}\n\nStatus: ${batch.status}\nScheduled: ${batch.scheduled}\nReady: ${batch.ready}\nBlocked: ${batch.blocked}\nCompleted: ${batch.completed}`);
    });
    batchList.appendChild(div);
  });
}

function renderReferrals() {
  if (!referralsList) return;
  referralsList.innerHTML = "";

  const items = renewals.filter((item) => ["Blocked", "At risk", "Needs review"].includes(item.status));
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "exception-item";
    div.innerHTML = `
      <div class="row-top">
        <div>
          <div class="row-title">${item.customer}</div>
          <div class="row-subtitle">${item.exceptionType}</div>
        </div>
        <span class="badge ${getBadgeClass(item.status)}">${item.status}</span>
      </div>
      <div class="row-subtitle">Owner: ${item.owner} | Renewal date: ${item.renewalDate}</div>
      <div class="row-subtitle">${item.notes}</div>
    `;
    div.addEventListener("click", () => {
      setRoute("overview");
      selectedRenewalId = item.id;
      renderRenewals();
      renderDetail(item);
    });
    referralsList.appendChild(div);
  });
}

function getReportMultiplier() {
  const map = {
    "7 days": 1,
    "14 days": 1.7,
    Month: 4,
    "3 months": 12,
    "6 months": 24,
    "12 months": 48
  };
  return map[reportFilters.time] || 1;
}

function getFilteredReportRows() {
  return reportBase.batchReports.filter((row) => {
    const typeMatch = reportFilters.renewalType === "All" || row.type === reportFilters.renewalType;
    return typeMatch;
  });
}

function getTimeContextLabel() {
  return timeContextLabelMap[reportFilters.time] || "Last 7 days";
}

function renderReportKpis() {
  if (!reportsKpiGrid) return;
  const mult = getReportMultiplier();
  const context = getTimeContextLabel();
  const data = [
    { label: "Batches run", value: Math.round(reportBase.kpis.batchesRun * (mult / 4)), key: "batches-run" },
    { label: "Policies processed", value: Math.round(reportBase.kpis.policiesProcessed * (mult / 4)).toLocaleString(), key: "policies-processed" },
    { label: "Success rate", value: `${(reportBase.kpis.successRate - (mult > 10 ? 0.6 : 0)).toFixed(1)}%`, key: "success-rate" },
    { label: "Exceptions", value: Math.round(reportBase.kpis.exceptions * (mult / 4)), key: "exceptions" },
    { label: "Missing outputs", value: Math.max(1, Math.round(reportBase.kpis.missingOutputs * (mult / 4))), key: "missing-outputs" }
  ];

  reportsKpiGrid.innerHTML = data
    .map(
      (item) => `<div class="kpi-card report-kpi-card"><button class="text-action-btn report-view-more" data-view-more="kpi-${item.key}" type="button">View more</button><p class="kpi-label">${item.label}</p><h2>${item.value}</h2><span class="kpi-meta">${context}</span></div>`
    )
    .join("");
}

function renderRecentBatchRuns() {
  if (!recentBatchRunsBody) return;
  const rows = reportBase.recentBatchRuns
    .filter((r) => reportFilters.renewalType === "All" || r.type === reportFilters.renewalType)
    .map(
      (r) => `<tr>
      <td>${r.id}</td>
      <td>${r.type}</td>
      <td>${r.started}</td>
      <td>${r.completed}</td>
      <td>${r.policies}</td>
      <td><span class="badge ${getBadgeClass(r.status)}">${r.status}</span></td>
    </tr>`
    )
    .join("");
  recentBatchRunsBody.innerHTML = rows || '<tr><td colspan="6" class="muted">No runs for selected filters.</td></tr>';
}

function renderExceptionBreakdown() {
  if (!exceptionBreakdown) return;
  const max = Math.max(...reportBase.exceptionBreakdown.map((i) => i.count));
  exceptionBreakdown.innerHTML = reportBase.exceptionBreakdown
    .map(
      (item) => `<div class="exception-row">
        <div>
          <div class="row-subtitle">${item.label}</div>
          <div class="exception-track"><div class="exception-fill" style="width:${(item.count / max) * 100}%"></div></div>
        </div>
        <strong>${item.count}</strong>
      </div>`
    )
    .join("");
}

function renderMonitoringSignals() {
  if (!monitoringSignals) return;
  monitoringSignals.innerHTML = reportBase.monitoringSignals
    .map((signal) => `<div class="signal-card"><p class="row-subtitle">${signal.label}</p><p class="signal-count">${signal.count}</p></div>`)
    .join("");
}

function renderBatchReportsTable() {
  if (!batchReportsBody) return;
  const rows = getFilteredReportRows();

  batchReportsBody.innerHTML = rows
    .map(
      (row) => `<tr>
      <td>${row.date}</td>
      <td>${row.batchId}</td>
      <td>${row.type}</td>
      <td>${row.policies}</td>
      <td>${row.success}</td>
      <td>${row.exceptions}</td>
      <td>${row.output}</td>
      <td class="options-cell">
        <div class="row-options" data-menu-container="${row.batchId}">
          <button class="options-trigger" data-menu-trigger="${row.batchId}" aria-haspopup="true" aria-expanded="${openBatchMenuId === row.batchId}" aria-label="Open options for ${row.batchId}" type="button">⋯</button>
          <div class="row-options-menu ${openBatchMenuId === row.batchId ? "open" : ""}" data-menu="${row.batchId}" role="menu">
            <button type="button" data-menu-action="view" data-batch="${row.batchId}" role="menuitem">View</button>
            <button type="button" data-menu-action="csv" data-batch="${row.batchId}" role="menuitem">Download CSV</button>
            <button type="button" data-menu-action="xlsx" data-batch="${row.batchId}" role="menuitem">Download XLSX</button>
          </div>
        </div>
      </td>
    </tr>`
    )
    .join("");
}

function renderReportsView() {
  renderReportKpis();
  renderRecentBatchRuns();
  renderExceptionBreakdown();
  renderMonitoringSignals();
  renderBatchReportsTable();
}

function switchView(routeName) {
  const viewId = routeToView[routeName] || routeToView.overview;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.remove("active"));

  const viewEl = document.getElementById(viewId);
  const navEl = document.querySelector(`.nav-item[data-route="${routeName}"]`) || document.querySelector('.nav-item[data-route="overview"]');
  if (viewEl) viewEl.classList.add("active-view");
  if (navEl) navEl.classList.add("active");

  if (routeName === "reports") {
    renderReportsView();
  }
}

function getRouteFromHash() {
  const raw = location.hash.replace("#", "").trim();
  if (!raw) return "overview";
  return routeToView[raw] ? raw : "overview";
}

function setRoute(routeName) {
  const route = routeToView[routeName] ? routeName : "overview";
  if (location.hash.replace("#", "") !== route) {
    location.hash = route;
  } else {
    switchView(route);
  }
}

function syncRouteFromHash() {
  switchView(getRouteFromHash());
}

function initializeOverviewFilterDefaults() {
  if (timeFilter) timeFilter.value = overviewFilters.time;
  if (renewalTypeFilter) renewalTypeFilter.value = overviewFilters.renewalType;
  if (assignedToFilter) assignedToFilter.value = overviewFilters.assignedTo;
}

function updateAssignedOwnerOptions(query) {
  if (!assignedToOptions) return;
  const normalizedQuery = query.trim().toLowerCase();
  const filteredOwners = normalizedQuery ? assignedOwners.filter((owner) => owner.toLowerCase().includes(normalizedQuery)) : assignedOwners;
  assignedToOptions.innerHTML = "";
  filteredOwners.forEach((owner) => {
    const option = document.createElement("option");
    option.value = owner;
    assignedToOptions.appendChild(option);
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    setRoute(button.dataset.route);
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active-filter"));
    button.classList.add("active-filter");
    currentFilter = button.dataset.status;
    renderRenewals();
  });
});

document.querySelectorAll(".filter-kpi").forEach((card) => {
  card.addEventListener("click", () => {
    const filter = card.dataset.filter;
    currentFilter = filter;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active-filter"));
    const matchingButton = document.querySelector(`.filter-btn[data-status="${filter}"]`) || document.querySelector('.filter-btn[data-status="all"]');
    if (matchingButton) matchingButton.classList.add("active-filter");
    setRoute("overview");
    renderRenewals();
  });
});

searchInput?.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  renderRenewals();
});

timeFilter?.addEventListener("change", (event) => {
  overviewFilters.time = event.target.value;
});

renewalTypeFilter?.addEventListener("change", (event) => {
  overviewFilters.renewalType = event.target.value;
});

assignedToFilter?.addEventListener("input", (event) => {
  overviewFilters.assignedTo = event.target.value;
  updateAssignedOwnerOptions(event.target.value);
});

[reportTimeFilter, reportRenewalTypeFilter, reportBrandFilter, reportBusinessLineFilter].forEach((el) => {
  el?.addEventListener("change", () => {
    reportFilters.time = reportTimeFilter?.value || "7 days";
    reportFilters.renewalType = reportRenewalTypeFilter?.value || "All";
    reportFilters.brand = reportBrandFilter?.value || "All";
    reportFilters.businessLine = reportBusinessLineFilter?.value || "All";
    openBatchMenuId = null;
    renderReportsView();
  });
});

reportDownloadAction?.addEventListener("change", (event) => {
  const type = event.target.value;
  if (!type) return;
  alert(`Mock download started: ${type.toUpperCase()} report export.`);
  event.target.value = "";
});

batchReportsBody?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const trigger = target.closest("[data-menu-trigger]");
  if (trigger instanceof HTMLElement) {
    const batchId = trigger.dataset.menuTrigger;
    openBatchMenuId = openBatchMenuId === batchId ? null : batchId || null;
    renderBatchReportsTable();
    return;
  }

  const actionBtn = target.closest("[data-menu-action]");
  if (actionBtn instanceof HTMLElement) {
    const batchId = actionBtn.dataset.batch;
    const action = actionBtn.dataset.menuAction;
    if (!batchId || !action) return;
    console.log(`Mock ${action} action for ${batchId}`);
    openBatchMenuId = null;
    renderBatchReportsTable();
    return;
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const clickedInsideMenu = target.closest("[data-menu-container]");
  if (!clickedInsideMenu && openBatchMenuId) {
    openBatchMenuId = null;
    renderBatchReportsTable();
  }

  const viewMoreBtn = target.closest(".report-view-more");
  if (viewMoreBtn instanceof HTMLElement) {
    const area = viewMoreBtn.dataset.viewMore || "section";
    console.log(`View more clicked for ${area}`);
  }
});

const newRenewalModal = document.getElementById("newRenewalModal");
const drawerPanel = newRenewalModal?.querySelector(".drawer-panel");
const drawerOverlay = newRenewalModal?.querySelector(".drawer-overlay");
const drawerCloseX = document.getElementById("drawerCloseX");
const drawerCloseBtn = document.getElementById("drawerCloseBtn");
const newRenewalForm = document.getElementById("newRenewalForm");
const autoActionToggle = document.getElementById("autoActionToggle");
const autoToggleState = document.getElementById("autoToggleState");
const autoToggleLabel = document.getElementById("autoToggleLabel");
const autoToggleHelp = document.getElementById("autoToggleHelp");
const drawerPrimaryBtn = document.getElementById("drawerPrimaryBtn");
const toastContainer = document.getElementById("toast-container");

const focusableSelector = ['a[href]', 'button:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])'].join(",");
let lastFocusedElement = null;

const renewalTypeConfig = {
  Invite: {
    autoLabel: "Create new batch and invite automatically",
    helperText: "If you turn on this option, the system will create a new batch and invite once it's ready.",
    primaryLabel: "New Invite Batch"
  },
  Accept: {
    autoLabel: "Create new batch and accept automatically",
    helperText: "If you turn on this option, the system will create a new batch and accept once it's ready.",
    primaryLabel: "New Accept Batch"
  },
  Lapse: {
    autoLabel: "Create new batch and lapse automatically",
    helperText: "If you turn on this option, the system will create a new batch and lapse once it's ready.",
    primaryLabel: "New Lapse Batch"
  }
};

function showToast(message) {
  if (!toastContainer || !message) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `<p class="toast-message">${message}</p><button class="toast-close" type="button" aria-label="Dismiss notification">×</button>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("visible"));
  const dismiss = () => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 200);
  };

  toast.querySelector(".toast-close")?.addEventListener("click", dismiss);
  setTimeout(dismiss, 3000);
}

function getSelectedRenewalType() {
  const selected = document.querySelector('input[name="renewalType"]:checked');
  return selected ? selected.value : "Invite";
}

function updateRenewalTypeDependentContent() {
  const type = getSelectedRenewalType();
  const config = renewalTypeConfig[type] || renewalTypeConfig.Invite;
  if (autoToggleLabel) autoToggleLabel.textContent = config.autoLabel;
  if (autoToggleHelp) autoToggleHelp.textContent = config.helperText;
  if (drawerPrimaryBtn) drawerPrimaryBtn.textContent = config.primaryLabel;
}

function updateToggleStateText() {
  if (autoToggleState && autoActionToggle) autoToggleState.textContent = autoActionToggle.checked ? "ON" : "OFF";
}

function openModal() {
  if (!newRenewalModal || !drawerPanel) return;
  lastFocusedElement = document.activeElement;
  newRenewalModal.classList.add("open");
  newRenewalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const focusableElements = drawerPanel.querySelectorAll(focusableSelector);
  if (focusableElements.length) focusableElements[0].focus();
}

function closeModal() {
  if (!newRenewalModal) return;
  newRenewalModal.classList.remove("open");
  newRenewalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function trapFocusInModal(event) {
  if (event.key !== "Tab" || !newRenewalModal?.classList.contains("open") || !drawerPanel) return;
  const focusableElements = Array.from(drawerPanel.querySelectorAll(focusableSelector)).filter((el) => el.offsetParent !== null || el === document.activeElement);
  if (!focusableElements.length) return;
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function enforcePartialDate(inputIds) {
  const values = inputIds.map((id) => document.getElementById(id)?.value.trim() || "");
  return !values.some(Boolean) || values.every(Boolean);
}

newRenewalBtn?.addEventListener("click", openModal);
drawerOverlay?.addEventListener("click", closeModal);
drawerCloseX?.addEventListener("click", closeModal);
drawerCloseBtn?.addEventListener("click", closeModal);
autoActionToggle?.addEventListener("change", updateToggleStateText);

document.querySelectorAll('input[name="renewalType"]').forEach((radio) => {
  radio.addEventListener("change", updateRenewalTypeDependentContent);
});

newRenewalForm?.querySelectorAll('input[inputmode="numeric"]').forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});

newRenewalForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const isStartDateValid = enforcePartialDate(["startDateDay", "startDateMonth", "startDateYear"]);
  const isEndDateValid = enforcePartialDate(["endDateDay", "endDateMonth", "endDateYear"]);
  if (!isStartDateValid || !isEndDateValid) {
    alert("If any part of Start Date or End Date is entered, all date fields for that date are required.");
    return;
  }

  if (drawerPrimaryBtn) drawerPrimaryBtn.disabled = true;
  await new Promise((resolve) => setTimeout(resolve, 350));
  if (drawerPrimaryBtn) drawerPrimaryBtn.disabled = false;
  closeModal();
  showToast(`New ${getSelectedRenewalType()} renewal batch has been created.`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && newRenewalModal?.classList.contains("open")) {
    closeModal();
  }
  trapFocusInModal(event);
});

window.addEventListener("hashchange", syncRouteFromHash);

renderRenewals();
renderBatches();
renderReferrals();
renderRenewalsOverTimeChart();
renderDueForRenewalsChart();
renderReportsView();
initializeOverviewFilterDefaults();
updateAssignedOwnerOptions(overviewFilters.assignedTo);
updateRenewalTypeDependentContent();
updateToggleStateText();
syncRouteFromHash();
