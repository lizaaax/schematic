//定义引脚的类
class Pin {
    constructor(pinId, number, name, functionDesc) {
      this.pinId = pinId;
      this.number = number;
      this.name = name;
      this.functionDesc = functionDesc;
    }
  }
  //定义器件参数的类
  class Parameter {
    constructor(parameterId, name, type, value, unit) {
      this.parameterId = parameterId;
      this.name = name;
      this.type = type;
      this.value = value;
      this.unit = unit;
    }
  }
  
  class Netlist {
    constructor(netlistId, netlist) {
      this.netlistId = netlistId;
      this.netlist = netlist; // This should be an array of component identifiers or objects
    }
  }
  //定义器件的类
  class Component {
    constructor(componentId, name, PDK, description, type, pins, parameters, imageUrl, netlist) {
      this.componentId = componentId; // 元器件的唯一标识符
      this.name = name; // 元器件的名称
      this.PDK = PDK; // 元器件的PDK信息
      this.description = description; // 元器件的描述
      this.type = type; // 元器件的类型
      this.pins = pins; // 引脚数组，每个引脚是一个Pin对象
      this.parameters = parameters; // 参数数组，每个参数是一个Parameter对象
      this.imageUrl = imageUrl; // 元器件的图像URL
      this.netlist = netlist; // 网络表信息对象
      this.instanceId = null; // 元器件实例的唯一标识符，用于区分相同的元器件
    }
  
    // 设置元器件实例的ID
    setInstanceId(instanceId) {
      this.instanceId = instanceId;
    }
  }
  // Example usage:
  const pins = [
    new Pin('PIN1', 1, 'Pin 1', 'Input'),
    new Pin('PIN2', 2, 'Pin 2', 'Output')
  ];
  
  const parameters = [
    new Parameter('PAR1', 'W', 'number', 1000, 'um'),
    new Parameter('PAR2', 'L', 'number', 0.000001, 'um')
  ];
  
  const netlist = new Netlist(
    'NET1',
    'define end'
  );
  
  const component = new Component(
    'CMP1',
    'Resistor',
    'PDK1',
    'A simple resistor component',
    'Resistor',
    pins,
    parameters,
    'http://example.com/image.png',
    netlist
  );