<template>
  <div id="menu-bar">
    <ul>
      <li @mouseover="showFileMenu = true" @mouseleave="showFileMenu = false">
        File
        <ul v-if="showFileMenu" class="dropdown">
          <li >Import</li>
          <li @click="importPDKLibrary">Import PDK Library</li>
          <li @click="save">Save</li>
          <li @click="saveAs">Save As</li>
        </ul>
      </li>
      <li>Edit</li>
      <li>View</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showFileMenu = ref(false);



const importPDKLibrary = () => {
  console.log('Import PDK Library clicked');
  // 这里可以添加导入 PDK 库的逻辑
};

const save = () => {
  console.log('Save clicked');
  // 这里可以添加保存逻辑
};

const saveAs = () => {
  console.log('Save As clicked');
  // 这里可以添加另存为逻辑
};
</script>

<style scoped>
#menu-bar {
    width: 100%;
  background-color: #333;
  color: white;
}

#menu-bar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#menu-bar li {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

#menu-bar .dropdown {
  position: absolute;
  background-color: #444;
  min-width: 100px;
  z-index: 1;
}

#menu-bar .dropdown li {
  display: block;
  color: white;
}

#menu-bar .dropdown li:hover {
  background-color: #555;
}
</style>