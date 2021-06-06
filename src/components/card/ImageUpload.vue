<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Upload Image</h4>
            <div class="form-group">
                <input type="file" name="" id="fileUpload"
                    class="form-control-file"
                    @change="uploadFile">
            </div>
            <progress value="0" max="100" id="progressBar"></progress>
            <br />
            <img id="image" src="" alt="">
            <button type="button" id="setImageButton" style="display:none" @click="setImage">Set Image</button>
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase';

export default {
    data: function() {
        return {
            file: ''
        }
    },
    methods: {
        uploadFile: function(event) {
            document.getElementById('setImageButton').style.display = "none";
            this.file = event.target.files[0];

            // upload file to firebase
            let storageRef = Firebase.storage().ref('user_uploads/' + this.file.name);
            let upload = storageRef.put(this.file);

            // display progress bar of upload
            upload.on('state_changed', function(snapshot){
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById("progressBar").value = progress;

                if (progress == 100) {
                    document.getElementById("setImageButton").style.display = "inline-block";
                }
            });
        },
        setImage: function() {
            this.$emit('displayImageChanged', this.file.name);
        }
    },
    watch: {
        file: function() {
            // show thumbnail
            let reader = new FileReader();
            reader.readAsDataURL(this.file);

            reader.onload = function(e) {
                document.getElementById('image').src = e.target.result;
            }

            // this.$emit('displayImageChanged', this.file.name);
        }
    }
}
</script>


<style scoped>
    img {
        max-width : 200px;
    }
</style>