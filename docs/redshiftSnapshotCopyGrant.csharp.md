# `redshiftSnapshotCopyGrant` Submodule <a name="`redshiftSnapshotCopyGrant` Submodule" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopyGrant <a name="RedshiftSnapshotCopyGrant" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant awscc_redshift_snapshot_copy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftSnapshotCopyGrant(Construct Scope, string Id, RedshiftSnapshotCopyGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags"></a>

```csharp
private void PutTags(IResolvable|RedshiftSnapshotCopyGrantTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftSnapshotCopyGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftSnapshotCopyGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftSnapshotCopyGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftSnapshotCopyGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftSnapshotCopyGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftSnapshotCopyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput">SnapshotCopyGrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags"></a>

```csharp
public RedshiftSnapshotCopyGrantTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotCopyGrantNameInput`<sup>Optional</sup> <a name="SnapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput"></a>

```csharp
public string SnapshotCopyGrantNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput"></a>

```csharp
public IResolvable|RedshiftSnapshotCopyGrantTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyGrantConfig <a name="RedshiftSnapshotCopyGrantConfig" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftSnapshotCopyGrantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SnapshotCopyGrantName,
    string KmsKeyId = null,
    IResolvable|RedshiftSnapshotCopyGrantTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName">SnapshotCopyGrantName</a></code> | <code>string</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | A list of tag instances. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SnapshotCopyGrantName`<sup>Required</sup> <a name="SnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName"></a>

```csharp
public string SnapshotCopyGrantName { get; set; }
```

- *Type:* string

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags"></a>

```csharp
public IResolvable|RedshiftSnapshotCopyGrantTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

### RedshiftSnapshotCopyGrantTags <a name="RedshiftSnapshotCopyGrantTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftSnapshotCopyGrantTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key">Key</a></code> | <code>string</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value">Value</a></code> | <code>string</code> | The value for the resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#key RedshiftSnapshotCopyGrant#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/redshift_snapshot_copy_grant#value RedshiftSnapshotCopyGrant#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotCopyGrantTagsList <a name="RedshiftSnapshotCopyGrantTagsList" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftSnapshotCopyGrantTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get"></a>

```csharp
private RedshiftSnapshotCopyGrantTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue"></a>

```csharp
public IResolvable|RedshiftSnapshotCopyGrantTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---


### RedshiftSnapshotCopyGrantTagsOutputReference <a name="RedshiftSnapshotCopyGrantTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftSnapshotCopyGrantTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RedshiftSnapshotCopyGrantTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>

---



