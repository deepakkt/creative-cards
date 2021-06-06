<template>
        <div class="img-container" v-bind:style="styleObject"
            @mouseover="showOptions = true"
            @mouseleave="showOptions = false">
            <transition name="scale">
                <button class="btn btn-outline-danger btn-sm"
                        type="button" v-show="showOptions"
                        @click="clearImageProp">
                    Remove Image
                </button>
            </transition>
            <img src="" alt="" id="outputImage">{{ displayImage }}
        </div>
</template>

<script>
import Firebase from 'firebase';

export default {
    props: {
        displayImage: {
            type: String
        },
        containerHeight: {
            type: Number,
            default: 200
        },
        clearImageProp: Function
    },
    data: function() {
        return {
            showOptions: false
        }
    },
    computed: {
        styleObject: function() {
            return {
                height: this.containerHeight + 'px'
            }
        }
    },
    watch: {
        displayImage: function() {
            let storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage);
            storageRef.getDownloadURL().then(
                function(url) {
                    let img = document.getElementById("outputImage");
                    img.src = url;
                    setDraggable();
                }
            )
        }
    }

}

function setDraggable() {
    $('#outputImage').draggable();
}
</script>

<style scoped>
    .img-container {
        border: 1px dotted grey;
        overflow: hidden;
        margin: 5px 0;
    }

    button {
        position: absolute;
        z-index: 1;
    }

    image {
        width: 130%;
    }
</style>