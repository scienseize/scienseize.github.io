---
title: Energy Anatomy
order: 2
kind: Thesis · ML systems
year: '2026'
blurb: Where does the energy go when a transformer trains?
images: [/projects/energy-anatomy-waste-capability.webp]
tools: [PyTorch, Zeus, NVML, Python]
role: Researcher
href: https://github.com/scienseize/energy-anatomy
status: Best Paper and Student Best Paper Presentation Awards, I-RISE Conference 2026
award: Best paper
summary: >-
  The thesis profiles where the energy goes when a transformer pretrains, across three Pythia models on an NVIDIA T4. The attention core, layer normalization, positional encoding and the input embedding lookup use more energy than their share of the computation. A memory-efficient attention kernel saved up to 41.5% of model energy without changing what the model computes.
abstract: >-
  Pretraining large language models is energy intensive. Inference profiling shows that energy consumption is not proportional to computation across transformer components (Jain et al., 2025), while GLaM used approximately one-third of GPT-3’s training energy through architectural and systems improvements (Du et al., 2022). A remaining gap is translating these findings into component priorities for pretraining that account for both energy–compute divergence and model capability. This study presents a framework grounded in roofline principles that defines a diagnostic waste score as component energy share minus compute share, and computes it for attention, feedforward networks, layer normalization, positional encoding, and token embeddings. Energy shares were measured by profiling each component's forward and backward passes on an NVIDIA T4 GPU across eighteen configurations of three Pythia models (160M to 6.9B parameters), three sequence lengths, and two numerical precisions; compute shares were counted from the published architectures, and capability was ranked ordinally from published ablation evidence. The four memory-bound components, the attention core, layer normalization, positional encoding, and the input embedding lookup, had energy shares exceeding their compute shares in every configuration, supporting the hypothesis, and the sign of the score followed the roofline class in 134 of 144 results. The attention core carried the largest waste, up to 31 percentage points, while the feedforward sublayer, the largest consumer of energy in 15 of 18 configurations, used less than its compute share in 15. Positional encoding, layer normalization, and the input embedding lookup combined positive waste with low capability, a priority set stable across model scale, sequence length, and precision. Among candidate substitutions, a fused rotary kernel saved 0.3% to 3.1% of model energy and a memory-efficient attention kernel 0.8% to 41.5%, both without changing what the model computes, while RMSNorm written as separate operators cost up to 4.5% more than LayerNorm: for normalization, implementation mattered more than algorithm. The roofline-predicted time ranked the measured substitution effects with a Spearman correlation of 0.92. An accompanying interactive dashboard presents component profiles and waste rankings across configurations. The study provides an empirical basis for prioritizing architectural improvements for sustainable pretraining.
---
