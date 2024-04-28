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

const Arlecchino: Character = {
    name: 'Arlecchino',
    icon: 'https://api.ambr.top/assets/UI/UI_AvatarIcon_Arlecchino.png',
    weapon: 'Polearm',
    vision: 'Pyro',
    rarity: 5,
    description:
        '"The Knave," Fourth of the Fatui Harbingers. A poised, ruthless diplomat. To the children in the House of the Hearth, she is their feared yet dependable "Father."',
    occupation: 'Fatui',
    baseStats: {
        '1/20': {
            'Base HP': 1020.0,
            'Base ATK': 26.63,
            'Base DEF': 59.53,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2646.0,
            'Base ATK': 69.07,
            'Base DEF': 154.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3521.0,
            'Base ATK': 91.9,
            'Base DEF': 205.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5268.0,
            'Base ATK': 137.51,
            'Base DEF': 307.44,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 5889.0,
            'Base ATK': 153.73,
            'Base DEF': 343.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 6776.0,
            'Base ATK': 176.87,
            'Base DEF': 395.44,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7604.0,
            'Base ATK': 198.49,
            'Base DEF': 443.8,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8500.0,
            'Base ATK': 221.87,
            'Base DEF': 496.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 9121.0,
            'Base ATK': 238.09,
            'Base DEF': 532.34,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 10025.0,
            'Base ATK': 261.68,
            'Base DEF': 585.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 10647.0,
            'Base ATK': 277.9,
            'Base DEF': 621.35,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 11561.0,
            'Base ATK': 301.76,
            'Base DEF': 674.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 12182.0,
            'Base ATK': 317.98,
            'Base DEF': 710.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 13103.0,
            'Base ATK': 342.03,
            'Base DEF': 764.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Invitation to a Beheading',
            image: 'https://api.ambr.top/assets/UI/Skill_A_03.png',
            description:
                'Normal Attack\nPerforms up to 6 consecutive spear strikes.\nCharged Attack\nConsumes a fixed amount of Stamina, dashing toward a nearby opponent and cleaving once.\nContinuously holding this button will cause Arlecchino to consume Stamina and engage in up to 5s of high-speed movement.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\nMasque of the Red Death\nWhen Arlecchino has a Bond of Life equal to or greater than 30% of her Max HP, she will enter the "Masque of the Red Death" state, where her Normal, Charged, and Plunging Attacks will be converted to deal\nPyro DMG\n. This cannot be overridden.\nWhen in the "Masque of the Red Death" state, Arlecchino\'s Normal Attacks will deal extra DMG to opponents on hit that scales off her ATK multiplied by a certain ratio of her current Bond of Life percentage. This will consume 7.5% of said current Bond of Life. Her Bond of Life can be consumed this way every 0.03s. When her Bond of Life is consumed in this manner, All Is Ash\'s CD will decrease by 0.8s.',
            data: {
                'Masque of the Red Death Increase': {
                    Lv1: '120.4%',
                    Lv2: '130.2%',
                    Lv3: '140%',
                    Lv4: '154%',
                    Lv5: '163.8%',
                    Lv6: '175%',
                    Lv7: '190.4%',
                    Lv8: '205.8%',
                    Lv9: '221.2%',
                    Lv10: '238%',
                    Lv11: '254.8%',
                    Lv12: '271.6%',
                    Lv13: '288.4%',
                    Lv14: '305.2%',
                    Lv15: '322%',
                },
                '1-Hit DMG': {
                    Lv1: '47.5%',
                    Lv2: '51.37%',
                    Lv3: '55.23%',
                    Lv4: '60.76%',
                    Lv5: '64.62%',
                    Lv6: '69.04%',
                    Lv7: '75.12%',
                    Lv8: '81.19%',
                    Lv9: '87.27%',
                    Lv10: '93.9%',
                    Lv11: '100.52%',
                    Lv12: '107.15%',
                    Lv13: '113.78%',
                    Lv14: '120.41%',
                    Lv15: '127.04%',
                },
                '2-Hit DMG': {
                    Lv1: '52.11%',
                    Lv2: '56.35%',
                    Lv3: '60.59%',
                    Lv4: '66.65%',
                    Lv5: '70.89%',
                    Lv6: '75.74%',
                    Lv7: '82.4%',
                    Lv8: '89.06%',
                    Lv9: '95.73%',
                    Lv10: '103%',
                    Lv11: '110.27%',
                    Lv12: '117.54%',
                    Lv13: '124.81%',
                    Lv14: '132.08%',
                    Lv15: '139.35%',
                },
                '3-Hit DMG': {
                    Lv1: '65.39%',
                    Lv2: '70.71%',
                    Lv3: '76.03%',
                    Lv4: '83.63%',
                    Lv5: '88.96%',
                    Lv6: '95.04%',
                    Lv7: '103.4%',
                    Lv8: '111.76%',
                    Lv9: '120.13%',
                    Lv10: '129.25%',
                    Lv11: '138.37%',
                    Lv12: '147.5%',
                    Lv13: '156.62%',
                    Lv14: '165.75%',
                    Lv15: '174.87%',
                },
                '4-Hit DMG': {
                    Lv1: '74.30%',
                    Lv2: '80.34%',
                    Lv3: '86.38%',
                    Lv4: '95.02%',
                    Lv5: '101.06%',
                    Lv6: '107.98%',
                    Lv7: '117.48%',
                    Lv8: '126.98%',
                    Lv9: '136.48%',
                    Lv10: '146.86%',
                    Lv11: '157.22%',
                    Lv12: '167.58%',
                    Lv13: '177.96%',
                    Lv14: '188.32%',
                    Lv15: '198.68%',
                },
                '5-Hit DMG': {
                    Lv1: '69.98%',
                    Lv2: '75.68%',
                    Lv3: '81.37%',
                    Lv4: '89.51%',
                    Lv5: '95.21%',
                    Lv6: '101.72%',
                    Lv7: '110.67%',
                    Lv8: '119.62%',
                    Lv9: '128.57%',
                    Lv10: '138.34%',
                    Lv11: '148.1%',
                    Lv12: '157.87%',
                    Lv13: '167.63%',
                    Lv14: '177.4%',
                    Lv15: '187.16%',
                },
                '6-Hit DMG': {
                    Lv1: '85.38%',
                    Lv2: '92.33%',
                    Lv3: '99.28%',
                    Lv4: '109.2%',
                    Lv5: '116.15%',
                    Lv6: '124.1%',
                    Lv7: '135.02%',
                    Lv8: '145.94%',
                    Lv9: '156.86%',
                    Lv10: '168.77%',
                    Lv11: '180.68%',
                    Lv12: '192.6%',
                    Lv13: '204.51%',
                    Lv14: '216.42%',
                    Lv15: '228.34%',
                },
                'Charged Attack DMG': {
                    Lv1: '90.82%',
                    Lv2: '98.21%',
                    Lv3: '105.6%',
                    Lv4: '116.16%',
                    Lv5: '123.55%',
                    Lv6: '132%',
                    Lv7: '143.62%',
                    Lv8: '155.23%',
                    Lv9: '166.85%',
                    Lv10: '179.52%',
                    Lv11: '192.19%',
                    Lv12: '204.86%',
                    Lv13: '217.54%',
                    Lv14: '230.21%',
                    Lv15: '242.88%',
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
                'High-Speed Movement Stamina Cost': {
                    Lv1: '40 / s',
                    Lv2: '40 / s',
                    Lv3: '40 / s',
                    Lv4: '40 / s',
                    Lv5: '40 / s',
                    Lv6: '40 / s',
                    Lv7: '40 / s',
                    Lv8: '40 / s',
                    Lv9: '40 / s',
                    Lv10: '40 / s',
                    Lv11: '40 / s',
                    Lv12: '40 / s',
                    Lv13: '40 / s',
                    Lv14: '40 / s',
                    Lv15: '40 / s',
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
            name: 'All Is Ash',
            image: 'https://api.ambr.top/assets/UI/Skill_S_Arlecchino_01.png',
            description:
                'Summons forth Balemoon Bloodfire, dealing\nPyro DMG\nto multiple nearby opponents and performing a dash-cleave against one of them, dealing\nAoE Pyro DMG\n.\nOpponents hit by the aforementioned attack will have a Blood-Debt Directive applied to them.\nBlood-Debt Directive\n\u00b7 Lasts 30s. Every 5s, it will deal 1 instance of\nPyro DMG\nto the opponent. Max 2 instances. This DMG will be considered Elemental Skill DMG.\n\u00b7 When Arlecchino uses a Charged Attack or her Elemental Burst, Balemoon Rising, she will absorb and clear nearby Blood-Debt Directives. Each Directive absorbed grants her a Bond of Life worth 65% of her Max HP.\n\u00b7 The maximum value of the Bond of Life she can be granted through Blood-Debt Directives within 35s after using her Elemental Skill is 145% of her Max HP. Using the Elemental Skill again during this duration will restart the count on duration and the limit on the value of Bond of Life she may gain from Blood-Debt Directives.\nAs she sees it, not every grain of wheat that falls upon the earth will grow into an ear, while those who obstruct her, once burned to ashes, can certainly be used to nourish flowers.',
            data: {
                'Spike DMG': {
                    Lv1: '14.84%',
                    Lv2: '15.95%',
                    Lv3: '17.07%',
                    Lv4: '18.55%',
                    Lv5: '19.66%',
                    Lv6: '20.78%',
                    Lv7: '22.26%',
                    Lv8: '23.74%',
                    Lv9: '25.23%',
                    Lv10: '26.71%',
                    Lv11: '28.2%',
                    Lv12: '29.68%',
                    Lv13: '31.54%',
                    Lv14: '33.39%',
                    Lv15: '35.25%',
                },
                'Cleave DMG': {
                    Lv1: '133.56%',
                    Lv2: '143.58%',
                    Lv3: '153.59%',
                    Lv4: '166.95%',
                    Lv5: '176.97%',
                    Lv6: '186.98%',
                    Lv7: '200.34%',
                    Lv8: '213.7%',
                    Lv9: '227.05%',
                    Lv10: '240.41%',
                    Lv11: '253.76%',
                    Lv12: '267.12%',
                    Lv13: '283.82%',
                    Lv14: '300.51%',
                    Lv15: '317.21%',
                },
                'Blood-Debt Directive DMG': {
                    Lv1: '31.8%',
                    Lv2: '34.19%',
                    Lv3: '36.57%',
                    Lv4: '39.75%',
                    Lv5: '42.14%',
                    Lv6: '44.52%',
                    Lv7: '47.7%',
                    Lv8: '50.88%',
                    Lv9: '54.06%',
                    Lv10: '57.24%',
                    Lv11: '60.42%',
                    Lv12: '63.6%',
                    Lv13: '67.58%',
                    Lv14: '71.55%',
                    Lv15: '75.53%',
                },
                CD: {
                    Lv1: '30s',
                    Lv2: '30s',
                    Lv3: '30s',
                    Lv4: '30s',
                    Lv5: '30s',
                    Lv6: '30s',
                    Lv7: '30s',
                    Lv8: '30s',
                    Lv9: '30s',
                    Lv10: '30s',
                    Lv11: '30s',
                    Lv12: '30s',
                    Lv13: '30s',
                    Lv14: '30s',
                    Lv15: '30s',
                },
            },
        },
        {
            name: 'Balemoon Rising',
            image: 'https://api.ambr.top/assets/UI/Skill_E_Arlecchino_01.png',
            description:
                "Arlecchino's great wings of Balemoon Bloodfire beat, absorbing and clearing Blood-Debt Directives around her, and dealing\nAoE Pyro DMG\nbefore clearing the CD of All Is Ash and healing her. The healing is based on her Bond of Life value and ATK.\nIt is commonly believed throughout Teyvat that moon phases other than the full moon are mere metaphors of ill-omen, used only by those who practice alchemy and astrology.\nShe saw this crimson moon in her dreams many times. Were those portents of disaster? Indeed they were, but the destined catastrophes belonged to those who enraged her.",
            data: {
                'Skill DMG': {
                    Lv1: '370.4%',
                    Lv2: '398.18%',
                    Lv3: '425.96%',
                    Lv4: '463%',
                    Lv5: '490.78%',
                    Lv6: '518.56%',
                    Lv7: '555.6%',
                    Lv8: '592.64%',
                    Lv9: '629.68%',
                    Lv10: '666.72%',
                    Lv11: '703.76%',
                    Lv12: '740.8%',
                    Lv13: '787.1%',
                    Lv14: '833.4%',
                    Lv15: '879.7%',
                },
                'Amount of HP Restored': {
                    Lv1: '150% Bond of Life + 150% ATK',
                    Lv2: '150% Bond of Life + 150% ATK',
                    Lv3: '150% Bond of Life + 150% ATK',
                    Lv4: '150% Bond of Life + 150% ATK',
                    Lv5: '150% Bond of Life + 150% ATK',
                    Lv6: '150% Bond of Life + 150% ATK',
                    Lv7: '150% Bond of Life + 150% ATK',
                    Lv8: '150% Bond of Life + 150% ATK',
                    Lv9: '150% Bond of Life + 150% ATK',
                    Lv10: '150% Bond of Life + 150% ATK',
                    Lv11: '150% Bond of Life + 150% ATK',
                    Lv12: '150% Bond of Life + 150% ATK',
                    Lv13: '150% Bond of Life + 150% ATK',
                    Lv14: '150% Bond of Life + 150% ATK',
                    Lv15: '150% Bond of Life + 150% ATK',
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
            name: 'The Balemoon Alone May Know',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_07.png',
            description:
                'While in combat, Arlecchino gains a 40%\nPyro DMG Bonus\nand can only be healed through\nBalemoon Rising\n.',
        },
        {
            name: 'Agony Alone May Be Repaid',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_05.png',
            description:
                'Blood-Debt Directives\nhave the following characteristics:\n\u00b7 When defeating an opponent with a Directive, Arlecchino will be granted a Life Bond worth 130% of her Max HP.\n\u00b7 5s after a Directive is applied, it will be upgraded to a Blood-Debt Due. When absorbed, it will instead grant Arlecchino a Bond of Life worth 130%.\nA Bond of Life created in the aforementioned ways cannot exceed the original limit on the value of Bonds of Life obtained through\nAll Is Ash\n.',
        },
        {
            name: 'Strength Alone Can Defend',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_06.png',
            description:
                'Arlecchino gains 1% All Elemental and Physical RES for every 100 ATK she has in excess of 1,000. The maximum RES increase she can gain this way for each is 20%.',
        },
    ],
    constellations: [
        {
            name: '"All Reprisals and Arrears Are Mine to Bear..."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_01.png',
            description:
                "Masque of the Red Death is further enhanced, the value of the increase is 100%. Additionally, Arlecchino's interruption resistance is increased when she performs Normal Attacks while affected by the Masque of the Red Death.",
            level: 1,
        },
        {
            name: '"All Rewards and Retribution, Mine to Bestow..."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_02.png',
            description:
                'Blood-Debt Directives\nare now already Blood-Debt Due when first applied.\nWhen Arlecchino absorbs such a Due, she unleashes Balemoon Bloodfire in front of her, dealing 900% of her ATK as\nAoE Pyro DMG\n. This effect can trigger once every 10s.\nYou must first unlock the Passive Talent "Agony Alone May Be Repaid."',
            level: 2,
        },
        {
            name: '"You Shall Become a New Member of Our Family..."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Arlecchino_01.png',
            description:
                'Increases the Level of\nNormal Attack: Invitation to a Beheading\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: '"You Shall Love and Protect Each Other Henceforth..."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_03.png',
            description:
                "When Arlecchino successfully absorbs a Blood-Debt Directive,\nBalemoon Rising\n's CD will decrease by 2s and 15 Energy will be restored to her. This effect can occur once every 10s.",
            level: 4,
        },
        {
            name: '"For Alone, We Are as Good as Dead..."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Arlecchino_02.png',
            description:
                'Increases the Level of\nBalemoon Rising\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: '"From This Day On, We Shall Delight in New Life Together."',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Arlecchino_04.png',
            description:
                "The DMG of\nBalemoon Rising\nis increased by Arlecchino's ATK multiplied by 700% of Arlecchino's current Life Bond percentage.\nFor 20s after Arlecchino uses\nAll Is Ash\n, both her Normal Attacks and Elemental Burst gain 10% increased CRIT Rate and 70% increased CRIT DMG. This effect can be triggered up to once every 15s.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Arlecchino
