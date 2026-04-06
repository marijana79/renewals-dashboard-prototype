const renewals = [
  {
    id: "RN-10482",
    customer: "Greenlight",
    broker: "Aston Brokers",
    policy: "Commercial Property",
    lob: "Property",
    renewalDate: "2026-03-28",
    premium: "€148,200",
    status: "At risk",
    owner: "Priya Shah",
    progress: 62,
    exceptionType: "Missing underwriting decision",
    lastUpdated: "2h ago",
    notes: "Waiting for underwriter approval after exposure change on 2 locations.",
    blockers: [
      "Referral still pending",
      "Exposure values updated but not reviewed",
      "Broker expects quote before Friday"
    ],
    actions: [
      "Chase underwriting decision",
      "Confirm revised TIV details",
      "Prepare fallback terms if referral slips"
    ]
  },
  {
    id: "RN-10411",
    customer: "Islands",
    broker: "North Coast",
    policy: "Fleet",
    lob: "Motor",
    renewalDate: "2026-03-24",
    premium: "€82,450",
    status: "Needs review",
    owner: "Marta Klein",
    progress: 74,
    exceptionType: "Pricing deviation",
    lastUpdated: "5h ago",
    notes: "Premium decrease exceeds delegated authority threshold.",
    blockers: [
      "Pricing justification not attached",
      "Approval route unclear for this segment"
    ],
    actions: [
      "Attach pricing rationale",
      "Route to delegated approver",
      "Notify broker of review status"
    ]
  },
  {
    id: "RN-10398",
    customer: "Harbor Group",
    broker: "Lumen Risk",
    policy: "Liability",
    lob: "Casualty",
    renewalDate: "2026-03-30",
    premium: "€231,900",
    status: "Ready",
    owner: "Daniel Reed",
    progress: 91,
    exceptionType: "None",
    lastUpdated: "1d ago",
    notes: "Quote prepared and ready for release pending scheduler run.",
    blockers: [],
    actions: [
      "Release in next batch",
      "Export quote pack"
    ]
  },
  {
    id: "RN-10467",
    customer: "Blue Pine",
    broker: "Axis Advisory",
    policy: "Cyber",
    lob: "Specialty",
    renewalDate: "2026-04-02",
    premium: "€95,700",
    status: "Blocked",
    owner: "Elena Voss",
    progress: 48,
    exceptionType: "Missing claims data",
    lastUpdated: "45m ago",
    notes: "Claims feed did not arrive for last policy term.",
    blockers: [
      "Claims integration timeout",
      "Cannot rate final terms without loss data",
      "Customer requested early visibility"
    ],
    actions: [
      "Retry claims sync",
      "Escalate to integration support",
      "Surface fallback manual upload option"
    ]
  },
  {
    id: "RN-10405",
    customer: "Oak & Vale",
    broker: "BridgePoint",
    policy: "Employers Liability",
    lob: "Casualty",
    renewalDate: "2026-03-26",
    premium: "€44,120",
    status: "Quoted",
    owner: "Tom Meyer",
    progress: 100,
    exceptionType: "None",
    lastUpdated: "3h ago",
    notes: "Quote issued and awaiting broker response.",
    blockers: [],
    actions: [
      "Monitor response",
      "Send reminder in 2 days"
    ]
  }
];

const batches = [
  {
    id: "B-2403-A",
    scheduled: "Tonight, 23:30",
    status: "Scheduled",
    ready: 128,
    blocked: 7,
    completed: 0
  },
  {
    id: "B-2403-M",
    scheduled: "Tomorrow, 09:00",
    status: "Queued",
    ready: 52,
    blocked: 3,
    completed: 0
  },
  {
    id: "B-2402-Z",
    scheduled: "Yesterday, 23:30",
    status: "Completed",
    ready: 0,
    blocked: 0,
    completed: 143
  }
];

let currentFilter = "all";
let currentSearch = "";
let selectedRenewalId = null;

const renewalList = document.getElementById("renewalList");
const detailContent = document.getElementById("detailContent");
const batchList = document.getElementById("batchList");
const reportsSummary = document.getElementById("reportsSummary");
const referralsList = document.getElementById("referralsList");
const searchInput = document.getElementById("searchInput");
const renewalsOverTimeChart = document.getElementById("renewalsOverTimeChart");
const dueForRenewalsChart = document.getElementById("dueForRenewalsChart");
const newRenewalBtn = document.getElementById("newRenewalBtn");

function getBadgeClass(status) {
  if (status === "Blocked") return "blocked";
  if (status === "At risk") return "atrisk";
  if (status === "Needs review") return "review";
  if (status === "Ready") return "ready";
  if (status === "Quoted") return "quoted";
  return "";
}

