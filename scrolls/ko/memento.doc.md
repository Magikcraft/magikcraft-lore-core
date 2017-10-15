
# 기념물

`magikcraft.io.memento`

기억에 접근하고, 무엇인가를 저장하거나 기억하십시오.

## `setItem`

뭔가 기억하고 싶다면`memento.setItem`을 사용하십시오 :

### 예

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem`은 키를 가질 수 있기 때문에 하나 이상의 것을 기억할 수 있습니다 :

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

어떤 것을 불러내려면`memento.getItem`을 사용하십시오 :

### 예

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` 또한 키를 취하므로 하나 이상의 메모리를 호출 할 수 있습니다 :

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```