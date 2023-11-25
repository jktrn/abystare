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

const Navia: Character = {
    name: 'Navia',
    icon: '/images/characters/navia.png',
    weapon: 'Claymore',
    vision: 'Geo',
    rarity: 5,
    description: '\u6d4b\u8bd5\u89d2\u8272',
    occupation: '???',
    baseStats: {
        '1/20': {
            'Base HP': 985.0,
            'Base ATK': 27.37,
            'Base DEF': 61.74,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2555.0,
            'Base ATK': 71.0,
            'Base DEF': 160.17,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3399.0,
            'Base ATK': 94.47,
            'Base DEF': 213.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5086.0,
            'Base ATK': 141.36,
            'Base DEF': 318.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 5686.0,
            'Base ATK': 158.03,
            'Base DEF': 356.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 6542.0,
            'Base ATK': 181.81,
            'Base DEF': 410.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7341.0,
            'Base ATK': 204.05,
            'Base DEF': 460.3,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8206.0,
            'Base ATK': 228.08,
            'Base DEF': 514.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 8806.0,
            'Base ATK': 244.75,
            'Base DEF': 552.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 9679.0,
            'Base ATK': 269.0,
            'Base DEF': 606.84,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 10278.0,
            'Base ATK': 285.68,
            'Base DEF': 644.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 11161.0,
            'Base ATK': 310.2,
            'Base DEF': 699.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 11761.0,
            'Base ATK': 326.88,
            'Base DEF': 737.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 12650.0,
            'Base ATK': 351.59,
            'Base DEF': 793.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Blunt Refusal',
            image: 'https://genshin.honeyhunterworld.com/img/s_913101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '93.52%',
                    Lv2: '101.13%',
                    Lv3: '108.74%',
                    Lv4: '119.62%',
                    Lv5: '127.23%',
                    Lv6: '135.93%',
                    Lv7: '147.89%',
                    Lv8: '159.85%',
                    Lv9: '171.81%',
                    Lv10: '184.86%',
                    Lv11: '197.91%',
                    Lv12: '210.96%',
                    Lv13: '224.01%',
                    Lv14: '237.06%',
                    Lv15: '250.11%',
                },
                '2-Hit DMG': {
                    Lv1: '86.51%',
                    Lv2: '93.55%',
                    Lv3: '100.59%',
                    Lv4: '110.65%',
                    Lv5: '117.69%',
                    Lv6: '125.74%',
                    Lv7: '136.8%',
                    Lv8: '147.87%',
                    Lv9: '158.93%',
                    Lv10: '171%',
                    Lv11: '183.07%',
                    Lv12: '195.14%',
                    Lv13: '207.21%',
                    Lv14: '219.28%',
                    Lv15: '231.35%',
                },
                '3-Hit DMG': {
                    Lv1: '104.67%',
                    Lv2: '113.19%',
                    Lv3: '121.68%',
                    Lv4: '133.86%',
                    Lv5: '142.38%',
                    Lv6: '152.13%',
                    Lv7: '165.51%',
                    Lv8: '178.89%',
                    Lv9: '192.27%',
                    Lv10: '206.88%',
                    Lv11: '221.49%',
                    Lv12: '236.10%',
                    Lv13: '250.68%',
                    Lv14: '265.29%',
                    Lv15: '279.90%',
                },
                '4-Hit DMG': {
                    Lv1: '133.43%',
                    Lv2: '144.29%',
                    Lv3: '155.15%',
                    Lv4: '170.67%',
                    Lv5: '181.53%',
                    Lv6: '193.94%',
                    Lv7: '211.01%',
                    Lv8: '228.07%',
                    Lv9: '245.14%',
                    Lv10: '263.76%',
                    Lv11: '282.38%',
                    Lv12: '301%',
                    Lv13: '319.62%',
                    Lv14: '338.23%',
                    Lv15: '356.85%',
                },
                'Charged Attack Cyclic DMG': {
                    Lv1: '62.52%',
                    Lv2: '67.61%',
                    Lv3: '72.7%',
                    Lv4: '79.97%',
                    Lv5: '85.06%',
                    Lv6: '90.87%',
                    Lv7: '98.87%',
                    Lv8: '106.87%',
                    Lv9: '114.87%',
                    Lv10: '123.59%',
                    Lv11: '132.31%',
                    Lv12: '141.04%',
                    Lv13: '149.76%',
                    Lv14: '158.49%',
                    Lv15: '167.21%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '113.09%',
                    Lv2: '122.29%',
                    Lv3: '131.5%',
                    Lv4: '144.65%',
                    Lv5: '153.86%',
                    Lv6: '164.37%',
                    Lv7: '178.84%',
                    Lv8: '193.31%',
                    Lv9: '207.77%',
                    Lv10: '223.55%',
                    Lv11: '239.33%',
                    Lv12: '255.11%',
                    Lv13: '270.89%',
                    Lv14: '286.67%',
                    Lv15: '302.45%',
                },
                'Charged Attack Stamina Cost': {
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
                'Max Duration': {
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
                'Plunge DMG': {
                    Lv1: '74.59%',
                    Lv2: '80.66%',
                    Lv3: '86.73%',
                    Lv4: '95.4%',
                    Lv5: '101.47%',
                    Lv6: '108.41%',
                    Lv7: '117.95%',
                    Lv8: '127.49%',
                    Lv9: '137.03%',
                    Lv10: '147.44%',
                    Lv11: '157.85%',
                    Lv12: '168.26%',
                    Lv13: '178.66%',
                    Lv14: '189.07%',
                    Lv15: '199.48%',
                },
                'Low Plunge DMG': {
                    Lv1: '149.14%',
                    Lv2: '161.28%',
                    Lv3: '173.42%',
                    Lv4: '190.77%',
                    Lv5: '202.91%',
                    Lv6: '216.78%',
                    Lv7: '235.86%',
                    Lv8: '254.93%',
                    Lv9: '274.01%',
                    Lv10: '294.82%',
                    Lv11: '315.63%',
                    Lv12: '336.44%',
                    Lv13: '357.25%',
                    Lv14: '378.06%',
                    Lv15: '398.87%',
                },
                'High Plunge DMG': {
                    Lv1: '186.29%',
                    Lv2: '201.45%',
                    Lv3: '216.62%',
                    Lv4: '238.28%',
                    Lv5: '253.44%',
                    Lv6: '270.77%',
                    Lv7: '294.6%',
                    Lv8: '318.42%',
                    Lv9: '342.25%',
                    Lv10: '368.25%',
                    Lv11: '394.24%',
                    Lv12: '420.23%',
                    Lv13: '446.23%',
                    Lv14: '472.22%',
                    Lv15: '498.21%',
                },
            },
        },
        {
            name: 'Ceremonial Crystalshot',
            image: 'https://genshin.honeyhunterworld.com/img/s_913201.webp',
            description:
                'When a character in the party obtains an Elemental Shard created from the Crystallize reaction, Navia will gain 1 Crystal Shrapnel charge. Navia can hold up to 6 charges of Crystal Shrapnel at once. Each time Crystal Shrapnel gain is triggered, the duration of the Shards you have already will be reset.\nWhen she fires, Navia will consume all Cyrstal Shrapnel charges and open her elegant yet lethal Gunbrella, firing multiple Rosula Shardshots that can penetrate opponents, dealing\nGeo DMG\nto opponents hit.\nWhen 0/1/2/3 or more charges of Crystal Shrapnel are consumed, 5/7/9/11 Rosula Shardshots will be fired respectively. The more Rosula Shardshots that strike a single opponent, the greater the DMG dealt to them. When all 11 Rosula Shardshots strike, they deal 200% of the original amount of DMG.\nIn addition, when more than 3 charges of Crystal Shrapnel are consumed, every charge consumed beyond those 3 will crease the damage dealt by that shot by an additional 15%.\nHold\nEnter Aiming Mode, continually collecting Elemental Shards created by Crystallize reactions. When released, fire Rosula Shardshots with the same effect as when the skill is tapped.\n2 initial uses.\nArkhe: Ousia\nPeriodically, when Navia fires her Gunbrella, a Surging Blade will be summoned, dealing ousia-aligned\nGeo DMG\n.\n"Maintaining the appropriate distance with those whom distance should be maintained is an essential part of etiquette. Naturally, there are also many ways to do this..."',
            data: {
                'Rosula Shardshot Base DMG': {
                    Lv1: '307.2%',
                    Lv2: '330.24%',
                    Lv3: '353.28%',
                    Lv4: '384%',
                    Lv5: '407.04%',
                    Lv6: '430.08%',
                    Lv7: '460.8%',
                    Lv8: '491.52%',
                    Lv9: '522.24%',
                    Lv10: '552.96%',
                    Lv11: '583.68%',
                    Lv12: '614.4%',
                    Lv13: '652.8%',
                    Lv14: '691.2%',
                    Lv15: '729.6%',
                },
                'Crystal Shrapnel Duration': {
                    Lv1: '300s',
                    Lv2: '300s',
                    Lv3: '300s',
                    Lv4: '300s',
                    Lv5: '300s',
                    Lv6: '300s',
                    Lv7: '300s',
                    Lv8: '300s',
                    Lv9: '300s',
                    Lv10: '300s',
                    Lv11: '300s',
                    Lv12: '300s',
                    Lv13: '300s',
                    Lv14: '300s',
                    Lv15: '300s',
                },
                'Surging Blade DMG': {
                    Lv1: '33.6%',
                    Lv2: '36.12%',
                    Lv3: '38.64%',
                    Lv4: '42%',
                    Lv5: '44.52%',
                    Lv6: '47.04%',
                    Lv7: '50.4%',
                    Lv8: '53.76%',
                    Lv9: '57.12%',
                    Lv10: '60.48%',
                    Lv11: '63.84%',
                    Lv12: '67.2%',
                    Lv13: '71.4%',
                    Lv14: '75.6%',
                    Lv15: '79.8%',
                },
                'Surging Blade Interval': {
                    Lv1: '7s',
                    Lv2: '7s',
                    Lv3: '7s',
                    Lv4: '7s',
                    Lv5: '7s',
                    Lv6: '7s',
                    Lv7: '7s',
                    Lv8: '7s',
                    Lv9: '7s',
                    Lv10: '7s',
                    Lv11: '7s',
                    Lv12: '7s',
                    Lv13: '7s',
                    Lv14: '7s',
                    Lv15: '7s',
                },
                CD: {
                    Lv1: '9s',
                    Lv2: '9s',
                    Lv3: '9s',
                    Lv4: '9s',
                    Lv5: '9s',
                    Lv6: '9s',
                    Lv7: '9s',
                    Lv8: '9s',
                    Lv9: '9s',
                    Lv10: '9s',
                    Lv11: '9s',
                    Lv12: '9s',
                    Lv13: '9s',
                    Lv14: '9s',
                    Lv15: '9s',
                },
            },
        },
        {
            name: "As the Sunlit Sky's Singing Salute",
            image: 'https://genshin.honeyhunterworld.com/img/s_913901.webp',
            description:
                "On the orders of the President of the Spina di Rosula, call for a magnificent Golden Rose Salute. Unleashes a massive bombardment on opponents in front of her, dealing\nAoe Geo DMG\nand providing Fire Support for a duration afterward, periodically dealing\nGeo DMG\n.\nWhen attacks from Golden Rose's Salute hit opponents, Navia will gain 1 charge of Crystal Shrapnel. This effect can be triggered up to once every 2.4s.\n\"The Spina di Rosula's salute is a preemptive celebration of the successful conclusion of our negotiations and is fired just before talks begin. Don't misunderstand, it isn't in any way, shape, or form some kind of threat.\"",
            data: {
                'Skill DMG': {
                    Lv1: '76%',
                    Lv2: '81.7%',
                    Lv3: '87.4%',
                    Lv4: '95%',
                    Lv5: '100.7%',
                    Lv6: '106.4%',
                    Lv7: '114%',
                    Lv8: '121.6%',
                    Lv9: '129.2%',
                    Lv10: '136.8%',
                    Lv11: '144.4%',
                    Lv12: '152%',
                    Lv13: '161.5%',
                    Lv14: '171%',
                    Lv15: '180.5%',
                },
                'Fire Support DMG': {
                    Lv1: '48.4%',
                    Lv2: '52.03%',
                    Lv3: '55.66%',
                    Lv4: '60.5%',
                    Lv5: '64.13%',
                    Lv6: '67.76%',
                    Lv7: '72.6%',
                    Lv8: '77.44%',
                    Lv9: '82.28%',
                    Lv10: '87.12%',
                    Lv11: '91.96%',
                    Lv12: '96.8%',
                    Lv13: '102.85%',
                    Lv14: '108.9%',
                    Lv15: '114.95%',
                },
                'Fire Support Duration': {
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
            name: 'Painstaking Transaction',
            image: 'https://genshin.honeyhunterworld.com/img/p_912301.webp',
            description:
                'Gains 25% more rewards when dispatched on a Fontaine Expedition for 20 hours.',
        },
        {
            name: 'Undisclosed Distribution Channels',
            image: 'https://genshin.honeyhunterworld.com/img/p_912101.webp',
            description:
                "For 4s after using\nCeremonial Crystalshot\n, the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be converted into\nGeo DMG\nwhich cannot be overridden by other Elemental infusions, and the DMG dealt by Navia's Normal Attacks, Charged Attacks, and Plunging Attacks will be increased by 40%.",
        },
        {
            name: 'Mutual Assistance Network',
            image: 'https://genshin.honeyhunterworld.com/img/p_912201.webp',
            description:
                'For each\nPyro\n/\nElectro\n/\nCryo\n/\nHydro\nparty member, Navia gains 20% increased ATK. This effect can stack up to 2 times.',
        },
    ],
    constellations: [
        {
            name: "A Lady's Rules for Keeping a Courteous Distance",
            image: 'https://genshin.honeyhunterworld.com/img/c_911.webp',
            description:
                'Each charge of Crystal Shrapnel consumed when Navia uses\nCeremonial Crystalshot\nwill restore 2 Energy to her and decrease the CD of\nAs the Sunlit Sky\'s Singing Salute\nby 1s. Up to 6 Energy can be gained this way, and the CD of "As the Sunlit Sky\'s Singing Salute" can be decreased by up to 3s.',
            level: 1,
        },
        {
            name: "The President's Pursuit of Victory",
            image: 'https://genshin.honeyhunterworld.com/img/c_912.webp',
            description:
                "The CRIT Rate of\nCeremonial Crystalshot\nis increased by 8% for each charge of Crystal Shrapnel consumed. CRIT Rate can be increased by up to 24% in this way.\nIn addition, when Ceremonial Crystalshot hits an opponent, one shot of Fire Support from\nAs the Sunlit Sky's Singing Salute\nwill strike near the location of the hit. Up to one instance of Fire Support can be triggered each time Ceremonial Crystalshot is used, and DMG dealt by Fire Support in this way is considered Elemental Burst DMG.",
            level: 2,
        },
        {
            name: "Businesswoman's Broad Vision",
            image: 'https://genshin.honeyhunterworld.com/img/c_913.webp',
            description:
                'Increases the Level of\nCeremonial Crystalshot\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'The Oathsworn Never Capitulate',
            image: 'https://genshin.honeyhunterworld.com/img/c_914.webp',
            description:
                "When\nAs the Sunlit Sky's Singing Salute\nhits an opponent, that opponent's\nGeo RES\nwill be decreased by 20% for 8s.",
            level: 4,
        },
        {
            name: "Negotiator's Resolute Negotiations",
            image: 'https://genshin.honeyhunterworld.com/img/c_915.webp',
            description:
                "Increases the Level of\nAs the Sunlit Sky's Singing Salute\nby 3.\nMaximum upgrade level is 15.",
            level: 5,
        },
        {
            name: "The Flexible Finesse of the Spina's President",
            image: 'https://genshin.honeyhunterworld.com/img/c_916.webp',
            description:
                'If more than 3 charges of Crystal Shrapnel are consumed when using\nCeremonial Crystalshot\n, each charge consumed beyond the first 3 increases the CRIT DMG of that Ceremonial Crystalshot by 35%, and any charges consumed beyond the first 3 are returned to Navia.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Navia
