# `omicsRunGroup` Submodule <a name="`omicsRunGroup` Submodule" id="@cdktn/provider-awscc.omicsRunGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsRunGroup <a name="OmicsRunGroup" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group awscc_omics_run_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsRunGroup(Construct Scope, string Id, OmicsRunGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig">OmicsRunGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig">OmicsRunGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxCpus">ResetMaxCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxGpus">ResetMaxGpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxRuns">ResetMaxRuns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMaxCpus` <a name="ResetMaxCpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxCpus"></a>

```csharp
private void ResetMaxCpus()
```

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxDuration"></a>

```csharp
private void ResetMaxDuration()
```

##### `ResetMaxGpus` <a name="ResetMaxGpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxGpus"></a>

```csharp
private void ResetMaxGpus()
```

##### `ResetMaxRuns` <a name="ResetMaxRuns" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetMaxRuns"></a>

```csharp
private void ResetMaxRuns()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsRunGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsRunGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsRunGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsRunGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsRunGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OmicsRunGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsRunGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsRunGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OmicsRunGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.runGroupId">RunGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxCpusInput">MaxCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxDurationInput">MaxDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxGpusInput">MaxGpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxRunsInput">MaxRunsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxCpus">MaxCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxDuration">MaxDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxGpus">MaxGpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxRuns">MaxRuns</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RunGroupId`<sup>Required</sup> <a name="RunGroupId" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.runGroupId"></a>

```csharp
public string RunGroupId { get; }
```

- *Type:* string

---

##### `MaxCpusInput`<sup>Optional</sup> <a name="MaxCpusInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxCpusInput"></a>

```csharp
public double MaxCpusInput { get; }
```

- *Type:* double

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxDurationInput"></a>

```csharp
public double MaxDurationInput { get; }
```

- *Type:* double

---

##### `MaxGpusInput`<sup>Optional</sup> <a name="MaxGpusInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxGpusInput"></a>

```csharp
public double MaxGpusInput { get; }
```

- *Type:* double

---

##### `MaxRunsInput`<sup>Optional</sup> <a name="MaxRunsInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxRunsInput"></a>

```csharp
public double MaxRunsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxCpus`<sup>Required</sup> <a name="MaxCpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxCpus"></a>

```csharp
public double MaxCpus { get; }
```

- *Type:* double

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxDuration"></a>

```csharp
public double MaxDuration { get; }
```

- *Type:* double

---

##### `MaxGpus`<sup>Required</sup> <a name="MaxGpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxGpus"></a>

```csharp
public double MaxGpus { get; }
```

- *Type:* double

---

##### `MaxRuns`<sup>Required</sup> <a name="MaxRuns" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.maxRuns"></a>

```csharp
public double MaxRuns { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsRunGroupConfig <a name="OmicsRunGroupConfig" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsRunGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MaxCpus = null,
    double MaxDuration = null,
    double MaxGpus = null,
    double MaxRuns = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxCpus">MaxCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_cpus OmicsRunGroup#max_cpus}. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxDuration">MaxDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_duration OmicsRunGroup#max_duration}. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxGpus">MaxGpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_gpus OmicsRunGroup#max_gpus}. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxRuns">MaxRuns</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_runs OmicsRunGroup#max_runs}. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#name OmicsRunGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaxCpus`<sup>Optional</sup> <a name="MaxCpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxCpus"></a>

```csharp
public double MaxCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_cpus OmicsRunGroup#max_cpus}.

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxDuration"></a>

```csharp
public double MaxDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_duration OmicsRunGroup#max_duration}.

---

##### `MaxGpus`<sup>Optional</sup> <a name="MaxGpus" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxGpus"></a>

```csharp
public double MaxGpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_gpus OmicsRunGroup#max_gpus}.

---

##### `MaxRuns`<sup>Optional</sup> <a name="MaxRuns" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.maxRuns"></a>

```csharp
public double MaxRuns { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#max_runs OmicsRunGroup#max_runs}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#name OmicsRunGroup#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsRunGroup.OmicsRunGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_run_group#tags OmicsRunGroup#tags}

---



