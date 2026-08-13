# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktn/provider-awscc.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler awscc_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawler(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  targets: GlueCrawlerTargets,
  classifiers: typing.List[str] = None,
  configuration: str = None,
  crawler_security_configuration: str = None,
  database_name: str = None,
  description: str = None,
  lake_formation_configuration: GlueCrawlerLakeFormationConfiguration = None,
  name: str = None,
  recrawl_policy: GlueCrawlerRecrawlPolicy = None,
  schedule: GlueCrawlerSchedule = None,
  schema_change_policy: GlueCrawlerSchemaChangePolicy = None,
  table_prefix: str = None,
  tags: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.role">role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.configuration">configuration</a></code> | <code>str</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.crawlerSecurityConfiguration">crawler_security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix">table_prefix</a></code> | <code>str</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tags">tags</a></code> | <code>str</code> | The tags to use with this crawler. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.role"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.targets"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.classifiers"></a>

- *Type:* typing.List[str]

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.configuration"></a>

- *Type:* str

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `crawler_security_configuration`<sup>Optional</sup> <a name="crawler_security_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.crawlerSecurityConfiguration"></a>

- *Type:* str

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.description"></a>

- *Type:* str

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `lake_formation_configuration`<sup>Optional</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.name"></a>

- *Type:* str

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `recrawl_policy`<sup>Optional</sup> <a name="recrawl_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `schema_change_policy`<sup>Optional</sup> <a name="schema_change_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix"></a>

- *Type:* str

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tags"></a>

- *Type:* str

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration">put_lake_formation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy">put_recrawl_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy">put_schema_change_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers">reset_classifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration">reset_crawler_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">reset_lake_formation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy">reset_recrawl_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy">reset_schema_change_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lake_formation_configuration` <a name="put_lake_formation_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```python
def put_lake_formation_configuration(
  account_id: str = None,
  use_lake_formation_credentials: bool | IResolvable = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.accountId"></a>

- *Type:* str

Required for cross account crawls. For same account crawls as the target data, this can be left as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}

---

###### `use_lake_formation_credentials`<sup>Optional</sup> <a name="use_lake_formation_credentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.useLakeFormationCredentials"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}

---

##### `put_recrawl_policy` <a name="put_recrawl_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```python
def put_recrawl_policy(
  recrawl_behavior: str = None
) -> None
```

###### `recrawl_behavior`<sup>Optional</sup> <a name="recrawl_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.recrawlBehavior"></a>

- *Type:* str

Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule"></a>

```python
def put_schedule(
  schedule_expression: str = None
) -> None
```

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

A cron expression used to specify the schedule.

For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule_expression GlueCrawler#schedule_expression}

---

##### `put_schema_change_policy` <a name="put_schema_change_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```python
def put_schema_change_policy(
  delete_behavior: str = None,
  update_behavior: str = None
) -> None
```

###### `delete_behavior`<sup>Optional</sup> <a name="delete_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.deleteBehavior"></a>

- *Type:* str

The deletion behavior when the crawler finds a deleted object.

A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}

---

###### `update_behavior`<sup>Optional</sup> <a name="update_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.updateBehavior"></a>

- *Type:* str

The update behavior when the crawler finds a changed schema.

A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets"></a>

```python
def put_targets(
  catalog_targets: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets] = None,
  delta_targets: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets] = None,
  dynamo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets] = None,
  hudi_targets: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets] = None,
  iceberg_targets: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets] = None,
  jdbc_targets: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets] = None,
  mongo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets] = None,
  s3_targets: IResolvable | typing.List[GlueCrawlerTargetsS3Targets] = None
) -> None
```

###### `catalog_targets`<sup>Optional</sup> <a name="catalog_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.catalogTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]

Specifies AWS Glue Data Catalog targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#catalog_targets GlueCrawler#catalog_targets}

---

###### `delta_targets`<sup>Optional</sup> <a name="delta_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.deltaTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]

Specifies an array of Delta data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_targets GlueCrawler#delta_targets}

---

###### `dynamo_db_targets`<sup>Optional</sup> <a name="dynamo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.dynamoDbTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]

Specifies Amazon DynamoDB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dynamo_db_targets GlueCrawler#dynamo_db_targets}

---

###### `hudi_targets`<sup>Optional</sup> <a name="hudi_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.hudiTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]

Specifies Apache Hudi data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#hudi_targets GlueCrawler#hudi_targets}

---

###### `iceberg_targets`<sup>Optional</sup> <a name="iceberg_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.icebergTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]

Specifies Apache Iceberg data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#iceberg_targets GlueCrawler#iceberg_targets}

---

###### `jdbc_targets`<sup>Optional</sup> <a name="jdbc_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.jdbcTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]

Specifies JDBC targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#jdbc_targets GlueCrawler#jdbc_targets}

---

###### `mongo_db_targets`<sup>Optional</sup> <a name="mongo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.mongoDbTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]

A list of Mongo DB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#mongo_db_targets GlueCrawler#mongo_db_targets}

---

###### `s3_targets`<sup>Optional</sup> <a name="s3_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.s3Targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]

Specifies Amazon Simple Storage Service (Amazon S3) targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#s3_targets GlueCrawler#s3_targets}

---

##### `reset_classifiers` <a name="reset_classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers"></a>

```python
def reset_classifiers() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_crawler_security_configuration` <a name="reset_crawler_security_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration"></a>

```python
def reset_crawler_security_configuration() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_lake_formation_configuration` <a name="reset_lake_formation_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```python
def reset_lake_formation_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recrawl_policy` <a name="reset_recrawl_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```python
def reset_recrawl_policy() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_schema_change_policy` <a name="reset_schema_change_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```python
def reset_schema_change_policy() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawler.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawler.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawler.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueCrawler to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput">classifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput">crawler_security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">lake_formation_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput">recrawl_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">schema_change_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration">crawler_security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags">tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lake_formation_configuration`<sup>Required</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: GlueCrawlerLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `recrawl_policy`<sup>Required</sup> <a name="recrawl_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```python
recrawl_policy: GlueCrawlerRecrawlPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule"></a>

```python
schedule: GlueCrawlerScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a>

