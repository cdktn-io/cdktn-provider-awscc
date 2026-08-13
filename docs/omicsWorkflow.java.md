# `omicsWorkflow` Submodule <a name="`omicsWorkflow` Submodule" id="@cdktn/provider-awscc.omicsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflow <a name="OmicsWorkflow" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow awscc_omics_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflow;

OmicsWorkflow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accelerators(java.lang.String)
//  .definitionUri(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .main(java.lang.String)
//  .name(java.lang.String)
//  .parameterTemplate(IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate>)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.accelerators">accelerators</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.definitionUri">definitionUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.main">main</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#main OmicsWorkflow#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#name OmicsWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.parameterTemplate">parameterTemplate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.accelerators"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}.

---

##### `definitionUri`<sup>Optional</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.definitionUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.main"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#main OmicsWorkflow#main}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#name OmicsWorkflow#name}.

---

##### `parameterTemplate`<sup>Optional</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.parameterTemplate"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.storageCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#tags OmicsWorkflow#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate">putParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDefinitionUri">resetDefinitionUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetMain">resetMain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetParameterTemplate">resetParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameterTemplate` <a name="putParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate"></a>

```java
public void putParameterTemplate(IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.putParameterTemplate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetDefinitionUri` <a name="resetDefinitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDefinitionUri"></a>

```java
public void resetDefinitionUri()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetMain` <a name="resetMain" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetMain"></a>

```java
public void resetMain()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetName"></a>

```java
public void resetName()
```

##### `resetParameterTemplate` <a name="resetParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetParameterTemplate"></a>

```java
public void resetParameterTemplate()
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageCapacity"></a>

```java
public void resetStorageCapacity()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflow;

OmicsWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflow;

OmicsWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflow;

OmicsWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflow;

OmicsWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OmicsWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OmicsWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OmicsWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OmicsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplate">parameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap">OmicsWorkflowParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.acceleratorsInput">acceleratorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUriInput">definitionUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.mainInput">mainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplateInput">parameterTemplateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacityInput">storageCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.accelerators">accelerators</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUri">definitionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.main">main</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parameterTemplate`<sup>Required</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplate"></a>

```java
public OmicsWorkflowParameterTemplateMap getParameterTemplate();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap">OmicsWorkflowParameterTemplateMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.acceleratorsInput"></a>

```java
public java.lang.String getAcceleratorsInput();
```

- *Type:* java.lang.String

---

##### `definitionUriInput`<sup>Optional</sup> <a name="definitionUriInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUriInput"></a>

```java
public java.lang.String getDefinitionUriInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `mainInput`<sup>Optional</sup> <a name="mainInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.mainInput"></a>

```java
public java.lang.String getMainInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterTemplateInput`<sup>Optional</sup> <a name="parameterTemplateInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.parameterTemplateInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate> getParameterTemplateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>>

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacityInput"></a>

```java
public java.lang.Number getStorageCapacityInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.accelerators"></a>

```java
public java.lang.String getAccelerators();
```

- *Type:* java.lang.String

---

##### `definitionUri`<sup>Required</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.definitionUri"></a>

```java
public java.lang.String getDefinitionUri();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `main`<sup>Required</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.main"></a>

```java
public java.lang.String getMain();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowConfig <a name="OmicsWorkflowConfig" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflowConfig;

OmicsWorkflowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accelerators(java.lang.String)
//  .definitionUri(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .main(java.lang.String)
//  .name(java.lang.String)
//  .parameterTemplate(IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate>)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.accelerators">accelerators</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.definitionUri">definitionUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.main">main</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#main OmicsWorkflow#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#name OmicsWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.parameterTemplate">parameterTemplate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of resource tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.accelerators"></a>

```java
public java.lang.String getAccelerators();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#accelerators OmicsWorkflow#accelerators}.

---

##### `definitionUri`<sup>Optional</sup> <a name="definitionUri" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.definitionUri"></a>

```java
public java.lang.String getDefinitionUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#definition_uri OmicsWorkflow#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#engine OmicsWorkflow#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.main"></a>

```java
public java.lang.String getMain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#main OmicsWorkflow#main}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#name OmicsWorkflow#name}.

---

##### `parameterTemplate`<sup>Optional</sup> <a name="parameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.parameterTemplate"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate> getParameterTemplate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#parameter_template OmicsWorkflow#parameter_template}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_capacity OmicsWorkflow#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#storage_type OmicsWorkflow#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#tags OmicsWorkflow#tags}

---

### OmicsWorkflowParameterTemplate <a name="OmicsWorkflowParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflowParameterTemplate;

OmicsWorkflowParameterTemplate.builder()
//  .description(java.lang.String)
//  .optional(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.optional">optional</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#optional OmicsWorkflow#optional}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#description OmicsWorkflow#description}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate.property.optional"></a>

```java
public java.lang.Boolean|IResolvable getOptional();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_workflow#optional OmicsWorkflow#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowParameterTemplateMap <a name="OmicsWorkflowParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflowParameterTemplateMap;

new OmicsWorkflowParameterTemplateMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get"></a>

```java
public OmicsWorkflowParameterTemplateOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, OmicsWorkflowParameterTemplate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>>

---


### OmicsWorkflowParameterTemplateOutputReference <a name="OmicsWorkflowParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_workflow.OmicsWorkflowParameterTemplateOutputReference;

new OmicsWorkflowParameterTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOptional` <a name="resetOptional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.resetOptional"></a>

```java
public void resetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optionalInput">optionalInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optional">optional</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optionalInput"></a>

```java
public java.lang.Boolean|IResolvable getOptionalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.optional"></a>

```java
public java.lang.Boolean|IResolvable getOptional();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplateOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsWorkflowParameterTemplate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsWorkflow.OmicsWorkflowParameterTemplate">OmicsWorkflowParameterTemplate</a>

---



