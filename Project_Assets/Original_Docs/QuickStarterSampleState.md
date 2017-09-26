{
  entities: {
    projects: {
      1: {
        id: 1,
        title: "Project Title",
        author_id: 3,
        backerCount: 12,
        fundingDeadline: 08-05-93,
        fundingGoal: 9000,
        total_funded: 5000,
        description: "Description, details, and lots of words will go here eventually",
        blurb: "much shorter description goes here",
        titleImage: "http://picture.com.jpg",
        projectRewards: [12, 13],
        category: "Art"
      },
      2: {
        id: 2,
        title: "Project Title",
        author_id: 4,
        backerCount: 22,
        fundingDeadline: 08-05-93,
        fundingGoal: 2000,
        total_funded: 300,
        description: "Description, details, and lots of words will go here eventually",
        blurb: "much shorter description goes here",
        titleImage: "http://picture.com.jpg",
        projectRewards: [14, 15],
        category: "science"
      },
    },
    users: {
      3: {
        id: 3,
        username: "author username",
        email: "name@email.com",
        img_url: "http://picture.com.jpg",
        backedProjects: [1],
        ownProjects: [2]
      }
      4: {
        id: 4,
        username: "author username",
        email: "name@email.com",
        img_url: "http://picture.com.jpg",
        backedProjects: [2],
        ownProjects: [1]
      },
      5: {
        id: 5,
        username: "author username",
        email: "name@email.com",
        img_url: "http://picture.com.jpg",
        backedProjects: [1],
        ownProjects: [2]
      }
    },
    rewards: {
      12: {
          id: 12,
          projectId: 1,
          pledgeAmount: 25,
          gift: "some gift goes here",
          giftDescription: "what kinda gift is it?"
          },
      13: {
          id: 13
          projectId: 2,
          pledgeAmount: 50,
          gift: "some gift goes here",
          giftDescription: "what kinda gift is it?"
          }
    }
  },
  ui: {
    projectDisplay: 2,
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    projectForm: ["Must fill out all project details"]
  },
  session: {
    currentUser: {
        id: 5,
        username: "author username",
        email: "name@email.com",
        img_url: "http://picture.com.jpg",
        backedProjects: [1],
        ownProjects: [2]
    }
  }
}
