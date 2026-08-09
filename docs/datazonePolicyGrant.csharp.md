# `datazonePolicyGrant` Submodule <a name="`datazonePolicyGrant` Submodule" id="@cdktn/provider-awscc.datazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazonePolicyGrant <a name="DatazonePolicyGrant" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant awscc_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrant(Construct Scope, string Id, DatazonePolicyGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail">PutDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetDetail">ResetDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetail` <a name="PutDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail"></a>

```csharp
private void PutDetail(DatazonePolicyGrantDetail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal"></a>

```csharp
private void PutPrincipal(DatazonePolicyGrantPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---

##### `ResetDetail` <a name="ResetDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetDetail"></a>

```csharp
private void ResetDetail()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazonePolicyGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazonePolicyGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazonePolicyGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazonePolicyGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazonePolicyGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detail">Detail</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference">DatazonePolicyGrantDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference">DatazonePolicyGrantPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput">DetailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput">EntityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier">EntityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detail"></a>

```csharp
public DatazonePolicyGrantDetailOutputReference Detail { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference">DatazonePolicyGrantDetailOutputReference</a>

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principal"></a>

```csharp
public DatazonePolicyGrantPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference">DatazonePolicyGrantPrincipalOutputReference</a>

---

##### `DetailInput`<sup>Optional</sup> <a name="DetailInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail DetailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EntityIdentifierInput`<sup>Optional</sup> <a name="EntityIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput"></a>

```csharp
public string EntityIdentifierInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier"></a>

```csharp
public string EntityIdentifier { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazonePolicyGrantConfig <a name="DatazonePolicyGrantConfig" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string EntityIdentifier,
    string EntityType,
    string PolicyType,
    DatazonePolicyGrantDetail Detail = null,
    DatazonePolicyGrantPrincipal Principal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier">EntityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail">Detail</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `EntityIdentifier`<sup>Required</sup> <a name="EntityIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier"></a>

```csharp
public string EntityIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `Detail`<sup>Optional</sup> <a name="Detail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail"></a>

```csharp
public DatazonePolicyGrantDetail Detail { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal"></a>

```csharp
public DatazonePolicyGrantPrincipal Principal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}.

---

### DatazonePolicyGrantDetail <a name="DatazonePolicyGrantDetail" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetail {
    DatazonePolicyGrantDetailAddToProjectMemberPool AddToProjectMemberPool = null,
    DatazonePolicyGrantDetailCreateAssetType CreateAssetType = null,
    DatazonePolicyGrantDetailCreateDomainUnit CreateDomainUnit = null,
    string CreateEnvironment = null,
    string CreateEnvironmentFromBlueprint = null,
    DatazonePolicyGrantDetailCreateEnvironmentProfile CreateEnvironmentProfile = null,
    DatazonePolicyGrantDetailCreateFormType CreateFormType = null,
    DatazonePolicyGrantDetailCreateGlossary CreateGlossary = null,
    DatazonePolicyGrantDetailCreateProject CreateProject = null,
    DatazonePolicyGrantDetailCreateProjectFromProjectProfile CreateProjectFromProjectProfile = null,
    string DelegateCreateEnvironmentProfile = null,
    DatazonePolicyGrantDetailOverrideDomainUnitOwners OverrideDomainUnitOwners = null,
    DatazonePolicyGrantDetailOverrideProjectOwners OverrideProjectOwners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType">CreateAssetType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit">CreateDomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment">CreateEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType">CreateFormType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary">CreateGlossary</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject">CreateProject</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}. |

---

##### `AddToProjectMemberPool`<sup>Optional</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool"></a>

```csharp
public DatazonePolicyGrantDetailAddToProjectMemberPool AddToProjectMemberPool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}.

---

##### `CreateAssetType`<sup>Optional</sup> <a name="CreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType"></a>

```csharp
public DatazonePolicyGrantDetailCreateAssetType CreateAssetType { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}.

---

##### `CreateDomainUnit`<sup>Optional</sup> <a name="CreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit"></a>

```csharp
public DatazonePolicyGrantDetailCreateDomainUnit CreateDomainUnit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}.

---

##### `CreateEnvironment`<sup>Optional</sup> <a name="CreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment"></a>

```csharp
public string CreateEnvironment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}.

---

##### `CreateEnvironmentFromBlueprint`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint"></a>

```csharp
public string CreateEnvironmentFromBlueprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}.

---

##### `CreateEnvironmentProfile`<sup>Optional</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateEnvironmentProfile CreateEnvironmentProfile { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}.

---

##### `CreateFormType`<sup>Optional</sup> <a name="CreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType"></a>

```csharp
public DatazonePolicyGrantDetailCreateFormType CreateFormType { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}.

---

##### `CreateGlossary`<sup>Optional</sup> <a name="CreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary"></a>

```csharp
public DatazonePolicyGrantDetailCreateGlossary CreateGlossary { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}.

---

##### `CreateProject`<sup>Optional</sup> <a name="CreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject"></a>

```csharp
public DatazonePolicyGrantDetailCreateProject CreateProject { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}.

---

##### `CreateProjectFromProjectProfile`<sup>Optional</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateProjectFromProjectProfile CreateProjectFromProjectProfile { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}.

---

##### `DelegateCreateEnvironmentProfile`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile"></a>

```csharp
public string DelegateCreateEnvironmentProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}.

