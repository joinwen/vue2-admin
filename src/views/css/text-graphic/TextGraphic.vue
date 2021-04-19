<template>
  <div class="Text-Graphic">
    <bread-crumb />
    <el-collapse v-model="activeNames">
      <el-collapse-item title="1. 浮动" name="1">
        <div class="m-b-1">
          <span class="text-underline block">图文——顶部对齐</span>
          <figure class="float-1 clearfix p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>
      </el-collapse-item>
      <el-collapse-item title="2. inline-flex" name="2">
        <div class="m-b-1">
          <span class="text-underline block">图文——顶部对齐</span>
          <figure class="flex-1 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>
        <div class="m-b-1">
          <span class="text-underline block">图文——底部对齐</span>
          <figure class="flex-2 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <div>
              <span>
                我曾拥有一段时光 在那段时光里
                我能用我贫瘠的词语描绘出每一分每一秒
                我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
                就像一个故事刚刚有了开篇就戛然而止
                我花费了很多时间尝试着开启新的故事 但没有成功
                我开始恐惧那种只能用“很多年过去了”来形容的生命
                就算再索然无味的故事也要有一个结局 现在我很欣慰
                因为这个不为人知的故事 终于完整了
                <br />
                <br />
                <span class="float-r tx-right">
                  2021-04-17
                  <br />
                  杨邵
                </span>
              </span>
            </div>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">图文——中间对齐</span>
          <figure class="flex-3 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <div>
              <span>
                我曾拥有一段时光 在那段时光里
                我能用我贫瘠的词语描绘出每一分每一秒
                我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
                就像一个故事刚刚有了开篇就戛然而止
                我花费了很多时间尝试着开启新的故事 但没有成功
                我开始恐惧那种只能用“很多年过去了”来形容的生命
                就算再索然无味的故事也要有一个结局 现在我很欣慰
                因为这个不为人知的故事 终于完整了
                <br />
                <br />
                <span class="float-r tx-right">
                  2021-04-17
                  <br />
                  杨邵
                </span>
              </span>
            </div>
          </figure>
        </div>
      </el-collapse-item>
      <el-collapse-item title="3. table" name="3">
        <div class="m-b-1">
          <span class="text-underline block">图文——顶部对齐</span>
          <figure class="table-1 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">图文——底部对齐</span>
          <figure class="table-2 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">图文——中间对齐</span>
          <figure class="table-3 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>
      </el-collapse-item>
      <el-collapse-item title="4. position" name="4">
        <div class="m-b-1">
          <span class="text-underline block">图文——顶部对齐</span>
          <figure class="position-1 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>
        <div class="m-b-1">
          <span class="text-underline block">图文——底部对齐</span>
          <figure class="position-2 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">图文——中间对齐</span>
          <figure class="position-3 p-1 shadow-light rounded-8">
            <img :src="require('@/assets/images/css/text-graphic/img-4.jpg')" />
            <span>
              我曾拥有一段时光 在那段时光里 我能用我贫瘠的词语描绘出每一分每一秒
              我能用我枯竭的心灵记住所有的细节 但这段时光很短暂
              就像一个故事刚刚有了开篇就戛然而止
              我花费了很多时间尝试着开启新的故事 但没有成功
              我开始恐惧那种只能用“很多年过去了”来形容的生命
              就算再索然无味的故事也要有一个结局 现在我很欣慰
              因为这个不为人知的故事 终于完整了
              <br />
              <br />
              <span class="float-r tx-right">
                2021-04-17
                <br />
                杨邵
              </span>
            </span>
          </figure>
        </div>
      </el-collapse-item>
      <el-collapse-item title="5. inline-block" name="5">
        <div class="m-b-1">
          <span class="text-underline block">baseline 对齐</span>
          <figure class="inline-block-1 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">bottom 对齐</span>
          <figure class="inline-block-2 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">text-bottom 对齐</span>
          <figure class="inline-block-3 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>
        <div class="m-b-1">
          <span class="text-underline block">middle 对齐</span>
          <figure class="inline-block-4 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>
        <div class="m-b-1">
          <span class="text-underline block">text-top 对齐</span>
          <figure class="inline-block-5 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>
        <div class="m-b-1">
          <span class="text-underline block">top 对齐</span>
          <figure class="inline-block-6 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">中间 对齐</span>
          <figure class="inline-block-7 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>

        <div class="m-b-1">
          <span class="text-underline block">底部 对齐</span>
          <figure class="inline-block-8 p-1 shadow-light">
            <div class="inline-block">
              <img
                :src="require('@/assets/images/css/text-graphic/img-6.jpg')"
              />
            </div>
            <span class="p-x-1"> 雨来细细复疏疏，纵不能多不肯无。 </span>
          </figure>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
