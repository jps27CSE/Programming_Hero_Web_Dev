const frindsFunction = (friends) => {
  const newFriendArray = [];

  friends.filter((friend) => {
    if (friend.length % 2 === 0) {
      newFriendArray.push(friend);
    }
  });

  return newFriendArray;
};

const arrayOfFriends = ["partho", "asif", "jack", "pritom"];

console.log(frindsFunction(arrayOfFriends));
