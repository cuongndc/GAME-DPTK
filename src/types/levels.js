const FIRST_EXP = 1000

export function getLevelByID(ID) {
    return levels.find(level => { return level.id === ID })
}

export const levels = [
    {
        id: 1,
        name: 'Luyện khí tầng 1',
        exp: FIRST_EXP * 1,
    },
    {
        id: 2,
        name: 'Luyện khí tầng 2',
        exp: (FIRST_EXP * 2) * 2.5
    },
    {
        id: 2,
        name: 'Luyện khí tầng 2',
        exp: (FIRST_EXP * 2) * 2.5
    },
    {
        id: 3,
        name: 'Luyện khí tầng 3',
        exp: (FIRST_EXP * 3) * 2.5
    },
    {
        id: 4,
        name: 'Luyện khí tầng 4',
        exp: (FIRST_EXP * 4) * 2.5
    }
]