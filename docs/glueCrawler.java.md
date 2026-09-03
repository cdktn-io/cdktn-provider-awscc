# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktn/provider-awscc.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler awscc_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawler;

GlueCrawler.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .targets(GlueCrawlerTargets)
//  .classifiers(java.util.List<java.lang.String>)
//  .configuration(java.lang.String)
//  .crawlerSecurityConfiguration(java.lang.String)
//  .databaseName(java.lang.String)
//  .description(java.lang.String)
//  .lakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration)
//  .name(java.lang.String)
//  .recrawlPolicy(GlueCrawlerRecrawlPolicy)
//  .schedule(GlueCrawlerSchedule)
//  .schemaChangePolicy(GlueCrawlerSchemaChangePolicy)
//  .tablePrefix(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.crawlerSecurityConfiguration">crawlerSecurityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | The tags to use with this crawler. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.targets"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.classifiers"></a>

- *Type:* java.util.List<java.lang.String>

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="crawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.crawlerSecurityConfiguration"></a>

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `lakeFormationConfiguration`<sup>Optional</sup> <a name="lakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.lakeFormationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="recrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.recrawlPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="schemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.schemaChangePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tablePrefix"></a>

- *Type:* java.lang.String

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration">putLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy">putRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy">putSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers">resetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration">resetCrawlerSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">resetLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy">resetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy">resetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLakeFormationConfiguration` <a name="putLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```java
public void putLakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `putRecrawlPolicy` <a name="putRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```java
public void putRecrawlPolicy(GlueCrawlerRecrawlPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule"></a>

```java
public void putSchedule(GlueCrawlerSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `putSchemaChangePolicy` <a name="putSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```java
public void putSchemaChangePolicy(GlueCrawlerSchemaChangePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets"></a>

```java
public void putTargets(GlueCrawlerTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `resetClassifiers` <a name="resetClassifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers"></a>

```java
public void resetClassifiers()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetCrawlerSecurityConfiguration` <a name="resetCrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration"></a>

```java
public void resetCrawlerSecurityConfiguration()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLakeFormationConfiguration` <a name="resetLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```java
public void resetLakeFormationConfiguration()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName"></a>

```java
public void resetName()
```

##### `resetRecrawlPolicy` <a name="resetRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```java
public void resetRecrawlPolicy()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSchemaChangePolicy` <a name="resetSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```java
public void resetSchemaChangePolicy()
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```java
public void resetTablePrefix()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawler;

GlueCrawler.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawler;

GlueCrawler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawler;

GlueCrawler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawler;

GlueCrawler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueCrawler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueCrawler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput">classifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput">crawlerSecurityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">lakeFormationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput">recrawlPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">schemaChangePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput">tablePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration">crawlerSecurityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lakeFormationConfiguration`<sup>Required</sup> <a name="lakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```java
public GlueCrawlerLakeFormationConfigurationOutputReference getLakeFormationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `recrawlPolicy`<sup>Required</sup> <a name="recrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```java
public GlueCrawlerRecrawlPolicyOutputReference getRecrawlPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule"></a>

```java
public GlueCrawlerScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a>

---

##### `schemaChangePolicy`<sup>Required</sup> <a name="schemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```java
public GlueCrawlerSchemaChangePolicyOutputReference getSchemaChangePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets"></a>

```java
public GlueCrawlerTargetsOutputReference getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a>

---

##### `classifiersInput`<sup>Optional</sup> <a name="classifiersInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```java
public java.util.List<java.lang.String> getClassifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `crawlerSecurityConfigurationInput`<sup>Optional</sup> <a name="crawlerSecurityConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput"></a>

```java
public java.lang.String getCrawlerSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `lakeFormationConfigurationInput`<sup>Optional</sup> <a name="lakeFormationConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```java
public IResolvable|GlueCrawlerLakeFormationConfiguration getLakeFormationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recrawlPolicyInput`<sup>Optional</sup> <a name="recrawlPolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```java
public IResolvable|GlueCrawlerRecrawlPolicy getRecrawlPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```java
public IResolvable|GlueCrawlerSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `schemaChangePolicyInput`<sup>Optional</sup> <a name="schemaChangePolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```java
public IResolvable|GlueCrawlerSchemaChangePolicy getSchemaChangePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```java
public java.lang.String getTablePrefixInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput"></a>

```java
public IResolvable|GlueCrawlerTargets getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers"></a>

```java
public java.util.List<java.lang.String> getClassifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `crawlerSecurityConfiguration`<sup>Required</sup> <a name="crawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration"></a>

```java
public java.lang.String getCrawlerSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerConfig;

GlueCrawlerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .targets(GlueCrawlerTargets)
//  .classifiers(java.util.List<java.lang.String>)
//  .configuration(java.lang.String)
//  .crawlerSecurityConfiguration(java.lang.String)
//  .databaseName(java.lang.String)
//  .description(java.lang.String)
//  .lakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration)
//  .name(java.lang.String)
//  .recrawlPolicy(GlueCrawlerRecrawlPolicy)
//  .schedule(GlueCrawlerSchedule)
//  .schemaChangePolicy(GlueCrawlerSchemaChangePolicy)
//  .tablePrefix(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role">role</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers">classifiers</a></code> | <code>java.util.List<java.lang.String></code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration">crawlerSecurityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix">tablePrefix</a></code> | <code>java.lang.String</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | The tags to use with this crawler. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets"></a>

```java
public GlueCrawlerTargets getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```java
public java.util.List<java.lang.String> getClassifiers();
```

- *Type:* java.util.List<java.lang.String>

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="crawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration"></a>

```java
public java.lang.String getCrawlerSecurityConfiguration();
```

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `lakeFormationConfiguration`<sup>Optional</sup> <a name="lakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```java
public GlueCrawlerLakeFormationConfiguration getLakeFormationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="recrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```java
public GlueCrawlerRecrawlPolicy getRecrawlPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```java
public GlueCrawlerSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="schemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```java
public GlueCrawlerSchemaChangePolicy getSchemaChangePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```java
public java.lang.String getTablePrefix();
```

- *Type:* java.lang.String

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerLakeFormationConfiguration;

GlueCrawlerLakeFormationConfiguration.builder()
//  .accountId(java.lang.String)
//  .useLakeFormationCredentials(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Required for cross account crawls. For same account crawls as the target data, this can be left as null. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">useLakeFormationCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Required for cross account crawls. For same account crawls as the target data, this can be left as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}

---

##### `useLakeFormationCredentials`<sup>Optional</sup> <a name="useLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```java
public java.lang.Boolean|IResolvable getUseLakeFormationCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerRecrawlPolicy;

GlueCrawlerRecrawlPolicy.builder()
//  .recrawlBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">recrawlBehavior</a></code> | <code>java.lang.String</code> | Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |

---

##### `recrawlBehavior`<sup>Optional</sup> <a name="recrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```java
public java.lang.String getRecrawlBehavior();
```

- *Type:* java.lang.String

Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}

---

### GlueCrawlerSchedule <a name="GlueCrawlerSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerSchedule;

GlueCrawlerSchedule.builder()
//  .scheduleExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A cron expression used to specify the schedule. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

A cron expression used to specify the schedule.

For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#schedule_expression GlueCrawler#schedule_expression}

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerSchemaChangePolicy;

GlueCrawlerSchemaChangePolicy.builder()
//  .deleteBehavior(java.lang.String)
//  .updateBehavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">deleteBehavior</a></code> | <code>java.lang.String</code> | The deletion behavior when the crawler finds a deleted object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">updateBehavior</a></code> | <code>java.lang.String</code> | The update behavior when the crawler finds a changed schema. |

---

##### `deleteBehavior`<sup>Optional</sup> <a name="deleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```java
public java.lang.String getDeleteBehavior();
```

- *Type:* java.lang.String

The deletion behavior when the crawler finds a deleted object.

A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}

---

##### `updateBehavior`<sup>Optional</sup> <a name="updateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```java
public java.lang.String getUpdateBehavior();
```

- *Type:* java.lang.String

The update behavior when the crawler finds a changed schema.

A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}

---

### GlueCrawlerTargets <a name="GlueCrawlerTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargets;

GlueCrawlerTargets.builder()
//  .catalogTargets(IResolvable|java.util.List<GlueCrawlerTargetsCatalogTargets>)
//  .deltaTargets(IResolvable|java.util.List<GlueCrawlerTargetsDeltaTargets>)
//  .dynamoDbTargets(IResolvable|java.util.List<GlueCrawlerTargetsDynamoDbTargets>)
//  .hudiTargets(IResolvable|java.util.List<GlueCrawlerTargetsHudiTargets>)
//  .icebergTargets(IResolvable|java.util.List<GlueCrawlerTargetsIcebergTargets>)
//  .jdbcTargets(IResolvable|java.util.List<GlueCrawlerTargetsJdbcTargets>)
//  .mongoDbTargets(IResolvable|java.util.List<GlueCrawlerTargetsMongoDbTargets>)
//  .s3Targets(IResolvable|java.util.List<GlueCrawlerTargetsS3Targets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets">catalogTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>></code> | Specifies AWS Glue Data Catalog targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets">deltaTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>></code> | Specifies an array of Delta data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets">dynamoDbTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>></code> | Specifies Amazon DynamoDB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets">hudiTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>></code> | Specifies Apache Hudi data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets">icebergTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>></code> | Specifies Apache Iceberg data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets">jdbcTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>></code> | Specifies JDBC targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets">mongoDbTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>></code> | A list of Mongo DB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets">s3Targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>></code> | Specifies Amazon Simple Storage Service (Amazon S3) targets. |

---

##### `catalogTargets`<sup>Optional</sup> <a name="catalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsCatalogTargets> getCatalogTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>>

Specifies AWS Glue Data Catalog targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#catalog_targets GlueCrawler#catalog_targets}

---

##### `deltaTargets`<sup>Optional</sup> <a name="deltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDeltaTargets> getDeltaTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>>

Specifies an array of Delta data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#delta_targets GlueCrawler#delta_targets}

---

##### `dynamoDbTargets`<sup>Optional</sup> <a name="dynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDynamoDbTargets> getDynamoDbTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>>

Specifies Amazon DynamoDB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#dynamo_db_targets GlueCrawler#dynamo_db_targets}

---

##### `hudiTargets`<sup>Optional</sup> <a name="hudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsHudiTargets> getHudiTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>>

Specifies Apache Hudi data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#hudi_targets GlueCrawler#hudi_targets}

---

##### `icebergTargets`<sup>Optional</sup> <a name="icebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsIcebergTargets> getIcebergTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>>

Specifies Apache Iceberg data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#iceberg_targets GlueCrawler#iceberg_targets}

---

##### `jdbcTargets`<sup>Optional</sup> <a name="jdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsJdbcTargets> getJdbcTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>>

Specifies JDBC targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#jdbc_targets GlueCrawler#jdbc_targets}

---

##### `mongoDbTargets`<sup>Optional</sup> <a name="mongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsMongoDbTargets> getMongoDbTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>>

A list of Mongo DB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#mongo_db_targets GlueCrawler#mongo_db_targets}

---

##### `s3Targets`<sup>Optional</sup> <a name="s3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsS3Targets> getS3Targets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>>

Specifies Amazon Simple Storage Service (Amazon S3) targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#s3_targets GlueCrawler#s3_targets}

---

### GlueCrawlerTargetsCatalogTargets <a name="GlueCrawlerTargetsCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsCatalogTargets;

GlueCrawlerTargetsCatalogTargets.builder()
//  .connectionName(java.lang.String)
//  .databaseName(java.lang.String)
//  .dlqEventQueueArn(java.lang.String)
//  .eventQueueArn(java.lang.String)
//  .tables(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database to be synchronized. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | A list of the tables to be synchronized. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

A list of the tables to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#tables GlueCrawler#tables}

---

### GlueCrawlerTargetsDeltaTargets <a name="GlueCrawlerTargetsDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDeltaTargets;

GlueCrawlerTargetsDeltaTargets.builder()
//  .connectionName(java.lang.String)
//  .createNativeDeltaTable(java.lang.Boolean|IResolvable)
//  .deltaTables(java.util.List<java.lang.String>)
//  .writeManifest(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to use to connect to the Delta table target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable">createNativeDeltaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables">deltaTables</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest">writeManifest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to write the manifest files to the Delta table path. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to use to connect to the Delta table target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `createNativeDeltaTable`<sup>Optional</sup> <a name="createNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable"></a>

```java
public java.lang.Boolean|IResolvable getCreateNativeDeltaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}

---

##### `deltaTables`<sup>Optional</sup> <a name="deltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables"></a>

```java
public java.util.List<java.lang.String> getDeltaTables();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `writeManifest`<sup>Optional</sup> <a name="writeManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest"></a>

```java
public java.lang.Boolean|IResolvable getWriteManifest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to write the manifest files to the Delta table path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}

