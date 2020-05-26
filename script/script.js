$(function () {
  let $scrollspy = $("#scrollspyer");

  $(".navbar-toggle").click(function (e) {
    if ($scrollspy.hasClass("open")) {
      $scrollspy.removeClass("open");
    } else {
      $scrollspy.addClass("open");
    }
  });

  $(window).resize(function (e) {
    if (window.innerWidth > 768) {
      $scrollspy.removeClass("open");
    }
  });

  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
});

// Vue实例 -----------------------------------------------------------------------------------------------

let options = {
  el: "#hookThisDemo",
  created: function () {
    console.log(this === options);
  },
};
let hookThisDemo = new Vue(options);

// 模板语法-----------------------------------------------------------------------------------------------

let app1 = new Vue({
  el: "#app-1",
  data: {
    msg: "Hello, Vue",
  },
});

let vTextDemo = new Vue({
  el: "#v-text-demo",
  data: {
    msg: "v-text demo",
  },
});

let vPreDemo = new Vue({
  el: "#v-pre-demo",
  data: {
    msg: "v-pre demo",
  },
});

let noVCloakDemo = new Vue({
  el: "#no-v-cloak-demo",
  data: {
    msg00000000: "without v-cloak",
  },
});

let withVCloakDemo = new Vue({
  el: "#with-v-cloak-demo",
  data: {
    msg11111111: "with v-cloak",
  },
});

let app2 = new Vue({
  el: "#app-2",
  data: {
    rawHtml: '<p style="color": red;>Red</p>',
  },
});

let app3 = new Vue({
  el: "#app-3",
  data: {
    rawHtml: '<p style="color: red;">Red</p>',
  },
});

let app4 = new Vue({
  el: "#app-4",
  data: {
    url: "https://cn.vuejs.org/",
  },
});

let app5 = new Vue({
  el: "#app-5",
  data: {
    number: 2,
  },
});

// 计算属性和侦听器 -----------------------------------------------------------------------------------------------

let app6 = new Vue({
  el: "#app-6",
  data: { message: "Vue" },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

let app7 = new Vue({
  el: "#app-7",
  data: { message: "Vue" },
  methods: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
});

let app8 = new Vue({
  el: "#app-8",
  data: {
    question: "",
    answer: "I cannot give you an answer until you ask a question!",
  },
  watch: {
    question: function (newQ, oldQ) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "questions usually contain a question mark";
        return;
      }
      this.answer = "Thinking......";
      let vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Error";
        });
    },
  },
});

// let app9 = new Vue({
//     el: "#app-9",
//     data: {
//         activeClass: {
//             active1: true,
//             active2: true,
//             active3: true
//         },
//         errorClass: {
//             error1: true,
//             error2: false,
//             error3: true
//         }
//     }
// });

// Class 与 Style绑定 -----------------------------------------------------------------------------------------

Vue.component("my-component", {
  template: '<p class="foo bar">Hi</p>',
});

// 条件渲染-----------------------------------------------------------------------------------------

let app10 = new Vue({
  el: "#app-10",
  data: {
    type: "A",
  },
});

let app11 = new Vue({
  el: "#app-11",
  data: {
    loginType: "username",
  },
});

let app12 = new Vue({
  el: "#app-12",
  data: {
    loginType: "username",
  },
});

// 列表渲染-----------------------------------------------------------------------------------------

let app13 = new Vue({
  el: "#app-13",
  data: {
    items: [
      { message: "Apple" },
      { message: "Banana" },
      { message: "Orrange" },
    ],
  },
  // methods: {
  //     items: function () {
  //         return [
  //             { message: "Apple" },
  //             { message: "Banana" },
  //             { message: "Orrange" }
  //         ]
  //     }
  // }

  // computed: {
  //     items: function () {
  //         return [
  //             { message: "Apple" },
  //             { message: "Banana" },
  //             { message: "Orrange" }
  //         ];
  //     }
  // }
});

let app14 = new Vue({
  el: "#app-14",
  data: {
    object: { foo: 1, bar: 2 },
  },
});

