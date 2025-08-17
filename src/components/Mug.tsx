// components/Mug
import { useGLTF } from "@react-three/drei";

const Mug = (props: any) => {
  const scene = useGLTF('/mug.glb');
  return <primitive object={scene} {...props} />
};

export { Mug };
