import { AbilityScaling, Bonus, Character } from '@/interfaces/Character'

const abilityScalings: AbilityScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const Sucrose: Character = {
    name: 'Sucrose',
    icon: '/images/characters/sucrose.png',
    weapon: 'Catalyst',
    vision: 'Anemo',
    rarity: 4,
    description:
        'An alchemist filled with curiosity about all things. She researches bio-alchemy.',
    occupation: 'Knights of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 775.0,
            'Base ATK': 14.25,
            'Base DEF': 58.94,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '20/20': {
            'Base HP': 1991.0,
            'Base ATK': 36.6,
            'Base DEF': 151.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '20/40': {
            'Base HP': 2570.0,
            'Base ATK': 47.24,
            'Base DEF': 195.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '40/40': {
            'Base HP': 3850.0,
            'Base ATK': 70.76,
            'Base DEF': 292.77,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.0,
        },
        '40/50': {
            'Base HP': 4261.0,
            'Base ATK': 78.33,
            'Base DEF': 324.05,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.06,
        },
        '50/50': {
            'Base HP': 4901.0,
            'Base ATK': 90.09,
            'Base DEF': 372.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.06,
        },
        '50/60': {
            'Base HP': 5450.0,
            'Base ATK': 100.18,
            'Base DEF': 414.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '60/60': {
            'Base HP': 6090.0,
            'Base ATK': 111.94,
            'Base DEF': 463.14,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '60/70': {
            'Base HP': 6501.0,
            'Base ATK': 119.51,
            'Base DEF': 494.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '70/70': {
            'Base HP': 7141.0,
            'Base ATK': 131.26,
            'Base DEF': 543.05,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.12,
        },
        '70/80': {
            'Base HP': 7552.0,
            'Base ATK': 138.82,
            'Base DEF': 574.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.18,
        },
        '80/80': {
            'Base HP': 8192.0,
            'Base ATK': 150.59,
            'Base DEF': 623.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.18,
        },
        '80/90': {
            'Base HP': 8604.0,
            'Base ATK': 158.15,
            'Base DEF': 654.31,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.24,
        },
        '90/90': {
            'Base HP': 9244.0,
            'Base ATK': 169.92,
            'Base DEF': 703.0,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Anemo DMG Bonus': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Wind Spirit Creation',
            image: 'https://genshin.honeyhunterworld.com/img/s_433101.webp',
            description:
                'Normal Attack\nPerforms up to 4 attacks using Wind Spirits, dealing\nAnemo DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina and deals\nAoE Anemo DMG\nafter a short casting time.\nPlunging Attack\nCalling upon the power of her Wind Spirits, Sucrose plunges towards the ground from mid-air, damaging all opponents in her path. Deals\nAoE Anemo DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '33.46%',
                    Lv2: '35.97%',
                    Lv3: '38.48%',
                    Lv4: '41.83%',
                    Lv5: '44.34%',
                    Lv6: '46.85%',
                    Lv7: '50.2%',
                    Lv8: '53.54%',
                    Lv9: '56.89%',
                    Lv10: '60.24%',
                    Lv11: '63.58%',
                    Lv12: '66.93%',
                    Lv13: '71.11%',
                    Lv14: '75.29%',
                    Lv15: '79.48%',
                },
                '2-Hit DMG': {
                    Lv1: '30.62%',
                    Lv2: '32.91%',
                    Lv3: '35.21%',
                    Lv4: '38.27%',
                    Lv5: '40.57%',
                    Lv6: '42.86%',
                    Lv7: '45.92%',
                    Lv8: '48.99%',
                    Lv9: '52.05%',
                    Lv10: '55.11%',
                    Lv11: '58.17%',
                    Lv12: '61.23%',
                    Lv13: '65.06%',
                    Lv14: '68.89%',
                    Lv15: '72.71%',
                },
                '3-Hit DMG': {
                    Lv1: '38.45%',
                    Lv2: '41.33%',
                    Lv3: '44.22%',
                    Lv4: '48.06%',
                    Lv5: '50.94%',
                    Lv6: '53.83%',
                    Lv7: '57.67%',
                    Lv8: '61.52%',
                    Lv9: '65.36%',
                    Lv10: '69.21%',
                    Lv11: '73.05%',
                    Lv12: '76.9%',
                    Lv13: '81.7%',
                    Lv14: '86.51%',
                    Lv15: '91.31%',
                },
                '4-Hit DMG': {
                    Lv1: '47.92%',
                    Lv2: '51.51%',
                    Lv3: '55.11%',
                    Lv4: '59.9%',
                    Lv5: '63.49%',
                    Lv6: '67.08%',
                    Lv7: '71.88%',
                    Lv8: '76.67%',
                    Lv9: '81.46%',
                    Lv10: '86.25%',
                    Lv11: '91.04%',
                    Lv12: '95.84%',
                    Lv13: '101.82%',
                    Lv14: '107.81%',
                    Lv15: '113.8%',
                },
                'Charged Attack DMG': {
                    Lv1: '120.16%',
                    Lv2: '129.17%',
                    Lv3: '138.18%',
                    Lv4: '150.2%',
                    Lv5: '159.21%',
                    Lv6: '168.22%',
                    Lv7: '180.24%',
                    Lv8: '192.26%',
                    Lv9: '204.27%',
                    Lv10: '216.29%',
                    Lv11: '228.3%',
                    Lv12: '240.32%',
                    Lv13: '255.34%',
                    Lv14: '270.36%',
                    Lv15: '285.38%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '50',
                    Lv2: '50',
                    Lv3: '50',
                    Lv4: '50',
                    Lv5: '50',
                    Lv6: '50',
                    Lv7: '50',
                    Lv8: '50',
                    Lv9: '50',
                    Lv10: '50',
                    Lv11: '50',
                    Lv12: '50',
                    Lv13: '50',
                    Lv14: '50',
                    Lv15: '50',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.16%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Astable Anemohypostasis Creation - 6308',
            image: 'https://genshin.honeyhunterworld.com/img/s_433201.webp',
            description:
                'Creates a small Wind Spirit that pulls opponents and objects towards its location, launches opponents within its AoE, and deals\nAnemo DMG\n.\nThis is a little embarrassing, but though the elemental lifeforms birthed through this procedure dissipate very rapidly, they are incredibly useful when adventuring. Even failed experiments can have practical applications.',
            data: {
                'Skill DMG': {
                    Lv1: '211.2%',
                    Lv2: '227.04%',
                    Lv3: '242.88%',
                    Lv4: '264%',
                    Lv5: '279.84%',
                    Lv6: '295.68%',
                    Lv7: '316.8%',
                    Lv8: '337.92%',
                    Lv9: '359.04%',
                    Lv10: '380.16%',
                    Lv11: '401.28%',
                    Lv12: '422.4%',
                    Lv13: '448.8%',
                    Lv14: '475.2%',
                    Lv15: '501.6%',
                },
                CD: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
            },
        },
        {
            name: 'Forbidden Creation - Isomer 75 / Type II',
            image: 'https://genshin.honeyhunterworld.com/img/s_433901.webp',
            description:
                'Sucrose hurls an unstable concoction that creates a Large Wind Spirit.\nWhile it persists, the Large Wind Spirit will continuously pull in surrounding opponents and objects, launch nearby opponents, and deal\nAnemo DMG\n.\nElemental Absorption\nIf the Wind Spirit comes into contact with\nHydro\n/\nPyro\n/\nCryo\n/\nElectro\nenergy, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.\nSucrose used to give names to her volatile Anemo Hypostases, but their line of heirs quickly grew to surpass Baron Bunny the 893rd.',
            data: {
                DoT: {
                    Lv1: '148%',
                    Lv2: '159.1%',
                    Lv3: '170.2%',
                    Lv4: '185%',
                    Lv5: '196.1%',
                    Lv6: '207.2%',
                    Lv7: '222%',
                    Lv8: '236.8%',
                    Lv9: '251.6%',
                    Lv10: '266.4%',
                    Lv11: '281.2%',
                    Lv12: '296%',
                    Lv13: '314.5%',
                    Lv14: '333%',
                    Lv15: '351.5%',
                },
                'Additional Elemental DMG': {
                    Lv1: '44%',
                    Lv2: '47.3%',
                    Lv3: '50.6%',
                    Lv4: '55%',
                    Lv5: '58.3%',
                    Lv6: '61.6%',
                    Lv7: '66%',
                    Lv8: '70.4%',
                    Lv9: '74.8%',
                    Lv10: '79.2%',
                    Lv11: '83.6%',
                    Lv12: '88%',
                    Lv13: '93.5%',
                    Lv14: '99%',
                    Lv15: '104.5%',
                },
                Duration: {
                    Lv1: '6s',
                    Lv2: '6s',
                    Lv3: '6s',
                    Lv4: '6s',
                    Lv5: '6s',
                    Lv6: '6s',
                    Lv7: '6s',
                    Lv8: '6s',
                    Lv9: '6s',
                    Lv10: '6s',
                    Lv11: '6s',
                    Lv12: '6s',
                    Lv13: '6s',
                    Lv14: '6s',
                    Lv15: '6s',
                },
                CD: {
                    Lv1: '20s',
                    Lv2: '20s',
                    Lv3: '20s',
                    Lv4: '20s',
                    Lv5: '20s',
                    Lv6: '20s',
                    Lv7: '20s',
                    Lv8: '20s',
                    Lv9: '20s',
                    Lv10: '20s',
                    Lv11: '20s',
                    Lv12: '20s',
                    Lv13: '20s',
                    Lv14: '20s',
                    Lv15: '20s',
                },
                'Energy Cost': {
                    Lv1: '80',
                    Lv2: '80',
                    Lv3: '80',
                    Lv4: '80',
                    Lv5: '80',
                    Lv6: '80',
                    Lv7: '80',
                    Lv8: '80',
                    Lv9: '80',
                    Lv10: '80',
                    Lv11: '80',
                    Lv12: '80',
                    Lv13: '80',
                    Lv14: '80',
                    Lv15: '80',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Astable Invention',
            image: 'https://genshin.honeyhunterworld.com/img/p_432301.webp',
            description:
                'When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% chance to obtain double the product.',
        },
        {
            name: 'Catalyst Conversion',
            image: 'https://genshin.honeyhunterworld.com/img/p_432101.webp',
            description:
                'When Sucrose triggers a Swirl reaction, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s.',
        },
        {
            name: 'Mollis Favonius',
            image: 'https://genshin.honeyhunterworld.com/img/p_432201.webp',
            description:
                "When\nAstable Anemohypostasis Creation - 6308\nor\nForbidden Creation - Isomer 75 / Type II\nhits an opponent, increases all party members' (excluding Sucrose) Elemental Mastery by an amount equal to 20% of Sucrose's Elemental Mastery for 8s.",
        },
    ],
    constellations: [
        {
            name: 'Clustered Vacuum Field',
            image: 'https://genshin.honeyhunterworld.com/img/c_431.webp',
            description:
                'Astable Anemohypostasis Creation - 6308\ngains 1 additional charge.',
            level: 1,
        },
        {
            name: 'Beth: Unbound Form',
            image: 'https://genshin.honeyhunterworld.com/img/c_432.webp',
            description:
                'The duration of\nForbidden Creation - Isomer 75 / Type II\nis increased by 2s.',
            level: 2,
        },
        {
            name: 'Flawless Alchemistress',
            image: 'https://genshin.honeyhunterworld.com/img/c_433.webp',
            description:
                'Increases the Level of\nAstable Anemohypostasis Creation - 6308\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Alchemania',
            image: 'https://genshin.honeyhunterworld.com/img/c_434.webp',
            description:
                'Sucrose will reduce the CD of\nAstable Anemohypostasis Creation - 6308\nby 1-7s for every 7 Normal or Charged Attack hits she scores against opponents.\nOne hit may be counted every 0.1s.',
            level: 4,
        },
        {
            name: 'Caution: Standard Flask',
            image: 'https://genshin.honeyhunterworld.com/img/c_435.webp',
            description:
                'Increases the Level of\nForbidden Creation - Isomer 75 / Type II\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Chaotic Entropy',
            image: 'https://genshin.honeyhunterworld.com/img/c_436.webp',
            description:
                'If\nForbidden Creation - Isomer 75 / Type II\ntriggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration.',
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default Sucrose
