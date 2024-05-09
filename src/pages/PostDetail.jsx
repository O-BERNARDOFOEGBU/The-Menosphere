import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          accusamus ipsa consequatur ullam, quam totam! Corporis voluptas
          aspernatur repellat accusamus reprehenderit magnam? Hic consequuntur
          provident consectetur. Maxime temporibus officia dolor assumenda
          officiis vel facere accusamus, quae rem natus. Neque, modi.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          explicabo facilis assumenda consectetur. Deleniti vero natus tempore
          reprehenderit recusandae, fugiat placeat. Et facilis veniam doloribus
          magnam aut molestias voluptatibus aliquam assumenda possimus neque
          voluptate, saepe, quisquam ullam vero iste sapiente corporis nulla?
          Ducimus, dolor voluptas vel beatae quisquam dolores nobis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          quia tempore rem vel temporibus repellat recusandae obcaecati,
          exercitationem mollitia voluptatibus id aliquid pariatur perferendis
          veritatis animi, blanditiis nam illo eveniet facilis amet atque ullam
          ut. Tempora consequatur, voluptatibus nihil reiciendis deserunt
          provident sequi ipsum perferendis alias assumenda itaque enim autem
          quisquam est maiores, eveniet totam voluptatem ea dolor asperiores
          quos. Ut dolorum voluptas eum animi, amet repudiandae quasi hic
          dolorem perspiciatis blanditiis aliquam ad nesciunt quam consequuntur
          impedit maiores repellendus quidem, soluta velit cupiditate possimus
          voluptatibus eius. Quibusdam doloremque pariatur inventore numquam
          facilis quidem sint reprehenderit, quod officiis sunt unde labore
          harum necessitatibus voluptas molestias totam nulla libero iste
          voluptate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          eveniet temporibus expedita veniam architecto quis doloremque sint
          reprehenderit optio libero?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          reprehenderit hic repellendus cumque quisquam, placeat ipsa vel! Esse
          sit unde ducimus molestiae accusantium, fuga praesentium ipsum dolorum
          fugit sapiente vitae similique ipsa reiciendis aspernatur inventore
          amet nisi laboriosam, reprehenderit quos doloribus debitis quidem
          exercitationem nemo? Iste, inventore commodi. Inventore dicta minima
          animi praesentium, necessitatibus officia enim ipsum doloribus!
          Consequatur dolores unde quam maxime cupiditate deserunt tempora quis
          natus aperiam architecto pariatur iure, assumenda obcaecati culpa
          aliquam in veniam doloribus sed dolore? Excepturi repellat nihil ex
          voluptate ut aut architecto repellendus, praesentium reprehenderit
          tempora possimus nulla sunt, harum facilis voluptas veniam et beatae
          unde dolorem quaerat voluptates cumque. Nam accusantium reiciendis sed
          debitis? Sint ullam minus delectus illum quod excepturi voluptatibus
          consequuntur iure temporibus enim odio aliquam, in eius quae deserunt
          sunt vero voluptates molestias. Labore a iusto consequuntur ipsam
          dolores reprehenderit eius atque fugit, maiores doloremque magnam
          laboriosam totam architecto aliquam facere, doloribus dolorum sint?
          Suscipit inventore, temporibus similique iusto voluptates nemo
          delectus sed repudiandae totam accusamus accusantium officia incidunt
          tempora, consequuntur corrupti obcaecati iure eligendi ipsum omnis!
          Blanditiis laborum iure velit fugiat. Quaerat deserunt, aliquam
          officia est quisquam, quae dolores ducimus quidem eligendi autem
          molestias. Tempore quos libero mollitia quod nisi iure consequatur,
          adipisci quas cumque numquam dolorem recusandae magnam id esse officia
          eveniet nobis suscipit. Totam, distinctio deleniti!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
