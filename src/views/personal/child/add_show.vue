<template>
  <div class="user-center">
    <div class="pull-right bgf">
      <div class="user-center__content">
        <div class="head-box">了解紫云英</div>
        <div class="html-code" v-html="content">

        </div>
      </div>
    </div>
  </div>
</template>


紫云英（学名：Astragalus sinicus L.），是豆科黄芪属的一年生或越年生草本； [7]根肥大，须根发达；茎淡绿色或淡紫红色，柔嫩中空；叶片为奇数羽状复叶，绿或淡绿色；花为伞形花序，
花色由淡紫红到紫红色，偶有白色；荚果细长，断面呈三角形；种子呈肾状，有光泽，黄绿色； [8]花期2-4月；果期3-5月。 [9]
紫云英原产中国，在秦岭、淮河至五岭的广大地区及西南高原均有野生种分布，栽培种主要分布于中国长江流域和长江以南各省。
紫云英不耐寒也不耐热，喜湿润，又忌积水，遇积水易烂苗或生长不良；耐旱性差。紫云英喜壤土或粘壤土，亦适应无石灰性冲积土；不耐瘠薄，较耐酸。 [10]紫云英的繁殖方式是种子繁殖。 [11]
根据《本草纲目》记载：“紫云英味微辛、微甘，性平，可祛风明目，健脾益气，解毒止痛。根用于治疗肝炎，营养性浮肿；
全草可用于急性结膜炎，神经痛，带状疱疹，疮疖痈肿，痔疮。” [12]紫云英全株含毒, 晒干的秸秆仍含有毒；牲畜一次采食过多会发生急性中毒, 若经常少量食入也会出现蓄积性慢性中毒。 [13]
紫云英是中国重要的绿肥作物，可以提供全面的营养元素特别是氮素养分，培养地力、改良土壤。

<script>
  export default {
    data() {
      return {
        content:"<h3>了解紫云英</h3>\n" +
          "<blockquote><ul>\n" +
          "<li>紫云英（学名：Astragalus sinicus L.），是豆科黄芪属的一年生或越年生草本；根肥大，须根发达；茎淡绿色或淡紫红色，柔嫩中空；叶片为奇数羽状复叶，绿或淡绿色；花为伞形花序，\n" +
          "花色由淡紫红到紫红色，偶有白色；荚果细长，断面呈三角形；种子呈肾状，有光泽，黄绿色；花期2-4月；果期3-5月。</li>\n" +
          "<li>紫云英原产中国，在秦岭、淮河至五岭的广大地区及西南高原均有野生种分布，栽培种主要分布于中国长江流域和长江以南各省。</li>\n" +
          "<li>紫云英不耐寒也不耐热，喜湿润，又忌积水，遇积水易烂苗或生长不良；耐旱性差。紫云英喜壤土或粘壤土，亦适应无石灰性冲积土；不耐瘠薄，较耐酸。紫云英的繁殖方式是种子繁殖。</li>\n" +
          "<li>根据《本草纲目》记载：“紫云英味微辛、微甘，性平，可祛风明目，健脾益气，解毒止痛。根用于治疗肝炎，营养性浮肿；</li>\n" +
          "<li>全草可用于急性结膜炎，神经痛，带状疱疹，疮疖痈肿，痔疮。” 紫云英全株含毒, 晒干的秸秆仍含有毒；牲畜一次采食过多会发生急性中毒, 若经常少量食入也会出现蓄积性慢性中毒。</li>\n" +
          "<li>紫云英是中国重要的绿肥作物，可以提供全面的营养元素特别是氮素养分，培养地力、改良土壤。</li>\n" +
          "</ul></blockquote>"
      };
    },
    mounted() {
    },
    methods: {
    }
  };
</script>

<style >
  .user-center > .pull-right {
    width: 950px;
    background-color: #fff;
    font-size: 14px;
  }
  .pull-right {
    float: right !important;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  .user-center__content {
    padding: 10px 24px;
  }
  .user-center__content > .head-box {
    color: #666;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
  }
  .message-box > .html-code, .user-center__content > .html-code {
    margin: 0 -10px;
  }
  .html-code {
    padding: 10px;
    width: 100%;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }
  ol, ul {
    list-style: none;
  }
  h3, .h3 {
    font-size: 24px;
  }
  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  p {
    margin: 0 0 10px;
  }
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  blockquote, q {
    quotes: none;
  }
  :link, :visited, ins {
    text-decoration: none;
  }
  a {
    color: #97191d;
    text-decoration: none;
  }
</style>