function renderRenewals() {
  renewalList.innerHTML = "";

  const filtered = renewals.filter((item) => {
    const matchesStatus =
      currentFilter === "all" || item.status === currentFilter;

    const text = `${item.customer} ${item.policy} ${item.broker} ${item.owner} ${item.id}`.toLowerCase();
    const matchesSearch = text.includes(currentSearch.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.className = "renewal-item";

    if (item.id === selectedRenewalId) {
      div.classList.add("active");
    }

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

  if (filtered.length === 0) {
    renewalList.innerHTML = `<p class="muted">No renewals found for this filter.</p>`;
    detailContent.innerHTML = `
      <h3>No matching renewal</h3>
      <p class="muted">Try changing the status filter or search term.</p>
    `;
  }
}

function renderDetail(item) {
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

    <div class="detail-section">
      <h4>What is happening</h4>
      <p>${item.notes}</p>
    </div>

    <div class="detail-section">
      <h4>Blockers</h4>
      ${
        item.blockers.length
          ? `<ul>${item.blockers.map((b) => `<li>${b}</li>`).join("")}</ul>`
          : `<p class="muted">No blockers recorded.</p>`
      }
    </div>

    <div class="detail-section">
      <h4>Suggested next actions</h4>
      <ul>${item.actions.map((a) => `<li>${a}</li>`).join("")}</ul>
    </div>

    <div class="detail-actions">
      <button class="primary-btn" onclick="alert('Mock action: Resolve exception')">Resolve exception</button>
      <button class="detail-action" onclick="alert('Mock action: Assign owner')">Assign owner</button>
      <button class="detail-action" onclick="alert('Mock action: Open renewal record')">Open renewal record</button>
    </div>
  `;
}

function renderReports() {
  if (!reportsSummary) return;

  const blocked = renewals.filter((item) => item.status === "Blocked").length;
  const atRisk = renewals.filter((item) => item.status === "At risk").length;
  const ready = renewals.filter((item) => item.status === "Ready").length;

  reportsSummary.innerHTML = `
    <div class="exception-item">
      <div class="row-top">
        <div class="row-title">Renewal Status Snapshot</div>
      </div>
      <div class="row-subtitle">Blocked: ${blocked}</div>
      <div class="row-subtitle">At risk: ${atRisk}</div>
      <div class="row-subtitle">Ready: ${ready}</div>
    </div>
    <div class="exception-item">
      <div class="row-top">
        <div class="row-title">Production Report Export</div>
      </div>
      <div class="row-subtitle">Use this placeholder to simulate report export actions.</div>
    </div>
  `;
}

function renderReferrals() {
  if (!referralsList) return;

  referralsList.innerHTML = "";

  const items = renewals.filter(
    (item) => item.status === "Blocked" || item.status === "At risk" || item.status === "Needs review"
  );

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
      switchView("overview");
      selectedRenewalId = item.id;
      renderRenewals();
      renderDetail(item);
    });

    referralsList.appendChild(div);
  });

  if (items.length === 0) {
    referralsList.innerHTML = '<p class="muted">No referrals at this time.</p>';
  }
}

function renderBatches() {
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
      alert(
        `Batch ${batch.id}\n\nStatus: ${batch.status}\nScheduled: ${batch.scheduled}\nReady: ${batch.ready}\nBlocked: ${batch.blocked}\nCompleted: ${batch.completed}`
      );
    });

    batchList.appendChild(div);
  });
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

  const chartData = Object.entries(totalsByMonth)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => {
      const [aMonth, aYear] = a.label.split(" ");
      const [bMonth, bYear] = b.label.split(" ");
      return new Date(`01 ${aMonth} 20${aYear}`) - new Date(`01 ${bMonth} 20${bYear}`);
    });

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

function switchView(viewName) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.remove("active-view");
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(`${viewName}View`).classList.add("active-view");
  document.querySelector(`.nav-item[data-view="${viewName}"]`).classList.add("active");
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    switchView(view);
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

    const matchingButton = document.querySelector(`.filter-btn[data-status="${filter}"]`);
    if (matchingButton) {
      matchingButton.classList.add("active-filter");
    } else {
      document.querySelector(`.filter-btn[data-status="all"]`).classList.add("active-filter");
    }

    switchView("overview");
    renderRenewals();
  });
});

searchInput.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  renderRenewals();
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

const modalRouteHash = "#new-renewal";
const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');
let lastFocusedElement = null;

const renewalTypeConfig = {
  Invite: {
    autoLabel: "Create new batch and invite automatically",
    helperText: "If you turn on “Create new batch and invite automatically”, the system will create a new batch and invite it once it’s ready. You won’t need to take any further action.",
    primaryLabel: "New Invite Batch"
  },
  Accept: {
    autoLabel: "Create new batch and accept automatically",
    helperText: "If you turn on “Create new batch and accept automatically”, the system will create a new batch and accept it once it’s ready. You won’t need to take any further action.",
    primaryLabel: "New Accept Batch"
  },
  Lapse: {
    autoLabel: "Create new batch and lapse automatically",
    helperText: "If you turn on “Create new batch and lapse automatically”, the system will create a new batch and lapse it once it’s ready. You won’t need to take any further action.",
    primaryLabel: "New Lapse Batch"
  }
};

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
  if (autoToggleState && autoActionToggle) {
    autoToggleState.textContent = autoActionToggle.checked ? "ON" : "OFF";
  }
}

function setModalHashOpen() {
  if (location.hash !== modalRouteHash) {
    location.hash = modalRouteHash;
  }
}

function clearModalHash() {
  if (location.hash) {
    location.hash = "";
  }
}

function openModal() {
  if (!newRenewalModal || !drawerPanel) return;
  lastFocusedElement = document.activeElement;
  newRenewalModal.classList.add("open");
  newRenewalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const focusableElements = drawerPanel.querySelectorAll(focusableSelector);
  if (focusableElements.length) {
    focusableElements[0].focus();
  } else {
    drawerPanel.focus();
  }
}

function closeModal() {
  if (!newRenewalModal) return;
  newRenewalModal.classList.remove("open");
  newRenewalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  } else if (newRenewalBtn) {
    newRenewalBtn.focus();
  }
}

function syncModalWithHash() {
  if (location.hash === modalRouteHash) {
    openModal();
  } else {
    closeModal();
  }
}

function trapFocusInModal(event) {
  if (event.key !== "Tab" || !newRenewalModal?.classList.contains("open") || !drawerPanel) return;

  const focusableElements = Array.from(drawerPanel.querySelectorAll(focusableSelector)).filter((el) => {
    return el.offsetParent !== null || el === document.activeElement;
  });

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
  const hasAny = values.some((value) => value !== "");
  const hasAll = values.every((value) => value !== "");
  return !hasAny || hasAll;
}

if (newRenewalBtn) {
  newRenewalBtn.addEventListener("click", () => {
    setModalHashOpen();
  });
}

if (drawerOverlay) {
  drawerOverlay.addEventListener("click", () => {
    clearModalHash();
  });
}

if (drawerCloseX) {
  drawerCloseX.addEventListener("click", () => {
    clearModalHash();
  });
}

if (drawerCloseBtn) {
  drawerCloseBtn.addEventListener("click", () => {
    clearModalHash();
  });
}

if (autoActionToggle) {
  autoActionToggle.addEventListener("change", updateToggleStateText);
}

document.querySelectorAll('input[name="renewalType"]').forEach((radio) => {
  radio.addEventListener("change", updateRenewalTypeDependentContent);
});

newRenewalForm?.querySelectorAll('input[inputmode="numeric"]').forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});

if (newRenewalForm) {
  newRenewalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isStartDateValid = enforcePartialDate(["startDateDay", "startDateMonth", "startDateYear"]);
    const isEndDateValid = enforcePartialDate(["endDateDay", "endDateMonth", "endDateYear"]);

    if (!isStartDateValid || !isEndDateValid) {
      alert("If any part of Start Date or End Date is entered, all date fields for that date are required.");
      return;
    }

    const payload = {
      renewalType: getSelectedRenewalType(),
      brand: document.getElementById("brandSelect")?.value || "All",
      businessLine: document.getElementById("businessLineSelect")?.value || "All",
      startDate: {
        day: document.getElementById("startDateDay")?.value || "",
        month: document.getElementById("startDateMonth")?.value || "",
        year: document.getElementById("startDateYear")?.value || ""
      },
      endDate: {
        day: document.getElementById("endDateDay")?.value || "",
        month: document.getElementById("endDateMonth")?.value || "",
        year: document.getElementById("endDateYear")?.value || ""
      },
      automatic: Boolean(autoActionToggle?.checked)
    };

    console.log("New Renewal payload:", payload);
    clearModalHash();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && newRenewalModal?.classList.contains("open")) {
    clearModalHash();
    return;
  }

  trapFocusInModal(event);
});

window.addEventListener("hashchange", syncModalWithHash);

renderRenewals();
renderBatches();
renderReports();
renderReferrals();
renderRenewalsOverTimeChart();
renderDueForRenewalsChart();
switchView("overview");
updateRenewalTypeDependentContent();
updateToggleStateText();
syncModalWithHash();
