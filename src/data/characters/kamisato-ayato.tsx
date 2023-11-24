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

const KamisatoAyato: Character = {
    name: 'Kamisato Ayato',
    icon: '/images/characters/kamisato-ayato.png',
    weapon: 'Sword',
    vision: 'Hydro',
    rarity: 5,
    description:
        "The young but highly accomplished head of the Yashiro Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.",
    occupation: 'Yashiro Commission',
    baseStats: {
        '1/20': {
            'Base HP': 1068.0,
            'Base ATK': 23.27,
            'Base DEF': 59.83,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2770.0,
            'Base ATK': 60.38,
            'Base DEF': 155.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3685.0,
            'Base ATK': 80.33,
            'Base DEF': 206.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5514.0,
            'Base ATK': 120.2,
            'Base DEF': 308.99,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 6165.0,
            'Base ATK': 134.38,
            'Base DEF': 345.44,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 7092.0,
            'Base ATK': 154.6,
            'Base DEF': 397.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7960.0,
            'Base ATK': 173.51,
            'Base DEF': 446.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8897.0,
            'Base ATK': 193.94,
            'Base DEF': 498.56,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 9548.0,
            'Base ATK': 208.12,
            'Base DEF': 535.01,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 10494.0,
            'Base ATK': 228.74,
            'Base DEF': 588.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 11144.0,
            'Base ATK': 242.92,
            'Base DEF': 624.47,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 12101.0,
            'Base ATK': 263.78,
            'Base DEF': 678.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 12751.0,
            'Base ATK': 277.96,
            'Base DEF': 714.53,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 13715.0,
            'Base ATK': 298.97,
            'Base DEF': 768.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Kamisato Art - Marobashi',
            image: 'https://genshin.honeyhunterworld.com/img/s_663101.webp',
            description:
                'Normal Attack\nPerforms up to 5 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to dash forward and performs an iai.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '44.96%',
                    Lv2: '48.62%',
                    Lv3: '52.28%',
                    Lv4: '57.51%',
                    Lv5: '61.17%',
                    Lv6: '65.35%',
                    Lv7: '71.1%',
                    Lv8: '76.85%',
                    Lv9: '82.6%',
                    Lv10: '88.88%',
                    Lv11: '95.15%',
                    Lv12: '101.43%',
                    Lv13: '107.7%',
                    Lv14: '113.97%',
                    Lv15: '120.25%',
                },
                '2-Hit DMG': {
                    Lv1: '47.16%',
                    Lv2: '51%',
                    Lv3: '54.83%',
                    Lv4: '60.32%',
                    Lv5: '64.16%',
                    Lv6: '68.54%',
                    Lv7: '74.57%',
                    Lv8: '80.61%',
                    Lv9: '86.64%',
                    Lv10: '93.22%',
                    Lv11: '99.8%',
                    Lv12: '106.38%',
                    Lv13: '112.96%',
                    Lv14: '119.54%',
                    Lv15: '126.12%',
                },
                '3-Hit DMG': {
                    Lv1: '58.61%',
                    Lv2: '63.38%',
                    Lv3: '68.15%',
                    Lv4: '74.97%',
                    Lv5: '79.74%',
                    Lv6: '85.19%',
                    Lv7: '92.69%',
                    Lv8: '100.19%',
                    Lv9: '107.68%',
                    Lv10: '115.86%',
                    Lv11: '124.04%',
                    Lv12: '132.22%',
                    Lv13: '140.4%',
                    Lv14: '148.58%',
                    Lv15: '156.75%',
                },
                '4-Hit DMG': {
                    Lv1: '58.90%',
                    Lv2: '63.70%',
                    Lv3: '68.48%',
                    Lv4: '75.34%',
                    Lv5: '80.12%',
                    Lv6: '85.60%',
                    Lv7: '93.14%',
                    Lv8: '100.68%',
                    Lv9: '108.20%',
                    Lv10: '116.42%',
                    Lv11: '124.64%',
                    Lv12: '132.86%',
                    Lv13: '141.08%',
                    Lv14: '149.30%',
                    Lv15: '157.52%',
                },
                '5-Hit DMG': {
                    Lv1: '75.6%',
                    Lv2: '81.76%',
                    Lv3: '87.91%',
                    Lv4: '96.7%',
                    Lv5: '102.86%',
                    Lv6: '109.89%',
                    Lv7: '119.56%',
                    Lv8: '129.23%',
                    Lv9: '138.9%',
                    Lv10: '149.45%',
                    Lv11: '160%',
                    Lv12: '170.55%',
                    Lv13: '181.1%',
                    Lv14: '191.65%',
                    Lv15: '202.2%',
                },
                'Charged Attack DMG': {
                    Lv1: '129.53%',
                    Lv2: '140.07%',
                    Lv3: '150.62%',
                    Lv4: '165.68%',
                    Lv5: '176.22%',
                    Lv6: '188.27%',
                    Lv7: '204.84%',
                    Lv8: '221.41%',
                    Lv9: '237.97%',
                    Lv10: '256.05%',
                    Lv11: '274.12%',
                    Lv12: '292.19%',
                    Lv13: '310.27%',
                    Lv14: '328.34%',
                    Lv15: '346.42%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
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
            name: 'Kamisato Art: Kyouka',
            image: 'https://genshin.honeyhunterworld.com/img/s_663201.webp',
            description:
                'Kamisato Ayato shifts positions and enters the Takimeguri Kanka state.\nAfter this shift, he will leave a watery illusion at his original location. After it is formed, the watery illusion will explode if opponents are nearby or after its duration ends, dealing\nAoE Hydro DMG\n.\nTakimeguri Kanka\nIn this state, Kamisato Ayato uses his Shunsuiken to engage in blindingly fast attacks, causing DMG from his Normal Attacks to be converted into\nAoE Hydro DMG\n. This cannot be overridden.\nIt also has the following properties:\n\u00b7After a Shunsuiken attack hits an opponent, it will grant Ayato the Namisen effect, increasing the DMG dealt by Shunsuiken based on Ayato\'s current Max HP. The initial maximum number of Namisen stacks is 4, and 1 stack can be gained through Shunsuiken every 0.1s. This effect will be dispelled when Takimeguri Kanka ends.\n\u00b7Kamisato Ayato\'s resistance to interruption is increased.\n\u00b7Unable to use Charged or Plunging Attacks.\nTakimeguri Kanka will be cleared when Ayato leaves the field. Using Kamisato Art: Kyouka again while in the Takimeguri Kanka state will reset and replace the pre-existing state.\n"When, I wonder, did you come under the illusion that you were winning?"\n\u2014 Ayato is like this in both matter of martial prowess and political intrigue, but to preserve the dignity of his fellow Commissioners, he does not say such things to them. As such, only Thoma, Itto, and Ayaka have ever heard this line.',
            data: {
                'Shunsuiken 1-Hit DMG': {
                    Lv1: '52.89%',
                    Lv2: '57.2%',
                    Lv3: '61.5%',
                    Lv4: '67.65%',
                    Lv5: '71.96%',
                    Lv6: '76.88%',
                    Lv7: '83.64%',
                    Lv8: '90.4%',
                    Lv9: '97.17%',
                    Lv10: '104.55%',
                    Lv11: '111.93%',
                    Lv12: '119.31%',
                    Lv13: '126.69%',
                    Lv14: '134.07%',
                    Lv15: '141.45%',
                },
                'Shunsuiken 2-Hit DMG': {
                    Lv1: '58.91%',
                    Lv2: '63.7%',
                    Lv3: '68.5%',
                    Lv4: '75.35%',
                    Lv5: '80.15%',
                    Lv6: '85.62%',
                    Lv7: '93.16%',
                    Lv8: '100.7%',
                    Lv9: '108.23%',
                    Lv10: '116.45%',
                    Lv11: '124.67%',
                    Lv12: '132.89%',
                    Lv13: '141.11%',
                    Lv14: '149.33%',
                    Lv15: '157.55%',
                },
                'Shunsuiken 3-Hit DMG': {
                    Lv1: '64.93%',
                    Lv2: '70.21%',
                    Lv3: '75.5%',
                    Lv4: '83.05%',
                    Lv5: '88.34%',
                    Lv6: '94.38%',
                    Lv7: '102.68%',
                    Lv8: '110.99%',
                    Lv9: '119.29%',
                    Lv10: '128.35%',
                    Lv11: '137.41%',
                    Lv12: '146.47%',
                    Lv13: '155.53%',
                    Lv14: '164.59%',
                    Lv15: '173.65%',
                },
                'Takimeguri Kanka Duration': {
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
                'Namisen DMG Bonus': {
                    Lv1: '0.56%Max HP / Stack',
                    Lv2: '0.61%Max HP / Stack',
                    Lv3: '0.65%Max HP / Stack',
                    Lv4: '0.72%Max HP / Stack',
                    Lv5: '0.76%Max HP / Stack',
                    Lv6: '0.82%Max HP / Stack',
                    Lv7: '0.89%Max HP / Stack',
                    Lv8: '0.96%Max HP / Stack',
                    Lv9: '1.03%Max HP / Stack',
                    Lv10: '1.11%Max HP / Stack',
                    Lv11: '1.19%Max HP / Stack',
                    Lv12: '1.27%Max HP / Stack',
                    Lv13: '1.34%Max HP / Stack',
                    Lv14: '1.42%Max HP / Stack',
                    Lv15: '1.5%Max HP / Stack',
                },
                'Water Illusion DMG': {
                    Lv1: '101.48%',
                    Lv2: '109.74%',
                    Lv3: '118%',
                    Lv4: '129.8%',
                    Lv5: '138.06%',
                    Lv6: '147.5%',
                    Lv7: '160.48%',
                    Lv8: '173.46%',
                    Lv9: '186.44%',
                    Lv10: '200.6%',
                    Lv11: '214.76%',
                    Lv12: '228.92%',
                    Lv13: '243.08%',
                    Lv14: '257.24%',
                    Lv15: '271.4%',
                },
                'Water Illusion Duration': {
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
            },
        },
        {
            name: 'Kamisato Art: Suiyuu',
            image: 'https://genshin.honeyhunterworld.com/img/s_663901.webp',
            description:
                'Unveils a garden of purity that silences the cacophony within.\nWhile this space exists, Bloomwater Blades will constantly rain down and attack opponents within its AoE, dealing\nHydro DMG\nand increasing the Normal Attack DMG of characters within.\n"I can see them, you know. The ripples of your beating heart within this realm of still waters."',
            data: {
                'Bloomwater Blade DMG': {
                    Lv1: '66.46%',
                    Lv2: '71.44%',
                    Lv3: '76.42%',
                    Lv4: '83.07%',
                    Lv5: '88.05%',
                    Lv6: '93.04%',
                    Lv7: '99.68%',
                    Lv8: '106.33%',
                    Lv9: '112.98%',
                    Lv10: '119.62%',
                    Lv11: '126.27%',
                    Lv12: '132.91%',
                    Lv13: '141.22%',
                    Lv14: '149.53%',
                    Lv15: '157.83%',
                },
                'Normal Attack DMG Bonus': {
                    Lv1: '11%',
                    Lv2: '12%',
                    Lv3: '13%',
                    Lv4: '14%',
                    Lv5: '15%',
                    Lv6: '16%',
                    Lv7: '17%',
                    Lv8: '18%',
                    Lv9: '19%',
                    Lv10: '20%',
                    Lv11: '20%',
                    Lv12: '20%',
                    Lv13: '20%',
                    Lv14: '20%',
                    Lv15: '20%',
                },
                Duration: {
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
            name: 'Kamisato Art: Daily Cooking',
            image: 'https://genshin.honeyhunterworld.com/img/p_662301.webp',
            description:
                'When Ayato cooks a dish perfectly, he has a 18% chance to receive an additional "Suspicious" dish of the same type.',
        },
        {
            name: 'Kamisato Art: Mine Wo Matoishi Kiyotaki',
            image: 'https://genshin.honeyhunterworld.com/img/p_662101.webp',
            description:
                'Kamisato Art: Kyouka\nhas the following properties:\n\u00b7After it is used, Kamisato Ayato will gain 2 Namisen stacks.\n\u00b7When the water illusion explodes, Ayato will gain a Namisen effect equal to the maximum number of stacks possible.',
        },
        {
            name: 'Kamisato Art: Michiyuku Hagetsu',
            image: 'https://genshin.honeyhunterworld.com/img/p_662201.webp',
            description:
                'If Kamisato Ayato is not on the field and his Energy is less than 40, he will regenerate 2 Energy for himself every second.',
        },
    ],
    constellations: [
        {
            name: 'Kyouka Fuushi',
            image: 'https://genshin.honeyhunterworld.com/img/c_661.webp',
            description:
                'Shunsuiken\nDMG is increased by 40% against opponents with 50% HP or less.',
            level: 1,
        },
        {
            name: 'World Source',
            image: 'https://genshin.honeyhunterworld.com/img/c_662.webp',
            description:
                "Namisen\n's maximum stack count is increased to 5. When Kamisato Ayato has at least 3 Namisen stacks, his Max HP is increased by 50%.",
            level: 2,
        },
        {
            name: 'To Admire the Flowers',
            image: 'https://genshin.honeyhunterworld.com/img/c_663.webp',
            description:
                'Increases the Level of\nKamisato Art: Kyouka\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Endless Flow',
            image: 'https://genshin.honeyhunterworld.com/img/c_664.webp',
            description:
                'After using\nKamisato Art: Suiyuu\n, all nearby party members will have 15% increased Normal Attack SPD for 15s.',
            level: 4,
        },
        {
            name: 'Bansui Ichiro',
            image: 'https://genshin.honeyhunterworld.com/img/c_665.webp',
            description:
                'Increases the Level of\nKamisato Art: Suiyuu\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Boundless Origin',
            image: 'https://genshin.honeyhunterworld.com/img/c_666.webp',
            description:
                "After using\nKamisato Art: Kyouka\n, Ayato's next Shunsuiken attack will create 2 extra Shunsuiken strikes when they hit opponents, each one dealing 450% of Ayato's ATK as DMG.\nBoth these Shunsuiken attacks will not be affected by Namisen.",
            level: 6,
        },
    ],
    abilityScalings,
    characterBonuses,
    constellationBonuses,
}

export default KamisatoAyato
