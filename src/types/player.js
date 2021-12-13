import { create_UUID } from "../common/common";

export const PROPERTIES = {
    attack: 5,
    defense: 0,
    aggression: 1,
    lifesteal: 1,
    hp: 50
}

export const SKILL = []
export const ITEMS = []
export const MAPS = {}

export const PLAYER = {
    id: create_UUID(),
    user_id: 1,
    server_id: 1,
    email: '',
    name: '',
    level: 1,
    cultivation: 0,
    proper: PROPERTIES,
    spirit_stone: 0,
    skill: SKILL,
    items: ITEMS,
    map: MAPS,
    created_at: Date.parse(new Date()),
    updated_at: Date.parse(new Date()),
}