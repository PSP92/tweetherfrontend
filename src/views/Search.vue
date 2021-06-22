<template>
<div class="colorsearch">
    <b-field label="" :label-position="labelPosition">
            <b-input placeholder="Search..." type="search" rounded></b-input>
            <p>
            <b-button class="button is-link is-rounded">Search</b-button>
            </p>
            </b-field>
</div>              

</template>

<style scoped>
.button.is-link.is-rounded{
    margin:19px;
    background-color: #a0c4ff;
}
.input{
    color: black;
    font-weight: bold;
}
body.colorsearch{
    background-color: #fdffb6;
    height: 100%;
}
</style>