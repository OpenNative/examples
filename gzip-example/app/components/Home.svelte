<page>
    <actionBar title="Gzip example" />
    <flexboxLayout class="info">
        <button
            text="Compress string to base64"
            class='btn'
            on:tap={compress}
        />
        <label textWrap="true" class="label" text={compressed} />

        <button
            text="Decompress base64 string"
            class='btn'
            on:tap={decompress}
        />
        <label class="label" text={decompressed} />
    </flexboxLayout>
</page>

<script lang="ts">
    import { deflate, inflate } from 'react-native-gzip';
    let compressed = "";
    let decompressed = "";

    const compress = async () => {
        compressed = await deflate("NativeScript is awesome");
    }

    const decompress = async () => {
        if (compressed) {
            decompressed = await inflate(compressed);
        }
    }
</script>

<style>
    .btn {
        background-color: coral;
        padding: 0 20;
        color: white;
        border-radius: 100;
        width: 300;
    }
    .label {
        font-size: 16;
        max-width: 300;
    }
    .info {
        font-size: 20;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 20;
    }
</style>
