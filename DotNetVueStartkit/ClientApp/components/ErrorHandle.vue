<script>
import { mapGetters } from 'vuex';

export default  {
  methods: {
    setMessage(message,messageState) {
      this.$store.dispatch('notification/setMessage', {message,messageState});
    },
    creaMessage(messageState){
      this.$store.dispatch('notification/creaMessage',messageState);
    },
    successNotify(title) {
      this.$vs.notify({
        title,
        text: this.notifyMsg,
        color: 'success',
        position: 'top-left',
      });
    },
    errorNotify(title) {
      this.$vs.notify({
        title,
        text: this.errorNotifyMsg,
        color: 'danger',
        position: 'top-left',
      });
    },
  },
  watch:{
    notifyMsg(val) {
      // メッセージが存在する場合のみ通知
      if(val){
        this.successNotify(val);
      }
      // メッセージを削除 同じメッセージが連続したときに監視できなくなるため
      this.creaMessage(true);
    },
    errorNotifyMsg(val) {
      // メッセージが存在する場合のみ通知
      if(val){
        this.errorNotify(val);
      }
      // メッセージを削除 同じメッセージが連続したときに監視できなくなるため
      this.creaMessage(false);
    }
  },
  computed: {
    ...mapGetters({
      notifyMsg: 'notification/notifyMsg',
      errorNotifyMsg:'notification/errorNotifyMsg',
    }),
  },
};

</script>
