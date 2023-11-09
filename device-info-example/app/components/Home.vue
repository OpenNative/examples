<template>
    <Page>
        <action-bar>

        </action-bar>
        <ActionBar>
            <Label text="DeviceInfo example"/>
        </ActionBar>
        <FlexboxLayout class="container">
            <Label class="info" :text="name"/>

            <Label class="info" :text="version"/>

            <Label class="info" :text="carrier"/>
        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">
  import { getApplicationName, getVersion, getCarrierSync } from "react-native-device-info";
  export default {
    computed: {
      name() {
        return "App name:" + getApplicationName();
      },
      version() {
        return "App version:" + getVersion();
      },
      carrier() {
        return "Carrier:" + getCarrierSync()
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        margin-bottom: 10;
    }

    .container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
