# `cleanroomsIdMappingTable` Submodule <a name="`cleanroomsIdMappingTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIdMappingTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIdMappingTable <a name="CleanroomsIdMappingTable" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTable(Construct Scope, string Id, CleanroomsIdMappingTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig">CleanroomsIdMappingTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig">CleanroomsIdMappingTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig">PutInputReferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputReferenceConfig` <a name="PutInputReferenceConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig"></a>

```csharp
private void PutInputReferenceConfig(CleanroomsIdMappingTableInputReferenceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags"></a>

```csharp
private void PutTags(IResolvable|CleanroomsIdMappingTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIdMappingTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIdMappingTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIdMappingTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CleanroomsIdMappingTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsIdMappingTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsIdMappingTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIdMappingTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.idMappingTableIdentifier">IdMappingTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfig">InputReferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference">CleanroomsIdMappingTableInputReferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceProperties">InputReferenceProperties</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference">CleanroomsIdMappingTableInputReferencePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipArn">MembershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList">CleanroomsIdMappingTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfigInput">InputReferenceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdMappingTableIdentifier`<sup>Required</sup> <a name="IdMappingTableIdentifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.idMappingTableIdentifier"></a>

```csharp
public string IdMappingTableIdentifier { get; }
```

- *Type:* string

---

##### `InputReferenceConfig`<sup>Required</sup> <a name="InputReferenceConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfig"></a>

```csharp
public CleanroomsIdMappingTableInputReferenceConfigOutputReference InputReferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference">CleanroomsIdMappingTableInputReferenceConfigOutputReference</a>

---

##### `InputReferenceProperties`<sup>Required</sup> <a name="InputReferenceProperties" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceProperties"></a>

```csharp
public CleanroomsIdMappingTableInputReferencePropertiesOutputReference InputReferenceProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference">CleanroomsIdMappingTableInputReferencePropertiesOutputReference</a>

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipArn"></a>

```csharp
public string MembershipArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tags"></a>

```csharp
public CleanroomsIdMappingTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList">CleanroomsIdMappingTableTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InputReferenceConfigInput`<sup>Optional</sup> <a name="InputReferenceConfigInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfigInput"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableInputReferenceConfig InputReferenceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifierInput"></a>

```csharp
public string MembershipIdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tagsInput"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIdMappingTableConfig <a name="CleanroomsIdMappingTableConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CleanroomsIdMappingTableInputReferenceConfig InputReferenceConfig,
    string MembershipIdentifier,
    string Name,
    string Description = null,
    string KmsKeyArn = null,
    IResolvable|CleanroomsIdMappingTableTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.inputReferenceConfig">InputReferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InputReferenceConfig`<sup>Required</sup> <a name="InputReferenceConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.inputReferenceConfig"></a>

```csharp
public CleanroomsIdMappingTableInputReferenceConfig InputReferenceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.tags"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}.

---

### CleanroomsIdMappingTableInputReferenceConfig <a name="CleanroomsIdMappingTableInputReferenceConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferenceConfig {
    string InputReferenceArn,
    bool|IResolvable ManageResourcePolicies
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.inputReferenceArn">InputReferenceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CleanroomsIdMappingTable#input_reference_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.manageResourcePolicies">ManageResourcePolicies</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CleanroomsIdMappingTable#manage_resource_policies}. |

---

##### `InputReferenceArn`<sup>Required</sup> <a name="InputReferenceArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.inputReferenceArn"></a>

```csharp
public string InputReferenceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CleanroomsIdMappingTable#input_reference_arn}.

---

##### `ManageResourcePolicies`<sup>Required</sup> <a name="ManageResourcePolicies" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.manageResourcePolicies"></a>

```csharp
public bool|IResolvable ManageResourcePolicies { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CleanroomsIdMappingTable#manage_resource_policies}.

---

### CleanroomsIdMappingTableInputReferenceProperties <a name="CleanroomsIdMappingTableInputReferenceProperties" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferenceProperties {

};
```


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource {

};
```


### CleanroomsIdMappingTableTags <a name="CleanroomsIdMappingTableTags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#key CleanroomsIdMappingTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#value CleanroomsIdMappingTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#key CleanroomsIdMappingTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_id_mapping_table#value CleanroomsIdMappingTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIdMappingTableInputReferenceConfigOutputReference <a name="CleanroomsIdMappingTableInputReferenceConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArnInput">InputReferenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePoliciesInput">ManageResourcePoliciesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn">InputReferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies">ManageResourcePolicies</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputReferenceArnInput`<sup>Optional</sup> <a name="InputReferenceArnInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArnInput"></a>

```csharp
public string InputReferenceArnInput { get; }
```

- *Type:* string

---

##### `ManageResourcePoliciesInput`<sup>Optional</sup> <a name="ManageResourcePoliciesInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePoliciesInput"></a>

```csharp
public bool|IResolvable ManageResourcePoliciesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputReferenceArn`<sup>Required</sup> <a name="InputReferenceArn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn"></a>

```csharp
public string InputReferenceArn { get; }
```

- *Type:* string

---

##### `ManageResourcePolicies`<sup>Required</sup> <a name="ManageResourcePolicies" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies"></a>

```csharp
public bool|IResolvable ManageResourcePolicies { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableInputReferenceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

---


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get"></a>

```csharp
private CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId">IdNamespaceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdNamespaceAssociationId`<sup>Required</sup> <a name="IdNamespaceAssociationId" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId"></a>

```csharp
public string IdNamespaceAssociationId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue"></a>

```csharp
public CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a>

---


### CleanroomsIdMappingTableInputReferencePropertiesOutputReference <a name="CleanroomsIdMappingTableInputReferencePropertiesOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableInputReferencePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource">IdMappingTableInputSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties">CleanroomsIdMappingTableInputReferenceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdMappingTableInputSource`<sup>Required</sup> <a name="IdMappingTableInputSource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource"></a>

```csharp
public CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList IdMappingTableInputSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue"></a>

```csharp
public CleanroomsIdMappingTableInputReferenceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties">CleanroomsIdMappingTableInputReferenceProperties</a>

---


### CleanroomsIdMappingTableTagsList <a name="CleanroomsIdMappingTableTagsList" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get"></a>

```csharp
private CleanroomsIdMappingTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>[]

---


### CleanroomsIdMappingTableTagsOutputReference <a name="CleanroomsIdMappingTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CleanroomsIdMappingTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CleanroomsIdMappingTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>

---



