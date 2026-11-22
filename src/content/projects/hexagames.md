---
title: Hexagames
order: 6
kind: Realtime web app
year: '2026'
blurb: Fair rotation, live scoreboard and player stats for pick-up basketball nights.
images: [/projects/hexagames-queue.webp, /projects/hexagames-leaderboard.webp]
tools: [Cloudflare Workers, D1, JavaScript]
role: Creator
href: https://github.com/scienseize/pickup-rotation
status: Used every game night
---

Organizers check players in, and Hexagames builds a fair rotation for the court. Every signed-in laptop sees the same night within a few seconds: check-ins, queue, court and score.

A laptop that loses its connection keeps working and catches up later. Players get a read-only guest view with tonight's leaderboard, the all-time standings, and the history of past sessions.

The database backs itself up every day to a Git branch.
