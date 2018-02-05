class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack


def declare_winner(fighter1, fighter2, first_attacker):
    if fighter1.name != first_attacker:
        fighter1, fighter2 = fighter2, fighter1
    while True:
        fighter2.health -= fighter1.damage_per_attack
        if fighter2.health <= 0:
            return fighter1.name
        fighter1.health -= fighter2.damage_per_attack
        if fighter1.health <= 0:
            return fighter2.name