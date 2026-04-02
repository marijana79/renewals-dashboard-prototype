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
const exceptionsList = document.getElementById("exceptionsList");
const batchList = document.getElementById("batchList");
const searchInput = document.getElementById("searchInput");
const renewalsOverTimeChart = document.getElementById("renewalsOverTimeChart");
const dueForRenewalsChart = document.getElementById("dueForRenewalsChart");

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

function renderExceptions() {
  exceptionsList.innerHTML = "";

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

    exceptionsList.appendChild(div);
  });
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

renderRenewals();
renderExceptions();
renderBatches();
renderRenewalsOverTimeChart();
renderDueForRenewalsChart();
