const app = new Vue({
  el: `#app`,
  data: {
    users: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent',
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
          },
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received',
          },
        ],
      },
    ],
    emojis: [
      `😀`,
      `😅`,
      `😊`,
      `😌`,
      `😙`,
      `😜`,
      `😎`,
      `😒`,
      `😃`,
      `😂`,
      `😇`,
      `😍`,
      `😚`,
      `🤪`,
      `🥸`,
      `😞`,
      `😄`,
      `🤣`,
      `🙂`,
      `🥰`,
      `😋`,
      `🤨`,
      `🤩`,
      `😔`,
      `😁`,
      `🥲`,
      `🙃`,
      `😘`,
      `😛`,
      `🧐`,
      `🥳`,
      `😟`,
      `😆`,
      `😉`,
      `😗`,
      `😝`,
      `🤓`,
      `😏`,
      `😕`,
      `🙁`,
      `😩`,
      `😠`,
      `🥵`,
      `😥`,
      `🤫`,
      `😬`,
      `😮`,
      `🥺`,
      `😡`,
      `🥶`,
      `😓`,
      `🤥`,
      `🙄`,
      `😲`,
      `😣`,
      `😢`,
      `🤬`,
      `😱`,
      `🤗`,
      `😶`,
      `😯`,
      `🥱`,
      `😖`,
      `😭`,
      `🤯`,
      `😨`,
      `🤔`,
      `😐`,
      `😦`,
      `😴`,
      `😫`,
      `😤`,
      `😳`,
      `😰`,
      `🤭`,
      `😑`,
      `😧`,
      `🤤`,
      '😝',
      '😁',
      '😱',
      '👉',
      '🙌',
      '🍻',
      '🔥',
      '🌈',
      '☀',
      '🎈',
      '🌹',
      '💄',
      '🎀',
      '⚽',
      '🎾',
      '🏁',
      '😡',
      '👿',
      '🐻',
      '🐶',
      '🐬',
      '🐟',
      '🍀',
      '👀',
      '🚗',
      '🍎',
      '💝',
      '💙',
      '👌',
      '❤',
      '😍',
      '😉',
      '😓',
      '😳',
      '💪',
      '💩',
      '🍸',
      '🔑',
      '💖',
      '🌟',
      '🎉',
      '🌺',
      '🎶',
      '👠',
      '🏈',
      '⚾',
      '🏆',
      '👽',
      '💀',
      '🐵',
      '🐮',
      '🐩',
      '🐎',
      '💣',
      '👃',
      '👂',
      '🍓',
      '💘',
      '💜',
      '👊',
      '💋',
      '😘',
      '😜',
      '😵',
      '🙏',
      '👋',
      '🚽',
      '💃',
      '💎',
      '🚀',
      '🌙',
      '🎁',
      '⛄',
      '🌊',
      '⛵',
      '🏀',
      '🎱',
      '💰',
      '👶',
      '👸',
      '🐰',
      '🐷',
      '🐍',
      '🐫',
      '🔫',
      '👄',
      '🚲',
      '🍉',
      '💛',
      '💚',
    ],
    avatars: [
      `avatar_1.jpg`,
      `avatar_2.jpg`,
      `avatar_3.jpg`,
      `avatar_4.jpg`,
      `avatar_5.jpg`,
      `avatar_6.jpg`,
      `avatar_7.jpg`,
      `avatar_8.jpg`,
      `avatar_io.jpg`,
    ],
    darkmode: false,
    notifyActive: false,
    userThoughtsBox: false,
    changeProfBox: false,
    thoughtsActive: false,
    changeProfActive: false,
    emojiBox: false,
    emojiChangeUser: false,
    changeAvImgLink: false,
    changeAvbox: false,
    searchMsg: false,
    onLine: true,
    idChat: 0,
    indexAvatar: 8,
    newMsg: ``,
    profileName: `Nome Utente`,
    userThoughts: `Hey there! I'm using Boolzapp`,
    searchUser: ``,
    searchedMsg: ``,
  },
  methods: {
    /* push obj con msg e chiamata 
    funzioni per ottenere proprietà ulteriori*/
    writeMsg() {
      if (this.newMsg != '') {
        const date = this.getDateMsg();
        this.users[this.idChat].messages.push({
          date: date,
          message: this.newMsg,
          status: 'sent',
        });
        this.cleanInputMsg();
        setTimeout(this.risp, 3000);
      }
    },
    // pulire input msg dopo invio
    cleanInputMsg() {
      this.newMsg = '';
    },
    // risposta automatizzata BOT
    risp() {
      const date = this.getDateMsg();
      this.users[this.idChat].messages.push({
        date: date,
        message: 'va bene!',
        status: 'received',
      });
    },
    getDateMsg() {
      // ottenere data ora della scrittuta Msg
      const d = new Date();
      let g = d.getDate();
      let m = d.getMonth();
      m++;
      let y = d.getFullYear();
      let ore = d.getHours();
      let min = d.getMinutes();
      let sec = d.getSeconds();
      ore = ore < 10 ? (ore = `0${ore}`) : ore;
      sec = sec < 10 ? (sec = `0${sec}`) : sec;
      min = min < 10 ? (min = `0${min}`) : min;
      return `${g}/${m}/${y}  ${ore}:${min}:${sec}`;
    },
    /* funz rimette focus su input se si clicca emoji*/
    // messaggi
    putBackFocus() {
      this.$refs.inputMsg.focus();
    },
    // focus in input per cambiare nome profilo
    focusInInputProfName() {
      console.log('Sono stata chiamata: focusInInputProfName');
      this.$refs.inputprofileName.focus();
    },
    // focus in input per frase da mettere sotto profilo
    focusInThoughts() {
      console.log('Sono stata chiamata: focusInThoughts');
      this.$refs.inputProfileThoughts.focus();
    },
    // change avatar function
    changeAv(i) {
      this.indexAvatar = i;
    },
    // toggolare emoji box nell'input per cambiare nome profilo
    toggleEmojiBoxChangeProf() {
      this.changeProfBox = !this.changeProfBox;
      this.changeProfActive = !this.changeProfActive;
      this.focusInInputProfName();
    },
    // toggolare emoji box nell'input frasetta con pensieri user
    toggleEmojiBoxThoughts() {
      this.userThoughtsBox = !this.userThoughtsBox;
      this.thoughtsActive = !this.thoughtsActive;
      this.focusInThoughts();
    },
    // toggolare search input per filtrare msg
    toggleSearchMsg() {
      this.searchMsg = !this.searchMsg;
      this.$refs.inputSearchMsg.focus();
    },
    // filtrare gli utenti che interessano con casella di input
    filterUsers(i) {
      const lowerUser = this.users[i].name.toLowerCase();
      const lowerSearch = this.searchUser.toLowerCase();
      return lowerUser.includes(lowerSearch);
    },
    // capire che msg vanno in v-show
    visibleMsg(objMsg, i) {
      if (this.searchedMsg == ``) {
        return i == this.idChat;
      } else {
        if (i == this.idChat) {
          const lowerMsg = objMsg.message.toLowerCase();
          const lowerSearch = this.searchedMsg.toLowerCase();
          return lowerMsg.includes(lowerSearch);
        } else {
          return false;
        }
      }
    },
  },
});
