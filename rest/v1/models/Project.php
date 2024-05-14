<?php

Class Project {
    public $project_aid;
    public $project_is_active;
    public $project_pl;
    public $project_title;
    public $project_description;
    public $project_img;
    public $project_datetime;
    public $project_created;
    public $project_search;

    public $connection;
    public $lastInsertedId;
    public $tblProject;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblProject = "project";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblProject} ";
            $sql .= "( project_pl, ";
            $sql .= "project_title, ";
            $sql .= "project_description, ";
            $sql .= "project_img, ";
            $sql .= "project_is_active, ";
            $sql .= "project_created, ";
            $sql .= "project_datetime ) values ( ";
            $sql .= ":project_pl, ";
            $sql .= ":project_title, ";
            $sql .= ":project_description, ";
            $sql .= ":project_img, ";
            $sql .= ":project_is_active, ";
            $sql .= ":project_created, ";
            $sql .= ":project_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_pl" => $this->project_pl,
                "project_title" => $this->project_title,
                "project_description" => $this->project_description,
                "project_img" => $this->project_img,
                "project_is_active" => $this->project_is_active,
                "project_created" => $this->project_created,
                "project_datetime" => $this->project_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblProject} ";
            $sql .= "order by project_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblProject} ";
            $sql .= "where project_aid = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_aid" => $this->project_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblProject} set ";
            $sql .= "project_pl = :project_pl, ";
            $sql .= "project_title = :project_title, ";
            $sql .= "project_description = :project_description, ";
            $sql .= "project_img = :project_img, ";
            $sql .= "project_datetime = :project_datetime ";
            $sql .= "where project_aid  = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_pl" => $this->project_pl,
                "project_title" => $this->project_title,
                "project_description" => $this->project_description,
                "project_img" => $this->project_img,
                "project_datetime" => $this->project_datetime,
                "project_aid" => $this->project_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblProject} set ";
            $sql .= "project_is_active = :project_is_active, ";
            $sql .= "project_datetime = :project_datetime ";
            $sql .= "where project_aid  = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_is_active" => $this->project_is_active,
                "project_datetime" => $this->project_datetime,
                "project_aid" => $this->project_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //new
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblProject} ";
            $sql .= "where project_title like :project_title ";
            $sql .= "order by project_is_active desc, ";
            $sql .= "project_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_title" => "%{$this->project_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}