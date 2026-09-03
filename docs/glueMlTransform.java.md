# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktn/provider-awscc.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransform;

GlueMlTransform.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .inputRecordTables(GlueMlTransformInputRecordTables)
    .role(java.lang.String)
    .transformParameters(GlueMlTransformTransformParameters)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .name(java.lang.String)
//  .numberOfWorkers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .transformEncryption(GlueMlTransformTransformEncryption)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.inputRecordTables"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.glueVersion"></a>

- *Type:* java.lang.String

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.numberOfWorkers"></a>

- *Type:* java.lang.Number

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `transformEncryption`<sup>Optional</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.transformEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables">putInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption">putTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters">putTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption">resetTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputRecordTables` <a name="putInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```java
public void putInputRecordTables(GlueMlTransformInputRecordTables value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `putTransformEncryption` <a name="putTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption"></a>

```java
public void putTransformEncryption(GlueMlTransformTransformEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `putTransformParameters` <a name="putTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters"></a>

```java
public void putTransformParameters(GlueMlTransformTransformParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName"></a>

```java
public void resetName()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTransformEncryption` <a name="resetTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption"></a>

```java
public void resetTransformEncryption()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransform;

GlueMlTransform.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransform;

GlueMlTransform.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueMlTransform.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueMlTransform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId">transformId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">inputRecordTablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput">transformEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput">transformParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```java
public GlueMlTransformInputRecordTablesOutputReference getInputRecordTables();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a>

---

##### `transformEncryption`<sup>Required</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption"></a>

```java
public GlueMlTransformTransformEncryptionOutputReference getTransformEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a>

---

##### `transformId`<sup>Required</sup> <a name="transformId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId"></a>

```java
public java.lang.String getTransformId();
```

- *Type:* java.lang.String

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters"></a>

```java
public GlueMlTransformTransformParametersOutputReference getTransformParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `inputRecordTablesInput`<sup>Optional</sup> <a name="inputRecordTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```java
public IResolvable|GlueMlTransformInputRecordTables getInputRecordTablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `transformEncryptionInput`<sup>Optional</sup> <a name="transformEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput"></a>

```java
public IResolvable|GlueMlTransformTransformEncryption getTransformEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `transformParametersInput`<sup>Optional</sup> <a name="transformParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput"></a>

```java
public IResolvable|GlueMlTransformTransformParameters getTransformParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformConfig;

GlueMlTransformConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .inputRecordTables(GlueMlTransformInputRecordTables)
    .role(java.lang.String)
    .transformParameters(GlueMlTransformTransformParameters)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .maxCapacity(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .name(java.lang.String)
//  .numberOfWorkers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .transformEncryption(GlueMlTransformTransformEncryption)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role">role</a></code> | <code>java.lang.String</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```java
public GlueMlTransformInputRecordTables getInputRecordTables();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters"></a>

```java
public GlueMlTransformTransformParameters getTransformParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `transformEncryption`<sup>Optional</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption"></a>

```java
public GlueMlTransformTransformEncryption getTransformEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformInputRecordTables;

GlueMlTransformInputRecordTables.builder()
//  .glueTables(IResolvable|java.util.List<GlueMlTransformInputRecordTablesGlueTables>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables">glueTables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>></code> | The database and table in the AWS Glue Data Catalog that is used for input or output data. |

---

##### `glueTables`<sup>Optional</sup> <a name="glueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables"></a>

```java
public IResolvable|java.util.List<GlueMlTransformInputRecordTablesGlueTables> getGlueTables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>>

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

### GlueMlTransformInputRecordTablesGlueTables <a name="GlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformInputRecordTablesGlueTables;

GlueMlTransformInputRecordTablesGlueTables.builder()
//  .catalogId(java.lang.String)
//  .connectionName(java.lang.String)
//  .databaseName(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | A unique identifier for the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The name of the connection to the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | A database name in the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName">tableName</a></code> | <code>java.lang.String</code> | A table name in the AWS Glue Data Catalog. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

A unique identifier for the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The name of the connection to the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

A database name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

A table name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}

---

### GlueMlTransformTransformEncryption <a name="GlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformEncryption;

GlueMlTransformTransformEncryption.builder()
//  .mlUserDataEncryption(GlueMlTransformTransformEncryptionMlUserDataEncryption)
//  .taskRunSecurityConfigurationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption">mlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | The encryption-at-rest settings of the transform that apply to accessing user data. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName">taskRunSecurityConfigurationName</a></code> | <code>java.lang.String</code> | The name of the security configuration. |

---

##### `mlUserDataEncryption`<sup>Optional</sup> <a name="mlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

```java
public GlueMlTransformTransformEncryptionMlUserDataEncryption getMlUserDataEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

##### `taskRunSecurityConfigurationName`<sup>Optional</sup> <a name="taskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

```java
public java.lang.String getTaskRunSecurityConfigurationName();
```

- *Type:* java.lang.String

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

### GlueMlTransformTransformEncryptionMlUserDataEncryption <a name="GlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformEncryptionMlUserDataEncryption;

GlueMlTransformTransformEncryptionMlUserDataEncryption.builder()
//  .kmsKeyId(java.lang.String)
//  .mlUserDataEncryptionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID for the customer-provided KMS key. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode">mlUserDataEncryptionMode</a></code> | <code>java.lang.String</code> | The encryption mode applied to user data. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

##### `mlUserDataEncryptionMode`<sup>Optional</sup> <a name="mlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

```java
public java.lang.String getMlUserDataEncryptionMode();
```

- *Type:* java.lang.String

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

### GlueMlTransformTransformParameters <a name="GlueMlTransformTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformParameters;

GlueMlTransformTransformParameters.builder()
    .transformType(java.lang.String)
//  .findMatchesParameters(GlueMlTransformTransformParametersFindMatchesParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType">transformType</a></code> | <code>java.lang.String</code> | The type of machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | The parameters to configure the find matches transform. |

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType"></a>

```java
public java.lang.String getTransformType();
```

- *Type:* java.lang.String

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

##### `findMatchesParameters`<sup>Optional</sup> <a name="findMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters"></a>

```java
public GlueMlTransformTransformParametersFindMatchesParameters getFindMatchesParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

### GlueMlTransformTransformParametersFindMatchesParameters <a name="GlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformParametersFindMatchesParameters;

GlueMlTransformTransformParametersFindMatchesParameters.builder()
//  .accuracyCostTradeoff(java.lang.Number)
//  .enforceProvidedLabels(java.lang.Boolean|IResolvable)
//  .precisionRecallTradeoff(java.lang.Number)
//  .primaryKeyColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff">accuracyCostTradeoff</a></code> | <code>java.lang.Number</code> | The value for accuracy and cost tradeoff. A value of 0.5 means balance. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, forces the output to match the provided labels. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff">precisionRecallTradeoff</a></code> | <code>java.lang.Number</code> | The value for precision and recall tradeoff. A value of 0.5 means no preference. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>java.lang.String</code> | The name of a column that uniquely identifies rows in the source table. |

---

##### `accuracyCostTradeoff`<sup>Optional</sup> <a name="accuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

```java
public java.lang.Number getAccuracyCostTradeoff();
```

- *Type:* java.lang.Number

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

##### `enforceProvidedLabels`<sup>Optional</sup> <a name="enforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```java
public java.lang.Boolean|IResolvable getEnforceProvidedLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

##### `precisionRecallTradeoff`<sup>Optional</sup> <a name="precisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

```java
public java.lang.Number getPrecisionRecallTradeoff();
```

- *Type:* java.lang.Number

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

##### `primaryKeyColumnName`<sup>Optional</sup> <a name="primaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```java
public java.lang.String getPrimaryKeyColumnName();
```

- *Type:* java.lang.String

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesGlueTablesList <a name="GlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformInputRecordTablesGlueTablesList;

new GlueMlTransformInputRecordTablesGlueTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```java
public GlueMlTransformInputRecordTablesGlueTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueMlTransformInputRecordTablesGlueTables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>>

---


### GlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="GlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformInputRecordTablesGlueTablesOutputReference;

new GlueMlTransformInputRecordTablesGlueTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformInputRecordTablesGlueTables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformInputRecordTablesOutputReference;

new GlueMlTransformInputRecordTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables">putGlueTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables">resetGlueTables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueTables` <a name="putGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables"></a>

```java
public void putGlueTables(IResolvable|java.util.List<GlueMlTransformInputRecordTablesGlueTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>>

---

##### `resetGlueTables` <a name="resetGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables"></a>

```java
public void resetGlueTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables">glueTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput">glueTablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueTables`<sup>Required</sup> <a name="glueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```java
public GlueMlTransformInputRecordTablesGlueTablesList getGlueTables();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `glueTablesInput`<sup>Optional</sup> <a name="glueTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput"></a>

```java
public IResolvable|java.util.List<GlueMlTransformInputRecordTablesGlueTables> getGlueTablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformInputRecordTables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---


### GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference;

new GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode">resetMlUserDataEncryptionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMlUserDataEncryptionMode` <a name="resetMlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode"></a>

```java
public void resetMlUserDataEncryptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput">mlUserDataEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">mlUserDataEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `mlUserDataEncryptionModeInput`<sup>Optional</sup> <a name="mlUserDataEncryptionModeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput"></a>

```java
public java.lang.String getMlUserDataEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `mlUserDataEncryptionMode`<sup>Required</sup> <a name="mlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```java
public java.lang.String getMlUserDataEncryptionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformTransformEncryptionMlUserDataEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### GlueMlTransformTransformEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformEncryptionOutputReference;

new GlueMlTransformTransformEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption">putMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption">resetMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName">resetTaskRunSecurityConfigurationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlUserDataEncryption` <a name="putMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption"></a>

```java
public void putMlUserDataEncryption(GlueMlTransformTransformEncryptionMlUserDataEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `resetMlUserDataEncryption` <a name="resetMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption"></a>

```java
public void resetMlUserDataEncryption()
```

##### `resetTaskRunSecurityConfigurationName` <a name="resetTaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName"></a>

```java
public void resetTaskRunSecurityConfigurationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">mlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput">mlUserDataEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput">taskRunSecurityConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">taskRunSecurityConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mlUserDataEncryption`<sup>Required</sup> <a name="mlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```java
public GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference getMlUserDataEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `mlUserDataEncryptionInput`<sup>Optional</sup> <a name="mlUserDataEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput"></a>

```java
public IResolvable|GlueMlTransformTransformEncryptionMlUserDataEncryption getMlUserDataEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `taskRunSecurityConfigurationNameInput`<sup>Optional</sup> <a name="taskRunSecurityConfigurationNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput"></a>

```java
public java.lang.String getTaskRunSecurityConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `taskRunSecurityConfigurationName`<sup>Required</sup> <a name="taskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```java
public java.lang.String getTaskRunSecurityConfigurationName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformTransformEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---


### GlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference;

new GlueMlTransformTransformParametersFindMatchesParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff">resetAccuracyCostTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">resetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff">resetPrecisionRecallTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">resetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccuracyCostTradeoff` <a name="resetAccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff"></a>

```java
public void resetAccuracyCostTradeoff()
```

##### `resetEnforceProvidedLabels` <a name="resetEnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```java
public void resetEnforceProvidedLabels()
```

##### `resetPrecisionRecallTradeoff` <a name="resetPrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff"></a>

```java
public void resetPrecisionRecallTradeoff()
```

##### `resetPrimaryKeyColumnName` <a name="resetPrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```java
public void resetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput">accuracyCostTradeoffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">enforceProvidedLabelsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput">precisionRecallTradeoffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">primaryKeyColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">accuracyCostTradeoff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">precisionRecallTradeoff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracyCostTradeoffInput`<sup>Optional</sup> <a name="accuracyCostTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput"></a>

```java
public java.lang.Number getAccuracyCostTradeoffInput();
```

- *Type:* java.lang.Number

---

##### `enforceProvidedLabelsInput`<sup>Optional</sup> <a name="enforceProvidedLabelsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceProvidedLabelsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `precisionRecallTradeoffInput`<sup>Optional</sup> <a name="precisionRecallTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput"></a>

```java
public java.lang.Number getPrecisionRecallTradeoffInput();
```

- *Type:* java.lang.Number

---

##### `primaryKeyColumnNameInput`<sup>Optional</sup> <a name="primaryKeyColumnNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```java
public java.lang.String getPrimaryKeyColumnNameInput();
```

- *Type:* java.lang.String

---

##### `accuracyCostTradeoff`<sup>Required</sup> <a name="accuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```java
public java.lang.Number getAccuracyCostTradeoff();
```

- *Type:* java.lang.Number

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="enforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```java
public java.lang.Boolean|IResolvable getEnforceProvidedLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `precisionRecallTradeoff`<sup>Required</sup> <a name="precisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```java
public java.lang.Number getPrecisionRecallTradeoff();
```

- *Type:* java.lang.Number

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="primaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```java
public java.lang.String getPrimaryKeyColumnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformTransformParametersFindMatchesParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformTransformParametersOutputReference <a name="GlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_ml_transform.GlueMlTransformTransformParametersOutputReference;

new GlueMlTransformTransformParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters">putFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters">resetFindMatchesParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFindMatchesParameters` <a name="putFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters"></a>

```java
public void putFindMatchesParameters(GlueMlTransformTransformParametersFindMatchesParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `resetFindMatchesParameters` <a name="resetFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters"></a>

```java
public void resetFindMatchesParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput">findMatchesParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput">transformTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType">transformType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```java
public GlueMlTransformTransformParametersFindMatchesParametersOutputReference getFindMatchesParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `findMatchesParametersInput`<sup>Optional</sup> <a name="findMatchesParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```java
public IResolvable|GlueMlTransformTransformParametersFindMatchesParameters getFindMatchesParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `transformTypeInput`<sup>Optional</sup> <a name="transformTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput"></a>

```java
public java.lang.String getTransformTypeInput();
```

- *Type:* java.lang.String

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```java
public java.lang.String getTransformType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueMlTransformTransformParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---