---

##### `schema_change_policy`<sup>Required</sup> <a name="schema_change_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```python
schema_change_policy: GlueCrawlerSchemaChangePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets"></a>

```python
targets: GlueCrawlerTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a>

---

##### `classifiers_input`<sup>Optional</sup> <a name="classifiers_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```python
classifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `crawler_security_configuration_input`<sup>Optional</sup> <a name="crawler_security_configuration_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput"></a>

```python
crawler_security_configuration_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `lake_formation_configuration_input`<sup>Optional</sup> <a name="lake_formation_configuration_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```python
lake_formation_configuration_input: IResolvable | GlueCrawlerLakeFormationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recrawl_policy_input`<sup>Optional</sup> <a name="recrawl_policy_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```python
recrawl_policy_input: IResolvable | GlueCrawlerRecrawlPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```python
schedule_input: IResolvable | GlueCrawlerSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `schema_change_policy_input`<sup>Optional</sup> <a name="schema_change_policy_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```python
schema_change_policy_input: IResolvable | GlueCrawlerSchemaChangePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput"></a>

```python
targets_input: IResolvable | GlueCrawlerTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers"></a>

```python
classifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `crawler_security_configuration`<sup>Required</sup> <a name="crawler_security_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration"></a>

```python
crawler_security_configuration: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  targets: GlueCrawlerTargets,
  classifiers: typing.List[str] = None,
  configuration: str = None,
  crawler_security_configuration: str = None,
  database_name: str = None,
  description: str = None,
  lake_formation_configuration: GlueCrawlerLakeFormationConfiguration = None,
  name: str = None,
  recrawl_policy: GlueCrawlerRecrawlPolicy = None,
  schedule: GlueCrawlerSchedule = None,
  schema_change_policy: GlueCrawlerSchemaChangePolicy = None,
  table_prefix: str = None,
  tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role">role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers">classifiers</a></code> | <code>typing.List[str]</code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration">configuration</a></code> | <code>str</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration">crawler_security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description">description</a></code> | <code>str</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name">name</a></code> | <code>str</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">recrawl_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">schema_change_policy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix">table_prefix</a></code> | <code>str</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags">tags</a></code> | <code>str</code> | The tags to use with this crawler. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets"></a>

```python
targets: GlueCrawlerTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```python
classifiers: typing.List[str]
```

- *Type:* typing.List[str]

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `crawler_security_configuration`<sup>Optional</sup> <a name="crawler_security_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration"></a>

