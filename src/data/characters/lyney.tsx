import { TalentScaling, Bonus, Character } from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const Lyney: Character = {
    name: 'Lyney',
    icon: 'https://api.ambr.top/assets/UI/UI_AvatarIcon_Liney.png',
    weapon: 'Bow',
    vision: 'Pyro',
    rarity: 5,
    description:
        'A famed Fontainian magician who possesses great stage presence as well as gift of the gab. Audiences are enthralled by his exquisite skills, and they hang on to his every clever word.',
    occupation: "Hotel Bouffes d'ete",
    baseStats: {
        '1/20': {
            'Base HP': 858.0,
            'Base ATK': 24.76,
            'Base DEF': 41.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2226.0,
            'Base ATK': 64.24,
            'Base DEF': 108.64,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 2961.0,
            'Base ATK': 85.47,
            'Base DEF': 144.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 4431.0,
            'Base ATK': 127.89,
            'Base DEF': 216.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 4954.0,
            'Base ATK': 142.98,
            'Base DEF': 241.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 5699.0,
            'Base ATK': 164.5,
            'Base DEF': 278.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 6396.0,
            'Base ATK': 184.61,
            'Base DEF': 312.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 7150.0,
            'Base ATK': 206.36,
            'Base DEF': 348.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 7672.0,
            'Base ATK': 221.44,
            'Base DEF': 374.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 8432.0,
            'Base ATK': 243.38,
            'Base DEF': 411.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 8955.0,
            'Base ATK': 258.47,
            'Base DEF': 437.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 9724.0,
            'Base ATK': 280.66,
            'Base DEF': 474.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 10247.0,
            'Base ATK': 295.74,
            'Base DEF': 500.17,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 11021.0,
            'Base ATK': 318.11,
            'Base DEF': 537.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Card Force Translocation',
            image: 'https://api.ambr.top/assets/UI/Skill_A_02.png',
            description:
                "Normal Attack\nPerforms up to 4 consecutive shots with a bow.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, flames will run across the arrowhead before being fired. Different effects will occur based on the time spent charging.\n\u00b7Charge Level 1: Fires off a Pyro-infused arrow, dealing\nPyro DMG\n.\n\u00b7Charge Level 2: Fires off a Prop Arrow that deals\nPyro DMG\n, and upon hit, it will summon a Grin-Malkin Hat.\nWhen firing the Prop Arrow, and when Lyney has more than 60% HP, he will consume a portion of his HP to obtain 1 Prop Surplus stack. Max 5 stacks. The effect will be removed after the character spends 30s out of combat.\nThe lowest Lyney can drop to through this method is 60% of his Max HP.\nGrin-Malkin Hat\n\u00b7Can taunt nearby opponents and attract their attacks. Each opponent can only be taunted by the Hat once every 5s.\n\u00b7The Hat will inherit a percentage of Lyney's Max HP.\n\u00b7If destroyed, or if its duration expires, it will fire off a\nPyrotechnic Strike\nat 1 nearby opponent, dealing\nPyro DMG\n.\nOnly 1 Hat can exist at any given time.\nArkhe: Pneuma\nAt certain intervals, the Prop Arrow will cause a Spiritbreath Thorn to descend upon its hit location, dealing Pneuma-aligned\nPyro DMG\n.",
            data: {
                '1-Hit DMG': {
                    Lv1: '38.79%',
                    Lv2: '41.94%',
                    Lv3: '45.1%',
                    Lv4: '49.61%',
                    Lv5: '52.77%',
                    Lv6: '56.38%',
                    Lv7: '61.34%',
                    Lv8: '66.3%',
                    Lv9: '71.26%',
                    Lv10: '76.67%',
                    Lv11: '82.08%',
                    Lv12: '87.49%',
                    Lv13: '92.91%',
                    Lv14: '98.32%',
                    Lv15: '103.73%',
                },
                '2-Hit DMG': {
                    Lv1: '38.01%',
                    Lv2: '41.11%',
                    Lv3: '44.2%',
                    Lv4: '48.62%',
                    Lv5: '51.71%',
                    Lv6: '55.25%',
                    Lv7: '60.11%',
                    Lv8: '64.97%',
                    Lv9: '69.84%',
                    Lv10: '75.14%',
                    Lv11: '80.44%',
                    Lv12: '85.75%',
                    Lv13: '91.05%',
                    Lv14: '96.36%',
                    Lv15: '101.66%',
                },
                '3-Hit DMG': {
                    Lv1: '54.52%',
                    Lv2: '58.96%',
                    Lv3: '63.40%',
                    Lv4: '69.74%',
                    Lv5: '74.18%',
                    Lv6: '79.26%',
                    Lv7: '86.22%',
                    Lv8: '93.20%',
                    Lv9: '100.18%',
                    Lv10: '107.78%',
                    Lv11: '115.38%',
                    Lv12: '123.00%',
                    Lv13: '130.60%',
                    Lv14: '138.22%',
                    Lv15: '145.82%',
                },
                '4-Hit DMG': {
                    Lv1: '56.93%',
                    Lv2: '61.57%',
                    Lv3: '66.2%',
                    Lv4: '72.82%',
                    Lv5: '77.45%',
                    Lv6: '82.75%',
                    Lv7: '90.03%',
                    Lv8: '97.31%',
                    Lv9: '104.6%',
                    Lv10: '112.54%',
                    Lv11: '120.48%',
                    Lv12: '128.43%',
                    Lv13: '136.37%',
                    Lv14: '144.32%',
                    Lv15: '152.26%',
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
                    Lv6: '165.17%',
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
                'Aimed Shot': {
                    Lv1: '43.86%',
                    Lv2: '47.43%',
                    Lv3: '51%',
                    Lv4: '56.1%',
                    Lv5: '59.67%',
                    Lv6: '63.75%',
                    Lv7: '69.36%',
                    Lv8: '74.97%',
                    Lv9: '80.58%',
                    Lv10: '86.7%',
                    Lv11: '92.82%',
                    Lv12: '98.94%',
                    Lv13: '105.06%',
                    Lv14: '111.18%',
                    Lv15: '117.3%',
                },
                'Aimed Shot Charge Level 1': {
                    Lv1: '124%',
                    Lv2: '133.3%',
                    Lv3: '142.6%',
                    Lv4: '155%',
                    Lv5: '164.3%',
                    Lv6: '173.6%',
                    Lv7: '186%',
                    Lv8: '198.4%',
                    Lv9: '210.8%',
                    Lv10: '223.2%',
                    Lv11: '235.6%',
                    Lv12: '248%',
                    Lv13: '263.5%',
                    Lv14: '279%',
                    Lv15: '294.5%',
                },
                'Prop Arrow DMG': {
                    Lv1: '172.8%',
                    Lv2: '185.76%',
                    Lv3: '198.72%',
                    Lv4: '216%',
                    Lv5: '228.96%',
                    Lv6: '241.92%',
                    Lv7: '259.2%',
                    Lv8: '276.48%',
                    Lv9: '293.76%',
                    Lv10: '311.04%',
                    Lv11: '328.32%',
                    Lv12: '345.6%',
                    Lv13: '367.2%',
                    Lv14: '388.8%',
                    Lv15: '410.4%',
                },
                'HP Cost': {
                    Lv1: '20% Max HP',
                    Lv2: '20% Max HP',
                    Lv3: '20% Max HP',
                    Lv4: '20% Max HP',
                    Lv5: '20% Max HP',
                    Lv6: '20% Max HP',
                    Lv7: '20% Max HP',
                    Lv8: '20% Max HP',
                    Lv9: '20% Max HP',
                    Lv10: '20% Max HP',
                    Lv11: '20% Max HP',
                    Lv12: '20% Max HP',
                    Lv13: '20% Max HP',
                    Lv14: '20% Max HP',
                    Lv15: '20% Max HP',
                },
                'Grin-Malkin Hat Inherited HP': {
                    Lv1: '64%',
                    Lv2: '68.8%',
                    Lv3: '73.6%',
                    Lv4: '80%',
                    Lv5: '84.8%',
                    Lv6: '89.6%',
                    Lv7: '96%',
                    Lv8: '102.4%',
                    Lv9: '108.8%',
                    Lv10: '115.2%',
                    Lv11: '121.6%',
                    Lv12: '128%',
                    Lv13: '136%',
                    Lv14: '144%',
                    Lv15: '152%',
                },
                'Grin-Malkin Hat Duration': {
                    Lv1: '4s',
                    Lv2: '4s',
                    Lv3: '4s',
                    Lv4: '4s',
                    Lv5: '4s',
                    Lv6: '4s',
                    Lv7: '4s',
                    Lv8: '4s',
                    Lv9: '4s',
                    Lv10: '4s',
                    Lv11: '4s',
                    Lv12: '4s',
                    Lv13: '4s',
                    Lv14: '4s',
                    Lv15: '4s',
                },
                'Pyrotechnic Strike DMG': {
                    Lv1: '212%',
                    Lv2: '227.9%',
                    Lv3: '243.8%',
                    Lv4: '265%',
                    Lv5: '280.9%',
                    Lv6: '296.8%',
                    Lv7: '318%',
                    Lv8: '339.2%',
                    Lv9: '360.4%',
                    Lv10: '381.6%',
                    Lv11: '402.8%',
                    Lv12: '424%',
                    Lv13: '450.5%',
                    Lv14: '477%',
                    Lv15: '503.5%',
                },
                'Spiritbreath Thorn DMG': {
                    Lv1: '27.55%',
                    Lv2: '29.62%',
                    Lv3: '31.68%',
                    Lv4: '34.44%',
                    Lv5: '36.51%',
                    Lv6: '38.57%',
                    Lv7: '41.33%',
                    Lv8: '44.08%',
                    Lv9: '46.84%',
                    Lv10: '49.59%',
                    Lv11: '52.35%',
                    Lv12: '55.1%',
                    Lv13: '58.55%',
                    Lv14: '61.99%',
                    Lv15: '65.44%',
                },
                'Spiritbreath Thorn Interval': {
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
            },
        },
        {
            name: 'Bewildering Lights',
            image: 'https://api.ambr.top/assets/UI/Skill_S_Liney_01.png',
            description:
                'Lyney does a flourish with his hat, unleashing a firework surprise!\nWhen used, he will clear all current Prop Surplus stacks and deal\nAoE Pyro DMG\nto opponents in front of him. DMG will be increased according to the stacks cleared, and this will also regenerate Lyney\'s HP based on his Max HP.\nWhen a Grin-Malkin Hat created by Lyney is on the field, the fireworks will cause it to explode, dealing\nAoE Pyro DMG\nequal to that of a Pyrotechnic Strike.\nThe DMG dealt through the Grin-Malkin Hat in this way is considered Charged Attack DMG.\n"Everyone knows that magicians will intentionally misdirect the audience... Ah, yes, while you were looking my way, the hat and assistant over there have both disappeared... Fascinating, is it not?"',
            data: {
                'Skill DMG': {
                    Lv1: '167.2%',
                    Lv2: '179.74%',
                    Lv3: '192.28%',
                    Lv4: '209%',
                    Lv5: '221.54%',
                    Lv6: '234.08%',
                    Lv7: '250.8%',
                    Lv8: '267.52%',
                    Lv9: '284.24%',
                    Lv10: '300.96%',
                    Lv11: '317.68%',
                    Lv12: '334.4%',
                    Lv13: '355.3%',
                    Lv14: '376.2%',
                    Lv15: '397.1%',
                },
                'Skill DMG Bonus': {
                    Lv1: '53.2% ATK / Stack',
                    Lv2: '57.19% ATK / Stack',
                    Lv3: '61.18% ATK / Stack',
                    Lv4: '66.5% ATK / Stack',
                    Lv5: '70.49% ATK / Stack',
                    Lv6: '74.48% ATK / Stack',
                    Lv7: '79.8% ATK / Stack',
                    Lv8: '85.12% ATK / Stack',
                    Lv9: '90.44% ATK / Stack',
                    Lv10: '95.76% ATK / Stack',
                    Lv11: '101.08% ATK / Stack',
                    Lv12: '106.4% ATK / Stack',
                    Lv13: '113.05% ATK / Stack',
                    Lv14: '119.7% ATK / Stack',
                    Lv15: '126.35% ATK / Stack',
                },
                'HP Regeneration': {
                    Lv1: '20% / Stack',
                    Lv2: '20% / Stack',
                    Lv3: '20% / Stack',
                    Lv4: '20% / Stack',
                    Lv5: '20% / Stack',
                    Lv6: '20% / Stack',
                    Lv7: '20% / Stack',
                    Lv8: '20% / Stack',
                    Lv9: '20% / Stack',
                    Lv10: '20% / Stack',
                    Lv11: '20% / Stack',
                    Lv12: '20% / Stack',
                    Lv13: '20% / Stack',
                    Lv14: '20% / Stack',
                    Lv15: '20% / Stack',
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
            name: 'Wondrous Trick: Miracle Parade',
            image: 'https://api.ambr.top/assets/UI/Skill_E_Liney_01.png',
            description:
                'Unleashing his magic, Lyney turns himself into a Grin-Malkin Cat that can move around quickly. (Not to be mistaken for the Grin-Malkin Hat. They\'re two different props!)\nWhen the Grin-Malkin Cat gets close to opponents, it will send flames falling down on them, dealing at most 1 instance of\nPyro DMG\nto each opponent. When the duration ends, he will dismiss the Grin-Malkin Cat and ignite fireworks that deal\nAoE Pyro DMG\n, summon 1 Grin-Malkin Hat, and grant himself 1 Prop Surplus stack.\nGrin-Malkin Cat can be actively canceled.\n"Watch closely now. This is a time for miracles, and it belongs to just the two of us!"',
            data: {
                'Skill DMG': {
                    Lv1: '154%',
                    Lv2: '165.55%',
                    Lv3: '177.1%',
                    Lv4: '192.5%',
                    Lv5: '204.05%',
                    Lv6: '215.6%',
                    Lv7: '231%',
                    Lv8: '246.4%',
                    Lv9: '261.8%',
                    Lv10: '277.2%',
                    Lv11: '292.6%',
                    Lv12: '308%',
                    Lv13: '327.25%',
                    Lv14: '346.5%',
                    Lv15: '365.75%',
                },
                'Explosive Firework DMG': {
                    Lv1: '414%',
                    Lv2: '445.05%',
                    Lv3: '476.1%',
                    Lv4: '517.5%',
                    Lv5: '548.55%',
                    Lv6: '579.6%',
                    Lv7: '621%',
                    Lv8: '662.4%',
                    Lv9: '703.8%',
                    Lv10: '745.2%',
                    Lv11: '786.6%',
                    Lv12: '828%',
                    Lv13: '879.75%',
                    Lv14: '931.5%',
                    Lv15: '983.25%',
                },
                Duration: {
                    Lv1: '3s',
                    Lv2: '3s',
                    Lv3: '3s',
                    Lv4: '3s',
                    Lv5: '3s',
                    Lv6: '3s',
                    Lv7: '3s',
                    Lv8: '3s',
                    Lv9: '3s',
                    Lv10: '3s',
                    Lv11: '3s',
                    Lv12: '3s',
                    Lv13: '3s',
                    Lv14: '3s',
                    Lv15: '3s',
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
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Trivial Observations',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_07.png',
            description:
                'Displays the location of nearby\nresources unique to Fontaine\non the mini-map.',
        },
        {
            name: 'Perilous Performance',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_05.png',
            description:
                'If Lyney consumes HP when firing off a\nProp Arrow\n, the Grin-Malkin hat summoned by the arrow will, upon hitting an opponent, restore 3 Energy to Lyney and increase DMG dealt by 80% of his ATK.',
        },
        {
            name: 'Conclusive Ovation',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_06.png',
            description:
                'The DMG Lyney deals to opponents affected by\nPyro\nwill receive the following buffs:\n\u00b7Increases the DMG dealt by 60%.\n\u00b7Each\nPyro\nparty member other than Lyney will cause the DMG dealt to increase by an additional 20%.\nLyney can deal up to 100% increased DMG to opponents affected by\nPyro\nin this way.',
        },
    ],
    constellations: [
        {
            name: 'Whimsical Wonders',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_01.png',
            description:
                'Lyney can have 2\nGrin-Malkin Hats\npresent at once.\nAdditionally, Prop Arrows will summon 2 Grin-Malkin Hats and grant Lyney 1 extra stack of Prop Surplus. This effect can occur once every 15s.',
            level: 1,
        },
        {
            name: 'Loquacious Cajoling',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_03.png',
            description:
                'When Lyney is on the field, he will gain a stack of Crisp Focus every 2s. Each stack will increase his CRIT DMG by 20%. Max 3 stacks. This effect will be canceled when Lyney leaves the field.',
            level: 2,
        },
        {
            name: 'Prestidigitation',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Liney_01.png',
            description:
                'Increases the Level of\nNormal Attack: Card Force Translocation\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Well-Versed, Well-Rehearsed',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_02.png',
            description:
                "After an opponent is hit by Lyney's\nPyro\nCharged Attack, this opponent's\nPyro RES\nwill be decreased by 20% for 6s.",
            level: 4,
        },
        {
            name: 'To Pierce Enigmas',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Liney_02.png',
            description:
                'Increases the Level of\nWondrous Trick: Miracle Parade\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Guarded Smile',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Liney_04.png',
            description:
                "When Lyney fires a\nProp Arrow\n, he will fire a Pyrotechnic Strike: Reprised that will deal 80% of a Pyrotechnic Strike's DMG. This DMG is considered Charged Attack DMG.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Lyney