---

##### `OverrideDomainUnitOwners`<sup>Optional</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideDomainUnitOwners OverrideDomainUnitOwners { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}.

---

##### `OverrideProjectOwners`<sup>Optional</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideProjectOwners OverrideProjectOwners { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}.

---

### DatazonePolicyGrantDetailAddToProjectMemberPool <a name="DatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailAddToProjectMemberPool {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateAssetType <a name="DatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateAssetType {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateDomainUnit <a name="DatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateDomainUnit {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateEnvironmentProfile {
    string DomainUnitId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `DomainUnitId`<sup>Optional</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantDetailCreateFormType <a name="DatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateFormType {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateGlossary <a name="DatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateGlossary {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProject <a name="DatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateProject {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfile {
    bool|IResolvable IncludeChildDomainUnits = null,
    string[] ProjectProfiles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles">ProjectProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

##### `ProjectProfiles`<sup>Optional</sup> <a name="ProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles"></a>

```csharp
public string[] ProjectProfiles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}.

---

### DatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailOverrideDomainUnitOwners {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailOverrideProjectOwners <a name="DatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailOverrideProjectOwners {
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipal <a name="DatazonePolicyGrantPrincipal" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipal {
    DatazonePolicyGrantPrincipalDomainUnit DomainUnit = null,
    DatazonePolicyGrantPrincipalGroup Group = null,
    DatazonePolicyGrantPrincipalProject Project = null,
    DatazonePolicyGrantPrincipalUser User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit">DomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group">Group</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}. |

---

##### `DomainUnit`<sup>Optional</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnit DomainUnit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group"></a>

```csharp
public DatazonePolicyGrantPrincipalGroup Group { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project"></a>

```csharp
public DatazonePolicyGrantPrincipalProject Project { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user"></a>

```csharp
public DatazonePolicyGrantPrincipalUser User { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}.

---

### DatazonePolicyGrantPrincipalDomainUnit <a name="DatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalDomainUnit {
    string DomainUnitDesignation = null,
    DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter DomainUnitGrantFilter = null,
    string DomainUnitIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitGrantFilter">DomainUnitGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_grant_filter DatazonePolicyGrant#domain_unit_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}. |

---

##### `DomainUnitDesignation`<sup>Optional</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation"></a>

```csharp
public string DomainUnitDesignation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}.

---

##### `DomainUnitGrantFilter`<sup>Optional</sup> <a name="DomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter DomainUnitGrantFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_grant_filter DatazonePolicyGrant#domain_unit_grant_filter}.

---

##### `DomainUnitIdentifier`<sup>Optional</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}.

---

### DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter <a name="DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter {
    string AllDomainUnitsGrantFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}. |

---

##### `AllDomainUnitsGrantFilter`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.property.allDomainUnitsGrantFilter"></a>

```csharp
public string AllDomainUnitsGrantFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}.

---

### DatazonePolicyGrantPrincipalGroup <a name="DatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalGroup {
    string GroupIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}. |

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}.

---

### DatazonePolicyGrantPrincipalProject <a name="DatazonePolicyGrantPrincipalProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProject {
    string ProjectDesignation = null,
    DatazonePolicyGrantPrincipalProjectProjectGrantFilter ProjectGrantFilter = null,
    string ProjectIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation">ProjectDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectGrantFilter">ProjectGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_grant_filter DatazonePolicyGrant#project_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}. |

