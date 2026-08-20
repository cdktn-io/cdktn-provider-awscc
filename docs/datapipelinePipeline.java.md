# `datapipelinePipeline` Submodule <a name="`datapipelinePipeline` Submodule" id="@cdktn/provider-awscc.datapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipeline <a name="DatapipelinePipeline" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipeline;

DatapipelinePipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .activate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .parameterObjects(IResolvable|java.util.List<DatapipelinePipelineParameterObjects>)
//  .parameterValues(IResolvable|java.util.List<DatapipelinePipelineParameterValues>)
//  .pipelineObjects(IResolvable|java.util.List<DatapipelinePipelinePipelineObjects>)
//  .pipelineTags(IResolvable|java.util.List<DatapipelinePipelinePipelineTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.activate">activate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterObjects">parameterObjects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>></code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterValues">parameterValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>></code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineObjects">pipelineObjects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>></code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineTags">pipelineTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>></code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.activate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `parameterObjects`<sup>Optional</sup> <a name="parameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterObjects"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>>

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterValues"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>>

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `pipelineObjects`<sup>Optional</sup> <a name="pipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineObjects"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>>

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `pipelineTags`<sup>Optional</sup> <a name="pipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>>

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects">putParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues">putParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects">putPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags">putPipelineTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate">resetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects">resetParameterObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues">resetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects">resetPipelineObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags">resetPipelineTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameterObjects` <a name="putParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects"></a>

