<script lang="ts">
  import notifee, { AndroidVisibility, EventType } from "@notifee/react-native";
  import { Alert } from "@open-native/core";

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });
    // Display a notification
    const result = await notifee.displayNotification({
      title: "Notification Title",
      body: "Main body content of the notification",
      android: {
        channelId,
        smallIcon: "ic_launcher", // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: "default",
        },
        actions: [
          {
            pressAction: {
              id: "open",
            },
            title: "Open",
          },
        ],
      },
    });
  }
</script>

<page>
  <actionBar title="Notifee example" />
  <gridLayout>
    <button
      on:tap={onDisplayNotification}
      class="btn"
      text="Display notification"
    />
  </gridLayout>
</page>

<style>
  .info .fas {
    color: #3a53ff;
  }

  .btn {
    background-color: #3a53ff;
    color: white;
    font-size: 16;
    border-radius: 100;
    margin-bottom: 10;
  }
</style>