---

##### `ProjectDesignation`<sup>Optional</sup> <a name="ProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation"></a>

```csharp
public string ProjectDesignation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}.

---

##### `ProjectGrantFilter`<sup>Optional</sup> <a name="ProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectProjectGrantFilter ProjectGrantFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_grant_filter DatazonePolicyGrant#project_grant_filter}.

---

##### `ProjectIdentifier`<sup>Optional</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}.

---

### DatazonePolicyGrantPrincipalProjectProjectGrantFilter <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProjectProjectGrantFilter {
    DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter DomainUnitFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.property.domainUnitFilter">DomainUnitFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}. |

---

##### `DomainUnitFilter`<sup>Optional</sup> <a name="DomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter.property.domainUnitFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter DomainUnitFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}.

---

### DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter {
    string DomainUnit = null,
    bool|IResolvable IncludeChildDomainUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.domainUnit">DomainUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `DomainUnit`<sup>Optional</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.domainUnit"></a>

```csharp
public string DomainUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `IncludeChildDomainUnits`<sup>Optional</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipalUser <a name="DatazonePolicyGrantPrincipalUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalUser {
    string AllUsersGrantFilter = null,
    string UserIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier">UserIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}. |

---

##### `AllUsersGrantFilter`<sup>Optional</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter"></a>

```csharp
public string AllUsersGrantFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}.

---

##### `UserIdentifier`<sup>Optional</sup> <a name="UserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier"></a>

```csharp
public string UserIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateAssetTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---


### DatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateDomainUnitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId">ResetDomainUnitId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnitId` <a name="ResetDomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId"></a>

```csharp
private void ResetDomainUnitId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput">DomainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">DomainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitIdInput`<sup>Optional</sup> <a name="DomainUnitIdInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput"></a>

```csharp
public string DomainUnitIdInput { get; }
```

- *Type:* string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```csharp
public string DomainUnitId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateFormTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---


### DatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateGlossaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles">ResetProjectProfiles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```

##### `ResetProjectProfiles` <a name="ResetProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles"></a>

```csharp
private void ResetProjectProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput">ProjectProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">ProjectProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectProfilesInput`<sup>Optional</sup> <a name="ProjectProfilesInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput"></a>

```csharp
public string[] ProjectProfilesInput { get; }
```

- *Type:* string[]

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectProfiles`<sup>Required</sup> <a name="ProjectProfiles" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```csharp
public string[] ProjectProfiles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DatazonePolicyGrantDetailCreateProjectOutputReference <a name="DatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailCreateProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---


### DatazonePolicyGrantDetailOutputReference <a name="DatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool">PutAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType">PutCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit">PutCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile">PutCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType">PutCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary">PutCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject">PutCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile">PutCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners">PutOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners">PutOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool">ResetAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType">ResetCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit">ResetCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment">ResetCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint">ResetCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile">ResetCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType">ResetCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary">ResetCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject">ResetCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile">ResetCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile">ResetDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners">ResetOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners">ResetOverrideProjectOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddToProjectMemberPool` <a name="PutAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool"></a>

