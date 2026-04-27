const renewals = [
  {
    id: "RN-20601",
    customer: "Greenlight Engineering",
    broker: "Aston Brokers",
    policy: "Open Market Motor Combined",
    lob: "Motor",
    businessLine: "Open Market Motor",
    brand: "Tungsten",
    dateFrom: "01 Jun 2026",
    dateTo: "30 Jun 2026",
    renewalDate: "2026-06-30",
    insurer: "AXA",
    totalRecords: 48,
    issueStatus: "Referred",
    premium: "€148,200",
    status: "At risk",
    stage: "Invite",
    progress: "Search In Progress",
    owner: "Priya Shah",
    completion: 62,
    exceptionType: "Missing underwriting decision",
    lastUpdated: "2h ago",
    notes: "Motor renewal search is active while underwriting validates claims trend adjustments.",
    blockers: ["Underwriter approval pending", "Broker asked for quote preview"],
    actions: ["Chase underwriting decision", "Validate claims trend", "Share interim status with broker"]
  },
  {
    id: "RN-20602",
    customer: "Atlas Student Trips",
    broker: "North Coast",
    policy: "Travel Annual Multi-Trip",
    lob: "Travel",
    businessLine: "Travel",
    brand: "Voyagr",
    dateFrom: "15 May 2026",
    dateTo: "14 May 2027",
    renewalDate: "2027-05-14",
    insurer: "Allianz",
    totalRecords: 134,
    issueStatus: null,
    premium: "€82,450",
    status: "Ready",
    stage: "Invite",
    progress: "Invite Completed",
    owner: "Marta Klein",
    completion: 96,
    exceptionType: "None",
    lastUpdated: "1h ago",
    notes: "Invite completed and staged for the next outbound pack.",
    blockers: [],
    actions: ["Include in next invite batch", "Send confirmation to broker"]
  },
  {
    id: "RN-20603",
    customer: "Nova Retail Tech",
    broker: "Lumen Risk",
    policy: "Consumer Electronics Protection",
    lob: "Gadget",
    businessLine: "Gadget",
    brand: "Gadget",
    dateFrom: "01 Jul 2026",
    dateTo: "30 Jun 2027",
    renewalDate: "2027-06-30",
    insurer: "Zurich",
    totalRecords: 96,
    issueStatus: "Failed",
    premium: "€231,900",
    status: "Blocked",
    stage: "Accept",
    progress: "Accept In Progress",
    owner: "Daniel Reed",
    completion: 54,
    exceptionType: "Downstream pricing write failure",
    lastUpdated: "45m ago",
    notes: "Accept process failed on a partial write and requires replay.",
    blockers: ["Pricing response checksum mismatch"],
    actions: ["Retry accept pipeline", "Validate transformed payload", "Notify operations lead"]
  },
  {
    id: "RN-20604",
    customer: "CityCycle Distribution",
    broker: "Axis Advisory",
    policy: "Commercial Bicycle Portfolio",
    lob: "Bicycle",
    businessLine: "Bicycle",
    brand: "Bicy",
    dateFrom: "01 Aug 2026",
    dateTo: "31 Jul 2027",
    renewalDate: "2027-07-31",
    insurer: "QBE",
    totalRecords: 72,
    issueStatus: "Re-referred",
    premium: "€95,700",
    status: "Needs review",
    stage: "Invite",
    progress: "Invite In Progress",
    owner: "Elena Voss",
    completion: 58,
    exceptionType: "Repeated referral after lock contention",
    lastUpdated: "30m ago",
    notes: "Invite run reopened after repeat validation exceptions on cycle inventory.",
    blockers: ["Record set relocked during replay"],
    actions: ["Coordinate lock release window", "Replay invite segment"]
  },
  {
    id: "RN-20605",
    customer: "Pioneer Logistics",
    broker: "BridgePoint",
    policy: "Fleet Liability and Damage",
    lob: "Motor",
    businessLine: "Fleet",
    brand: "RoadSure",
    dateFrom: "10 Jun 2026",
    dateTo: "09 Jun 2027",
    renewalDate: "2027-06-09",
    insurer: "AXA",
    totalRecords: 120,
    issueStatus: "Blocked",
    premium: "€44,120",
    status: "Blocked",
    stage: "Accept",
    progress: "Search Queued",
    owner: "Tom Meyer",
    completion: 36,
    exceptionType: "Pending telematics ingestion",
    lastUpdated: "3h ago",
    notes: "Accept search queued until fleet telematics extract is complete.",
    blockers: ["Telemetry feed delayed"],
    actions: ["Escalate data ingestion", "Requeue search when feed lands"]
  },
  {
    id: "RN-20606",
    customer: "Blue Horizon Charters",
    broker: "Westford Risk",
    policy: "Yacht Hull and Liability",
    lob: "Marine",
    businessLine: "Yacht",
    brand: "MarinaPrime",
    dateFrom: "01 Sep 2026",
    dateTo: "31 Aug 2027",
    renewalDate: "2027-08-31",
    insurer: "Chubb",
    totalRecords: 28,
    issueStatus: null,
    premium: "€67,880",
    status: "In progress",
    stage: "Accept",
    progress: "Search In Progress",
    owner: "Leo Grant",
    completion: 67,
    exceptionType: "None",
    lastUpdated: "20m ago",
    notes: "Search in progress for updated marina exposure and navigation limits.",
    blockers: [],
    actions: ["Complete search", "Prepare accept recommendation"]
  },
  {
    id: "RN-20607",
    customer: "Oak & Vale Estates",
    broker: "Apex Agency",
    policy: "Household Portfolio Plus",
    lob: "Property",
    businessLine: "Open Market Household",
    brand: "Homestead",
    dateFrom: "01 Jun 2026",
    dateTo: "31 May 2027",
    renewalDate: "2027-05-31",
    insurer: "Aviva",
    totalRecords: 84,
    issueStatus: "Record locked",
    premium: "€119,430",
    status: "Needs review",
    stage: "Lapse",
    progress: "Search Queued",
    owner: "Nina Park",
    completion: 33,
    exceptionType: "Concurrent endorsement lock",
    lastUpdated: "1h ago",
    notes: "Lapse search queued but records remain locked by endorsement updates.",
    blockers: ["Lock owner is endorsements service"],
    actions: ["Clear lock", "Retry lapse search"]
  },
  {
    id: "RN-20608",
    customer: "ThrottleWorks",
    broker: "Lumen Risk",
    policy: "Open Market Motorcycle Trade",
    lob: "Motor",
    businessLine: "Open Market Motorcycle",
    brand: "TorqueCover",
    dateFrom: "20 May 2026",
    dateTo: "19 May 2027",
    renewalDate: "2027-05-19",
    insurer: "RSA",
    totalRecords: 52,
    issueStatus: "Referred",
    premium: "€88,210",
    status: "At risk",
    stage: "Lapse",
    progress: "Search In Progress",
    owner: "Marta Klein",
    completion: 47,
    exceptionType: "Manual review requested",
    lastUpdated: "50m ago",
    notes: "Search in progress while referral reviews modified rider limits.",
    blockers: ["Awaiting referral outcome"],
    actions: ["Follow referral SLA", "Prepare lapse fallback"]
  },
  {
    id: "RN-20609",
    customer: "ForgeWorks Hire",
    broker: "BridgePoint",
    policy: "Contractor Tools Combined",
    lob: "Specialty",
    businessLine: "Tools",
    brand: "Tools",
    dateFrom: "01 Oct 2026",
    dateTo: "30 Sep 2027",
    renewalDate: "2027-09-30",
    insurer: "HDI",
    totalRecords: 64,
    issueStatus: "Failed",
    premium: "€76,540",
    status: "Blocked",
    stage: "Lapse",
    progress: "Lapse In Progress",
    owner: "Priya Shah",
    completion: 59,
    exceptionType: "Lapse posting failure",
    lastUpdated: "15m ago",
    notes: "Lapse in progress stopped after posting response returned technical failure.",
    blockers: ["Posting endpoint error"],
    actions: ["Replay lapse posting", "Capture failure evidence for platform team"]
  },
  {
    id: "RN-20610",
    customer: "Evergreen Stays",
    broker: "North Coast",
    policy: "Hotel Property and Liability",
    lob: "Hospitality",
    businessLine: "Hotel",
    brand: "StayGuard",
    dateFrom: "01 Nov 2026",
    dateTo: "31 Oct 2027",
    renewalDate: "2027-10-31",
    insurer: "AXA",
    totalRecords: 112,
    issueStatus: null,
    premium: "€132,640",
    status: "Ready",
    stage: "Lapse",
    progress: "Lapse Completed",
    owner: "Daniel Reed",
    completion: 100,
    exceptionType: "None",
    lastUpdated: "30m ago",
    notes: "Lapse completed with downstream confirmations received.",
    blockers: [],
    actions: ["Archive renewal case", "Notify servicing team"]
  },
  {
    id: "RN-20611",
    customer: "Cedar Block Holdings",
    broker: "Axis Advisory",
    policy: "Property Owners Composite",
    lob: "Property",
    businessLine: "Property Owners",
    brand: "Landmark",
    dateFrom: "05 Jun 2026",
    dateTo: "04 Jun 2027",
    renewalDate: "2027-06-04",
    insurer: "Zurich",
    totalRecords: 140,
    issueStatus: "Blocked",
    premium: "€172,110",
    status: "Needs review",
    stage: "Invite",
    progress: "Search Queued",
    owner: "Tom Meyer",
    completion: 29,
    exceptionType: "Valuation attachment missing",
    lastUpdated: "4h ago",
    notes: "Invite search queued pending updated survey valuation files.",
    blockers: ["Missing valuation schedule"],
    actions: ["Request valuation pack", "Resume queue once uploaded"]
  }
];


