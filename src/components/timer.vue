<template>
    <div class="timer">{{newTime}}
    </div>
</template>

<script>
export default {
  name: 'timer',
  props: ['currentTime'],
  data: function () {
    return {
      newTime: this.currentTime,
      localTime: this.currentTime
    }
  },
  mounted () {
    setInterval(() => {
      this.newTime--
      setInterval(() => {
        if(this.localTime !== this.currentTime) {
          this.localTime = this.currentTime
          this.newTime = this.currentTime
        }
      }, 1)
    }, 1000)
  }
}

</script>

<style>
  .timer {
    width: 50px;
    height: 50px;
    background: white;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px auto;
    overflow: hidden;
    line-height: 50px;
    font-size: 25px;
    text-align: center;
    color: black;
  }
</style>
