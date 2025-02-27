import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (

    <div className={styles.comment}>

      <Avatar 
        hasBorder={false}
        src="https://github.com/bulani.png" 
        alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          
          <header>
            
            <div className={styles.authorAndTime}>
              <strong>João Víctor</strong>
              <time title="25 de Novembro às 09:07" dateTime="2024-11-25 09:07:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </div>
  )
}