export default {
  name: "TextGraphic",
  components: { BreadCrumb },
  data() {
    return {
      activeNames: "1",
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.float-1 {
  img {
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 1em;
  }
  span {
    line-height: 2;
  }
}

.flex-1 {
  display: inline-flex;
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  & > span {
    line-height: 2;
  }
}

.flex-2 {
  display: inline-flex;
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  div {
    display: inline-flex;
    align-items: flex-end;
  }
  span {
    line-height: 2;
  }
}

.flex-3 {
  display: inline-flex;
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  div {
    display: inline-flex;
    align-items: center;
  }
  span {
    line-height: 2;
  }
}

.table-1 {
  display: table;
  img {
    display: table-cell;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    display: table-cell;
    vertical-align: top;
    line-height: 2;
  }
}

.table-2 {
  display: table;
  img {
    display: table-cell;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    display: table-cell;
    line-height: 2;
    vertical-align: bottom;
  }
}

.table-3 {
  display: table;
  img {
    display: table-cell;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    display: table-cell;
    line-height: 2;
    vertical-align: middle;
  }
}

.position-1 {
  position: relative;
  height: 200px;
  img {
    position: absolute;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  & > span {
    position: absolute;
    left: calc(200px + 2em);
    right: 1em;
    line-height: 2;
  }
}

.position-2 {
  position: relative;
  height: 200px;
  img {
    position: absolute;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  & > span {
    position: absolute;
    left: calc(200px + 2em);
    right: 1em;
    line-height: 2;
    bottom: 1em;
  }
}

.position-3 {
  position: relative;
  height: 200px;
  img {
    position: absolute;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  & > span {
    position: absolute;
    left: calc(200px + 2em);
    right: 1em;
    line-height: 2;
    top: 50%;
    transform: translateY(-50%);
  }
}

.inline-block-1 {
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: baseline;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
  }
}

.inline-block-2 {
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: bottom;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
  }
}

.inline-block-3 {
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: text-bottom;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
  }
}

.inline-block-4 {
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: middle;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
  }
}

.inline-block-5 {
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: text-top;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
  }
}

.inline-block-6 {
  div {
    background: linear-gradient(#d7e0cf, #d7e0cf) top/100% 2px no-repeat,
      transparent;
  }
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: top;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
    background: linear-gradient(black, black) top/100% 2px no-repeat, #d7e0cf;
  }
}

.inline-block-7 {
  div {
    background: linear-gradient(#d7e0cf, #d7e0cf) center/100% 2px no-repeat,
      transparent;
  }
  img {
    vertical-align: middle;
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: middle;
    line-height: 2;
    display: inline-block;
    background: linear-gradient(black, black) center/100% 2px no-repeat, #d7e0cf;
  }
}

.inline-block-8 {
  div {
    background: linear-gradient(#d7e0cf, #d7e0cf) center bottom/100% 2px
        no-repeat,
      transparent;
  }
  line-height: 0;
  img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
  }
  span {
    vertical-align: bottom;
    line-height: 2;
    display: inline-block;
    background: #d7e0cf;
    background: linear-gradient(black, black) center bottom/100% 2px no-repeat,
      #d7e0cf;
  }
}
</style>
