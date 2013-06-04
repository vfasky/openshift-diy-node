### 使用方法


1. 创建 DIY app
2. git clone 你的仓库, 然后执行

``` sh
cd 'you app'

git remote add openshift-diy-node -m master git://github.com/vfasky/openshift-diy-node.git

git pull -s recursive -X theirs openshift-diy-node master

rm diy/index.html 
rm diy/testrubyserver.rb
```

3. ssh 进你的 app
4. 执行 

``` sh
cd $OPENSHIFT_TMP_DIR

wget http://nodejs.org/dist/v0.10.9/node-v0.10.9.tar.gz

tar xfz node-v0.10.9.tar.gz

cd node-v0.10.9

./configure --prefix=$OPENSHIFT_DATA_DIR

make install
```

经过漫长的 make 后，回到本地：

- 编辑 diy/package.json ，管理应用依赖的包
- `node_modules` 不用上传， 程序会动态构建

最后，提交你的代码到git 

-- enjoy --
