document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. МОБИЛЬНОЕ МЕНЮ (БУРГЕР)
  // ==========================================
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ==========================================
  // 2. ПЕРЕКЛЮЧАТЕЛЬ ЦЕЛЕВЫХ АУДИТОРИЙ (ТАБЫ)
  // ==========================================
  const audienceTabs = document.querySelectorAll(".audience-tab-btn");
  const audiencePanels = document.querySelectorAll(".audience-card");

  audienceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetAudience = tab.getAttribute("data-audience");

      audienceTabs.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      audiencePanels.forEach((panel) => {
        const isMatch = panel.getAttribute("data-audience-panel") === targetAudience;
        panel.classList.toggle("active", isMatch);
        panel.style.display = isMatch ? "" : "none";
      });
    });
  });

  // ==========================================
  // 3. ГЛОБАЛЬНЫЙ СТЕЙТ ДЕМО-ИНТЕРФЕЙСА
  // ==========================================
  let currentBranch = "center"; // 'all', 'center', 'north'
  let currentStatusFilter = "all"; // 'all', 'new', 'cook', 'delivery'

  const branchData = {
    center: {
      label: "Филиал: Центральный",
      statNew: "1",
      statCook: "2",
      statDelivery: "1",
      statTime: "28 мин",
      statCookSub: "Ср. сборка: 12 мин",
      statDeliverySub: "2 курьера на смене",
      crmVip: "840 гостей",
      crmVipDesc: "Частота: 4.8 заказов/мес · Центр",
      crmChurn: "310 гостей",
      crmChurnDesc: "Сегмент риска: 30+ дней без заказа",
      crmNew: "+18 регистраций",
      crmNewDesc: "Конверсия во 2-й заказ: 39%",
      rev: "84 200 ₽",
      revSub: "↑ +14.2% к прошлой неделе",
      check: "1 940 ₽",
      speed: "27.5 мин",
    },
    north: {
      label: "Филиал: Северный квартал",
      statNew: "2",
      statCook: "1",
      statDelivery: "1",
      statTime: "31 мин",
      statCookSub: "Ср. сборка: 9 мин",
      statDeliverySub: "2 курьера на смене",
      crmVip: "580 гостей",
      crmVipDesc: "Частота: 4.1 заказов/мес · Север",
      crmChurn: "370 гостей",
      crmChurnDesc: "Сегмент риска: 30+ дней без заказа",
      crmNew: "+16 регистраций",
      crmNewDesc: "Конверсия во 2-й заказ: 34%",
      rev: "58 650 ₽",
      revSub: "↑ +8.7% к прошлой неделе",
      check: "1 465 ₽",
      speed: "31.2 мин",
    },
    all: {
      label: "Вся сеть (Сводный обзор: 2 точки)",
      statNew: "3",
      statCook: "3",
      statDelivery: "2",
      statTime: "29 мин",
      statCookSub: "Ср. по сети: 11 мин",
      statDeliverySub: "4 курьера на маршрутах",
      crmVip: "1 420 гостей",
      crmVipDesc: "Общая база лояльных клиентов сети",
      crmChurn: "680 гостей",
      crmChurnDesc: "Общий объем засыпающей базы",
      crmNew: "+34 регистрации",
      crmNewDesc: "Суммарный прирост за смену",
      rev: "142 850 ₽",
      revSub: "↑ +22.9% суммарно по сети",
      check: "1 720 ₽",
      speed: "29.4 мин",
    },
  };

  function updateBranchUI() {
    const data = branchData[currentBranch] || branchData.center;

    const branchLabelEl = document.getElementById("current-branch-label");
    if (branchLabelEl) branchLabelEl.textContent = data.label;

    const sNew = document.getElementById("stat-new");
    const sCook = document.getElementById("stat-cook");
    const sDel = document.getElementById("stat-delivery");
    const sTime = document.getElementById("stat-time");
    const sCookSub = document.getElementById("stat-cook-sub");
    const sDelSub = document.getElementById("stat-delivery-sub");

    if (sNew) sNew.textContent = data.statNew;
    if (sCook) sCook.textContent = data.statCook;
    if (sDel) sDel.textContent = data.statDelivery;
    if (sTime) sTime.innerHTML = `${data.statTime.split(" ")[0]} <em>мин</em>`;
    if (sCookSub) sCookSub.textContent = data.statCookSub;
    if (sDelSub) sDelSub.textContent = data.statDeliverySub;

    const crmVip = document.getElementById("crm-stat-vip");
    const crmVipDesc = document.getElementById("crm-stat-vip-desc");
    const crmChurn = document.getElementById("crm-stat-churn");
    const crmChurnDesc = document.getElementById("crm-stat-churn-desc");
    const crmNew = document.getElementById("crm-stat-new");
    const crmNewDesc = document.getElementById("crm-stat-new-desc");

    if (crmVip) crmVip.textContent = data.crmVip;
    if (crmVipDesc) crmVipDesc.textContent = data.crmVipDesc;
    if (crmChurn) crmChurn.textContent = data.crmChurn;
    if (crmChurnDesc) crmChurnDesc.textContent = data.crmChurnDesc;
    if (crmNew) crmNew.textContent = data.crmNew;
    if (crmNewDesc) crmNewDesc.textContent = data.crmNewDesc;

    const anRev = document.getElementById("analytics-rev");
    const anRevSub = document.getElementById("analytics-rev-sub");
    const anCheck = document.getElementById("analytics-check");
    const anSpeed = document.getElementById("analytics-speed");

    if (anRev) anRev.textContent = data.rev;
    if (anRevSub) anRevSub.textContent = data.revSub;
    if (anCheck) anCheck.textContent = data.check;
    if (anSpeed) anSpeed.textContent = data.speed;

    filterCardsByBranch(".kds-ticket");
    filterCardsByBranch(".courier-card");

    applyOrdersFilter();
  }

  function filterCardsByBranch(selector) {
    document.querySelectorAll(selector).forEach((el) => {
      const elBranch = el.getAttribute("data-branch");
      if (currentBranch === "all" || elBranch === currentBranch) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
  }

  function applyOrdersFilter() {
    const orderRows = document.querySelectorAll(".demo-orders-table .demo-order:not(.demo-table-head)");
    let branchTotal = 0;
    let counts = { all: 0, new: 0, cook: 0, delivery: 0 };
    let visibleCount = 0;

    orderRows.forEach((row) => {
      const rowBranch = row.getAttribute("data-branch");
      const rowStatus = row.getAttribute("data-status");

      const matchBranch = currentBranch === "all" || rowBranch === currentBranch;

      if (matchBranch) {
        branchTotal++;
        counts.all++;
        if (counts[rowStatus] !== undefined) counts[rowStatus]++;

        if (currentStatusFilter === "all" || rowStatus === currentStatusFilter) {
          row.style.display = "grid";
          visibleCount++;
        } else {
          row.style.display = "none";
        }
      } else {
        row.style.display = "none";
      }
    });

    const cntAll = document.getElementById("cnt-all");
    const cntNew = document.getElementById("cnt-new");
    const cntCook = document.getElementById("cnt-cook");
    const cntDelivery = document.getElementById("cnt-delivery");

    if (cntAll) cntAll.textContent = counts.all;
    if (cntNew) cntNew.textContent = counts.new;
    if (cntCook) cntCook.textContent = counts.cook;
    if (cntDelivery) cntDelivery.textContent = counts.delivery;

    const ordersTotalLabel = document.getElementById("orders-total-label");
    if (ordersTotalLabel) {
      ordersTotalLabel.textContent = `Показано: ${visibleCount} из ${branchTotal}`;
    }
  }

  const branchSelect = document.querySelector(".branch-select");
  if (branchSelect) {
    branchSelect.addEventListener("change", (e) => {
      currentBranch = e.target.value;
      updateBranchUI();
    });
  }

  const filterButtons = document.querySelectorAll(".demo-filter");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentStatusFilter = btn.getAttribute("data-filter");
      applyOrdersFilter();
    });
  });

  // ==========================================
  // 4. ТАБЫ САЙДБАРА ДЕМО (МОДУЛИ СИСТЕМЫ)
  // ==========================================
  const demoNavItems = document.querySelectorAll(".demo-nav-item");
  const demoViews = document.querySelectorAll(".demo-view");
  const currentViewTitle = document.querySelector(".demo-current-view-title");

  const tabTitles = {
    orders: "Поток заказов в реальном времени",
    kitchen: "Кухонный монитор (KDS) — статус цехов",
    delivery: "Управление курьерами и маршрутами",
    crm: "Лояльность, RFM-сегменты и промокоды",
    analytics: "Сводная аналитика и выручка по точкам",
  };

  demoNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      demoNavItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const tabKey = item.getAttribute("data-demo-tab");

      if (currentViewTitle && tabTitles[tabKey]) {
        currentViewTitle.textContent = tabTitles[tabKey];
      }

      demoViews.forEach((view) => {
        if (view.getAttribute("data-view-content") === tabKey) {
          view.classList.add("active");
          view.style.display = "";
        } else {
          view.classList.remove("active");
          view.style.display = "none";
        }
      });
    });
  });

  updateBranchUI();

  const demoTimeEl = document.querySelector(".demo-time");
  if (demoTimeEl) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    demoTimeEl.textContent = `${hours}:${minutes}`;
  }

  // ==========================================
  // 5. ВАЛИДАЦИЯ И ОТПРАВКА ФОРМЫ (СВЯЗКА С HTML)
  // ==========================================
  // Поддержка как camelCase, так и kebab-case селекторов
  const form = document.getElementById("leadForm") || document.getElementById("lead-form");

  if (form) {
    const nameInput = document.getElementById("leadName") || document.getElementById("user-name");
    const contactInput = document.getElementById("leadContact") || document.getElementById("user-contact");
    const companyInput = document.getElementById("leadCompany") || document.getElementById("user-company");
    const cityInput = document.getElementById("leadCity") || document.getElementById("user-city");
    const consentInput = document.getElementById("leadConsent") || document.getElementById("user-consent");

    const submitBtn = document.getElementById("submitBtn") || document.getElementById("submit-btn");
    const formSuccess = document.getElementById("formSuccess") || document.getElementById("form-success");
    const formError = document.getElementById("formError") || document.getElementById("form-error");

    const requiredFields = [
      { el: nameInput, group: "group-name" },
      { el: contactInput, group: "group-contact" },
      { el: companyInput, group: "group-company" },
      { el: cityInput, group: "group-city" },
    ];

    // Очистка подсветки ошибок при вводе
    requiredFields.forEach(({ el }) => {
      if (!el) return;
      el.addEventListener("input", () => {
        const group = el.closest(".form-group");
        if (group) group.classList.remove("has-error");
        if (formError) formError.classList.remove("is-visible");
      });
    });

    if (consentInput) {
      consentInput.addEventListener("change", () => {
        const wrapper = consentInput.closest(".form-checkbox-wrapper");
        if (wrapper) wrapper.classList.remove("has-error");
        if (formError) formError.classList.remove("is-visible");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;
      let firstErrorField = null;

      // Сброс предыдущих ошибок
      form.querySelectorAll(".form-group, .form-checkbox-wrapper").forEach((g) => {
        g.classList.remove("has-error");
      });
      if (formSuccess) formSuccess.classList.remove("is-visible");
      if (formError) formError.classList.remove("is-visible");

      // Проверка обязательных текстовых полей
      requiredFields.forEach(({ el, group }) => {
        if (!el) return;
        const val = el.value.trim();
        let isFieldValid = Boolean(val);

        if (el === contactInput && val.length < 5) {
          isFieldValid = false;
        }

        if (!isFieldValid) {
          isValid = false;
          const groupEl = document.getElementById(group) || el.closest(".form-group");
          if (groupEl) groupEl.classList.add("has-error");
          if (!firstErrorField) firstErrorField = el;
        }
      });

      // Проверка чекбокса согласия
      if (consentInput && !consentInput.checked) {
        isValid = false;
        const consentGroup = document.getElementById("group-consent") || consentInput.closest(".form-checkbox-wrapper");
        if (consentGroup) consentGroup.classList.add("has-error");
        if (!firstErrorField) firstErrorField = consentInput;
      }

      if (!isValid) {
        if (formError) formError.classList.add("is-visible");
        if (firstErrorField) firstErrorField.focus();
        return;
      }

      // Анимация отправки
      if (submitBtn) {
        submitBtn.classList.add("is-loading");
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
        }

        if (formSuccess) {
          formSuccess.classList.add("is-visible");
          formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        form.reset();
      }, 700);
    });
  }

  // ==========================================
  // 6. ЗАЩИТА ОТ ВИСЯЧИХ ПРЕДЛОГОВ (ТИПОГРАФИКА)
  // ==========================================
  const PREPOSITIONS_REGEX = /(^|\s)(в|во|на|под|над|с|со|к|ко|о|об|обо|от|ото|до|по|из|изо|за|у|и|а|но|да|или|не|ни)\s+/gi;

  function bindPrepositions(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim().length > 0) {
        node.textContent = node.textContent.replace(PREPOSITIONS_REGEX, "$1$2\u00A0");
      }
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      !["SCRIPT", "STYLE", "CODE", "PRE", "INPUT", "TEXTAREA", "SELECT"].includes(node.tagName)
    ) {
      Array.from(node.childNodes).forEach(bindPrepositions);
    }
  }

  bindPrepositions(document.body);
});