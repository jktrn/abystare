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

const Eula: Character = {
    name: 'Eula',
    icon: '/images/characters/eula.png',
    weapon: 'Claymore',
    vision: 'Cryo',
    rarity: 5,
    description:
        'The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.',
    occupation: 'Knights of Favonius',
    baseStats: {
        '1/20': {
            'Base HP': 1030.0,
            'Base ATK': 26.63,
            'Base DEF': 58.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/20': {
            'Base HP': 2671.0,
            'Base ATK': 69.07,
            'Base DEF': 151.63,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '20/40': {
            'Base HP': 3554.0,
            'Base ATK': 91.9,
            'Base DEF': 201.75,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/40': {
            'Base HP': 5317.0,
            'Base ATK': 137.51,
            'Base DEF': 301.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.0,
        },
        '40/50': {
            'Base HP': 5944.0,
            'Base ATK': 153.73,
            'Base DEF': 337.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/50': {
            'Base HP': 6839.0,
            'Base ATK': 176.87,
            'Base DEF': 388.29,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.096,
        },
        '50/60': {
            'Base HP': 7675.0,
            'Base ATK': 198.49,
            'Base DEF': 435.77,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/60': {
            'Base HP': 8579.0,
            'Base ATK': 221.87,
            'Base DEF': 487.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '60/70': {
            'Base HP': 9207.0,
            'Base ATK': 238.09,
            'Base DEF': 522.71,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/70': {
            'Base HP': 10119.0,
            'Base ATK': 261.68,
            'Base DEF': 574.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.192,
        },
        '70/80': {
            'Base HP': 10746.0,
            'Base ATK': 277.9,
            'Base DEF': 610.11,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/80': {
            'Base HP': 11669.0,
            'Base ATK': 301.76,
            'Base DEF': 662.48,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.288,
        },
        '80/90': {
            'Base HP': 12296.0,
            'Base ATK': 317.98,
            'Base DEF': 698.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
        '90/90': {
            'Base HP': 13226.0,
            'Base ATK': 342.03,
            'Base DEF': 750.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT DMG': 0.384,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Favonius Bladework - Edel',
            image: 'https://genshin.honeyhunterworld.com/img/s_513101.webp',
            description:
                'Normal Attack\nPerforms up to 5 consecutive strikes.\nCharged Attack\nDrains Stamina over time to perform continuous slashes.\nAt the end of the sequence, performs a more powerful slash.\nPlunging Attack\nPlunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '89.73%',
                    Lv2: '97.04%',
                    Lv3: '104.34%',
                    Lv4: '114.77%',
                    Lv5: '122.08%',
                    Lv6: '130.43%',
                    Lv7: '141.9%',
                    Lv8: '153.38%',
                    Lv9: '164.86%',
                    Lv10: '177.38%',
                    Lv11: '191.72%',
                    Lv12: '208.6%',
                    Lv13: '225.47%',
                    Lv14: '242.34%',
                    Lv15: '260.75%',
                },
                '2-Hit DMG': {
                    Lv1: '93.55%',
                    Lv2: '101.17%',
                    Lv3: '108.78%',
                    Lv4: '119.66%',
                    Lv5: '127.27%',
                    Lv6: '135.98%',
                    Lv7: '147.94%',
                    Lv8: '159.91%',
                    Lv9: '171.87%',
                    Lv10: '184.93%',
                    Lv11: '199.88%',
                    Lv12: '217.47%',
                    Lv13: '235.06%',
                    Lv14: '252.65%',
                    Lv15: '271.84%',
                },
                '3-Hit DMG': {
                    Lv1: '113.60%',
                    Lv2: '122.84%',
                    Lv3: '132.08%',
                    Lv4: '145.30%',
                    Lv5: '154.54%',
                    Lv6: '165.12%',
                    Lv7: '179.64%',
                    Lv8: '194.18%',
                    Lv9: '208.70%',
                    Lv10: '224.56%',
                    Lv11: '242.72%',
                    Lv12: '264.08%',
                    Lv13: '285.44%',
                    Lv14: '306.80%',
                    Lv15: '330.10%',
                },
                '4-Hit DMG': {
                    Lv1: '112.64%',
                    Lv2: '121.81%',
                    Lv3: '130.98%',
                    Lv4: '144.08%',
                    Lv5: '153.25%',
                    Lv6: '163.72%',
                    Lv7: '178.13%',
                    Lv8: '192.54%',
                    Lv9: '206.95%',
                    Lv10: '222.67%',
                    Lv11: '240.68%',
                    Lv12: '261.86%',
                    Lv13: '283.03%',
                    Lv14: '304.21%',
                    Lv15: '327.32%',
                },
                '5-Hit DMG': {
                    Lv1: '143.66%',
                    Lv2: '155.36%',
                    Lv3: '167.06%',
                    Lv4: '183.76%',
                    Lv5: '195.46%',
                    Lv6: '208.82%',
                    Lv7: '227.20%',
                    Lv8: '245.58%',
                    Lv9: '263.94%',
                    Lv10: '284.00%',
                    Lv11: '306.96%',
                    Lv12: '333.98%',
                    Lv13: '360.98%',
                    Lv14: '388.00%',
                    Lv15: '417.48%',
                },
                'Charged Attack Spinning DMG': {
                    Lv1: '68.8%',
                    Lv2: '74.4%',
                    Lv3: '80%',
                    Lv4: '88%',
                    Lv5: '93.6%',
                    Lv6: '100%',
                    Lv7: '108.8%',
                    Lv8: '117.6%',
                    Lv9: '126.4%',
                    Lv10: '136%',
                    Lv11: '147%',
                    Lv12: '159.94%',
                    Lv13: '172.87%',
                    Lv14: '185.81%',
                    Lv15: '199.92%',
                },
                'Charged Attack Final DMG': {
                    Lv1: '124.4%',
                    Lv2: '134.52%',
                    Lv3: '144.65%',
                    Lv4: '159.12%',
                    Lv5: '169.24%',
                    Lv6: '180.81%',
                    Lv7: '196.72%',
                    Lv8: '212.64%',
                    Lv9: '228.55%',
                    Lv10: '245.9%',
                    Lv11: '265.79%',
                    Lv12: '289.18%',
                    Lv13: '312.57%',
                    Lv14: '335.96%',
                    Lv15: '361.48%',
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
                    Lv11: '159.37%',
                    Lv12: '173.39%',
                    Lv13: '187.41%',
                    Lv14: '201.44%',
                    Lv15: '216.74%',
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
                    Lv11: '318.67%',
                    Lv12: '346.71%',
                    Lv13: '374.75%',
                    Lv14: '402.79%',
                    Lv15: '433.38%',
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
                    Lv11: '398.03%',
                    Lv12: '433.06%',
                    Lv13: '468.08%',
                    Lv14: '503.11%',
                    Lv15: '541.32%',
                },
            },
        },
        {
            name: 'Icetide Vortex',
            image: 'https://genshin.honeyhunterworld.com/img/s_513201.webp',
            description:
                'Sharp frost, swift blade.\nPress\nSlashes swiftly, dealing\nCryo DMG\n.\nWhen it hits an opponent, Eula gains a stack of Grimheart that stacks up to 2 times. These stacks can only be gained once every 0.3s.\nGrimheart\nIncreases Eula\'s resistance to interruption and DEF.\nHold\nWielding her sword, Eula consumes all the stacks of Grimheart and lashes forward, dealing\nAoE Cryo DMG\nto opponents in front of her.\nIf Grimheart stacks are consumed, surrounding opponents will have their Physical RES and\nCryo RES\ndecreased.\nEach consumed stack of Grimheart will be converted into an Icewhirl Brand that deals\nCryo DMG\nto nearby opponents.\n"So the waves roiled, swallowing the crown of the nobles. And ever after did each drop amidst the icy waves reflect a golden crown, each and every droplet of the spray shining with its light."',
            data: {
                'Press DMG': {
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
                'Hold DMG': {
                    Lv1: '245.6%',
                    Lv2: '264.02%',
                    Lv3: '282.44%',
                    Lv4: '307%',
                    Lv5: '325.42%',
                    Lv6: '343.84%',
                    Lv7: '368.4%',
                    Lv8: '392.96%',
                    Lv9: '417.52%',
                    Lv10: '442.08%',
                    Lv11: '466.64%',
                    Lv12: '491.2%',
                    Lv13: '521.9%',
                    Lv14: '552.6%',
                    Lv15: '583.3%',
                },
                'Icewhirl Brand DMG': {
                    Lv1: '96%',
                    Lv2: '103.2%',
                    Lv3: '110.4%',
                    Lv4: '120%',
                    Lv5: '127.2%',
                    Lv6: '134.4%',
                    Lv7: '144%',
                    Lv8: '153.6%',
                    Lv9: '163.2%',
                    Lv10: '172.8%',
                    Lv11: '182.4%',
                    Lv12: '192%',
                    Lv13: '204%',
                    Lv14: '216%',
                    Lv15: '228%',
                },
                'DEF Bonus': {
                    Lv1: '30% Per Stack',
                    Lv2: '30% Per Stack',
                    Lv3: '30% Per Stack',
                    Lv4: '30% Per Stack',
                    Lv5: '30% Per Stack',
                    Lv6: '30% Per Stack',
                    Lv7: '30% Per Stack',
                    Lv8: '30% Per Stack',
                    Lv9: '30% Per Stack',
                    Lv10: '30% Per Stack',
                    Lv11: '30% Per Stack',
                    Lv12: '30% Per Stack',
                    Lv13: '30% Per Stack',
                    Lv14: '30% Per Stack',
                    Lv15: '30% Per Stack',
                },
                'Grimheart Duration': {
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
                'Physical RES Decrease': {
                    Lv1: '16%',
                    Lv2: '17%',
                    Lv3: '18%',
                    Lv4: '19%',
                    Lv5: '20%',
                    Lv6: '21%',
                    Lv7: '22%',
                    Lv8: '23%',
                    Lv9: '24%',
                    Lv10: '25%',
                    Lv11: '25%',
                    Lv12: '25%',
                    Lv13: '25%',
                    Lv14: '25%',
                    Lv15: '25%',
                },
                'Cryo RES Decrease': {
                    Lv1: '16%',
                    Lv2: '17%',
                    Lv3: '18%',
                    Lv4: '19%',
                    Lv5: '20%',
                    Lv6: '21%',
                    Lv7: '22%',
                    Lv8: '23%',
                    Lv9: '24%',
                    Lv10: '25%',
                    Lv11: '25%',
                    Lv12: '25%',
                    Lv13: '25%',
                    Lv14: '25%',
                    Lv15: '25%',
                },
                'RES Decrease Duration': {
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
                'Press CD': {
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
                'Hold CD': {
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
            name: 'Glacial Illumination',
            image: 'https://genshin.honeyhunterworld.com/img/s_513901.webp',
            description:
                "Brandishes her greatsword, dealing\nCryo DMG\nto nearby opponents and creating a Lightfall Sword that follows her around for a duration of up to 7s.\nWhile present, the Lightfall Sword increases Eula's resistance to interruption. When Eula's own Normal Attack, Elemental Skill, and Elemental Burst deal DMG to opponents, they will charge the Lightfall Sword, which can gain an energy stack once every 0.1s.\nOnce its duration ends, the Lightfall Sword will descend and explode violently, dealing Physical DMG to nearby opponents.\nThis DMG scales on the number of energy stacks the Lightfall Sword has accumulated.\nIf Eula leaves the field, the Lightfall Sword will explode immediately.\nIt is easy to sink. But even so, she desires to freeze this oncoming tide.",
            data: {
                'Skill DMG': {
                    Lv1: '245.6%',
                    Lv2: '264.02%',
                    Lv3: '282.44%',
                    Lv4: '307%',
                    Lv5: '325.42%',
                    Lv6: '343.84%',
                    Lv7: '368.4%',
                    Lv8: '392.96%',
                    Lv9: '417.52%',
                    Lv10: '442.08%',
                    Lv11: '466.64%',
                    Lv12: '491.2%',
                    Lv13: '521.9%',
                    Lv14: '552.6%',
                    Lv15: '583.3%',
                },
                'Lightfall Sword Base DMG': {
                    Lv1: '367.05%',
                    Lv2: '396.92%',
                    Lv3: '426.8%',
                    Lv4: '469.48%',
                    Lv5: '499.36%',
                    Lv6: '533.5%',
                    Lv7: '580.45%',
                    Lv8: '627.4%',
                    Lv9: '674.34%',
                    Lv10: '725.56%',
                    Lv11: '784.25%',
                    Lv12: '853.26%',
                    Lv13: '922.27%',
                    Lv14: '991.29%',
                    Lv15: '1066.57%',
                },
                'DMG Per Stack': {
                    Lv1: '74.99%',
                    Lv2: '81.1%',
                    Lv3: '87.2%',
                    Lv4: '95.92%',
                    Lv5: '102.02%',
                    Lv6: '109%',
                    Lv7: '118.59%',
                    Lv8: '128.18%',
                    Lv9: '137.78%',
                    Lv10: '148.24%',
                    Lv11: '160.23%',
                    Lv12: '174.33%',
                    Lv13: '188.43%',
                    Lv14: '202.53%',
                    Lv15: '217.91%',
                },
                'Maximum Stacks': {
                    Lv1: '30',
                    Lv2: '30',
                    Lv3: '30',
                    Lv4: '30',
                    Lv5: '30',
                    Lv6: '30',
                    Lv7: '30',
                    Lv8: '30',
                    Lv9: '30',
                    Lv10: '30',
                    Lv11: '30',
                    Lv12: '30',
                    Lv13: '30',
                    Lv14: '30',
                    Lv15: '30',
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
            name: 'Aristocratic Introspection',
            image: 'https://genshin.honeyhunterworld.com/img/p_512301.webp',
            description:
                'When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.',
        },
        {
            name: 'Roiling Rime',
            image: 'https://genshin.honeyhunterworld.com/img/p_512101.webp',
            description:
                'If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of\nIcetide Vortex\n, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by\nGlacial Illumination\n.',
        },
        {
            name: 'Wellspring of War-Lust',
            image: 'https://genshin.honeyhunterworld.com/img/p_512201.webp',
            description:
                'When\nGlacial Illumination\nis cast, the CD of\nIcetide Vortex\nis reset and Eula gains 1 stack of Grimheart.',
        },
    ],
    constellations: [
        {
            name: 'Tidal Illusion',
            image: 'https://genshin.honeyhunterworld.com/img/c_511.webp',
            description:
                "Every time\nIcetide Vortex\n's Grimheart stacks are consumed, Eula's Physical DMG is increased by 30% for 6s.\nEach stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.",
            level: 1,
        },
        {
            name: 'Lady of Seafoam',
            image: 'https://genshin.honeyhunterworld.com/img/c_512.webp',
            description:
                "Decreases the CD of\nIcetide Vortex\n's Holding Mode, rendering it identical to Press CD.",
            level: 2,
        },
        {
            name: 'Lawrence Pedigree',
            image: 'https://genshin.honeyhunterworld.com/img/c_513.webp',
            description:
                'Increases the Level of\nGlacial Illumination\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: "The Obstinacy of One's Inferiors",
            image: 'https://genshin.honeyhunterworld.com/img/c_514.webp',
            description:
                'Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP.',
            level: 4,
        },
        {
            name: 'Chivalric Quality',
            image: 'https://genshin.honeyhunterworld.com/img/c_515.webp',
            description:
                'Increases the Level of\nIcetide Vortex\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Noble Obligation',
            image: 'https://genshin.honeyhunterworld.com/img/c_516.webp',
            description:
                'Lightfall Swords created by\nGlacial Illumination\nstart with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the Lightfall Sword an additional stack of energy.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Eula
