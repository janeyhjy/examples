module.exports = (grunt) ->
  # 构建任务配置
  grunt.initConfig(
    # 读取package.json的内容，形成个json数据
    pkg: grunt.file.readJSON('package.json')
    # Grunt 任务配置
    coffee:
      compile:
        expand: true
        flatten: true
        cwd: 'coffee'
        src: ['*.coffee']
        dest: 'build/coffee/'
        ext: '.js'
  )

  # 加载Grunt插件
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # 默认的Grunt任务
  grunt.registerTask 'default', ['coffee:compile']
  return
