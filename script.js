(() => {
    const accounts = document.MTIntelligenceAccounts;
    const account = accounts && accounts[0];

    if (!account) {
        document.getElementById("updated").innerText =
            "FX Blue data unavailable";
        return;
    }

    const percentage = value => {
        const number = Number(value);
        const sign = number > 0 ? "+" : "";
        return `${sign}${number.toFixed(2)}%`;
    };

    const money = value =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(Number(value));

    document.getElementById("today").innerText =
        percentage(account.dailyBankedGrowth);

    document.getElementById("week").innerText =
        percentage(account.weeklyBankedGrowth);

    document.getElementById("month").innerText =
        percentage(account.monthlyBankedGrowth);

    // FX Blue's headline script does not provide yearly growth.
    document.getElementById("year").innerText = "N/A";

    document.getElementById("alltime").innerText =
        percentage(account.totalBankedGrowth);

    document.getElementById("balance").innerText =
        money(account.balance);

    document.getElementById("equity").innerText =
        money(account.equity);

    document.getElementById("profit").innerText =
        money(account.closedProfit);

    const drawdown = document.getElementById("drawdown");
    if (drawdown) {
        drawdown.innerText =
            percentage(account.deepestValleyPercent);
    }

    document.getElementById("updated").innerText =
        `Dernière mise à jour : ${new Date().toLocaleString()}`;
})();