```csharp
private void PutAddToProjectMemberPool(DatazonePolicyGrantDetailAddToProjectMemberPool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---

##### `PutCreateAssetType` <a name="PutCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType"></a>

```csharp
private void PutCreateAssetType(DatazonePolicyGrantDetailCreateAssetType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---

##### `PutCreateDomainUnit` <a name="PutCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit"></a>

```csharp
private void PutCreateDomainUnit(DatazonePolicyGrantDetailCreateDomainUnit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---

##### `PutCreateEnvironmentProfile` <a name="PutCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile"></a>

```csharp
private void PutCreateEnvironmentProfile(DatazonePolicyGrantDetailCreateEnvironmentProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---

##### `PutCreateFormType` <a name="PutCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType"></a>

```csharp
private void PutCreateFormType(DatazonePolicyGrantDetailCreateFormType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---

##### `PutCreateGlossary` <a name="PutCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary"></a>

```csharp
private void PutCreateGlossary(DatazonePolicyGrantDetailCreateGlossary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---

##### `PutCreateProject` <a name="PutCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject"></a>

```csharp
private void PutCreateProject(DatazonePolicyGrantDetailCreateProject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---

##### `PutCreateProjectFromProjectProfile` <a name="PutCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile"></a>

```csharp
private void PutCreateProjectFromProjectProfile(DatazonePolicyGrantDetailCreateProjectFromProjectProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---

##### `PutOverrideDomainUnitOwners` <a name="PutOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners"></a>

```csharp
private void PutOverrideDomainUnitOwners(DatazonePolicyGrantDetailOverrideDomainUnitOwners Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---

##### `PutOverrideProjectOwners` <a name="PutOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners"></a>

```csharp
private void PutOverrideProjectOwners(DatazonePolicyGrantDetailOverrideProjectOwners Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---

##### `ResetAddToProjectMemberPool` <a name="ResetAddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool"></a>

```csharp
private void ResetAddToProjectMemberPool()
```

##### `ResetCreateAssetType` <a name="ResetCreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType"></a>

```csharp
private void ResetCreateAssetType()
```

##### `ResetCreateDomainUnit` <a name="ResetCreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit"></a>

```csharp
private void ResetCreateDomainUnit()
```

##### `ResetCreateEnvironment` <a name="ResetCreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment"></a>

```csharp
private void ResetCreateEnvironment()
```

##### `ResetCreateEnvironmentFromBlueprint` <a name="ResetCreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint"></a>

```csharp
private void ResetCreateEnvironmentFromBlueprint()
```

##### `ResetCreateEnvironmentProfile` <a name="ResetCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile"></a>

```csharp
private void ResetCreateEnvironmentProfile()
```

##### `ResetCreateFormType` <a name="ResetCreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType"></a>

```csharp
private void ResetCreateFormType()
```

##### `ResetCreateGlossary` <a name="ResetCreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary"></a>

```csharp
private void ResetCreateGlossary()
```

##### `ResetCreateProject` <a name="ResetCreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject"></a>

```csharp
private void ResetCreateProject()
```

##### `ResetCreateProjectFromProjectProfile` <a name="ResetCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile"></a>

```csharp
private void ResetCreateProjectFromProjectProfile()
```

##### `ResetDelegateCreateEnvironmentProfile` <a name="ResetDelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile"></a>

```csharp
private void ResetDelegateCreateEnvironmentProfile()
```

##### `ResetOverrideDomainUnitOwners` <a name="ResetOverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners"></a>

```csharp
private void ResetOverrideDomainUnitOwners()
```

##### `ResetOverrideProjectOwners` <a name="ResetOverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners"></a>

```csharp
private void ResetOverrideProjectOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">AddToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType">CreateAssetType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference">DatazonePolicyGrantDetailCreateAssetTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit">CreateDomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference">DatazonePolicyGrantDetailCreateDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">CreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType">CreateFormType</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference">DatazonePolicyGrantDetailCreateFormTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary">CreateGlossary</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference">DatazonePolicyGrantDetailCreateGlossaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject">CreateProject</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference">DatazonePolicyGrantDetailCreateProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">CreateProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">OverrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">OverrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput">AddToProjectMemberPoolInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput">CreateAssetTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput">CreateDomainUnitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput">CreateEnvironmentFromBlueprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput">CreateEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput">CreateEnvironmentProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput">CreateFormTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput">CreateGlossaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput">CreateProjectFromProjectProfileInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput">CreateProjectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput">DelegateCreateEnvironmentProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput">OverrideDomainUnitOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput">OverrideProjectOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment">CreateEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">CreateEnvironmentFromBlueprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">DelegateCreateEnvironmentProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddToProjectMemberPool`<sup>Required</sup> <a name="AddToProjectMemberPool" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```csharp
public DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference AddToProjectMemberPool { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a>

---

##### `CreateAssetType`<sup>Required</sup> <a name="CreateAssetType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```csharp
public DatazonePolicyGrantDetailCreateAssetTypeOutputReference CreateAssetType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference">DatazonePolicyGrantDetailCreateAssetTypeOutputReference</a>

---

##### `CreateDomainUnit`<sup>Required</sup> <a name="CreateDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```csharp
public DatazonePolicyGrantDetailCreateDomainUnitOutputReference CreateDomainUnit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference">DatazonePolicyGrantDetailCreateDomainUnitOutputReference</a>

---

##### `CreateEnvironmentProfile`<sup>Required</sup> <a name="CreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference CreateEnvironmentProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a>

---

##### `CreateFormType`<sup>Required</sup> <a name="CreateFormType" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```csharp
public DatazonePolicyGrantDetailCreateFormTypeOutputReference CreateFormType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference">DatazonePolicyGrantDetailCreateFormTypeOutputReference</a>

---

##### `CreateGlossary`<sup>Required</sup> <a name="CreateGlossary" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```csharp
public DatazonePolicyGrantDetailCreateGlossaryOutputReference CreateGlossary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference">DatazonePolicyGrantDetailCreateGlossaryOutputReference</a>

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```csharp
public DatazonePolicyGrantDetailCreateProjectOutputReference CreateProject { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference">DatazonePolicyGrantDetailCreateProjectOutputReference</a>

---

##### `CreateProjectFromProjectProfile`<sup>Required</sup> <a name="CreateProjectFromProjectProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```csharp
public DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference CreateProjectFromProjectProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a>

---

##### `OverrideDomainUnitOwners`<sup>Required</sup> <a name="OverrideDomainUnitOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference OverrideDomainUnitOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a>

---

##### `OverrideProjectOwners`<sup>Required</sup> <a name="OverrideProjectOwners" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```csharp
public DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference OverrideProjectOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a>

---

##### `AddToProjectMemberPoolInput`<sup>Optional</sup> <a name="AddToProjectMemberPoolInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailAddToProjectMemberPool AddToProjectMemberPoolInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---

##### `CreateAssetTypeInput`<sup>Optional</sup> <a name="CreateAssetTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateAssetType CreateAssetTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---

##### `CreateDomainUnitInput`<sup>Optional</sup> <a name="CreateDomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateDomainUnit CreateDomainUnitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---

##### `CreateEnvironmentFromBlueprintInput`<sup>Optional</sup> <a name="CreateEnvironmentFromBlueprintInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput"></a>

```csharp
public string CreateEnvironmentFromBlueprintInput { get; }
```

- *Type:* string

---

##### `CreateEnvironmentInput`<sup>Optional</sup> <a name="CreateEnvironmentInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput"></a>

```csharp
public string CreateEnvironmentInput { get; }
```

- *Type:* string

---

##### `CreateEnvironmentProfileInput`<sup>Optional</sup> <a name="CreateEnvironmentProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateEnvironmentProfile CreateEnvironmentProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---

##### `CreateFormTypeInput`<sup>Optional</sup> <a name="CreateFormTypeInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateFormType CreateFormTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---

##### `CreateGlossaryInput`<sup>Optional</sup> <a name="CreateGlossaryInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateGlossary CreateGlossaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---

##### `CreateProjectFromProjectProfileInput`<sup>Optional</sup> <a name="CreateProjectFromProjectProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProjectFromProjectProfile CreateProjectFromProjectProfileInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---

##### `CreateProjectInput`<sup>Optional</sup> <a name="CreateProjectInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailCreateProject CreateProjectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---

##### `DelegateCreateEnvironmentProfileInput`<sup>Optional</sup> <a name="DelegateCreateEnvironmentProfileInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput"></a>

```csharp
public string DelegateCreateEnvironmentProfileInput { get; }
```

- *Type:* string

---

##### `OverrideDomainUnitOwnersInput`<sup>Optional</sup> <a name="OverrideDomainUnitOwnersInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners OverrideDomainUnitOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---

##### `OverrideProjectOwnersInput`<sup>Optional</sup> <a name="OverrideProjectOwnersInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners OverrideProjectOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```csharp
public string CreateEnvironment { get; }
```

- *Type:* string

---

##### `CreateEnvironmentFromBlueprint`<sup>Required</sup> <a name="CreateEnvironmentFromBlueprint" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```csharp
public string CreateEnvironmentFromBlueprint { get; }
```

- *Type:* string

---

##### `DelegateCreateEnvironmentProfile`<sup>Required</sup> <a name="DelegateCreateEnvironmentProfile" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```csharp
public string DelegateCreateEnvironmentProfile { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideDomainUnitOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantDetailOverrideProjectOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resetAllDomainUnitsGrantFilter">ResetAllDomainUnitsGrantFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllDomainUnitsGrantFilter` <a name="ResetAllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resetAllDomainUnitsGrantFilter"></a>

```csharp
private void ResetAllDomainUnitsGrantFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilterInput">AllDomainUnitsGrantFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter">AllDomainUnitsGrantFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllDomainUnitsGrantFilterInput`<sup>Optional</sup> <a name="AllDomainUnitsGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilterInput"></a>

```csharp
public string AllDomainUnitsGrantFilterInput { get; }
```

- *Type:* string

---

##### `AllDomainUnitsGrantFilter`<sup>Required</sup> <a name="AllDomainUnitsGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter"></a>

```csharp
public string AllDomainUnitsGrantFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---


### DatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalDomainUnitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter">PutDomainUnitGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitDesignation">ResetDomainUnitDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitGrantFilter">ResetDomainUnitGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier">ResetDomainUnitIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnitGrantFilter` <a name="PutDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter"></a>

```csharp
private void PutDomainUnitGrantFilter(DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putDomainUnitGrantFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---

##### `ResetDomainUnitDesignation` <a name="ResetDomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitDesignation"></a>

```csharp
private void ResetDomainUnitDesignation()
```

##### `ResetDomainUnitGrantFilter` <a name="ResetDomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitGrantFilter"></a>

```csharp
private void ResetDomainUnitGrantFilter()
```

##### `ResetDomainUnitIdentifier` <a name="ResetDomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier"></a>

```csharp
private void ResetDomainUnitIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter">DomainUnitGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput">DomainUnitDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilterInput">DomainUnitGrantFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput">DomainUnitIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">DomainUnitDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitGrantFilter`<sup>Required</sup> <a name="DomainUnitGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference DomainUnitGrantFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a>

---

##### `DomainUnitDesignationInput`<sup>Optional</sup> <a name="DomainUnitDesignationInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput"></a>

```csharp
public string DomainUnitDesignationInput { get; }
```

- *Type:* string

---

##### `DomainUnitGrantFilterInput`<sup>Optional</sup> <a name="DomainUnitGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter DomainUnitGrantFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---

##### `DomainUnitIdentifierInput`<sup>Optional</sup> <a name="DomainUnitIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput"></a>

```csharp
public string DomainUnitIdentifierInput { get; }
```

- *Type:* string

---

##### `DomainUnitDesignation`<sup>Required</sup> <a name="DomainUnitDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```csharp
public string DomainUnitDesignation { get; }
```

- *Type:* string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```csharp
public string DomainUnitIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---


### DatazonePolicyGrantPrincipalGroupOutputReference <a name="DatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resetGroupIdentifier"></a>

```csharp
private void ResetGroupIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput"></a>

```csharp
public string GroupIdentifierInput { get; }
```

- *Type:* string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---


### DatazonePolicyGrantPrincipalOutputReference <a name="DatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit">PutDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject">PutProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit">ResetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnit` <a name="PutDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit"></a>

```csharp
private void PutDomainUnit(DatazonePolicyGrantPrincipalDomainUnit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup"></a>

```csharp
private void PutGroup(DatazonePolicyGrantPrincipalGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---

##### `PutProject` <a name="PutProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject"></a>

```csharp
private void PutProject(DatazonePolicyGrantPrincipalProject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser"></a>

```csharp
private void PutUser(DatazonePolicyGrantPrincipalUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---

##### `ResetDomainUnit` <a name="ResetDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit"></a>

```csharp
private void ResetDomainUnit()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit">DomainUnit</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference">DatazonePolicyGrantPrincipalDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference">DatazonePolicyGrantPrincipalGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project">Project</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference">DatazonePolicyGrantPrincipalProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user">User</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference">DatazonePolicyGrantPrincipalUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput">GroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput">ProjectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput">UserInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```csharp
public DatazonePolicyGrantPrincipalDomainUnitOutputReference DomainUnit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference">DatazonePolicyGrantPrincipalDomainUnitOutputReference</a>

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```csharp
public DatazonePolicyGrantPrincipalGroupOutputReference Group { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference">DatazonePolicyGrantPrincipalGroupOutputReference</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectOutputReference Project { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference">DatazonePolicyGrantPrincipalProjectOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```csharp
public DatazonePolicyGrantPrincipalUserOutputReference User { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference">DatazonePolicyGrantPrincipalUserOutputReference</a>

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalDomainUnit DomainUnitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalGroup GroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject ProjectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser UserInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---


### DatazonePolicyGrantPrincipalProjectOutputReference <a name="DatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter">PutProjectGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectDesignation">ResetProjectDesignation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectGrantFilter">ResetProjectGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier">ResetProjectIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectGrantFilter` <a name="PutProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter"></a>

```csharp
private void PutProjectGrantFilter(DatazonePolicyGrantPrincipalProjectProjectGrantFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putProjectGrantFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---

##### `ResetProjectDesignation` <a name="ResetProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectDesignation"></a>

```csharp
private void ResetProjectDesignation()
```

##### `ResetProjectGrantFilter` <a name="ResetProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectGrantFilter"></a>

```csharp
private void ResetProjectGrantFilter()
```

##### `ResetProjectIdentifier` <a name="ResetProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier"></a>

```csharp
private void ResetProjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter">ProjectGrantFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput">ProjectDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilterInput">ProjectGrantFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">ProjectDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectGrantFilter`<sup>Required</sup> <a name="ProjectGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference ProjectGrantFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a>

---

##### `ProjectDesignationInput`<sup>Optional</sup> <a name="ProjectDesignationInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput"></a>

```csharp
public string ProjectDesignationInput { get; }
```

- *Type:* string

---

##### `ProjectGrantFilterInput`<sup>Optional</sup> <a name="ProjectGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectProjectGrantFilter ProjectGrantFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `ProjectDesignation`<sup>Required</sup> <a name="ProjectDesignation" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```csharp
public string ProjectDesignation { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProject InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---


### DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetDomainUnit">ResetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetIncludeChildDomainUnits">ResetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainUnit` <a name="ResetDomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetDomainUnit"></a>

```csharp
private void ResetDomainUnit()
```

##### `ResetIncludeChildDomainUnits` <a name="ResetIncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resetIncludeChildDomainUnits"></a>

```csharp
private void ResetIncludeChildDomainUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnitInput">DomainUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput">IncludeChildDomainUnitsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit">DomainUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits">IncludeChildDomainUnits</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitInput`<sup>Optional</sup> <a name="DomainUnitInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnitInput"></a>

```csharp
public string DomainUnitInput { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnitsInput`<sup>Optional</sup> <a name="IncludeChildDomainUnitsInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnitsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DomainUnit`<sup>Required</sup> <a name="DomainUnit" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit"></a>

```csharp
public string DomainUnit { get; }
```

- *Type:* string

---

##### `IncludeChildDomainUnits`<sup>Required</sup> <a name="IncludeChildDomainUnits" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```csharp
public bool|IResolvable IncludeChildDomainUnits { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---


### DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter">PutDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resetDomainUnitFilter">ResetDomainUnitFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainUnitFilter` <a name="PutDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter"></a>

```csharp
private void PutDomainUnitFilter(DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.putDomainUnitFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---

##### `ResetDomainUnitFilter` <a name="ResetDomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resetDomainUnitFilter"></a>

```csharp
private void ResetDomainUnitFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter">DomainUnitFilter</a></code> | <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilterInput">DomainUnitFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainUnitFilter`<sup>Required</sup> <a name="DomainUnitFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter"></a>

```csharp
public DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference DomainUnitFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a>

---

##### `DomainUnitFilterInput`<sup>Optional</sup> <a name="DomainUnitFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilterInput"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter DomainUnitFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalProjectProjectGrantFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectProjectGrantFilter">DatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---


### DatazonePolicyGrantPrincipalUserOutputReference <a name="DatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazonePolicyGrantPrincipalUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter">ResetAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier">ResetUserIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllUsersGrantFilter` <a name="ResetAllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter"></a>

```csharp
private void ResetAllUsersGrantFilter()
```

##### `ResetUserIdentifier` <a name="ResetUserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier"></a>

```csharp
private void ResetUserIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput">AllUsersGrantFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput">UserIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">AllUsersGrantFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">UserIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllUsersGrantFilterInput`<sup>Optional</sup> <a name="AllUsersGrantFilterInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput"></a>

```csharp
public string AllUsersGrantFilterInput { get; }
```

- *Type:* string

---

##### `UserIdentifierInput`<sup>Optional</sup> <a name="UserIdentifierInput" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput"></a>

```csharp
public string UserIdentifierInput { get; }
```

- *Type:* string

---

##### `AllUsersGrantFilter`<sup>Required</sup> <a name="AllUsersGrantFilter" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```csharp
public string AllUsersGrantFilter { get; }
```

- *Type:* string

---

##### `UserIdentifier`<sup>Required</sup> <a name="UserIdentifier" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```csharp
public string UserIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazonePolicyGrantPrincipalUser InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---