let app15 = new Vue({
  el: "#app-15",
  data: {
    items: [1, 1, 4, 5, 1, 4],
  },
});

let app16 = new Vue({
  el: "#app-16",
  data: {
    object: {
      a: 1,
      b: 2,
      c: 3,
    },
  },
});

let app17 = new Vue({
  el: "#app-17",
  data: {
    numbers: [0, 1, 2, 3, 4, 5],
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
});

let nestForDemo = new Vue({
  el: "#nest-for-demo",
  data: {
    sets: [
      [0, 1, 2, 3],
      [10, 11, 12, 13],
      [20, 21, 22, 23],
    ],
  },
  methods: {
    even(array) {
      return array.filter((n) => n % 2 === 0);
    },
  },
});

let templateForDemo = new Vue({
  el: "#template-for-demo",
  data: {
    items: [{ msg: "foo" }, { msg: "bar" }, { msg: "baz" }],
  },
});

let app18 = new Vue({
  el: "#app-18",
  data: {
    todos: [
      { taskname: "a", isComplete: false },
      { taskname: "b", isComplete: true },
      { taskname: "c", isComplete: false },
    ],
  },
});

// 事件处理 -------------------------------------------------------------------------------------------------
let app19 = new Vue({
  el: "#app-19",
  data: {
    counter: 0,
  },
});

let app20 = new Vue({
  el: "#app-20",
  methods: {
    enter: function () {
      console.log("enter key pressed");
    },
  },
});

let app21 = new Vue({
  el: "#app-21",
  methods: {
    copy: function () {
      console.log("ctrl + c pressed");
    },
  },
});

// 表单输入绑定 --------------------------------------------------------------------------------------------
let app22 = new Vue({
  el: "#app-22",
  data: {
    message: "",
  },
});

let app23 = new Vue({
  el: "#app-23",
  data: {
    message: "",
  },
});

let app24 = new Vue({
  el: "#app-24",
  data: {
    checked: false,
  },
});

let app25 = new Vue({
  el: "#app-25",
  data: {
    picked: [],
  },
});

let app26 = new Vue({
  el: "#app-26",
  data: {
    picked: "two",
  },
});

let app27 = new Vue({
  el: "#app-27",
  data: {
    selected: "",
  },
});

let app28 = new Vue({
  el: "#app-28",
  data: {
    selected: "one",
    options: [
      { text: "first", value: "one" },
      { text: "second", value: "two" },
      { text: "third", value: "three" },
    ],
  },
});

let radioDynamicBind = new Vue({
  el: "#radio-dynamic-bind",
  data: {
    picked: "",
    dynamicValueA: "foo",
    dynamicValueB: "bar",
  },
});

// 组件基础 ------------------------------------------------------------------------------------------

Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<button @click="count++">Clicked {{count}} times</button>',
});

let app30 = new Vue({
  el: "#app-30",
});

Vue.component("blog-post", {
  props: ["id", "title"],
  template: "<h5>blog id: {{id}}, blog title: {{title}}</h5>",
});

let app31 = new Vue({
  el: "#app-31",
  data: {
    posts: [
      { id: 1, title: "Vue" },
      { id: 2, title: "JQuery" },
      { id: 3, title: "React" },
    ],
  },
});

Vue.component("foo", {
  props: ["propobj"],
  template: "<h5>{{propobj.propA}}, {{propobj.propB}}</h5>",
});

let app32 = new Vue({
  el: "#app-32",
  data: {
    obj: {
      propA: "a",
      propB: "b",
    },
  },
});

Vue.component("demo", {
  template: `
        <button @click="$emit('greeting')">click</button>
    `,
});

let app33 = new Vue({
  el: "#app-33",
  methods: {
    sayHi() {
      alert("Hello, Vue");
    },
  },
});

Vue.component("demo2", {
  template: `
        <button @click="$emit('greeting', 'Hello, Vue')">
            click
        </button>
        `,
});

let app34 = new Vue({
  el: "#app-34",
  methods: {
    sayHi(message) {
      alert(message);
    },
  },
});

