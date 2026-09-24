# `docdbelasticClusterSnapshot` Submodule <a name="`docdbelasticClusterSnapshot` Submodule" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbelasticClusterSnapshot <a name="DocdbelasticClusterSnapshot" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot awscc_docdbelastic_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbelasticClusterSnapshot(Construct Scope, string Id, DocdbelasticClusterSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig">DocdbelasticClusterSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig">DocdbelasticClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags"></a>

```csharp
private void PutTags(IResolvable|DocdbelasticClusterSnapshotTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbelasticClusterSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbelasticClusterSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbelasticClusterSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbelasticClusterSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbelasticClusterSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbelasticClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DocdbelasticClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.adminUserName">AdminUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterCreationTime">ClusterCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotCreationTime">SnapshotCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList">DocdbelasticClusterSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminUserName`<sup>Required</sup> <a name="AdminUserName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.adminUserName"></a>

```csharp
public string AdminUserName { get; }
```

- *Type:* string

---

##### `ClusterCreationTime`<sup>Required</sup> <a name="ClusterCreationTime" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterCreationTime"></a>

```csharp
public string ClusterCreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `SnapshotCreationTime`<sup>Required</sup> <a name="SnapshotCreationTime" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotCreationTime"></a>

```csharp
public string SnapshotCreationTime { get; }
```

- *Type:* string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tags"></a>

```csharp
public DocdbelasticClusterSnapshotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList">DocdbelasticClusterSnapshotTagsList</a>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tagsInput"></a>

```csharp
public IResolvable|DocdbelasticClusterSnapshotTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbelasticClusterSnapshotConfig <a name="DocdbelasticClusterSnapshotConfig" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbelasticClusterSnapshotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterArn,
    string SnapshotName,
    IResolvable|DocdbelasticClusterSnapshotTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | The ARN of the elastic cluster of which to create a snapshot. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | The name of the elastic cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | An array of key-value pairs to apply to the elastic cluster snapshot. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

The ARN of the elastic cluster of which to create a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#cluster_arn DocdbelasticClusterSnapshot#cluster_arn}

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

The name of the elastic cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#snapshot_name DocdbelasticClusterSnapshot#snapshot_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.tags"></a>

```csharp
public IResolvable|DocdbelasticClusterSnapshotTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

An array of key-value pairs to apply to the elastic cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#tags DocdbelasticClusterSnapshot#tags}

---

### DocdbelasticClusterSnapshotTags <a name="DocdbelasticClusterSnapshotTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbelasticClusterSnapshotTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#key DocdbelasticClusterSnapshot#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#value DocdbelasticClusterSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbelasticClusterSnapshotTagsList <a name="DocdbelasticClusterSnapshotTagsList" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbelasticClusterSnapshotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get"></a>

```csharp
private DocdbelasticClusterSnapshotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.internalValue"></a>

```csharp
public IResolvable|DocdbelasticClusterSnapshotTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---


### DocdbelasticClusterSnapshotTagsOutputReference <a name="DocdbelasticClusterSnapshotTagsOutputReference" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbelasticClusterSnapshotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocdbelasticClusterSnapshotTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>

---



