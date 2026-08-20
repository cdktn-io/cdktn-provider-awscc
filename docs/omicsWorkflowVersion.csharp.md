# `omicsWorkflowVersion` Submodule <a name="`omicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.omicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflowVersion <a name="OmicsWorkflowVersion" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsWorkflowVersion(Construct Scope, string Id, OmicsWorkflowVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig">OmicsWorkflowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate">PutParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri">ResetDefinitionUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain">ResetMain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate">ResetParameterTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId">ResetWorkflowBucketOwnerId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameterTemplate` <a name="PutParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate"></a>

```csharp
private void PutParameterTemplate(IResolvable|System.Collections.Generic.IDictionary<string, OmicsWorkflowVersionParameterTemplate> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetDefinitionUri` <a name="ResetDefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri"></a>

```csharp
private void ResetDefinitionUri()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetMain` <a name="ResetMain" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain"></a>

```csharp
private void ResetMain()
```

##### `ResetParameterTemplate` <a name="ResetParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate"></a>

```csharp
private void ResetParameterTemplate()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity"></a>

```csharp
private void ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWorkflowBucketOwnerId` <a name="ResetWorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId"></a>

```csharp
private void ResetWorkflowBucketOwnerId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsWorkflowVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsWorkflowVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsWorkflowVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsWorkflowVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsWorkflowVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate">ParameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput">DefinitionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput">MainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput">ParameterTemplateInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput">WorkflowBucketOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput">WorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators">Accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri">DefinitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main">Main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId">WorkflowBucketOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParameterTemplate`<sup>Required</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate"></a>

```csharp
public OmicsWorkflowVersionParameterTemplateMap ParameterTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput"></a>

```csharp
public string AcceleratorsInput { get; }
```

- *Type:* string

---

##### `DefinitionUriInput`<sup>Optional</sup> <a name="DefinitionUriInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput"></a>

```csharp
public string DefinitionUriInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `MainInput`<sup>Optional</sup> <a name="MainInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput"></a>

```csharp
public string MainInput { get; }
```

- *Type:* string

---

##### `ParameterTemplateInput`<sup>Optional</sup> <a name="ParameterTemplateInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OmicsWorkflowVersionParameterTemplate> ParameterTemplateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>>

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput"></a>

```csharp
public double StorageCapacityInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `WorkflowBucketOwnerIdInput`<sup>Optional</sup> <a name="WorkflowBucketOwnerIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput"></a>

```csharp
public string WorkflowBucketOwnerIdInput { get; }
```

- *Type:* string

---

##### `WorkflowIdInput`<sup>Optional</sup> <a name="WorkflowIdInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput"></a>

```csharp
public string WorkflowIdInput { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators"></a>

```csharp
public string Accelerators { get; }
```

- *Type:* string

---

##### `DefinitionUri`<sup>Required</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri"></a>

```csharp
public string DefinitionUri { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Main`<sup>Required</sup> <a name="Main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main"></a>

```csharp
public string Main { get; }
```

- *Type:* string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `WorkflowBucketOwnerId`<sup>Required</sup> <a name="WorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```csharp
public string WorkflowBucketOwnerId { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowVersionConfig <a name="OmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsWorkflowVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VersionName,
    string WorkflowId,
    string Accelerators = null,
    string DefinitionUri = null,
    string Description = null,
    string Engine = null,
    string Main = null,
    IResolvable|System.Collections.Generic.IDictionary<string, OmicsWorkflowVersionParameterTemplate> ParameterTemplate = null,
    double StorageCapacity = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string WorkflowBucketOwnerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId">WorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators">Accelerators</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri">DefinitionUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main">Main</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate">ParameterTemplate</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource tags. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId">WorkflowBucketOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}.

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId"></a>

```csharp
public string WorkflowId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}.

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators"></a>

```csharp
public string Accelerators { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}.

---

##### `DefinitionUri`<sup>Optional</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri"></a>

```csharp
public string DefinitionUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}.

---

##### `Main`<sup>Optional</sup> <a name="Main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main"></a>

```csharp
public string Main { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}.

---

##### `ParameterTemplate`<sup>Optional</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OmicsWorkflowVersionParameterTemplate> ParameterTemplate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#tags OmicsWorkflowVersion#tags}

---

##### `WorkflowBucketOwnerId`<sup>Optional</sup> <a name="WorkflowBucketOwnerId" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId"></a>

```csharp
public string WorkflowBucketOwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}.

---

### OmicsWorkflowVersionParameterTemplate <a name="OmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsWorkflowVersionParameterTemplate {
    string Description = null,
    bool|IResolvable Optional = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional">Optional</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional"></a>

```csharp
public bool|IResolvable Optional { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowVersionParameterTemplateMap <a name="OmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsWorkflowVersionParameterTemplateMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get"></a>

```csharp
private OmicsWorkflowVersionParameterTemplateOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, OmicsWorkflowVersionParameterTemplate> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>>

---


### OmicsWorkflowVersionParameterTemplateOutputReference <a name="OmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsWorkflowVersionParameterTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional"></a>

```csharp
private void ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput">OptionalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional">Optional</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput"></a>

```csharp
public bool|IResolvable OptionalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```csharp
public bool|IResolvable Optional { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsWorkflowVersionParameterTemplate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>

---



