# `comprehendFlywheel` Submodule <a name="`comprehendFlywheel` Submodule" id="@cdktn/provider-awscc.comprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendFlywheel <a name="ComprehendFlywheel" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheel;

ComprehendFlywheel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAccessRoleArn(java.lang.String)
    .dataLakeS3Uri(java.lang.String)
    .flywheelName(java.lang.String)
//  .activeModelArn(java.lang.String)
//  .dataSecurityConfig(ComprehendFlywheelDataSecurityConfig)
//  .modelType(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendFlywheelTags>)
//  .taskConfig(ComprehendFlywheelTaskConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.flywheelName">flywheelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.activeModelArn">activeModelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataLakeS3Uri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.flywheelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `activeModelArn`<sup>Optional</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.activeModelArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `dataSecurityConfig`<sup>Optional</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataSecurityConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `modelType`<sup>Optional</sup> <a name="modelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.modelType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `taskConfig`<sup>Optional</sup> <a name="taskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.taskConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig">putDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig">putTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn">resetActiveModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig">resetDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType">resetModelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig">resetTaskConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSecurityConfig` <a name="putDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig"></a>

```java
public void putDataSecurityConfig(ComprehendFlywheelDataSecurityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ComprehendFlywheelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>>

---

##### `putTaskConfig` <a name="putTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig"></a>

```java
public void putTaskConfig(ComprehendFlywheelTaskConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `resetActiveModelArn` <a name="resetActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn"></a>

```java
public void resetActiveModelArn()
```

##### `resetDataSecurityConfig` <a name="resetDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig"></a>

```java
public void resetDataSecurityConfig()
```

##### `resetModelType` <a name="resetModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType"></a>

```java
public void resetModelType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskConfig` <a name="resetTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig"></a>

```java
public void resetTaskConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheel;

ComprehendFlywheel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheel;

ComprehendFlywheel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheel;

ComprehendFlywheel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheel;

ComprehendFlywheel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComprehendFlywheel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComprehendFlywheel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput">activeModelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput">dataLakeS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput">dataSecurityConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput">flywheelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput">modelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput">taskConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn">activeModelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName">flywheelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataSecurityConfig`<sup>Required</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig"></a>

```java
public ComprehendFlywheelDataSecurityConfigOutputReference getDataSecurityConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags"></a>

```java
public ComprehendFlywheelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a>

---

##### `taskConfig`<sup>Required</sup> <a name="taskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig"></a>

```java
public ComprehendFlywheelTaskConfigOutputReference getTaskConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a>

---

##### `activeModelArnInput`<sup>Optional</sup> <a name="activeModelArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput"></a>

```java
public java.lang.String getActiveModelArnInput();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `dataLakeS3UriInput`<sup>Optional</sup> <a name="dataLakeS3UriInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput"></a>

```java
public java.lang.String getDataLakeS3UriInput();
```

- *Type:* java.lang.String

---

##### `dataSecurityConfigInput`<sup>Optional</sup> <a name="dataSecurityConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput"></a>

```java
public IResolvable|ComprehendFlywheelDataSecurityConfig getDataSecurityConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `flywheelNameInput`<sup>Optional</sup> <a name="flywheelNameInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput"></a>

```java
public java.lang.String getFlywheelNameInput();
```

- *Type:* java.lang.String

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput"></a>

```java
public java.lang.String getModelTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>>

---

##### `taskConfigInput`<sup>Optional</sup> <a name="taskConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfig getTaskConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `activeModelArn`<sup>Required</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn"></a>

```java
public java.lang.String getActiveModelArn();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri"></a>

```java
public java.lang.String getDataLakeS3Uri();
```

- *Type:* java.lang.String

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName"></a>

```java
public java.lang.String getFlywheelName();
```

- *Type:* java.lang.String

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendFlywheelConfig <a name="ComprehendFlywheelConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelConfig;

ComprehendFlywheelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAccessRoleArn(java.lang.String)
    .dataLakeS3Uri(java.lang.String)
    .flywheelName(java.lang.String)
//  .activeModelArn(java.lang.String)
//  .dataSecurityConfig(ComprehendFlywheelDataSecurityConfig)
//  .modelType(java.lang.String)
//  .tags(IResolvable|java.util.List<ComprehendFlywheelTags>)
//  .taskConfig(ComprehendFlywheelTaskConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName">flywheelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn">activeModelArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri"></a>

```java
public java.lang.String getDataLakeS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName"></a>

```java
public java.lang.String getFlywheelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `activeModelArn`<sup>Optional</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn"></a>

```java
public java.lang.String getActiveModelArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `dataSecurityConfig`<sup>Optional</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig"></a>

```java
public ComprehendFlywheelDataSecurityConfig getDataSecurityConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `modelType`<sup>Optional</sup> <a name="modelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `taskConfig`<sup>Optional</sup> <a name="taskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig"></a>

```java
public ComprehendFlywheelTaskConfig getTaskConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

### ComprehendFlywheelDataSecurityConfig <a name="ComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelDataSecurityConfig;

ComprehendFlywheelDataSecurityConfig.builder()
//  .dataLakeKmsKeyId(java.lang.String)
//  .modelKmsKeyId(java.lang.String)
//  .volumeKmsKeyId(java.lang.String)
//  .vpcConfig(ComprehendFlywheelDataSecurityConfigVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId">dataLakeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}. |

---

##### `dataLakeKmsKeyId`<sup>Optional</sup> <a name="dataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId"></a>

```java
public java.lang.String getDataLakeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig"></a>

```java
public ComprehendFlywheelDataSecurityConfigVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

### ComprehendFlywheelDataSecurityConfigVpcConfig <a name="ComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelDataSecurityConfigVpcConfig;

ComprehendFlywheelDataSecurityConfigVpcConfig.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

### ComprehendFlywheelTags <a name="ComprehendFlywheelTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTags;

ComprehendFlywheelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}.