```python
crawler_security_configuration: str
```

- *Type:* str

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `lake_formation_configuration`<sup>Optional</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `recrawl_policy`<sup>Optional</sup> <a name="recrawl_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```python
recrawl_policy: GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```python
schedule: GlueCrawlerSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `schema_change_policy`<sup>Optional</sup> <a name="schema_change_policy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```python
schema_change_policy: GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerLakeFormationConfiguration(
  account_id: str = None,
  use_lake_formation_credentials: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">account_id</a></code> | <code>str</code> | Required for cross account crawls. For same account crawls as the target data, this can be left as null. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">use_lake_formation_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Required for cross account crawls. For same account crawls as the target data, this can be left as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}

---

##### `use_lake_formation_credentials`<sup>Optional</sup> <a name="use_lake_formation_credentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```python
use_lake_formation_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerRecrawlPolicy(
  recrawl_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">recrawl_behavior</a></code> | <code>str</code> | Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |

---

##### `recrawl_behavior`<sup>Optional</sup> <a name="recrawl_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```python
recrawl_behavior: str
```

- *Type:* str

Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}

---

### GlueCrawlerSchedule <a name="GlueCrawlerSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerSchedule(
  schedule_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | A cron expression used to specify the schedule. |

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

A cron expression used to specify the schedule.

For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule_expression GlueCrawler#schedule_expression}

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerSchemaChangePolicy(
  delete_behavior: str = None,
  update_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">delete_behavior</a></code> | <code>str</code> | The deletion behavior when the crawler finds a deleted object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">update_behavior</a></code> | <code>str</code> | The update behavior when the crawler finds a changed schema. |

---

##### `delete_behavior`<sup>Optional</sup> <a name="delete_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```python
delete_behavior: str
```

- *Type:* str

The deletion behavior when the crawler finds a deleted object.

A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}

---

##### `update_behavior`<sup>Optional</sup> <a name="update_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```python
update_behavior: str
```

- *Type:* str

The update behavior when the crawler finds a changed schema.

A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}

---

### GlueCrawlerTargets <a name="GlueCrawlerTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargets(
  catalog_targets: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets] = None,
  delta_targets: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets] = None,
  dynamo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets] = None,
  hudi_targets: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets] = None,
  iceberg_targets: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets] = None,
  jdbc_targets: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets] = None,
  mongo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets] = None,
  s3_targets: IResolvable | typing.List[GlueCrawlerTargetsS3Targets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets">catalog_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]</code> | Specifies AWS Glue Data Catalog targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets">delta_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]</code> | Specifies an array of Delta data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets">dynamo_db_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]</code> | Specifies Amazon DynamoDB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets">hudi_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]</code> | Specifies Apache Hudi data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets">iceberg_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]</code> | Specifies Apache Iceberg data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets">jdbc_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]</code> | Specifies JDBC targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets">mongo_db_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]</code> | A list of Mongo DB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets">s3_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]</code> | Specifies Amazon Simple Storage Service (Amazon S3) targets. |

---

##### `catalog_targets`<sup>Optional</sup> <a name="catalog_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets"></a>

```python
catalog_targets: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]

Specifies AWS Glue Data Catalog targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#catalog_targets GlueCrawler#catalog_targets}

---

##### `delta_targets`<sup>Optional</sup> <a name="delta_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets"></a>

```python
delta_targets: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]

Specifies an array of Delta data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_targets GlueCrawler#delta_targets}

---

##### `dynamo_db_targets`<sup>Optional</sup> <a name="dynamo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets"></a>

```python
dynamo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]

Specifies Amazon DynamoDB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dynamo_db_targets GlueCrawler#dynamo_db_targets}

---

##### `hudi_targets`<sup>Optional</sup> <a name="hudi_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets"></a>

```python
hudi_targets: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]

Specifies Apache Hudi data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#hudi_targets GlueCrawler#hudi_targets}

---

##### `iceberg_targets`<sup>Optional</sup> <a name="iceberg_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets"></a>

```python
iceberg_targets: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]

Specifies Apache Iceberg data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#iceberg_targets GlueCrawler#iceberg_targets}

---

##### `jdbc_targets`<sup>Optional</sup> <a name="jdbc_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets"></a>

