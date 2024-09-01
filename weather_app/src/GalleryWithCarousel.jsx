import { Carousel } from "@material-tailwind/react";

export function GalleryWithCarousel() {
  return (
    <>
        <div class="center">
  <div class="carousel-wrapper">
    <input  id="slide1" type="radio" name="controls" checked="checked" />
    <input id="slide2" type="radio" name="controls" />
    <input id="slide3" type="radio" name="controls" />
    <input id="slide4" type="radio" name="controls" />
    <input id="slide5" type="radio" name="controls" />

    <label for="slide1" style={{marginLeft:"-2em"}} class="nav-dot"></label>
    <label for="slide2" style={{marginLeft:"-1em"}} class="nav-dot"></label>
    <label for="slide3" style={{marginLeft:"0em"}} class="nav-dot"></label>
    <label for="slide4" style={{marginLeft:"1em"}} class="nav-dot"></label>
    <label for="slide5" style={{marginLeft:"2em"}} class="nav-dot"></label>

    <label for="slide1" class="left-arrow">  </label>
    <label for="slide2" class="left-arrow"> </label>
    <label for="slide3" class="left-arrow">  </label>
    <label for="slide4" class="left-arrow">  </label>
    <label for="slide5" class="left-arrow">  </label>

    <label for="slide1" class="right-arrow">  </label>
    <label for="slide2" class="right-arrow">  </label>
    <label for="slide3" class="right-arrow">  </label>
    <label for="slide4" class="right-arrow">  </label>
    <label for="slide5" class="right-arrow">  </label>

    <div class="carousel">
      <ul>
        <li>
          <img  src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/canyon.jpg" />
        </li>
        <li>
          <img src="https://m.media-amazon.com/images/I/31Y+R3Y3nvL._SL1000_.jpg" alt=""/>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/osef-art/ministick/main/data/img/main/ministick-clip-3.gif" />
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/smoke.jpg"/>
        </li>
        <li>
          <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt=""/>
        </li>
      </ul>
    </div>
  </div>
</div>



    </>
  );


}