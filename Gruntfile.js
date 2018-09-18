module.exports = function (grunt) {

    const configJson = grunt.file.readJSON('config.json')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'articles/*.md',
                        dest: 'dist/',
                        ext: '.html'
                    }
                ],
                options: {
                    template: 'templates/section.jst',
                }
            }
        },
        watch: {
            files: ['articles/*.md'],
            tasks: ['markdown','htmlbuild'],
        },
        htmlbuild: {
            dist: {
                src: 'templates/index.html',
                dest: 'dist/',
                options: {
                    beautify: true,
                    //relative: true,
                    basePath: false,
                    styles: {
                        bundle: 'templates/css/*.css',
                    },
                    sections: {
                        views : configJson.articles.map(v => `dist/articles/${v}.html`)
                    },
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['markdown','htmlbuild']);
}