const batches = [
  { id: "B-2403-A", scheduled: "Tonight, 23:30", status: "Scheduled", ready: 128, blocked: 7, completed: 0 },
  { id: "B-2403-M", scheduled: "Tomorrow, 09:00", status: "Queued", ready: 52, blocked: 3, completed: 0 },
  { id: "B-2402-Z", scheduled: "Yesterday, 23:30", status: "Completed", ready: 0, blocked: 0, completed: 143 }
];


const referralRecords = [
  {
    id: "REF-9012",
    policyId: "POL-774119",
    client: "Islands",
    policy: "Fleet Prime",
    reason: "Accept issue",
    renewalDate: "2026-04-08",
    assignedTo: "Marijana Andrevska",
    status: "Open",
    renewalType: "Accept",
    source: "Overnight batch",
    batchId: "RB-4801",
    priority: "High",
    nextAction: "Validate accept output",
    referralType: "Re-referral",
    whyReferred: "Accept output generated with 19 exceptions and one missing premium row.",
    rereferralContext: "Returned to referral after prior intervention in the same overnight cycle.",
    notes: ["Broker asked for status by noon.", "Output contains duplicate policy segment."],
    timeline: ["08:24 UTC referred from RB-4801", "08:35 UTC ownership assigned", "09:10 UTC triage started"],
    activity: ["Case opened in operations queue", "Customer team notified in channel #renewals-ops"],
    priorInterventions: ["07:05 UTC - Case reviewed and manually corrected", "07:42 UTC - Accept process retried", "08:24 UTC - Re-referred after output validation failed"],
    allowsLapse: false,
    allowsRetry: true,
    allowsRerun: true
  },
  {
    id: "REF-9018",
    policyId: "POL-998221",
    client: "Greenlight",
    policy: "Commercial Property",
    reason: "Lapse / manual review",
    renewalDate: "2026-04-07",
    assignedTo: "Laurence Abbott",
    status: "In progress",
    renewalType: "Lapse",
    source: "Manual prep",
    batchId: null,
    priority: "High",
    nextAction: "Confirm lapse instruction",
    referralType: "Referral",
    whyReferred: "Manual lapse request entered but outstanding payment reconciliation was detected.",
    notes: ["Client requested manual override if payment clears.", "Awaiting finance confirmation."],
    timeline: ["2026-04-06 17:02 UTC referral created", "2026-04-07 08:15 UTC moved to in progress"],
    activity: ["Finance ticket FIN-2213 linked", "Manual review checklist started"],
    priorInterventions: [],
    allowsLapse: true,
    allowsRetry: false,
    allowsRerun: false
  },
  {
    id: "REF-9024",
    policyId: "POL-442015",
    client: "Islands",
    policy: "Household Plus",
    reason: "Record locked",
    renewalDate: "2026-04-10",
    assignedTo: "All",
    status: "Open",
    renewalType: "Invite",
    source: "System generated",
    batchId: "RB-4802",
    priority: "Medium",
    nextAction: "Unlock and replay",
    referralType: "Re-referral",
    whyReferred: "Policy locked by concurrent endorsement update during invite run.",
    rereferralContext: "Previously reviewed and referred again after lock persisted on replay.",
    notes: ["No customer impact yet."],
    timeline: ["08:17 UTC lock conflict detected", "08:18 UTC auto-refer created"],
    activity: ["Lock owner identified as endorsements service"],
    priorInterventions: ["06:40 UTC - Lock manually cleared", "07:00 UTC - Invite run replayed", "08:17 UTC - Record relocked during processing"],
    allowsLapse: false,
    allowsRetry: true,
    allowsRerun: true
  },
  {
    id: "REF-9030",
    policyId: "POL-118201",
    client: "Greenlight",
    policy: "SME Liability",
    reason: "Missing data",
    renewalDate: "2026-04-12",
    assignedTo: "Katerina Danilovska",
    status: "Open",
    renewalType: "Invite",
    source: "Manual prep",
    batchId: null,
    priority: "Medium",
    nextAction: "Request turnover update",
    referralType: "Referral",
    whyReferred: "Mandatory turnover field missing from renewal intake record.",
    notes: ["Advisor can provide data same day."],
    timeline: ["09:05 UTC manual prep flagged missing turnover"],
    activity: ["Reminder sent to advisor inbox"],
    priorInterventions: [],
    allowsLapse: false,
    allowsRetry: false,
    allowsRerun: false
  },
  {
    id: "REF-9033",
    policyId: "POL-871105",
    client: "Harbor Group",
    policy: "Cyber Shield",
    reason: "Payment / downstream issue",
    renewalDate: "2026-04-08",
    assignedTo: "Andrej Cilkov",
    status: "Resolved",
    renewalType: "Accept",
    source: "System generated",
    batchId: "RB-4798",
    priority: "Low",
    nextAction: "Monitor post-fix",
    referralType: "Referral",
    whyReferred: "Downstream payment confirmation timed out during accept confirmation.",
    notes: ["Recovered after retry."],
    timeline: ["01:39 UTC timeout occurred", "02:01 UTC retry completed", "02:15 UTC resolved"],
    activity: ["Payment service incident INC-0091 closed"],
    priorInterventions: [],
    allowsLapse: false,
    allowsRetry: true,
    allowsRerun: false
  },
  {
    id: "REF-9039",
    policyId: "POL-660714",
    client: "Blue Pine",
    policy: "Fleet Standard",
    reason: "Invite issue",
    renewalDate: "2026-04-09",
    assignedTo: "Mark Feltwell",
    status: "Open",
    renewalType: "Invite",
    source: "Overnight batch",
    batchId: "RB-4802",
    priority: "High",
    nextAction: "Re-run invite batch segment",
    referralType: "Re-referral",
    whyReferred: "Invite file produced with malformed policy key for one segment.",
    rereferralContext: "Case returned after earlier manual fix did not hold in downstream transform.",
    notes: ["Batch anomaly appears isolated to one source file."],
    timeline: ["08:16 UTC anomaly detected", "08:22 UTC referred"],
    activity: ["Data engineering asked to review transform logs"],
    priorInterventions: ["06:12 UTC - Manual policy key correction", "06:20 UTC - Segment retried", "08:16 UTC - Malformed key detected again"],
    allowsLapse: false,
    allowsRetry: true,
    allowsRerun: true
  }
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

const stageProgressOptions = {
  Invite: ["Search Queued", "Search In Progress", "Invite In Progress", "Invite Completed"],
  Accept: ["Search Queued", "Search In Progress", "Accept In Progress", "Accept Completed"],
  Lapse: ["Search Queued", "Search In Progress", "Lapse In Progress", "Lapse Completed"]
};

const renewalQueueFilters = {
  stage: "",
  progress: ""
};

const renewalQueueFilterDraft = {
  stage: "",
  progress: ""
};

let currentSearch = "";
let selectedRenewalId = null;

const routeToView = {
  overview: "overviewView",
  "start-my-day": "startMyDayView",
  "batch-health": "batchHealthView",
  reports: "reportsView",
  referrals: "referralsView"
};

function normalizeRouteName(routeName) {
  const rawRoute = (routeName || "").toString().trim();
  if (!rawRoute) return "overview";

  const aliasMap = {
    overview: "overview",
    reports: "reports",
    referrals: "referrals",
    "start-my-day": "start-my-day",
    startMyDay: "start-my-day",
    startmyday: "start-my-day",
    "batch-health": "batch-health",
    batchHealth: "batch-health",
    batchhealth: "batch-health"
  };

  return aliasMap[rawRoute] || aliasMap[rawRoute.toLowerCase()] || "overview";
}

const renewalList = document.getElementById("renewalList");
const detailContent = document.getElementById("detailContent");
const batchList = document.getElementById("batchList");
const referralQueueTableWrap = document.getElementById("referralQueueTableWrap");
const referralDetailContent = document.getElementById("referralDetailContent");
const referralsKpiGrid = document.getElementById("referralsKpiGrid");
const refBatchGrouped = document.getElementById("refBatchGrouped");
const refReasonGrouped = document.getElementById("refReasonGrouped");
const refBatchSnapshot = document.getElementById("refBatchSnapshot");
const refReasonBreakdown = document.getElementById("refReasonBreakdown");
const refReReferralModule = document.getElementById("refReReferralModule");
const searchInput = document.getElementById("searchInput");
const renewalsOverTimeChart = document.getElementById("renewalsOverTimeChart");
const dueForRenewalsChart = document.getElementById("dueForRenewalsChart");
const newRenewalBtn = document.getElementById("newRenewalBtn");
const timeFilter = document.getElementById("timeFilter");
const renewalTypeFilter = document.getElementById("renewalTypeFilter");
const assignedToFilter = document.getElementById("assignedToFilter");
const assignedToOptions = document.getElementById("assignedToOptions");
const renewalQueueFilterWrap = document.getElementById("renewalQueueFilterWrap");
const renewalQueueFilterBtn = document.getElementById("renewalQueueFilterBtn");
const renewalQueueFilterPanel = document.getElementById("renewalQueueFilterPanel");
if (renewalQueueFilterPanel) {
  renewalQueueFilterPanel.hidden = true;
  renewalQueueFilterPanel.classList.remove("is-open");
  renewalQueueFilterPanel.setAttribute("aria-hidden", "true");
}
const queueStageFilter = document.getElementById("queueStageFilter");
const queueProgressFilter = document.getElementById("queueProgressFilter");
const queueFilterApplyBtn = document.getElementById("queueFilterApplyBtn");
const queueFilterClearBtn = document.getElementById("queueFilterClearBtn");
const queueAppliedFilters = document.getElementById("queueAppliedFilters");
const queueFilterActiveDot = document.getElementById("queueFilterActiveDot");
const morningBriefingSummary = document.getElementById("morningBriefingSummary");
const startMyDayBtn = document.getElementById("startMyDayBtn");
const resetDayViewBtn = document.getElementById("resetDayViewBtn");
const startDayStatus = document.getElementById("startDayStatus");
const backToOverviewBtn = document.getElementById("backToOverviewBtn");
const refreshPrioritiesBtn = document.getElementById("refreshPrioritiesBtn");
const startDaySummaryLines = document.getElementById("startDaySummaryLines");
const healthyRenewalsSummary = document.getElementById("healthyRenewalsSummary");

const startDayPriorities = [
  {
    renewalsNeedAttention: 18,
    reReferrals: 5,
    blockedAccept: 2,
    batchesNeedReview: 1,
    healthy: 42
  },
  {
    renewalsNeedAttention: 17,
    reReferrals: 4,
    blockedAccept: 3,
    batchesNeedReview: 1,
    healthy: 43
  },
  {
    renewalsNeedAttention: 19,
    reReferrals: 6,
    blockedAccept: 2,
    batchesNeedReview: 2,
    healthy: 40
  }
];

let activeStartDaySnapshot = 0;
let openStartDayMenuId = null;


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
let selectedReferralId = referralRecords[0]?.id || null;
let openReferralMenuId = null;
let activeReferralView = "queue";

const referralFilters = {
  time: "7 days",
  status: "Open",
  assignedTo: "All",
  renewalType: "All",
  priority: "All"
};

const timeContextLabelMap = {
  "7 days": "Last 7 days",
  "14 days": "Last 14 days",
  Month: "Last month",
  "3 months": "Last 3 months",
  "6 months": "Last 6 months",
  "12 months": "Last 12 months"
};

const assignedOwners = ["Marijana Andrevska", "Laurence Abbott", "Katerina Danilovska", "Andrej Cilkov", "Mark Feltwell"];
const overviewFilters = { time: "12 months", renewalType: "All", assignedTo: "Marijana Andrevska" };
let isPriorityDayMode = false;

const renewalsOverTimeMonthlyData = [
  { label: "Jan", value: 186 },
  { label: "Feb", value: 174 },
  { label: "Mar", value: 201 },
  { label: "Apr", value: 224 },
  { label: "May", value: 238 },
  { label: "Jun", value: 231 },
  { label: "Jul", value: 247 },
  { label: "Aug", value: 255 },
  { label: "Sep", value: 241 },
  { label: "Oct", value: 267 },
  { label: "Nov", value: 259 },
  { label: "Dec", value: 276 }
];

function getBadgeClass(status) {
  if (status === "Blocked" || status === "Failed" || status === "No output detected") return "blocked";
  if (status === "At risk" || status === "Completed with exceptions") return "atrisk";
  if (status === "Needs review") return "review";
  if (status === "Ready" || status === "Completed") return "ready";
  if (status === "In progress") return "quoted";
  return "";
}

function getIssuePillClass(issueStatus) {
  if (!issueStatus) return "";
  if (issueStatus === "Failed") return "failed";
  if (issueStatus === "Blocked") return "blocked";
  if (issueStatus === "Referred") return "review";
  if (issueStatus === "Re-referred") return "atrisk";
  if (issueStatus === "Record locked") return "quoted";
  return "warning";
}

function getRenewalPriorityScore(item) {
  let score = 0;
  const issue = (item.issueStatus || "").toLowerCase();
  const status = (item.status || "").toLowerCase();

  if (issue.includes("re-referred")) score += 6;
  if (issue.includes("record locked")) score += 5;
  if (issue.includes("failed")) score += 5;
  if (issue.includes("blocked")) score += 4;
  if (issue.includes("referred")) score += 3;
  if (status.includes("blocked")) score += 3;
  if (status.includes("at risk")) score += 2;
  if (status.includes("needs review")) score += 2;

  return score;
}

function isPriorityRenewal(item) {
  return getRenewalPriorityScore(item) >= 4;
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
  const chartData = renewalsOverTimeMonthlyData.map((entry) => ({ ...entry }));
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

function renderMorningBriefing() {
  if (!morningBriefingSummary) return;
  const overnightCompleted = 3;
  const needsAttention = renewals.filter((item) => isPriorityRenewal(item)).length;
  const rereferrals = renewals.filter((item) => item.issueStatus === "Re-referred").length;
  const blockedAccept = renewals.filter((item) => item.stage === "Accept" && (item.status === "Blocked" || item.issueStatus === "Blocked" || item.issueStatus === "Failed")).length;

  morningBriefingSummary.innerHTML = `
    <li>${overnightCompleted} batches completed overnight.</li>
    <li>${needsAttention} renewals need attention.</li>
    <li>${rereferrals} re-referrals are higher than usual.</li>
    <li>${blockedAccept} accept cases are blocked.</li>
  `;
}

function renderRenewals() {
  if (!renewalList) return;
  renewalList.innerHTML = "";

  let filtered = renewals.filter((item) => {
    const matchesStage = !renewalQueueFilters.stage || item.stage === renewalQueueFilters.stage;
    const matchesProgress = !renewalQueueFilters.progress || item.progress === renewalQueueFilters.progress;
    const text = `${item.businessLine} ${item.brand} ${item.insurer} ${item.stage} ${item.progress} ${item.status}`.toLowerCase();
    const matchesSearch = text.includes(currentSearch.toLowerCase());
    return matchesStage && matchesProgress && matchesSearch;
  });

  if (isPriorityDayMode) {
    filtered = [...filtered].sort((a, b) => getRenewalPriorityScore(b) - getRenewalPriorityScore(a) || a.id.localeCompare(b.id));
  }

  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.className = "renewal-item";
    if (item.id === selectedRenewalId) div.classList.add("active");
    if (isPriorityDayMode && isPriorityRenewal(item)) div.classList.add("priority-focus");

    div.innerHTML = `
      <div class="row-top renewal-card-top">
        <div class="renewal-core-grid">
          <div class="renewal-core-cell">
            <span class="renewal-label">Business line:</span>
            <span class="renewal-business-line">${item.businessLine}</span>
          </div>
          <div class="renewal-core-cell">
            <span class="renewal-label">Brand:</span>
            <span class="renewal-brand">${item.brand}</span>
          </div>
        </div>
        <span class="badge ${getBadgeClass(item.status)}">${item.status}</span>
      </div>
      <div class="renewal-detail-grid">
        <p class="renewal-detail-item"><span class="renewal-label">Date range:</span><span class="renewal-value">${item.dateFrom} - ${item.dateTo}</span></p>
        <p class="renewal-detail-item"><span class="renewal-label">Stage:</span><span class="renewal-value">${item.stage}</span></p>
        <p class="renewal-detail-item"><span class="renewal-label">Progress:</span><span class="renewal-value">${item.progress}</span></p>
        <p class="renewal-detail-item"><span class="renewal-label">Insurer:</span><span class="renewal-value">${item.insurer}</span></p>
        <p class="renewal-detail-item"><span class="renewal-label">Total records:</span><span class="renewal-value">${item.totalRecords}</span></p>
      </div>
      ${item.issueStatus ? `<div class="renewal-issue-wrap"><span class="badge issue-pill ${getIssuePillClass(item.issueStatus)}">${item.issueStatus}</span></div>` : ""}
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
      <h2>${item.businessLine}</h2>
      <p class="muted">${item.brand} • ${item.customer} • ${item.id}</p>
    </div>
    <div class="detail-section">
      <h4>Status</h4>
      <span class="badge ${getBadgeClass(item.status)}">${item.status}</span>
    </div>
    <div class="detail-section">
      <h4>Renewal summary</h4>
      <p><strong>Date range:</strong> ${item.dateFrom} - ${item.dateTo}</p>
      <p><strong>Insurer:</strong> ${item.insurer}</p>
      <p><strong>Total records:</strong> ${item.totalRecords}</p>
      <p><strong>Owner:</strong> ${item.owner}</p>
      <p><strong>Premium:</strong> ${item.premium}</p>
      <p><strong>Stage:</strong> ${item.stage}</p>
      <p><strong>Progress:</strong> ${item.progress}</p>
      <p><strong>Issue status:</strong> ${item.issueStatus || "None"}</p>
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

function getReferralDueState(dateString) {
  const diff = daysUntil(dateString);
  if (diff < 0) return "Overdue";
  if (diff === 0) return "Due today";
  if (diff <= 3) return "Due in 3 days";
  if (diff <= 7) return "Due this week";
  return "Future";
}

function getReferralPriorityClass(priority) {
  return `priority-${priority.toLowerCase()}`;
}

function getFilteredReferrals() {
  const rangeDaysMap = { "7 days": 7, "14 days": 14, Month: 30, "3 months": 90, "6 months": 180, "12 months": 365 };
  const rangeDays = rangeDaysMap[referralFilters.time] || 7;

  return referralRecords.filter((item) => {
    const statusMatch = referralFilters.status === "All" || item.status === referralFilters.status;
    const assignedMatch = referralFilters.assignedTo === "All" || item.assignedTo === referralFilters.assignedTo;
    const typeMatch = referralFilters.renewalType === "All" || item.renewalType === referralFilters.renewalType;
    const priorityMatch = referralFilters.priority === "All" || item.priority === referralFilters.priority;
    const days = Math.abs(daysUntil(item.renewalDate));
    const timeMatch = days <= rangeDays;
    return statusMatch && assignedMatch && typeMatch && priorityMatch && timeMatch;
  });
}

function getReferralMenuActions(item) {
  const actions = ["Assign owner", "Open policy", "Resolve referral", "Add note"];
  if (item.batchId) actions.splice(2, 0, "View batch");
  if (item.allowsLapse) actions.push("Lapse");
  if (item.allowsRetry) actions.push("Retry");
  if (item.allowsRerun) actions.push("Re-run");
  return actions;
}

function renderReferralKpis(filtered) {
  if (!referralsKpiGrid) return;
  const reReferralCount = filtered.filter((i) => i.referralType === "Re-referral").length;
  const cards = [
    { key: "open-referrals", label: "Open referrals", value: filtered.filter((i) => i.status === "Open").length, meta: "Needs triage" },
    { key: "re-referrals", label: "Re-referrals", value: reReferralCount, meta: "Repeat manual handling", accent: true },
    { key: "due-today", label: "Due today", value: filtered.filter((i) => getReferralDueState(i.renewalDate) === "Due today").length, meta: "Operational urgency" },
    { key: "unassigned", label: "Unassigned", value: filtered.filter((i) => i.assignedTo === "All").length, meta: "Ownership required" }
  ];

  referralsKpiGrid.innerHTML = cards
    .map(
      (card) => `<div class="kpi-card referrals-kpi-card ${card.accent ? "re-referral-kpi" : ""}"><button class="text-action-btn ref-view-more" data-ref-view-more="${card.key}" type="button">View more</button><p class="kpi-label">${card.label}</p><h2>${card.value}</h2><span class="${card.accent ? "referrals-kpi-context" : "kpi-meta"}">${card.meta}</span></div>`
    )
    .join("");
}

function renderReferralQueue(filtered) {
  if (!referralQueueTableWrap) return;
  if (!filtered.length) {
    referralQueueTableWrap.innerHTML = '<p class="empty-state">No referrals match current filters.</p>';
    renderReferralDetail(null);
    return;
  }

  if (!filtered.some((r) => r.id === selectedReferralId)) selectedReferralId = filtered[0].id;

  referralQueueTableWrap.innerHTML = `<table class="ref-queue-table"><thead><tr>
      <th>Policy / client</th><th>Reason</th><th>Renewal date</th><th>Assigned to</th><th>Status</th><th>Renewal type</th><th>Priority</th><th>Next action</th><th>Referral type</th><th>Options</th>
    </tr></thead><tbody>
      ${filtered
        .map((item) => {
          const actions = getReferralMenuActions(item)
            .map((a) => `<button type="button" data-ref-menu-action="${a}" data-ref-id="${item.id}" role="menuitem">${a}</button>`)
            .join("");
          return `<tr class="ref-queue-row ${item.id === selectedReferralId ? "active" : ""}" data-referral-row="${item.id}">
            <td><strong>${item.policyId}</strong><div class="row-subtitle">${item.client} · ${item.policy}</div></td>
            <td>${item.reason}</td>
            <td>${item.renewalDate}</td>
            <td>${item.assignedTo === "All" ? "Unassigned" : item.assignedTo}</td>
            <td><span class="badge ${getBadgeClass(item.status)}">${item.status}</span></td>
            <td>${item.renewalType}</td>
            <td><span class="priority-pill ${getReferralPriorityClass(item.priority)}">${item.priority}</span></td>
            <td>${item.nextAction}</td>
            <td><span class="referral-type-pill ${item.referralType === "Re-referral" ? "rereferral" : ""}">${item.referralType}</span></td>
            <td class="options-cell"><div class="row-options" data-ref-menu-container="${item.id}"><button class="options-trigger" data-ref-menu-trigger="${item.id}" type="button" aria-expanded="${openReferralMenuId === item.id}">⋯</button><div class="row-options-menu ${openReferralMenuId === item.id ? "open" : ""}" data-ref-menu="${item.id}" role="menu">${actions}</div></div></td>
          </tr>`;
        })
        .join("")}
    </tbody></table>`;

  renderReferralDetail(filtered.find((r) => r.id === selectedReferralId) || null);
}

function renderReferralDetail(item) {
  if (!referralDetailContent) return;
  if (!item) {
    referralDetailContent.innerHTML = '<p class="empty-state">Select a referral to see details.</p>';
    return;
  }

  const reReferralBlock =
    item.referralType === "Re-referral"
      ? `<div class="detail-block rereferral-highlight"><h4>Returned after intervention</h4><p>${item.rereferralContext || "Previously reviewed and referred again."}</p><ul class="detail-list">${(item.priorInterventions || []).map((h) => `<li>${h}</li>`).join("")}</ul></div>`
      : "";

  referralDetailContent.innerHTML = `
    <div class="detail-block"><h4>Referral summary</h4><p><strong>${item.id}</strong> · ${item.client} · ${item.policyId}</p><p class="row-subtitle">Status: ${item.status} · Priority: ${item.priority}</p></div>
    <div class="detail-block"><h4>Referral type</h4><p><span class="referral-type-pill ${item.referralType === "Re-referral" ? "rereferral" : ""}">${item.referralType}</span></p></div>
    ${reReferralBlock}
    <div class="detail-block"><h4>Why referred</h4><p>${item.whyReferred}</p></div>
    <div class="detail-block"><h4>Policy / renewal details</h4><p><strong>Renewal type:</strong> ${item.renewalType}</p><p><strong>Renewal date:</strong> ${item.renewalDate}</p><p><strong>Assigned to:</strong> ${item.assignedTo === "All" ? "Unassigned" : item.assignedTo}</p></div>
    <div class="detail-block"><h4>Batch / source context</h4><p><strong>Source:</strong> ${item.source}</p><p><strong>Batch:</strong> ${item.batchId || "No batch context"}</p></div>
    <div class="detail-block"><h4>Timeline / audit trail</h4><ul class="detail-list">${item.timeline.map((t) => `<li>${t}</li>`).join("")}</ul></div>
    <div class="detail-block"><h4>Notes</h4><ul class="detail-list">${item.notes.map((n) => `<li>${n}</li>`).join("")}</ul></div>
    <div class="detail-block"><h4>Activity / history</h4><ul class="detail-list">${item.activity.map((a) => `<li>${a}</li>`).join("")}</ul></div>`;
}

function renderReferralsGroupedViews(filtered) {
  if (refBatchGrouped) {
    const groupedByBatch = filtered.reduce((acc, item) => {
      const key = item.batchId || "No batch";
      (acc[key] ||= []).push(item);
      return acc;
    }, {});

    const rows = Object.entries(groupedByBatch)
      .map(([batchId, items]) => `<tr><td>${batchId}</td><td>${items.length}</td><td>${items.filter((i) => i.referralType === "Re-referral").length}</td><td>${items.filter((i) => i.status === "Open").length}</td><td>${items.map((i) => i.client).filter((v, i, arr) => arr.indexOf(v) === i).join(", ")}</td></tr>`)
      .join("");
    refBatchGrouped.innerHTML = `<table class="data-table"><thead><tr><th>Batch</th><th>Referrals</th><th>Re-referrals</th><th>Open</th><th>Clients</th></tr></thead><tbody>${rows || '<tr><td colspan="5" class="muted">No referrals.</td></tr>'}</tbody></table>`;
  }

  if (refReasonGrouped) {
    const groupedByReason = filtered.reduce((acc, item) => {
      acc[item.reason] = (acc[item.reason] || 0) + 1;
      return acc;
    }, {});
    const rows = Object.entries(groupedByReason)
      .map(([reason, count]) => `<div class="exception-row"><div><div class="row-subtitle">${reason}</div><div class="exception-track"><div class="exception-fill" style="width:${Math.min((count / filtered.length) * 100, 100)}%"></div></div></div><strong>${count}</strong></div>`)
      .join("");
    refReasonGrouped.innerHTML = rows || '<p class="empty-state">No reasons to display.</p>';
  }
}

function renderReferralSupportModules(filtered) {
  if (refBatchSnapshot) {
    const batchRows = [
      { id: "RB-4802", type: "Invite", status: "Completed with exceptions", owner: "Night Ops", output: "Partial", oldestDue: "Overdue" },
      { id: "RB-4801", type: "Accept", status: "Completed", owner: "Marijana Andrevska", output: "Detected", oldestDue: "Due today" },
      { id: "RB-4798", type: "Invite", status: "Failed", owner: "Platform Ops", output: "Missing", oldestDue: "Overdue" }
    ];

    refBatchSnapshot.innerHTML = `<table class="data-table"><thead><tr><th>Batch ID</th><th>Type</th><th>Referred count</th><th>Re-referred count</th><th>Status</th><th>Output detected</th><th>Owner</th><th>Oldest due item</th></tr></thead><tbody>${batchRows
      .map((row) => {
        const batchItems = filtered.filter((f) => (f.batchId || "No batch") === row.id);
        return `<tr><td>${row.id}</td><td>${row.type}</td><td>${batchItems.length}</td><td>${batchItems.filter((f) => f.referralType === "Re-referral").length}</td><td>${row.status}</td><td>${row.output}</td><td>${row.owner}</td><td>${row.oldestDue}</td></tr>`;
      })
      .join("")}</tbody></table>`;
  }

  if (refReasonBreakdown) {
    const reasons = ["Invite issue", "Accept issue", "Lapse / manual review", "Record locked", "Missing data", "Payment / downstream issue", "Other"];
    const max = Math.max(...reasons.map((r) => filtered.filter((f) => f.reason === r).length), 1);
    refReasonBreakdown.innerHTML = reasons
      .map((reason) => {
        const count = filtered.filter((f) => f.reason === reason).length;
        return `<div class="reason-breakdown-item"><div><div class="row-subtitle">${reason}</div><div class="reason-breakdown-track"><div class="reason-breakdown-fill" style="width:${(count / max) * 100}%"></div></div></div><strong>${count}</strong></div>`;
      })
      .join("");
  }

  if (refReReferralModule) {
    const total = filtered.length || 1;
    const reReferrals = filtered.filter((item) => item.referralType === "Re-referral");
    const percent = Math.round((reReferrals.length / total) * 100);
    const topReason = reReferrals.reduce((acc, item) => {
      acc[item.reason] = (acc[item.reason] || 0) + 1;
      return acc;
    }, {});
    const topReasonLabel = Object.entries(topReason).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";
    const topType = Object.entries(
      reReferrals.reduce((acc, item) => {
        acc[item.renewalType] = (acc[item.renewalType] || 0) + 1;
        return acc;
      }, {})
    ).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";
    const topBatch = Object.entries(
      reReferrals.reduce((acc, item) => {
        const key = item.batchId || "Manual prep";
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {})
    ).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";

    refReReferralModule.innerHTML = `
      <div class="rereferral-stat"><div class="label">Total re-referrals</div><div class="value">${reReferrals.length}</div></div>
      <div class="rereferral-stat"><div class="label">Share of all referrals</div><div class="value">${percent}%</div></div>
      <div class="rereferral-stat"><div class="label">Top reason</div><div class="value">${topReasonLabel}</div></div>
      <div class="rereferral-stat"><div class="label">Most affected renewal type</div><div class="value">${topType}</div></div>
      <div class="rereferral-stat"><div class="label">Most affected batch / process</div><div class="value">${topBatch}</div></div>
      <div class="rereferral-stat"><div class="label">Operational context</div><div>Re-referrals indicate cases that have returned to manual review after prior intervention.</div></div>
    `;
  }
}

function renderReferralsWorkspace() {

  const filtered = getFilteredReferrals();
  renderReferralKpis(filtered);
  renderReferralQueue(filtered);
  renderReferralsGroupedViews(filtered);
  renderReferralSupportModules(filtered);
}

function renderReferrals() {
  renderReferralsWorkspace();
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
  const normalizedRoute = normalizeRouteName(routeName);
  const viewId = routeToView[normalizedRoute] || routeToView.overview;
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.remove("active"));

  const viewEl = document.getElementById(viewId);
  const navEl =
    document.querySelector(`.nav-item[data-route="${normalizedRoute}"]`) ||
    document.querySelector(`.nav-item[data-route="${routeName}"]`) ||
    document.querySelector('.nav-item[data-route="overview"]');
  if (viewEl) viewEl.classList.add("active-view");
  if (navEl) navEl.classList.add("active");

  if (normalizedRoute === "reports") {
    renderReportsView();
  }
  if (normalizedRoute === "referrals") {
    renderReferralsWorkspace();
  }
}

function getRouteFromHash() {
  const raw = location.hash.replace("#", "").trim();
  return normalizeRouteName(raw);
}

function setRoute(routeName) {
  const route = normalizeRouteName(routeName);
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

function setQueueFilterPanelOpen(isOpen) {
  if (!renewalQueueFilterPanel || !renewalQueueFilterBtn) return;
  renewalQueueFilterPanel.hidden = !isOpen;
  renewalQueueFilterPanel.classList.toggle("is-open", isOpen);
  renewalQueueFilterPanel.setAttribute("aria-hidden", String(!isOpen));
  renewalQueueFilterBtn.setAttribute("aria-expanded", String(isOpen));
}

function syncProgressOptionsForStage() {
  if (!queueProgressFilter) return;
  const selectedStage = renewalQueueFilterDraft.stage;
  const previousProgress = renewalQueueFilterDraft.progress;
  const options = selectedStage ? stageProgressOptions[selectedStage] || [] : [];

  queueProgressFilter.innerHTML = '<option value="">All progress states</option>';
  options.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    queueProgressFilter.appendChild(option);
  });

  if (previousProgress && options.includes(previousProgress)) {
    queueProgressFilter.value = previousProgress;
  } else {
    renewalQueueFilterDraft.progress = "";
    queueProgressFilter.value = "";
  }

  queueProgressFilter.disabled = !selectedStage;
}

function renderAppliedQueueFilters() {
  if (!queueAppliedFilters || !renewalQueueFilterBtn || !queueFilterActiveDot) return;

  const pills = [];
  if (renewalQueueFilters.stage) {
    pills.push({ key: "stage", value: renewalQueueFilters.stage });
  }
  if (renewalQueueFilters.progress) {
    pills.push({ key: "progress", value: renewalQueueFilters.progress });
  }

  renewalQueueFilterBtn.classList.toggle("has-active-filters", pills.length > 0);
  queueFilterActiveDot.hidden = pills.length === 0;

  queueAppliedFilters.innerHTML = pills
    .map((pill) => `<span class="queue-applied-pill">${pill.value}<button type="button" data-remove-queue-filter="${pill.key}" aria-label="Remove ${pill.key} filter">×</button></span>`)
    .join("");
}

function initializeRenewalQueueFilters() {
  if (!queueStageFilter || !queueProgressFilter) return;
  renewalQueueFilterDraft.stage = renewalQueueFilters.stage;
  renewalQueueFilterDraft.progress = renewalQueueFilters.progress;
  queueStageFilter.value = renewalQueueFilterDraft.stage;
  syncProgressOptionsForStage();
  if (renewalQueueFilterDraft.progress) queueProgressFilter.value = renewalQueueFilterDraft.progress;
  setQueueFilterPanelOpen(false);
  renderAppliedQueueFilters();
}

function setStartDayStatus(message) {
  if (!startDayStatus) return;
  startDayStatus.textContent = message;
}
function renderStartDaySummary(snapshotIndex = activeStartDaySnapshot) {
  if (!startDaySummaryLines || !healthyRenewalsSummary) return;
  const snapshot = startDayPriorities[snapshotIndex] || startDayPriorities[0];
  startDaySummaryLines.innerHTML = `
    <li>${snapshot.renewalsNeedAttention} renewals need attention today</li>
    <li>${snapshot.reReferrals} re-referrals are the highest priority</li>
    <li>${snapshot.blockedAccept} accept cases are blocked</li>
    <li>${snapshot.batchesNeedReview} batch needs review due to elevated exceptions</li>
  `;
  healthyRenewalsSummary.textContent = `${snapshot.healthy} renewals are currently progressing as expected across Invite, Accept, and Lapse stages.`;
}

function handleStartDayAction(action) {
  if (!action) return;
  const actionMap = {
    "open-referral-queue": () => setRoute("referrals"),
    "open-related-referrals": () => setRoute("referrals"),
    "back-to-overview": () => setRoute("overview"),
    "open-referral": () => setRoute("referrals"),
    "view-healthy-renewals": () => console.log("Mock action: View all healthy renewals"),
    "view-batch": () => console.log("Mock action: View batch"),
    "open-policy": () => console.log("Mock action: Open policy"),
    "resolve-issue": () => console.log("Mock action: Resolve issue"),
    "retry": () => console.log("Mock action: Retry workflow"),
    "assign-owner": () => console.log("Mock action: Assign owner"),
    "open-renewal": () => console.log("Mock action: Open renewal")
  };

  const handler = actionMap[action] || (() => console.log(`Mock action: ${action}`));
  handler();
}


document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    setRoute(button.dataset.route);
  });
});

renewalQueueFilterBtn?.addEventListener("click", (event) => {
  event.stopPropagation();
  const shouldOpen = renewalQueueFilterPanel?.hidden;
  if (shouldOpen) {
    renewalQueueFilterDraft.stage = renewalQueueFilters.stage;
    renewalQueueFilterDraft.progress = renewalQueueFilters.progress;
    if (queueStageFilter) queueStageFilter.value = renewalQueueFilterDraft.stage;
    syncProgressOptionsForStage();
    if (queueProgressFilter) queueProgressFilter.value = renewalQueueFilterDraft.progress;
  }
  setQueueFilterPanelOpen(Boolean(shouldOpen));
});

queueStageFilter?.addEventListener("change", (event) => {
  renewalQueueFilterDraft.stage = event.target.value;
  renewalQueueFilterDraft.progress = "";
  syncProgressOptionsForStage();
});

queueProgressFilter?.addEventListener("change", (event) => {
  renewalQueueFilterDraft.progress = event.target.value;
});

queueFilterApplyBtn?.addEventListener("click", () => {
  renewalQueueFilters.stage = renewalQueueFilterDraft.stage;
  renewalQueueFilters.progress = renewalQueueFilterDraft.progress;
  renderAppliedQueueFilters();
  renderRenewals();
  setQueueFilterPanelOpen(false);
});

queueFilterClearBtn?.addEventListener("click", () => {
  renewalQueueFilters.stage = "";
  renewalQueueFilters.progress = "";
  renewalQueueFilterDraft.stage = "";
  renewalQueueFilterDraft.progress = "";
  if (queueStageFilter) queueStageFilter.value = "";
  syncProgressOptionsForStage();
  renderAppliedQueueFilters();
  renderRenewals();
  setQueueFilterPanelOpen(false);
});

queueAppliedFilters?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const removeBtn = target.closest("[data-remove-queue-filter]");
  if (!(removeBtn instanceof HTMLElement)) return;

  const filterKey = removeBtn.dataset.removeQueueFilter;
  if (filterKey === "stage") {
    renewalQueueFilters.stage = "";
    renewalQueueFilters.progress = "";
  }
  if (filterKey === "progress") {
    renewalQueueFilters.progress = "";
  }

  renewalQueueFilterDraft.stage = renewalQueueFilters.stage;
  renewalQueueFilterDraft.progress = renewalQueueFilters.progress;
  if (queueStageFilter) queueStageFilter.value = renewalQueueFilterDraft.stage;
  syncProgressOptionsForStage();
  if (queueProgressFilter) queueProgressFilter.value = renewalQueueFilterDraft.progress;

  renderAppliedQueueFilters();
  renderRenewals();
});

startMyDayBtn?.addEventListener("click", () => {
  isPriorityDayMode = true;
  setRoute("start-my-day");
  setStartDayStatus("Start my day workspace is ready with prioritised actions.");
  if (resetDayViewBtn) resetDayViewBtn.hidden = false;
});

resetDayViewBtn?.addEventListener("click", () => {
  isPriorityDayMode = false;
  renderRenewals();
  setStartDayStatus("Queue returned to default ordering.");
  resetDayViewBtn.hidden = true;
});

backToOverviewBtn?.addEventListener("click", () => {
  setRoute("overview");
});

refreshPrioritiesBtn?.addEventListener("click", () => {
  activeStartDaySnapshot = (activeStartDaySnapshot + 1) % startDayPriorities.length;
  renderStartDaySummary();
  console.log("Priorities refreshed using mock overnight signal set.");
});

document.querySelectorAll(".filter-kpi").forEach((card) => {
  card.addEventListener("click", () => {
    setRoute("overview");
  });
});

document.querySelectorAll(".overview-view-more").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const target = button.dataset.overviewViewMore || "overview-summary";
    console.log(`View more clicked for ${target}`);
  });
});

searchInput?.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  renderRenewals();
});

timeFilter?.addEventListener("change", (event) => {
  overviewFilters.time = event.target.value;
  renderRenewalsOverTimeChart();
});

renewalTypeFilter?.addEventListener("change", (event) => {
  overviewFilters.renewalType = event.target.value;
});

assignedToFilter?.addEventListener("input", (event) => {
  overviewFilters.assignedTo = event.target.value;
  updateAssignedOwnerOptions(event.target.value);
});

["refTimeFilter", "refStatusFilter", "refAssignedFilter", "refRenewalTypeFilter", "refPriorityFilter"].forEach((id) => {
  document.getElementById(id)?.addEventListener("change", (event) => {
    const map = {
      refTimeFilter: "time",
      refStatusFilter: "status",
      refAssignedFilter: "assignedTo",
      refRenewalTypeFilter: "renewalType",
      refPriorityFilter: "priority"
    };
    referralFilters[map[id]] = event.target.value;
    openReferralMenuId = null;
    renderReferralsWorkspace();
  });
});

document.querySelectorAll("[data-ref-view]").forEach((button) => {
  button.addEventListener("click", () => {
    activeReferralView = button.dataset.refView || "queue";
    document.querySelectorAll("[data-ref-view]").forEach((b) => b.classList.remove("active-switcher"));
    button.classList.add("active-switcher");
    document.querySelectorAll(".ref-view-surface").forEach((v) => v.classList.remove("active-ref-view"));
    const target = document.getElementById(`ref${activeReferralView.charAt(0).toUpperCase() + activeReferralView.slice(1)}View`);
    target?.classList.add("active-ref-view");
  });
});

referralQueueTableWrap?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const trigger = target.closest("[data-ref-menu-trigger]");
  if (trigger instanceof HTMLElement) {
    const id = trigger.dataset.refMenuTrigger;
    openReferralMenuId = openReferralMenuId === id ? null : id || null;
    renderReferralsWorkspace();
    return;
  }

  const actionButton = target.closest("[data-ref-menu-action]");
  if (actionButton instanceof HTMLElement) {
    const action = actionButton.dataset.refMenuAction;
    const id = actionButton.dataset.refId;
    console.log(`Mock ${action} on ${id}`);
    openReferralMenuId = null;
    renderReferralsWorkspace();
    return;
  }

  const row = target.closest("[data-referral-row]");
  if (row instanceof HTMLElement) {
    selectedReferralId = row.dataset.referralRow;
    renderReferralsWorkspace();
  }
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

  const clickedInsideQueueFilters = target.closest("#renewalQueueFilterWrap");
  if (!clickedInsideQueueFilters && renewalQueueFilterPanel && !renewalQueueFilterPanel.hidden) {
    setQueueFilterPanelOpen(false);
  }

  const startDayMenuTrigger = target.closest("[data-startday-menu-trigger]");
  if (startDayMenuTrigger instanceof HTMLElement) {
    const menuId = startDayMenuTrigger.dataset.startdayMenuTrigger || null;
    openStartDayMenuId = openStartDayMenuId === menuId ? null : menuId;
    document.querySelectorAll("[data-startday-menu]").forEach((menu) => {
      menu.classList.toggle("open", menu.dataset.startdayMenu === openStartDayMenuId);
    });
    document.querySelectorAll("[data-startday-menu-trigger]").forEach((trigger) => {
      trigger.setAttribute("aria-expanded", String(trigger.dataset.startdayMenuTrigger === openStartDayMenuId));
    });
    return;
  }

  const startDayActionBtn = target.closest("[data-startday-action]");
  if (startDayActionBtn instanceof HTMLElement) {
    handleStartDayAction(startDayActionBtn.dataset.startdayAction || "");
    openStartDayMenuId = null;
    document.querySelectorAll("[data-startday-menu]").forEach((menu) => menu.classList.remove("open"));
    document.querySelectorAll("[data-startday-menu-trigger]").forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    return;
  }

  const clickedInsideStartDayMenu = target.closest("[data-startday-menu-container]");
  if (!clickedInsideStartDayMenu && openStartDayMenuId) {
    openStartDayMenuId = null;
    document.querySelectorAll("[data-startday-menu]").forEach((menu) => menu.classList.remove("open"));
    document.querySelectorAll("[data-startday-menu-trigger]").forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  }

  const clickedInsideReferralMenu = target.closest("[data-ref-menu-container]");
  if (!clickedInsideReferralMenu && openReferralMenuId) {
    openReferralMenuId = null;
    renderReferralsWorkspace();
  }

  const referralViewMore = target.closest(".ref-view-more");
  if (referralViewMore instanceof HTMLElement) {
    console.log(`View more clicked for ${referralViewMore.dataset.refViewMore || "referrals"}`);
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

renderMorningBriefing();
renderStartDaySummary();
renderRenewals();
renderBatches();
renderReferrals();
renderRenewalsOverTimeChart();
renderDueForRenewalsChart();
renderReportsView();
initializeOverviewFilterDefaults();
initializeRenewalQueueFilters();
updateAssignedOwnerOptions(overviewFilters.assignedTo);
updateRenewalTypeDependentContent();
updateToggleStateText();
syncRouteFromHash();
