export type taskData = {
  title: string;
  description: string;
  deadline: string;
  authorId: string;
};

export type taskReturn = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  authorId: string;
  status: string;
  authorNickname: string;
};

export type task = taskData & { id: string };
