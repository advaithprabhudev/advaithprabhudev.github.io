---
title: ML-Filtered EMA Momentum Strategy
subtitle: MLP-filtered crossover signals, 2010–2025
badge:
  label: open source
  type: open-source
order: 1
description: An MLP confidence filter applied to EMA(20/50) crossover signals across 12 S&P 500 equities, reducing mean maximum drawdown by 5.81pp while preserving signal integrity. Seven lag-adjusted features — RSI, ATR, volume z-score, multi-horizon returns, volatility — with a chronological train-validation-test split over 15 years of daily price data to rule out look-ahead bias.
tags: [Python, scikit-learn, pandas, yfinance, Backtesting]
media:
  src: /media/momentum_strategy.png
  alt: Backtest output for the ML-filtered EMA momentum strategy
  fit: contain
links:
  - label: View source on GitHub
    url: https://github.com/advaithprabhudev/Momentum-Research-Project
---
