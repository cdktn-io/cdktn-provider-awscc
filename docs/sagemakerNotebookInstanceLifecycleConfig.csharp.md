# `sagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfig <a name="SagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfig(Construct Scope, string Id, SagemakerNotebookInstanceLifecycleConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig">SagemakerNotebookInstanceLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate">PutOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart">PutOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName">ResetNotebookInstanceLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate">ResetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart">ResetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnCreate` <a name="PutOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate"></a>

```csharp
private void PutOnCreate(IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---

##### `PutOnStart` <a name="PutOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart"></a>

```csharp
private void PutOnStart(IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerNotebookInstanceLifecycleConfigTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---

##### `ResetNotebookInstanceLifecycleConfigName` <a name="ResetNotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName"></a>

```csharp
private void ResetNotebookInstanceLifecycleConfigName()
```

##### `ResetOnCreate` <a name="ResetOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate"></a>

```csharp
private void ResetOnCreate()
```

##### `ResetOnStart` <a name="ResetOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart"></a>

```csharp
private void ResetOnStart()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstanceLifecycleConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstanceLifecycleConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstanceLifecycleConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstanceLifecycleConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">NotebookInstanceLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate">OnCreate</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart">OnStart</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput">NotebookInstanceLifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput">OnCreateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput">OnStartInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">NotebookInstanceLifecycleConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotebookInstanceLifecycleConfigArn`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```csharp
public string NotebookInstanceLifecycleConfigArn { get; }
```

- *Type:* string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```csharp
public SagemakerNotebookInstanceLifecycleConfigOnCreateList OnCreate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `OnStart`<sup>Required</sup> <a name="OnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```csharp
public SagemakerNotebookInstanceLifecycleConfigOnStartList OnStart { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```csharp
public SagemakerNotebookInstanceLifecycleConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `NotebookInstanceLifecycleConfigNameInput`<sup>Optional</sup> <a name="NotebookInstanceLifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput"></a>

```csharp
public string NotebookInstanceLifecycleConfigNameInput { get; }
```

- *Type:* string

---

##### `OnCreateInput`<sup>Optional</sup> <a name="OnCreateInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate[] OnCreateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---

##### `OnStartInput`<sup>Optional</sup> <a name="OnStartInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart[] OnStartInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---

##### `NotebookInstanceLifecycleConfigName`<sup>Required</sup> <a name="NotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```csharp
public string NotebookInstanceLifecycleConfigName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigConfig <a name="SagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NotebookInstanceLifecycleConfigName = null,
    IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate[] OnCreate = null,
    IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart[] OnStart = null,
    IResolvable|SagemakerNotebookInstanceLifecycleConfigTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName">NotebookInstanceLifecycleConfigName</a></code> | <code>string</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate">OnCreate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart">OnStart</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NotebookInstanceLifecycleConfigName`<sup>Optional</sup> <a name="NotebookInstanceLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName"></a>

```csharp
public string NotebookInstanceLifecycleConfigName { get; set; }
```

- *Type:* string

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `OnCreate`<sup>Optional</sup> <a name="OnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate[] OnCreate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `OnStart`<sup>Optional</sup> <a name="OnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart[] OnStart { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

### SagemakerNotebookInstanceLifecycleConfigOnCreate <a name="SagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnCreate {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigOnStart <a name="SagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnStart {
    string Content = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigTags <a name="SagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnCreateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```csharp
private SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnCreate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### SagemakerNotebookInstanceLifecycleConfigOnStartList <a name="SagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnStartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```csharp
private SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigOnStart InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### SagemakerNotebookInstanceLifecycleConfigTagsList <a name="SagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```csharp
private SagemakerNotebookInstanceLifecycleConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>[]

---


### SagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceLifecycleConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceLifecycleConfigTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>

---



