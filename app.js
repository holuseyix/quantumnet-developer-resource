const data = {
  quantumnet: {
    title: "Quantumnet",
    copy: "An experimental Tezos testnet that brings several post-quantum approaches together for evaluation.",
    meta: "EXPERIMENTAL"
  },
  accounts: {
    title: "tz5 / ML-DSA-44",
    copy: "Quantumnet uses tz5 accounts with ML-DSA-44 for post-quantum digital signatures.",
    meta: "ACCOUNT LAYER"
  },
  consensus: {
    title: "XMSS + PQ STARK",
    copy: "Consensus attestations use XMSS signatures together with a post-quantum STARK aggregation system.",
    meta: "CONSENSUS LAYER"
  },
  baking: {
    title: "SWRR",
    copy: "The experimental network replaces the previous VDF/randomness approach for baking-right selection with Smooth Weighted Round Robin.",
    meta: "BAKING RIGHTS"
  },
  dal: {
    title: "ZODA",
    copy: "The Data Availability Layer uses ZODA instead of KZG in this Quantumnet experiment.",
    meta: "DATA AVAILABILITY"
  }
};

const tabs = document.querySelectorAll(".tab");
const title = document.querySelector("#panel-title");
const copy = document.querySelector("#panel-copy");
const meta = document.querySelector("#panel-meta");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const item = data[tab.dataset.key];
    if (!item) return;

    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });

    title.textContent = item.title;
    copy.textContent = item.copy;
    meta.textContent = item.meta;
  });
});
