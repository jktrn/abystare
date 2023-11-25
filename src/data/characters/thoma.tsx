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

const Thoma: Character = {
    name: 'Thoma',
    icon: '/images/characters/thoma.png',
    weapon: 'Polearm',
    vision: 'Pyro',
    rarity: 4,
    description:
        'The Kamisato Clan\'s housekeeper. A well-known "fixer" in Inazuma.',
    occupation: 'Yashiro Commission',
    baseStats: {
        '1/20': {
            'Base HP': 866.0,
            'Base ATK': 16.92,
            'Base DEF': 62.95,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2225.0,
            'Base ATK': 43.46,
            'Base DEF': 161.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 2872.0,
            'Base ATK': 56.1,
            'Base DEF': 208.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 4302.0,
            'Base ATK': 84.03,
            'Base DEF': 312.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 4762.0,
            'Base ATK': 93.01,
            'Base DEF': 346.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5478.0,
            'Base ATK': 106.98,
            'Base DEF': 398.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 6091.0,
            'Base ATK': 118.96,
            'Base DEF': 442.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 6806.0,
            'Base ATK': 132.93,
            'Base DEF': 494.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 7266.0,
            'Base ATK': 141.91,
            'Base DEF': 528.03,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 7981.0,
            'Base ATK': 155.87,
            'Base DEF': 579.96,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 8440.0,
            'Base ATK': 164.85,
            'Base DEF': 613.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 9156.0,
            'Base ATK': 178.82,
            'Base DEF': 665.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 9616.0,
            'Base ATK': 187.8,
            'Base DEF': 698.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 10331.0,
            'Base ATK': 201.78,
            'Base DEF': 750.77,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Swiftshatter Spear',
            image: 'https://genshin.honeyhunterworld.com/img/s_503101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive spear strikes.\nCharged Attack\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '44.39%',
                    Lv2: '48.01%',
                    Lv3: '51.62%',
                    Lv4: '56.78%',
                    Lv5: '60.4%',
                    Lv6: '64.53%',
                    Lv7: '70.2%',
                    Lv8: '75.88%',
                    Lv9: '81.56%',
                    Lv10: '87.75%',
                    Lv11: '93.95%',
                    Lv12: '100.14%',
                    Lv13: '106.34%',
                    Lv14: '112.53%',
                    Lv15: '118.73%',
                },
                '2-Hit DMG': {
                    Lv1: '43.63%',
                    Lv2: '47.18%',
                    Lv3: '50.73%',
                    Lv4: '55.8%',
                    Lv5: '59.35%',
                    Lv6: '63.41%',
                    Lv7: '68.99%',
                    Lv8: '74.57%',
                    Lv9: '80.15%',
                    Lv10: '86.24%',
                    Lv11: '92.33%',
                    Lv12: '98.42%',
                    Lv13: '104.5%',
                    Lv14: '110.59%',
                    Lv15: '116.68%',
                },
                '3-Hit DMG': {
                    Lv1: '53.58%',
                    Lv2: '57.94%',
                    Lv3: '62.30%',
                    Lv4: '68.52%',
                    Lv5: '72.90%',
                    Lv6: '77.88%',
                    Lv7: '84.72%',
                    Lv8: '91.58%',
                    Lv9: '98.44%',
                    Lv10: '105.92%',
                    Lv11: '113.38%',
                    Lv12: '120.86%',
                    Lv13: '128.34%',
                    Lv14: '135.82%',
                    Lv15: '143.28%',
                },
                '4-Hit DMG': {
                    Lv1: '67.36%',
                    Lv2: '72.84%',
                    Lv3: '78.32%',
                    Lv4: '86.15%',
                    Lv5: '91.63%',
                    Lv6: '97.9%',
                    Lv7: '106.52%',
                    Lv8: '115.13%',
                    Lv9: '123.75%',
                    Lv10: '133.14%',
                    Lv11: '142.54%',
                    Lv12: '151.94%',
                    Lv13: '161.34%',
                    Lv14: '170.74%',
                    Lv15: '180.14%',
                },
                'Charged Attack DMG': {
                    Lv1: '112.75%',
                    Lv2: '121.92%',
                    Lv3: '131.1%',
                    Lv4: '144.21%',
                    Lv5: '153.39%',
                    Lv6: '163.87%',
                    Lv7: '178.3%',
                    Lv8: '192.72%',
                    Lv9: '207.14%',
                    Lv10: '222.87%',
                    Lv11: '238.6%',
                    Lv12: '254.33%',
                    Lv13: '270.07%',
                    Lv14: '285.8%',
                    Lv15: '301.53%',
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
            name: 'Blazing Blessing',
            image: 'https://genshin.honeyhunterworld.com/img/s_503201.webp',
            description:
                'Thoma vaults forward with his polearm and delivers a flame-filled flying kick that deals\nAoE Pyro DMG\n, while also summoning a defensive Blazing Barrier. At the moment of casting, Thoma\'s Elemental Skill applies\nPyro\nto himself.\nThe DMG Absorption of the Blazing Barrier scales off Thoma\'s Max HP.\nThe Blazing Barrier has the following traits:\n\u00b7Absorbs\nPyro DMG\n250% more effectively.\n\u00b7When a new Blazing Barrier is obtained, the remaining DMG Absorption of an existing Blazing Barrier will stack and its duration will be refreshed.\nThe maximum DMG Absorption of the Blazing Barrier will not exceed a certain percentage of Thoma\'s Max HP.\nAs a guest from afar, only the most burning passion would allow one to master the pure and precise spear arts of Inazuma. Thoma\'s mastery, indeed, is not limited to being the "swiftest-studying student" or "a master of the spear," but he has imbued his will to protect others and fend off foes into his art as well.',
            data: {
                'Skill DMG': {
                    Lv1: '146.4%',
                    Lv2: '157.38%',
                    Lv3: '168.36%',
                    Lv4: '183%',
                    Lv5: '193.98%',
                    Lv6: '204.96%',
                    Lv7: '219.6%',
                    Lv8: '234.24%',
                    Lv9: '248.88%',
                    Lv10: '263.52%',
                    Lv11: '278.16%',
                    Lv12: '292.8%',
                    Lv13: '311.1%',
                    Lv14: '329.4%',
                    Lv15: '347.7%',
                },
                'Shield DMG Absorption': {
                    Lv1: '7.2% Max HP + 693.33',
                    Lv2: '7.74% Max HP + 762.68',
                    Lv3: '8.28% Max HP + 837.8',
                    Lv4: '9% Max HP + 918.7',
                    Lv5: '9.54% Max HP + 1005.38',
                    Lv6: '10.08% Max HP + 1097.84',
                    Lv7: '10.8% Max HP + 1196.07',
                    Lv8: '11.52% Max HP + 1300.09',
                    Lv9: '12.24% Max HP + 1409.88',
                    Lv10: '12.96% Max HP + 1525.45',
                    Lv11: '13.68% Max HP + 1646.8',
                    Lv12: '14.4% Max HP + 1773.93',
                    Lv13: '15.3% Max HP + 1906.84',
                    Lv14: '16.2% Max HP + 2045.53',
                    Lv15: '17.1% Max HP + 2189.99',
                },
                'Shield Duration': {
                    Lv1: '8s',
                    Lv2: '8s',
                    Lv3: '8s',
                    Lv4: '8s',
                    Lv5: '8s',
                    Lv6: '8s',
                    Lv7: '8s',
                    Lv8: '8s',
                    Lv9: '8s',
                    Lv10: '8s',
                    Lv11: '8s',
                    Lv12: '8s',
                    Lv13: '8s',
                    Lv14: '8s',
                    Lv15: '8s',
                },
                'Max Shield DMG Absorption': {
                    Lv1: '19.6% Max HP + 1887.42',
                    Lv2: '21.07% Max HP + 2076.19',
                    Lv3: '22.54% Max HP + 2280.69',
                    Lv4: '24.5% Max HP + 2500.92',
                    Lv5: '25.97% Max HP + 2736.88',
                    Lv6: '27.44% Max HP + 2988.57',
                    Lv7: '29.4% Max HP + 3255.99',
                    Lv8: '31.36% Max HP + 3539.14',
                    Lv9: '33.32% Max HP + 3838.02',
                    Lv10: '35.28% Max HP + 4152.64',
                    Lv11: '37.24% Max HP + 4482.98',
                    Lv12: '39.2% Max HP + 4829.06',
                    Lv13: '41.65% Max HP + 5190.86',
                    Lv14: '44.1% Max HP + 5568.4',
                    Lv15: '46.55% Max HP + 5961.67',
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
            name: 'Crimson Ooyoroi',
            image: 'https://genshin.honeyhunterworld.com/img/s_503901.webp',
            description:
                "Thoma spins his polearm, slicing at his foes with roaring flames that deal\nAoE Pyro DMG\nand weave themselves into a Scorching Ooyoroi.\nScorching Ooyoroi\nWhile Scorching Ooyoroi is in effect, the active character's Normal Attacks will trigger Fiery Collapse, dealing\nAoE Pyro DMG\nand summoning a Blazing Barrier.\nFiery Collapse can be triggered once every 1s.\nExcept for the amount of DMG they can absorb, the Blazing Barriers created in this way are identical to those created by Thoma's Elemental Skill, Blazing Blessing:\n\u00b7Absorbs\nPyro DMG\n250% more effectively.\n\u00b7When a new Blazing Barrier is obtained, the remaining DMG Absorption of an existing Blazing Barrier will stack and its duration will be refreshed.\nThe maximum DMG Absorption of the Blazing Barrier will not exceed a certain percentage of Thoma's Max HP.\nIf Thoma falls, the effects of Scorching Ooyoroi will be cleared.\n\"I will not forget my initial promise. Let this burning flame protect those I cherish, and may it never be extinguished.\"",
            data: {
                'Skill DMG': {
                    Lv1: '88%',
                    Lv2: '94.6%',
                    Lv3: '101.2%',
                    Lv4: '110%',
                    Lv5: '116.6%',
                    Lv6: '123.2%',
                    Lv7: '132%',
                    Lv8: '140.8%',
                    Lv9: '149.6%',
                    Lv10: '158.4%',
                    Lv11: '167.2%',
                    Lv12: '176%',
                    Lv13: '187%',
                    Lv14: '198%',
                    Lv15: '209%',
                },
                'Fiery Collapse DMG': {
                    Lv1: '58%',
                    Lv2: '62.35%',
                    Lv3: '66.7%',
                    Lv4: '72.5%',
                    Lv5: '76.85%',
                    Lv6: '81.2%',
                    Lv7: '87%',
                    Lv8: '92.8%',
                    Lv9: '98.6%',
                    Lv10: '104.4%',
                    Lv11: '110.2%',
                    Lv12: '116%',
                    Lv13: '123.25%',
                    Lv14: '130.5%',
                    Lv15: '137.75%',
                },
                'Shield DMG Absorption': {
                    Lv1: '1.14% Max HP + 110.03',
                    Lv2: '1.23% Max HP + 121.04',
                    Lv3: '1.32% Max HP + 132.96',
                    Lv4: '1.43% Max HP + 145.8',
                    Lv5: '1.52% Max HP + 159.56',
                    Lv6: '1.6% Max HP + 174.23',
                    Lv7: '1.72% Max HP + 189.82',
                    Lv8: '1.83% Max HP + 206.33',
                    Lv9: '1.94% Max HP + 223.75',
                    Lv10: '2.06% Max HP + 242.09',
                    Lv11: '2.17% Max HP + 261.35',
                    Lv12: '2.29% Max HP + 281.53',
                    Lv13: '2.43% Max HP + 302.62',
                    Lv14: '2.57% Max HP + 324.63',
                    Lv15: '2.72% Max HP + 347.56',
                },
                'Shield Duration': {
                    Lv1: '8s',
                    Lv2: '8s',
                    Lv3: '8s',
                    Lv4: '8s',
                    Lv5: '8s',
                    Lv6: '8s',
                    Lv7: '8s',
                    Lv8: '8s',
                    Lv9: '8s',
                    Lv10: '8s',
                    Lv11: '8s',
                    Lv12: '8s',
                    Lv13: '8s',
                    Lv14: '8s',
                    Lv15: '8s',
                },
                'Scorching Ooyoroi Duration': {
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
            name: 'Snap and Swing',
            image: 'https://genshin.honeyhunterworld.com/img/p_502301.webp',
            description:
                "When you\nfish\nsuccessfully in Inazuma, Thoma's help grants a 20% chance of scoring a double catch.",
        },
        {
            name: 'Imbricated Armor',
            image: 'https://genshin.honeyhunterworld.com/img/p_502101.webp',
            description:
                "When your current active character obtains or refreshes a\nBlazing Barrier\n, this character's Shield Strength will increase by 5% for 6s.\nThis effect can be triggered once every 0.3s seconds. Max 5 stacks.",
        },
        {
            name: 'Flaming Assault',
            image: 'https://genshin.honeyhunterworld.com/img/p_502201.webp',
            description:
                "DMG dealt by\nCrimson Ooyoroi\n's Fiery Collapse is increased by 2.2% of Thoma's Max HP.",
        },
    ],
    constellations: [
        {
            name: "A Comrade's Duty",
            image: 'https://genshin.honeyhunterworld.com/img/c_501.webp',
            description:
                "When a character protected by Thoma's own\nBlazing Barrier\n(Thoma excluded) is attacked, Thoma's own\nBlazing Blessing\nCD is decreased by 3s, while his own\nCrimson Ooyoroi\n's CD is decreased by 3s.\nThis effect can be triggered once every 20s.",
            level: 1,
        },
        {
            name: "A Subordinate's Skills",
            image: 'https://genshin.honeyhunterworld.com/img/c_502.webp',
            description: "Crimson Ooyoroi\n's duration is increased by 3s.",
            level: 2,
        },
        {
            name: 'Fortified Resolve',
            image: 'https://genshin.honeyhunterworld.com/img/c_503.webp',
            description:
                'Increases the Level of\nBlazing Blessing\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Long-Term Planning',
            image: 'https://genshin.honeyhunterworld.com/img/c_504.webp',
            description:
                'After using\nCrimson Ooyoroi\n, 15 Energy will be restored to Thoma.',
            level: 4,
        },
        {
            name: 'Raging Wildfire',
            image: 'https://genshin.honeyhunterworld.com/img/c_505.webp',
            description:
                'Increases the Level of\nCrimson Ooyoroi\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Burning Heart',
            image: 'https://genshin.honeyhunterworld.com/img/c_506.webp',
            description:
                "When a\nBlazing Barrier\nis obtained or refreshed, the DMG dealt by all party members' Normal, Charged, and Plunging Attacks is increased by 15% for 6s.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Thoma
