'use client'

import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import {
    ActiveSkillsSelect,
    AttributesTable,
    CharacterBonuses,
    CharacterImage,
    CharacterModal,
    ConstellationPopover,
    CustomSelect,
    ModeToggle,
    ResultsTable,
} from '@/components'

import { abilityScalings, characterBonuses, characterData } from '@/data'
import { Bonus, Character } from '@/types/Character'

import {
    calculateDamage,
    convertBaseStats,
    displayStats,
    getConstellationOptions,
    getLevelOptions,
    handleConstellationChange,
    handleLevelChange,
    useActiveConstellations,
    useBaseStats,
} from '@/utils'

export default function Home() {
    const defaultCharacter = characterData['Hu Tao']
    const [character, setCharacter] = useState<Character>(defaultCharacter)

    const [level, setLevel] = useState<string>('90/90')
    const levelOptions = getLevelOptions(character)

    const [constellation, setConstellation] = useState<number>(0)
    const constellationOptions = getConstellationOptions(character)

    const [activeConstellations, setActiveConstellations] = useState<Bonus[]>([])

    const defaultActiveBonuses = characterBonuses[character.name].filter(
        (bonus) => bonus.enabled
    )
    const [activeBonuses, setActiveBonuses] = useState<Bonus[]>(defaultActiveBonuses)
    const [activeSkills, setActiveSkills] = useState<string[]>([
        'Lv10',
        'Lv10',
        'Lv10',
    ])

    const characters = Object.values(characterData) as Character[]
    const initialBaseStats = convertBaseStats(character.baseStats[level])
    const { isOpen, onOpen, onClose } = useDisclosure()

    useActiveConstellations(character.name, constellation, setActiveConstellations)

    const { baseStats, updatedActiveSkills } = useBaseStats(
        character,
        level,
        activeSkills,
        activeBonuses,
        activeConstellations
    )

    // Temporary enemy resistances (will be replaced with a form)
    const enemyResistances = {
        defenseMultiplier: 50,
        resistance: 90,
    }

    const damageResults = calculateDamage(
        baseStats,
        abilityScalings,
        character,
        constellation,
        updatedActiveSkills,
        enemyResistances,
        activeBonuses
    )

    return (
        <div className="flex h-screen flex-col p-2 lg:flex-row lg:overflow-y-hidden">
            <ModeToggle />
            <div className="m-2 flex-1 rounded-lg lg:min-w-max lg:max-w-max lg:overflow-auto">
                <div className="flex flex-col border rounded-lg">
                    <h2 className="rounded-t-lg border-b px-4 py-3 text-lg font-bold bg-secondary/25">
                        Character
                    </h2>
                    <div className="p-4">
                        <div className="flex flex-col justify-between md:flex-row">
                            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal">
                                <form className="flex justify-center md:justify-normal">
                                    <CharacterImage
                                        icon={character.icon}
                                        rarity={character.rarity}
                                        element={character.vision}
                                        onClick={onOpen}
                                    />
                                    <CharacterModal
                                        isOpen={isOpen}
                                        onClose={onClose}
                                        characters={characters}
                                        setCharacter={setCharacter}
                                        setActiveBonuses={setActiveBonuses}
                                    />
                                </form>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col">
                                        <span className="flex justify-center text-xl font-bold md:justify-normal">
                                            {character.name}
                                        </span>
                                        <span className="text-md text-muted-foreground flex justify-center md:justify-normal">
                                            {'★'.repeat(character.rarity)}
                                        </span>
                                    </div>
                                    <div className="ml-auto mr-auto flex max-w-max flex-col items-center gap-2 md:items-start">
                                        <div className="flex items-center gap-2">
                                            Ascension:
                                            <CustomSelect
                                                options={levelOptions}
                                                value={level}
                                                onChange={handleLevelChange(
                                                    setLevel
                                                )}
                                                instanceId="ascension"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2 md:hidden">
                                            Constellation:
                                            <CustomSelect
                                                options={constellationOptions}
                                                value={constellation.toString()}
                                                onChange={handleConstellationChange(
                                                    setConstellation
                                                )}
                                                instanceId="ascension"
                                            />
                                        </div>
                                        <div className="hidden md:flex md:w-full md:items-center">
                                            Constellation:
                                            <ConstellationPopover
                                                characterName={character.name}
                                                constellation={constellation}
                                                setConstellation={setConstellation}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ActiveSkillsSelect
                                character={character}
                                activeSkills={updatedActiveSkills}
                                setActiveSkills={setActiveSkills}
                            />
                        </div>
                        <CharacterBonuses
                            character={character}
                            activeBonuses={activeBonuses}
                            setActiveBonuses={setActiveBonuses}
                            constellation={constellation}
                        />
                    </div>

                    <h2 className="px-4 py-3 border-y text-lg font-bold bg-secondary/25">
                        Attributes
                    </h2>
                    <AttributesTable
                        baseStats={baseStats}
                        displayStats={displayStats}
                        initialBaseStats={initialBaseStats}
                    />
                </div>
            </div>

            <div className="m-2 flex-1 border rounded-lg">
                <h2 className="rounded-t-lg border-b px-4 py-3 text-lg font-bold bg-secondary/25">
                    Weapon
                </h2>
                <div className="p-4">Weapon</div>

                <h2 className="border-y px-4 py-3 text-lg font-bold bg-secondary/25">
                    Artifacts
                </h2>

                <div className="p-4">Artifacts</div>

                <h2 className="border-y px-4 py-3 text-lg font-bold bg-secondary/25">
                    Party Buffs
                </h2>
                <div className="p-4">Party Buffs</div>
            </div>

            <div className="m-2 flex-1 rounded-lg">
                <div className="flex h-full flex-col rounded-lg border">
                    <h2 className="rounded-t-lg border-b px-4 py-3 text-lg font-bold bg-secondary/25">
                        Results
                    </h2>
                    <div className="overflow-auto">
                        <ResultsTable damageResults={damageResults} />
                    </div>
                </div>
            </div>
        </div>
    )
}
