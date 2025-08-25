module.exports = {
  apps: [
    {
      name: "next-app", // PM2 进程名
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000", // Next.js 启动命令
      cwd: "/var/www/tool", // 服务器目录
    },
  ],
};
