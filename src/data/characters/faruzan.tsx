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

const Faruzan: Character = {
    name: 'Faruzan',
    icon: 'https://api.ambr.top/assets/UI/UI_AvatarIcon_Faruzan.png',
    weapon: 'Bow',
    vision: 'Anemo',
    rarity: 4,
    description:
        'A researcher from "one hundred years ago." She enjoys self-identifying as everyone\'s senior, and has significant knowledge of ancient scripts and machines of all kinds.',
    occupation: 'Haravatat',
    baseStats: {
        '1/20': {
            'Base HP': 802.0,
            'Base ATK': 16.47,
            'Base DEF': 52.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2061.0,
            'Base ATK': 42.32,
            'Base DEF': 135.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 2661.0,
            'Base ATK': 54.62,
            'Base DEF': 174.58,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 3985.0,
            'Base ATK': 81.82,
            'Base DEF': 261.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 4411.0,
            'Base ATK': 90.56,
            'Base DEF': 289.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5074.0,
            'Base ATK': 104.17,
            'Base DEF': 332.93,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 5642.0,
            'Base ATK': 115.83,
            'Base DEF': 370.19,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 6305.0,
            'Base ATK': 129.43,
            'Base DEF': 413.68,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 6731.0,
            'Base ATK': 138.18,
            'Base DEF': 441.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 7393.0,
            'Base ATK': 151.77,
            'Base DEF': 485.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 7819.0,
            'Base ATK': 160.51,
            'Base DEF': 513.0,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 8481.0,
            'Base ATK': 174.12,
            'Base DEF': 556.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 8907.0,
            'Base ATK': 182.86,
            'Base DEF': 584.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 9570.0,
            'Base ATK': 196.47,
            'Base DEF': 627.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Parthian Shot',
            image: 'https://api.ambr.top/assets/UI/Skill_A_02.png',
            description:
                'Normal Attack\nPerforms up to 4 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, mighty winds will accumulate on the arrowhead. A fully charged wind arrow will deal\nAnemo DMG\n.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, hitting opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '44.73%',
                    Lv2: '48.37%',
                    Lv3: '52.01%',
                    Lv4: '57.21%',
                    Lv5: '60.85%',
                    Lv6: '65.01%',
                    Lv7: '70.74%',
                    Lv8: '76.46%',
                    Lv9: '82.18%',
                    Lv10: '88.42%',
                    Lv11: '94.66%',
                    Lv12: '100.9%',
                    Lv13: '107.14%',
                    Lv14: '113.38%',
                    Lv15: '119.63%',
                },
                '2-Hit DMG': {
                    Lv1: '42.19%',
                    Lv2: '45.62%',
                    Lv3: '49.05%',
                    Lv4: '53.96%',
                    Lv5: '57.39%',
                    Lv6: '61.32%',
                    Lv7: '66.71%',
                    Lv8: '72.11%',
                    Lv9: '77.51%',
                    Lv10: '83.39%',
                    Lv11: '89.28%',
                    Lv12: '95.16%',
                    Lv13: '101.05%',
                    Lv14: '106.94%',
                    Lv15: '112.82%',
                },
                '3-Hit DMG': {
                    Lv1: '53.16%',
                    Lv2: '57.49%',
                    Lv3: '61.82%',
                    Lv4: '68%',
                    Lv5: '72.33%',
                    Lv6: '77.27%',
                    Lv7: '84.07%',
                    Lv8: '90.87%',
                    Lv9: '97.67%',
                    Lv10: '105.09%',
                    Lv11: '112.51%',
                    Lv12: '119.93%',
                    Lv13: '127.35%',
                    Lv14: '134.76%',
                    Lv15: '142.18%',
                },
                '4-Hit DMG': {
                    Lv1: '70.62%',
                    Lv2: '76.37%',
                    Lv3: '82.12%',
                    Lv4: '90.33%',
                    Lv5: '96.08%',
                    Lv6: '102.65%',
                    Lv7: '111.68%',
                    Lv8: '120.71%',
                    Lv9: '129.74%',
                    Lv10: '139.6%',
                    Lv11: '149.45%',
                    Lv12: '159.31%',
                    Lv13: '169.16%',
                    Lv14: '179.02%',
                    Lv15: '188.87%',
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
                'Fully-Charged Aimed Shot': {
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
            },
        },
        {
            name: 'Wind Realm of Nasamjnin',
            image: 'https://api.ambr.top/assets/UI/Skill_S_Faruzan_01.png',
            description:
                'Faruzan deploys a polyhedron that deals\nAoE Anemo DMG\nto nearby opponents. She will also enter the Manifest Gale state.\nWhile in the Manifest Gale state, Faruzan\'s next fully charged shot will consume this state and will become a Hurricane Arrow that contains high-pressure currents. This arrow deals\nAnemo DMG\nbased on the DMG of a fully charged Aimed Shot from "Normal Attack: Parthian Shot."\nPressurized Collapse\nThe Hurricane Arrow will apply a Pressurized Collapse effect to the opponent or character hit. This effect will be removed after a short delay, creating a vortex that deals\nAoE Anemo DMG\nand pulls nearby objects and opponents in. If the Hurricane Arrow does not hit any opponent or character, it will create a Pressurized Collapse effect at its point of impact.\nThe vortex DMG is considered Elemental Skill DMG.\nThe winds of truth buffet the spirits of those who seek truth, dispersing the miasma of preconception.',
            data: {
                'Skill DMG': {
                    Lv1: '148.8%',
                    Lv2: '159.96%',
                    Lv3: '171.12%',
                    Lv4: '186%',
                    Lv5: '197.16%',
                    Lv6: '208.32%',
                    Lv7: '223.2%',
                    Lv8: '238.08%',
                    Lv9: '252.96%',
                    Lv10: '267.84%',
                    Lv11: '282.72%',
                    Lv12: '297.6%',
                    Lv13: '316.2%',
                    Lv14: '334.8%',
                    Lv15: '353.4%',
                },
                'Pressurized Collapse Vortex DMG': {
                    Lv1: '108%',
                    Lv2: '116.1%',
                    Lv3: '124.2%',
                    Lv4: '135%',
                    Lv5: '143.1%',
                    Lv6: '151.2%',
                    Lv7: '162%',
                    Lv8: '172.8%',
                    Lv9: '183.6%',
                    Lv10: '194.4%',
                    Lv11: '205.2%',
                    Lv12: '216%',
                    Lv13: '229.5%',
                    Lv14: '243%',
                    Lv15: '256.5%',
                },
                'Manifest Gale Duration': {
                    Lv1: '18s',
                    Lv2: '18s',
                    Lv3: '18s',
                    Lv4: '18s',
                    Lv5: '18s',
                    Lv6: '18s',
                    Lv7: '18s',
                    Lv8: '18s',
                    Lv9: '18s',
                    Lv10: '18s',
                    Lv11: '18s',
                    Lv12: '18s',
                    Lv13: '18s',
                    Lv14: '18s',
                    Lv15: '18s',
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
            name: "The Wind's Secret Ways",
            image: 'https://api.ambr.top/assets/UI/Skill_E_Faruzan_01.png',
            description:
                "Faruzan deploys a Dazzling Polyhedron that unleashes a Whirlwind Pulse and deals\nAoE Anemo DMG\n.\nWhile the Dazzling Polyhedron persists, it will continuously move along a triangular path. Once it reaches each corner of that triangular path, it will unleash 1 more Whirlwind Pulse.\nWhirlwind Pulse\n\u00b7When the Whirlwind Pulse is unleashed, it will apply Perfidious Wind's Bale to nearby opponents, decreasing their\nAnemo RES\n.\n\u00b7The Whirlwind Pulse will also apply Prayerful Wind's Benefit to all nearby party members when it is unleashed, granting them an\nAnemo DMG Bonus\n.\nOne must have respect for the unknown wisdom that one might find hidden in ancient ruins.",
            data: {
                'Skill DMG': {
                    Lv1: '377.6%',
                    Lv2: '405.92%',
                    Lv3: '434.24%',
                    Lv4: '472%',
                    Lv5: '500.32%',
                    Lv6: '528.64%',
                    Lv7: '566.4%',
                    Lv8: '604.16%',
                    Lv9: '641.92%',
                    Lv10: '679.68%',
                    Lv11: '717.44%',
                    Lv12: '755.2%',
                    Lv13: '802.4%',
                    Lv14: '849.6%',
                    Lv15: '896.8%',
                },
                'Anemo DMG Bonus': {
                    Lv1: '18%',
                    Lv2: '19.35%',
                    Lv3: '20.7%',
                    Lv4: '22.5%',
                    Lv5: '23.85%',
                    Lv6: '25.2%',
                    Lv7: '27%',
                    Lv8: '28.8%',
                    Lv9: '30.6%',
                    Lv10: '32.4%',
                    Lv11: '34.2%',
                    Lv12: '36%',
                    Lv13: '38.25%',
                    Lv14: '40.5%',
                    Lv15: '42.75%',
                },
                "Prayerful Wind's Benefit Duration": {
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
                'Anemo RES Decrease': {
                    Lv1: '30%',
                    Lv2: '30%',
                    Lv3: '30%',
                    Lv4: '30%',
                    Lv5: '30%',
                    Lv6: '30%',
                    Lv7: '30%',
                    Lv8: '30%',
                    Lv9: '30%',
                    Lv10: '30%',
                    Lv11: '30%',
                    Lv12: '30%',
                    Lv13: '30%',
                    Lv14: '30%',
                    Lv15: '30%',
                },
                "Perfidious Wind's Bale Duration": {
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
                Duration: {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
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
            name: 'Tomes Light the Path',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Cyno_07.png',
            description:
                'Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.',
        },
        {
            name: 'Impetuous Flow',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_05.png',
            description:
                "When Faruzan is in the Manifest Gale state created by\nWind Realm of Nasamjnin\n, the amount of time taken to charge a shot is decreased by 60%, and she can apply\nThe Wind's Secret Ways\n' Perfidious Wind's Bale to opponents who are hit by the vortex created by Pressurized Collapse.",
        },
        {
            name: 'Lost Wisdom of the Seven Caverns',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_06.png',
            description:
                "When characters affected by\nThe Wind's Secret Ways\n' Prayerful Wind's Benefit deal\nAnemo DMG\nusing Normal, Charged, Plunging Attacks, Elemental Skills, or Elemental Bursts to opponents, they will gain the Hurricane Guard effect: This DMG will be increased based on 32% of Faruzan's Base ATK. 1 instance of Hurricane Guard can occur once every 0.8s. This DMG Bonus will be cleared after Prayerful Wind's Benefit expires or after the effect is triggered once.",
        },
    ],
    constellations: [
        {
            name: 'Truth by Any Means',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_01.png',
            description:
                'Faruzan can fire off a maximum of 2 Hurricane Arrows using fully charged Aimed Shots while under the effect of a single Manifest Gale created by\nWind Realm of Nasamjnin\n.',
            level: 1,
        },
        {
            name: 'Overzealous Intellect',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_02.png',
            description:
                "The duration of the Dazzling Polyhedron created by\nThe Wind's Secret Ways\nis increased by 6s.",
            level: 2,
        },
        {
            name: 'Spirit-Orchard Stroll',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Faruzan_01.png',
            description:
                'Increases the Level of\nWind Realm of Nasamjnin\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Divine Comprehension',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_03.png',
            description:
                'The vortex created by\nPressurized Collapses\nwill restore Energy to Faruzan based on the number of opponents hit: If it hits 1 opponent, it will restore 2 Energy for Faruzan. Each additional opponent hit will restore 0.5 more Energy for Faruzan.\nA maximum of 4 Energy can be restored to her per vortex.',
            level: 4,
        },
        {
            name: 'Wonderland of Rumination',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Faruzan_02.png',
            description:
                "Increases the Level of\nThe Wind's Secret Ways\nby 3.\nMaximum upgrade level is 15.",
            level: 5,
        },
        {
            name: 'The Wondrous Path of Truth',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Faruzan_04.png',
            description:
                "Characters affected by\nThe Wind's Secret Ways\n' Prayerful Wind's Benefit have 40% increased CRIT DMG when they deal\nAnemo DMG\n. When the active character deals DMG while affected by Prayerful Wind's Benefit, they will apply Pressurized Collapse to the opponent damaged. This effect can be triggered once every 3s. This CD is shared between all party members.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Faruzan