```python
jdbc_targets: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]

Specifies JDBC targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#jdbc_targets GlueCrawler#jdbc_targets}

---

##### `mongo_db_targets`<sup>Optional</sup> <a name="mongo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets"></a>

```python
mongo_db_targets: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]

A list of Mongo DB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#mongo_db_targets GlueCrawler#mongo_db_targets}

---

##### `s3_targets`<sup>Optional</sup> <a name="s3_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets"></a>

```python
s3_targets: IResolvable | typing.List[GlueCrawlerTargetsS3Targets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]

Specifies Amazon Simple Storage Service (Amazon S3) targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#s3_targets GlueCrawler#s3_targets}

---

### GlueCrawlerTargetsCatalogTargets <a name="GlueCrawlerTargetsCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsCatalogTargets(
  connection_name: str = None,
  database_name: str = None,
  dlq_event_queue_arn: str = None,
  event_queue_arn: str = None,
  tables: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database to be synchronized. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables">tables</a></code> | <code>typing.List[str]</code> | A list of the tables to be synchronized. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `dlq_event_queue_arn`<sup>Optional</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `event_queue_arn`<sup>Optional</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

A list of the tables to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#tables GlueCrawler#tables}

---

### GlueCrawlerTargetsDeltaTargets <a name="GlueCrawlerTargetsDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDeltaTargets(
  connection_name: str = None,
  create_native_delta_table: bool | IResolvable = None,
  delta_tables: typing.List[str] = None,
  write_manifest: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to use to connect to the Delta table target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable">create_native_delta_table</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables">delta_tables</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest">write_manifest</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to write the manifest files to the Delta table path. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to use to connect to the Delta table target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `create_native_delta_table`<sup>Optional</sup> <a name="create_native_delta_table" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable"></a>

```python
create_native_delta_table: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}

---

##### `delta_tables`<sup>Optional</sup> <a name="delta_tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables"></a>

```python
delta_tables: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `write_manifest`<sup>Optional</sup> <a name="write_manifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest"></a>

```python
write_manifest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to write the manifest files to the Delta table path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}

---

### GlueCrawlerTargetsDynamoDbTargets <a name="GlueCrawlerTargetsDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDynamoDbTargets(
  path: str = None,
  scan_all: bool | IResolvable = None,
  scan_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path">path</a></code> | <code>str</code> | The name of the DynamoDB table to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll">scan_all</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to scan all the records, or to sample rows from the table. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate">scan_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage of the configured read capacity units to use by the AWS Glue crawler. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path"></a>

```python
path: str
```

- *Type:* str

The name of the DynamoDB table to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `scan_all`<sup>Optional</sup> <a name="scan_all" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll"></a>

```python
scan_all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to scan all the records, or to sample rows from the table.

Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}

---

##### `scan_rate`<sup>Optional</sup> <a name="scan_rate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate"></a>

```python
scan_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the configured read capacity units to use by the AWS Glue crawler.

Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.

The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}

---

