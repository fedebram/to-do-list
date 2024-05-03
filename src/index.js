import './style.css';
import Projects from './projects';
import controlToDo from './controlToDo';
import controlDom from './controlDom';
import { compareAsc} from "date-fns";

controlDom();

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];

dates.forEach(element => {
    console.log(element);
});

dates.sort(compareAsc);

dates.forEach(element => {
    console.log(element);
});