Vue.component("custom-input", {
  props: ["value"],
  template: `
        <input :value="value" 
               @input="$emit('input', $event.target.value)">
        `,
});

let customInputDemo = new Vue({
  el: "#custom-input-demo",
  data: {
    message: "",
  },
});

let ComponentA = { template: `<p>ComponentA</p>` };
let ComponentB = { template: `<p>ComponentB</p>` };

let app35 = new Vue({
  el: "#app-35",
  components: {
    "component-a": ComponentA,
    "component-b": ComponentB,
  },
});

// prop ---------------------------------------------------------------------------------------------
let propsDataDemo = new Vue({
  el: "#props-data-demo",
  props: ["propA", "propB"],
  propsData: {
    propA: "foo",
    propB: "bar",
  },
  template: `
    <p>{{ propA }} {{ propB }}</p>
  `,
});

Vue.component("child0", {
  props: ["childProp"],
  methods: {
    change() {
      this.childProp = Math.round(Math.random() * 100);
    },
  },
  template: `
        <div>
            <button type="button" 
                    @click="change">
                Change by child
            </button>
            Child: {{childProp}}
        </div>
    `,
});

let app36 = new Vue({
  el: "#app-36",
  data: {
    num: 0,
  },
  methods: {
    change() {
      this.num = Math.round(Math.random() * 100);
    },
  },
});

Vue.component("child1", {
  props: ["initialCounter"],
  data: function () {
    return {
      counter: this.initialCounter,
    };
  },
  template: `
        <div>
            <p>Child prop initialCounter : {{initialCounter}}</p>
            <button @click="counter++">Change local counter by child</button>
            <p>Child local counter : {{ counter }}</p>
        </div>
    `,
});

let app37 = new Vue({
  el: "#app-37",
  data: {
    initialCounter: 0,
  },
});

Vue.component("child2", {
  props: ["charset"],
  computed: {
    dataCharset: function () {
      return this.charset.trim().toLowerCase();
    },
  },
  template: `
                    <p>Computed dataCharset : {{dataCharset}}</p>
                `,
});

let app38 = new Vue({
  el: "#app-38",
});

Vue.component("app39", {
  props: {
    propA: Number,
    propB: [String, Date],
    propC: {
      type: Function,
      required: true,
    },
    propD: {
      type: [Object, Array],
      default: () => [1, 1, 4, 5, 1, 4],
    },
    propE: {
      type: Number,
      validator: (value) => value >= 0,
    },
  },
  template: `
        <div>
            <p>{{propA}}</p>
            <p>{{propB}}</p>
            <p>{{propC}}</p>
            <p>{{propD}}</p>
            <p>{{propE}}</p>
        </div>
    `,
});

let app39 = new Vue({
  el: "#app-39",
});

Vue.component("custom-link", {
  template: `
                <a>custom link</a>
            `,
});

let app40 = new Vue({
  el: "#app-40",
});

// 自定义事件 ------------------------------------------------------------

// Vue.component("base-checkbox", {
//     model: {
//         prop: 'checked',
//         event: "change"
//     },
//     props: {
//         checked: Boolean
//     },
//     template: `
//         <input type="checkbox"
//                :checked="checked"
//                @change="$emit('change', $event.target.checked)">
//     `
// })

// let app41 = new Vue({
//     el: "#app-41",
//     data: {
//         checked: false
//     }
// });

Vue.component("app42", {
  inheritAttrs: false,
  props: ["label", "value"],
  computed: {
    inputListeners: function () {
      let vm = this;

      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit("input", event.target.value);
        },
      });
    },
  },
  template: `
        <label>
            {{label}}
            <input
                v-bind="$attrs"
                :value="value"
                v-on="inputListeners"/>
            <p>Value : {{value}}</p>
        </label>
    `,
});

let app42 = new Vue({
  el: "#app-42",
  data: {
    message: "hello vue",
  },
  methods: {
    onChange: function (event) {
      console.log("on change : " + event);
    },
    onFocus: function (event) {
      console.log("on focus : " + event);
    },
    onInput: function (value) {
      console.log("on input : " + value);
    },
  },
});

