export const catalog = [
  {
    id: 1,
    name: "Banshee",
    strength: "A Banshee will focus on one player at a time until it kills them or the player leaves the building or the game.",
    weakness: "Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.",
    power: "Once a Banshee uses its power, it will begin to navigate to its chosen target. Line-of-sight blockers and hiding have no effect on the Banshee's ability to navigate to the player, and it will be able to reach them. It will not actually follow the player, but it will mark the target's location at the time its power was used. After reaching the location, it will wait ~20 seconds, then proceed to begin a Hunt if the player has been within direct line-of-sight of the Banshee during this waiting time.  ----Unless the target is outside, the Banshee can ignore Sanity and typical hunting rules, meaning it can potentially begin a Hunt with its power within moments of the hunters entering the location on Professional or Intermediate difficulties. A hunt beginning very early on while all players have high Sanity is a very strong sign of a Banshee using its power.",
    notes: "The Banshee will also ignore players that are not its target during a hunt, allowing for easy photos and little need to hide while the target is known, assuming they do not leave the building or are killed.",
    evidence: {
      freeze: true,
      emf5: true,
      orbs: false,
      spiritBox: false,
      ghostWriting: false,
      fingerPrints: true
    }
  },
  {
    id: 2,
    name: "Demon",
    strength: "Demons are the most aggressive ghosts and will begin Hunts more often.",
    weakness: "Asking a Demon successful questions on the Ouija Board won't lower the user's sanity.",
    power: "",
    notes: "Taking advantage of the Demon's known weakness with Ouija Boards can get players the information they need to succeed, mainly finding out its Ghost Room without needing to waste time searching.",
    evidence: {
      freeze: true,
      emf5: false,
      orbs: false,
      spiritBox: true,
      ghostWriting: true,
      fingerPrints: false
    }
  },
  {
    id: 3,
    name: "Jinn",
    strength: "A Jinn will travel at a faster speed if its victim is far away.",
    weakness: "Turning off the location's power source will prevent the Jinn from using its ability.",
    power: "When the Jinn uses its ability, it will wait for 5 seconds. After this, all players within 3 meters of the ghost will have their Sanity decrease by 25%.",
    notes: "Turning off the location's breaker will both prevent the Jinn from moving fast during a hunt and make it easier for players to see its ghost orbs. ---Especially-daring players can easily identify the Jinn with its behavior during a Hunt while the power is still on: although it is quick to catch up to players that it is chasing, it will slow down significantly as it nears them, allowing players to re-establish a gap that the Jinn will speed up to close; correctly noting this will allow for the Jinn to be identified without a single piece of evidence needing to be gathered.",
    evidence: {
      freeze: false,
      emf5: true,
      orbs: true,
      spiritBox: true,
      ghostWriting: false,
      fingerPrints: false
    }
  },
  {
    id: 4,
    name: "Mare",
    strength: "Increased chance to attack in the dark.",
    weakness: "Turning the lights on will lower its chance to attack.",
    power: "It will do what it can to achieve darkness, such as turning off lights and tripping the fuse box.",
    notes: "As the Mare's entire strategy revolves around keeping players in the darkness, the simplest solution is to keep the lights on in high-traffic areas such as near the front door and hallways, including utilizing Candles if the fuse box is difficult to reach. It is especially important to keep the lights on in the Mare's ghost room, as this is what actually lowers the Mare's chance to hunt.-----Note that staying in the light does not prevent the Mare from hunting",
    evidence: {
      freeze: true,
      emf5: false,
      orbs: true,
      spiritBox: true,
      ghostWriting: false,
      fingerPrints: false
    }
  },
  {
    id: 5,
    name: "Oni",
    strength: "Oni are more active when people are nearby and have been seen moving objects at great speed.",
    weakness: "Being more active will make the Oni easier to find and identify.",
    power: "It is much more active when players are grouped together.",
    notes: "The Oni's power of being more active when players are around can be misleading on larger maps such as Brownstone High School and Asylum, as it will often wander to players and cause interactions far away from its Ghost Room, creating red herrings.---Unlike with most other ghost types, splitting up is the best method of defense when searching for an Oni, as it is much less active while players are alone.",
    evidence: {
      freeze: false,
      emf5: true,
      orbs: false,
      spiritBox: true,
      ghostWriting: true,
      fingerPrints: false
    }
  },
  {
    id: 6,
    name: "Phantom",
    strength: "Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.",
    weakness: "Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt.",
    power: "When a Phantom uses its power, it will navigate to a random player's location, creating an Interaction EMF at its starting location.",
    notes: "During a hunt a phantom will flash visible every 1 to 2 seconds as opposed to every 0.3 to 1 second for other Ghosts, making it harder to take a photo of.",
    evidence: {
      freeze: true,
      emf5: true,
      orbs: true,
      spiritBox: false,
      ghostWriting: false,
      fingerPrints: false
    }
  },
  {
    id: 7,
    name: "Poltergeist",
    strength: "A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.",
    weakness: "A Poltergeist is almost ineffective in an empty room.",
    power: "When a Poltergeist uses its power, it will throw all nearby items. If a player is nearby, it will decrease their sanity by an amount equal to the number of items thrown multiplied by 2. This will also create an EMF Level 3.",
    notes: "A Poltergeist's ability to manipulate objects, specifically doors, can make it easier to identify. However, if the ghost is one that specifically affects multiple light fixtures and other electronics at once, it's more likely to be a Jinn.----An unwritten quirk of the Poltergeist is that they have the greatest capacity to roam from their Ghost Room, going far to move objects away from its space",
    evidence: {
      freeze: false,
      emf5: false,
      orbs: true,
      spiritBox: true,
      ghostWriting: false,
      fingerPrints: true
    }
  },
  {
    id: 8,
    name: "Revenant",
    strength: "A Revenant will travel at a significantly faster (2x) speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.",
    weakness: "Hiding from the Revenant will cause it to move at a significantly reduced (0.5x) speed.",
    power: "During a Hunt, the Revenant can move at twice the default speed when it is chasing a player, but it will only move at half speed when it isn't.",
    notes: "A highly dangerous but nonetheless potential method of surviving a chase from a Revenant chase requires at least one other player. A Revenant's ability to switch targets freely can be used against it. Whoever is not being chased can force a hunting Revenant's attention on them from a different angle, then another player can do the same thereafter. This leads to the Revenant effectively being 'juggled' between multiple players and constantly changing directions without focusing on one player long enough to actually catch and kill them.",
    evidence: {
      freeze: false,
      emf5: true,
      orbs: false,
      spiritBox: false,
      ghostWriting: true,
      fingerPrints: true
    }
  },
  {
    id: 9,
    name: "Shade",
    strength: "As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.",
    weakness: "Conversely, a Shade will rarely start a Hunt when players are grouped together.",
    power: "",
    notes: "If a Shade is already hunting, it will prefer to target players that are alone. The Shade follows the general definition of 'alone', in the sense of a player being in a room on their own, even if other players are physically close.----If there are two or more people in the ghost room, it is less likely to initiate a Hunt. If it is needed to bait out the ghost into hunting mode, make sure there is no more than one player in the ghost room. Some rooms that seem like a single room are actually broken down into multiple rooms. For example, the cell blocks on the Prison Map appear to be broken up into 2 or more rooms.",
    evidence: {
      freeze: false,
      emf5: true,
      orbs: true,
      spiritBox: false,
      ghostWriting: true,
      fingerPrints: false
    }
  },
  {
    id: 10,
    name: "Spirit",
    strength: "The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.",
    weakness: "Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90.",
    power: "",
    notes: "Currently, there is a bug when investigating the School or Asylum, wherein a Spirit may be able to move at incredible speed. It is unknown when this issue will be patched.",
    evidence: {
      freeze: false,
      emf5: false,
      orbs: false,
      spiritBox: true,
      ghostWriting: true,
      fingerPrints: true
    }
  },
  {
    id: 11,
    name: "Wraith",
    strength: "Wraiths almost never touch the ground, but this does not apply to the ghost model. Because of this, footprint sounds from a wraith will be rare to non-existent, and they can travel directly through walls doors without having to open them.",
    weakness: "Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, Ghost Activity will significantly increase.",
    power: "When a Wraith uses its power, it will teleport to a spot within 3 meters of a random player, creating an Interaction EMF. This is possibly what is meant by 'travelling through walls' by the Journal.",
    notes: "Although Salt can make a Wraith stop attacking according to the Journal, nothing can really stop an ongoing Hunt. ----The Wraith will hover without touching the ground for long periods of time, but it occasionally takes steps on the ground. In other words, a Wraith can still be tracked with Salt to some degree. Wraiths can step on and disturb a pile of salt, but they will not leave green Footprints. If Salt is placed in a doorway, a Wraith will most often fly over the Salt, leaving a hand print on the door that can be seen with a UV Light. However, this is not guaranteed, and it may result in a glitch where the wraith will enter its hunting phase and never stop. ----According to the Journal, the Wraith is unfazed by doors and lockers—especially during a Hunt. This has been tested false, and this doesn't seem to be implemented in the game, yet.",
    evidence: {
      freeze: true,
      emf5: false,
      orbs: false,
      spiritBox: true,
      ghostWriting: false,
      fingerPrints: true
    }
  },
  {
    id: 12,
    name: "Yurei",
    strength: "Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
    weakness: "Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.",
    power: "",
    notes: "Be sure to get away from the Yurei when it does manifest if you aren't taking a photo of it.---Be sure to keep track of Sanity",
    evidence: {
      freeze: true,
      emf5: false,
      orbs: true,
      spiritBox: false,
      ghostWriting: true,
      fingerPrints: false
    }
  },
]