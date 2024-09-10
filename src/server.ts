import { DolphFactory, middlewareRegistry } from "@dolphjs/dolph";
import { PostComponent } from "./components/post/post.component";
import helmet from "helmet";

middlewareRegistry.register(helmet());

const dolph = new DolphFactory([PostComponent]);
dolph.start();
