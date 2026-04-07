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
const timeFilter = document.getElementById("timeFilter");
const renewalTypeFilter = document.getElementById("renewalTypeFilter");
const assignedToFilter = document.getElementById("assignedToFilter");
const assignedToOptions = document.getElementById("assignedToOptions");

const assignedOwners = [
  "Marijana Andrevska",
  "Laurence Abbott",
  "Katerina Danilovska",
  "Andrej Cilkov",
  "Mark Feltwell"
];

const overviewFilters = {
  time: "7 days",
  renewalType: "All",
  assignedTo: "Marijana Andrevska"
};

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
@@ -472,54 +490,108 @@ document.querySelectorAll(".filter-btn").forEach((button) => {
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

function updateAssignedOwnerOptions(query) {
  if (!assignedToOptions) return;

  const normalizedQuery = query.trim().toLowerCase();
  const filteredOwners = normalizedQuery
    ? assignedOwners.filter((owner) => owner.toLowerCase().includes(normalizedQuery))
    : assignedOwners;

  assignedToOptions.innerHTML = "";
  filteredOwners.forEach((owner) => {
    const option = document.createElement("option");
    option.value = owner;
    assignedToOptions.appendChild(option);
  });
}

if (timeFilter) {
  timeFilter.addEventListener("change", (event) => {
    overviewFilters.time = event.target.value;
  });
}

if (renewalTypeFilter) {
  renewalTypeFilter.addEventListener("change", (event) => {
    overviewFilters.renewalType = event.target.value;
  });
}

if (assignedToFilter) {
  assignedToFilter.addEventListener("input", (event) => {
    overviewFilters.assignedTo = event.target.value;
    updateAssignedOwnerOptions(event.target.value);
  });

  assignedToFilter.addEventListener("change", (event) => {
    overviewFilters.assignedTo = event.target.value || "Marijana Andrevska";
  });

  assignedToFilter.addEventListener("blur", (event) => {
    const enteredValue = event.target.value.trim();
    const exactMatch = assignedOwners.find((owner) => owner.toLowerCase() === enteredValue.toLowerCase());

    if (enteredValue && exactMatch) {
      event.target.value = exactMatch;
      overviewFilters.assignedTo = exactMatch;
    } else if (!enteredValue) {
      event.target.value = "Marijana Andrevska";
      overviewFilters.assignedTo = "Marijana Andrevska";
    }

    updateAssignedOwnerOptions(event.target.value);
  });
}

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

@@ -762,26 +834,27 @@ if (newRenewalForm) {
    const toastMessage = renewalTypeToastMessages[payload.renewalType] || renewalTypeToastMessages.Invite;
    showToast(toastMessage);
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
updateAssignedOwnerOptions(overviewFilters.assignedTo);
