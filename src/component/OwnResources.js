import React from "react";
import "../css/OwnResources.css";

function OwnResources() {
  return (
    <div className="myresources">
      <div className="own-res">
        <section>
          <h4>Postgress setup</h4>
          <a
            href="https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
          </a>
        </section>
        <section>
          <h4>heroku details</h4>
          <p>heroku pg --app atulknitrr-project-tracker</p>
          <p>heroku pg:psql --app atulknitrr-project-tracker</p>
        </section>
        <section>
          <h4>some postgres cli command</h4>
          <code>\q | Exit psql connection</code>
          <code>\c | Connect to a new database</code>
          <code>\dt | List all tables</code>
          <code>\du | List all roles</code>
          <code>\list | List databases</code>
        </section>

        <section>
          <h4>users table</h4>
          <code>DROP TABLE if EXISTS users;</code>
          <code>
            <pre>
              CREATE TABLE users ( user_id SERIAL , first_name VARCHAR(45) NOT
              NULL, last_name VARCHAR(45 ) NOT NULL, email VARCHAR(100) UNIQUE
              NOT NULL, date_of_birth DATE, password varchar(760), created_at
              TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT
              CURRENT_TIMESTAMP, PRIMARY KEY (user_id), UNIQUE (email) );
            </pre>
          </code>

          <code>
            <pre>
              INSERT INTO users(first_name, last_name, email, password) VALUES
              ('atul', 'kk', 'ak@gmail.com', '12233333'), ('atul3', '3kk',
              'addk@gmail.com', '12233333');
            </pre>
          </code>
          <code>
            <pre>SELECT * FROM users;</pre>
          </code>
        </section>

        <section>
          <h4>projects table</h4>
          <code>DROP TABLE IF EXISTS projects;</code>
          <code>
            <pre>
              CREATE TABLE projects( project_id SERIAL , project_name
              VARCHAR(100) UNIQUE NOT NULL, project_description VARCHAR(1000)
              NOT NULL, created_by INT NOT NULL, updated_by INT, created_at
              TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, updated_at
              TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, PRIMARY
              KEY(project_id), CONSTRAINT fk_created_by_users_user_id FOREIGN
              KEY (created_by) REFERENCES users(user_id) ON DELETE CASCADE );
            </pre>
          </code>

          <code>
            <pre>
              INSERT INTO projects(project_name, project_description, created_by
              ) VALUES ('dummy ddd valuee', 'dummy value ddd', 2);
            </pre>
          </code>
          <code>
            <pre>ALTER TABLE projects ADD COLUMN updated_by INT;</pre>
          </code>
          <code>
            <pre>
              UPDATE projects SET updated_by = 2, project_description = 'dummy
              data' WHERE project_id = 4;
            </pre>
          </code>
        </section>

        <section>
          <h4>user_stories table</h4>
          <code>DROP TABLE IF EXISTS user_stories;</code>
          <code>
            <pre>
              CREATE TABLE user_stories ( user_story_id SERIAL, user_story_title
              VARCHAR(1000) NOT NULL, user_story_description VARCHAR(5000) NOT
              NULL, project_id INT NOT NULL, is_completed BOOLEAN NOT NULL
              DEFAULT FALSE, created_at TIMESTAMP WITH TIME ZONE DEFAULT
              CURRENT_TIMESTAMP, updated_at TIMESTAMP WITH TIME ZONE DEFAULT
              CURRENT_TIMESTAMP, created_by INT NOT NULL, updated_by INT NOT
              NULL, assignee INT NOT NULL, PRIMARY KEY(user_story_id),
              CONSTRAINT fk_created_by_users_user_id FOREIGN KEY (created_by)
              REFERENCES users(user_id) ON DELETE SET NULL, CONSTRAINT
              fk_updated_by_users_user_id FOREIGN KEY (updated_by) REFERENCES
              users(user_id) ON DELETE SET NULL, CONSTRAINT
              fk_project_id_projects_project_id FOREIGN KEY (project_id)
              REFERENCES projects(project_id) ON DELETE SET NULL, CONSTRAINT
              fk_assignee_users_user_id FOREIGN KEY (assignee) REFERENCES
              users(user_id) ON DELETE SET NULL );
            </pre>
          </code>

          <code>
            <pre>
              INSERT INTO user_stories(user_story_title, user_story_description,
              project_id, created_by, updated_by ) VALUES ('dummy', 'dymmy
              proieect ser storry', 1, 1, 1);
            </pre>
          </code>
          <code>
            <pre>ALTER TABLE projects ADD COLUMN updated_by INT;</pre>
          </code>
          <code>
            <pre>
              UPDATE user_stories SET is_completed = true WHERE user_story_id =
              4 RETURNING *;
            </pre>
          </code>
        </section>

        <section>
          <h4>tasks table</h4>
          <code>DROP TABLE IF EXISTS tasks;</code>
          <code>
            <pre>
              CREATE TABLE tasks ( task_id SERIAL, task_title VARCHAR(500),
              task_description VARCHAR(3000), is_completed BOOLEAN NOT NULL
              DEFAULT FALSE, created_at TIMESTAMP WITH TIME ZONE DEFAULT
              CURRENT_TIMESTAMP, updated_at TIMESTAMP WITH TIME ZONE DEFAULT
              CURRENT_TIMESTAMP, created_by INT NOT NULL, updated_by INT NOT
              NULL, assignee INT , user_story_id INT, project_id INT, PRIMARY
              KEY(task_id), CONSTRAINT fk_user_story_id FOREIGN KEY
              (user_story_id) REFERENCES user_stories(user_story_id) ON DELETE
              SET NULL, CONSTRAINT fk_project_id FOREIGN KEY (project_id)
              REFERENCES projects(project_id) ON DELETE SET NULL, CONSTRAINT
              fk_assignee FOREIGN KEY (assignee) REFERENCES users(user_id) ON
              DELETE SET NULL, CONSTRAINT fk_created_by FOREIGN KEY (created_by)
              REFERENCES users(user_id) ON DELETE SET NULL, CONSTRAINT
              fk_updated_by FOREIGN KEY (updated_by) REFERENCES users(user_id)
              ON DELETE SET NULL );
            </pre>
          </code>

          <code>
            <pre>
              INSERT INTO tasks(task_title, task_description, created_by,
              updated_by, user_story_id, project_id ) VALUES ('dummy task',
              'dummy valuee', 1, 1, 2, 1) ;
            </pre>
          </code>
          <code>
            <pre>
              SELECT * FROM user_stories us INNER JOIN tasks t ON
              us.user_story_id = t.user_story_id;
            </pre>
          </code>
          <code>
            <pre>
              UPDATE tasks SET is_completed = TRUE WHERE task_id = 2 RETURNING
              *;
            </pre>
          </code>
        </section>

        <section>
          <h4>comments table</h4>
          <code>DROP TABLE IF EXISTS comments;</code>
          <code>
            <pre>
              CREATE TABLE comments ( comment_id SERIAL, comment text,
              comment_by INT, user_story_id INT, task_id INT, is_deleted BOOLEAN
              NOT NULL DEFAULT FALSE, created_at TIMESTAMP WITH TIME ZONE
              DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP WITH TIME ZONE
              DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (comment_id), CONSTRAINT
              fk_comment_by FOREIGN KEY (comment_by) REFERENCES users(user_id)
              ON DELETE SET NULL, CONSTRAINT fk_user_story_id FOREIGN KEY
              (user_story_id) REFERENCES user_stories(user_story_id) ON DELETE
              SET NULL, CONSTRAINT fk_task_id FOREIGN KEY (task_id) REFERENCES
              tasks(task_id) ON DELETE SET NULL );
            </pre>
          </code>

          <code>
            <pre>
              INSERT INTO comments(comment, comment_by, task_id) VALUES ('dummy
              comment', 1, 1);
            </pre>
          </code>
        </section>
      </div>
    </div>
  );
}

export default OwnResources;