Vue.component("child3", {
  props: {
    prop: Number,
  },
  methods: {
    click: function () {
      this.$emit("update:prop", Math.random());
    },
  },
  template: `
        <div>
            <p>child prop : {{prop}}</p>
            <button @click="click">sync change from child component</button>
        </div>
    `,
});

let app43 = new Vue({
  el: "#app-43",
  data: {
    prop: Math.random(),
  },
});

// 插槽 --------------------------------------------------------------------------------------------

Vue.component("app44", {
  props: ["prop"],
  template: `
        <p><slot>{{prop.a}}</slot></p>
    `,
});

let app44 = new Vue({
  el: "#app-44",
});

Vue.component("NamedSlotDemo", {
  template: `
    <div>
      <p>
        <slot></slot>
      </p>

      <p>
        <slot name="foo">{{ $slots.default[0].text }}</slot>
      </p>
    </div>
  `,
});

let namedSlotDemo = new Vue({
  el: "#named-slot-demo",
});

Vue.component("app45", {
  props: ["prop"],
  template: `
        <p><slot :prop="prop">{{prop.a}}</slot></p>
    `,
});

let app45 = new Vue({
  el: "#app-45",
});

let loneDefaultSlotDemo = new Vue({
  el: "#loneDefaultSlotDemo",
});

Vue.component("app46", {
  props: ["propA", "propB"],
  template: `
        <p><slot :slotPropA="propA" :slotPropB="propB"></slot></p>
    `,
});

let app46 = new Vue({
  el: "#app-46",
});

Vue.component("todo-list", {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredTodos: function () {
      return this.todos.filter((todo) => !todo.isComplete);
    },
  },
  template: `
        <ul>
            <li v-for="todo in filteredTodos"
                :key="todo.id">
                <slot name="todo" :todo="todo">
                    {{ todo.text }}
                </slot>
            </li>
        </ul>
    `,
});

let todoList = new Vue({
  el: "#todoList",
  data: {
    todos: [
      {
        id: 0,
        context: "learn vue",
        createdTime: "2020/1/1",
        isComplete: false,
      },
      {
        id: 1,
        context: "learn python",
        createdTime: "2020/2/30",
        isComplete: true,
      },
      {
        id: 2,
        context: "front end",
        createdTime: "2020/8/9",
        isComplete: false,
      },
      {
        id: 3,
        context: "back end",
        createdTime: "2020/4/15",
        isComplete: true,
      },
      {
        id: 4,
        context: "spring boot learning",
        createdTime: "2020/3/1",
        isComplete: false,
      },
    ],
  },
});

// 动态组件&异步组件 -----------------------------------------------------------------------------------------------

Vue.component("dynamicComponentA", {
  template: `
        <div>
            <ul class="nav nav-pills">
                <li><a href="#dynamicTab0" data-toggle="tab">First</a></li>
                <li><a href="#dynamicTab1" data-toggle="tab">Second</a></li>
                <li><a href="#dynamicTab2" data-toggle="tab">Third</a></li>
            </ul>
            <div class="tab-content">
                <p class="tab-pane" id="dynamicTab0">
                    content of the first tab 
                </p>
                <p class="tab-pane" id="dynamicTab1">
                    content of the second tab
                </p>
                <p class="tab-pane" id="dynamicTab2">
                    content of the third tab
                </p>
            </div>
        </div>
    `,
});

Vue.component("dynamicComponentB", {
  template: `
        <p>Dynamic component b</p>
    `,
});

let app47 = new Vue({
  el: "#app-47",
  data: {
    currentTabComponent: "",
  },
  template: `
    <div>
        <div class="btn-group">
            <button class="btn btn-default"
                    @click="currentTabComponent = 'dynamicComponentA'">Toggle a</button>

            <button class="btn btn-default"
                @click="currentTabComponent = 'dynamicComponentB'">Toggle b</button>
        </div>
        <component :is="currentTabComponent"></component>
    </div>
    `,
});