---

### GlueCrawlerTargetsDynamoDbTargets <a name="GlueCrawlerTargetsDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDynamoDbTargets;

GlueCrawlerTargetsDynamoDbTargets.builder()
//  .path(java.lang.String)
//  .scanAll(java.lang.Boolean|IResolvable)
//  .scanRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path">path</a></code> | <code>java.lang.String</code> | The name of the DynamoDB table to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to scan all the records, or to sample rows from the table. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate">scanRate</a></code> | <code>java.lang.Number</code> | The percentage of the configured read capacity units to use by the AWS Glue crawler. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The name of the DynamoDB table to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `scanAll`<sup>Optional</sup> <a name="scanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll"></a>

```java
public java.lang.Boolean|IResolvable getScanAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to scan all the records, or to sample rows from the table.

Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}

---

##### `scanRate`<sup>Optional</sup> <a name="scanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate"></a>

```java
public java.lang.Number getScanRate();
```

- *Type:* java.lang.Number

The percentage of the configured read capacity units to use by the AWS Glue crawler.

Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.

The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}

---

### GlueCrawlerTargetsHudiTargets <a name="GlueCrawlerTargetsHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsHudiTargets;

GlueCrawlerTargetsHudiTargets.builder()
//  .connectionName(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .maximumTraversalDepth(java.lang.Number)
//  .paths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to use to connect to the Hudi target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth">maximumTraversalDepth</a></code> | <code>java.lang.Number</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix . |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to use to connect to the Hudi target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `maximumTraversalDepth`<sup>Optional</sup> <a name="maximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth"></a>

```java
public java.lang.Number getMaximumTraversalDepth();
```

- *Type:* java.lang.Number

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsIcebergTargets <a name="GlueCrawlerTargetsIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsIcebergTargets;

GlueCrawlerTargetsIcebergTargets.builder()
//  .connectionName(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .maximumTraversalDepth(java.lang.Number)
//  .paths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to use to connect to the Iceberg target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth">maximumTraversalDepth</a></code> | <code>java.lang.Number</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix . |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to use to connect to the Iceberg target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `maximumTraversalDepth`<sup>Optional</sup> <a name="maximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth"></a>

```java
public java.lang.Number getMaximumTraversalDepth();
```

- *Type:* java.lang.Number

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsJdbcTargets <a name="GlueCrawlerTargetsJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsJdbcTargets;

GlueCrawlerTargetsJdbcTargets.builder()
//  .connectionName(java.lang.String)
//  .enableAdditionalMetadata(java.util.List<java.lang.String>)
//  .exclusions(java.util.List<java.lang.String>)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to use to connect to the JDBC target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>java.util.List<java.lang.String></code> | Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path">path</a></code> | <code>java.lang.String</code> | The path of the JDBC target. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to use to connect to the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `enableAdditionalMetadata`<sup>Optional</sup> <a name="enableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadata();
```

