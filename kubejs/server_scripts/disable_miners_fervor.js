// Visit the wiki for more info - https://kubejs.com/
ServerEvents.tags('enchantment', event => {
    event.remove('minecraft:in_enchanting_table', 'apothic_enchanting:miners_fervor');
    event.remove('minecraft:tradeable', 'apothic_enchanting:miners_fervor');
    event.remove('minecraft:on_random_loot', 'apothic_enchanting:miners_fervor');
    event.remove('minecraft:on_mob_spawn_equipment', 'apothic_enchanting:miners_fervor');
    event.remove('minecraft:on_traded_equipment', 'apothic_enchanting:miners_fervor');
})
