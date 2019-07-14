##常用
1.初始化目录为git目录
```shell
git init
```
2.将文件放到git仓库
```shell
git add README.md
git commit -m "初始化"
```

其中“初始化”是此次commit的消息     
`git add`后面可以跟多个文件名
commit文件之前一定要将对该文件执行"git add"
`git add`命令是将文件放到暂存区

3. 查看仓库当前的状态
```shell
git status
```

4. 查看文件变化
```shell
 git diff README.md
```
5. 查看提交记录
```shell
git log
git log --pretty=oneline
#--pretty=oneline可以让显示记录变得好看
```

6. 回退版本
`HEAD`表示当前版本
`HEAD^`表示上一个版本
`HEAD^^`表示上两个版本
```shell
git reset --hard HEAD^
#回退到上一个版本
```
`git reset`命令可以接版本号进行设置

```shell
 git reflog
 #可以查看命令的记录
```

```shell
git diff HEAD -- readme.txt
#查看工作区和版本库里面最新版本的区别
```


```shell
git checkout -- file
#丢弃工作区的修改，让这个文件回到最近一次git commit或git add时的状态。
```

```shell
git reset HEAD <file>
#可以将暂存区的修改删除掉
```

```shell
git rm test.txt
#将删除进行提交到暂存区
```

##远程版本库
生成ssh秘钥：
```shell
ssh-keygen -t rsa -C "youremail@example.com"
```

添加到远程库：
```shell
git remote add origin git@github.com:michaelliao/learngit.git
git push origin master
```


```shell
#克隆仓库
 git clone git@github.com:tianxiashaozhiyin/note.git
```

##分支
创建并切换分支：
```shell
git checkout -b dev
```

相当于两条命令：
```shell
#创建分支
git branch dev
#切换分支
git checkout dev
```
查看当前分支：
```shell
git branch
```
合并分支到mater：
```shell
 git merge dev
```
删除分支：
```shell
git branch -d dev
```
查看分支合并图：
```shell
git log --graph --pretty=oneline --abbrev-commit
```