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

const Shenhe: Character = {
    name: 'Shenhe',
    icon: 'https://api.ambr.top/assets/UI/UI_AvatarIcon_Shenhe.png',
    weapon: 'Polearm',
    vision: 'Cryo',
    rarity: 5,
    description:
        "An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.",
    occupation: "Cloud Retainer's Abode",
    baseStats: {
        '1/20': {
            'Base HP': 1011.0,
            'Base ATK': 23.65,
            'Base DEF': 64.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2624.0,
            'Base ATK': 61.34,
            'Base DEF': 167.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 3491.0,
            'Base ATK': 81.62,
            'Base DEF': 223.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 5224.0,
            'Base ATK': 122.12,
            'Base DEF': 333.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 5840.0,
            'Base ATK': 136.53,
            'Base DEF': 373.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.072,
        },
        '50/50': {
            'Base HP': 6719.0,
            'Base ATK': 157.08,
            'Base DEF': 429.22,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.072,
        },
        '50/60': {
            'Base HP': 7540.0,
            'Base ATK': 176.29,
            'Base DEF': 481.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.144,
        },
        '60/60': {
            'Base HP': 8429.0,
            'Base ATK': 197.05,
            'Base DEF': 538.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.144,
        },
        '60/70': {
            'Base HP': 9045.0,
            'Base ATK': 211.45,
            'Base DEF': 577.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.144,
        },
        '70/70': {
            'Base HP': 9941.0,
            'Base ATK': 232.4,
            'Base DEF': 635.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.144,
        },
        '70/80': {
            'Base HP': 10557.0,
            'Base ATK': 246.81,
            'Base DEF': 674.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.216,
        },
        '80/80': {
            'Base HP': 11463.0,
            'Base ATK': 268.0,
            'Base DEF': 732.32,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.216,
        },
        '80/90': {
            'Base HP': 12080.0,
            'Base ATK': 282.4,
            'Base DEF': 771.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.288,
        },
        '90/90': {
            'Base HP': 12993.0,
            'Base ATK': 303.76,
            'Base DEF': 830.04,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.288,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Dawnstar Piercer',
            image: 'https://api.ambr.top/assets/UI/Skill_A_03.png',
            description:
                'Normal Attack\nPerforms up to 5 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '43.26%',
                    Lv2: '46.78%',
                    Lv3: '50.3%',
                    Lv4: '55.33%',
                    Lv5: '58.85%',
                    Lv6: '62.88%',
                    Lv7: '68.41%',
                    Lv8: '73.94%',
                    Lv9: '79.47%',
                    Lv10: '85.51%',
                    Lv11: '91.55%',
                    Lv12: '97.58%',
                    Lv13: '103.62%',
                    Lv14: '109.65%',
                    Lv15: '115.69%',
                },
                '2-Hit DMG': {
                    Lv1: '40.25%',
                    Lv2: '43.52%',
                    Lv3: '46.8%',
                    Lv4: '51.48%',
                    Lv5: '54.76%',
                    Lv6: '58.5%',
                    Lv7: '63.65%',
                    Lv8: '68.8%',
                    Lv9: '73.94%',
                    Lv10: '79.56%',
                    Lv11: '85.18%',
                    Lv12: '90.79%',
                    Lv13: '96.41%',
                    Lv14: '102.02%',
                    Lv15: '107.64%',
                },
                '3-Hit DMG': {
                    Lv1: '53.32%',
                    Lv2: '57.66%',
                    Lv3: '62%',
                    Lv4: '68.2%',
                    Lv5: '72.54%',
                    Lv6: '77.5%',
                    Lv7: '84.32%',
                    Lv8: '91.14%',
                    Lv9: '97.96%',
                    Lv10: '105.4%',
                    Lv11: '112.84%',
                    Lv12: '120.28%',
                    Lv13: '127.72%',
                    Lv14: '135.16%',
                    Lv15: '142.6%',
                },
                '4-Hit DMG': {
                    Lv1: '52.64%',
                    Lv2: '56.92%',
                    Lv3: '61.20%',
                    Lv4: '67.32%',
                    Lv5: '71.60%',
                    Lv6: '76.50%',
                    Lv7: '83.24%',
                    Lv8: '89.96%',
                    Lv9: '96.70%',
                    Lv10: '104.04%',
                    Lv11: '111.38%',
                    Lv12: '118.72%',
                    Lv13: '126.08%',
                    Lv14: '133.42%',
                    Lv15: '140.76%',
                },
                '5-Hit DMG': {
                    Lv1: '65.62%',
                    Lv2: '70.96%',
                    Lv3: '76.3%',
                    Lv4: '83.93%',
                    Lv5: '89.27%',
                    Lv6: '95.38%',
                    Lv7: '103.77%',
                    Lv8: '112.16%',
                    Lv9: '120.55%',
                    Lv10: '129.71%',
                    Lv11: '138.87%',
                    Lv12: '148.02%',
                    Lv13: '157.18%',
                    Lv14: '166.33%',
                    Lv15: '175.49%',
                },
                'Charged Attack DMG': {
                    Lv1: '110.67%',
                    Lv2: '119.68%',
                    Lv3: '128.69%',
                    Lv4: '141.56%',
                    Lv5: '150.57%',
                    Lv6: '160.86%',
                    Lv7: '175.02%',
                    Lv8: '189.17%',
                    Lv9: '203.33%',
                    Lv10: '218.77%',
                    Lv11: '234.22%',
                    Lv12: '249.66%',
                    Lv13: '265.1%',
                    Lv14: '280.54%',
                    Lv15: '295.99%',
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
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
            },
        },
        {
            name: 'Spring Spirit Summoning',
            image: 'https://api.ambr.top/assets/UI/Skill_S_Shenhe_01.png',
            description:
                "The frosted dew, silvery and dense, shall exorcise all demons.\nGrants all nearby party members the Icy Quill effect and deals\nCryo DMG\nin different ways based on whether it is pressed or held.\nPress\nRushes forward together with a Talisman Spirit, dealing\nCryo DMG\nto opponents along the path.\nHold\nCommands the Talisman Spirit to deal\nAoE Cryo DMG\n.\nIcy Quill\nWhen Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts deal\nCryo DMG\nto opponents, the DMG dealt is increased based on Shenhe's current ATK.\nThe Icy Quill's effects will be cleared once its duration ends or after being triggered a certain number of times. When held rather than pressed, the Icy Quill's effect lasts longer and can be triggered more times.\nWhen one\nCryo DMG\ninstance strikes multiple opponents, the effect is triggered multiple times based on the number of opponents hit. The number of times the effect is triggered is calculated independently for each party member with the Icy Quill.\nThe power of the spirits is no falsehood. Burdened with her orders, the divine maiden hurries on!",
            data: {
                'Press Skill DMG': {
                    Lv1: '139.2%',
                    Lv2: '149.64%',
                    Lv3: '160.08%',
                    Lv4: '174%',
                    Lv5: '184.44%',
                    Lv6: '194.88%',
                    Lv7: '208.8%',
                    Lv8: '222.72%',
                    Lv9: '236.64%',
                    Lv10: '250.56%',
                    Lv11: '264.48%',
                    Lv12: '278.4%',
                    Lv13: '295.8%',
                    Lv14: '313.2%',
                    Lv15: '330.6%',
                },
                'Hold Skill DMG': {
                    Lv1: '188.8%',
                    Lv2: '202.96%',
                    Lv3: '217.12%',
                    Lv4: '236%',
                    Lv5: '250.16%',
                    Lv6: '264.32%',
                    Lv7: '283.2%',
                    Lv8: '302.08%',
                    Lv9: '320.96%',
                    Lv10: '339.84%',
                    Lv11: '358.72%',
                    Lv12: '377.6%',
                    Lv13: '401.2%',
                    Lv14: '424.8%',
                    Lv15: '448.4%',
                },
                'DMG Bonus': {
                    Lv1: '45.66% ATK',
                    Lv2: '49.08% ATK',
                    Lv3: '52.5% ATK',
                    Lv4: '57.07% ATK',
                    Lv5: '60.49% ATK',
                    Lv6: '63.92% ATK',
                    Lv7: '68.48% ATK',
                    Lv8: '73.05% ATK',
                    Lv9: '77.62% ATK',
                    Lv10: '82.18% ATK',
                    Lv11: '86.75% ATK',
                    Lv12: '91.31% ATK',
                    Lv13: '97.02% ATK',
                    Lv14: '102.73% ATK',
                    Lv15: '108.43% ATK',
                },
                'Press/Hold Duration': {
                    Lv1: '10s / 15s',
                    Lv2: '10s / 15s',
                    Lv3: '10s / 15s',
                    Lv4: '10s / 15s',
                    Lv5: '10s / 15s',
                    Lv6: '10s / 15s',
                    Lv7: '10s / 15s',
                    Lv8: '10s / 15s',
                    Lv9: '10s / 15s',
                    Lv10: '10s / 15s',
                    Lv11: '10s / 15s',
                    Lv12: '10s / 15s',
                    Lv13: '10s / 15s',
                    Lv14: '10s / 15s',
                    Lv15: '10s / 15s',
                },
                'Press/Hold Trigger Quota': {
                    Lv1: '5 / 7',
                    Lv2: '5 / 7',
                    Lv3: '5 / 7',
                    Lv4: '5 / 7',
                    Lv5: '5 / 7',
                    Lv6: '5 / 7',
                    Lv7: '5 / 7',
                    Lv8: '5 / 7',
                    Lv9: '5 / 7',
                    Lv10: '5 / 7',
                    Lv11: '5 / 7',
                    Lv12: '5 / 7',
                    Lv13: '5 / 7',
                    Lv14: '5 / 7',
                    Lv15: '5 / 7',
                },
                'Press CD': {
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
                'Hold CD': {
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
            name: "Divine Maiden's Deliverance",
            image: 'https://api.ambr.top/assets/UI/Skill_E_Shenhe_01.png',
            description:
                'Unleashes the power of the Talisman Spirit, allowing it to roam free in this plane, dealing\nAoE Cryo DMG\n.\nThe Talisman Spirit then creates a field that decreases the\nCryo RES\nand Physical RES of opponents within it. It also deals periodic\nCryo DMG\nto opponents within the field.\nThe way of the adepti is not defined only by the mysterious and fantastical. Only by observing the changes in the heavens and the earth, and understanding the laws of cause and effect in this realm, may its essence be understood.',
            data: {
                'Skill DMG': {
                    Lv1: '100.8%',
                    Lv2: '108.36%',
                    Lv3: '115.92%',
                    Lv4: '126%',
                    Lv5: '133.56%',
                    Lv6: '141.12%',
                    Lv7: '151.2%',
                    Lv8: '161.28%',
                    Lv9: '171.36%',
                    Lv10: '181.44%',
                    Lv11: '191.52%',
                    Lv12: '201.6%',
                    Lv13: '214.2%',
                    Lv14: '226.8%',
                    Lv15: '239.4%',
                },
                'RES Decrease': {
                    Lv1: '6%',
                    Lv2: '7%',
                    Lv3: '8%',
                    Lv4: '9%',
                    Lv5: '10%',
                    Lv6: '11%',
                    Lv7: '12%',
                    Lv8: '13%',
                    Lv9: '14%',
                    Lv10: '15%',
                    Lv11: '15%',
                    Lv12: '15%',
                    Lv13: '15%',
                    Lv14: '15%',
                    Lv15: '15%',
                },
                DoT: {
                    Lv1: '33.12%',
                    Lv2: '35.6%',
                    Lv3: '38.09%',
                    Lv4: '41.4%',
                    Lv5: '43.88%',
                    Lv6: '46.37%',
                    Lv7: '49.68%',
                    Lv8: '52.99%',
                    Lv9: '56.3%',
                    Lv10: '59.62%',
                    Lv11: '62.93%',
                    Lv12: '66.24%',
                    Lv13: '70.38%',
                    Lv14: '74.52%',
                    Lv15: '78.66%',
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
            name: 'Precise Comings and Goings',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_Expedition_Liyue.png',
            description:
                'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.',
        },
        {
            name: 'Deific Embrace',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_05.png',
            description:
                "An active character within the field created by\nDivine Maiden's Deliverance\ngains 15%\nCryo DMG Bonus\n.",
        },
        {
            name: 'Spirit Communion Seal',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_06.png',
            description:
                'After Shenhe uses\nSpring Spirit Summoning\n, she will grant all nearby party members the following effects:\n\u00b7 Press: Elemental Skill and Elemental Burst DMG increased by 15% for 10s.\n\u00b7 Hold: Normal, Charged, and Plunging Attack DMG increased by 15% for 15s.',
        },
    ],
    constellations: [
        {
            name: 'Clarity of Heart',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_02.png',
            description: 'Spring Spirit Summoning\ncan be used 1 more time.',
            level: 1,
        },
        {
            name: 'Centered Spirit',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_01.png',
            description:
                "Divine Maiden's Deliverance\nlasts for 6 seconds longer. Active characters within the skill's field deal 15% increased\nCryo\nCRIT DMG.",
            level: 2,
        },
        {
            name: 'Seclusion',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Shenhe_01.png',
            description:
                'Increases the Level of\nSpring Spirit Summoning\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Insight',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_03.png',
            description:
                'When characters under the effect of\nIcy Quill\napplied by Shenhe trigger its DMG Bonus effects, Shenhe will gain a Skyfrost Mantra stack:\n\u00b7 When Shenhe uses\nSpring Spirit Summoning\n, she will consume all stacks of Skyfrost Mantra, increasing the DMG of that Spring Spirit Summoning by 5% for each stack consumed.\n\u00b7 Max 50 stacks. Stacks last for 60s.',
            level: 4,
        },
        {
            name: 'Divine Attainment',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Shenhe_02.png',
            description:
                "Increases the Level of\nDivine Maiden's Deliverance\nby 3.\nMaximum upgrade level is 15.",
            level: 5,
        },
        {
            name: 'Mystical Abandon',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Shenhe_04.png',
            description:
                "When characters trigger\nIcy Quill\n's effects using Normal and Charged Attack DMG, it does not count toward the Trigger Quota.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Shenhe
