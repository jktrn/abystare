import React, { useState } from 'react'
import { Bonus, Character } from '@/interfaces/Character'
import Image from 'next/image'
import Switch from 'react-switch'
import CustomSelect from './CustomSelect'
import { elementColors } from '@/lib'

interface CharacterBonusToggleProps {
    character: Character
    bonus: Bonus
    onToggle: (bonus: Bonus, currentStacks: number) => void
    constellation: number
}

const CharacterBonusToggle = ({
    character,
    bonus,
    onToggle,
    constellation,
}: CharacterBonusToggleProps) => {
    const [currentStacks, setCurrentStacks] = useState(bonus.enabled ? 1 : 0)
    const isDisabled = Boolean(
        bonus.minConstellation && bonus.minConstellation > constellation
    )

    const handleStackChange = (newStacks: number) => {
        setCurrentStacks(newStacks)
        onToggle(bonus, newStacks)
    }

    return (
        <div
            className={`flex flex-col items-center justify-between rounded-md bg-secondary/25 p-4 md:flex-row md:p-2 ${
                isDisabled ? 'pointer-events-none brightness-50' : ''
            }`}
        >
            <div className="flex flex-col items-center gap-2 md:flex-row">
                <div className="relative h-10 w-10 min-w-min">
                    <Image
                        className="flex flex-none shrink-0"
                        src={bonus.icon}
                        alt={bonus.name}
                        fill={true}
                        sizes="100%"
                    />
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <span className="text-md">{bonus.name}</span>
                    <span className="max-w-full break-words text-xs text-muted-foreground md:w-[21rem]">
                        {bonus.description}
                    </span>
                </div>
            </div>
            {bonus.maxStacks ? (
                <CustomSelect
                    options={[
                        ...(bonus.stackOptions || []).map((option, index) => ({
                            value: index.toString(),
                            label: option,
                        })),
                    ]}
                    value={currentStacks.toString()}
                    onChange={(value) => handleStackChange(parseInt(value, 10))}
                    disabled={isDisabled}
                />
            ) : (
                <Switch
                    id={bonus.name}
                    checked={currentStacks > 0}
                    onChange={() => handleStackChange(currentStacks > 0 ? 0 : 1)}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor={
                        elementColors[
                            character.vision.toLowerCase() as keyof typeof elementColors
                        ]
                    }
                    disabled={isDisabled}
                    className="mt-4 md:mt-0"
                />
            )}
        </div>
    )
}

export default CharacterBonusToggle