let app48 = new Vue({
  el: "#app-48",
  data: {
    currentTabComponent: "",
  },
  template: `
    <div>
        <div class="btn-group">
            <button class="btn btn-default"
                    @click="currentTabComponent = 'dynamicComponentA'">Toggle a</button>

            <button class="btn btn-default"
                @click="currentTabComponent = 'dynamicComponentB'">Toggle b</button>
        </div>
        <keep-alive>
            <component :is="currentTabComponent"></component>
        </keep-alive>
    </div>
    `,
});

Vue.component("async-component", function (resolve, reject) {
  setTimeout(function () {
    resolve(
      {
        template: "<p>async component</p>",
      },
      5000
    );
  });
});

// 边界情况 ------------------------------------------------------------------------------------

Vue.component("app49-child", {
  template: `
        <p> foo: {{$root.foo}}, bar: {{$root.bar}}, baz: {{$root.baz()}}</p>
    `,
});

let app49 = new Vue({
  el: "#app-49",
  data: {
    foo: 1,
  },
  computed: {
    bar: function () {
      return this.foo * 2;
    },
  },
  methods: {
    baz: function () {
      return this.bar * 2;
    },
  },
});

Vue.component("app50-child", {
  template: `<li>app50-child</li>`,
});

let app50 = new Vue({
  el: "#app-50",
  data: {
    items: ["item0", "item1", "item2", "item3"],
    listItemRef: "",
    childComponentRef: "",
  },
  mounted: function () {
    this.listItemRef = this.$refs["list-item"].toString();
    this.childComponentRef = this.$refs.childComponent.toString();
  },
});

Vue.component("inline-tmp-comp", {
  data: function () {
    return {
      a: 1,
      b: 2,
    };
  },
});

let inlineTmpDemo = new Vue({
  el: "#inline-tmp-demo",
});

Vue.component("hello-world", {
  template: "#hello-world-template",
});

let helloWorldApp = new Vue({
  el: "#hello-world-app",
});

// 过渡&动画 -------------------------------------------------------------------------------------------

let app51 = new Vue({
  el: "#app-51",
  data: {
    show: true,
  },
});

let app52 = new Vue({
  el: "#app-52",
  data: {
    show: true,
  },
});

let app53 = new Vue({
  el: "#app-53",
  data: {
    show: true,
  },
});

let app54 = new Vue({
  el: "#app-54",
  data: {
    items: [1, 1, 4, 5, 1, 4],
  },
  methods: {
    add: function () {
      this.items.push(Math.round(Math.random() * 100));
    },

    del: function () {
      this.items.pop();
    },
  },
});

Vue.component("trans-comp-a", {
  template: `
        <p>transition component a</p>
    `,
});

Vue.component("trans-comp-b", {
  template: `
        <p>transition component b</p>
    `,
});

let app55 = new Vue({
  el: "#app-55",
  data: {
    currentComp: "",
  },
});