- *Type:* java.util.List<java.lang.String>

Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses.

RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.

If you do not need additional metadata, keep the field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

A list of glob patterns used to exclude from the crawl.

For more information, see Catalog Tables with a Crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsMongoDbTargets <a name="GlueCrawlerTargetsMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsMongoDbTargets;

GlueCrawlerTargetsMongoDbTargets.builder()
//  .connectionName(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path">path</a></code> | <code>java.lang.String</code> | The path of the Amazon DocumentDB or MongoDB target (database/collection). |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the Amazon DocumentDB or MongoDB target (database/collection).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsS3Targets <a name="GlueCrawlerTargetsS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsS3Targets;

GlueCrawlerTargetsS3Targets.builder()
//  .connectionName(java.lang.String)
//  .dlqEventQueueArn(java.lang.String)
//  .eventQueueArn(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .sampleSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC). |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path">path</a></code> | <code>java.lang.String</code> | The path to the Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

A list of glob patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset.

If not set, all the files are crawled. A valid value is an integer between 1 and 249.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerLakeFormationConfigurationOutputReference;

new GlueCrawlerLakeFormationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">resetUseLakeFormationCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetUseLakeFormationCredentials` <a name="resetUseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```java
public void resetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">useLakeFormationCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">useLakeFormationCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `useLakeFormationCredentialsInput`<sup>Optional</sup> <a name="useLakeFormationCredentialsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLakeFormationCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `useLakeFormationCredentials`<sup>Required</sup> <a name="useLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```java
public java.lang.Boolean|IResolvable getUseLakeFormationCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerLakeFormationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerRecrawlPolicyOutputReference;

new GlueCrawlerRecrawlPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">resetRecrawlBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecrawlBehavior` <a name="resetRecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```java
public void resetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">recrawlBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawlBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recrawlBehaviorInput`<sup>Optional</sup> <a name="recrawlBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```java
public java.lang.String getRecrawlBehaviorInput();
```

- *Type:* java.lang.String

---

##### `recrawlBehavior`<sup>Required</sup> <a name="recrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```java
public java.lang.String getRecrawlBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerRecrawlPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerScheduleOutputReference <a name="GlueCrawlerScheduleOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerScheduleOutputReference;

new GlueCrawlerScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerSchemaChangePolicyOutputReference;

new GlueCrawlerSchemaChangePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">resetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">resetUpdateBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteBehavior` <a name="resetDeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```java
public void resetDeleteBehavior()
```

##### `resetUpdateBehavior` <a name="resetUpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```java
public void resetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">deleteBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">updateBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">deleteBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">updateBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteBehaviorInput`<sup>Optional</sup> <a name="deleteBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```java
public java.lang.String getDeleteBehaviorInput();
```

- *Type:* java.lang.String

---

##### `updateBehaviorInput`<sup>Optional</sup> <a name="updateBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```java
public java.lang.String getUpdateBehaviorInput();
```

- *Type:* java.lang.String

---

##### `deleteBehavior`<sup>Required</sup> <a name="deleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```java
public java.lang.String getDeleteBehavior();
```

- *Type:* java.lang.String

---

##### `updateBehavior`<sup>Required</sup> <a name="updateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```java
public java.lang.String getUpdateBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerSchemaChangePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---


