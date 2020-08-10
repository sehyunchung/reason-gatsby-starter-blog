// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Raw = {};

function parse(value) {
  var value$1 = value.fields;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.slug;
    tmp = {
      slug: !(value$2 == null) ? value$2 : undefined
    };
  }
  var value$3 = value.frontmatter;
  var tmp$1;
  if (value$3 == null) {
    tmp$1 = undefined;
  } else {
    var value$4 = value$3.title;
    tmp$1 = {
      title: !(value$4 == null) ? value$4 : undefined
    };
  }
  return {
          fields: tmp,
          frontmatter: tmp$1
        };
}

var verifyArgsAndParse = parse;

function serialize(value) {
  var value$1 = value.frontmatter;
  var frontmatter;
  if (value$1 !== undefined) {
    var value$2 = value$1.title;
    var title = value$2 !== undefined ? value$2 : null;
    frontmatter = {
      title: title
    };
  } else {
    frontmatter = null;
  }
  var value$3 = value.fields;
  var fields;
  if (value$3 !== undefined) {
    var value$4 = value$3.slug;
    var slug = value$4 !== undefined ? value$4 : null;
    fields = {
      slug: slug
    };
  } else {
    fields = null;
  }
  return {
          fields: fields,
          frontmatter: frontmatter
        };
}

function verifyName(param) {
  
}

var Z__INTERNAL = {
  graphql: 0,
  graphql_module: 0
};

var query = "fragment NextPrevious on MarkdownRemark   {\nfields  {\nslug  \n}\n\nfrontmatter  {\ntitle  \n}\n\n}\n";

export {
  query ,
  Raw ,
  parse ,
  verifyArgsAndParse ,
  serialize ,
  verifyName ,
  Z__INTERNAL ,
  
}
/* No side effect */