### GlueCrawlerTargetsHudiTargets <a name="GlueCrawlerTargetsHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsHudiTargets(
  connection_name: str = None,
  exclusions: typing.List[str] = None,
  maximum_traversal_depth: typing.Union[int, float] = None,
  paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to use to connect to the Hudi target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths">paths</a></code> | <code>typing.List[str]</code> | One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix . |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to use to connect to the Hudi target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `maximum_traversal_depth`<sup>Optional</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsIcebergTargets <a name="GlueCrawlerTargetsIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsIcebergTargets(
  connection_name: str = None,
  exclusions: typing.List[str] = None,
  maximum_traversal_depth: typing.Union[int, float] = None,
  paths: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to use to connect to the Iceberg target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths">paths</a></code> | <code>typing.List[str]</code> | One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix . |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to use to connect to the Iceberg target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `maximum_traversal_depth`<sup>Optional</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsJdbcTargets <a name="GlueCrawlerTargetsJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsJdbcTargets(
  connection_name: str = None,
  enable_additional_metadata: typing.List[str] = None,
  exclusions: typing.List[str] = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to use to connect to the JDBC target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata">enable_additional_metadata</a></code> | <code>typing.List[str]</code> | Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path">path</a></code> | <code>str</code> | The path of the JDBC target. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to use to connect to the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `enable_additional_metadata`<sup>Optional</sup> <a name="enable_additional_metadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata"></a>

```python
enable_additional_metadata: typing.List[str]
```

- *Type:* typing.List[str]

Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses.

RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.

If you do not need additional metadata, keep the field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

A list of glob patterns used to exclude from the crawl.

For more information, see Catalog Tables with a Crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsMongoDbTargets <a name="GlueCrawlerTargetsMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsMongoDbTargets(
  connection_name: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path">path</a></code> | <code>str</code> | The path of the Amazon DocumentDB or MongoDB target (database/collection). |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the Amazon DocumentDB or MongoDB target (database/collection).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsS3Targets <a name="GlueCrawlerTargetsS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsS3Targets(
  connection_name: str = None,
  dlq_event_queue_arn: str = None,
  event_queue_arn: str = None,
  exclusions: typing.List[str] = None,
  path: str = None,
  sample_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName">connection_name</a></code> | <code>str</code> | The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC). |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path">path</a></code> | <code>str</code> | The path to the Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `dlq_event_queue_arn`<sup>Optional</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `event_queue_arn`<sup>Optional</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

A list of glob patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `sample_size`<sup>Optional</sup> <a name="sample_size" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset.

If not set, all the files are crawled. A valid value is an integer between 1 and 249.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">reset_use_lake_formation_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_use_lake_formation_credentials` <a name="reset_use_lake_formation_credentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```python
def reset_use_lake_formation_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">use_lake_formation_credentials_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">use_lake_formation_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `use_lake_formation_credentials_input`<sup>Optional</sup> <a name="use_lake_formation_credentials_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```python
use_lake_formation_credentials_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `use_lake_formation_credentials`<sup>Required</sup> <a name="use_lake_formation_credentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```python
use_lake_formation_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerLakeFormationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerRecrawlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">reset_recrawl_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recrawl_behavior` <a name="reset_recrawl_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```python
def reset_recrawl_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">recrawl_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawl_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recrawl_behavior_input`<sup>Optional</sup> <a name="recrawl_behavior_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```python
recrawl_behavior_input: str
```

- *Type:* str

---

##### `recrawl_behavior`<sup>Required</sup> <a name="recrawl_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```python
recrawl_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerRecrawlPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerScheduleOutputReference <a name="GlueCrawlerScheduleOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">reset_delete_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">reset_update_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_behavior` <a name="reset_delete_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```python
def reset_delete_behavior() -> None
```

##### `reset_update_behavior` <a name="reset_update_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```python
def reset_update_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">delete_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">update_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">delete_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">update_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_behavior_input`<sup>Optional</sup> <a name="delete_behavior_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```python
delete_behavior_input: str
```

- *Type:* str

---

##### `update_behavior_input`<sup>Optional</sup> <a name="update_behavior_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```python
update_behavior_input: str
```

- *Type:* str

---

##### `delete_behavior`<sup>Required</sup> <a name="delete_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```python
delete_behavior: str
```

- *Type:* str

---

##### `update_behavior`<sup>Required</sup> <a name="update_behavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```python
update_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerSchemaChangePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---


### GlueCrawlerTargetsCatalogTargetsList <a name="GlueCrawlerTargetsCatalogTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsCatalogTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsCatalogTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]

---


### GlueCrawlerTargetsCatalogTargetsOutputReference <a name="GlueCrawlerTargetsCatalogTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn">reset_dlq_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn">reset_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables">reset_tables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_dlq_event_queue_arn` <a name="reset_dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn"></a>

```python
def reset_dlq_event_queue_arn() -> None
```

##### `reset_event_queue_arn` <a name="reset_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn"></a>

```python
def reset_event_queue_arn() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables"></a>

```python
def reset_tables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput">dlq_event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput">event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput">tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `dlq_event_queue_arn_input`<sup>Optional</sup> <a name="dlq_event_queue_arn_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput"></a>

```python
dlq_event_queue_arn_input: str
```

- *Type:* str

---

##### `event_queue_arn_input`<sup>Optional</sup> <a name="event_queue_arn_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput"></a>

```python
event_queue_arn_input: str
```

- *Type:* str

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput"></a>

```python
tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsCatalogTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>

---


### GlueCrawlerTargetsDeltaTargetsList <a name="GlueCrawlerTargetsDeltaTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDeltaTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsDeltaTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]

---


### GlueCrawlerTargetsDeltaTargetsOutputReference <a name="GlueCrawlerTargetsDeltaTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable">reset_create_native_delta_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables">reset_delta_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest">reset_write_manifest</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_create_native_delta_table` <a name="reset_create_native_delta_table" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable"></a>

```python
def reset_create_native_delta_table() -> None
```

##### `reset_delta_tables` <a name="reset_delta_tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables"></a>

```python
def reset_delta_tables() -> None
```

##### `reset_write_manifest` <a name="reset_write_manifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest"></a>

```python
def reset_write_manifest() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput">create_native_delta_table_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput">delta_tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput">write_manifest_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable">create_native_delta_table</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables">delta_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest">write_manifest</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `create_native_delta_table_input`<sup>Optional</sup> <a name="create_native_delta_table_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput"></a>

```python
create_native_delta_table_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delta_tables_input`<sup>Optional</sup> <a name="delta_tables_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput"></a>

```python
delta_tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_manifest_input`<sup>Optional</sup> <a name="write_manifest_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput"></a>

```python
write_manifest_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `create_native_delta_table`<sup>Required</sup> <a name="create_native_delta_table" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable"></a>

```python
create_native_delta_table: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delta_tables`<sup>Required</sup> <a name="delta_tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables"></a>

```python
delta_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_manifest`<sup>Required</sup> <a name="write_manifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest"></a>

```python
write_manifest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsDeltaTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>

---


### GlueCrawlerTargetsDynamoDbTargetsList <a name="GlueCrawlerTargetsDynamoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsDynamoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]

---


### GlueCrawlerTargetsDynamoDbTargetsOutputReference <a name="GlueCrawlerTargetsDynamoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll">reset_scan_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate">reset_scan_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_scan_all` <a name="reset_scan_all" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll"></a>

```python
def reset_scan_all() -> None
```

##### `reset_scan_rate` <a name="reset_scan_rate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate"></a>

```python
def reset_scan_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput">scan_all_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput">scan_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll">scan_all</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate">scan_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `scan_all_input`<sup>Optional</sup> <a name="scan_all_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput"></a>

```python
scan_all_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scan_rate_input`<sup>Optional</sup> <a name="scan_rate_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput"></a>

```python
scan_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `scan_all`<sup>Required</sup> <a name="scan_all" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll"></a>

```python
scan_all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scan_rate`<sup>Required</sup> <a name="scan_rate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate"></a>

```python
scan_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsDynamoDbTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>

---


### GlueCrawlerTargetsHudiTargetsList <a name="GlueCrawlerTargetsHudiTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsHudiTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsHudiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]

---


### GlueCrawlerTargetsHudiTargetsOutputReference <a name="GlueCrawlerTargetsHudiTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth">reset_maximum_traversal_depth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths">reset_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_maximum_traversal_depth` <a name="reset_maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth"></a>

```python
def reset_maximum_traversal_depth() -> None
```

##### `reset_paths` <a name="reset_paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths"></a>

```python
def reset_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput">maximum_traversal_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth_input`<sup>Optional</sup> <a name="maximum_traversal_depth_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```python
maximum_traversal_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth`<sup>Required</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsHudiTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>

---


### GlueCrawlerTargetsIcebergTargetsList <a name="GlueCrawlerTargetsIcebergTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsIcebergTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsIcebergTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]

---


### GlueCrawlerTargetsIcebergTargetsOutputReference <a name="GlueCrawlerTargetsIcebergTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth">reset_maximum_traversal_depth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths">reset_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_maximum_traversal_depth` <a name="reset_maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth"></a>

```python
def reset_maximum_traversal_depth() -> None
```

##### `reset_paths` <a name="reset_paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths"></a>

```python
def reset_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput">maximum_traversal_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth">maximum_traversal_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth_input`<sup>Optional</sup> <a name="maximum_traversal_depth_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```python
maximum_traversal_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_traversal_depth`<sup>Required</sup> <a name="maximum_traversal_depth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth"></a>

```python
maximum_traversal_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsIcebergTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>

---


### GlueCrawlerTargetsJdbcTargetsList <a name="GlueCrawlerTargetsJdbcTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsJdbcTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsJdbcTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]

---


### GlueCrawlerTargetsJdbcTargetsOutputReference <a name="GlueCrawlerTargetsJdbcTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata">reset_enable_additional_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_enable_additional_metadata` <a name="reset_enable_additional_metadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata"></a>

```python
def reset_enable_additional_metadata() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput">enable_additional_metadata_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata">enable_additional_metadata</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `enable_additional_metadata_input`<sup>Optional</sup> <a name="enable_additional_metadata_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput"></a>

```python
enable_additional_metadata_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `enable_additional_metadata`<sup>Required</sup> <a name="enable_additional_metadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata"></a>

```python
enable_additional_metadata: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsJdbcTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>

---


### GlueCrawlerTargetsMongoDbTargetsList <a name="GlueCrawlerTargetsMongoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsMongoDbTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsMongoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]

---


### GlueCrawlerTargetsMongoDbTargetsOutputReference <a name="GlueCrawlerTargetsMongoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsMongoDbTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>

---


### GlueCrawlerTargetsOutputReference <a name="GlueCrawlerTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets">put_catalog_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets">put_delta_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets">put_dynamo_db_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets">put_hudi_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets">put_iceberg_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets">put_jdbc_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets">put_mongo_db_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets">put_s3_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets">reset_catalog_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets">reset_delta_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets">reset_dynamo_db_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets">reset_hudi_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets">reset_iceberg_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets">reset_jdbc_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets">reset_mongo_db_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets">reset_s3_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog_targets` <a name="put_catalog_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets"></a>

```python
def put_catalog_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]

---

##### `put_delta_targets` <a name="put_delta_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets"></a>

```python
def put_delta_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]

---

##### `put_dynamo_db_targets` <a name="put_dynamo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets"></a>

```python
def put_dynamo_db_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]

---

##### `put_hudi_targets` <a name="put_hudi_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets"></a>

```python
def put_hudi_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]

---

##### `put_iceberg_targets` <a name="put_iceberg_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets"></a>

```python
def put_iceberg_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]

---

##### `put_jdbc_targets` <a name="put_jdbc_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets"></a>

```python
def put_jdbc_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]

