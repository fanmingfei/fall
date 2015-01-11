#fall.js 简单到瀑布流效果
  
    //四个参数 第一个是最外层的class或者id，第二个是上下间隔 第三个是 左右间隔 最后一个是列数
    
    // 需要排列的必须以fall-item 为class fall-item保持独立 不要影响fall-item的布局
    
    var mf = new MakeFall('.fall-container', 10, 10, 3);
    
    //可以设置两个参数 开始的fall-item索引和结束的索引 留空是全部的fall-item
    
    mf.setItem()
