<?php

Class Services {
    public $services_aid;
    public $services_is_active;
    public $services_title;
    public $services_par;
    public $services_datetime;
    public $services_created;
    public $services_search;

    public $connection;
    public $lastInsertedId;
    public $tblServices;
    

    public function __construct($db) {
        $this->connection = $db;
        $this->tblServices = "services";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblServices} ";
            $sql .= "( services_title, ";
            $sql .= "services_par, ";
            $sql .= "services_is_active, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_title, ";
            $sql .= ":services_par, ";
            $sql .= ":services_is_active, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title" => $this->services_title,
                "services_par" => $this->services_par,
                "services_is_active" => $this->services_is_active,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
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
            $sql .= "from {$this->tblServices} ";
            $sql .= "order by services_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblServices} ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_title = :services_title, ";
            $sql .= "services_par = :services_par, ";
            // $sql .= "portfolio_category = :portfolio_category, ";
            // $sql .= "portfolio_description = :portfolio_description, ";
            // $sql .= "portfolio_publish_date = :portfolio_publish_date, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid  = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title" => $this->services_title,
                "services_par" => $this->services_par,
                // "portfolio_category" => $this->portfolio_category,
                // "portfolio_description" => $this->portfolio_description,
                // "portfolio_publish_date" => $this->portfolio_publish_date,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblServices} set ";
            $sql .= "services_is_active = :services_is_active, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid  = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_is_active" => $this->services_is_active,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
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
            $sql .= "from {$this->tblServices} ";
            $sql .= "where services_title like :services_title ";
            $sql .= "order by services_is_active desc, ";
            $sql .= "services_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title" => "%{$this->services_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}