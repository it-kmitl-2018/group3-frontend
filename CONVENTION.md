# CONVENTION

## AirBNB Style Guide

We prefer to use **AirBNB Style Guide** for both **[Javascript](https://github.com/airbnb/javascript)** and **[React/JSX](https://github.com/airbnb/javascript/tree/master/react)**.

But we insist to override some AirBNB convention.

One of them is `;`.

So we **don't** use `;` at the end of every statements.

## Versioning

Base on **[Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200)**

Given a version number **MAJOR.MINOR.PATCH**, increment the:

- **MAJOR** version when you make incompatible changes  
- **MINOR** version when you add functionality in a backwards-compatible manner  
- **PATCH** version when you make backwards-compatible bug fixes.  

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

## GIT commit message

we will use the following tag for each commit.

​	[**Task**] _**Commit message**_  

**Example**

​	[Add] Initial project

### Task

Start with upper letter in square bracket

- **Add**   when you create new file or directory
- **Update**   when you edit or rename existing file
- **Fix**   when you fix  a known bug. Also, in description must explain what bug is fixed
- **Delete**   when you Delete file or directory    

### Commit message

Start with upper letter and ending **without** full stop `.`

Don't commit sandwich update such as edit `.gitignore` when commit message like "[Add] Hello class"

## Reference

[AirBNB React/JSX Guide](https://github.com/airbnb/javascript/tree/master/react)

[AirBNB Javascript Guide](https://github.com/airbnb/javascript)

[Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200)