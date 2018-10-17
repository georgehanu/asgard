const React = require("react");
const { Image, IText, Fabric } = require("../../../packages/core/react-fabric");
console.log("test 1234", Fabric);
const _ = require("ramda");

const defaultImages = [
  "http://www.flexibleproduction.com/wp-content/uploads/2017/06/test-intelligenza-sociale.jpg",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350",
  "http://www.flexibleproduction.com/wp-content/uploads/2017/06/test-intelligenza-sociale.jpg",
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
  "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/04/jonathan-martin-brunate-lead-image_0.jpg",
  "https://www.evoke-landscape-design.co.uk/wp-content/uploads/home-tree.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnln4X6Wha8vlaJMTkL3KEK2_v3Hxov3RqLJ5EZgJc3LbS47IG",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XeKxMs9AQOlzv0IxEF3mjc9wkGw0HNMPmCq8Scf9JHZcxqL7hQ"
];

class FabricjsRenderer extends React.Component {
  render() {
    const { activePage: page } = this.props;
    const { objects } = page;
    let elements = Object.keys(objects).map(obKey => {
      const object = objects[obKey];
      switch (object.type) {
        case "image":
          return (
            <Image
              key={object.id}
              {...object}
              onMoving={this.onMovingHandler}
            />
          );
        case "text":
          return (
            <IText
              key={object.id}
              {...object}
              onMoving={this.onMovingHandler}
            />
          );
        default:
          break;
      }
      return null;
    });

    return (
      <div>
        <div>
          <Fabric width={page.width} height={page.height}>
            {elements}
          </Fabric>
        </div>
      </div>
    );
  }
}

module.exports = FabricjsRenderer;
