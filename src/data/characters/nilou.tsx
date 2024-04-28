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

const Nilou: Character = {
    name: 'Nilou',
    icon: 'https://api.ambr.top/assets/UI/UI_AvatarIcon_Nilou.png',
    weapon: 'Sword',
    vision: 'Hydro',
    rarity: 5,
    description:
        'The star of the Zubayr Theater. She is full of warmth and innocence, and her dances are lively and elegant.',
    occupation: 'Zubayr Theater',
    baseStats: {
        '1/20': {
            'Base HP': 1182.0,
            'Base ATK': 17.88,
            'Base DEF': 56.72,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 3066.0,
            'Base ATK': 46.37,
            'Base DEF': 147.13,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 4080.0,
            'Base ATK': 61.69,
            'Base DEF': 195.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 6105.0,
            'Base ATK': 92.31,
            'Base DEF': 292.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 6825.0,
            'Base ATK': 103.2,
            'Base DEF': 327.48,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.072,
        },
        '50/50': {
            'Base HP': 7852.0,
            'Base ATK': 118.74,
            'Base DEF': 376.76,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.072,
        },
        '50/60': {
            'Base HP': 8813.0,
            'Base ATK': 133.25,
            'Base DEF': 422.84,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.144,
        },
        '60/60': {
            'Base HP': 9850.0,
            'Base ATK': 148.95,
            'Base DEF': 472.64,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.144,
        },
        '60/70': {
            'Base HP': 10571.0,
            'Base ATK': 159.84,
            'Base DEF': 507.19,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.144,
        },
        '70/70': {
            'Base HP': 11618.0,
            'Base ATK': 175.68,
            'Base DEF': 557.44,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.144,
        },
        '70/80': {
            'Base HP': 12338.0,
            'Base ATK': 186.56,
            'Base DEF': 592.0,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.216,
        },
        '80/80': {
            'Base HP': 13397.0,
            'Base ATK': 202.58,
            'Base DEF': 642.82,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.216,
        },
        '80/90': {
            'Base HP': 14117.0,
            'Base ATK': 213.47,
            'Base DEF': 677.37,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.288,
        },
        '90/90': {
            'Base HP': 15185.0,
            'Base ATK': 229.61,
            'Base DEF': 728.59,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.288,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Dance of Samser',
            image: 'https://api.ambr.top/assets/UI/Skill_A_01.png',
            description:
                'Normal Attack\nPerforms up to 3 consecutive sword strikes.\nCharged Attack\nConsumes a certain amount of Stamina to perform a twirling slash.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '50.31%',
                    Lv2: '54.4%',
                    Lv3: '58.5%',
                    Lv4: '64.35%',
                    Lv5: '68.44%',
                    Lv6: '73.12%',
                    Lv7: '79.56%',
                    Lv8: '85.99%',
                    Lv9: '92.43%',
                    Lv10: '99.44%',
                    Lv11: '106.46%',
                    Lv12: '113.48%',
                    Lv13: '120.5%',
                    Lv14: '127.52%',
                    Lv15: '134.54%',
                },
                '2-Hit DMG': {
                    Lv1: '45.44%',
                    Lv2: '49.14%',
                    Lv3: '52.84%',
                    Lv4: '58.12%',
                    Lv5: '61.82%',
                    Lv6: '66.05%',
                    Lv7: '71.86%',
                    Lv8: '77.67%',
                    Lv9: '83.48%',
                    Lv10: '89.82%',
                    Lv11: '96.16%',
                    Lv12: '102.5%',
                    Lv13: '108.84%',
                    Lv14: '115.18%',
                    Lv15: '121.52%',
                },
                '3-Hit DMG': {
                    Lv1: '70.35%',
                    Lv2: '76.08%',
                    Lv3: '81.81%',
                    Lv4: '89.99%',
                    Lv5: '95.71%',
                    Lv6: '102.26%',
                    Lv7: '111.26%',
                    Lv8: '120.26%',
                    Lv9: '129.26%',
                    Lv10: '139.07%',
                    Lv11: '148.89%',
                    Lv12: '158.71%',
                    Lv13: '168.52%',
                    Lv14: '178.34%',
                    Lv15: '188.16%',
                },
                'Charged Attack DMG': {
                    Lv1: '104.66%',
                    Lv2: '113.18%',
                    Lv3: '121.70%',
                    Lv4: '133.87%',
                    Lv5: '142.39%',
                    Lv6: '152.13%',
                    Lv7: '165.51%',
                    Lv8: '178.90%',
                    Lv9: '192.28%',
                    Lv10: '206.89%',
                    Lv11: '221.50%',
                    Lv12: '236.10%',
                    Lv13: '250.70%',
                    Lv14: '265.30%',
                    Lv15: '279.91%',
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
            name: 'Dance of Haftkarsvar',
            image: 'https://api.ambr.top/assets/UI/Skill_S_Nilou_01.png',
            description:
                "Enters the Pirouette state, dealing\nHydro DMG\nto nearby opponents based on Nilou's Max HP.\nWhile she is in the Pirouette state, Nilou's Normal Attacks and Elemental Skill will cause her to enter the Sword Dance and Whirling Steps stances respectively, causing DMG she deals to be converted to\nHydro DMG\nthat cannot be overridden and that is considered Elemental Skill DMG.\nIn these stances, Nilou's third dance step will end Pirouette, and has the following effects based on the type of said dance step:\n\u00b7Sword Dance: unleashes a Luminous Illusion that deals\nHydro DMG\nto opponents it touches and grants Nilou the Lunar Prayer effect. This effect converts Nilou's Normal Attacks into Sword Dance techniques, and her final hit will unleash a Luminous Illusion.\n\u00b7Whirling Steps: Nilou unleashes a Whirling Water Wheel that deals\nAoE Hydro DMG\nand creates a Tranquility Aura that follows your active character around and applies\nWet\nto opponents within its AoE.\nNilou is unable to perform Charged Attacks when under the effect of Pirouette or Lunar Prayer. These effects will be removed once she leaves the field.\n\"Daintily her toes touch the water's face, and the light that ripples forth equals even the seven heavens.\"",
            data: {
                'Skill DMG': {
                    Lv1: '3.34% Max HP',
                    Lv2: '3.59% Max HP',
                    Lv3: '3.84% Max HP',
                    Lv4: '4.17% Max HP',
                    Lv5: '4.42% Max HP',
                    Lv6: '4.67% Max HP',
                    Lv7: '5.01% Max HP',
                    Lv8: '5.34% Max HP',
                    Lv9: '5.68% Max HP',
                    Lv10: '6.01% Max HP',
                    Lv11: '6.34% Max HP',
                    Lv12: '6.68% Max HP',
                    Lv13: '7.1% Max HP',
                    Lv14: '7.51% Max HP',
                    Lv15: '7.93% Max HP',
                },
                'Sword Dance/Whirling Steps 1-Hit DMG': {
                    Lv1: '4.55% / 3.26% Max HP',
                    Lv2: '4.89% / 3.51% Max HP',
                    Lv3: '5.24% / 3.75% Max HP',
                    Lv4: '5.69% / 4.08% Max HP',
                    Lv5: '6.03% / 4.32% Max HP',
                    Lv6: '6.37% / 4.57% Max HP',
                    Lv7: '6.83% / 4.89% Max HP',
                    Lv8: '7.28% / 5.22% Max HP',
                    Lv9: '7.74% / 5.55% Max HP',
                    Lv10: '8.19% / 5.87% Max HP',
                    Lv11: '8.65% / 6.2% Max HP',
                    Lv12: '9.11% / 6.52% Max HP',
                    Lv13: '9.67% / 6.93% Max HP',
                    Lv14: '10.24% / 7.34% Max HP',
                    Lv15: '10.81% / 7.75% Max HP',
                },
                'Sword Dance/Whirling Steps 2-Hit DMG': {
                    Lv1: '5.14% / 3.96% Max HP',
                    Lv2: '5.53% / 4.26% Max HP',
                    Lv3: '5.92% / 4.55% Max HP',
                    Lv4: '6.43% / 4.95% Max HP',
                    Lv5: '6.82% / 5.25% Max HP',
                    Lv6: '7.2% / 5.54% Max HP',
                    Lv7: '7.72% / 5.94% Max HP',
                    Lv8: '8.23% / 6.34% Max HP',
                    Lv9: '8.75% / 6.73% Max HP',
                    Lv10: '9.26% / 7.13% Max HP',
                    Lv11: '9.77% / 7.52% Max HP',
                    Lv12: '10.29% / 7.92% Max HP',
                    Lv13: '10.93% / 8.42% Max HP',
                    Lv14: '11.58% / 8.91% Max HP',
                    Lv15: '12.22% / 9.41% Max HP',
                },
                'Luminous Illusion/Water Wheel DMG': {
                    Lv1: '7.17% / 5.06% Max HP',
                    Lv2: '7.71% / 5.44% Max HP',
                    Lv3: '8.24% / 5.82% Max HP',
                    Lv4: '8.96% / 6.33% Max HP',
                    Lv5: '9.5% / 6.71% Max HP',
                    Lv6: '10.04% / 7.09% Max HP',
                    Lv7: '10.75% / 7.59% Max HP',
                    Lv8: '11.47% / 8.1% Max HP',
                    Lv9: '12.19% / 8.6% Max HP',
                    Lv10: '12.9% / 9.11% Max HP',
                    Lv11: '13.62% / 9.62% Max HP',
                    Lv12: '14.34% / 10.12% Max HP',
                    Lv13: '15.23% / 10.76% Max HP',
                    Lv14: '16.13% / 11.39% Max HP',
                    Lv15: '17.03% / 12.02% Max HP',
                },
                'Pirouette Duration': {
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
                'Lunar Prayer Duration': {
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
                'Tranquility Aura Duration': {
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
            },
        },
        {
            name: 'Dance of Abzendegi: Distant Dreams, Listening Spring',
            image: 'https://api.ambr.top/assets/UI/Skill_E_Nilou_01.png',
            description:
                'Begins the dance of faraway dreams and springs that hear, causing a Lotus of Distant Waters to bloom, dealing\nAoE Hydro DMG\nbased on Nilou\'s Max HP and applying the Lingering Aeon effect to all opponents hit.\nAfter an interval, opponents affected by Lingering Aeon will take\nHydro DMG\n.\n"We have never witnessed that distant dream, but this dance can bring it to life."',
            data: {
                'Skill DMG': {
                    Lv1: '18.43% Max HP',
                    Lv2: '19.81% Max HP',
                    Lv3: '21.2% Max HP',
                    Lv4: '23.04% Max HP',
                    Lv5: '24.42% Max HP',
                    Lv6: '25.8% Max HP',
                    Lv7: '27.65% Max HP',
                    Lv8: '29.49% Max HP',
                    Lv9: '31.33% Max HP',
                    Lv10: '33.18% Max HP',
                    Lv11: '35.02% Max HP',
                    Lv12: '36.86% Max HP',
                    Lv13: '39.17% Max HP',
                    Lv14: '41.47% Max HP',
                    Lv15: '43.78% Max HP',
                },
                'Lingering Aeon DMG': {
                    Lv1: '22.53% Max HP',
                    Lv2: '24.22% Max HP',
                    Lv3: '25.91% Max HP',
                    Lv4: '28.16% Max HP',
                    Lv5: '29.85% Max HP',
                    Lv6: '31.54% Max HP',
                    Lv7: '33.79% Max HP',
                    Lv8: '36.04% Max HP',
                    Lv9: '38.3% Max HP',
                    Lv10: '40.55% Max HP',
                    Lv11: '42.8% Max HP',
                    Lv12: '45.06% Max HP',
                    Lv13: '47.87% Max HP',
                    Lv14: '50.69% Max HP',
                    Lv15: '53.5% Max HP',
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
            name: 'White Jade Lotus',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Yunjin_07.png',
            description:
                'When Perfect Cooking is achieved on Food with Adventure-related effects, there is a 12% chance to obtain double the product.',
        },
        {
            name: 'Court of Dancing Petals',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_05.png',
            description:
                "When all characters in the party are all\nDendro\nor\nHydro\n, and there are at least one Dendro character and one Hydro character:\nThe completion of the third dance step of Nilou's\nDance of Haftkarsvar\nwill grant all nearby characters the Golden Chalice's Bounty for 30s.\nCharacters under the effect of Golden Chalice's Bounty will increase the Elemental Mastery of all nearby characters by 100 for 10s whenever they are hit by\nDendro attacks\n. Also, triggering the Bloom reaction will create Bountiful Cores instead of Dendro Cores.\nSuch Cores will burst very quickly after being created, and they have larger AoEs.\nBountiful Cores cannot trigger Hyperbloom or Burgeon, and they share an upper numerical limit with Dendro Cores. Bountiful Core DMG is considered DMG dealt by Dendro Cores produced by Bloom.\nShould the party not meet the conditions for this Passive Talent, any existing Golden Chalice's Bounty effects will be canceled.",
        },
        {
            name: 'Dreamy Dance of Aeons',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_06.png',
            description:
                "Every 1,000 points of Nilou's Max HP above 30,000 will cause the DMG dealt by Bountiful Cores created by characters affected by Golden Chalice's Bounty to increase by 9%.\nThe maximum increase in Bountiful Core DMG that can be achieved this way is 400%.",
        },
    ],
    constellations: [
        {
            name: 'Dance of the Waning Moon',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_01.png',
            description:
                "Dance of Haftkarsvar\nwill be enhanced as follows:\n\u00b7Luminous Illusion DMG is increased by 65%.\n\u00b7The Tranquility Aura's duration is extended by 6s.",
            level: 1,
        },
        {
            name: 'The Starry Skies Their Flowers Rain',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_02.png',
            description:
                'After characters affected by the Golden Chalice\'s Bounty deal\nHydro DMG\nto an opponent, that opponent\'s\nHydro RES\nwill be decreased by 35% for 10s. After a triggered Bloom reaction deals DMG to opponents, their\nDendro RES\nwill be decreased by 35% for 10s.\nYou need to have unlocked the "Court of Dancing Petals" Talent.',
            level: 2,
        },
        {
            name: 'Beguiling Shadowstep',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Nilou_01.png',
            description:
                'Increases the Level of\nDance of Abzendegi: Distant Dreams, Listening Spring\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Fricative Pulse',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_03.png',
            description:
                "After the third dance step of\nDance of Haftkarsvar\n's Pirouette hits opponents, Nilou will gain 15 Elemental Energy, and DMG from her\nDance of Abzendegi: Distant Dreams, Listening Spring\nwill be increased by 50% for 8s.",
            level: 4,
        },
        {
            name: 'Twirling Light',
            image: 'https://api.ambr.top/assets/UI/UI_Talent_U_Nilou_02.png',
            description:
                'Increases the Level of\nDance of Haftkarsvar\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: "Frostbreaker's Melody",
            image: 'https://api.ambr.top/assets/UI/UI_Talent_S_Nilou_04.png',
            description:
                "For every 1,000 points of Max HP, Nilou's CRIT Rate and CRIT DMG will increase by 0.6% and 1.2% respectively.\nThe maximum increase in CRIT Rate and CRIT DMG via this method is 30% and 60% respectively.",
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Nilou
