# `emrStep` Submodule <a name="`emrStep` Submodule" id="@cdktn/provider-awscc.emrStep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStep <a name="EmrStep" id="@cdktn/provider-awscc.emrStep.EmrStep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step awscc_emr_step}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStep;

EmrStep.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionOnFailure(java.lang.String)
    .hadoopJarStep(EmrStepHadoopJarStep)
    .jobFlowId(java.lang.String)
    .name(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .logUri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.actionOnFailure">actionOnFailure</a></code> | <code>java.lang.String</code> | This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.jobFlowId">jobFlowId</a></code> | <code>java.lang.String</code> | A string that uniquely identifies the cluster (job flow). |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the cluster step. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.logUri">logUri</a></code> | <code>java.lang.String</code> | The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.actionOnFailure"></a>

- *Type:* java.lang.String

This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#action_on_failure EmrStep#action_on_failure}

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.hadoopJarStep"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed.

The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#hadoop_jar_step EmrStep#hadoop_jar_step}

---

##### `jobFlowId`<sup>Required</sup> <a name="jobFlowId" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.jobFlowId"></a>

- *Type:* java.lang.String

A string that uniquely identifies the cluster (job flow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#job_flow_id EmrStep#job_flow_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the cluster step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#name EmrStep#name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.encryptionKeyArn"></a>

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#encryption_key_arn EmrStep#encryption_key_arn}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.emrStep.EmrStep.Initializer.parameter.logUri"></a>

- *Type:* java.lang.String

The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#log_uri EmrStep#log_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep">putHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri">resetLogUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStep.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStep.EmrStep.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStep.EmrStep.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStep.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrStep.EmrStep.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrStep.EmrStep.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrStep.EmrStep.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrStep.EmrStep.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStep.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHadoopJarStep` <a name="putHadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep"></a>

```java
public void putHadoopJarStep(EmrStepHadoopJarStep value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStep.putHadoopJarStep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStep.resetEncryptionKeyArn"></a>

```java
public void resetEncryptionKeyArn()
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.emrStep.EmrStep.resetLogUri"></a>

```java
public void resetLogUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStep;

EmrStep.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStep;

EmrStep.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStep;

EmrStep.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStep.EmrStep.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStep;

EmrStep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrStep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmrStep resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrStep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrStep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmrStep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.stepId">stepId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput">actionOnFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput">hadoopJarStepInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput">jobFlowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure">actionOnFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId">jobFlowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStep.EmrStep.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrStep.EmrStep.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStep.EmrStep.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStep.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStep.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStep.EmrStep.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStep.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStep.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStep"></a>

```java
public EmrStepHadoopJarStepOutputReference getHadoopJarStep();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference">EmrStepHadoopJarStepOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStep.EmrStep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stepId`<sup>Required</sup> <a name="stepId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.stepId"></a>

```java
public java.lang.String getStepId();
```

- *Type:* java.lang.String

---

##### `actionOnFailureInput`<sup>Optional</sup> <a name="actionOnFailureInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailureInput"></a>

```java
public java.lang.String getActionOnFailureInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArnInput"></a>

```java
public java.lang.String getEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `hadoopJarStepInput`<sup>Optional</sup> <a name="hadoopJarStepInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.hadoopJarStepInput"></a>

```java
public IResolvable|EmrStepHadoopJarStep getHadoopJarStepInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---

##### `jobFlowIdInput`<sup>Optional</sup> <a name="jobFlowIdInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowIdInput"></a>

```java
public java.lang.String getJobFlowIdInput();
```

- *Type:* java.lang.String

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.emrStep.EmrStep.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktn/provider-awscc.emrStep.EmrStep.property.actionOnFailure"></a>

```java
public java.lang.String getActionOnFailure();
```

- *Type:* java.lang.String

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStep.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `jobFlowId`<sup>Required</sup> <a name="jobFlowId" id="@cdktn/provider-awscc.emrStep.EmrStep.property.jobFlowId"></a>

```java
public java.lang.String getJobFlowId();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.emrStep.EmrStep.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStep.EmrStep.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStepConfig <a name="EmrStepConfig" id="@cdktn/provider-awscc.emrStep.EmrStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepConfig;

EmrStepConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionOnFailure(java.lang.String)
    .hadoopJarStep(EmrStepHadoopJarStep)
    .jobFlowId(java.lang.String)
    .name(java.lang.String)
//  .encryptionKeyArn(java.lang.String)
//  .logUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure">actionOnFailure</a></code> | <code>java.lang.String</code> | This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId">jobFlowId</a></code> | <code>java.lang.String</code> | A string that uniquely identifies the cluster (job flow). |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the cluster step. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>java.lang.String</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri">logUri</a></code> | <code>java.lang.String</code> | The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.actionOnFailure"></a>

```java
public java.lang.String getActionOnFailure();
```

- *Type:* java.lang.String

This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#action_on_failure EmrStep#action_on_failure}

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.hadoopJarStep"></a>

```java
public EmrStepHadoopJarStep getHadoopJarStep();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed.

The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#hadoop_jar_step EmrStep#hadoop_jar_step}

---

##### `jobFlowId`<sup>Required</sup> <a name="jobFlowId" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.jobFlowId"></a>

```java
public java.lang.String getJobFlowId();
```

- *Type:* java.lang.String

A string that uniquely identifies the cluster (job flow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#job_flow_id EmrStep#job_flow_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the cluster step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#name EmrStep#name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.encryptionKeyArn"></a>

```java
public java.lang.String getEncryptionKeyArn();
```

- *Type:* java.lang.String

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#encryption_key_arn EmrStep#encryption_key_arn}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.emrStep.EmrStepConfig.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#log_uri EmrStep#log_uri}

---

### EmrStepHadoopJarStep <a name="EmrStepHadoopJarStep" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepHadoopJarStep;

EmrStepHadoopJarStep.builder()
    .jar(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .mainClass(java.lang.String)
//  .stepProperties(IResolvable|java.util.List<EmrStepHadoopJarStepStepProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar EmrStep#jar}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args EmrStep#args}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class EmrStep#main_class}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties">stepProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties EmrStep#step_properties}. |

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar EmrStep#jar}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args EmrStep#args}.

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class EmrStep#main_class}.

---

##### `stepProperties`<sup>Optional</sup> <a name="stepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep.property.stepProperties"></a>

```java
public IResolvable|java.util.List<EmrStepHadoopJarStepStepProperties> getStepProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties EmrStep#step_properties}.

---

### EmrStepHadoopJarStepStepProperties <a name="EmrStepHadoopJarStepStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepHadoopJarStepStepProperties;

EmrStepHadoopJarStepStepProperties.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#key EmrStep#key}. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#value EmrStep#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#key EmrStep#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#value EmrStep#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStepHadoopJarStepOutputReference <a name="EmrStepHadoopJarStepOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepHadoopJarStepOutputReference;

new EmrStepHadoopJarStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties">putStepProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties">resetStepProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepProperties` <a name="putStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties"></a>

```java
public void putStepProperties(IResolvable|java.util.List<EmrStepHadoopJarStepStepProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.putStepProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetStepProperties` <a name="resetStepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.resetStepProperties"></a>

```java
public void resetStepProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties">stepProperties</a></code> | <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput">stepPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepProperties`<sup>Required</sup> <a name="stepProperties" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepProperties"></a>

```java
public EmrStepHadoopJarStepStepPropertiesList getStepProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList">EmrStepHadoopJarStepStepPropertiesList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `stepPropertiesInput`<sup>Optional</sup> <a name="stepPropertiesInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.stepPropertiesInput"></a>

```java
public IResolvable|java.util.List<EmrStepHadoopJarStepStepProperties> getStepPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrStepHadoopJarStep getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStep">EmrStepHadoopJarStep</a>

---


### EmrStepHadoopJarStepStepPropertiesList <a name="EmrStepHadoopJarStepStepPropertiesList" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepHadoopJarStepStepPropertiesList;

new EmrStepHadoopJarStepStepPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get"></a>

```java
public EmrStepHadoopJarStepStepPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EmrStepHadoopJarStepStepProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>>

---


### EmrStepHadoopJarStepStepPropertiesOutputReference <a name="EmrStepHadoopJarStepStepPropertiesOutputReference" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.emr_step.EmrStepHadoopJarStepStepPropertiesOutputReference;

new EmrStepHadoopJarStepStepPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|EmrStepHadoopJarStepStepProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStep.EmrStepHadoopJarStepStepProperties">EmrStepHadoopJarStepStepProperties</a>

---



