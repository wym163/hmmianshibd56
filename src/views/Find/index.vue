<template>
  <div class="find">
    <!-- 导航栏 -->
    <navbar :showBack="false" title="发现"></navbar>
    <!-- 面试技巧区域 -->
    <div class="skill">
      <!-- 列表项 -->
      <MMcell title="面试技巧" value="查看更多"></MMcell>
      <div class="list">
        <!-- 有图片 -->
        <div class="item">
          <div class="left">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              voluptate laudantium excepturi provident cumque accusantium
              molestias natus fugit eius atque numquam laborum omnis, tempora
              velit incidunt nesciunt nisi, perferendis quis.
            </h3>
            <div class="detail-box">
              <div class="time">2020-8-1</div>
              <div class="read">
                <i class="iconfont iconicon_liulanliang">
                  12
                </i>
              </div>
              <div class="star">
                <i class="iconfont iconicon_dianzanliang">
                  31
                </i>
              </div>
            </div>
          </div>
          <div class="cover">
            <img src="../../assets/logo.png" alt="" />
          </div>
        </div>
        <!-- 没有图片 -->
        <div class="item">
          <div class="left">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              voluptate laudantium excepturi provident cumque accusantium
              molestias natus fugit eius atque numquam laborum omnis, tempora
              velit incidunt nesciunt nisi, perferendis quis.
            </h3>
            <div class="detail-box">
              <div class="time">2020-8-1</div>
              <div class="read">
                <i class="iconfont iconicon_liulanliang">
                  12
                </i>
              </div>
              <div class="star">
                <i class="iconfont iconicon_dianzanliang">
                  31
                </i>
              </div>
            </div>
          </div>
          <div class="cover"></div>
        </div>
      </div>
    </div>
    <!-- 市场数据区域 -->
    <div class="market-data">
      <MMcell title="市场数据" value="查看更多"></MMcell>
      <div class="content">
        <div class="tags">
          <span class="tag">
            深圳
          </span>
          <span class="tag">
            前端开发工程师
          </span>
        </div>
        <!-- 列表 -->
        <div class="data-list">
          <!-- 上箭头 -->
          <div class="item">
            <div class="time">2020年</div>
            <div class="process">
              <div class="step">
                ￥12323
              </div>
            </div>
            <div class="arrow-box">
              <i class="iconfont iconicon_shangsheng"></i>
              10%
            </div>
          </div>
          <!-- 下箭头 -->
          <div class="item">
            <div class="time">2020年</div>
            <div class="process">
              <div class="step">
                ￥12323
              </div>
            </div>
            <div class="arrow-box">
              <i class="iconfont iconicon_xiajiang"></i>
              10%
            </div>
          </div>
        </div>
        <!-- 更多 -->
        <div class="more">
          展开更多
          <i class="iconfont iconicon_zhankai"></i>
        </div>
      </div>
    </div>
    <!-- 面经分享 -->
    <div class="share-container">
      <MMcell title="面经分享" value="查看更多"></MMcell>
      <div class="share-content">
        <div class="list">
          <div class="item">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eius dolorum doloremque omnis quae, et nam consectetur,
              ratione eveniet magni, cupiditate labore? Sunt numquam dolor optio
              aut placeat praesentium facilis!
            </h3>
            <div class="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum
              autem ea? Ab repudiandae itaque error nam? Tenetur mollitia
              adipisci harum voluptatum beatae earum. Quisquam reiciendis
              quaerat ullam autem at.
            </div>
            <div class="detail-box">
              <div class="user">
                <img src="../../assets/logo.png" alt="" />
                三大件好事
              </div>
              <div class="time">
                2020-8-1
              </div>
              <div class="comment">
                <i class="iconfont iconicon_pinglunliang"></i>
                123
              </div>
              <div class="star">
                <i class="iconfont iconicon_dianzanliang"></i>
                1231
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find'
}
</script>

<style lang="less">
.find {
  // 全部设置左侧标题
  .van-cell__title span {
    font-size: 16px;
    font-weight: 600;
  }

  // 面试技巧
  .skill {
    margin-bottom: 10px;
    .list {
      padding: 0 15px;
      background: @white-color;
      .item {
        display: flex;
        align-items: center;
        .left {
          flex: 1;
          h3 {
            font-size: 14px;
            font-weight: 600;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .detail-box {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: @minor-font-color;
            .time {
              flex: 1;
            }
            .read {
              margin-right: 20px;
              display: flex;
              align-items: center;
              i {
                margin-right: 10px;
                font-size: 14px;
              }
            }
            .star {
              display: flex;
              align-items: center;
              i {
                margin-right: 10px;
                font-size: 14px;
              }
            }
          }
        }
        .cover {
          margin-left: 20px;
          img {
            display: block;
            width: 113px;
            height: 73px;
            border-radius: 8px;
          }
        }
      }
    }
  }
  // 市场数据
  .market-data {
    .content {
      padding: 0 15px;
    }
    .tags {
      margin-bottom: 20px;
      .tag {
        background: @minor-font-color;
        color: @subdominant-font-color;
        font-size: 12px;
        padding: 5px;
        margin-right: 10px;
        border-radius: 8px;
      }
    }
    // 列表
    .data-list {
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .time {
          font-size: 12px;
          color: @subdominant-font-color;
          margin-right: 15px;
        }
        .process {
          height: 12px;
          background: @minor-font-color;
          border-radius: 8px;
          overflow: hidden;
          margin-right: 15px;
          flex: 1;
          .step {
            height: 100%;
            width: 50%;
            background: @error-color;
            color: @white-color;
            text-align: right;
            font-size: 12px;
            border-radius: 8px;
            padding-right: 5px;
          }
        }
        .arrow-box {
          display: flex;
          align-items: center;
          font-size: 12px;
          i {
            font-size: 16px;
            // 下箭头
            &.iconicon_xiajiang {
              color: @error-color;
            }
            // 上箭头
            &.iconicon_shangsheng {
              color: @success-color;
            }
          }
        }
      }
    }
    // 更多
    .more {
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: @subdominant-font-color;
      align-items: center;
      i {
        color: @minor-font-color;
        font-size: 14px;
      }
    }
  }
  // 面经分享
  .share-container {
    background: @white-color;
    .share-content {
      padding: 0 15px;
    }
    .list {
      .item {
        h3 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 14px;
          font-weight: 600;
        }
        .desc {
          font-size: 12px;
          color: @subdominant-font-color;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .detail-box {
          display: flex;
          align-items: center;
          .user {
            display: flex;
            align-items: center;
            color: @subdominant-font-color;
            font-size: 12px;
            flex: 1;
            img {
              width: 22px;
              height: 22px;
              border-radius: 50%;
            }
          }
          .time,.comment,.star {
            font-size: 12px;
            color: @minor-font-color;
          }
          .time {
            margin-right: 20px;
          }
          .comment {
             margin-right: 20px;
             display: flex;
             align-items: center;
            i {
              font-size: 16px;
            }
          }
          .star {
            display: flex;
            align-items: center;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