### GlueCrawlerTargetsCatalogTargetsList <a name="GlueCrawlerTargetsCatalogTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsCatalogTargetsList;

new GlueCrawlerTargetsCatalogTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get"></a>

```java
public GlueCrawlerTargetsCatalogTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsCatalogTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>>

---


### GlueCrawlerTargetsCatalogTargetsOutputReference <a name="GlueCrawlerTargetsCatalogTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsCatalogTargetsOutputReference;

new GlueCrawlerTargetsCatalogTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn">resetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn">resetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables">resetTables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDlqEventQueueArn` <a name="resetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn"></a>

```java
public void resetDlqEventQueueArn()
```

##### `resetEventQueueArn` <a name="resetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn"></a>

```java
public void resetEventQueueArn()
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables"></a>

```java
public void resetTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput">dlqEventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput">eventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput">tablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArnInput`<sup>Optional</sup> <a name="dlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput"></a>

```java
public java.lang.String getDlqEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `eventQueueArnInput`<sup>Optional</sup> <a name="eventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput"></a>

```java
public java.lang.String getEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput"></a>

```java
public java.util.List<java.lang.String> getTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArn`<sup>Required</sup> <a name="dlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

---

##### `eventQueueArn`<sup>Required</sup> <a name="eventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsCatalogTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>

---


### GlueCrawlerTargetsDeltaTargetsList <a name="GlueCrawlerTargetsDeltaTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDeltaTargetsList;

new GlueCrawlerTargetsDeltaTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get"></a>

```java
public GlueCrawlerTargetsDeltaTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDeltaTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>>

---


### GlueCrawlerTargetsDeltaTargetsOutputReference <a name="GlueCrawlerTargetsDeltaTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDeltaTargetsOutputReference;

new GlueCrawlerTargetsDeltaTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable">resetCreateNativeDeltaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables">resetDeltaTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest">resetWriteManifest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetCreateNativeDeltaTable` <a name="resetCreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable"></a>

```java
public void resetCreateNativeDeltaTable()
```

##### `resetDeltaTables` <a name="resetDeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables"></a>

```java
public void resetDeltaTables()
```

##### `resetWriteManifest` <a name="resetWriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest"></a>

```java
public void resetWriteManifest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput">createNativeDeltaTableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput">deltaTablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput">writeManifestInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable">createNativeDeltaTable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables">deltaTables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest">writeManifest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `createNativeDeltaTableInput`<sup>Optional</sup> <a name="createNativeDeltaTableInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateNativeDeltaTableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deltaTablesInput`<sup>Optional</sup> <a name="deltaTablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput"></a>

```java
public java.util.List<java.lang.String> getDeltaTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeManifestInput`<sup>Optional</sup> <a name="writeManifestInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput"></a>

