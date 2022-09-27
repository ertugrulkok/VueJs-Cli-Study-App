import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UserInterface/BaseCard.vue";
import BaseButton from "./components/UserInterface/BaseButton.vue";
import BaseDialog from "./components/UserInterface/BaseDialog.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.mount("#app");
