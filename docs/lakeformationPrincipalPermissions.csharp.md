# `lakeformationPrincipalPermissions` Submodule <a name="`lakeformationPrincipalPermissions` Submodule" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPrincipalPermissions <a name="LakeformationPrincipalPermissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissions(Construct Scope, string Id, LakeformationPrincipalPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig">LakeformationPrincipalPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog">ResetCatalog</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal"></a>

```csharp
private void PutPrincipal(LakeformationPrincipalPermissionsPrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `PutResource` <a name="PutResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource"></a>

```csharp
private void PutResource(LakeformationPrincipalPermissionsResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationPrincipalPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationPrincipalPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationPrincipalPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LakeformationPrincipalPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakeformationPrincipalPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationPrincipalPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationPrincipalPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationPrincipalPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier">PrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput">PermissionsWithGrantOptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput">PrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput">ResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principal"></a>

```csharp
public LakeformationPrincipalPermissionsPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference">LakeformationPrincipalPermissionsPrincipalOutputReference</a>

---

##### `PrincipalIdentifier`<sup>Required</sup> <a name="PrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalIdentifier"></a>

```csharp
public string PrincipalIdentifier { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resource"></a>

```csharp
public LakeformationPrincipalPermissionsResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference">LakeformationPrincipalPermissionsResourceOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `PermissionsWithGrantOptionInput`<sup>Optional</sup> <a name="PermissionsWithGrantOptionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOptionInput"></a>

```csharp
public string[] PermissionsWithGrantOptionInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.principalInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsPrincipal PrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.resourceInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResource ResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.permissionsWithGrantOption"></a>

```csharp
public string[] PermissionsWithGrantOption { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPrincipalPermissionsConfig <a name="LakeformationPrincipalPermissionsConfig" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Permissions,
    string[] PermissionsWithGrantOption,
    LakeformationPrincipalPermissionsPrincipal Principal,
    LakeformationPrincipalPermissionsResource Resource,
    string Catalog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions">Permissions</a></code> | <code>string[]</code> | The permissions granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption">PermissionsWithGrantOption</a></code> | <code>string[]</code> | Indicates the ability to grant permissions (as a subset of permissions granted). |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | The principal to be granted a permission. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | The resource to be granted or revoked permissions. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog">Catalog</a></code> | <code>string</code> | The identifier for the GLUDC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

The permissions granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#permissions LakeformationPrincipalPermissions#permissions}

---

##### `PermissionsWithGrantOption`<sup>Required</sup> <a name="PermissionsWithGrantOption" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.permissionsWithGrantOption"></a>

```csharp
public string[] PermissionsWithGrantOption { get; set; }
```

- *Type:* string[]

Indicates the ability to grant permissions (as a subset of permissions granted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option LakeformationPrincipalPermissions#permissions_with_grant_option}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.principal"></a>

```csharp
public LakeformationPrincipalPermissionsPrincipal Principal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

The principal to be granted a permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#principal LakeformationPrincipalPermissions#principal}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.resource"></a>

```csharp
public LakeformationPrincipalPermissionsResource Resource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

The resource to be granted or revoked permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#resource LakeformationPrincipalPermissions#resource}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

The identifier for the GLUDC.

By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

### LakeformationPrincipalPermissionsPrincipal <a name="LakeformationPrincipalPermissionsPrincipal" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsPrincipal {
    string DataLakePrincipalIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | An identifier for the LFlong principal. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; set; }
```

- *Type:* string

An identifier for the LFlong principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier LakeformationPrincipalPermissions#data_lake_principal_identifier}

---

### LakeformationPrincipalPermissionsResource <a name="LakeformationPrincipalPermissionsResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResource {
    string Catalog = null,
    LakeformationPrincipalPermissionsResourceDatabase Database = null,
    LakeformationPrincipalPermissionsResourceDataCellsFilter DataCellsFilter = null,
    LakeformationPrincipalPermissionsResourceDataLocation DataLocation = null,
    LakeformationPrincipalPermissionsResourceLfTag LfTag = null,
    LakeformationPrincipalPermissionsResourceLfTagPolicy LfTagPolicy = null,
    LakeformationPrincipalPermissionsResourceTable Table = null,
    LakeformationPrincipalPermissionsResourceTableWithColumns TableWithColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog">Catalog</a></code> | <code>string</code> | The identifier for the Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | The database for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter">DataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | A data cell filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | The location of an Amazon S3 path where permissions are granted or revoked. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag">LfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | The LF-tag key and values attached to a resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | A list of LF-tag conditions that define a resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | The table for the resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | The table with columns for the resource. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

The identifier for the Data Catalog.

By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog LakeformationPrincipalPermissions#catalog}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.database"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

The database for the resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#database LakeformationPrincipalPermissions#database}

---

##### `DataCellsFilter`<sup>Optional</sup> <a name="DataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataCellsFilter"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDataCellsFilter DataCellsFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

A data cell filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#data_cells_filter LakeformationPrincipalPermissions#data_cells_filter}

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.dataLocation"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDataLocation DataLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

The location of an Amazon S3 path where permissions are granted or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#data_location LakeformationPrincipalPermissions#data_location}

---

##### `LfTag`<sup>Optional</sup> <a name="LfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTag"></a>

```csharp
public LakeformationPrincipalPermissionsResourceLfTag LfTag { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

The LF-tag key and values attached to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#lf_tag LakeformationPrincipalPermissions#lf_tag}

---

##### `LfTagPolicy`<sup>Optional</sup> <a name="LfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.lfTagPolicy"></a>

```csharp
public LakeformationPrincipalPermissionsResourceLfTagPolicy LfTagPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

A list of LF-tag conditions that define a resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#lf_tag_policy LakeformationPrincipalPermissions#lf_tag_policy}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.table"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTable Table { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

The table for the resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#table LakeformationPrincipalPermissions#table}

---

##### `TableWithColumns`<sup>Optional</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource.property.tableWithColumns"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTableWithColumns TableWithColumns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

The table with columns for the resource.

A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#table_with_columns LakeformationPrincipalPermissions#table_with_columns}

---

### LakeformationPrincipalPermissionsResourceDatabase <a name="LakeformationPrincipalPermissionsResourceDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDatabase {
    string CatalogId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name">Name</a></code> | <code>string</code> | The name of the database resource. Unique to the Data Catalog. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the database resource. Unique to the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceDataCellsFilter <a name="LakeformationPrincipalPermissionsResourceDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDataCellsFilter {
    string DatabaseName = null,
    string Name = null,
    string TableCatalogId = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName">DatabaseName</a></code> | <code>string</code> | A database in the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name">Name</a></code> | <code>string</code> | The name given by the user to the data filter cell. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | The ID of the catalog to which the table belongs. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName">TableName</a></code> | <code>string</code> | The name of the table. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

A database in the GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name given by the user to the data filter cell.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `TableCatalogId`<sup>Optional</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; set; }
```

- *Type:* string

The ID of the catalog to which the table belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#table_catalog_id LakeformationPrincipalPermissions#table_catalog_id}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#table_name LakeformationPrincipalPermissions#table_name}

---

### LakeformationPrincipalPermissionsResourceDataLocation <a name="LakeformationPrincipalPermissionsResourceDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDataLocation {
    string CatalogId = null,
    string ResourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that uniquely identifies the data location resource. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#resource_arn LakeformationPrincipalPermissions#resource_arn}

---

### LakeformationPrincipalPermissionsResourceLfTag <a name="LakeformationPrincipalPermissionsResourceLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTag {
    string CatalogId = null,
    string TagKey = null,
    string[] TagValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey">TagKey</a></code> | <code>string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues">TagValues</a></code> | <code>string[]</code> | A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the GLUDC where the location is registered with GLUDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicy <a name="LakeformationPrincipalPermissionsResourceLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagPolicy {
    string CatalogId = null,
    IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[] Expression = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the GLUDC. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression">Expression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | A list of LF-tag conditions that apply to the resource's LF-tag policy. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type for which the LF-tag policy applies. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the GLUDC.

The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.expression"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[] Expression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

A list of LF-tag conditions that apply to the resource's LF-tag policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#expression LakeformationPrincipalPermissions#expression}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type for which the LF-tag policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#resource_type LakeformationPrincipalPermissions#resource_type}

---

### LakeformationPrincipalPermissionsResourceLfTagPolicyExpression <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagPolicyExpression {
    string TagKey = null,
    string[] TagValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey">TagKey</a></code> | <code>string</code> | The key-name for the LF-tag. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues">TagValues</a></code> | <code>string[]</code> | A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair. |

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The key-name for the LF-tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#tag_key LakeformationPrincipalPermissions#tag_key}

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#tag_values LakeformationPrincipalPermissions#tag_values}

---

### LakeformationPrincipalPermissionsResourceTable <a name="LakeformationPrincipalPermissionsResourceTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTable {
    string CatalogId = null,
    string DatabaseName = null,
    string Name = null,
    string TableWildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the Data Catalog. By default, it is the account ID of the caller. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database for the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name">Name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard">TableWildcard</a></code> | <code>string</code> | A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the Data Catalog. By default, it is the account ID of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database for the table.

Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

##### `TableWildcard`<sup>Optional</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable.property.tableWildcard"></a>

```csharp
public string TableWildcard { get; set; }
```

- *Type:* string

A wildcard object representing every table under a database.  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#table_wildcard LakeformationPrincipalPermissions#table_wildcard}

---

### LakeformationPrincipalPermissionsResourceTableWithColumns <a name="LakeformationPrincipalPermissionsResourceTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTableWithColumns {
    string CatalogId = null,
    string[] ColumnNames = null,
    LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard ColumnWildcard = null,
    string DatabaseName = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId">CatalogId</a></code> | <code>string</code> | The identifier for the GLUDC where the location is registered with LFlong. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database for the table with columns resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name">Name</a></code> | <code>string</code> | The name of the table resource. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The identifier for the GLUDC where the location is registered with LFlong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#catalog_id LakeformationPrincipalPermissions#catalog_id}

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#column_names LakeformationPrincipalPermissions#column_names}

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.columnWildcard"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard ColumnWildcard { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#column_wildcard LakeformationPrincipalPermissions#column_wildcard}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database for the table with columns resource.

Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#database_name LakeformationPrincipalPermissions#database_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the table resource.

A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#name LakeformationPrincipalPermissions#name}

---

### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard {
    string[] ExcludedColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | Excludes column names. Any column with this name will be excluded. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; set; }
```

- *Type:* string[]

Excludes column names. Any column with this name will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lakeformation_principal_permissions#excluded_column_names LakeformationPrincipalPermissions#excluded_column_names}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPrincipalPermissionsPrincipalOutputReference <a name="LakeformationPrincipalPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```csharp
private void ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```csharp
public string DataLakePrincipalIdentifierInput { get; }
```

- *Type:* string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```csharp
public string DataLakePrincipalIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsPrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsPrincipal">LakeformationPrincipalPermissionsPrincipal</a>

---


### LakeformationPrincipalPermissionsResourceDatabaseOutputReference <a name="LakeformationPrincipalPermissionsResourceDatabaseOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDatabase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---


### LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference <a name="LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId">ResetTableCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTableCatalogId` <a name="ResetTableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableCatalogId"></a>

```csharp
private void ResetTableCatalogId()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId">TableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```csharp
public string TableCatalogIdInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableCatalogId"></a>

```csharp
public string TableCatalogId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDataCellsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---


### LakeformationPrincipalPermissionsResourceDataLocationOutputReference <a name="LakeformationPrincipalPermissionsResourceDataLocationOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceDataLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDataLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---


### LakeformationPrincipalPermissionsResourceLfTagOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.resetTagValues"></a>

```csharp
private void ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTag InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get"></a>

```csharp
private LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.resetTagValues"></a>

```csharp
private void ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>

---


### LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference <a name="LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression"></a>

```csharp
private void PutExpression(IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expression"></a>

```csharp
public LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList">LakeformationPrincipalPermissionsResourceLfTagPolicyExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.expressionInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicyExpression[] ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyExpression">LakeformationPrincipalPermissionsResourceLfTagPolicyExpression</a>[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---


### LakeformationPrincipalPermissionsResourceOutputReference <a name="LakeformationPrincipalPermissionsResourceOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter">PutDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation">PutDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag">PutLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy">PutLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns">PutTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter">ResetDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation">ResetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag">ResetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy">ResetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns">ResetTableWithColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(LakeformationPrincipalPermissionsResourceDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `PutDataCellsFilter` <a name="PutDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter"></a>

```csharp
private void PutDataCellsFilter(LakeformationPrincipalPermissionsResourceDataCellsFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataCellsFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `PutDataLocation` <a name="PutDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation"></a>

```csharp
private void PutDataLocation(LakeformationPrincipalPermissionsResourceDataLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `PutLfTag` <a name="PutLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag"></a>

```csharp
private void PutLfTag(LakeformationPrincipalPermissionsResourceLfTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `PutLfTagPolicy` <a name="PutLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy"></a>

```csharp
private void PutLfTagPolicy(LakeformationPrincipalPermissionsResourceLfTagPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `PutTable` <a name="PutTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable"></a>

```csharp
private void PutTable(LakeformationPrincipalPermissionsResourceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `PutTableWithColumns` <a name="PutTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns"></a>

```csharp
private void PutTableWithColumns(LakeformationPrincipalPermissionsResourceTableWithColumns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDataCellsFilter` <a name="ResetDataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataCellsFilter"></a>

```csharp
private void ResetDataCellsFilter()
```

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetDataLocation"></a>

```csharp
private void ResetDataLocation()
```

##### `ResetLfTag` <a name="ResetLfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTag"></a>

```csharp
private void ResetLfTag()
```

##### `ResetLfTagPolicy` <a name="ResetLfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetLfTagPolicy"></a>

```csharp
private void ResetLfTagPolicy()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableWithColumns` <a name="ResetTableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.resetTableWithColumns"></a>

```csharp
private void ResetTableWithColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter">DataCellsFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation">DataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag">LfTag</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy">LfTagPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput">DataCellsFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput">DataLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput">LfTagInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput">LfTagPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput">TableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput">TableWithColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.database"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabaseOutputReference">LakeformationPrincipalPermissionsResourceDatabaseOutputReference</a>

---

##### `DataCellsFilter`<sup>Required</sup> <a name="DataCellsFilter" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilter"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference DataCellsFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference">LakeformationPrincipalPermissionsResourceDataCellsFilterOutputReference</a>

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocation"></a>

```csharp
public LakeformationPrincipalPermissionsResourceDataLocationOutputReference DataLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocationOutputReference">LakeformationPrincipalPermissionsResourceDataLocationOutputReference</a>

---

##### `LfTag`<sup>Required</sup> <a name="LfTag" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTag"></a>

```csharp
public LakeformationPrincipalPermissionsResourceLfTagOutputReference LfTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagOutputReference">LakeformationPrincipalPermissionsResourceLfTagOutputReference</a>

---

##### `LfTagPolicy`<sup>Required</sup> <a name="LfTagPolicy" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicy"></a>

```csharp
public LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference LfTagPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference">LakeformationPrincipalPermissionsResourceLfTagPolicyOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.table"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference">LakeformationPrincipalPermissionsResourceTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumns"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.databaseInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDatabase DatabaseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDatabase">LakeformationPrincipalPermissionsResourceDatabase</a>

---

##### `DataCellsFilterInput`<sup>Optional</sup> <a name="DataCellsFilterInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataCellsFilterInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDataCellsFilter DataCellsFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataCellsFilter">LakeformationPrincipalPermissionsResourceDataCellsFilter</a>

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.dataLocationInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceDataLocation DataLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceDataLocation">LakeformationPrincipalPermissionsResourceDataLocation</a>

---

##### `LfTagInput`<sup>Optional</sup> <a name="LfTagInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTag LfTagInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTag">LakeformationPrincipalPermissionsResourceLfTag</a>

---

##### `LfTagPolicyInput`<sup>Optional</sup> <a name="LfTagPolicyInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.lfTagPolicyInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceLfTagPolicy LfTagPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceLfTagPolicy">LakeformationPrincipalPermissionsResourceLfTagPolicy</a>

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTable TableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---

##### `TableWithColumnsInput`<sup>Optional</sup> <a name="TableWithColumnsInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.tableWithColumnsInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTableWithColumns TableWithColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResource">LakeformationPrincipalPermissionsResource</a>

---


### LakeformationPrincipalPermissionsResourceTableOutputReference <a name="LakeformationPrincipalPermissionsResourceTableOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard">ResetTableWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTableWildcard` <a name="ResetTableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.resetTableWildcard"></a>

```csharp
private void ResetTableWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput">TableWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard">TableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TableWildcardInput`<sup>Optional</sup> <a name="TableWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcardInput"></a>

```csharp
public string TableWildcardInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableWildcard`<sup>Required</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.tableWildcard"></a>

```csharp
public string TableWildcard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTable">LakeformationPrincipalPermissionsResourceTable</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```csharp
private void ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```csharp
public string[] ExcludedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```csharp
public string[] ExcludedColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---


### LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference <a name="LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard"></a>

```csharp
private void PutColumnWildcard(LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetColumnWildcard"></a>

```csharp
private void ResetColumnWildcard()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcard"></a>

```csharp
public LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference ColumnWildcard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcardOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard ColumnWildcardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard">LakeformationPrincipalPermissionsResourceTableWithColumnsColumnWildcard</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationPrincipalPermissionsResourceTableWithColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lakeformationPrincipalPermissions.LakeformationPrincipalPermissionsResourceTableWithColumns">LakeformationPrincipalPermissionsResourceTableWithColumns</a>

---