```java
public java.lang.Boolean|IResolvable getWriteManifestInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `createNativeDeltaTable`<sup>Required</sup> <a name="createNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable"></a>

```java
public java.lang.Boolean|IResolvable getCreateNativeDeltaTable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deltaTables`<sup>Required</sup> <a name="deltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables"></a>

```java
public java.util.List<java.lang.String> getDeltaTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `writeManifest`<sup>Required</sup> <a name="writeManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest"></a>

```java
public java.lang.Boolean|IResolvable getWriteManifest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsDeltaTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>

---


### GlueCrawlerTargetsDynamoDbTargetsList <a name="GlueCrawlerTargetsDynamoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDynamoDbTargetsList;

new GlueCrawlerTargetsDynamoDbTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get"></a>

```java
public GlueCrawlerTargetsDynamoDbTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDynamoDbTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>>

---


### GlueCrawlerTargetsDynamoDbTargetsOutputReference <a name="GlueCrawlerTargetsDynamoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference;

new GlueCrawlerTargetsDynamoDbTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll">resetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate">resetScanRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetScanAll` <a name="resetScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll"></a>

```java
public void resetScanAll()
```

##### `resetScanRate` <a name="resetScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate"></a>

```java
public void resetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput">scanAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput">scanRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll">scanAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate">scanRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `scanAllInput`<sup>Optional</sup> <a name="scanAllInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput"></a>

```java
public java.lang.Boolean|IResolvable getScanAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scanRateInput`<sup>Optional</sup> <a name="scanRateInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput"></a>

```java
public java.lang.Number getScanRateInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `scanAll`<sup>Required</sup> <a name="scanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll"></a>

```java
public java.lang.Boolean|IResolvable getScanAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scanRate`<sup>Required</sup> <a name="scanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate"></a>

```java
public java.lang.Number getScanRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsDynamoDbTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>

---


### GlueCrawlerTargetsHudiTargetsList <a name="GlueCrawlerTargetsHudiTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsHudiTargetsList;

new GlueCrawlerTargetsHudiTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get"></a>

```java
public GlueCrawlerTargetsHudiTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsHudiTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>>

---


### GlueCrawlerTargetsHudiTargetsOutputReference <a name="GlueCrawlerTargetsHudiTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsHudiTargetsOutputReference;

new GlueCrawlerTargetsHudiTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth">resetMaximumTraversalDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetMaximumTraversalDepth` <a name="resetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth"></a>

```java
public void resetMaximumTraversalDepth()
```

##### `resetPaths` <a name="resetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput">maximumTraversalDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth">maximumTraversalDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumTraversalDepthInput`<sup>Optional</sup> <a name="maximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```java
public java.lang.Number getMaximumTraversalDepthInput();
```

- *Type:* java.lang.Number

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumTraversalDepth`<sup>Required</sup> <a name="maximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth"></a>

```java
public java.lang.Number getMaximumTraversalDepth();
```

- *Type:* java.lang.Number

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsHudiTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>

---


### GlueCrawlerTargetsIcebergTargetsList <a name="GlueCrawlerTargetsIcebergTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsIcebergTargetsList;

new GlueCrawlerTargetsIcebergTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get"></a>

```java
public GlueCrawlerTargetsIcebergTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsIcebergTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>>

---


### GlueCrawlerTargetsIcebergTargetsOutputReference <a name="GlueCrawlerTargetsIcebergTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsIcebergTargetsOutputReference;

new GlueCrawlerTargetsIcebergTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth">resetMaximumTraversalDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetMaximumTraversalDepth` <a name="resetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth"></a>

```java
public void resetMaximumTraversalDepth()
```

##### `resetPaths` <a name="resetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths"></a>

```java
public void resetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput">maximumTraversalDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth">maximumTraversalDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumTraversalDepthInput`<sup>Optional</sup> <a name="maximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```java
public java.lang.Number getMaximumTraversalDepthInput();
```

- *Type:* java.lang.Number

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumTraversalDepth`<sup>Required</sup> <a name="maximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth"></a>

```java
public java.lang.Number getMaximumTraversalDepth();
```

- *Type:* java.lang.Number

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsIcebergTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>

---


### GlueCrawlerTargetsJdbcTargetsList <a name="GlueCrawlerTargetsJdbcTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsJdbcTargetsList;

new GlueCrawlerTargetsJdbcTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get"></a>

