const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

const userData = [
  {
    username: 'Kermit',
    email: 'kermit@muppets.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'MissPiggy',
    email: 'misspiggy@muppets.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Gonzo',
    email: 'gonzo@muppets.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Fozzie',
    email: 'fozzie@muppets.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Animal',
    email: 'animal@muppets.com',
    thoughts: [],
    friends: [],
  },
  // Add more Muppet users if needed
];

const thoughtData = [
  {
    thoughtText: 'It’s not easy being green.',
    username: 'Kermit',
    reactions: [],
  },
  {
    thoughtText: 'Happiness is a warm puppy.',
    username: 'MissPiggy',
    reactions: [],
  },
  {
    thoughtText: 'I shall call it Gonzo’s Royal Flush!',
    username: 'Gonzo',
    reactions: [],
  },
  {
    thoughtText: 'Wocka Wocka!',
    username: 'Fozzie',
    reactions: [],
  },
  {
    thoughtText: 'DRUMS DRUMS DRUMS!',
    username: 'Animal',
    reactions: [],
  },
  // Add more thoughts if needed
];

const seedDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  const insertedUsers = await User.insertMany(userData);
  
  // Building a map of usernames to their respective IDs
  const userMap = insertedUsers.reduce((map, user) => {
    map[user.username] = user._id;
    return map;
  }, {});

  // Assign friends (bi-directional relationships)
  const kermitFriends = [userMap['MissPiggy'], userMap['Fozzie']];
  const missPiggyFriends = [userMap['Kermit'], userMap['Animal']];
  // Add friends to other Muppets as needed

  await User.findByIdAndUpdate(userMap['Kermit'], { $addToSet: { friends: { $each: kermitFriends } } });
  await User.findByIdAndUpdate(userMap['MissPiggy'], { $addToSet: { friends: { $each: missPiggyFriends } } });
  // Update friends for other Muppets as needed

  const thoughts = thoughtData.map(thought => {
    if (userMap[thought.username]) {
      thought = { ...thought, user: userMap[thought.username] };
    }
    return thought;
  });

  await Thought.insertMany(thoughts);

  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase();
