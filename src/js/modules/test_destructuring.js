export default class TestDestructuring {
  constructor() {
    this.objectTest = {
      item: '消しゴム',
      price: 100,
      variation: {
        red: '赤',
        blue: '青',
        yellow: '黄'
      }
    };
    this.arrayTest = [1, 2, 3, 4, 5, 6];
    this.arrayInObjectTest = [
      { name: 'AAA', age: 20 },
      { name: 'BBB', age: 30 },
      { name: 'CCC', age: 40 }
    ];
    this.objectInArrayTest = {
      items: ['えんぴつ', 'シャープペン', 'ボールペン']
    };
  }

  // オブジェクトの分割代入
  objectDestructuring() {
    const { item: aliasItem, price, variation } = this.objectTest;
    console.log(`${aliasItem}: ${price}円: ${variation.blue}色`);
  }

  // 関数の引数で分割代入(オブジェクト)
  objectDestructuringArgs() {
    const objectTest = this.objectTest;
    const argObjectFunc = ({ item, price, variation }, color) => {
      return `${item}: ${price}円: ${variation[color]}色`;
    };
    console.log(argObjectFunc(objectTest, 'blue'));
  }

  // 配列の分割代入
  arrayDestructuring() {
    const [a, b, c] = this.arrayTest;
    console.log(`${a}${b}${c}`);
  }

  // 関数の引数で分割代入(配列)
  arrayDestructuringArgs() {
    const arrayTest = this.arrayTest;
    const argArrayFunc = ([a, b, c, ...remainder]) => {
      return `${a}${b}${c}, 残り:${remainder}`;
    };
    console.log(argArrayFunc(arrayTest));
  }
  // 配列内のオブジェクトのpropartyにアクセス
  arrayInObject() {
    // 1つ目のオブジェクトの「name」「age」propartyにアクセス
    // const [{ name, age }] = this.arrayInObjectTest;
    // console.log(`${name}さん、${age}歳`);

    // 2つ目のオブジェクトの「name」「age」propartyにアクセス
    const [, { name, age }] = this.arrayInObjectTest;
    console.log(`${name}さん、${age}歳`);

    // ループ処理
    for (let { name: n, age: a } of this.arrayInObjectTest) {
      console.log(`Name:${n} Age:${a}`);
    }
  }

  objectInArray() {
    const {
      items: [one, two, three]
    } = this.objectInArrayTest;
    console.log(one, two, three);
  }

  useCaseArrayMap() {
    const points = [[7, 10], [50, 30], [12, 5]];
    const mappingPoints = points.map(([x, y]) => {
      return { x, y };
    });
    console.log(mappingPoints);
  }

  useCaseArrayFind() {
    const points = [[7, 114], [50, 30], [12, 10], [80, 100]];
    const findPoints = points.find(([x, y]) => {
      // xが3を超え、yが10を超える配列のみ抽出する（単一）
      return x >= 3 && y > 10;
    });
    console.log(findPoints);
  }

  useCaseArrayFilter() {
    const points = [[7, 114], [50, 30], [12, 10], [80, 100]];
    const filtedPoints = points.filter(([x, y]) => {
      // xが3を超え、yが10を超える配列のみ抽出する（複数）
      return x >= 3 && y > 10;
    });
    console.log(filtedPoints);
  }
}