---

### ComprehendFlywheelTaskConfig <a name="ComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfig;

ComprehendFlywheelTaskConfig.builder()
//  .documentClassificationConfig(ComprehendFlywheelTaskConfigDocumentClassificationConfig)
//  .entityRecognitionConfig(ComprehendFlywheelTaskConfigEntityRecognitionConfig)
//  .languageCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig">documentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig">entityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}. |

---

##### `documentClassificationConfig`<sup>Optional</sup> <a name="documentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig"></a>

```java
public ComprehendFlywheelTaskConfigDocumentClassificationConfig getDocumentClassificationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

##### `entityRecognitionConfig`<sup>Optional</sup> <a name="entityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig"></a>

```java
public ComprehendFlywheelTaskConfigEntityRecognitionConfig getEntityRecognitionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

### ComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig;

ComprehendFlywheelTaskConfigDocumentClassificationConfig.builder()
//  .labels(java.util.List<java.lang.String>)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig;

ComprehendFlywheelTaskConfigEntityRecognitionConfig.builder()
//  .entityTypes(IResolvable|java.util.List<ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes">entityTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}. |

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes> getEntityTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes;

ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendFlywheelDataSecurityConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelDataSecurityConfigOutputReference;

new ComprehendFlywheelDataSecurityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId">resetDataLakeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId">resetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(ComprehendFlywheelDataSecurityConfigVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `resetDataLakeKmsKeyId` <a name="resetDataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId"></a>

```java
public void resetDataLakeKmsKeyId()
```

##### `resetModelKmsKeyId` <a name="resetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId"></a>

```java
public void resetModelKmsKeyId()
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId"></a>

```java
public void resetVolumeKmsKeyId()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput">dataLakeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput">modelKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">dataLakeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```java
public ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `dataLakeKmsKeyIdInput`<sup>Optional</sup> <a name="dataLakeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput"></a>

```java
public java.lang.String getDataLakeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyIdInput`<sup>Optional</sup> <a name="modelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput"></a>

```java
public java.lang.String getModelKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```java
public java.lang.String getVolumeKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|ComprehendFlywheelDataSecurityConfigVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `dataLakeKmsKeyId`<sup>Required</sup> <a name="dataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```java
public java.lang.String getDataLakeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```java
public java.lang.String getModelKmsKeyId();
```

- *Type:* java.lang.String

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```java
public java.lang.String getVolumeKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelDataSecurityConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---


### ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference;

new ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelDataSecurityConfigVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---


### ComprehendFlywheelTagsList <a name="ComprehendFlywheelTagsList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTagsList;

new ComprehendFlywheelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get"></a>

```java
public ComprehendFlywheelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>>

---


### ComprehendFlywheelTagsOutputReference <a name="ComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTagsOutputReference;

new ComprehendFlywheelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>

---


### ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference;

new ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfigDocumentClassificationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```java
public ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable|java.util.List<ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>>

---

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes"></a>

```java
public void resetEntityTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```java
public ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput"></a>

```java
public IResolvable|java.util.List<ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes> getEntityTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---


### ComprehendFlywheelTaskConfigOutputReference <a name="ComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.comprehend_flywheel.ComprehendFlywheelTaskConfigOutputReference;

new ComprehendFlywheelTaskConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig">putDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig">putEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig">resetDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig">resetEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDocumentClassificationConfig` <a name="putDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig"></a>

```java
public void putDocumentClassificationConfig(ComprehendFlywheelTaskConfigDocumentClassificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `putEntityRecognitionConfig` <a name="putEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig"></a>

```java
public void putEntityRecognitionConfig(ComprehendFlywheelTaskConfigEntityRecognitionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `resetDocumentClassificationConfig` <a name="resetDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig"></a>

```java
public void resetDocumentClassificationConfig()
```

##### `resetEntityRecognitionConfig` <a name="resetEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig"></a>

```java
public void resetEntityRecognitionConfig()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">documentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">entityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput">documentClassificationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput">entityRecognitionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `documentClassificationConfig`<sup>Required</sup> <a name="documentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```java
public ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference getDocumentClassificationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `entityRecognitionConfig`<sup>Required</sup> <a name="entityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```java
public ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference getEntityRecognitionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `documentClassificationConfigInput`<sup>Optional</sup> <a name="documentClassificationConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfigDocumentClassificationConfig getDocumentClassificationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `entityRecognitionConfigInput`<sup>Optional</sup> <a name="entityRecognitionConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfig getEntityRecognitionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ComprehendFlywheelTaskConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---



