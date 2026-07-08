function rollDice(count, modText = "") {
  const rolls = [];
  for (let i = 0; i < count; i++) rolls.push(Math.floor(Math.random() * 6) + 1);
  const modifier = modText === "+1" ? 1 : modText === "+2" ? 2 : 0;
  return { rolls, modifier, total: rolls.reduce((a,b)=>a+b,0) + modifier };
}
function renderRoll(target, label, dice, modText = "") {
  const result = rollDice(dice, modText);
  const faces = result.rolls.map(r => `<span class="face">${r}</span>`).join("");
  target.innerHTML = `<strong>${label}</strong><div class="dice">${faces}${result.modifier ? `<span class="face">+${result.modifier}</span>` : ""}</div><div>Total: <span class="die">${result.total}</span></div>`;
}
