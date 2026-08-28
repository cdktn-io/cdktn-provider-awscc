# `lakeformationTagAssociation` Submodule <a name="`lakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.lakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationTagAssociation <a name="LakeformationTagAssociation" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociation(Construct Scope, string Id, LakeformationTagAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig">LakeformationTagAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig">LakeformationTagAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags">PutLfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource">PutResource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLfTags` <a name="PutLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags"></a>

```csharp
private void PutLfTags(IResolvable|LakeformationTagAssociationLfTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putLfTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---

##### `PutResource` <a name="PutResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource"></a>

```csharp
private void PutResource(LakeformationTagAssociationResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationTagAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationTagAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationTagAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationTagAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationTagAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags">LfTags</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier">TagsIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput">LfTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput">ResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LfTags`<sup>Required</sup> <a name="LfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTags"></a>

```csharp
public LakeformationTagAssociationLfTagsList LfTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList">LakeformationTagAssociationLfTagsList</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resource"></a>

```csharp
public LakeformationTagAssociationResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference">LakeformationTagAssociationResourceOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `TagsIdentifier`<sup>Required</sup> <a name="TagsIdentifier" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tagsIdentifier"></a>

```csharp
public string TagsIdentifier { get; }
```

- *Type:* string

---

##### `LfTagsInput`<sup>Optional</sup> <a name="LfTagsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.lfTagsInput"></a>

```csharp
public IResolvable|LakeformationTagAssociationLfTags[] LfTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.resourceInput"></a>

```csharp
public IResolvable|LakeformationTagAssociationResource ResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationTagAssociationConfig <a name="LakeformationTagAssociationConfig" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|LakeformationTagAssociationLfTags[] LfTags,
    LakeformationTagAssociationResource Resource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags">LfTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | List of Lake Formation Tags to associate with the Lake Formation Resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | Resource to tag with the Lake Formation Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LfTags`<sup>Required</sup> <a name="LfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.lfTags"></a>

```csharp
public IResolvable|LakeformationTagAssociationLfTags[] LfTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

List of Lake Formation Tags to associate with the Lake Formation Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#lf_tags LakeformationTagAssociation#lf_tags}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationConfig.property.resource"></a>

```csharp
public LakeformationTagAssociationResource Resource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

Resource to tag with the Lake Formation Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#resource LakeformationTagAssociation#resource}

---

### LakeformationTagAssociationLfTags <a name="LakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationLfTags {
    string CatalogId,
    string TagKey,
    string[] TagValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues">TagValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}. |

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key LakeformationTagAssociation#tag_key}.

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values LakeformationTagAssociation#tag_values}.

---

### LakeformationTagAssociationResource <a name="LakeformationTagAssociationResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResource {
    string Catalog = null,
    LakeformationTagAssociationResourceDatabase Database = null,
    LakeformationTagAssociationResourceTable Table = null,
    LakeformationTagAssociationResourceTableWithColumns TableWithColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog LakeformationTagAssociation#catalog}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.database"></a>

```csharp
public LakeformationTagAssociationResourceDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database LakeformationTagAssociation#database}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.table"></a>

```csharp
public LakeformationTagAssociationResourceTable Table { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table LakeformationTagAssociation#table}.

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource.property.tableWithColumns"></a>

```csharp
public LakeformationTagAssociationResourceTableWithColumns TableWithColumns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns LakeformationTagAssociation#table_with_columns}.

---

### LakeformationTagAssociationResourceDatabase <a name="LakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceDatabase {
    string CatalogId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

### LakeformationTagAssociationResourceTable <a name="LakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceTable {
    string CatalogId = null,
    string DatabaseName = null,
    string Name = null,
    string TableWildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard">TableWildcard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

##### `TableWildcard`<sup>Optional</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable.property.tableWildcard"></a>

```csharp
public string TableWildcard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard LakeformationTagAssociation#table_wildcard}.

---

### LakeformationTagAssociationResourceTableWithColumns <a name="LakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceTableWithColumns {
    string CatalogId = null,
    string[] ColumnNames = null,
    string DatabaseName = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id LakeformationTagAssociation#catalog_id}.

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names LakeformationTagAssociation#column_names}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name LakeformationTagAssociation#database_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name LakeformationTagAssociation#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationTagAssociationLfTagsList <a name="LakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationLfTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get"></a>

```csharp
private LakeformationTagAssociationLfTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsList.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationLfTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>[]

---


### LakeformationTagAssociationLfTagsOutputReference <a name="LakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationLfTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationLfTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationLfTags">LakeformationTagAssociationLfTags</a>

---


### LakeformationTagAssociationResourceDatabaseOutputReference <a name="LakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceDatabase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---


### LakeformationTagAssociationResourceOutputReference <a name="LakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(LakeformationTagAssociationResourceDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `PutTable` <a name="PutTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable"></a>

```csharp
private void PutTable(LakeformationTagAssociationResourceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns"></a>

```csharp
private void PutTableWithColumns(LakeformationTagAssociationResourceTableWithColumns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.resetTableWithColumns"></a>

```csharp
private void ResetTableWithColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput">TableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.database"></a>

```csharp
public LakeformationTagAssociationResourceDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabaseOutputReference">LakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.table"></a>

```csharp
public LakeformationTagAssociationResourceTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference">LakeformationTagAssociationResourceTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```csharp
public LakeformationTagAssociationResourceTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference">LakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.databaseInput"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceDatabase DatabaseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceDatabase">LakeformationTagAssociationResourceDatabase</a>

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableInput"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceTable TableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.tableWithColumnsInput"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceTableWithColumns TableWithColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResource">LakeformationTagAssociationResource</a>

---


### LakeformationTagAssociationResourceTableOutputReference <a name="LakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard">ResetTableWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTableWildcard` <a name="ResetTableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.resetTableWildcard"></a>

```csharp
private void ResetTableWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput">TableWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">TableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TableWildcardInput`<sup>Optional</sup> <a name="TableWildcardInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcardInput"></a>

```csharp
public string TableWildcardInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableWildcard`<sup>Required</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```csharp
public string TableWildcard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTable">LakeformationTagAssociationResourceTable</a>

---


### LakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="LakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationTagAssociationResourceTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationTagAssociationResourceTableWithColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationTagAssociation.LakeformationTagAssociationResourceTableWithColumns">LakeformationTagAssociationResourceTableWithColumns</a>

---



