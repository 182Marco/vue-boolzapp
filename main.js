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
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      `????`,
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '???',
      '????',
      '????',
      '????',
      '????',
      '???',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '???',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '???',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '???',
      '????',
      '???',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
      '????',
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
    // FUZIONI CHE APRONO HEADER SOTTO BOX A SX
    //  CHIUDENDO TUTTI GLI ALTRI CONTESTUALMENTE
    // toggolare emoji box nell'input per cambiare nome profilo
    toggleEmojiBoxAvName() {
      this.closeAvatarChoice();
      this.closeThoughtsChoice();
      this.changeProfBox = !this.changeProfBox;
      this.changeProfActive = !this.changeProfActive;
      this.putFocus(this.$refs.inputAvName);
    },
    // toggolare emoji box nell'input frasetta con pensieri user
    setPayOf() {
      this.closeAvatarChoice();
      this.closeProfNameChoice();
      this.userThoughtsBox = !this.userThoughtsBox;
      this.thoughtsActive = !this.thoughtsActive;
      this.putFocus(this.$refs.inputPayOf);
    },
    // cambiare avatar profilo
    openAvatars() {
      this.closeProfNameChoice();
      this.closeThoughtsChoice();
      this.changeAvImgLink = !this.changeAvImgLink;
      this.changeAvbox = !this.changeAvbox;
    },
    // METODI PER FUNZIONAMENTO MESSAGGISTICA
    /* push obj con msg e chiamata 
    funzioni per ottenere propriet?? ulteriori*/
    writeMsg() {
      if (this.newMsg != '') {
        const allMsgThisUser = this.users[this.idChat].messages;
        const newSend = {
          date: this.getDateMsg(),
          message: this.newMsg,
          status: 'sent',
        };
        this.addObjInAr(newSend, allMsgThisUser);
        this.cleanInputMsg();
        setTimeout(this.risp, 3000);
      }
    },
    // risposta automatizzata BOT
    risp() {
      const allMsgThisUser = this.users[this.idChat].messages;
      const rispMsg = {
        date: this.getDateMsg(),
        message: 'va bene!',
        status: 'received',
      };
      this.addObjInAr(rispMsg, allMsgThisUser);
    },
    // capire che msg vanno in v-show dopo ricerca msg
    visibleMsg(objMsg, i) {
      if (this.searchedMsg == ``) {
        return i == this.idChat;
      }
      if (i == this.idChat) {
        return this.checkIncludes(objMsg.message, this.searchedMsg);
      }
      return false;
    },
    //
    // -- FUNZIONI UTILITY --
    //
    // put obj in objs collection
    addObjInAr(obj, ar) {
      return ar.push(obj);
    },
    // controllare se un el ?? presente in un ARRAY
    // o in un ARRAY STRINGA(case insensitive)
    // chimata in main.js(sopra) line 334 e in index.html line 231
    checkIncludes(ar, search) {
      return ar.toLowerCase().includes(search.toLowerCase());
    },
    // pulire input msg dopo invio
    cleanInputMsg() {
      this.newMsg = '';
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
    // gli input sono a scomparsa -> Vue non prende ref non display
    //  sintassi setTimeout classica fa perdere ambito visibilit?? di this.->ES7
    // chimata anche in index.html
    putFocus(refName) {
      setTimeout(() => refName.focus(), 100);
    },
    // funzioni di riutilizzo per chiusura box a scomparsa
    // -> sono uno sovrapposto all'altro ->  per avere ordine
    // quando uno si apre tutti gli altri si devono chiudere
    closeAvatarChoice() {
      this.changeAvImgLink = false;
      this.changeAvbox = false;
    },
    closeThoughtsChoice() {
      this.userThoughtsBox = false;
      this.thoughtsActive = false;
    },
    closeProfNameChoice() {
      this.changeProfActive = false;
      this.changeProfBox = false;
    },
  },
});