let app56 = new Vue({
  el: "#app-56",
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  },
  methods: {
    randomIndex() {
      return Math.round(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
  },
});

let app57 = new Vue({
  el: "#app-57",
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  },
  methods: {
    randomIndex() {
      return Math.round(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
  },
});

// let straggerListDemo = new Vue({
//     el: "#stragger-list-demo",
//     data: {
//         query: '',
//         list: [
//             {msg: 'Bruce Lee'},
//             {msg: 'Jackie Chan'},
//             {msg: 'Chunck Norris'},
//             {msg: 'Jet Li'},
//             {msg: 'Kung Fury'}
//         ]
//     },
//     computed: {
//         computedList: function () {
//             let vm = this;
//             return this.list.filter ( item => item.msg.toLowerCase().indexOf( vm.query.toLowerCase() ) !== -1);
//         }
//     },
//     methods: {
//         beforeEnter: function (el) {
//             el.style.opacity = 0;
//             el.style.heigth = 0;
//         },
//         enter: function (el, done) {
//             let delay = el.dataset.index * 150;
//             setTimeout(function () {
//                 Velocity(el, {
//                     opacity: 1,
//                     heigth: '1.6em'
//                 }, delay)
//             })
//         },
//         leave: function (el, done) {
//             let delay = el.dataset.index * 150;
//             setTimeout(function () {
//                 Velocity(el, {
//                     opacity: 0,
//                     heigth: 0
//                 }, delay)
//             })
//         }
//     }
// })

// Vue.directive('focus', {
//     inserted: function (el) {
//         el.focus()
//     }
// })

// 自定义指令 ----------------------------------------------------------------------------------------------------

Vue.directive("demo", {
  bind: function (el, binding, vnode) {
    let s = JSON.stringify;

    el.innerHTML =
      "<strong>name:</strong> " +
      s(binding.name) +
      "<br><br>" +
      "<strong>value</strong>: " +
      s(binding.value) +
      "<br><br>" +
      "<strong>expression</strong>: " +
      s(binding.expression) +
      "<br><br>" +
      "<strong>argument</strong>: " +
      s(binding.arg) +
      "<br><br>" +
      "<strong>modifiers</strong>: " +
      s(binding.modifiers) +
      "<br><br>" +
      "<strong>vnode keys</strong>: " +
      Object.keys(vnode).join(", ");
  },
});

let hookArgDemo = new Vue({
  el: "#hook-arg-demo",
  data: {
    message: "foo",
  },
});

// 渲染函数 & JSX --------------------------------------------------------------------------------------------
Vue.component("anchored-heading-v1", {
  template: "#anchored-heading-template",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
let anchoredHeadingV1Demo = new Vue({
  el: "#anchored-heading-v1-demo",
});

Vue.component("anchored-heading-v2", {
  render: function (createElement) {
    return createElement(
      "h" + this.level, // 标签名
      this.$slots.default // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
let anchoredHeadingV2Demo = new Vue({
  el: "#anchored-heading-v2-demo",
});

let getChildrenTextContent = function (children) {
  return children
    .map(function (node) {
      return node.children ? getChildrenTextContent(node.children) : node.text;
    })
    .join("");
};

Vue.component("anchored-heading", {
  render: function (createNodeDescription) {
    // 创建 kebab-case 风格id
    let headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^-|-$)/g, "");

    return createNodeDescription("h" + this.level, [
      createNodeDescription(
        "a",
        {
          attrs: {
            name: headingId,
            href: "#" + headingId,
          },
        },
        this.$slots.default
      ),
    ]);
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
let anchoredHeadingDemo = new Vue({
  el: "#anchored-heading-demo",
});

let templateVersionList = new Vue({
  el: "#templateVersionList",
  data: {
    items: [0, 1, 2, 3],
  },
});

Vue.component("renderVersionList", {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  render: function (createElement) {
    if (this.items.length) {
      return createElement(
        "ul",
        this.items.map(function (item) {
          return createElement("li", item);
        })
      );
    } else {
      return createElement("p", "No items left");
    }
  },
});
let renderVersionList = new Vue({
  el: "#renderVersionList",
  data: {
    items: [0, 1, 2, 3],
  },
  template: `
        <render-version-list :items="items"></render-version-list>
    `,
});

Vue.component("render-input", {
  props: ["value"],
  render: function (createElement) {
    let self = this;
    return createElement("input", {
      domProps: {
        value: this.value,
      },
      on: {
        input: function (event) {
          self.$emit("input", event.target.value);
        },
      },
    });
  },
});
let renderInputDemo = new Vue({
  el: "#render-input-demo",
  data: {
    msg: "",
  },
});

Vue.component('render-slot', {
  render: function (createElement) {
    return createElement(
      'p',
      this.$slots.foo
    )
  }
});
let renderSlotDemo = new Vue({
  el: "#render-slot-demo"
})

Vue.component("render-scopedslot", {
  props: ["propA", "propB"],
  render: function (createElement) {
    return createElement(
      "p",
      this.$scopedSlots.foo({
        slotPropA: this.propA,
        slotPropB: this.propB,
      })
    );
  },
});
let renderScopedSlotDemo = new Vue({
  el: "#render-scopedslot-demo"
})

// 过滤器 ------------------------------------------------------------------------------------------------
let filterDemo = new Vue({
  el: "#filter-demo",
  data: {
    msg: "",
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
});
