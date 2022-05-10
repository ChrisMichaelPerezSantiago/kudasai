# ✓ somoskudasai / kudasai (PoC)

> somoskudasai content to markdown

# 📚 Example

[Markdown Content](./EXAMPLE.md)

## `getContent(url: string)`

```ts
interface ContentProps {
  video: string | null;
  md: string;
}

(async () => {
  const content = await getContent(
    "https://somoskudasai.com/noticias/videojuegos/elden-ring-los-jugadores-descubrieron-las-bragas-de-fia-un-npc/"
  );
  console.log(content);
})();
```

```ts
{
  video: 'www.youtube.com/embed/QzlMFNhobLM',
  md: ' \n' +
    '\n' +
    'VideoJuegos\n' +
    '\n' +
    'Elden Ring: Los jugadores descubrieron las bragas de Fia, un NPC\n' +
    '================================================================\n' +
    '\n' +
    'Chirumiru 10 marzo, 2022\n' +
    '\n' +
    '![](https://somoskudasai.com/wp-content/uploads/2022/03/portada_elden-ring.jpg)\n' +
    '\n' +
    'Cualquier juego lanzado en PC está destinado a tener su cuota de mods, hacks y trucos disponibles poco después del lanzamiento, y **[Elden Ring](https://somoskudasai.com/tag/elden-ring)** no es una excepción. Los jugadores ya han encontrado formas de editar los archivos del juego para lograr una variedad de objetivos que van desde arreglado la falta de soporte en resolución 21:9 (ultrawide) del videojuego hasta la aparición de objetos normalmente inalcanzables.\n' +
    '\n' +
    'Existen los trucos que se esperan, como la invencibilidad, las runas ilimitadas, la Estabilidad infinita y el Stamina ilimitado, pero algunos jugadores de **Elden Ring** están llevando las cosas un paso más allá pirateando armaduras que no se pueden conseguir normalmente, **como la ropa interior de Fia.** Sí, has leído bien, los jugadores de **Elden Ring** están utilizando modificaciones como **Cheat Engine** para añadir objetos como el “**_Deathbed Smalls_**” a su inventario. La mayor parte del atuendo de Fia se puede obtener a través del juego normal, pero el equipo que la mitad inferior de su modelo de personaje tiene equipado, el “_**Deathbed Smalls**_“, solo está ahí para dar a su modelo de personaje algo que llevar, no para que los jugadores lo usen ellos mismos.\n' +
    '\n' +
    '![](https://somoskudasai.com/wp-content/uploads/2022/03/A1-9.jpg)\n' +
    '\n' +
    '![](https://somoskudasai.com/wp-content/uploads/2022/03/A2-10.jpg)\n' +
    '\n' +
    '![](https://somoskudasai.com/wp-content/uploads/2022/03/A3-12.jpg)\n' +
    '\n' +
    'Sin embargo, esto no ha detenido a la comunidad de hackers de **Elden Ring**, ya que han descubierto formas de añadir básicamente todo lo que hay en el juego a su inventario. Afortunadamente, **Elden Ring** utiliza _Easy Anti-Cheat_, uno de los servicios anti-trampas más populares que existen, por lo que los jugadores no pueden llevar estos objetos online sin arriesgarse a un baneo. En el mejor de los casos, este sistema evita que los jugadores invadan a otros con armas excesivamente potentes, HP ilimitado u otros trucos. Sin embargo, en un contexto offline, estos trucos están totalmente permitidos. _Easy Anti-Cheat_ se emplea en juegos como **Fortnite**, **Apex Legends**, **Dead by Daylight** y muchos otros, por lo que es un servicio bastante fiable.\n' +
    '\n' +
    'Fuente: **[Reddit](https://www.reddit.com/r/Eldenring/comments/t9uxff/someone_in_an_elden_ring_fb_community_found_fias/)**\n' +
    '\n' +
    '©BANDAI NAMCO ENTERTAINMENT\n' +
    '\n' +
    '### '
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [kudasai](https://github.com/ChrisMichaelPerezSantiago/kudasai).
