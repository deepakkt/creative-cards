<template>
    <div class="row">
        <div class="form-check form-check-inline">
            <div class="form-check-label">
                <input type="checkbox" name="" id="" class="form-check-input"
                    v-model="checked" @click="sectionCompleted"> Mark Section Completed
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../../main.js";

    export default {
        data: function() {
            return {
                checked: ""
            }
        },
        methods: {
            sectionCompleted: function() {
                console.log("Emitting ", this.checked);
                EventBus.$emit("mark-as-completed", this.checked);
            }
        }
    }
</script>