```java
public GlueCrawlerTargetsJdbcTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsJdbcTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>>

---


### GlueCrawlerTargetsJdbcTargetsOutputReference <a name="GlueCrawlerTargetsJdbcTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsJdbcTargetsOutputReference;

new GlueCrawlerTargetsJdbcTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata">resetEnableAdditionalMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetEnableAdditionalMetadata` <a name="resetEnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata"></a>

```java
public void resetEnableAdditionalMetadata()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput">enableAdditionalMetadataInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata">enableAdditionalMetadata</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `enableAdditionalMetadataInput`<sup>Optional</sup> <a name="enableAdditionalMetadataInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadataInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `enableAdditionalMetadata`<sup>Required</sup> <a name="enableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata"></a>

```java
public java.util.List<java.lang.String> getEnableAdditionalMetadata();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsJdbcTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>

---


### GlueCrawlerTargetsMongoDbTargetsList <a name="GlueCrawlerTargetsMongoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsMongoDbTargetsList;

new GlueCrawlerTargetsMongoDbTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get"></a>

```java
public GlueCrawlerTargetsMongoDbTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsMongoDbTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>>

---


### GlueCrawlerTargetsMongoDbTargetsOutputReference <a name="GlueCrawlerTargetsMongoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsMongoDbTargetsOutputReference;

new GlueCrawlerTargetsMongoDbTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsMongoDbTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>

---


### GlueCrawlerTargetsOutputReference <a name="GlueCrawlerTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsOutputReference;

new GlueCrawlerTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets">putCatalogTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets">putDeltaTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets">putDynamoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets">putHudiTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets">putIcebergTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets">putJdbcTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets">putMongoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets">putS3Targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets">resetCatalogTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets">resetDeltaTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets">resetDynamoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets">resetHudiTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets">resetIcebergTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets">resetJdbcTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets">resetMongoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets">resetS3Targets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalogTargets` <a name="putCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets"></a>

