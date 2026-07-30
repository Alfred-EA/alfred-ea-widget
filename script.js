(() => {
  const account = document.MTIntelligenceAccounts?.[0];
  const updated = document.getElementById("updated");

  if (!account) {
    updated.textContent = "FX Blue data is temporarily unavailable";
    return;
  }

  const percentage = value => {
    const number = Number(value);
    if (!Number.isFinite(number)) return "N/A";
    return `${number > 0 ? "+" : ""}${number.toFixed(2)}%`;
  };

  const money = value => {
    const number = Number(value);
    if (!Number.isFinite(number)) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(number);
  };

  const setValue = (id, value, colorize = false) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = value;
    if (colorize) {
      const number = Number(String(value).replace(/[^0-9.-]/g, ""));
      element.classList.toggle("positive", number > 0);
      element.classList.toggle("negative", number < 0);
    }
  };

  setValue("today", percentage(account.dailyBankedGrowth), true);
  setValue("week", percentage(account.weeklyBankedGrowth), true);
  setValue("month", percentage(account.monthlyBankedGrowth), true);
  setValue("year", "N/A");
  setValue("alltime", percentage(account.totalBankedGrowth), true);

  const balance = Number(account.balance);
  const equity = Number(account.equity);
  const openProfit = equity - balance;

  setValue("balance", money(balance));
  setValue("equity", money(equity));
  setValue("openProfit", money(openProfit), true);
  setValue("profit", money(account.closedProfit), true);
  setValue("drawdown", percentage(-Math.abs(Number(account.deepestValleyPercent))), true);

  updated.textContent = `Last refreshed ${new Date().toLocaleString()}`;
})();
