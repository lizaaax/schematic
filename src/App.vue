<template>
  <div id="app">
    <!-- 菜单栏 -->
    <div id="menu-bar">
      <MenuBar />
      <!-- 菜单栏内容 -->
    </div>
    
    <!-- 工具栏 -->
    <div id="tool-bar">
      <!-- 工具栏内容 -->
    </div>
    
    <!-- 主内容区 -->
    <div id="main-content" style="display: flex;">
      <!-- 左侧边栏 -->
      <div id="sidebar">
        <leftSideBar></leftSideBar>
      </div>
      
      <!-- 工作区 -->
      <div ref="canvasContainer" id="draw2d" ></div>
      
      <!-- 右侧边栏 -->
      <div id="right-sidebar">
        <!-- 右侧边栏内容 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted} from 'vue';
import draw2d from 'draw2d';
import $ from 'jquery';

console.log(draw2d)
//const imagePath = require('@/assets/res.ico');
import imagePath from '@/assets/logo.png';
import MenuBar from './components/MenuBar.vue';
import leftSideBar from './components/leftSideBar.vue';


// $.fn.draggable = () => {}
// $.fn.droppable = () => {}
const MyImageShape = draw2d.shape.basic.Image.extend({
  init: function(attr, setter, getter) {
    this._super(
      $.extend(
        {
          width: 50,
          height: 50,
          path: imagePath,
        },
        attr
      ),
      setter,
      getter
    );
    // 安装拖动编辑策略
    this.installEditPolicy(new draw2d.policy.figure.DragDropEditPolicy());
        // Add ports
    this.createPort("input", new draw2d.layout.locator.LeftLocator());
    this.createPort("output", new draw2d.layout.locator.RightLocator());

  },
  
  
});

const createConnection = (sourcePort, targetPort) => {
  console.log('createConnection')
  const router = new draw2d.layout.connection.CircuitConnectionRouter();
  router.abortRoutingOnFirstVertexNode = false;

  const connection = new draw2d.Connection({
    outlineColor: "#ffffff",
    outlineStroke: 1,
    color: "#000000",
    router: router,
    stroke: 1,
    radius: 2
  });

  if (sourcePort) {
    connection.setSource(sourcePort);
    connection.setTarget(targetPort);
  }

  return connection;
};

onMounted(() => {

    const canvas = new draw2d.Canvas('draw2d');
    const container = document.getElementById('draw2d')
    var width = container.clientWidth;
var height = container.clientHeight;

    canvas.setDimension(width, height);

    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy());
    canvas.installEditPolicy(new draw2d.policy.canvas.FadeoutDecorationPolicy());

    canvas.installEditPolicy(new draw2d.policy.connection.ComposedConnectionCreatePolicy([
      new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection: createConnection
      }),
      new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
        createConnection: createConnection
      })
    ]));

    const amp = new draw2d.shape.analog.OpAmp();
    canvas.add(amp, 90, 50);
  console.log(amp)
    const bridge = new draw2d.shape.analog.ResistorBridge();
    canvas.add(bridge, 90, 150);

    const voltage = new draw2d.shape.analog.VoltageSupplyHorizontal();
    canvas.add(voltage, 230, 110);

    const voltage2 = new draw2d.shape.analog.VoltageSupplyVertical();
    canvas.add(voltage2, 20, 350);
    canvas.add(new draw2d.shape.basic.Label({ text: "draw2d.shape.analog.VoltageSupplyVertical" }), 200, 355);

    const resistor = new draw2d.shape.analog.ResistorVertical();
    canvas.add(resistor, 50, 450);
    canvas.add(new draw2d.shape.basic.Label({ text: "draw2d.shape.analog.ResistorVertical" }), 200, 455);

    const fulcrum = new draw2d.shape.node.Fulcrum();
    canvas.add(fulcrum, 280, 270);

    canvas.add(createConnection(amp.getInputPort(0), bridge.getHybridPort(2)));
    canvas.add(createConnection(voltage.getHybridPort(0), bridge.getHybridPort(1)));
    canvas.add(createConnection(voltage2.getHybridPort(1), voltage.getHybridPort(0)));
    canvas.add(createConnection(fulcrum.getHybridPort(0), amp.getOutputPort(0)));


      const res = new MyImageShape();
    canvas.add(res, 200, 200);
    canvas.add(createConnection(res.getInputPort(0), amp.getOutputPort(0)));

   $('.shape').draggable({
    helper: 'clone',  //当开始拖动时，它创建元素的克隆。这意味着实际的元素不会被移动，只有它的副本在拖动
    containment: 'document',//限制拖动操作在整个文档范围内（即整个页面内）。
    stop: function(event, ui) {
      const type = $(this).data('type'); //jQuery 提供了一种简便的方法来访问和管理 data-* 属性，通过 .data() 方法实现
      let shape;

      switch (type) {
        case 'OpAmp':
          shape = new draw2d.shape.analog.OpAmp();
          break;
        case 'ResistorBridge':
          shape = new draw2d.shape.analog.ResistorBridge();
          break;
        case 'VoltageSupply':
          shape = new draw2d.shape.analog.VoltageSupplyHorizontal();
          break;
        // 添加其他形状
      }

      if (shape) {
        const canvasOffset = $('#draw2d').offset();
        const x = ui.offset.left - canvasOffset.left;
        const y = ui.offset.top - canvasOffset.top;
        
        canvas.add(shape, x, y);
      }
    }
  });


});

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

#menu-bar {
  height: 20px;
  background-color: #333;
  color: white;
}

#tool-bar {
  height: 20px;
  background-color: #444;
  color: white;
}

#main-content {
  width: 100%;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
}

#sidebar {
  width: 9%;
  background-color: #ddd;
}

#draw2d {
  width: 77%;
  flex-grow: 1;
  margin: 0!important;
  overflow: hidden;
  position: relative;
}

#right-sidebar {
  width: 14%;
  background-color: #ddd;
}
</style>