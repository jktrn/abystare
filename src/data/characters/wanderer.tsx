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

const Wanderer: Character = {
    name: 'Wanderer',
    icon: '/images/characters/wanderer.png',
    weapon: 'Catalyst',
    vision: 'Anemo',
    rarity: 5,
    description:
        'A wayfaring figure whose identity is a mystery. He dresses like a mountain ascetic, but he certainly does not act the part.',
    occupation: 'None',
    baseStats: {
        '1/20': {
            'Base HP': 791.0,
            'Base ATK': 25.51,
            'Base DEF': 47.27,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2053.0,
            'Base ATK': 66.17,
            'Base DEF': 122.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 2731.0,
            'Base ATK': 88.04,
            'Base DEF': 163.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 4086.0,
            'Base ATK': 131.74,
            'Base DEF': 244.1,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 4568.0,
            'Base ATK': 147.28,
            'Base DEF': 272.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 5256.0,
            'Base ATK': 169.45,
            'Base DEF': 313.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 5899.0,
            'Base ATK': 190.17,
            'Base DEF': 352.36,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 6593.0,
            'Base ATK': 212.56,
            'Base DEF': 393.86,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 7076.0,
            'Base ATK': 228.1,
            'Base DEF': 422.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 7777.0,
            'Base ATK': 250.7,
            'Base DEF': 464.54,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 8259.0,
            'Base ATK': 266.24,
            'Base DEF': 493.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 8968.0,
            'Base ATK': 289.1,
            'Base DEF': 535.68,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 9450.0,
            'Base ATK': 304.64,
            'Base DEF': 564.48,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 10164.0,
            'Base ATK': 327.67,
            'Base DEF': 607.16,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Yuuban Meigen',
            image: 'https://genshin.honeyhunterworld.com/img/s_753101.webp',
            description:
                'Normal Attack\nPerforms up to 3 attacks using wind blades, dealing\nAnemo DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina, gathers a build up of high wind pressure, and deals\nAoE Anemo DMG\nafter a short casting time.\nPlunging Attack\nCalling upon the power of Anemo, the Wanderer plunges towards the ground from mid-air, damaging all opponents in his path. Deals\nAoE Anemo DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '68.71%',
                    Lv2: '74.31%',
                    Lv3: '79.9%',
                    Lv4: '87.89%',
                    Lv5: '93.48%',
                    Lv6: '99.87%',
                    Lv7: '108.66%',
                    Lv8: '117.45%',
                    Lv9: '126.24%',
                    Lv10: '135.83%',
                    Lv11: '145.42%',
                    Lv12: '155.01%',
                    Lv13: '164.59%',
                    Lv14: '174.18%',
                    Lv15: '183.77%',
                },
                '2-Hit DMG': {
                    Lv1: '65.02%',
                    Lv2: '70.31%',
                    Lv3: '75.6%',
                    Lv4: '83.16%',
                    Lv5: '88.45%',
                    Lv6: '94.5%',
                    Lv7: '102.82%',
                    Lv8: '111.13%',
                    Lv9: '119.45%',
                    Lv10: '128.52%',
                    Lv11: '137.59%',
                    Lv12: '146.66%',
                    Lv13: '155.74%',
                    Lv14: '164.81%',
                    Lv15: '173.88%',
                },
                '3-Hit DMG': {
                    Lv1: '95.28%',
                    Lv2: '103.04%',
                    Lv3: '110.80%',
                    Lv4: '121.88%',
                    Lv5: '129.64%',
                    Lv6: '138.50%',
                    Lv7: '150.68%',
                    Lv8: '162.88%',
                    Lv9: '175.06%',
                    Lv10: '188.36%',
                    Lv11: '201.66%',
                    Lv12: '214.96%',
                    Lv13: '228.24%',
                    Lv14: '241.54%',
                    Lv15: '254.84%',
                },
                'Charged Attack DMG': {
                    Lv1: '132.08%',
                    Lv2: '141.99%',
                    Lv3: '151.89%',
                    Lv4: '165.1%',
                    Lv5: '175.01%',
                    Lv6: '184.91%',
                    Lv7: '198.12%',
                    Lv8: '211.33%',
                    Lv9: '224.54%',
                    Lv10: '237.74%',
                    Lv11: '250.95%',
                    Lv12: '264.16%',
                    Lv13: '280.67%',
                    Lv14: '297.18%',
                    Lv15: '313.69%',
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
            name: 'Hanega: Song of the Wind',
            image: 'https://genshin.honeyhunterworld.com/img/s_753201.webp',
            description:
                'Concentrates the power of the winds to break free from the shackles of the earth, dealing\nAoE Anemo DMG\nbefore leaping into the air and entering the Windfavored state.\nWindfavored\nThe Wanderer cannot perform Plunging Attacks in this state. When he uses Normal and Charged Attacks, they will be converted into Kuugo: Fushoudan and Kuugo: Toufukai respectively; the DMG they deal and their AoE will be increased, and their DMG will be considered Normal and Charged Attack DMG respectively. Kuugo: Toufukai will not consume Stamina.\nThe Wanderer will hover persistently during this time. While this state is active, the Wanderer\'s movements gain the following properties:\n\u00b7Persistently consumes Kuugoryoku Points to maintain this hovering state.\n\u00b7When sprinting, additional Kuugoryoku Points will be consumed for the Wanderer to accelerate mid-air. Holding sprint will cause persistent Kuugoryoku Point consumption to maintain speed. This effect will replace his default sprint.\n\u00b7Jumping expends extra Kuugoryoku Points to increase hovering height. Holding jump will cause persistent Kuugoryoku Point consumption to keep increasing hovering height.\nRunning out of Kuugoryoku Points will end the Windfavored state.\nA second cast during the duration of Windfavored will also end it.\n"The world dances in a weightless whirl, presenting a secret that can only be found in the flowers."',
            data: {
                'Skill DMG': {
                    Lv1: '95.2%',
                    Lv2: '102.34%',
                    Lv3: '109.48%',
                    Lv4: '119%',
                    Lv5: '126.14%',
                    Lv6: '133.28%',
                    Lv7: '142.8%',
                    Lv8: '152.32%',
                    Lv9: '161.84%',
                    Lv10: '171.36%',
                    Lv11: '180.88%',
                    Lv12: '190.4%',
                    Lv13: '202.3%',
                    Lv14: '214.2%',
                    Lv15: '226.1%',
                },
                'Kuugo: Fushoudan DMG': {
                    Lv1: '132.98% Normal Attack DMG',
                    Lv2: '134.96% Normal Attack DMG',
                    Lv3: '136.93% Normal Attack DMG',
                    Lv4: '139.5% Normal Attack DMG',
                    Lv5: '141.47% Normal Attack DMG',
                    Lv6: '143.45% Normal Attack DMG',
                    Lv7: '146.02% Normal Attack DMG',
                    Lv8: '148.58% Normal Attack DMG',
                    Lv9: '151.15% Normal Attack DMG',
                    Lv10: '153.72% Normal Attack DMG',
                    Lv11: '156.29% Normal Attack DMG',
                    Lv12: '158.85% Normal Attack DMG',
                    Lv13: '161.42% Normal Attack DMG',
                    Lv14: '163.99% Normal Attack DMG',
                    Lv15: '166.56% Normal Attack DMG',
                },
                'Kuugo: Toufukai DMG': {
                    Lv1: '126.39% Charged Attack DMG',
                    Lv2: '127.97% Charged Attack DMG',
                    Lv3: '129.55% Charged Attack DMG',
                    Lv4: '131.6% Charged Attack DMG',
                    Lv5: '133.18% Charged Attack DMG',
                    Lv6: '134.76% Charged Attack DMG',
                    Lv7: '136.81% Charged Attack DMG',
                    Lv8: '138.87% Charged Attack DMG',
                    Lv9: '140.92% Charged Attack DMG',
                    Lv10: '142.98% Charged Attack DMG',
                    Lv11: '145.03% Charged Attack DMG',
                    Lv12: '147.08% Charged Attack DMG',
                    Lv13: '149.14% Charged Attack DMG',
                    Lv14: '151.19% Charged Attack DMG',
                    Lv15: '153.25% Charged Attack DMG',
                },
                'Initial Kuugoryoku Points': {
                    Lv1: '100',
                    Lv2: '100',
                    Lv3: '100',
                    Lv4: '100',
                    Lv5: '100',
                    Lv6: '100',
                    Lv7: '100',
                    Lv8: '100',
                    Lv9: '100',
                    Lv10: '100',
                    Lv11: '100',
                    Lv12: '100',
                    Lv13: '100',
                    Lv14: '100',
                    Lv15: '100',
                },
                CD: {
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
            name: 'Kyougen: Five Ceremonial Plays',
            image: 'https://genshin.honeyhunterworld.com/img/s_753901.webp',
            description:
                'Compresses the atmosphere into a singular vacuum that grinds all troubles away, dealing multiple instances of\nAoE Anemo DMG\n.\nIf the character is in the Windfavored state due to the skill "Hanega: Song of the Wind," Windfavored state will end after casting.\n"Bright be the narrowed gaze of the sky, casting its sight on dreams both past and present, like radiance washing over dust on the winds."',
            data: {
                'Skill DMG': {
                    Lv1: '736.00%',
                    Lv2: '791.20%',
                    Lv3: '846.40%',
                    Lv4: '920.00%',
                    Lv5: '975.20%',
                    Lv6: '1030.40%',
                    Lv7: '1104.00%',
                    Lv8: '1177.60%',
                    Lv9: '1251.20%',
                    Lv10: '1324.80%',
                    Lv11: '1398.40%',
                    Lv12: '1472.00%',
                    Lv13: '1564.00%',
                    Lv14: '1656.00%',
                    Lv15: '1748.00%',
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
            name: 'Strum the Swirling Winds',
            image: 'https://genshin.honeyhunterworld.com/img/p_752301.webp',
            description:
                'Mora expended when ascending Bows and Catalysts is decreased by 50%.',
        },
        {
            name: 'Jade-Claimed Flower',
            image: 'https://genshin.honeyhunterworld.com/img/p_752101.webp',
            description:
                'If\nHanega: Song of the Wind\ncomes into contact with\nHydro\n/\nPyro\n/\nCryo\n/\nElectro\nwhen it is unleashed, this instance of the Windfavored state will obtain buffs according to the contacted element(s):\n\u00b7\nHydro\n: Kuugoryoku Point cap increases by 20.\n\u00b7\nPyro\n: ATK increases by 30%.\n\u00b7\nCryo\n: CRIT Rate increases by 20%.\n\u00b7\nElectro\n: When Normal and Charged Attacks hit an opponent, 0.8 Energy will be restored. Energy can be restored this way once every 0.2s.\nYou can have up to 2 different kinds of these buffs simultaneously.',
        },
        {
            name: 'Gales of Reverie',
            image: 'https://genshin.honeyhunterworld.com/img/p_752201.webp',
            description:
                'When the Wanderer hits opponents with Kuugo: Fushoudan or Kuugo: Toufukai in his\nWindfavored\nstate, he has a 16% chance to obtain the Descent effect: The next time the Wanderer accelerates in mid-air while in this instance of the Windfavored state, this effect will be removed, this acceleration instance will not consume any Kuugoryoku Points, and he will fire off 4 wind arrows that deal 35% of his ATK as\nAnemo DMG\neach.\nFor each Kuugo: Fushoudan and Kuugo: Toufukai that does not produce this effect, the next attack of those types will have a 12% increased chance of producing it. The calculation of the effect production is done once every 0.1s.',
        },
    ],
    constellations: [
        {
            name: 'Shoban: Ostentatious Plumage',
            image: 'https://genshin.honeyhunterworld.com/img/c_751.webp',
            description:
                'When in the\nWindfavored\nstate, the Attack SPD of the Wanderer\'s Kuugo: Fushoudan and Kuugo: Toufukai is increased by 10%.\nAdditionally, the wind arrows fired by the Passive Talent "Gales of Reverie" will deal an additional 25% of his ATK as DMG. You must unlock the Passive Talent "Gales of Reverie" first.',
            level: 1,
        },
        {
            name: 'Niban: Isle Amidst White Waves',
            image: 'https://genshin.honeyhunterworld.com/img/c_752.webp',
            description:
                "When in the\nWindfavored\nstate,\nKyougen: Five Ceremonial Plays\nwill see its DMG increased by 4% per point of difference between the max amount of Kuugoryoku Points contrasted with Kuugoryoku's present capacity when using this skill.\nThrough this method, you can increase Kyougen: Five Ceremonial Plays's DMG by a maximum of 200%.",
            level: 2,
        },
        {
            name: 'Sanban: Moonflower Kusemai',
            image: 'https://genshin.honeyhunterworld.com/img/c_753.webp',
            description:
                'Increases the Level of\nKyougen: Five Ceremonial Plays\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Yonban: Set Adrift into Spring',
            image: 'https://genshin.honeyhunterworld.com/img/c_754.webp',
            description:
                'When casting\nHanega: Song of the Wind\n, should the Passive Talent "Jade-Claimed Flower" be triggered, the character will gain buffs in correspondence to the contacted Elemental Type(s), and also obtain a random untriggered buff. A maximum of 3 such corresponding elemental buffs can exist simultaneously.\nYou must unlock the Passive Talent "Jade-Claimed Flower" first.',
            level: 4,
        },
        {
            name: 'Matsuban: Ancient Illuminator From Abroad',
            image: 'https://genshin.honeyhunterworld.com/img/c_755.webp',
            description:
                'Increases the Level of\nHanega: Song of the Wind\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "Shugen: The Curtains' Melancholic Sway",
            image: 'https://genshin.honeyhunterworld.com/img/c_756.webp',
            description:
                "When the Wanderer actively hits an opponent with Kuugo: Fushoudan while in the\nWindfavored\nstate, the following effects will occur:\n\u00b7Deals an additional instance of Kuugo: Fushoudan at the position hit, dealing 40% of the attack's original DMG. This DMG will be considered Normal Attack DMG.\n\u00b7When the Wanderer falls below 40 Kuugoryoku Points, restores 4 Points to him. Kuugoryoku Points can be restored in this manner once every 0.2s. This restoration can occur up to 5 times within one Windfavored duration.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Wanderer