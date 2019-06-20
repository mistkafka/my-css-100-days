
const gallery = {
  el: '.gallery',
  data() {
    const users = [{
      id: 1,
      avatar: `http://100dayscss.com/codepen/13-1.jpg`,
      name: 'Julia Toth'
    }, {
      id: 2,
      avatar: `http://100dayscss.com/codepen/13-2.jpg`,
      name: 'You Chan'
    }, {
      id: 3,
      avatar: `http://100dayscss.com/codepen/13-3.jpg`,
      name: 'White Tom'
    }, {
      id: 4,
      avatar: `http://100dayscss.com/codepen/13-4.jpg`,
      name: 'Black Jerry'
    }];

    return {
      users,
      selectedUser: users[0],
      showDetail: false
    }
  },
  methods: {
    handleClickCard(user) {
      this.selectedUser = user;
      this.showDetail = true;
    }
  }
};

new Vue(gallery);
