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

const Xiao: Character = {
    name: 'Xiao',
    icon: '/images/characters/xiao.png',
    weapon: 'Polearm',
    vision: 'Anemo',
    rarity: 5,
    description:
        'A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."',
    occupation: 'Liyue Adeptus',
    baseStats: {
        '1/20': {
            'Base HP': 991.0,
            'Base ATK': 27.19,
            'Base DEF': 62.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 2572.0,
            'Base ATK': 70.52,
            'Base DEF': 161.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 3422.0,
            'Base ATK': 93.83,
            'Base DEF': 214.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 5120.0,
            'Base ATK': 140.39,
            'Base DEF': 321.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 5724.0,
            'Base ATK': 156.95,
            'Base DEF': 359.26,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 6586.0,
            'Base ATK': 180.58,
            'Base DEF': 413.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 7391.0,
            'Base ATK': 202.66,
            'Base DEF': 463.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 8262.0,
            'Base ATK': 226.53,
            'Base DEF': 518.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 8866.0,
            'Base ATK': 243.09,
            'Base DEF': 556.41,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 9744.0,
            'Base ATK': 267.17,
            'Base DEF': 611.54,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 10348.0,
            'Base ATK': 283.73,
            'Base DEF': 649.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 11236.0,
            'Base ATK': 308.09,
            'Base DEF': 705.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 11840.0,
            'Base ATK': 324.65,
            'Base DEF': 743.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 12736.0,
            'Base ATK': 349.2,
            'Base DEF': 799.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Whirlwind Thrust',
            image: 'https://genshin.honeyhunterworld.com/img/s_263101.webp',
            description:
                'Normal Attack\nPerforms up to 6 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to perform an upward thrust.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\nXiao does not take DMG from performing Plunging Attacks.',
            data: {
                '1-Hit DMG': {
                    Lv1: '55.08%',
                    Lv2: '58.84%',
                    Lv3: '62.60%',
                    Lv4: '67.60%',
                    Lv5: '71.36%',
                    Lv6: '75.74%',
                    Lv7: '81.38%',
                    Lv8: '87.02%',
                    Lv9: '92.64%',
                    Lv10: '98.28%',
                    Lv11: '103.92%',
                    Lv12: '109.54%',
                    Lv13: '115.18%',
                    Lv14: '120.82%',
                    Lv15: '126.46%',
                },
                '2-Hit DMG': {
                    Lv1: '56.94%',
                    Lv2: '60.82%',
                    Lv3: '64.7%',
                    Lv4: '69.88%',
                    Lv5: '73.76%',
                    Lv6: '78.29%',
                    Lv7: '84.11%',
                    Lv8: '89.93%',
                    Lv9: '95.76%',
                    Lv10: '101.58%',
                    Lv11: '107.4%',
                    Lv12: '113.22%',
                    Lv13: '119.05%',
                    Lv14: '124.87%',
                    Lv15: '130.69%',
                },
                '3-Hit DMG': {
                    Lv1: '68.55%',
                    Lv2: '73.23%',
                    Lv3: '77.9%',
                    Lv4: '84.13%',
                    Lv5: '88.81%',
                    Lv6: '94.26%',
                    Lv7: '101.27%',
                    Lv8: '108.28%',
                    Lv9: '115.29%',
                    Lv10: '122.3%',
                    Lv11: '129.31%',
                    Lv12: '136.33%',
                    Lv13: '143.34%',
                    Lv14: '150.35%',
                    Lv15: '157.36%',
                },
                '4-Hit DMG': {
                    Lv1: '75.32%',
                    Lv2: '80.46%',
                    Lv3: '85.60%',
                    Lv4: '92.44%',
                    Lv5: '97.58%',
                    Lv6: '103.58%',
                    Lv7: '111.28%',
                    Lv8: '118.98%',
                    Lv9: '126.68%',
                    Lv10: '134.40%',
                    Lv11: '142.10%',
                    Lv12: '149.80%',
                    Lv13: '157.50%',
                    Lv14: '165.20%',
                    Lv15: '172.92%',
                },
                '5-Hit DMG': {
                    Lv1: '71.54%',
                    Lv2: '76.42%',
                    Lv3: '81.3%',
                    Lv4: '87.8%',
                    Lv5: '92.68%',
                    Lv6: '98.37%',
                    Lv7: '105.69%',
                    Lv8: '113.01%',
                    Lv9: '120.32%',
                    Lv10: '127.64%',
                    Lv11: '134.96%',
                    Lv12: '142.27%',
                    Lv13: '149.59%',
                    Lv14: '156.91%',
                    Lv15: '164.23%',
                },
                '6-Hit DMG': {
                    Lv1: '95.83%',
                    Lv2: '102.37%',
                    Lv3: '108.9%',
                    Lv4: '117.61%',
                    Lv5: '124.15%',
                    Lv6: '131.77%',
                    Lv7: '141.57%',
                    Lv8: '151.37%',
                    Lv9: '161.17%',
                    Lv10: '170.97%',
                    Lv11: '180.77%',
                    Lv12: '190.58%',
                    Lv13: '200.38%',
                    Lv14: '210.18%',
                    Lv15: '219.98%',
                },
                'Charged Attack DMG': {
                    Lv1: '121.09%',
                    Lv2: '129.34%',
                    Lv3: '137.6%',
                    Lv4: '148.61%',
                    Lv5: '156.86%',
                    Lv6: '166.5%',
                    Lv7: '178.88%',
                    Lv8: '191.26%',
                    Lv9: '203.65%',
                    Lv10: '216.03%',
                    Lv11: '228.42%',
                    Lv12: '240.8%',
                    Lv13: '253.18%',
                    Lv14: '265.57%',
                    Lv15: '277.95%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '25',
                    Lv2: '25',
                    Lv3: '25',
                    Lv4: '25',
                    Lv5: '25',
                    Lv6: '25',
                    Lv7: '25',
                    Lv8: '25',
                    Lv9: '25',
                    Lv10: '25',
                    Lv11: '25',
                    Lv12: '25',
                    Lv13: '25',
                    Lv14: '25',
                    Lv15: '25',
                },
                'Plunge DMG': {
                    Lv1: '81.83%',
                    Lv2: '88.49%',
                    Lv3: '95.16%',
                    Lv4: '104.67%',
                    Lv5: '111.33%',
                    Lv6: '118.94%',
                    Lv7: '129.41%',
                    Lv8: '139.88%',
                    Lv9: '150.35%',
                    Lv10: '161.76%',
                    Lv11: '173.18%',
                    Lv12: '184.6%',
                    Lv13: '196.02%',
                    Lv14: '207.44%',
                    Lv15: '218.86%',
                },
                'Low Plunge DMG': {
                    Lv1: '163.63%',
                    Lv2: '176.95%',
                    Lv3: '190.27%',
                    Lv4: '209.3%',
                    Lv5: '222.62%',
                    Lv6: '237.84%',
                    Lv7: '258.77%',
                    Lv8: '279.7%',
                    Lv9: '300.63%',
                    Lv10: '323.46%',
                    Lv11: '346.29%',
                    Lv12: '369.12%',
                    Lv13: '391.96%',
                    Lv14: '414.79%',
                    Lv15: '437.62%',
                },
                'High Plunge DMG': {
                    Lv1: '204.39%',
                    Lv2: '221.02%',
                    Lv3: '237.66%',
                    Lv4: '261.42%',
                    Lv5: '278.06%',
                    Lv6: '297.07%',
                    Lv7: '323.21%',
                    Lv8: '349.36%',
                    Lv9: '375.5%',
                    Lv10: '404.02%',
                    Lv11: '432.54%',
                    Lv12: '461.06%',
                    Lv13: '489.57%',
                    Lv14: '518.09%',
                    Lv15: '546.61%',
                },
            },
        },
        {
            name: 'Lemniscatic Wind Cycling',
            image: 'https://genshin.honeyhunterworld.com/img/s_263201.webp',
            description:
                "Xiao lunges forward, dealing\nAnemo DMG\nto opponents in his path.\nCan be used in mid-air.\nStarts with 2 charges.\nAccording to the legends of another land, the world will someday be crushed by two great wind wheels. Xiao's mastery over polearms is transcendent, ripping his foes apart like those legendary wind wheels.",
            data: {
                'Skill DMG': {
                    Lv1: '252.8%',
                    Lv2: '271.76%',
                    Lv3: '290.72%',
                    Lv4: '316%',
                    Lv5: '334.96%',
                    Lv6: '353.92%',
                    Lv7: '379.2%',
                    Lv8: '404.48%',
                    Lv9: '429.76%',
                    Lv10: '455.04%',
                    Lv11: '480.32%',
                    Lv12: '505.6%',
                    Lv13: '537.2%',
                    Lv14: '568.8%',
                    Lv15: '600.4%',
                },
                CD: {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
            },
        },
        {
            name: 'Bane of All Evil',
            image: 'https://genshin.honeyhunterworld.com/img/s_263901.webp',
            description:
                'Xiao dons the Yaksha Mask that set gods and demons trembling millennia ago.\nYaksha\'s Mask\n\u00b7Greatly increases Xiao\'s jumping ability.\n\u00b7Increases his attack AoE and attack DMG.\n\u00b7Converts attack DMG into\nAnemo DMG\n, which cannot be overridden by any other elemental infusion.\nIn this state, Xiao will continuously lose HP.\nThe effects of this skill end when Xiao leaves the field.\nDonning the Mask of the Yaksha, Xiao takes the terrifying, demon-conquering form of the Vigilant Yaksha. But this great power has also brought him great suffering. Some call him "The Bane of All Evil."',
            data: {
                'Normal/Charged/Plunging Attack DMG Bonus': {
                    Lv1: '58.45%',
                    Lv2: '61.95%',
                    Lv3: '65.45%',
                    Lv4: '70%',
                    Lv5: '73.5%',
                    Lv6: '77%',
                    Lv7: '81.55%',
                    Lv8: '86.1%',
                    Lv9: '90.65%',
                    Lv10: '95.2%',
                    Lv11: '99.75%',
                    Lv12: '104.3%',
                    Lv13: '108.85%',
                    Lv14: '113.4%',
                    Lv15: '117.95%',
                },
                'Life Drain': {
                    Lv1: '3% Current HP Per Second',
                    Lv2: '3% Current HP Per Second',
                    Lv3: '3% Current HP Per Second',
                    Lv4: '2.5% Current HP Per Second',
                    Lv5: '2.5% Current HP Per Second',
                    Lv6: '2.5% Current HP Per Second',
                    Lv7: '2% Current HP Per Second',
                    Lv8: '2% Current HP Per Second',
                    Lv9: '2% Current HP Per Second',
                    Lv10: '2% Current HP Per Second',
                    Lv11: '2% Current HP Per Second',
                    Lv12: '2% Current HP Per Second',
                    Lv13: '2% Current HP Per Second',
                    Lv14: '2% Current HP Per Second',
                    Lv15: '2% Current HP Per Second',
                },
                Duration: {
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
                CD: {
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
                'Energy Cost': {
                    Lv1: '70',
                    Lv2: '70',
                    Lv3: '70',
                    Lv4: '70',
                    Lv5: '70',
                    Lv6: '70',
                    Lv7: '70',
                    Lv8: '70',
                    Lv9: '70',
                    Lv10: '70',
                    Lv11: '70',
                    Lv12: '70',
                    Lv13: '70',
                    Lv14: '70',
                    Lv15: '70',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Transcension: Gravity Defier',
            image: 'https://genshin.honeyhunterworld.com/img/p_262301.webp',
            description:
                'Decreases climbing Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.',
        },
        {
            name: 'Conqueror of Evil: Tamer of Demons',
            image: 'https://genshin.honeyhunterworld.com/img/p_262101.webp',
            description:
                'While under the effects of\nBane of All Evil\n, all DMG dealt by Xiao increases by 5%. DMG increases by a further 5% for every 3s the ability persists.\nThe maximum DMG Bonus is 25%.',
        },
        {
            name: 'Dissolution Eon: Heaven Fall',
            image: 'https://genshin.honeyhunterworld.com/img/p_262201.webp',
            description:
                "Using\nLemniscatic Wind Cycling\nincreases the DMG of subsequent uses of Lemniscatic Wind Cycling by 15%.\nThis effect lasts for 7s, and has a maximum of 3 stacks. Gaining a new stack refreshes the effect's duration.",
        },
    ],
    constellations: [
        {
            name: 'Dissolution Eon: Destroyer of Worlds',
            image: 'https://genshin.honeyhunterworld.com/img/c_261.webp',
            description: "Increases\nLemniscatic Wind Cycling\n's charges by 1.",
            level: 1,
        },
        {
            name: 'Annihilation Eon: Blossom of Kaleidos',
            image: 'https://genshin.honeyhunterworld.com/img/c_262.webp',
            description:
                "When in the party and not on the field, Xiao's Energy Recharge is increased by 25%.",
            level: 2,
        },
        {
            name: 'Conqueror of Evil: Wrath Deity',
            image: 'https://genshin.honeyhunterworld.com/img/c_263.webp',
            description:
                'Increases the Level of\nLemniscatic Wind Cycling\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Transcension: Extinction of Suffering',
            image: 'https://genshin.honeyhunterworld.com/img/c_264.webp',
            description:
                "When Xiao's HP falls below 50%, he gains a 100% DEF Bonus.",
            level: 4,
        },
        {
            name: 'Evolution Eon: Origin of Ignorance',
            image: 'https://genshin.honeyhunterworld.com/img/c_265.webp',
            description:
                'Increases the Level of\nBane of All Evil\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Conqueror of Evil: Guardian Yaksha',
            image: 'https://genshin.honeyhunterworld.com/img/c_266.webp',
            description:
                "While under the effects of\nBane of All Evil\n, hitting at least 2 opponents with Xiao's Plunging Attack will immediately grant him 1 charge of\nLemniscatic Wind Cycling\n, and for the next 1s, he may use Lemniscatic Wind Cycling while ignoring its CD.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Xiao
