# `sagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfig <a name="SagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfig;

SagemakerNotebookInstanceLifecycleConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .notebookInstanceLifecycleConfigName(java.lang.String)
//  .onCreate(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate>)
//  .onStart(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart>)
//  .tags(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>java.lang.String</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onCreate">onCreate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>></code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onStart">onStart</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>></code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notebookInstanceLifecycleConfigName`<sup>Optional</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.notebookInstanceLifecycleConfigName"></a>

- *Type:* java.lang.String

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onCreate"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>>

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `onStart`<sup>Optional</sup> <a name="onStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onStart"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>>

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate">putOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart">putOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName">resetNotebookInstanceLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate">resetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart">resetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnCreate` <a name="putOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate"></a>

```java
public void putOnCreate(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>>

---

##### `putOnStart` <a name="putOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart"></a>

```java
public void putOnStart(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>>

---

##### `resetNotebookInstanceLifecycleConfigName` <a name="resetNotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName"></a>

```java
public void resetNotebookInstanceLifecycleConfigName()
```

##### `resetOnCreate` <a name="resetOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate"></a>

```java
public void resetOnCreate()
```

##### `resetOnStart` <a name="resetOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart"></a>

```java
public void resetOnStart()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfig;

SagemakerNotebookInstanceLifecycleConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfig;

SagemakerNotebookInstanceLifecycleConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfig;

SagemakerNotebookInstanceLifecycleConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfig;

SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">notebookInstanceLifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate">onCreate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart">onStart</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput">notebookInstanceLifecycleConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput">onCreateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput">onStartInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```java
public java.lang.String getNotebookInstanceLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `onCreate`<sup>Required</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigOnCreateList getOnCreate();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `onStart`<sup>Required</sup> <a name="onStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigOnStartList getOnStart();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `notebookInstanceLifecycleConfigNameInput`<sup>Optional</sup> <a name="notebookInstanceLifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput"></a>

```java
public java.lang.String getNotebookInstanceLifecycleConfigNameInput();
```

- *Type:* java.lang.String

---

##### `onCreateInput`<sup>Optional</sup> <a name="onCreateInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate> getOnCreateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>>

---

##### `onStartInput`<sup>Optional</sup> <a name="onStartInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart> getOnStartInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>>

---

##### `notebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```java
public java.lang.String getNotebookInstanceLifecycleConfigName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigConfig <a name="SagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigConfig;

SagemakerNotebookInstanceLifecycleConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .notebookInstanceLifecycleConfigName(java.lang.String)
//  .onCreate(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate>)
//  .onStart(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart>)
//  .tags(IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName">notebookInstanceLifecycleConfigName</a></code> | <code>java.lang.String</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate">onCreate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>></code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart">onStart</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>></code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notebookInstanceLifecycleConfigName`<sup>Optional</sup> <a name="notebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName"></a>

```java
public java.lang.String getNotebookInstanceLifecycleConfigName();
```

- *Type:* java.lang.String

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `onCreate`<sup>Optional</sup> <a name="onCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate> getOnCreate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>>

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `onStart`<sup>Optional</sup> <a name="onStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart> getOnStart();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>>

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

### SagemakerNotebookInstanceLifecycleConfigOnCreate <a name="SagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnCreate;

SagemakerNotebookInstanceLifecycleConfigOnCreate.builder()
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigOnStart <a name="SagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnStart;

SagemakerNotebookInstanceLifecycleConfigOnStart.builder()
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigTags <a name="SagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigTags;

SagemakerNotebookInstanceLifecycleConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnCreateList;

new SagemakerNotebookInstanceLifecycleConfigOnCreateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnCreate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>>

---


### SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference;

new SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### SagemakerNotebookInstanceLifecycleConfigOnStartList <a name="SagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnStartList;

new SagemakerNotebookInstanceLifecycleConfigOnStartList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigOnStart> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>>

---


### SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference;

new SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### SagemakerNotebookInstanceLifecycleConfigTagsList <a name="SagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigTagsList;

new SagemakerNotebookInstanceLifecycleConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```java
public SagemakerNotebookInstanceLifecycleConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerNotebookInstanceLifecycleConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>>

---


### SagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_notebook_instance_lifecycle_config.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference;

new SagemakerNotebookInstanceLifecycleConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerNotebookInstanceLifecycleConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>

---