```java
public void putParameterObjects(IResolvable|java.util.List<DatapipelinePipelineParameterObjects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>>

---

##### `putParameterValues` <a name="putParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues"></a>

```java
public void putParameterValues(IResolvable|java.util.List<DatapipelinePipelineParameterValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>>

---

##### `putPipelineObjects` <a name="putPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects"></a>

```java
public void putPipelineObjects(IResolvable|java.util.List<DatapipelinePipelinePipelineObjects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>>

---

##### `putPipelineTags` <a name="putPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags"></a>

```java
public void putPipelineTags(IResolvable|java.util.List<DatapipelinePipelinePipelineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>>

---

##### `resetActivate` <a name="resetActivate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate"></a>

```java
public void resetActivate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetParameterObjects` <a name="resetParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects"></a>

```java
public void resetParameterObjects()
```

##### `resetParameterValues` <a name="resetParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues"></a>

```java
public void resetParameterValues()
```

##### `resetPipelineObjects` <a name="resetPipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects"></a>

```java
public void resetPipelineObjects()
```

##### `resetPipelineTags` <a name="resetPipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags"></a>

```java
public void resetPipelineTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipeline;

DatapipelinePipeline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipeline;

DatapipelinePipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipeline;

DatapipelinePipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipeline;

DatapipelinePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatapipelinePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatapipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects">parameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues">parameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects">pipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags">pipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput">activateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput">parameterObjectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput">parameterValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput">pipelineObjectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput">pipelineTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate">activate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parameterObjects`<sup>Required</sup> <a name="parameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects"></a>

```java
public DatapipelinePipelineParameterObjectsList getParameterObjects();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a>

---

##### `parameterValues`<sup>Required</sup> <a name="parameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues"></a>

```java
public DatapipelinePipelineParameterValuesList getParameterValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `pipelineObjects`<sup>Required</sup> <a name="pipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects"></a>

```java
public DatapipelinePipelinePipelineObjectsList getPipelineObjects();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a>

---

##### `pipelineTags`<sup>Required</sup> <a name="pipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags"></a>

```java
public DatapipelinePipelinePipelineTagsList getPipelineTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a>

---

##### `activateInput`<sup>Optional</sup> <a name="activateInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput"></a>

```java
public java.lang.Boolean|IResolvable getActivateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterObjectsInput`<sup>Optional</sup> <a name="parameterObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjects> getParameterObjectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>>

---

##### `parameterValuesInput`<sup>Optional</sup> <a name="parameterValuesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterValues> getParameterValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>>

---

##### `pipelineObjectsInput`<sup>Optional</sup> <a name="pipelineObjectsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjects> getPipelineObjectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>>

---

##### `pipelineTagsInput`<sup>Optional</sup> <a name="pipelineTagsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineTags> getPipelineTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>>

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate"></a>

```java
public java.lang.Boolean|IResolvable getActivate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineConfig <a name="DatapipelinePipelineConfig" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineConfig;

DatapipelinePipelineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .activate(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .parameterObjects(IResolvable|java.util.List<DatapipelinePipelineParameterObjects>)
//  .parameterValues(IResolvable|java.util.List<DatapipelinePipelineParameterValues>)
//  .pipelineObjects(IResolvable|java.util.List<DatapipelinePipelinePipelineObjects>)
//  .pipelineTags(IResolvable|java.util.List<DatapipelinePipelinePipelineTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate">activate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects">parameterObjects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>></code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues">parameterValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>></code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects">pipelineObjects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>></code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags">pipelineTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>></code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate"></a>

```java
public java.lang.Boolean|IResolvable getActivate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `parameterObjects`<sup>Optional</sup> <a name="parameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjects> getParameterObjects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>>

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `parameterValues`<sup>Optional</sup> <a name="parameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterValues> getParameterValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>>

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `pipelineObjects`<sup>Optional</sup> <a name="pipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjects> getPipelineObjects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>>

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `pipelineTags`<sup>Optional</sup> <a name="pipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineTags> getPipelineTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>>

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

### DatapipelinePipelineParameterObjects <a name="DatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjects;

DatapipelinePipelineParameterObjects.builder()
//  .attributes(IResolvable|java.util.List<DatapipelinePipelineParameterObjectsAttributes>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>></code> | The attributes of the parameter object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the parameter object. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjectsAttributes> getAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>>

The attributes of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#attributes DatapipelinePipeline#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatapipelinePipelineParameterObjectsAttributes <a name="DatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjectsAttributes;

DatapipelinePipelineParameterObjectsAttributes.builder()
//  .key(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key">key</a></code> | <code>java.lang.String</code> | The field identifier. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The field value, expressed as a String. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelineParameterValues <a name="DatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterValues;

DatapipelinePipelineParameterValues.builder()
//  .id(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the parameter value. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | The field value, expressed as a String. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineObjects <a name="DatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjects;

DatapipelinePipelinePipelineObjects.builder()
//  .fields(IResolvable|java.util.List<DatapipelinePipelinePipelineObjectsFields>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>></code> | Key-value pairs that define the properties of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name">name</a></code> | <code>java.lang.String</code> | The name of the object. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjectsFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>>

Key-value pairs that define the properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#fields DatapipelinePipeline#fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

### DatapipelinePipelinePipelineObjectsFields <a name="DatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjectsFields;

DatapipelinePipelinePipelineObjectsFields.builder()
//  .key(java.lang.String)
//  .refValue(java.lang.String)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key">key</a></code> | <code>java.lang.String</code> | Specifies the name of a field for a particular object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue">refValue</a></code> | <code>java.lang.String</code> | A field value that you specify as an identifier of another object in the same pipeline definition. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A field value that you specify as a string. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Specifies the name of a field for a particular object.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `refValue`<sup>Optional</sup> <a name="refValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue"></a>

```java
public java.lang.String getRefValue();
```

- *Type:* java.lang.String

A field value that you specify as an identifier of another object in the same pipeline definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#ref_value DatapipelinePipeline#ref_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A field value that you specify as a string.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineTags <a name="DatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineTags;

DatapipelinePipelinePipelineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of a tag. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value">value</a></code> | <code>java.lang.String</code> | The value to associate with the key name. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to associate with the key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datapipeline_pipeline#value DatapipelinePipeline#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineParameterObjectsAttributesList <a name="DatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjectsAttributesList;

new DatapipelinePipelineParameterObjectsAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get"></a>

```java
public DatapipelinePipelineParameterObjectsAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjectsAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>>

---


### DatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference;

new DatapipelinePipelineParameterObjectsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelineParameterObjectsAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>

---


### DatapipelinePipelineParameterObjectsList <a name="DatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjectsList;

new DatapipelinePipelineParameterObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get"></a>

```java
public DatapipelinePipelineParameterObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>>

---


### DatapipelinePipelineParameterObjectsOutputReference <a name="DatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterObjectsOutputReference;

new DatapipelinePipelineParameterObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes"></a>

```java
public void putAttributes(IResolvable|java.util.List<DatapipelinePipelineParameterObjectsAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```java
public DatapipelinePipelineParameterObjectsAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterObjectsAttributes> getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelineParameterObjects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>

---


### DatapipelinePipelineParameterValuesList <a name="DatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterValuesList;

new DatapipelinePipelineParameterValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get"></a>

```java
public DatapipelinePipelineParameterValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelineParameterValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>>

---


### DatapipelinePipelineParameterValuesOutputReference <a name="DatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelineParameterValuesOutputReference;

new DatapipelinePipelineParameterValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelineParameterValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>

---


### DatapipelinePipelinePipelineObjectsFieldsList <a name="DatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjectsFieldsList;

new DatapipelinePipelinePipelineObjectsFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```java
public DatapipelinePipelinePipelineObjectsFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjectsFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>>

---


### DatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference;

new DatapipelinePipelinePipelineObjectsFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue">resetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetRefValue` <a name="resetRefValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue"></a>

```java
public void resetRefValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput">refValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">refValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `refValueInput`<sup>Optional</sup> <a name="refValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput"></a>

```java
public java.lang.String getRefValueInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `refValue`<sup>Required</sup> <a name="refValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```java
public java.lang.String getRefValue();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelinePipelineObjectsFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>

---


### DatapipelinePipelinePipelineObjectsList <a name="DatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjectsList;

new DatapipelinePipelinePipelineObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get"></a>

```java
public DatapipelinePipelinePipelineObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>>

---


### DatapipelinePipelinePipelineObjectsOutputReference <a name="DatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineObjectsOutputReference;

new DatapipelinePipelinePipelineObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<DatapipelinePipelinePipelineObjectsFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```java
public DatapipelinePipelinePipelineObjectsFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineObjectsFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelinePipelineObjects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>

---


### DatapipelinePipelinePipelineTagsList <a name="DatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineTagsList;

new DatapipelinePipelinePipelineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get"></a>

```java
public DatapipelinePipelinePipelineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatapipelinePipelinePipelineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>>

---


### DatapipelinePipelinePipelineTagsOutputReference <a name="DatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datapipeline_pipeline.DatapipelinePipelinePipelineTagsOutputReference;

new DatapipelinePipelinePipelineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatapipelinePipelinePipelineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>

---



