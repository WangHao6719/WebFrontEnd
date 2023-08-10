# TortoiseGit使用教程

## 1. 下载地址

>[TortoiseGit下载地址](https://tortoisegit.org/download/)
>
>![img](./assets/51e2745e43f247c182cbff25167ced33.png)

## 2. 建立仓库

>建立的方式有两种，如下所示
>- **git init 方式**
>  新建立一个git_demo 目录，然后右键点击 Git Create repository here ， 会自动生成一个.git 隐藏目录。
>   ![img](./assets/d2d2ff3eb5244feca8e7dfa46ce57f2e.png)
>- **git clone 方式**
>  有右键点击Git Clone
>   ![img](./assets/327f2e0e9a6e410a8d8430d16826b52a.png)
>   这时候会弹出一个框 ， URL 是远程仓库的地址，Directory 是存放在哪个目录下。
>   ![img](./assets/4e8adc71511d414e88ecaa319dd1d54e.png)
>   ![img](./assets/c0f3700bd9424aec88b83d279f523e92.png)

## 3. 提交代码

>  在刚才建立的仓库下，新建立一文件，这里的其他文件，是码云上面的(不用管)
>  ![img](./assets/7e8ce5205684468291eefb04cf428c3c.png)
>  点击改文件右键，把新建的文件，添加在缓存区
>  ![img](./assets/020418a76ee24e13afdd72bb9dc837c2.png)
>  点击改文件右键，把暂存区的文件，添加到版本库
>  ![img](./assets/6da936e1e1ba42bc985d870a6812ae9f.png)
>  填写完提交信息后，勾选该文件，点击commit 即可
>  ![img](./assets/47c2893df287487aa6320a87a54f88a9.png)
>  可在本地版本库，中查看刚才添加的文件
>  ![img](./assets/c9624533be4b4fc686ffe2585cfa5eff.png)
>  ![image-20211223231154565](./assets/3f5f85648bdc475bbb1cf2f29d9adc4f.png)
>  当文件添加到本地版本库后，就可以推送给远程仓库了，右键点击push ， 弹出框后ok即可
>  ![img](./assets/c0aa5c0157794183ab165172fe9c0040.png)
>  ![img](./assets/6dba2308c9024d7988be6e9819e25062.png)

## 4. 更新代码

>  右键点击pull 即可
>  ![img](./assets/b1993a4a286d46a5817d2f65beca6194.png)
>  ![image-20211223231852127](./assets/bf525137c59f4aef91e93b3470bb8de5.png)

## 5. 回滚版本

>  右键点击 show log 后，选中某个版本右键点击 Reset master to this 即可
>  ![img](./assets/a0e72ae2ed074528b0a2896170f9f00d.png)
>  再次回来，本地版本库中看，发现没有了刚才新建的 ”测试文件01.txt “
>  ![img](./assets/f344415a45bb4bf7874e432f21b1c7a7.png)

## 6. 显示日志/修改日志

>  右键点击 show log 即可
>  ![img](./assets/58180cd727974b578e3cc127f390e97b.png)
>  ![img](./assets/795998e067c04f828828c1c0668f54cf.png)

## 7. 创建分支

>  右键点击Create Branch
>  ![img](./assets/1f1f1428d52c48b9b070ce7edab054ef.png)
>  ![img](./assets/42e7845041ba42e19b1835d3a66442b2.png)
>  切换到刚创建的b01分支
>  ![img](./assets/87369616ee5b452ba9f2a7232621930a.png)
>  ![img](./assets/80f65a5570c24489bcd6887d68b821ed.png)

## 8. 解决冲突

>  为了演示冲突场景，需要新建另外一个目录，然后拉取远程仓库，在测试文件01.txt 中添加一些内容，需要提交到本地版本库，接着push 远程仓库。
>  ![img](./assets/12fe785877c346069ee9525f2402965c.png)
>  ![image-20211223234906590](./assets/b9e33f1382c0409ea02643ecb03a795d.png)

与此同时，在别的仓库也是修改 ”测试文件01.txt“ ，添加内容，需要提交到本地版本库，接着push 远程仓库。

>  ![img](./assets/1d31be44e72c4428958077c65bb3fe0f.png)
>  发现push 不了，原因是发生冲突了，导致推送不了。
>  ![img](./assets/b0334254b3f44abbac7a4d275805027a.png)
>  接着我们pull 一下， 该文件是有感叹号图标的，说是该文件已经发生冲突了
>  ![img](./assets/07a1b8c75ab4404b9c65f8da2b3be29c.png)
>  不要慌，接下面我们看是如何解决的，该文件右键点击Edit conflicts
>  ![img](./assets/2f21e0a92bbd47fe9922804f7061f73c.png)
>  ![img](./assets/f1797f49456f42d884765fd2666812eb.png)
>  知道原因之后，选择手动合并代码，最后点击Mark as resolved 即可
>  ![img](./assets/84927f4e2f554d9c86dc78961442798d.png)
>  
## 9. 忽略文件上传

>  有时候，不想上传某些文件到版本库中，就需要用到 git 的忽略功能了，新建一个文件
>  ![image-20211224001359372](./assets/68fbf8151d3c4ee4802003476a58b19f.png)
>  接着会自动生成一个 忽略文件 .gitignore ， 文件里面内容是定义target.txt 不允许上传。
>  ![img](./assets/b8caaea6661040dda6a40d19eb772be4.png)

 