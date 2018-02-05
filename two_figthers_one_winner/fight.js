function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) {
    const swapFigther = fighter1;
    fighter1 = fighter2;
    fighter2 = swapFigther;
  }
  while (true) {
    fighter2.health -= fighter1.damagePerAttack;
    if (fighter2.health <= 0) {
      return fighter1.name;
    }
    fighter1.health -= fighter2.damagePerAttack;
    if (fighter1.health <= 0) {
      return fighter2.name;
    }
  }
}

module.exports = {declareWinner, Fighter};