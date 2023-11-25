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

const Yaoyao: Character = {
    name: 'Yaoyao',
    icon: '/images/characters/yaoyao.png',
    weapon: 'Polearm',
    vision: 'Dendro',
    rarity: 4,
    description:
        'Streetward Rambler\'s youngest disciple. A gentle and caring "little adult."',
    occupation: "Streetward Rambler's Abode",
    baseStats: {
        '1/20': {
            'Base HP': 1030.0,
            'Base ATK': 17.81,
            'Base DEF': 62.95,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 2647.0,
            'Base ATK': 45.75,
            'Base DEF': 161.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 3417.0,
            'Base ATK': 59.05,
            'Base DEF': 208.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 5118.0,
            'Base ATK': 88.45,
            'Base DEF': 312.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 5665.0,
            'Base ATK': 97.91,
            'Base DEF': 346.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/50': {
            'Base HP': 6516.0,
            'Base ATK': 112.62,
            'Base DEF': 398.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/60': {
            'Base HP': 7245.0,
            'Base ATK': 125.22,
            'Base DEF': 442.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/60': {
            'Base HP': 8096.0,
            'Base ATK': 139.93,
            'Base DEF': 494.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/70': {
            'Base HP': 8643.0,
            'Base ATK': 149.38,
            'Base DEF': 528.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/70': {
            'Base HP': 9493.0,
            'Base ATK': 164.07,
            'Base DEF': 579.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/80': {
            'Base HP': 10040.0,
            'Base ATK': 173.53,
            'Base DEF': 613.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/80': {
            'Base HP': 10891.0,
            'Base ATK': 188.24,
            'Base DEF': 665.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/90': {
            'Base HP': 11438.0,
            'Base ATK': 197.69,
            'Base DEF': 698.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
        '90/90': {
            'Base HP': 12289.0,
            'Base ATK': 212.4,
            'Base DEF': 750.77,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
    },
    talents: [
        {
            name: "Normal Attack: Toss 'N' Turn Spear",
            image: 'https://genshin.honeyhunterworld.com/img/s_773101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '51%',
                    Lv2: '55.15%',
                    Lv3: '59.3%',
                    Lv4: '65.23%',
                    Lv5: '69.39%',
                    Lv6: '74.13%',
                    Lv7: '80.65%',
                    Lv8: '87.18%',
                    Lv9: '93.7%',
                    Lv10: '100.82%',
                    Lv11: '107.93%',
                    Lv12: '115.05%',
                    Lv13: '122.17%',
                    Lv14: '129.28%',
                    Lv15: '136.4%',
                },
                '2-Hit DMG': {
                    Lv1: '47.44%',
                    Lv2: '51.3%',
                    Lv3: '55.17%',
                    Lv4: '60.68%',
                    Lv5: '64.54%',
                    Lv6: '68.96%',
                    Lv7: '75.03%',
                    Lv8: '81.09%',
                    Lv9: '87.16%',
                    Lv10: '93.78%',
                    Lv11: '100.4%',
                    Lv12: '107.02%',
                    Lv13: '113.64%',
                    Lv14: '120.26%',
                    Lv15: '126.88%',
                },
                '3-Hit DMG': {
                    Lv1: '64.33%',
                    Lv2: '69.56%',
                    Lv3: '74.80%',
                    Lv4: '82.27%',
                    Lv5: '87.51%',
                    Lv6: '93.50%',
                    Lv7: '101.72%',
                    Lv8: '109.94%',
                    Lv9: '118.18%',
                    Lv10: '127.15%',
                    Lv11: '136.12%',
                    Lv12: '145.10%',
                    Lv13: '154.08%',
                    Lv14: '163.05%',
                    Lv15: '172.03%',
                },
                '4-Hit DMG': {
                    Lv1: '77.93%',
                    Lv2: '84.27%',
                    Lv3: '90.62%',
                    Lv4: '99.68%',
                    Lv5: '106.02%',
                    Lv6: '113.27%',
                    Lv7: '123.24%',
                    Lv8: '133.21%',
                    Lv9: '143.18%',
                    Lv10: '154.05%',
                    Lv11: '164.92%',
                    Lv12: '175.8%',
                    Lv13: '186.67%',
                    Lv14: '197.55%',
                    Lv15: '208.42%',
                },
                'Charged Attack DMG': {
                    Lv1: '112.66%',
                    Lv2: '121.83%',
                    Lv3: '131%',
                    Lv4: '144.1%',
                    Lv5: '153.27%',
                    Lv6: '163.75%',
                    Lv7: '178.16%',
                    Lv8: '192.57%',
                    Lv9: '206.98%',
                    Lv10: '222.7%',
                    Lv11: '238.42%',
                    Lv12: '254.14%',
                    Lv13: '269.86%',
                    Lv14: '285.58%',
                    Lv15: '301.3%',
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
            name: 'Raphanus Sky Cluster',
            image: 'https://genshin.honeyhunterworld.com/img/s_773201.webp',
            description:
                'Calls upon "Yuegui: Throwing Mode," a special device created by a certain adeptus to help Yaoyao solve her problems.\nThis skill will be used differently in Holding Mode.\nHold\nEnters Aiming Mode to adjust the throw direction.\nYuegui: Throwing Mode\nThrows out White Jade Radishes that will explode upon hitting characters or opponents, dealing\nDendro DMG\nto opponents within a certain AoE, and healing characters within that same AoE based on Yaoyao\'s Max HP. If a radish does not hit either an opponent or a character, the radish will remain where it is and explode on contact with a character or opponent, or will explode after its duration expires.\nYuegui: Throwing Mode will choose its radish-throw targets.\n\u00b7If all nearby characters have more than 70% HP remaining, then it will throw the radish at a nearby opponent.\n\u00b7If nearby characters have 70% or less HP remaining, it will throw a radish at the character with the lowest HP percentage remaining. If no opponents exist nearby, Yuegui will also throw White Jade Radishes at characters if they all have more than 70% HP and less than 100% HP remaining. Otherwise, it will throw radishes into the area at random.\nA maximum of 2 instances of Yuegui: Throwing Mode can exist at any one time.\n"A radish a day keeps trouble away! ... Oh, this isn\'t about a radish\'s medical properties, exactly, but it does have some health benefits, yeah!"',
            data: {
                'White Jade Radish DMG': {
                    Lv1: '29.92%',
                    Lv2: '32.16%',
                    Lv3: '34.41%',
                    Lv4: '37.4%',
                    Lv5: '39.64%',
                    Lv6: '41.89%',
                    Lv7: '44.88%',
                    Lv8: '47.87%',
                    Lv9: '50.86%',
                    Lv10: '53.86%',
                    Lv11: '56.85%',
                    Lv12: '59.84%',
                    Lv13: '63.58%',
                    Lv14: '67.32%',
                    Lv15: '71.06%',
                },
                'White Jade Radish Healing': {
                    Lv1: '1.71% Max HP + 165.08',
                    Lv2: '1.84% Max HP + 181.59',
                    Lv3: '1.97% Max HP + 199.48',
                    Lv4: '2.14% Max HP + 218.74',
                    Lv5: '2.27% Max HP + 239.38',
                    Lv6: '2.4% Max HP + 261.39',
                    Lv7: '2.57% Max HP + 284.78',
                    Lv8: '2.74% Max HP + 309.54',
                    Lv9: '2.91% Max HP + 335.69',
                    Lv10: '3.09% Max HP + 363.2',
                    Lv11: '3.26% Max HP + 392.1',
                    Lv12: '3.43% Max HP + 422.37',
                    Lv13: '3.64% Max HP + 454.01',
                    Lv14: '3.86% Max HP + 487.03',
                    Lv15: '4.07% Max HP + 521.43',
                },
                'Yuegui: Throwing Mode Duration': {
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
                'White Jade Radish Duration': {
                    Lv1: '5s',
                    Lv2: '5s',
                    Lv3: '5s',
                    Lv4: '5s',
                    Lv5: '5s',
                    Lv6: '5s',
                    Lv7: '5s',
                    Lv8: '5s',
                    Lv9: '5s',
                    Lv10: '5s',
                    Lv11: '5s',
                    Lv12: '5s',
                    Lv13: '5s',
                    Lv14: '5s',
                    Lv15: '5s',
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
            name: 'Moonjade Descent',
            image: 'https://genshin.honeyhunterworld.com/img/s_773901.webp',
            description:
                'At the enjoinment of a certain adeptus, Yuegui\'s full potential can be unleashed in an emergency, dealing\nDendro DMG\nto nearby opponents and entering an (in some sense) unsurpassed Adeptal Legacy state.\nAdeptal Legacy\n\u00b7White Jade Radishes generated will be changed to heal and deal DMG according to this skill. Explosions will heal all nearby party members, and the\nDendro DMG\nthat they deal will be viewed as Elemental Burst DMG instead.\n\u00b7Summons "Yuegui: Jumping Mode" at intervals until their limit has been reached. The behavior of this version of Yuegui is the same as that of "Yuegui: Throwing Mode" in the Elemental Skill, Raphanus Sky Cluster. A maximum of 3 Yuegui: Jumping Mode can exist at any one time.\n\u00b7Yaoyao\'s Movement SPD is increased by 15%.\n\u00b7Yaoyao\'s\nDendro RES\nwill be increased.\nThe Adeptal Legacy state will end once Yaoyao is off-field, and all remaining Yuegui: Jumping Mode will be cleared once this state ends.\n"Eh? Which one of these is actually Yuegui, you ask? Aren\'t they all Yuegui?"',
            data: {
                'Skill DMG': {
                    Lv1: '114.56%',
                    Lv2: '123.15%',
                    Lv3: '131.74%',
                    Lv4: '143.2%',
                    Lv5: '151.79%',
                    Lv6: '160.38%',
                    Lv7: '171.84%',
                    Lv8: '183.3%',
                    Lv9: '194.75%',
                    Lv10: '206.21%',
                    Lv11: '217.66%',
                    Lv12: '229.12%',
                    Lv13: '243.44%',
                    Lv14: '257.76%',
                    Lv15: '272.08%',
                },
                'Adeptal Legacy White Jade Radish DMG': {
                    Lv1: '72.16%',
                    Lv2: '77.57%',
                    Lv3: '82.98%',
                    Lv4: '90.2%',
                    Lv5: '95.61%',
                    Lv6: '101.02%',
                    Lv7: '108.24%',
                    Lv8: '115.46%',
                    Lv9: '122.67%',
                    Lv10: '129.89%',
                    Lv11: '137.1%',
                    Lv12: '144.32%',
                    Lv13: '153.34%',
                    Lv14: '162.36%',
                    Lv15: '171.38%',
                },
                'Adeptal Legacy White Jade Radish Healing': {
                    Lv1: '2.02% Max HP + 194.21',
                    Lv2: '2.17% Max HP + 213.64',
                    Lv3: '2.32% Max HP + 234.68',
                    Lv4: '2.52% Max HP + 257.34',
                    Lv5: '2.67% Max HP + 281.62',
                    Lv6: '2.82% Max HP + 307.52',
                    Lv7: '3.03% Max HP + 335.04',
                    Lv8: '3.23% Max HP + 364.17',
                    Lv9: '3.43% Max HP + 394.93',
                    Lv10: '3.63% Max HP + 427.3',
                    Lv11: '3.83% Max HP + 461.29',
                    Lv12: '4.03% Max HP + 496.9',
                    Lv13: '4.29% Max HP + 534.13',
                    Lv14: '4.54% Max HP + 572.98',
                    Lv15: '4.79% Max HP + 613.45',
                },
                'Dendro RES Bonus': {
                    Lv1: '50%',
                    Lv2: '50%',
                    Lv3: '50%',
                    Lv4: '50%',
                    Lv5: '50%',
                    Lv6: '50%',
                    Lv7: '50%',
                    Lv8: '50%',
                    Lv9: '50%',
                    Lv10: '50%',
                    Lv11: '50%',
                    Lv12: '50%',
                    Lv13: '50%',
                    Lv14: '50%',
                    Lv15: '50%',
                },
                'Adeptal Legacy Duration': {
                    Lv1: '5s',
                    Lv2: '5s',
                    Lv3: '5s',
                    Lv4: '5s',
                    Lv5: '5s',
                    Lv6: '5s',
                    Lv7: '5s',
                    Lv8: '5s',
                    Lv9: '5s',
                    Lv10: '5s',
                    Lv11: '5s',
                    Lv12: '5s',
                    Lv13: '5s',
                    Lv14: '5s',
                    Lv15: '5s',
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
            name: 'Tailing on Tiptoes',
            image: 'https://genshin.honeyhunterworld.com/img/p_772301.webp',
            description:
                'When Yaoyao is in the party, your characters will not startle Crystalflies and certain other animals when getting near them.\nCheck the "Other" sub-category of the "Living Beings / Wildlife" section in the Archive for creatures this skill works on.',
        },
        {
            name: 'Starscatter',
            image: 'https://genshin.honeyhunterworld.com/img/p_772101.webp',
            description:
                'While affected by the Adeptal Legacy state caused by\nMoonjade Descent\n, Yaoyao will constantly throw White Jade Radishes at nearby opponents when she is sprinting, jumping, or running. She can throw 1 White Jade Radish this way once every 0.6s.',
        },
        {
            name: "In Others' Shoes",
            image: 'https://genshin.honeyhunterworld.com/img/p_772201.webp',
            description:
                "When\nWhite Jade Radishes\nexplode, active characters within their AoE will regain HP every 1s based on 0.8% of Yaoyao's Max HP. This effect lasts 5s.",
        },
    ],
    constellations: [
        {
            name: "Adeptus' Tutelage",
            image: 'https://genshin.honeyhunterworld.com/img/c_771.webp',
            description:
                'When\nWhite Jade Radishes\nexplode, active characters within their AoE will gain 15%\nDendro DMG Bonus\nfor 8s and have 15 Stamina restored to them. This form of Stamina Restoration can only be triggered every 5s.',
            level: 1,
        },
        {
            name: 'Innocent',
            image: 'https://genshin.honeyhunterworld.com/img/c_772.webp',
            description:
                'While affected by the Adeptal Legacy state caused by\nMoonjade Descent\n, if White Jade Radish explosions hit opponents, 3 Energy will be restored to Yaoyao. This form of Energy regeneration can occur once every 0.8s.',
            level: 2,
        },
        {
            name: 'Loyal and Kind',
            image: 'https://genshin.honeyhunterworld.com/img/c_773.webp',
            description:
                'Increases the Level of\nRaphanus Sky Cluster\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Winsome',
            image: 'https://genshin.honeyhunterworld.com/img/c_774.webp',
            description:
                "After using\nRaphanus Sky Cluster\nor\nMoonjade Descent\n, Yaoyao's Elemental Mastery will be increased based on 0.3% of her Max HP for 8s. The maximum Elemental Mastery she can gain this way is 120.",
            level: 4,
        },
        {
            name: 'Compassionate',
            image: 'https://genshin.honeyhunterworld.com/img/c_775.webp',
            description:
                'Increases the Level of\nMoonjade Descent\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Beneficent',
            image: 'https://genshin.honeyhunterworld.com/img/c_776.webp',
            description:
                "For every 2 White Jade Radishes\nYuegui: Throwing Mode\nthrows out, the next throw will also release a Mega Radish that will have a larger AoE than the standard White Jade Radish and have the following effects upon exploding:\n\u00b7Deals\nAoE Dendro DMG\nbased on 75% of Yaoyao's ATK.\n\u00b7Restores HP for the active character based on 7.5% of Yaoyao's Max HP.\nEvery Yuegui: Throwing Mode can throw out a maximum of 2 Mega Radishes.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Yaoyao