```java
public void putCatalogTargets(IResolvable|java.util.List<GlueCrawlerTargetsCatalogTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>>

---

##### `putDeltaTargets` <a name="putDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets"></a>

```java
public void putDeltaTargets(IResolvable|java.util.List<GlueCrawlerTargetsDeltaTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>>

---

##### `putDynamoDbTargets` <a name="putDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets"></a>

```java
public void putDynamoDbTargets(IResolvable|java.util.List<GlueCrawlerTargetsDynamoDbTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>>

---

##### `putHudiTargets` <a name="putHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets"></a>

```java
public void putHudiTargets(IResolvable|java.util.List<GlueCrawlerTargetsHudiTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>>

---

##### `putIcebergTargets` <a name="putIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets"></a>

```java
public void putIcebergTargets(IResolvable|java.util.List<GlueCrawlerTargetsIcebergTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>>

---

##### `putJdbcTargets` <a name="putJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets"></a>

```java
public void putJdbcTargets(IResolvable|java.util.List<GlueCrawlerTargetsJdbcTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>>

---

##### `putMongoDbTargets` <a name="putMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets"></a>

```java
public void putMongoDbTargets(IResolvable|java.util.List<GlueCrawlerTargetsMongoDbTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>>

---

##### `putS3Targets` <a name="putS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets"></a>

```java
public void putS3Targets(IResolvable|java.util.List<GlueCrawlerTargetsS3Targets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>>

---

##### `resetCatalogTargets` <a name="resetCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets"></a>

```java
public void resetCatalogTargets()
```

##### `resetDeltaTargets` <a name="resetDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets"></a>

```java
public void resetDeltaTargets()
```

##### `resetDynamoDbTargets` <a name="resetDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets"></a>

```java
public void resetDynamoDbTargets()
```

##### `resetHudiTargets` <a name="resetHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets"></a>

```java
public void resetHudiTargets()
```

##### `resetIcebergTargets` <a name="resetIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets"></a>

```java
public void resetIcebergTargets()
```

##### `resetJdbcTargets` <a name="resetJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets"></a>

```java
public void resetJdbcTargets()
```

##### `resetMongoDbTargets` <a name="resetMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets"></a>

```java
public void resetMongoDbTargets()
```

##### `resetS3Targets` <a name="resetS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets"></a>

```java
public void resetS3Targets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets">catalogTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets">deltaTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets">dynamoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets">hudiTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets">icebergTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets">jdbcTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets">mongoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets">s3Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput">catalogTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput">deltaTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput">dynamoDbTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput">hudiTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput">icebergTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput">jdbcTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput">mongoDbTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput">s3TargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogTargets`<sup>Required</sup> <a name="catalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets"></a>

```java
public GlueCrawlerTargetsCatalogTargetsList getCatalogTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a>

---

##### `deltaTargets`<sup>Required</sup> <a name="deltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets"></a>

```java
public GlueCrawlerTargetsDeltaTargetsList getDeltaTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a>

---

##### `dynamoDbTargets`<sup>Required</sup> <a name="dynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets"></a>

```java
public GlueCrawlerTargetsDynamoDbTargetsList getDynamoDbTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a>

---

##### `hudiTargets`<sup>Required</sup> <a name="hudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets"></a>

```java
public GlueCrawlerTargetsHudiTargetsList getHudiTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a>

---

##### `icebergTargets`<sup>Required</sup> <a name="icebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets"></a>

```java
public GlueCrawlerTargetsIcebergTargetsList getIcebergTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a>

---

##### `jdbcTargets`<sup>Required</sup> <a name="jdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets"></a>

```java
public GlueCrawlerTargetsJdbcTargetsList getJdbcTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a>

---

##### `mongoDbTargets`<sup>Required</sup> <a name="mongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets"></a>

```java
public GlueCrawlerTargetsMongoDbTargetsList getMongoDbTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a>

---

##### `s3Targets`<sup>Required</sup> <a name="s3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets"></a>

```java
public GlueCrawlerTargetsS3TargetsList getS3Targets();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a>

---

##### `catalogTargetsInput`<sup>Optional</sup> <a name="catalogTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsCatalogTargets> getCatalogTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>>

---

##### `deltaTargetsInput`<sup>Optional</sup> <a name="deltaTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDeltaTargets> getDeltaTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>>

---

##### `dynamoDbTargetsInput`<sup>Optional</sup> <a name="dynamoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsDynamoDbTargets> getDynamoDbTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>>

---

##### `hudiTargetsInput`<sup>Optional</sup> <a name="hudiTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsHudiTargets> getHudiTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>>

---

##### `icebergTargetsInput`<sup>Optional</sup> <a name="icebergTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsIcebergTargets> getIcebergTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>>

---

##### `jdbcTargetsInput`<sup>Optional</sup> <a name="jdbcTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsJdbcTargets> getJdbcTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>>

---

##### `mongoDbTargetsInput`<sup>Optional</sup> <a name="mongoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsMongoDbTargets> getMongoDbTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>>

---

##### `s3TargetsInput`<sup>Optional</sup> <a name="s3TargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsS3Targets> getS3TargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---


### GlueCrawlerTargetsS3TargetsList <a name="GlueCrawlerTargetsS3TargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsS3TargetsList;

new GlueCrawlerTargetsS3TargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get"></a>

```java
public GlueCrawlerTargetsS3TargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueCrawlerTargetsS3Targets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>>

---


### GlueCrawlerTargetsS3TargetsOutputReference <a name="GlueCrawlerTargetsS3TargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_crawler.GlueCrawlerTargetsS3TargetsOutputReference;

new GlueCrawlerTargetsS3TargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn">resetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn">resetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetDlqEventQueueArn` <a name="resetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn"></a>

```java
public void resetDlqEventQueueArn()
```

##### `resetEventQueueArn` <a name="resetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn"></a>

```java
public void resetEventQueueArn()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize"></a>

```java
public void resetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput">dlqEventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput">eventQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn">eventQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize">sampleSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArnInput`<sup>Optional</sup> <a name="dlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput"></a>

```java
public java.lang.String getDlqEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `eventQueueArnInput`<sup>Optional</sup> <a name="eventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput"></a>

```java
public java.lang.String getEventQueueArnInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput"></a>

```java
public java.lang.Number getSampleSizeInput();
```

- *Type:* java.lang.Number

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `dlqEventQueueArn`<sup>Required</sup> <a name="dlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn"></a>

```java
public java.lang.String getDlqEventQueueArn();
```

- *Type:* java.lang.String

---

##### `eventQueueArn`<sup>Required</sup> <a name="eventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn"></a>

```java
public java.lang.String getEventQueueArn();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize"></a>

```java
public java.lang.Number getSampleSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueCrawlerTargetsS3Targets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>

---



