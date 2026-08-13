# `sagemakerMlflowApp` Submodule <a name="`sagemakerMlflowApp` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowApp <a name="SagemakerMlflowApp" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app awscc_sagemaker_mlflow_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowApp;

SagemakerMlflowApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactStoreUri(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .modelRegistrationMode(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerMlflowAppTags>)
//  .weeklyMaintenanceWindowStart(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri">artifactStoreUri</a></code> | <code>java.lang.String</code> | The S3 URI for a general purpose bucket to use as the MLflow App artifact store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode">modelRegistrationMode</a></code> | <code>java.lang.String</code> | Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>></code> | Tags to associate with the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri"></a>

- *Type:* java.lang.String

The S3 URI for a general purpose bucket to use as the MLflow App artifact store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}

---

##### `modelRegistrationMode`<sup>Optional</sup> <a name="modelRegistrationMode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode"></a>

- *Type:* java.lang.String

Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>>

Tags to associate with the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* java.lang.String

The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled.

For example: Tue:03:30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode">resetModelRegistrationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart">resetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerMlflowAppTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>>

---

##### `resetModelRegistrationMode` <a name="resetModelRegistrationMode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode"></a>

```java
public void resetModelRegistrationMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetTags"></a>

```java
public void resetTags()
```

##### `resetWeeklyMaintenanceWindowStart` <a name="resetWeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart"></a>

```java
public void resetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowApp;

SagemakerMlflowApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowApp;

SagemakerMlflowApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowApp;

SagemakerMlflowApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowApp;

SagemakerMlflowApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerMlflowApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerMlflowApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerMlflowApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowAppId">mlflowAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowVersion">mlflowVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList">SagemakerMlflowAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput">artifactStoreUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput">modelRegistrationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput">weeklyMaintenanceWindowStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri">artifactStoreUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode">modelRegistrationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `mlflowAppId`<sup>Required</sup> <a name="mlflowAppId" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowAppId"></a>

```java
public java.lang.String getMlflowAppId();
```

- *Type:* java.lang.String

---

##### `mlflowVersion`<sup>Required</sup> <a name="mlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowVersion"></a>

```java
public java.lang.String getMlflowVersion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tags"></a>

```java
public SagemakerMlflowAppTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList">SagemakerMlflowAppTagsList</a>

---

##### `artifactStoreUriInput`<sup>Optional</sup> <a name="artifactStoreUriInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput"></a>

```java
public java.lang.String getArtifactStoreUriInput();
```

- *Type:* java.lang.String

---

##### `modelRegistrationModeInput`<sup>Optional</sup> <a name="modelRegistrationModeInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput"></a>

```java
public java.lang.String getModelRegistrationModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerMlflowAppTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>>

---

##### `weeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStartInput();
```

- *Type:* java.lang.String

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri"></a>

```java
public java.lang.String getArtifactStoreUri();
```

- *Type:* java.lang.String

---

##### `modelRegistrationMode`<sup>Required</sup> <a name="modelRegistrationMode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode"></a>

```java
public java.lang.String getModelRegistrationMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowAppConfig <a name="SagemakerMlflowAppConfig" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowAppConfig;

SagemakerMlflowAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .artifactStoreUri(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .modelRegistrationMode(java.lang.String)
//  .tags(IResolvable|java.util.List<SagemakerMlflowAppTags>)
//  .weeklyMaintenanceWindowStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri">artifactStoreUri</a></code> | <code>java.lang.String</code> | The S3 URI for a general purpose bucket to use as the MLflow App artifact store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode">modelRegistrationMode</a></code> | <code>java.lang.String</code> | Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>></code> | Tags to associate with the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `artifactStoreUri`<sup>Required</sup> <a name="artifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri"></a>

```java
public java.lang.String getArtifactStoreUri();
```

- *Type:* java.lang.String

The S3 URI for a general purpose bucket to use as the MLflow App artifact store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}

---

##### `modelRegistrationMode`<sup>Optional</sup> <a name="modelRegistrationMode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode"></a>

```java
public java.lang.String getModelRegistrationMode();
```

- *Type:* java.lang.String

Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerMlflowAppTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>>

Tags to associate with the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStart();
```

- *Type:* java.lang.String

The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled.

For example: Tue:03:30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}

---

### SagemakerMlflowAppTags <a name="SagemakerMlflowAppTags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowAppTags;

SagemakerMlflowAppTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#key SagemakerMlflowApp#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#value SagemakerMlflowApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#key SagemakerMlflowApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_app#value SagemakerMlflowApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowAppTagsList <a name="SagemakerMlflowAppTagsList" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowAppTagsList;

new SagemakerMlflowAppTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get"></a>

```java
public SagemakerMlflowAppTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerMlflowAppTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>>

---


### SagemakerMlflowAppTagsOutputReference <a name="SagemakerMlflowAppTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_mlflow_app.SagemakerMlflowAppTagsOutputReference;

new SagemakerMlflowAppTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerMlflowAppTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>

---



