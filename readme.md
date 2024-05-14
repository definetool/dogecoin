
# dogecoin
------------------------------------------------

本工具用来随机生成狗狗币的私钥、地址和助记词，生成过程可断网离线操作。


``` js


import generate from '@definetool/dogecoin';


let data = await generate('my message');

console.log(data);

//打印出类似这样结构：
{
  address: 'DDqipiW34cJVge3FVGmvbnzZkDT5f4KHCg',
  privateKey: 'QVzxUTKDRaSyRYqXbn9VTdezutXGYXZawQ1gwgUusbYYmESsSCwh',
  mnemonic: 'corn capital jazz large ability trade indicate peasant injury biology disorder joy'
}


```