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

const Barbara: Character = {
    name: 'Barbara',
    icon: '/images/characters/barbara.png',
    weapon: 'Catalyst',
    vision: 'Hydro',
    rarity: 4,
    description:
        'Every citizen of Mondstadt adores Barbara. She learned the word "idol" from a magazine.',
    occupation: 'Church of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 821.0,
            'Base ATK': 13.36,
            'Base DEF': 56.08,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 2108.0,
            'Base ATK': 34.31,
            'Base DEF': 144.07,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 2721.0,
            'Base ATK': 44.29,
            'Base DEF': 185.97,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 4076.0,
            'Base ATK': 66.34,
            'Base DEF': 278.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 4512.0,
            'Base ATK': 73.43,
            'Base DEF': 308.32,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/50': {
            'Base HP': 5189.0,
            'Base ATK': 84.46,
            'Base DEF': 354.64,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/60': {
            'Base HP': 5770.0,
            'Base ATK': 93.91,
            'Base DEF': 394.33,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/60': {
            'Base HP': 6448.0,
            'Base ATK': 104.95,
            'Base DEF': 440.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/70': {
            'Base HP': 6884.0,
            'Base ATK': 112.04,
            'Base DEF': 470.42,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/70': {
            'Base HP': 7561.0,
            'Base ATK': 123.05,
            'Base DEF': 516.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/80': {
            'Base HP': 7996.0,
            'Base ATK': 130.14,
            'Base DEF': 546.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/80': {
            'Base HP': 8674.0,
            'Base ATK': 141.18,
            'Base DEF': 592.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/90': {
            'Base HP': 9110.0,
            'Base ATK': 148.27,
            'Base DEF': 622.55,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
        '90/90': {
            'Base HP': 9787.0,
            'Base ATK': 159.3,
            'Base DEF': 668.87,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Whisper of Water',
            image: 'https://genshin.honeyhunterworld.com/img/s_143101.webp',
            description:
                'Normal Attack\nPerforms up to 4 water splash attacks that deal\nHydro DMG\n.\nCharged Attack\nConsumes a certain amount of Stamina to deal\nAoE Hydro DMG\nafter a short casting time.\nPlunging Attack\nGathering the might of Hydro, Barbara plunges towards the ground from mid-air, damaging all opponents in her path. Deals\nAoE Hydro DMG\nupon impact with the ground.',
            data: {
                '1-Hit DMG': {
                    Lv1: '37.84%',
                    Lv2: '40.68%',
                    Lv3: '43.52%',
                    Lv4: '47.3%',
                    Lv5: '50.14%',
                    Lv6: '52.98%',
                    Lv7: '56.76%',
                    Lv8: '60.54%',
                    Lv9: '64.33%',
                    Lv10: '68.11%',
                    Lv11: '72.05%',
                    Lv12: '77.19%',
                    Lv13: '82.34%',
                    Lv14: '87.49%',
                    Lv15: '92.63%',
                },
                '2-Hit DMG': {
                    Lv1: '35.52%',
                    Lv2: '38.18%',
                    Lv3: '40.85%',
                    Lv4: '44.4%',
                    Lv5: '47.06%',
                    Lv6: '49.73%',
                    Lv7: '53.28%',
                    Lv8: '56.83%',
                    Lv9: '60.38%',
                    Lv10: '63.94%',
                    Lv11: '67.63%',
                    Lv12: '72.46%',
                    Lv13: '77.29%',
                    Lv14: '82.12%',
                    Lv15: '86.95%',
                },
                '3-Hit DMG': {
                    Lv1: '41.04%',
                    Lv2: '44.12%',
                    Lv3: '47.2%',
                    Lv4: '51.3%',
                    Lv5: '54.38%',
                    Lv6: '57.46%',
                    Lv7: '61.56%',
                    Lv8: '65.66%',
                    Lv9: '69.77%',
                    Lv10: '73.87%',
                    Lv11: '78.14%',
                    Lv12: '83.72%',
                    Lv13: '89.3%',
                    Lv14: '94.88%',
                    Lv15: '100.47%',
                },
                '4-Hit DMG': {
                    Lv1: '55.2%',
                    Lv2: '59.34%',
                    Lv3: '63.48%',
                    Lv4: '69%',
                    Lv5: '73.14%',
                    Lv6: '77.28%',
                    Lv7: '82.8%',
                    Lv8: '88.32%',
                    Lv9: '93.84%',
                    Lv10: '99.36%',
                    Lv11: '105.1%',
                    Lv12: '112.61%',
                    Lv13: '120.12%',
                    Lv14: '127.62%',
                    Lv15: '135.13%',
                },
                'Charged Attack DMG': {
                    Lv1: '166.24%',
                    Lv2: '178.71%',
                    Lv3: '191.18%',
                    Lv4: '207.8%',
                    Lv5: '220.27%',
                    Lv6: '232.74%',
                    Lv7: '249.36%',
                    Lv8: '265.98%',
                    Lv9: '282.61%',
                    Lv10: '299.23%',
                    Lv11: '316.52%',
                    Lv12: '339.13%',
                    Lv13: '361.74%',
                    Lv14: '384.35%',
                    Lv15: '406.96%',
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
            name: 'Let the Show Begin\u266a',
            image: 'https://genshin.honeyhunterworld.com/img/s_143201.webp',
            description:
                "Summons water droplets resembling musical notes that form a Melody Loop, dealing\nHydro DMG\nto surrounding opponents and applying the\nWet\nstatus to them.\nMelody Loop\n\u00b7On hit, Barbara's Normal Attacks heal your own party members and nearby teammates for a certain amount of HP, which scales with Barbara's Max HP.\n\u00b7On hit, Barbara's Charged Attack generates 4 times the amount of healing.\n\u00b7Periodically regenerates your own active character's HP.\n\u00b7Applies the\nWet\nstatus to the character and to opponents who come in contact with them.\nBarbara's music is the magic that heals her companions.",
            data: {
                'HP Regeneration Per Hit': {
                    Lv1: '0.75% Max HP + 72.22',
                    Lv2: '0.81% Max HP + 79.45',
                    Lv3: '0.86% Max HP + 87.27',
                    Lv4: '0.94% Max HP + 95.7',
                    Lv5: '0.99% Max HP + 104.73',
                    Lv6: '1.05% Max HP + 114.36',
                    Lv7: '1.13% Max HP + 124.59',
                    Lv8: '1.2% Max HP + 135.43',
                    Lv9: '1.27% Max HP + 146.86',
                    Lv10: '1.35% Max HP + 158.9',
                    Lv11: '1.43% Max HP + 171.54',
                    Lv12: '1.5% Max HP + 184.79',
                    Lv13: '1.59% Max HP + 198.63',
                    Lv14: '1.69% Max HP + 213.08',
                    Lv15: '1.78% Max HP + 228.13',
                },
                'Continuous Regeneration': {
                    Lv1: '4% Max HP + 385.19',
                    Lv2: '4.3% Max HP + 423.71',
                    Lv3: '4.6% Max HP + 465.45',
                    Lv4: '5% Max HP + 510.39',
                    Lv5: '5.3% Max HP + 558.55',
                    Lv6: '5.6% Max HP + 609.91',
                    Lv7: '6% Max HP + 664.49',
                    Lv8: '6.4% Max HP + 722.27',
                    Lv9: '6.8% Max HP + 783.27',
                    Lv10: '7.2% Max HP + 847.48',
                    Lv11: '7.6% Max HP + 914.89',
                    Lv12: '8% Max HP + 985.52',
                    Lv13: '8.5% Max HP + 1059.36',
                    Lv14: '9% Max HP + 1136.41',
                    Lv15: '9.5% Max HP + 1216.67',
                },
                'Droplet DMG': {
                    Lv1: '58.4%',
                    Lv2: '62.78%',
                    Lv3: '67.16%',
                    Lv4: '73%',
                    Lv5: '77.38%',
                    Lv6: '81.76%',
                    Lv7: '87.6%',
                    Lv8: '93.44%',
                    Lv9: '99.28%',
                    Lv10: '105.12%',
                    Lv11: '110.96%',
                    Lv12: '116.8%',
                    Lv13: '124.1%',
                    Lv14: '131.4%',
                    Lv15: '138.7%',
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
                    Lv1: '32s',
                    Lv2: '32s',
                    Lv3: '32s',
                    Lv4: '32s',
                    Lv5: '32s',
                    Lv6: '32s',
                    Lv7: '32s',
                    Lv8: '32s',
                    Lv9: '32s',
                    Lv10: '32s',
                    Lv11: '32s',
                    Lv12: '32s',
                    Lv13: '32s',
                    Lv14: '32s',
                    Lv15: '32s',
                },
            },
        },
        {
            name: 'Shining Miracle\u266a',
            image: 'https://genshin.honeyhunterworld.com/img/s_143901.webp',
            description:
                "Heals your own party members and nearby teammates for a large amount of HP that scales with Barbara's Max HP.\nBarbara's desire to heal strengthens her will to fight and sing.",
            data: {
                Regeneration: {
                    Lv1: '17.6% Max HP + 1694.28',
                    Lv2: '18.92% Max HP + 1863.73',
                    Lv3: '20.24% Max HP + 2047.31',
                    Lv4: '22% Max HP + 2245',
                    Lv5: '23.32% Max HP + 2456.81',
                    Lv6: '24.64% Max HP + 2682.75',
                    Lv7: '26.4% Max HP + 2922.81',
                    Lv8: '28.16% Max HP + 3176.98',
                    Lv9: '29.92% Max HP + 3445.28',
                    Lv10: '31.68% Max HP + 3727.7',
                    Lv11: '33.44% Max HP + 4024.24',
                    Lv12: '35.2% Max HP + 4334.9',
                    Lv13: '37.4% Max HP + 4659.69',
                    Lv14: '39.6% Max HP + 4998.59',
                    Lv15: '41.8% Max HP + 5351.62',
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
            name: 'With My Whole Heart\u266a',
            image: 'https://genshin.honeyhunterworld.com/img/p_142301.webp',
            description:
                'When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.',
        },
        {
            name: 'Glorious Season',
            image: 'https://genshin.honeyhunterworld.com/img/p_142101.webp',
            description:
                "The Stamina Consumption of characters within\nLet the Show Begin\u266a\n's Melody Loop is reduced by 12%.",
        },
        {
            name: 'Encore',
            image: 'https://genshin.honeyhunterworld.com/img/p_142201.webp',
            description:
                'When your active character gains an Elemental Orb/Particle, the duration of the Melody Loop of\nLet the Show Begin\u266a\nis extended by 1s.\nThe maximum extension is 5s.',
        },
    ],
    constellations: [
        {
            name: 'Gleeful Songs',
            image: 'https://genshin.honeyhunterworld.com/img/c_141.webp',
            description: 'Barbara regenerates 1 Energy every 10s.',
            level: 1,
        },
        {
            name: 'Vitality Burst',
            image: 'https://genshin.honeyhunterworld.com/img/c_142.webp',
            description:
                "Decreases the CD of\nLet the Show Begin\u266a\nby 15%.\nDuring the ability's duration, your active character gains a 15%\nHydro DMG Bonus\n.",
            level: 2,
        },
        {
            name: 'Star of Tomorrow',
            image: 'https://genshin.honeyhunterworld.com/img/c_143.webp',
            description:
                'Increases the Level of\nShining Miracle\u266a\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Attentiveness Be My Power',
            image: 'https://genshin.honeyhunterworld.com/img/c_144.webp',
            description:
                'Every opponent Barbara hits with her Charged Attack regenerates 1 Energy for her.\nA maximum of 5 energy can be regenerated in this manner with any one Charged Attack.',
            level: 4,
        },
        {
            name: 'The Purest Companionship',
            image: 'https://genshin.honeyhunterworld.com/img/c_145.webp',
            description:
                'Increases the Level of\nLet the Show Begin\u266a\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Dedicating Everything to You',
            image: 'https://genshin.honeyhunterworld.com/img/c_146.webp',
            description:
                "When Barbara is in the party but not on the field, and one of your own party members falls:\n\u00b7Automatically revives the fallen character.\n\u00b7Fully restores the revived character's HP to 100%.\nThis effect can only occur once every 15 mins.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Barbara