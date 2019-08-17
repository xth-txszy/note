module.exports = {
    onWillParseMarkdown: function(markdown) {
      return new Promise((resolve, reject)=> {
        markdown = markdown.replace(/\*\*([\w\W+]+?)\*\*/g, (whole,content)=> `<strong style="color:red">${content}</strong>`);
        markdown = markdown.replace(/\*1\*([\w\W+]+?)\*1\*/g, (whole,content)=> `<strong style="color:red">${content}</strong>`);
        markdown = markdown.replace(/\*2\*([\w\W+]+?)\*2\*/g, (whole,content)=> `<strong style="color:blue">${content}</strong>`);
        markdown = markdown.replace(/\*3\*([\w\W+]+?)\*3\*/g, (whole,content)=> `<strong style="color:green">${content}</strong>`);
        return resolve(markdown)
      })
    },
    onDidParseMarkdown: function(html) {
      return new Promise((resolve, reject)=> {
        return resolve(html)
      })
    }
  }