import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample games
  const destiny2 = await prisma.game.upsert({
    where: { slug: 'destiny-2' },
    update: {},
    create: {
      name: 'Destiny 2',
      slug: 'destiny-2',
      description: 'A free-to-play online-only multiplayer first-person shooter video game',
      imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg',
      maxPlayersPerGroup: 6,
      platforms: ['PC', 'PlayStation', 'Xbox'],
    },
  });

  const wow = await prisma.game.upsert({
    where: { slug: 'world-of-warcraft' },
    update: {},
    create: {
      name: 'World of Warcraft',
      slug: 'world-of-warcraft',
      description: 'A massively multiplayer online role-playing game',
      imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      maxPlayersPerGroup: 40,
      platforms: ['PC'],
    },
  });

  const lol = await prisma.game.upsert({
    where: { slug: 'league-of-legends' },
    update: {},
    create: {
      name: 'League of Legends',
      slug: 'league-of-legends',
      description: 'A multiplayer online battle arena video game',
      imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg',
      maxPlayersPerGroup: 5,
      platforms: ['PC'],
    },
  });

  const valorant = await prisma.game.upsert({
    where: { slug: 'valorant' },
    update: {},
    create: {
      name: 'Valorant',
      slug: 'valorant',
      description: 'A free-to-play first-person tactical hero shooter',
      imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg',
      maxPlayersPerGroup: 5,
      platforms: ['PC'],
    },
  });

  // Create game modes for Destiny 2
  await prisma.gameMode.createMany({
    data: [
      {
        name: 'Raid',
        description: 'Challenging 6-player PvE content',
        gameId: destiny2.id,
      },
      {
        name: 'Dungeon',
        description: '3-player challenging PvE content',
        gameId: destiny2.id,
      },
      {
        name: 'Nightfall',
        description: 'High-level strike with modifiers',
        gameId: destiny2.id,
      },
      {
        name: 'Crucible',
        description: 'Player vs Player combat',
        gameId: destiny2.id,
      },
      {
        name: 'Gambit',
        description: 'PvEvP hybrid game mode',
        gameId: destiny2.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create game modes for WoW
  await prisma.gameMode.createMany({
    data: [
      {
        name: 'Mythic+',
        description: 'Challenging 5-player dungeons',
        gameId: wow.id,
      },
      {
        name: 'Raid',
        description: 'Large group PvE content',
        gameId: wow.id,
      },
      {
        name: 'PvP',
        description: 'Player vs Player battlegrounds and arenas',
        gameId: wow.id,
      },
      {
        name: 'Leveling',
        description: 'Questing and leveling together',
        gameId: wow.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create game modes for League of Legends
  await prisma.gameMode.createMany({
    data: [
      {
        name: 'Ranked Solo/Duo',
        description: 'Competitive ranked matches',
        gameId: lol.id,
      },
      {
        name: 'Ranked Flex',
        description: 'Flexible ranked team matches',
        gameId: lol.id,
      },
      {
        name: 'Normal Draft',
        description: 'Casual draft pick matches',
        gameId: lol.id,
      },
      {
        name: 'ARAM',
        description: 'All Random All Mid',
        gameId: lol.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create game modes for Valorant
  await prisma.gameMode.createMany({
    data: [
      {
        name: 'Competitive',
        description: 'Ranked competitive matches',
        gameId: valorant.id,
      },
      {
        name: 'Unrated',
        description: 'Casual unranked matches',
        gameId: valorant.id,
      },
      {
        name: 'Spike Rush',
        description: 'Quick 4-round matches',
        gameId: valorant.id,
      },
      {
        name: 'Deathmatch',
        description: 'Free-for-all deathmatch',
        gameId: valorant.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Database seeding completed!');
  console.log(`Created games: ${destiny2.name}, ${wow.name}, ${lol.name}, ${valorant.name}`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 