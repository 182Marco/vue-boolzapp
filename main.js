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
    ],
    darkmode: false,
    notifyActive: false,
    userThoughtsBox: false,
    thoughtsActive: false,
    emojiBox: false,
    emojiChangeUser: false,
    changeProfName: false,
    onLine: true,
    idChat: 0,
    newMsg: ``,
    profileName: `Nome Utente`,
    userThoughts: `Hey there! I'm using Boolzapp`,
    searchUser: ``,
  },
  methods: {
    /* push obj con msg e chiamata 
    funzioni per ottenere proprietà ulteriori*/
    writeMsg() {
      if (this.newMsg.trim() != '') {
        const date = this.getDateMsg();
        this.users[this.idChat].messages.push({
          date: date,
          // nota interssante: (anche senza trim vue fa output timmato)
          message: this.newMsg.trim(),
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
        message: 'ok!',
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
      ore == ore < 10 ? (ore = `0${ore}`) : ore;
      sec == sec < 10 ? (sec = `0${sec}`) : sec;
      min == min < 10 ? (min = `0${min}`) : min;
      return `${g}/${m}/${y}  ${ore}:${min}:${sec}`;
    },
    /* funz rimette focus su input se si clicca emoji*/
    // messaggi
    putBackFocus() {
      this.$refs.inputMsg.focus();
    },
    // frase da mettere sotto profilo
    focusInThoughts() {
      this.$refs.inputThoughts.focus();
    },
  },
});
