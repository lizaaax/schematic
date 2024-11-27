<template>
    <div class="toolbar-container">
      <el-button class="button New" @click="handleNew"></el-button>
      <el-button class="button open" @click="handleOpen"></el-button>
      <el-button class="button Save" @click="handleSave"></el-button>
      <el-button class="button Print" @click="handlePrint"></el-button>
      <el-button class="button EndCommand" @click="handleEndCommand"></el-button>
      <el-button class="button Delete" @click="handleDelete"></el-button>
      <el-button class="button Undo" @click="handleEndCommand"></el-button>
      <el-button class="button Redo" @click="handleEndCommand"></el-button>
      <el-button class="button ViewAll" @click="handleEndCommand"></el-button>
      <el-button class="button Zoom" @click="handleEndCommand"></el-button>
      <el-button class="button ZoomIn" @click="handleEndCommand"></el-button>
      <el-button class="button ZoomOut" @click="handleEndCommand"></el-button>

    </div>
  </template>
  
  <script setup>
  // 这里可以定义按钮点击事件的处理函数
  const handleNew = () => {
    // 新建逻辑
  };
  const handleOpen = () => {
    // 打开逻辑
  };
  const handleSave = () => {
    // 保存逻辑
  };
  const handlePrint = () => {
    // 打印逻辑
  };
  const handleEndCommand = () => {
    // 结束命令逻辑
  };
  </script>
  
  <style scoped>
  .toolbar-container {
    display: flex;
    align-items: center; /* 垂直居中 */
    height: 100%; /* 确保容器高度占满父元素 */
    background-color: #eeeeee;
  }
  
  .button {
    background-size: cover;
    background-position: center;
    width: 30px; /* 调整宽度以适应你的需求 */
    height: 30px; /* 调整高度以适应你的需求 */
    cursor: pointer;
    margin-right: -5px; /* 增加间距 */
  }
  
  .New {
    background-image: url('@/assets/New.png');
    margin-left: 10px;
  }
  
  .open {
    background-image: url('@/assets/open.png');
  }
  
  .Save {
    background-image: url('@/assets/Save.png');
  }
  
  .Print {
    background-image: url('@/assets/Print.png');
  }
  
  .EndCommand {
    background-image: url('@/assets/EndCommand.png');
  }
  .Delete {
    background-image: url('@/assets/Delete.png');
  }
  .Undo {
    background-image: url('@/assets/Undo.png');
  }
  .Redo {
    background-image: url('@/assets/Redo.png');
  }
  .ViewAll {
    background-image: url('@/assets/ViewAll.png');
  }
  .Zoom {
    background-image: url('@/assets/Zoom.png');
  }
  .ZoomIn {
    background-image: url('@/assets/ZoomIn.png');
  }
  .ZoomOut {
    background-image: url('@/assets/ZoomOut.png');
  }
  </style>