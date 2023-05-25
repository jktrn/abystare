import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Select from 'react-select'
import { filterCustomStyles } from '../styles/filterCustomStyles'
import { sortCustomStyles } from '../styles/sortCustomStyles'

interface FilterAndSortProps {
    filterValue: string[]
    setFilterValue: (value: string[]) => void
    sortOrder: string
    setSortOrder: (value: string) => void
}

const FilterAndSort = ({
    filterValue,
    setFilterValue,
    sortOrder,
    setSortOrder,
}: FilterAndSortProps) => {
    const filterOptions = [
        { value: 'pyro', label: 'Pyro' },
        { value: 'geo', label: 'Geo' },
        { value: 'dendro', label: 'Dendro' },
        { value: 'anemo', label: 'Anemo' },
        { value: 'cryo', label: 'Cryo' },
        { value: 'hydro', label: 'Hydro' },
        { value: 'electro', label: 'Electro' },
    ]

    const sortOptions = [
        { value: 'element', label: 'Element' },
        { value: 'asc', label: 'Name (A-Z)' },
        { value: 'desc', label: 'Name (Z-A)' },
    ]

    return (
        <>
            <Flex className="items-center flex-col w-full sm:flex-row gap-4 mb-4">
                <Flex className="items-center w-full gap-2">
                    <Text>Filter:</Text>
                    <Select
                        isMulti
                        value={filterOptions.filter((option) =>
                            filterValue.includes(option.value)
                        )}
                        onChange={(options) =>
                            setFilterValue(
                                options.map((option) => option.value)
                            )
                        }
                        options={filterOptions}
                        formatOptionLabel={({ value, label }) => (
                            <Flex>
                                <Image
                                    src={`/images/elements/${value}.svg`}
                                    className="white-svg"
                                    alt={label}
                                    width={20}
                                    height={20}
                                />
                                <Text className="ml-2">{label}</Text>
                            </Flex>
                        )}
                        className="w-full"
                        styles={filterCustomStyles}
                        menuPortalTarget={document.body}
                        hideSelectedOptions={false}
                    />
                </Flex>
                <Flex className="items-center w-full gap-2">
                    <Text>Sort:</Text>
                    <Select
                        value={sortOptions.find(
                            (option) => option.value === sortOrder
                        )}
                        onChange={(option) => setSortOrder(option?.value ?? '')}
                        options={sortOptions}
                        className="w-full"
                        styles={sortCustomStyles}
                        menuPortalTarget={document.body}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default FilterAndSort
