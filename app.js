const details = {
  quantumnet: {
    title: "Quantumnet",
    text: "Tezos' first experimental post-quantum testnet. It brings several post-quantum approaches together in one engineering environment.",
    tag: "EXPERIMENTAL"
  },
  accounts: {
    title: "tz5 / ML-DSA-44",
    text: "Quantumnet enables tz5 accounts using ML-DSA-44, a post-quantum digital-signature scheme standardized by NIST.",
    tag: "ACCOUNTS"
  },
  consensus: {
    title: "XMSS + PQ STARK",
    text: "Consensus attestations use hash-based XMSS signatures with a post-quantum STARK aggregation system developed by the LeanEthereum project.",
    tag: "CONSENSUS"
  },
  rights: {
    title: "SWRR",
    text: "Smooth Weighted Round Robin replaces the previous VDF/protocol-randomness approach for distributing baking rights in this experiment.",
    tag: "BAKING RIGHTS"
  },
  dal: {
    title: "ZODA",
    text: "The Data Availability Layer uses ZODA instead of KZG commitments and proofs in this experimental network.",
    tag: "DATA AVAILABILITY"
  }
};

document.querySelectorAll(".node").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".node").forEach(n => n.classList.remove("active"));
    button.classList.add("active");
    const item = details[button.dataset.key];
    document.querySelector("#detail").innerHTML = `
      <p class="kicker">SELECTED COMPONENT</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span class="tag">${item.tag}</span>
    `;
  });
});
