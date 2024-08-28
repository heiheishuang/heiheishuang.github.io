---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👧🏻 About Me

I am currently a 3rd-Year Master student at [Tsinghua University](https://www.tsinghua.edu.cn/en/), under the guidance of [Prof. Haoqian Wang](https://www.sigs.tsinghua.edu.cn/whq/). I got B.Eng. degree in Software Engineering at Northwest Polytechnic University. I am looking for a PhD position in Fall, 2025.

Currently, I’m interested in 3D computer vision, with a particular focus on 3D Scene Reconstruction and Perception, Autonomous driving, including 3D gaussian splatting and depth estimation.

More about me through [CV-en](files/Yingshuang_Zou_CV.pdf).

<br>

# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024 Oral</div><img src='images/m2depth.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<a href="https://arxiv.org/abs/2405.02004" style="font-size: 22px; color: #483D8B; text-decoration: none">**M^2Depth: Self-supervised Two-Frame Multi-camera Metric Depth Estimation**</a><br>
<span style="font-size: 18px;">**Yingshuang Zou\*** , Yikang Ding\*, Xi Qiu, Haoqian Wang†, Haotian Zhang†</span><br>
<span style="font-size: 18px;">[**Website**](https://heiheishuang.xyz/M2Depth/) / [**Paper**](https://arxiv.org/abs/2405.02004) / [**Code**](#todo)</span>

<span style="font-size: 18px;">- We integrate spatial-temporal information for the metric depth estimation; we introduce strong SAM prior to enhance the quality of depth detail.</span>

</div>
</div>

# 📄 Preprint Papers
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2024</div><img src='images/transplat.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<a href="https://arxiv.org/abs/2408.13770" style="font-size: 22px; color: #483D8B; text-decoration: none">**TranSplat: Generalizable 3D Gaussian Splatting from Sparse Multi-View Images with Transformers**</a><br>
<span style="font-size: 18px;">Chuanrui Zhang\*, **Yingshuang Zou\***, Zhuoling Li, Minmin Yi, Haoqian Wang†</span><br>
<span style="font-size: 18px;">[**Website**](https://xingyoujun.github.io/transplat) / [**Paper**](https://arxiv.org/abs/2408.13770) / [**Code**](#todo)</span>

<span style="font-size: 18px;">- We present TranSplat, a transformer-based approach for generalizable 3D gaussian splatting from sparse multi-view images.</span>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2023</div><img src='images/fdst.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<a href="https://arxiv.org/abs/2303.07709" style="font-size: 22px; color: #483D8B; text-decoration: none">**3D Face Arbitrary Style Transfer**</a><br>
<span style="font-size: 18px;">Xiangwen Deng, **Yingshuang Zou**, Yuanhao Cai, Chendong Zhao, Yang Liu, Zhifang Liu, Yuxiao Liu, Jiawei Zhou, Haoqian Wang†</span><br>
<span style="font-size: 18px;">[**Paper**](https://arxiv.org/abs/2303.07709) </span>

<span style="font-size: 18px;">- We propose a novel framework FDST, for 3D face arbitrary style transfer, capable of high-fidelity face texture reconstruction, region-controllable style transfer, large-pose face reconstruction, and artistic face reconstruction.</span>

</div>
</div>

# Projects
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='https://raw.githubusercontent.com/heiheishuang/image/main/img/scenes_gs.png' alt="sym" width="120%"></div></div>
<div class='paper-box-text' markdown="1">
<a href="https://www.robomaster.com/en-US/robo/icra" style="font-size: 22px; color: #483D8B; text-decoration: none">**Gaussian Splatting for Dynamic Driving Scenes**</a><br>
<span style="font-size: 18px;">- We design a novel scene representation for modeling complex dynamic street scene, which efficiently reconstructs and renders high-fidelity “dynamic urban scenes” in real-time.</span>

</div>
</div>

# Competitions
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2020</div><img src='https://raw.githubusercontent.com/heiheishuang/image/main/img/competition.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<a href="https://www.robomaster.com/en-US/robo/icra" style="font-size: 22px; color: #483D8B; text-decoration: none">**ICRA 2020 DJI Robomaster AI Challenge**</a><br>
<em><span style="font-size: 18px;">Third Prize / Ranking: 6th in 72 teams, 2020.</span></em><br>
<span style="font-size: 18px;"> [**Emulator**](https://github.com/nwpu-v5-team/ICRA-Firefly-Emulator) / [**Perception**](https://github.com/nwpu-v5-team/ICRA-RoboMaster-2020-Perception) / [**Strategy**](https://github.com/nwpu-v5-team/ICRA-RoboMaster-2020-Strategy) / [**Planning**](https://github.com/nwpu-v5-team/ICRA-RoboMaster-2020-Planning) </span>

<span style="font-size: 18px;">- As team leader, I managed the project, steering our team to a 6th-place finish out of 72 competitors. My key duties encompassed developing a Gazebo-based simulation platform and designing perception algorithms and planning module for robots.</span>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">FIRA 2019</div><img src='images/fira.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<a href="https://www.robomaster.com/en-US/robo/icra" style="font-size: 22px; color: #483D8B; text-decoration: none">**FIRA Roboworld Cup, Robosot Race Competition**</a><br>
<em><span style="font-size: 18px;">First Prize / Ranking: 2nd, 2019.</span></em><br>
<span style="font-size: 18px;">[**Code**](https://github.com/heiheishuang/vwbot_controller)</span>

<span style="font-size: 18px;">- We designed a wheeled robot with lidar, capable of detecting balls on the ground and placing them in specified locations. As the team leader, I was primarily responsible for the navigation algorithms and the control algorithms of the robot.</span>

</div>
</div>

<br>

# 💻 Experience

- 06/2023~07/2024, I was a full-time intern at the [Megvii Research](https://www.megvii.com/).

# 🏆 Honors and Awards

- Scholarship, Tsinghua University, 2023.
- Outstanding Graduates, Northwest Polytechnic University, 2022.
- **National Scholarship**, 2021.
- First Class Scholarship, Northwest Polytechnic University, 2019, 2020, 2021.
