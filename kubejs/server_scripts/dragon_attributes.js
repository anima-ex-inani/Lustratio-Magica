// With Iron's Spells, Cataclysm, and Apothic Enchanting, the vanilla Ender Dragon fight becomes trivial compared to
// other bosses in the modpack. This, along with Bosslike Ender Dragon, should keep it on par with the rest of the
// boss roster.

// Type definitions for autocomplete. Comment out before release.
// const { $LivingEntity } = require("@package/net/minecraft/world/entity");

EntityEvents.spawned('minecraft:ender_dragon', event => {
    /** @type $LivingEntity */
    const dragon = event.entity;

    if (dragon.persistentData.getBoolean('kubejs_attributes_set')) {
        return;
    }
    dragon.persistentData.putBoolean('kubejs_attributes_set' , true);

    // Set the dragon's max HP to 250
    const healthAttribute = dragon.getAttribute('minecraft:generic.max_health');
    if (healthAttribute) {
        healthAttribute.setBaseValue(250);

        // Make sure that the dragon's current health is actually 250 upon spawning
        dragon.health = 250;
    }

    const armorAttribute = dragon.getAttribute('minecraft:generic.armor');
    if (armorAttribute) {
        armorAttribute.setBaseValue(15);
    }

    const armorToughnessAttribute = dragon.getAttribute('minecraft:generic.armor_toughness');
    if (armorToughnessAttribute) {
        armorToughnessAttribute.setBaseValue(10);
    }

    // Iron's Spells do not bypass armor. Since dedicated mage builds tend to be squishier than bruiser/tank builds,
    // letting them deal more damage is a tradeoff for their reduced survivability.
    const spellResistAttribute = dragon.getAttribute('irons_spellbooks:spell_resist');
    if (spellResistAttribute) {
        spellResistAttribute.setBaseValue(0.8);
    }

    // If the dragon were to deal an absurd amount of damage, armor would break much faster even with Unbreaking. To
    // avoid making Mending (or Life-Mending) a practical requirement for the fight, Armor Shred and Protection Shred
    // should help it deal more damage against heavily-armored players without dealing too much durability damage.
    const armorPierceAttribute = dragon.getAttribute('apothic_attributes:armor_pierce');
    if (armorPierceAttribute) {
        armorPierceAttribute.setBaseValue(7.5);
    }

    const armorShredAttribute = dragon.getAttribute('apothic_attributes:armor_shred');
    if (armorShredAttribute) {
        armorShredAttribute.setBaseValue(0.40);
    }

    const protPierceAttribute = dragon.getAttribute('apothic_attributes:prot_pierce');
    if (protPierceAttribute) {
        protPierceAttribute.setBaseValue(5);
    }

    const protShredAttribute = dragon.getAttribute('apothic_attributes:prot_shred');
    if (protShredAttribute) {
        protShredAttribute.setBaseValue(0.20);
    }
})