---

##### `put_mongo_db_targets` <a name="put_mongo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets"></a>

```python
def put_mongo_db_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]

---

##### `put_s3_targets` <a name="put_s3_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets"></a>

```python
def put_s3_targets(
  value: IResolvable | typing.List[GlueCrawlerTargetsS3Targets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]

---

##### `reset_catalog_targets` <a name="reset_catalog_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets"></a>

```python
def reset_catalog_targets() -> None
```

##### `reset_delta_targets` <a name="reset_delta_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets"></a>

```python
def reset_delta_targets() -> None
```

##### `reset_dynamo_db_targets` <a name="reset_dynamo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets"></a>

```python
def reset_dynamo_db_targets() -> None
```

##### `reset_hudi_targets` <a name="reset_hudi_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets"></a>

```python
def reset_hudi_targets() -> None
```

##### `reset_iceberg_targets` <a name="reset_iceberg_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets"></a>

```python
def reset_iceberg_targets() -> None
```

##### `reset_jdbc_targets` <a name="reset_jdbc_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets"></a>

```python
def reset_jdbc_targets() -> None
```

##### `reset_mongo_db_targets` <a name="reset_mongo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets"></a>

```python
def reset_mongo_db_targets() -> None
```

##### `reset_s3_targets` <a name="reset_s3_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets"></a>

```python
def reset_s3_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets">catalog_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets">delta_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets">dynamo_db_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets">hudi_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets">iceberg_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets">jdbc_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets">mongo_db_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets">s3_targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput">catalog_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput">delta_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput">dynamo_db_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput">hudi_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput">iceberg_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput">jdbc_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput">mongo_db_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput">s3_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_targets`<sup>Required</sup> <a name="catalog_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets"></a>

```python
catalog_targets: GlueCrawlerTargetsCatalogTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a>

---

##### `delta_targets`<sup>Required</sup> <a name="delta_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets"></a>

```python
delta_targets: GlueCrawlerTargetsDeltaTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a>

---

##### `dynamo_db_targets`<sup>Required</sup> <a name="dynamo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets"></a>

```python
dynamo_db_targets: GlueCrawlerTargetsDynamoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a>

---

##### `hudi_targets`<sup>Required</sup> <a name="hudi_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets"></a>

```python
hudi_targets: GlueCrawlerTargetsHudiTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a>

---

##### `iceberg_targets`<sup>Required</sup> <a name="iceberg_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets"></a>

```python
iceberg_targets: GlueCrawlerTargetsIcebergTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a>

---

##### `jdbc_targets`<sup>Required</sup> <a name="jdbc_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets"></a>

```python
jdbc_targets: GlueCrawlerTargetsJdbcTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a>

---

##### `mongo_db_targets`<sup>Required</sup> <a name="mongo_db_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets"></a>

```python
mongo_db_targets: GlueCrawlerTargetsMongoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a>

---

##### `s3_targets`<sup>Required</sup> <a name="s3_targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets"></a>

```python
s3_targets: GlueCrawlerTargetsS3TargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a>

---

##### `catalog_targets_input`<sup>Optional</sup> <a name="catalog_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput"></a>

```python
catalog_targets_input: IResolvable | typing.List[GlueCrawlerTargetsCatalogTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>]

---

##### `delta_targets_input`<sup>Optional</sup> <a name="delta_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput"></a>

```python
delta_targets_input: IResolvable | typing.List[GlueCrawlerTargetsDeltaTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>]

---

##### `dynamo_db_targets_input`<sup>Optional</sup> <a name="dynamo_db_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput"></a>

```python
dynamo_db_targets_input: IResolvable | typing.List[GlueCrawlerTargetsDynamoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>]

---

##### `hudi_targets_input`<sup>Optional</sup> <a name="hudi_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput"></a>

```python
hudi_targets_input: IResolvable | typing.List[GlueCrawlerTargetsHudiTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>]

---

##### `iceberg_targets_input`<sup>Optional</sup> <a name="iceberg_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput"></a>

```python
iceberg_targets_input: IResolvable | typing.List[GlueCrawlerTargetsIcebergTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>]

---

##### `jdbc_targets_input`<sup>Optional</sup> <a name="jdbc_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput"></a>

```python
jdbc_targets_input: IResolvable | typing.List[GlueCrawlerTargetsJdbcTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>]

---

##### `mongo_db_targets_input`<sup>Optional</sup> <a name="mongo_db_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput"></a>

```python
mongo_db_targets_input: IResolvable | typing.List[GlueCrawlerTargetsMongoDbTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>]

---

##### `s3_targets_input`<sup>Optional</sup> <a name="s3_targets_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput"></a>

```python
s3_targets_input: IResolvable | typing.List[GlueCrawlerTargetsS3Targets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---


### GlueCrawlerTargetsS3TargetsList <a name="GlueCrawlerTargetsS3TargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsS3TargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCrawlerTargetsS3TargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCrawlerTargetsS3Targets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>]

---


### GlueCrawlerTargetsS3TargetsOutputReference <a name="GlueCrawlerTargetsS3TargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_crawler

glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn">reset_dlq_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn">reset_event_queue_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize">reset_sample_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_dlq_event_queue_arn` <a name="reset_dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn"></a>

```python
def reset_dlq_event_queue_arn() -> None
```

##### `reset_event_queue_arn` <a name="reset_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn"></a>

```python
def reset_event_queue_arn() -> None
```

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_sample_size` <a name="reset_sample_size" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize"></a>

```python
def reset_sample_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput">dlq_event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput">event_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput">sample_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn">dlq_event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn">event_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize">sample_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `dlq_event_queue_arn_input`<sup>Optional</sup> <a name="dlq_event_queue_arn_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput"></a>

```python
dlq_event_queue_arn_input: str
```

- *Type:* str

---

##### `event_queue_arn_input`<sup>Optional</sup> <a name="event_queue_arn_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput"></a>

```python
event_queue_arn_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `sample_size_input`<sup>Optional</sup> <a name="sample_size_input" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput"></a>

```python
sample_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `dlq_event_queue_arn`<sup>Required</sup> <a name="dlq_event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn"></a>

```python
dlq_event_queue_arn: str
```

- *Type:* str

---

##### `event_queue_arn`<sup>Required</sup> <a name="event_queue_arn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn"></a>

```python
event_queue_arn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `sample_size`<sup>Required</sup> <a name="sample_size" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize"></a>

```python
sample_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCrawlerTargetsS3Targets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>

---



