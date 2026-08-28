# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissions(Construct Scope, string Id, QuicksightCustomPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig">QuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```csharp
private void PutCapabilities(QuicksightCustomPermissionsCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags"></a>

```csharp
private void PutTags(IResolvable|QuicksightCustomPermissionsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightCustomPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightCustomPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightCustomPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightCustomPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">CustomPermissionsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">CustomPermissionsName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```csharp
public QuicksightCustomPermissionsCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```csharp
public QuicksightCustomPermissionsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsCapabilities CapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `CustomPermissionsNameInput`<sup>Optional</sup> <a name="CustomPermissionsNameInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```csharp
public string CustomPermissionsNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```csharp
public string CustomPermissionsName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsCapabilities {
    string AccessAppsNativeDataStore = null,
    string Action = null,
    string AddOrRunAnomalyDetectionForAnalyses = null,
    string AmazonBedrockArsAction = null,
    string AmazonBedrockFsAction = null,
    string AmazonBedrockKrsAction = null,
    string AmazonSThreeAction = null,
    string Analysis = null,
    string ApproveFlowShareRequests = null,
    string Apps = null,
    string AsanaAction = null,
    string Automate = null,
    string BambooHrAction = null,
    string BoxAgentAction = null,
    string BuildCalculatedFieldWithQ = null,
    string CanvaAgentAction = null,
    string ChatAgent = null,
    string ComprehendAction = null,
    string ComprehendMedicalAction = null,
    string ConfluenceAction = null,
    string CreateAndUpdateAmazonBedrockArsAction = null,
    string CreateAndUpdateAmazonBedrockFsAction = null,
    string CreateAndUpdateAmazonBedrockKrsAction = null,
    string CreateAndUpdateAmazonSThreeAction = null,
    string CreateAndUpdateApps = null,
    string CreateAndUpdateAsanaAction = null,
    string CreateAndUpdateBambooHrAction = null,
    string CreateAndUpdateBoxAgentAction = null,
    string CreateAndUpdateCanvaAgentAction = null,
    string CreateAndUpdateComprehendAction = null,
    string CreateAndUpdateComprehendMedicalAction = null,
    string CreateAndUpdateConfluenceAction = null,
    string CreateAndUpdateDashboardEmailReports = null,
    string CreateAndUpdateDatasets = null,
    string CreateAndUpdateDataSources = null,
    string CreateAndUpdateFactSetAction = null,
    string CreateAndUpdateGenericHttpAction = null,
    string CreateAndUpdateGithubAction = null,
    string CreateAndUpdateGoogleCalendarAction = null,
    string CreateAndUpdateHubspotAction = null,
    string CreateAndUpdateHuggingFaceAction = null,
    string CreateAndUpdateIntercomAction = null,
    string CreateAndUpdateJiraAction = null,
    string CreateAndUpdateKnowledgeBases = null,
    string CreateAndUpdateLinearAction = null,
    string CreateAndUpdateMcpAction = null,
    string CreateAndUpdateMondayAction = null,
    string CreateAndUpdateMsExchangeAction = null,
    string CreateAndUpdateMsTeamsAction = null,
    string CreateAndUpdateNewRelicAction = null,
    string CreateAndUpdateNotionAction = null,
    string CreateAndUpdateOneDriveAction = null,
    string CreateAndUpdateOpenApiAction = null,
    string CreateAndUpdatePagerDutyAction = null,
    string CreateAndUpdateSalesforceAction = null,
    string CreateAndUpdateSandPGlobalEnergyAction = null,
    string CreateAndUpdateSandPgmiAction = null,
    string CreateAndUpdateSapBillOfMaterialAction = null,
    string CreateAndUpdateSapBusinessPartnerAction = null,
    string CreateAndUpdateSapMaterialStockAction = null,
    string CreateAndUpdateSapPhysicalInventoryAction = null,
    string CreateAndUpdateSapProductMasterDataAction = null,
    string CreateAndUpdateServiceNowAction = null,
    string CreateAndUpdateSharePointAction = null,
    string CreateAndUpdateSlackAction = null,
    string CreateAndUpdateSmartsheetAction = null,
    string CreateAndUpdateTextractAction = null,
    string CreateAndUpdateThemes = null,
    string CreateAndUpdateThresholdAlerts = null,
    string CreateAndUpdateZendeskAction = null,
    string CreateChatAgents = null,
    string CreateDashboardExecutiveSummaryWithQ = null,
    string CreateSharedFolders = null,
    string CreateSpaces = null,
    string CreateSpiceDataset = null,
    string Dashboard = null,
    string EditVisualWithQ = null,
    string ExportToCsv = null,
    string ExportToCsvInScheduledReports = null,
    string ExportToExcel = null,
    string ExportToExcelInScheduledReports = null,
    string ExportToPdf = null,
    string ExportToPdfInScheduledReports = null,
    string Extension = null,
    string FactSetAction = null,
    string Flow = null,
    string GenericHttpAction = null,
    string GithubAction = null,
    string GoogleCalendarAction = null,
    string HubspotAction = null,
    string HuggingFaceAction = null,
    string IncludeContentInScheduledReportsEmail = null,
    string IntercomAction = null,
    string InvokeAppsAiInference = null,
    string JiraAction = null,
    string KnowledgeBase = null,
    string LinearAction = null,
    string ManageSharedFolders = null,
    string McpAction = null,
    string MondayAction = null,
    string MsExchangeAction = null,
    string MsTeamsAction = null,
    string NewRelicAction = null,
    string NotionAction = null,
    string OneDriveAction = null,
    string OpenApiAction = null,
    string PagerDutyAction = null,
    string PerformFlowUiTask = null,
    string PrintReports = null,
    string PublishWithoutApproval = null,
    string RenameSharedFolders = null,
    string Research = null,
    string SalesforceAction = null,
    string SandPGlobalEnergyAction = null,
    string SandPgmiAction = null,
    string SapBillOfMaterialAction = null,
    string SapBusinessPartnerAction = null,
    string SapMaterialStockAction = null,
    string SapPhysicalInventoryAction = null,
    string SapProductMasterDataAction = null,
    string ServiceNowAction = null,
    string ShareAmazonBedrockArsAction = null,
    string ShareAmazonBedrockFsAction = null,
    string ShareAmazonBedrockKrsAction = null,
    string ShareAmazonSThreeAction = null,
    string ShareAnalyses = null,
    string ShareApps = null,
    string ShareAsanaAction = null,
    string ShareBambooHrAction = null,
    string ShareBoxAgentAction = null,
    string ShareCanvaAgentAction = null,
    string ShareChatAgents = null,
    string ShareComprehendAction = null,
    string ShareComprehendMedicalAction = null,
    string ShareConfluenceAction = null,
    string ShareDashboards = null,
    string ShareDatasets = null,
    string ShareDataSources = null,
    string ShareFactSetAction = null,
    string ShareGenericHttpAction = null,
    string ShareGithubAction = null,
    string ShareGoogleCalendarAction = null,
    string ShareHubspotAction = null,
    string ShareHuggingFaceAction = null,
    string ShareIntercomAction = null,
    string ShareJiraAction = null,
    string ShareKnowledgeBases = null,
    string ShareLinearAction = null,
    string ShareMcpAction = null,
    string ShareMondayAction = null,
    string ShareMsExchangeAction = null,
    string ShareMsTeamsAction = null,
    string ShareNewRelicAction = null,
    string ShareNotionAction = null,
    string ShareOneDriveAction = null,
    string ShareOpenApiAction = null,
    string SharePagerDutyAction = null,
    string SharePointAction = null,
    string ShareSalesforceAction = null,
    string ShareSandPGlobalEnergyAction = null,
    string ShareSandPgmiAction = null,
    string ShareSapBillOfMaterialAction = null,
    string ShareSapBusinessPartnerAction = null,
    string ShareSapMaterialStockAction = null,
    string ShareSapPhysicalInventoryAction = null,
    string ShareSapProductMasterDataAction = null,
    string ShareServiceNowAction = null,
    string ShareSharePointAction = null,
    string ShareSlackAction = null,
    string ShareSmartsheetAction = null,
    string ShareSpaces = null,
    string ShareTextractAction = null,
    string ShareZendeskAction = null,
    string SlackAction = null,
    string SmartsheetAction = null,
    string Space = null,
    string SubscribeDashboardEmailReports = null,
    string TextractAction = null,
    string Topic = null,
    string UseAgentWebSearch = null,
    string UseAmazonBedrockArsAction = null,
    string UseAmazonBedrockFsAction = null,
    string UseAmazonBedrockKrsAction = null,
    string UseAmazonSThreeAction = null,
    string UseAsanaAction = null,
    string UseBambooHrAction = null,
    string UseBedrockModels = null,
    string UseBoxAgentAction = null,
    string UseCanvaAgentAction = null,
    string UseComprehendAction = null,
    string UseComprehendMedicalAction = null,
    string UseConfluenceAction = null,
    string UseFactSetAction = null,
    string UseGenericHttpAction = null,
    string UseGithubAction = null,
    string UseGoogleCalendarAction = null,
    string UseHubspotAction = null,
    string UseHuggingFaceAction = null,
    string UseIntercomAction = null,
    string UseJiraAction = null,
    string UseLinearAction = null,
    string UseMcpAction = null,
    string UseMondayAction = null,
    string UseMsExchangeAction = null,
    string UseMsTeamsAction = null,
    string UseNewRelicAction = null,
    string UseNotionAction = null,
    string UseOneDriveAction = null,
    string UseOpenApiAction = null,
    string UsePagerDutyAction = null,
    string UseSalesforceAction = null,
    string UseSandPGlobalEnergyAction = null,
    string UseSandPgmiAction = null,
    string UseSapBillOfMaterialAction = null,
    string UseSapBusinessPartnerAction = null,
    string UseSapMaterialStockAction = null,
    string UseSapPhysicalInventoryAction = null,
    string UseSapProductMasterDataAction = null,
    string UseServiceNowAction = null,
    string UseSharePointAction = null,
    string UseSlackAction = null,
    string UseSmartsheetAction = null,
    string UseTextractAction = null,
    string UseZendeskAction = null,
    string ViewAccountSpiceCapacity = null,
    string ZendeskAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis">Analysis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps">Apps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction">AsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate">Automate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction">BambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction">BoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent">ChatAgent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction">ComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction">ConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents">CreateChatAgents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">CreateSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces">CreateSpaces</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard">Dashboard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">ExportToCsv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">ExportToExcel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">ExportToPdf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension">Extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction">FactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow">Flow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction">GenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction">GithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction">HubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction">IntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction">JiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase">KnowledgeBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction">LinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction">McpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction">MondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction">MsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction">MsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction">NewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction">NotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction">OneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction">OpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction">PagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">PrintReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research">Research</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction">SalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction">SandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction">ServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">ShareAnalyses</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps">ShareApps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents">ShareChatAgents</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">ShareDashboards</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">ShareDatasets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">ShareDataSources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction">ShareGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction">ShareJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction">ShareLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction">ShareMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction">ShareMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction">ShareNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction">SharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction">ShareSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces">ShareSpaces</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction">ShareTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction">SlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction">SmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space">Space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction">TextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction">UseAsanaAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels">UseBedrockModels</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction">UseComprehendAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction">UseFactSetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction">UseGithubAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction">UseHubspotAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction">UseIntercomAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction">UseJiraAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction">UseLinearAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction">UseMcpAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction">UseMondayAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction">UseNotionAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction">UseSharePointAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction">UseSlackAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction">UseTextractAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction">UseZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction">ZendeskAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}. |

---

##### `AccessAppsNativeDataStore`<sup>Optional</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore"></a>

```csharp
public string AccessAppsNativeDataStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Optional</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```csharp
public string AddOrRunAnomalyDetectionForAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `AmazonBedrockArsAction`<sup>Optional</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction"></a>

```csharp
public string AmazonBedrockArsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

##### `AmazonBedrockFsAction`<sup>Optional</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction"></a>

```csharp
public string AmazonBedrockFsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

##### `AmazonBedrockKrsAction`<sup>Optional</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction"></a>

```csharp
public string AmazonBedrockKrsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

##### `AmazonSThreeAction`<sup>Optional</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction"></a>

```csharp
public string AmazonSThreeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis"></a>

```csharp
public string Analysis { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

##### `ApproveFlowShareRequests`<sup>Optional</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests"></a>

```csharp
public string ApproveFlowShareRequests { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps"></a>

```csharp
public string Apps { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

##### `AsanaAction`<sup>Optional</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction"></a>

```csharp
public string AsanaAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

##### `Automate`<sup>Optional</sup> <a name="Automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate"></a>

```csharp
public string Automate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

##### `BambooHrAction`<sup>Optional</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction"></a>

```csharp
public string BambooHrAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

##### `BoxAgentAction`<sup>Optional</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction"></a>

```csharp
public string BoxAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

##### `BuildCalculatedFieldWithQ`<sup>Optional</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ"></a>

```csharp
public string BuildCalculatedFieldWithQ { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

##### `CanvaAgentAction`<sup>Optional</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction"></a>

```csharp
public string CanvaAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

##### `ChatAgent`<sup>Optional</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent"></a>

```csharp
public string ChatAgent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

##### `ComprehendAction`<sup>Optional</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction"></a>

```csharp
public string ComprehendAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

##### `ComprehendMedicalAction`<sup>Optional</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction"></a>

```csharp
public string ComprehendMedicalAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

##### `ConfluenceAction`<sup>Optional</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction"></a>

```csharp
public string ConfluenceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockArsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockFsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockKrsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Optional</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction"></a>

```csharp
public string CreateAndUpdateAmazonSThreeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

##### `CreateAndUpdateApps`<sup>Optional</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps"></a>

```csharp
public string CreateAndUpdateApps { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

##### `CreateAndUpdateAsanaAction`<sup>Optional</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction"></a>

```csharp
public string CreateAndUpdateAsanaAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

##### `CreateAndUpdateBambooHrAction`<sup>Optional</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction"></a>

```csharp
public string CreateAndUpdateBambooHrAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

##### `CreateAndUpdateBoxAgentAction`<sup>Optional</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction"></a>

```csharp
public string CreateAndUpdateBoxAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Optional</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction"></a>

```csharp
public string CreateAndUpdateCanvaAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

##### `CreateAndUpdateComprehendAction`<sup>Optional</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction"></a>

```csharp
public string CreateAndUpdateComprehendAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Optional</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction"></a>

```csharp
public string CreateAndUpdateComprehendMedicalAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

##### `CreateAndUpdateConfluenceAction`<sup>Optional</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction"></a>

```csharp
public string CreateAndUpdateConfluenceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Optional</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```csharp
public string CreateAndUpdateDashboardEmailReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `CreateAndUpdateDatasets`<sup>Optional</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```csharp
public string CreateAndUpdateDatasets { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `CreateAndUpdateDataSources`<sup>Optional</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```csharp
public string CreateAndUpdateDataSources { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `CreateAndUpdateFactSetAction`<sup>Optional</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction"></a>

```csharp
public string CreateAndUpdateFactSetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

##### `CreateAndUpdateGenericHttpAction`<sup>Optional</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction"></a>

```csharp
public string CreateAndUpdateGenericHttpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

##### `CreateAndUpdateGithubAction`<sup>Optional</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction"></a>

```csharp
public string CreateAndUpdateGithubAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Optional</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction"></a>

```csharp
public string CreateAndUpdateGoogleCalendarAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

##### `CreateAndUpdateHubspotAction`<sup>Optional</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction"></a>

```csharp
public string CreateAndUpdateHubspotAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Optional</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction"></a>

```csharp
public string CreateAndUpdateHuggingFaceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

##### `CreateAndUpdateIntercomAction`<sup>Optional</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction"></a>

```csharp
public string CreateAndUpdateIntercomAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

##### `CreateAndUpdateJiraAction`<sup>Optional</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction"></a>

```csharp
public string CreateAndUpdateJiraAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

##### `CreateAndUpdateKnowledgeBases`<sup>Optional</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases"></a>

```csharp
public string CreateAndUpdateKnowledgeBases { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

##### `CreateAndUpdateLinearAction`<sup>Optional</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction"></a>

```csharp
public string CreateAndUpdateLinearAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

##### `CreateAndUpdateMcpAction`<sup>Optional</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction"></a>

```csharp
public string CreateAndUpdateMcpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

##### `CreateAndUpdateMondayAction`<sup>Optional</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction"></a>

```csharp
public string CreateAndUpdateMondayAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

##### `CreateAndUpdateMsExchangeAction`<sup>Optional</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction"></a>

```csharp
public string CreateAndUpdateMsExchangeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

##### `CreateAndUpdateMsTeamsAction`<sup>Optional</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction"></a>

```csharp
public string CreateAndUpdateMsTeamsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

##### `CreateAndUpdateNewRelicAction`<sup>Optional</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction"></a>

```csharp
public string CreateAndUpdateNewRelicAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

##### `CreateAndUpdateNotionAction`<sup>Optional</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction"></a>

```csharp
public string CreateAndUpdateNotionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

##### `CreateAndUpdateOneDriveAction`<sup>Optional</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction"></a>

```csharp
public string CreateAndUpdateOneDriveAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

##### `CreateAndUpdateOpenApiAction`<sup>Optional</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction"></a>

```csharp
public string CreateAndUpdateOpenApiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

##### `CreateAndUpdatePagerDutyAction`<sup>Optional</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction"></a>

```csharp
public string CreateAndUpdatePagerDutyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

##### `CreateAndUpdateSalesforceAction`<sup>Optional</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction"></a>

```csharp
public string CreateAndUpdateSalesforceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Optional</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction"></a>

```csharp
public string CreateAndUpdateSandPGlobalEnergyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

##### `CreateAndUpdateSandPgmiAction`<sup>Optional</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction"></a>

```csharp
public string CreateAndUpdateSandPgmiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Optional</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction"></a>

```csharp
public string CreateAndUpdateSapBillOfMaterialAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Optional</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction"></a>

```csharp
public string CreateAndUpdateSapBusinessPartnerAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Optional</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction"></a>

```csharp
public string CreateAndUpdateSapMaterialStockAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Optional</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction"></a>

```csharp
public string CreateAndUpdateSapPhysicalInventoryAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Optional</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction"></a>

```csharp
public string CreateAndUpdateSapProductMasterDataAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

##### `CreateAndUpdateServiceNowAction`<sup>Optional</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction"></a>

```csharp
public string CreateAndUpdateServiceNowAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

##### `CreateAndUpdateSharePointAction`<sup>Optional</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction"></a>

```csharp
public string CreateAndUpdateSharePointAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

##### `CreateAndUpdateSlackAction`<sup>Optional</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction"></a>

```csharp
public string CreateAndUpdateSlackAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

##### `CreateAndUpdateSmartsheetAction`<sup>Optional</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction"></a>

```csharp
public string CreateAndUpdateSmartsheetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

##### `CreateAndUpdateTextractAction`<sup>Optional</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction"></a>

```csharp
public string CreateAndUpdateTextractAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

##### `CreateAndUpdateThemes`<sup>Optional</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```csharp
public string CreateAndUpdateThemes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `CreateAndUpdateThresholdAlerts`<sup>Optional</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```csharp
public string CreateAndUpdateThresholdAlerts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `CreateAndUpdateZendeskAction`<sup>Optional</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction"></a>

```csharp
public string CreateAndUpdateZendeskAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

##### `CreateChatAgents`<sup>Optional</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents"></a>

```csharp
public string CreateChatAgents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Optional</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ"></a>

```csharp
public string CreateDashboardExecutiveSummaryWithQ { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

##### `CreateSharedFolders`<sup>Optional</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```csharp
public string CreateSharedFolders { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `CreateSpaces`<sup>Optional</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces"></a>

```csharp
public string CreateSpaces { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

##### `CreateSpiceDataset`<sup>Optional</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```csharp
public string CreateSpiceDataset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `Dashboard`<sup>Optional</sup> <a name="Dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard"></a>

```csharp
public string Dashboard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

##### `EditVisualWithQ`<sup>Optional</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ"></a>

```csharp
public string EditVisualWithQ { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

##### `ExportToCsv`<sup>Optional</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```csharp
public string ExportToCsv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `ExportToCsvInScheduledReports`<sup>Optional</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```csharp
public string ExportToCsvInScheduledReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `ExportToExcel`<sup>Optional</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```csharp
public string ExportToExcel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `ExportToExcelInScheduledReports`<sup>Optional</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```csharp
public string ExportToExcelInScheduledReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `ExportToPdf`<sup>Optional</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```csharp
public string ExportToPdf { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `ExportToPdfInScheduledReports`<sup>Optional</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```csharp
public string ExportToPdfInScheduledReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension"></a>

```csharp
public string Extension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

##### `FactSetAction`<sup>Optional</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction"></a>

```csharp
public string FactSetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

##### `Flow`<sup>Optional</sup> <a name="Flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow"></a>

```csharp
public string Flow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

##### `GenericHttpAction`<sup>Optional</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction"></a>

```csharp
public string GenericHttpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

##### `GithubAction`<sup>Optional</sup> <a name="GithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction"></a>

```csharp
public string GithubAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

##### `GoogleCalendarAction`<sup>Optional</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction"></a>

```csharp
public string GoogleCalendarAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

##### `HubspotAction`<sup>Optional</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction"></a>

```csharp
public string HubspotAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

##### `HuggingFaceAction`<sup>Optional</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction"></a>

```csharp
public string HuggingFaceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

##### `IncludeContentInScheduledReportsEmail`<sup>Optional</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```csharp
public string IncludeContentInScheduledReportsEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `IntercomAction`<sup>Optional</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction"></a>

```csharp
public string IntercomAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

##### `InvokeAppsAiInference`<sup>Optional</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference"></a>

```csharp
public string InvokeAppsAiInference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

##### `JiraAction`<sup>Optional</sup> <a name="JiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction"></a>

```csharp
public string JiraAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

##### `KnowledgeBase`<sup>Optional</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase"></a>

```csharp
public string KnowledgeBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

##### `LinearAction`<sup>Optional</sup> <a name="LinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction"></a>

```csharp
public string LinearAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

##### `ManageSharedFolders`<sup>Optional</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders"></a>

```csharp
public string ManageSharedFolders { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

##### `McpAction`<sup>Optional</sup> <a name="McpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction"></a>

```csharp
public string McpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

##### `MondayAction`<sup>Optional</sup> <a name="MondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction"></a>

```csharp
public string MondayAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

##### `MsExchangeAction`<sup>Optional</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction"></a>

```csharp
public string MsExchangeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

##### `MsTeamsAction`<sup>Optional</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction"></a>

```csharp
public string MsTeamsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

##### `NewRelicAction`<sup>Optional</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction"></a>

```csharp
public string NewRelicAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

##### `NotionAction`<sup>Optional</sup> <a name="NotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction"></a>

```csharp
public string NotionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

##### `OneDriveAction`<sup>Optional</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction"></a>

```csharp
public string OneDriveAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

##### `OpenApiAction`<sup>Optional</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction"></a>

```csharp
public string OpenApiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

##### `PagerDutyAction`<sup>Optional</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction"></a>

```csharp
public string PagerDutyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

##### `PerformFlowUiTask`<sup>Optional</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask"></a>

```csharp
public string PerformFlowUiTask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

##### `PrintReports`<sup>Optional</sup> <a name="PrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```csharp
public string PrintReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `PublishWithoutApproval`<sup>Optional</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval"></a>

```csharp
public string PublishWithoutApproval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

##### `RenameSharedFolders`<sup>Optional</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```csharp
public string RenameSharedFolders { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `Research`<sup>Optional</sup> <a name="Research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research"></a>

```csharp
public string Research { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

##### `SalesforceAction`<sup>Optional</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction"></a>

```csharp
public string SalesforceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

##### `SandPGlobalEnergyAction`<sup>Optional</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction"></a>

```csharp
public string SandPGlobalEnergyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

##### `SandPgmiAction`<sup>Optional</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction"></a>

```csharp
public string SandPgmiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

##### `SapBillOfMaterialAction`<sup>Optional</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction"></a>

```csharp
public string SapBillOfMaterialAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

##### `SapBusinessPartnerAction`<sup>Optional</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction"></a>

```csharp
public string SapBusinessPartnerAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

##### `SapMaterialStockAction`<sup>Optional</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction"></a>

```csharp
public string SapMaterialStockAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

##### `SapPhysicalInventoryAction`<sup>Optional</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction"></a>

```csharp
public string SapPhysicalInventoryAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

##### `SapProductMasterDataAction`<sup>Optional</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction"></a>

```csharp
public string SapProductMasterDataAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

##### `ServiceNowAction`<sup>Optional</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction"></a>

```csharp
public string ServiceNowAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

##### `ShareAmazonBedrockArsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction"></a>

```csharp
public string ShareAmazonBedrockArsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

##### `ShareAmazonBedrockFsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction"></a>

```csharp
public string ShareAmazonBedrockFsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

##### `ShareAmazonBedrockKrsAction`<sup>Optional</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction"></a>

```csharp
public string ShareAmazonBedrockKrsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

##### `ShareAmazonSThreeAction`<sup>Optional</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction"></a>

```csharp
public string ShareAmazonSThreeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

##### `ShareAnalyses`<sup>Optional</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```csharp
public string ShareAnalyses { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `ShareApps`<sup>Optional</sup> <a name="ShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps"></a>

```csharp
public string ShareApps { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

##### `ShareAsanaAction`<sup>Optional</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction"></a>

```csharp
public string ShareAsanaAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

##### `ShareBambooHrAction`<sup>Optional</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction"></a>

```csharp
public string ShareBambooHrAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

##### `ShareBoxAgentAction`<sup>Optional</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction"></a>

```csharp
public string ShareBoxAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

##### `ShareCanvaAgentAction`<sup>Optional</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction"></a>

```csharp
public string ShareCanvaAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

##### `ShareChatAgents`<sup>Optional</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents"></a>

```csharp
public string ShareChatAgents { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

##### `ShareComprehendAction`<sup>Optional</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction"></a>

```csharp
public string ShareComprehendAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

##### `ShareComprehendMedicalAction`<sup>Optional</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction"></a>

```csharp
public string ShareComprehendMedicalAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

##### `ShareConfluenceAction`<sup>Optional</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction"></a>

```csharp
public string ShareConfluenceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

##### `ShareDashboards`<sup>Optional</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```csharp
public string ShareDashboards { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `ShareDatasets`<sup>Optional</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```csharp
public string ShareDatasets { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `ShareDataSources`<sup>Optional</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```csharp
public string ShareDataSources { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `ShareFactSetAction`<sup>Optional</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction"></a>

```csharp
public string ShareFactSetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

##### `ShareGenericHttpAction`<sup>Optional</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction"></a>

```csharp
public string ShareGenericHttpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

##### `ShareGithubAction`<sup>Optional</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction"></a>

```csharp
public string ShareGithubAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

##### `ShareGoogleCalendarAction`<sup>Optional</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction"></a>

```csharp
public string ShareGoogleCalendarAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

##### `ShareHubspotAction`<sup>Optional</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction"></a>

```csharp
public string ShareHubspotAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

##### `ShareHuggingFaceAction`<sup>Optional</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction"></a>

```csharp
public string ShareHuggingFaceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

##### `ShareIntercomAction`<sup>Optional</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction"></a>

```csharp
public string ShareIntercomAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

##### `ShareJiraAction`<sup>Optional</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction"></a>

```csharp
public string ShareJiraAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

##### `ShareKnowledgeBases`<sup>Optional</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases"></a>

```csharp
public string ShareKnowledgeBases { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

##### `ShareLinearAction`<sup>Optional</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction"></a>

```csharp
public string ShareLinearAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

##### `ShareMcpAction`<sup>Optional</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction"></a>

```csharp
public string ShareMcpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

##### `ShareMondayAction`<sup>Optional</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction"></a>

```csharp
public string ShareMondayAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

##### `ShareMsExchangeAction`<sup>Optional</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction"></a>

```csharp
public string ShareMsExchangeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

##### `ShareMsTeamsAction`<sup>Optional</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction"></a>

```csharp
public string ShareMsTeamsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

##### `ShareNewRelicAction`<sup>Optional</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction"></a>

```csharp
public string ShareNewRelicAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

##### `ShareNotionAction`<sup>Optional</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction"></a>

```csharp
public string ShareNotionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

##### `ShareOneDriveAction`<sup>Optional</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction"></a>

```csharp
public string ShareOneDriveAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

##### `ShareOpenApiAction`<sup>Optional</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction"></a>

```csharp
public string ShareOpenApiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

##### `SharePagerDutyAction`<sup>Optional</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction"></a>

```csharp
public string SharePagerDutyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

##### `SharePointAction`<sup>Optional</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction"></a>

```csharp
public string SharePointAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

##### `ShareSalesforceAction`<sup>Optional</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction"></a>

```csharp
public string ShareSalesforceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

##### `ShareSandPGlobalEnergyAction`<sup>Optional</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction"></a>

```csharp
public string ShareSandPGlobalEnergyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

##### `ShareSandPgmiAction`<sup>Optional</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction"></a>

```csharp
public string ShareSandPgmiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

##### `ShareSapBillOfMaterialAction`<sup>Optional</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction"></a>

```csharp
public string ShareSapBillOfMaterialAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

##### `ShareSapBusinessPartnerAction`<sup>Optional</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction"></a>

```csharp
public string ShareSapBusinessPartnerAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

##### `ShareSapMaterialStockAction`<sup>Optional</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction"></a>

```csharp
public string ShareSapMaterialStockAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

##### `ShareSapPhysicalInventoryAction`<sup>Optional</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction"></a>

```csharp
public string ShareSapPhysicalInventoryAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

##### `ShareSapProductMasterDataAction`<sup>Optional</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction"></a>

```csharp
public string ShareSapProductMasterDataAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

##### `ShareServiceNowAction`<sup>Optional</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction"></a>

```csharp
public string ShareServiceNowAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

##### `ShareSharePointAction`<sup>Optional</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction"></a>

```csharp
public string ShareSharePointAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

##### `ShareSlackAction`<sup>Optional</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction"></a>

```csharp
public string ShareSlackAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

##### `ShareSmartsheetAction`<sup>Optional</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction"></a>

```csharp
public string ShareSmartsheetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

##### `ShareSpaces`<sup>Optional</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces"></a>

```csharp
public string ShareSpaces { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

##### `ShareTextractAction`<sup>Optional</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction"></a>

```csharp
public string ShareTextractAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

##### `ShareZendeskAction`<sup>Optional</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction"></a>

```csharp
public string ShareZendeskAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

##### `SlackAction`<sup>Optional</sup> <a name="SlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction"></a>

```csharp
public string SlackAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

##### `SmartsheetAction`<sup>Optional</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction"></a>

```csharp
public string SmartsheetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

##### `Space`<sup>Optional</sup> <a name="Space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

##### `SubscribeDashboardEmailReports`<sup>Optional</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```csharp
public string SubscribeDashboardEmailReports { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `TextractAction`<sup>Optional</sup> <a name="TextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction"></a>

```csharp
public string TextractAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

##### `UseAgentWebSearch`<sup>Optional</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch"></a>

```csharp
public string UseAgentWebSearch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

##### `UseAmazonBedrockArsAction`<sup>Optional</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction"></a>

```csharp
public string UseAmazonBedrockArsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

##### `UseAmazonBedrockFsAction`<sup>Optional</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction"></a>

```csharp
public string UseAmazonBedrockFsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

##### `UseAmazonBedrockKrsAction`<sup>Optional</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction"></a>

```csharp
public string UseAmazonBedrockKrsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

##### `UseAmazonSThreeAction`<sup>Optional</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction"></a>

```csharp
public string UseAmazonSThreeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

##### `UseAsanaAction`<sup>Optional</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction"></a>

```csharp
public string UseAsanaAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

##### `UseBambooHrAction`<sup>Optional</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction"></a>

```csharp
public string UseBambooHrAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

##### `UseBedrockModels`<sup>Optional</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels"></a>

```csharp
public string UseBedrockModels { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

##### `UseBoxAgentAction`<sup>Optional</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction"></a>

```csharp
public string UseBoxAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

##### `UseCanvaAgentAction`<sup>Optional</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction"></a>

```csharp
public string UseCanvaAgentAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

##### `UseComprehendAction`<sup>Optional</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction"></a>

```csharp
public string UseComprehendAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

##### `UseComprehendMedicalAction`<sup>Optional</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction"></a>

```csharp
public string UseComprehendMedicalAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

##### `UseConfluenceAction`<sup>Optional</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction"></a>

```csharp
public string UseConfluenceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

##### `UseFactSetAction`<sup>Optional</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction"></a>

```csharp
public string UseFactSetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

##### `UseGenericHttpAction`<sup>Optional</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction"></a>

```csharp
public string UseGenericHttpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

##### `UseGithubAction`<sup>Optional</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction"></a>

```csharp
public string UseGithubAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

##### `UseGoogleCalendarAction`<sup>Optional</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction"></a>

```csharp
public string UseGoogleCalendarAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

##### `UseHubspotAction`<sup>Optional</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction"></a>

```csharp
public string UseHubspotAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

##### `UseHuggingFaceAction`<sup>Optional</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction"></a>

```csharp
public string UseHuggingFaceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

##### `UseIntercomAction`<sup>Optional</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction"></a>

```csharp
public string UseIntercomAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

##### `UseJiraAction`<sup>Optional</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction"></a>

```csharp
public string UseJiraAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

##### `UseLinearAction`<sup>Optional</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction"></a>

```csharp
public string UseLinearAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

##### `UseMcpAction`<sup>Optional</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction"></a>

```csharp
public string UseMcpAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

##### `UseMondayAction`<sup>Optional</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction"></a>

```csharp
public string UseMondayAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

##### `UseMsExchangeAction`<sup>Optional</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction"></a>

```csharp
public string UseMsExchangeAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

##### `UseMsTeamsAction`<sup>Optional</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction"></a>

```csharp
public string UseMsTeamsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

##### `UseNewRelicAction`<sup>Optional</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction"></a>

```csharp
public string UseNewRelicAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

##### `UseNotionAction`<sup>Optional</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction"></a>

```csharp
public string UseNotionAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

##### `UseOneDriveAction`<sup>Optional</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction"></a>

```csharp
public string UseOneDriveAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

##### `UseOpenApiAction`<sup>Optional</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction"></a>

```csharp
public string UseOpenApiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

##### `UsePagerDutyAction`<sup>Optional</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction"></a>

```csharp
public string UsePagerDutyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

##### `UseSalesforceAction`<sup>Optional</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction"></a>

```csharp
public string UseSalesforceAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

##### `UseSandPGlobalEnergyAction`<sup>Optional</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction"></a>

```csharp
public string UseSandPGlobalEnergyAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

##### `UseSandPgmiAction`<sup>Optional</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction"></a>

```csharp
public string UseSandPgmiAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

##### `UseSapBillOfMaterialAction`<sup>Optional</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction"></a>

```csharp
public string UseSapBillOfMaterialAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

##### `UseSapBusinessPartnerAction`<sup>Optional</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction"></a>

```csharp
public string UseSapBusinessPartnerAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

##### `UseSapMaterialStockAction`<sup>Optional</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction"></a>

```csharp
public string UseSapMaterialStockAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

##### `UseSapPhysicalInventoryAction`<sup>Optional</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction"></a>

```csharp
public string UseSapPhysicalInventoryAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

##### `UseSapProductMasterDataAction`<sup>Optional</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction"></a>

```csharp
public string UseSapProductMasterDataAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

##### `UseServiceNowAction`<sup>Optional</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction"></a>

```csharp
public string UseServiceNowAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

##### `UseSharePointAction`<sup>Optional</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction"></a>

```csharp
public string UseSharePointAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

##### `UseSlackAction`<sup>Optional</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction"></a>

```csharp
public string UseSlackAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

##### `UseSmartsheetAction`<sup>Optional</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction"></a>

```csharp
public string UseSmartsheetAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

##### `UseTextractAction`<sup>Optional</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction"></a>

```csharp
public string UseTextractAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

##### `UseZendeskAction`<sup>Optional</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction"></a>

```csharp
public string UseZendeskAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

##### `ViewAccountSpiceCapacity`<sup>Optional</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```csharp
public string ViewAccountSpiceCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

##### `ZendeskAction`<sup>Optional</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction"></a>

```csharp
public string ZendeskAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId,
    string CustomPermissionsName,
    QuicksightCustomPermissionsCapabilities Capabilities = null,
    IResolvable|QuicksightCustomPermissionsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">CustomPermissionsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```csharp
public string CustomPermissionsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```csharp
public QuicksightCustomPermissionsCapabilities Capabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

### QuicksightCustomPermissionsTags <a name="QuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key">Key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value">Value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#key QuicksightCustomPermissions#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_custom_permissions#value QuicksightCustomPermissions#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore">ResetAccessAppsNativeDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">ResetAddOrRunAnomalyDetectionForAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction">ResetAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction">ResetAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction">ResetAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction">ResetAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests">ResetApproveFlowShareRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction">ResetAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate">ResetAutomate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction">ResetBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction">ResetBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ">ResetBuildCalculatedFieldWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction">ResetCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent">ResetChatAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction">ResetComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction">ResetComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction">ResetConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction">ResetCreateAndUpdateAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction">ResetCreateAndUpdateAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction">ResetCreateAndUpdateAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction">ResetCreateAndUpdateAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps">ResetCreateAndUpdateApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction">ResetCreateAndUpdateAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction">ResetCreateAndUpdateBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction">ResetCreateAndUpdateBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction">ResetCreateAndUpdateCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction">ResetCreateAndUpdateComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction">ResetCreateAndUpdateComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction">ResetCreateAndUpdateConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">ResetCreateAndUpdateDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">ResetCreateAndUpdateDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">ResetCreateAndUpdateDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction">ResetCreateAndUpdateFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction">ResetCreateAndUpdateGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction">ResetCreateAndUpdateGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction">ResetCreateAndUpdateGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction">ResetCreateAndUpdateHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction">ResetCreateAndUpdateHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction">ResetCreateAndUpdateIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction">ResetCreateAndUpdateJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases">ResetCreateAndUpdateKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction">ResetCreateAndUpdateLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction">ResetCreateAndUpdateMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction">ResetCreateAndUpdateMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction">ResetCreateAndUpdateMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction">ResetCreateAndUpdateMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction">ResetCreateAndUpdateNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction">ResetCreateAndUpdateNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction">ResetCreateAndUpdateOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction">ResetCreateAndUpdateOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction">ResetCreateAndUpdatePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction">ResetCreateAndUpdateSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction">ResetCreateAndUpdateSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction">ResetCreateAndUpdateSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction">ResetCreateAndUpdateSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction">ResetCreateAndUpdateSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction">ResetCreateAndUpdateSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction">ResetCreateAndUpdateSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction">ResetCreateAndUpdateSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction">ResetCreateAndUpdateServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction">ResetCreateAndUpdateSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction">ResetCreateAndUpdateSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction">ResetCreateAndUpdateSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction">ResetCreateAndUpdateTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">ResetCreateAndUpdateThemes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">ResetCreateAndUpdateThresholdAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction">ResetCreateAndUpdateZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents">ResetCreateChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ">ResetCreateDashboardExecutiveSummaryWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">ResetCreateSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces">ResetCreateSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">ResetCreateSpiceDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard">ResetDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ">ResetEditVisualWithQ</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">ResetExportToCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">ResetExportToCsvInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">ResetExportToExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">ResetExportToExcelInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">ResetExportToPdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">ResetExportToPdfInScheduledReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction">ResetFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow">ResetFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction">ResetGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction">ResetGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction">ResetGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction">ResetHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction">ResetHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">ResetIncludeContentInScheduledReportsEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction">ResetIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference">ResetInvokeAppsAiInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction">ResetJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase">ResetKnowledgeBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction">ResetLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders">ResetManageSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction">ResetMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction">ResetMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction">ResetMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction">ResetMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction">ResetNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction">ResetNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction">ResetOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction">ResetOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction">ResetPagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask">ResetPerformFlowUiTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">ResetPrintReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval">ResetPublishWithoutApproval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">ResetRenameSharedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch">ResetResearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction">ResetSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction">ResetSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction">ResetSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction">ResetSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction">ResetSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction">ResetSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction">ResetSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction">ResetSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction">ResetServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction">ResetShareAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction">ResetShareAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction">ResetShareAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction">ResetShareAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">ResetShareAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps">ResetShareApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction">ResetShareAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction">ResetShareBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction">ResetShareBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction">ResetShareCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents">ResetShareChatAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction">ResetShareComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction">ResetShareComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction">ResetShareConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">ResetShareDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">ResetShareDatasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">ResetShareDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction">ResetShareFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction">ResetShareGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction">ResetShareGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction">ResetShareGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction">ResetShareHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction">ResetShareHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction">ResetShareIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction">ResetShareJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases">ResetShareKnowledgeBases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction">ResetShareLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction">ResetShareMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction">ResetShareMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction">ResetShareMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction">ResetShareMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction">ResetShareNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction">ResetShareNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction">ResetShareOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction">ResetShareOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction">ResetSharePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction">ResetSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction">ResetShareSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction">ResetShareSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction">ResetShareSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction">ResetShareSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction">ResetShareSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction">ResetShareSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction">ResetShareSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction">ResetShareSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction">ResetShareServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction">ResetShareSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction">ResetShareSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction">ResetShareSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces">ResetShareSpaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction">ResetShareTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction">ResetShareZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction">ResetSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction">ResetSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace">ResetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">ResetSubscribeDashboardEmailReports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction">ResetTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch">ResetUseAgentWebSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction">ResetUseAmazonBedrockArsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction">ResetUseAmazonBedrockFsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction">ResetUseAmazonBedrockKrsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction">ResetUseAmazonSThreeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction">ResetUseAsanaAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction">ResetUseBambooHrAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels">ResetUseBedrockModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction">ResetUseBoxAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction">ResetUseCanvaAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction">ResetUseComprehendAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction">ResetUseComprehendMedicalAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction">ResetUseConfluenceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction">ResetUseFactSetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction">ResetUseGenericHttpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction">ResetUseGithubAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction">ResetUseGoogleCalendarAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction">ResetUseHubspotAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction">ResetUseHuggingFaceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction">ResetUseIntercomAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction">ResetUseJiraAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction">ResetUseLinearAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction">ResetUseMcpAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction">ResetUseMondayAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction">ResetUseMsExchangeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction">ResetUseMsTeamsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction">ResetUseNewRelicAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction">ResetUseNotionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction">ResetUseOneDriveAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction">ResetUseOpenApiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction">ResetUsePagerDutyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction">ResetUseSalesforceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction">ResetUseSandPGlobalEnergyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction">ResetUseSandPgmiAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction">ResetUseSapBillOfMaterialAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction">ResetUseSapBusinessPartnerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction">ResetUseSapMaterialStockAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction">ResetUseSapPhysicalInventoryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction">ResetUseSapProductMasterDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction">ResetUseServiceNowAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction">ResetUseSharePointAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction">ResetUseSlackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction">ResetUseSmartsheetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction">ResetUseTextractAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction">ResetUseZendeskAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">ResetViewAccountSpiceCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction">ResetZendeskAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessAppsNativeDataStore` <a name="ResetAccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore"></a>

```csharp
private void ResetAccessAppsNativeDataStore()
```

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetAddOrRunAnomalyDetectionForAnalyses` <a name="ResetAddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```csharp
private void ResetAddOrRunAnomalyDetectionForAnalyses()
```

##### `ResetAmazonBedrockArsAction` <a name="ResetAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction"></a>

```csharp
private void ResetAmazonBedrockArsAction()
```

##### `ResetAmazonBedrockFsAction` <a name="ResetAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction"></a>

```csharp
private void ResetAmazonBedrockFsAction()
```

##### `ResetAmazonBedrockKrsAction` <a name="ResetAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction"></a>

```csharp
private void ResetAmazonBedrockKrsAction()
```

##### `ResetAmazonSThreeAction` <a name="ResetAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction"></a>

```csharp
private void ResetAmazonSThreeAction()
```

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis"></a>

```csharp
private void ResetAnalysis()
```

##### `ResetApproveFlowShareRequests` <a name="ResetApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests"></a>

```csharp
private void ResetApproveFlowShareRequests()
```

##### `ResetApps` <a name="ResetApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps"></a>

```csharp
private void ResetApps()
```

##### `ResetAsanaAction` <a name="ResetAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction"></a>

```csharp
private void ResetAsanaAction()
```

##### `ResetAutomate` <a name="ResetAutomate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate"></a>

```csharp
private void ResetAutomate()
```

##### `ResetBambooHrAction` <a name="ResetBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction"></a>

```csharp
private void ResetBambooHrAction()
```

##### `ResetBoxAgentAction` <a name="ResetBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction"></a>

```csharp
private void ResetBoxAgentAction()
```

##### `ResetBuildCalculatedFieldWithQ` <a name="ResetBuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ"></a>

```csharp
private void ResetBuildCalculatedFieldWithQ()
```

##### `ResetCanvaAgentAction` <a name="ResetCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction"></a>

```csharp
private void ResetCanvaAgentAction()
```

##### `ResetChatAgent` <a name="ResetChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent"></a>

```csharp
private void ResetChatAgent()
```

##### `ResetComprehendAction` <a name="ResetComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction"></a>

```csharp
private void ResetComprehendAction()
```

##### `ResetComprehendMedicalAction` <a name="ResetComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction"></a>

```csharp
private void ResetComprehendMedicalAction()
```

##### `ResetConfluenceAction` <a name="ResetConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction"></a>

```csharp
private void ResetConfluenceAction()
```

##### `ResetCreateAndUpdateAmazonBedrockArsAction` <a name="ResetCreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction"></a>

```csharp
private void ResetCreateAndUpdateAmazonBedrockArsAction()
```

##### `ResetCreateAndUpdateAmazonBedrockFsAction` <a name="ResetCreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction"></a>

```csharp
private void ResetCreateAndUpdateAmazonBedrockFsAction()
```

##### `ResetCreateAndUpdateAmazonBedrockKrsAction` <a name="ResetCreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction"></a>

```csharp
private void ResetCreateAndUpdateAmazonBedrockKrsAction()
```

##### `ResetCreateAndUpdateAmazonSThreeAction` <a name="ResetCreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction"></a>

```csharp
private void ResetCreateAndUpdateAmazonSThreeAction()
```

##### `ResetCreateAndUpdateApps` <a name="ResetCreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps"></a>

```csharp
private void ResetCreateAndUpdateApps()
```

##### `ResetCreateAndUpdateAsanaAction` <a name="ResetCreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction"></a>

```csharp
private void ResetCreateAndUpdateAsanaAction()
```

##### `ResetCreateAndUpdateBambooHrAction` <a name="ResetCreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction"></a>

```csharp
private void ResetCreateAndUpdateBambooHrAction()
```

##### `ResetCreateAndUpdateBoxAgentAction` <a name="ResetCreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction"></a>

```csharp
private void ResetCreateAndUpdateBoxAgentAction()
```

##### `ResetCreateAndUpdateCanvaAgentAction` <a name="ResetCreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction"></a>

```csharp
private void ResetCreateAndUpdateCanvaAgentAction()
```

##### `ResetCreateAndUpdateComprehendAction` <a name="ResetCreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction"></a>

```csharp
private void ResetCreateAndUpdateComprehendAction()
```

##### `ResetCreateAndUpdateComprehendMedicalAction` <a name="ResetCreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction"></a>

```csharp
private void ResetCreateAndUpdateComprehendMedicalAction()
```

##### `ResetCreateAndUpdateConfluenceAction` <a name="ResetCreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction"></a>

```csharp
private void ResetCreateAndUpdateConfluenceAction()
```

##### `ResetCreateAndUpdateDashboardEmailReports` <a name="ResetCreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```csharp
private void ResetCreateAndUpdateDashboardEmailReports()
```

##### `ResetCreateAndUpdateDatasets` <a name="ResetCreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```csharp
private void ResetCreateAndUpdateDatasets()
```

##### `ResetCreateAndUpdateDataSources` <a name="ResetCreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```csharp
private void ResetCreateAndUpdateDataSources()
```

##### `ResetCreateAndUpdateFactSetAction` <a name="ResetCreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction"></a>

```csharp
private void ResetCreateAndUpdateFactSetAction()
```

##### `ResetCreateAndUpdateGenericHttpAction` <a name="ResetCreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction"></a>

```csharp
private void ResetCreateAndUpdateGenericHttpAction()
```

##### `ResetCreateAndUpdateGithubAction` <a name="ResetCreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction"></a>

```csharp
private void ResetCreateAndUpdateGithubAction()
```

##### `ResetCreateAndUpdateGoogleCalendarAction` <a name="ResetCreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction"></a>

```csharp
private void ResetCreateAndUpdateGoogleCalendarAction()
```

##### `ResetCreateAndUpdateHubspotAction` <a name="ResetCreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction"></a>

```csharp
private void ResetCreateAndUpdateHubspotAction()
```

##### `ResetCreateAndUpdateHuggingFaceAction` <a name="ResetCreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction"></a>

```csharp
private void ResetCreateAndUpdateHuggingFaceAction()
```

##### `ResetCreateAndUpdateIntercomAction` <a name="ResetCreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction"></a>

```csharp
private void ResetCreateAndUpdateIntercomAction()
```

##### `ResetCreateAndUpdateJiraAction` <a name="ResetCreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction"></a>

```csharp
private void ResetCreateAndUpdateJiraAction()
```

##### `ResetCreateAndUpdateKnowledgeBases` <a name="ResetCreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases"></a>

```csharp
private void ResetCreateAndUpdateKnowledgeBases()
```

##### `ResetCreateAndUpdateLinearAction` <a name="ResetCreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction"></a>

```csharp
private void ResetCreateAndUpdateLinearAction()
```

##### `ResetCreateAndUpdateMcpAction` <a name="ResetCreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction"></a>

```csharp
private void ResetCreateAndUpdateMcpAction()
```

##### `ResetCreateAndUpdateMondayAction` <a name="ResetCreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction"></a>

```csharp
private void ResetCreateAndUpdateMondayAction()
```

##### `ResetCreateAndUpdateMsExchangeAction` <a name="ResetCreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction"></a>

```csharp
private void ResetCreateAndUpdateMsExchangeAction()
```

##### `ResetCreateAndUpdateMsTeamsAction` <a name="ResetCreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction"></a>

```csharp
private void ResetCreateAndUpdateMsTeamsAction()
```

##### `ResetCreateAndUpdateNewRelicAction` <a name="ResetCreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction"></a>

```csharp
private void ResetCreateAndUpdateNewRelicAction()
```

##### `ResetCreateAndUpdateNotionAction` <a name="ResetCreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction"></a>

```csharp
private void ResetCreateAndUpdateNotionAction()
```

##### `ResetCreateAndUpdateOneDriveAction` <a name="ResetCreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction"></a>

```csharp
private void ResetCreateAndUpdateOneDriveAction()
```

##### `ResetCreateAndUpdateOpenApiAction` <a name="ResetCreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction"></a>

```csharp
private void ResetCreateAndUpdateOpenApiAction()
```

##### `ResetCreateAndUpdatePagerDutyAction` <a name="ResetCreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction"></a>

```csharp
private void ResetCreateAndUpdatePagerDutyAction()
```

##### `ResetCreateAndUpdateSalesforceAction` <a name="ResetCreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction"></a>

```csharp
private void ResetCreateAndUpdateSalesforceAction()
```

##### `ResetCreateAndUpdateSandPGlobalEnergyAction` <a name="ResetCreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction"></a>

```csharp
private void ResetCreateAndUpdateSandPGlobalEnergyAction()
```

##### `ResetCreateAndUpdateSandPgmiAction` <a name="ResetCreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction"></a>

```csharp
private void ResetCreateAndUpdateSandPgmiAction()
```

##### `ResetCreateAndUpdateSapBillOfMaterialAction` <a name="ResetCreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction"></a>

```csharp
private void ResetCreateAndUpdateSapBillOfMaterialAction()
```

##### `ResetCreateAndUpdateSapBusinessPartnerAction` <a name="ResetCreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction"></a>

```csharp
private void ResetCreateAndUpdateSapBusinessPartnerAction()
```

##### `ResetCreateAndUpdateSapMaterialStockAction` <a name="ResetCreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction"></a>

```csharp
private void ResetCreateAndUpdateSapMaterialStockAction()
```

##### `ResetCreateAndUpdateSapPhysicalInventoryAction` <a name="ResetCreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction"></a>

```csharp
private void ResetCreateAndUpdateSapPhysicalInventoryAction()
```

##### `ResetCreateAndUpdateSapProductMasterDataAction` <a name="ResetCreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction"></a>

```csharp
private void ResetCreateAndUpdateSapProductMasterDataAction()
```

##### `ResetCreateAndUpdateServiceNowAction` <a name="ResetCreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction"></a>

```csharp
private void ResetCreateAndUpdateServiceNowAction()
```

##### `ResetCreateAndUpdateSharePointAction` <a name="ResetCreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction"></a>

```csharp
private void ResetCreateAndUpdateSharePointAction()
```

##### `ResetCreateAndUpdateSlackAction` <a name="ResetCreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction"></a>

```csharp
private void ResetCreateAndUpdateSlackAction()
```

##### `ResetCreateAndUpdateSmartsheetAction` <a name="ResetCreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction"></a>

```csharp
private void ResetCreateAndUpdateSmartsheetAction()
```

##### `ResetCreateAndUpdateTextractAction` <a name="ResetCreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction"></a>

```csharp
private void ResetCreateAndUpdateTextractAction()
```

##### `ResetCreateAndUpdateThemes` <a name="ResetCreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```csharp
private void ResetCreateAndUpdateThemes()
```

##### `ResetCreateAndUpdateThresholdAlerts` <a name="ResetCreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```csharp
private void ResetCreateAndUpdateThresholdAlerts()
```

##### `ResetCreateAndUpdateZendeskAction` <a name="ResetCreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction"></a>

```csharp
private void ResetCreateAndUpdateZendeskAction()
```

##### `ResetCreateChatAgents` <a name="ResetCreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents"></a>

```csharp
private void ResetCreateChatAgents()
```

##### `ResetCreateDashboardExecutiveSummaryWithQ` <a name="ResetCreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ"></a>

```csharp
private void ResetCreateDashboardExecutiveSummaryWithQ()
```

##### `ResetCreateSharedFolders` <a name="ResetCreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```csharp
private void ResetCreateSharedFolders()
```

##### `ResetCreateSpaces` <a name="ResetCreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces"></a>

```csharp
private void ResetCreateSpaces()
```

##### `ResetCreateSpiceDataset` <a name="ResetCreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```csharp
private void ResetCreateSpiceDataset()
```

##### `ResetDashboard` <a name="ResetDashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard"></a>

```csharp
private void ResetDashboard()
```

##### `ResetEditVisualWithQ` <a name="ResetEditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ"></a>

```csharp
private void ResetEditVisualWithQ()
```

##### `ResetExportToCsv` <a name="ResetExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```csharp
private void ResetExportToCsv()
```

##### `ResetExportToCsvInScheduledReports` <a name="ResetExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```csharp
private void ResetExportToCsvInScheduledReports()
```

##### `ResetExportToExcel` <a name="ResetExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```csharp
private void ResetExportToExcel()
```

##### `ResetExportToExcelInScheduledReports` <a name="ResetExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```csharp
private void ResetExportToExcelInScheduledReports()
```

##### `ResetExportToPdf` <a name="ResetExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```csharp
private void ResetExportToPdf()
```

##### `ResetExportToPdfInScheduledReports` <a name="ResetExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```csharp
private void ResetExportToPdfInScheduledReports()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension"></a>

```csharp
private void ResetExtension()
```

##### `ResetFactSetAction` <a name="ResetFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction"></a>

```csharp
private void ResetFactSetAction()
```

##### `ResetFlow` <a name="ResetFlow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow"></a>

```csharp
private void ResetFlow()
```

##### `ResetGenericHttpAction` <a name="ResetGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction"></a>

```csharp
private void ResetGenericHttpAction()
```

##### `ResetGithubAction` <a name="ResetGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction"></a>

```csharp
private void ResetGithubAction()
```

##### `ResetGoogleCalendarAction` <a name="ResetGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction"></a>

```csharp
private void ResetGoogleCalendarAction()
```

##### `ResetHubspotAction` <a name="ResetHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction"></a>

```csharp
private void ResetHubspotAction()
```

##### `ResetHuggingFaceAction` <a name="ResetHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction"></a>

```csharp
private void ResetHuggingFaceAction()
```

##### `ResetIncludeContentInScheduledReportsEmail` <a name="ResetIncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```csharp
private void ResetIncludeContentInScheduledReportsEmail()
```

##### `ResetIntercomAction` <a name="ResetIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction"></a>

```csharp
private void ResetIntercomAction()
```

##### `ResetInvokeAppsAiInference` <a name="ResetInvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference"></a>

```csharp
private void ResetInvokeAppsAiInference()
```

##### `ResetJiraAction` <a name="ResetJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction"></a>

```csharp
private void ResetJiraAction()
```

##### `ResetKnowledgeBase` <a name="ResetKnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase"></a>

```csharp
private void ResetKnowledgeBase()
```

##### `ResetLinearAction` <a name="ResetLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction"></a>

```csharp
private void ResetLinearAction()
```

##### `ResetManageSharedFolders` <a name="ResetManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders"></a>

```csharp
private void ResetManageSharedFolders()
```

##### `ResetMcpAction` <a name="ResetMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction"></a>

```csharp
private void ResetMcpAction()
```

##### `ResetMondayAction` <a name="ResetMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction"></a>

```csharp
private void ResetMondayAction()
```

##### `ResetMsExchangeAction` <a name="ResetMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction"></a>

```csharp
private void ResetMsExchangeAction()
```

##### `ResetMsTeamsAction` <a name="ResetMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction"></a>

```csharp
private void ResetMsTeamsAction()
```

##### `ResetNewRelicAction` <a name="ResetNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction"></a>

```csharp
private void ResetNewRelicAction()
```

##### `ResetNotionAction` <a name="ResetNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction"></a>

```csharp
private void ResetNotionAction()
```

##### `ResetOneDriveAction` <a name="ResetOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction"></a>

```csharp
private void ResetOneDriveAction()
```

##### `ResetOpenApiAction` <a name="ResetOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction"></a>

```csharp
private void ResetOpenApiAction()
```

##### `ResetPagerDutyAction` <a name="ResetPagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction"></a>

```csharp
private void ResetPagerDutyAction()
```

##### `ResetPerformFlowUiTask` <a name="ResetPerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask"></a>

```csharp
private void ResetPerformFlowUiTask()
```

##### `ResetPrintReports` <a name="ResetPrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```csharp
private void ResetPrintReports()
```

##### `ResetPublishWithoutApproval` <a name="ResetPublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval"></a>

```csharp
private void ResetPublishWithoutApproval()
```

##### `ResetRenameSharedFolders` <a name="ResetRenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```csharp
private void ResetRenameSharedFolders()
```

##### `ResetResearch` <a name="ResetResearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch"></a>

```csharp
private void ResetResearch()
```

##### `ResetSalesforceAction` <a name="ResetSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction"></a>

```csharp
private void ResetSalesforceAction()
```

##### `ResetSandPGlobalEnergyAction` <a name="ResetSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction"></a>

```csharp
private void ResetSandPGlobalEnergyAction()
```

##### `ResetSandPgmiAction` <a name="ResetSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction"></a>

```csharp
private void ResetSandPgmiAction()
```

##### `ResetSapBillOfMaterialAction` <a name="ResetSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction"></a>

```csharp
private void ResetSapBillOfMaterialAction()
```

##### `ResetSapBusinessPartnerAction` <a name="ResetSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction"></a>

```csharp
private void ResetSapBusinessPartnerAction()
```

##### `ResetSapMaterialStockAction` <a name="ResetSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction"></a>

```csharp
private void ResetSapMaterialStockAction()
```

##### `ResetSapPhysicalInventoryAction` <a name="ResetSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction"></a>

```csharp
private void ResetSapPhysicalInventoryAction()
```

##### `ResetSapProductMasterDataAction` <a name="ResetSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction"></a>

```csharp
private void ResetSapProductMasterDataAction()
```

##### `ResetServiceNowAction` <a name="ResetServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction"></a>

```csharp
private void ResetServiceNowAction()
```

##### `ResetShareAmazonBedrockArsAction` <a name="ResetShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction"></a>

```csharp
private void ResetShareAmazonBedrockArsAction()
```

##### `ResetShareAmazonBedrockFsAction` <a name="ResetShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction"></a>

```csharp
private void ResetShareAmazonBedrockFsAction()
```

##### `ResetShareAmazonBedrockKrsAction` <a name="ResetShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction"></a>

```csharp
private void ResetShareAmazonBedrockKrsAction()
```

##### `ResetShareAmazonSThreeAction` <a name="ResetShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction"></a>

```csharp
private void ResetShareAmazonSThreeAction()
```

##### `ResetShareAnalyses` <a name="ResetShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```csharp
private void ResetShareAnalyses()
```

##### `ResetShareApps` <a name="ResetShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps"></a>

```csharp
private void ResetShareApps()
```

##### `ResetShareAsanaAction` <a name="ResetShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction"></a>

```csharp
private void ResetShareAsanaAction()
```

##### `ResetShareBambooHrAction` <a name="ResetShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction"></a>

```csharp
private void ResetShareBambooHrAction()
```

##### `ResetShareBoxAgentAction` <a name="ResetShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction"></a>

```csharp
private void ResetShareBoxAgentAction()
```

##### `ResetShareCanvaAgentAction` <a name="ResetShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction"></a>

```csharp
private void ResetShareCanvaAgentAction()
```

##### `ResetShareChatAgents` <a name="ResetShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents"></a>

```csharp
private void ResetShareChatAgents()
```

##### `ResetShareComprehendAction` <a name="ResetShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction"></a>

```csharp
private void ResetShareComprehendAction()
```

##### `ResetShareComprehendMedicalAction` <a name="ResetShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction"></a>

```csharp
private void ResetShareComprehendMedicalAction()
```

##### `ResetShareConfluenceAction` <a name="ResetShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction"></a>

```csharp
private void ResetShareConfluenceAction()
```

##### `ResetShareDashboards` <a name="ResetShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```csharp
private void ResetShareDashboards()
```

##### `ResetShareDatasets` <a name="ResetShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```csharp
private void ResetShareDatasets()
```

##### `ResetShareDataSources` <a name="ResetShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```csharp
private void ResetShareDataSources()
```

##### `ResetShareFactSetAction` <a name="ResetShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction"></a>

```csharp
private void ResetShareFactSetAction()
```

##### `ResetShareGenericHttpAction` <a name="ResetShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction"></a>

```csharp
private void ResetShareGenericHttpAction()
```

##### `ResetShareGithubAction` <a name="ResetShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction"></a>

```csharp
private void ResetShareGithubAction()
```

##### `ResetShareGoogleCalendarAction` <a name="ResetShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction"></a>

```csharp
private void ResetShareGoogleCalendarAction()
```

##### `ResetShareHubspotAction` <a name="ResetShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction"></a>

```csharp
private void ResetShareHubspotAction()
```

##### `ResetShareHuggingFaceAction` <a name="ResetShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction"></a>

```csharp
private void ResetShareHuggingFaceAction()
```

##### `ResetShareIntercomAction` <a name="ResetShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction"></a>

```csharp
private void ResetShareIntercomAction()
```

##### `ResetShareJiraAction` <a name="ResetShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction"></a>

```csharp
private void ResetShareJiraAction()
```

##### `ResetShareKnowledgeBases` <a name="ResetShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases"></a>

```csharp
private void ResetShareKnowledgeBases()
```

##### `ResetShareLinearAction` <a name="ResetShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction"></a>

```csharp
private void ResetShareLinearAction()
```

##### `ResetShareMcpAction` <a name="ResetShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction"></a>

```csharp
private void ResetShareMcpAction()
```

##### `ResetShareMondayAction` <a name="ResetShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction"></a>

```csharp
private void ResetShareMondayAction()
```

##### `ResetShareMsExchangeAction` <a name="ResetShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction"></a>

```csharp
private void ResetShareMsExchangeAction()
```

##### `ResetShareMsTeamsAction` <a name="ResetShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction"></a>

```csharp
private void ResetShareMsTeamsAction()
```

##### `ResetShareNewRelicAction` <a name="ResetShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction"></a>

```csharp
private void ResetShareNewRelicAction()
```

##### `ResetShareNotionAction` <a name="ResetShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction"></a>

```csharp
private void ResetShareNotionAction()
```

##### `ResetShareOneDriveAction` <a name="ResetShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction"></a>

```csharp
private void ResetShareOneDriveAction()
```

##### `ResetShareOpenApiAction` <a name="ResetShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction"></a>

```csharp
private void ResetShareOpenApiAction()
```

##### `ResetSharePagerDutyAction` <a name="ResetSharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction"></a>

```csharp
private void ResetSharePagerDutyAction()
```

##### `ResetSharePointAction` <a name="ResetSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction"></a>

```csharp
private void ResetSharePointAction()
```

##### `ResetShareSalesforceAction` <a name="ResetShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction"></a>

```csharp
private void ResetShareSalesforceAction()
```

##### `ResetShareSandPGlobalEnergyAction` <a name="ResetShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction"></a>

```csharp
private void ResetShareSandPGlobalEnergyAction()
```

##### `ResetShareSandPgmiAction` <a name="ResetShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction"></a>

```csharp
private void ResetShareSandPgmiAction()
```

##### `ResetShareSapBillOfMaterialAction` <a name="ResetShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction"></a>

```csharp
private void ResetShareSapBillOfMaterialAction()
```

##### `ResetShareSapBusinessPartnerAction` <a name="ResetShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction"></a>

```csharp
private void ResetShareSapBusinessPartnerAction()
```

##### `ResetShareSapMaterialStockAction` <a name="ResetShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction"></a>

```csharp
private void ResetShareSapMaterialStockAction()
```

##### `ResetShareSapPhysicalInventoryAction` <a name="ResetShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction"></a>

```csharp
private void ResetShareSapPhysicalInventoryAction()
```

##### `ResetShareSapProductMasterDataAction` <a name="ResetShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction"></a>

```csharp
private void ResetShareSapProductMasterDataAction()
```

##### `ResetShareServiceNowAction` <a name="ResetShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction"></a>

```csharp
private void ResetShareServiceNowAction()
```

##### `ResetShareSharePointAction` <a name="ResetShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction"></a>

```csharp
private void ResetShareSharePointAction()
```

##### `ResetShareSlackAction` <a name="ResetShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction"></a>

```csharp
private void ResetShareSlackAction()
```

##### `ResetShareSmartsheetAction` <a name="ResetShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction"></a>

```csharp
private void ResetShareSmartsheetAction()
```

##### `ResetShareSpaces` <a name="ResetShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces"></a>

```csharp
private void ResetShareSpaces()
```

##### `ResetShareTextractAction` <a name="ResetShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction"></a>

```csharp
private void ResetShareTextractAction()
```

##### `ResetShareZendeskAction` <a name="ResetShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction"></a>

```csharp
private void ResetShareZendeskAction()
```

##### `ResetSlackAction` <a name="ResetSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction"></a>

```csharp
private void ResetSlackAction()
```

##### `ResetSmartsheetAction` <a name="ResetSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction"></a>

```csharp
private void ResetSmartsheetAction()
```

##### `ResetSpace` <a name="ResetSpace" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace"></a>

```csharp
private void ResetSpace()
```

##### `ResetSubscribeDashboardEmailReports` <a name="ResetSubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```csharp
private void ResetSubscribeDashboardEmailReports()
```

##### `ResetTextractAction` <a name="ResetTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction"></a>

```csharp
private void ResetTextractAction()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```

##### `ResetUseAgentWebSearch` <a name="ResetUseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch"></a>

```csharp
private void ResetUseAgentWebSearch()
```

##### `ResetUseAmazonBedrockArsAction` <a name="ResetUseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction"></a>

```csharp
private void ResetUseAmazonBedrockArsAction()
```

##### `ResetUseAmazonBedrockFsAction` <a name="ResetUseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction"></a>

```csharp
private void ResetUseAmazonBedrockFsAction()
```

##### `ResetUseAmazonBedrockKrsAction` <a name="ResetUseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction"></a>

```csharp
private void ResetUseAmazonBedrockKrsAction()
```

##### `ResetUseAmazonSThreeAction` <a name="ResetUseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction"></a>

```csharp
private void ResetUseAmazonSThreeAction()
```

##### `ResetUseAsanaAction` <a name="ResetUseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction"></a>

```csharp
private void ResetUseAsanaAction()
```

##### `ResetUseBambooHrAction` <a name="ResetUseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction"></a>

```csharp
private void ResetUseBambooHrAction()
```

##### `ResetUseBedrockModels` <a name="ResetUseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels"></a>

```csharp
private void ResetUseBedrockModels()
```

##### `ResetUseBoxAgentAction` <a name="ResetUseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction"></a>

```csharp
private void ResetUseBoxAgentAction()
```

##### `ResetUseCanvaAgentAction` <a name="ResetUseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction"></a>

```csharp
private void ResetUseCanvaAgentAction()
```

##### `ResetUseComprehendAction` <a name="ResetUseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction"></a>

```csharp
private void ResetUseComprehendAction()
```

##### `ResetUseComprehendMedicalAction` <a name="ResetUseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction"></a>

```csharp
private void ResetUseComprehendMedicalAction()
```

##### `ResetUseConfluenceAction` <a name="ResetUseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction"></a>

```csharp
private void ResetUseConfluenceAction()
```

##### `ResetUseFactSetAction` <a name="ResetUseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction"></a>

```csharp
private void ResetUseFactSetAction()
```

##### `ResetUseGenericHttpAction` <a name="ResetUseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction"></a>

```csharp
private void ResetUseGenericHttpAction()
```

##### `ResetUseGithubAction` <a name="ResetUseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction"></a>

```csharp
private void ResetUseGithubAction()
```

##### `ResetUseGoogleCalendarAction` <a name="ResetUseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction"></a>

```csharp
private void ResetUseGoogleCalendarAction()
```

##### `ResetUseHubspotAction` <a name="ResetUseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction"></a>

```csharp
private void ResetUseHubspotAction()
```

##### `ResetUseHuggingFaceAction` <a name="ResetUseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction"></a>

```csharp
private void ResetUseHuggingFaceAction()
```

##### `ResetUseIntercomAction` <a name="ResetUseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction"></a>

```csharp
private void ResetUseIntercomAction()
```

##### `ResetUseJiraAction` <a name="ResetUseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction"></a>

```csharp
private void ResetUseJiraAction()
```

##### `ResetUseLinearAction` <a name="ResetUseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction"></a>

```csharp
private void ResetUseLinearAction()
```

##### `ResetUseMcpAction` <a name="ResetUseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction"></a>

```csharp
private void ResetUseMcpAction()
```

##### `ResetUseMondayAction` <a name="ResetUseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction"></a>

```csharp
private void ResetUseMondayAction()
```

##### `ResetUseMsExchangeAction` <a name="ResetUseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction"></a>

```csharp
private void ResetUseMsExchangeAction()
```

##### `ResetUseMsTeamsAction` <a name="ResetUseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction"></a>

```csharp
private void ResetUseMsTeamsAction()
```

##### `ResetUseNewRelicAction` <a name="ResetUseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction"></a>

```csharp
private void ResetUseNewRelicAction()
```

##### `ResetUseNotionAction` <a name="ResetUseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction"></a>

```csharp
private void ResetUseNotionAction()
```

##### `ResetUseOneDriveAction` <a name="ResetUseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction"></a>

```csharp
private void ResetUseOneDriveAction()
```

##### `ResetUseOpenApiAction` <a name="ResetUseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction"></a>

```csharp
private void ResetUseOpenApiAction()
```

##### `ResetUsePagerDutyAction` <a name="ResetUsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction"></a>

```csharp
private void ResetUsePagerDutyAction()
```

##### `ResetUseSalesforceAction` <a name="ResetUseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction"></a>

```csharp
private void ResetUseSalesforceAction()
```

##### `ResetUseSandPGlobalEnergyAction` <a name="ResetUseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction"></a>

```csharp
private void ResetUseSandPGlobalEnergyAction()
```

##### `ResetUseSandPgmiAction` <a name="ResetUseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction"></a>

```csharp
private void ResetUseSandPgmiAction()
```

##### `ResetUseSapBillOfMaterialAction` <a name="ResetUseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction"></a>

```csharp
private void ResetUseSapBillOfMaterialAction()
```

##### `ResetUseSapBusinessPartnerAction` <a name="ResetUseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction"></a>

```csharp
private void ResetUseSapBusinessPartnerAction()
```

##### `ResetUseSapMaterialStockAction` <a name="ResetUseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction"></a>

```csharp
private void ResetUseSapMaterialStockAction()
```

##### `ResetUseSapPhysicalInventoryAction` <a name="ResetUseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction"></a>

```csharp
private void ResetUseSapPhysicalInventoryAction()
```

##### `ResetUseSapProductMasterDataAction` <a name="ResetUseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction"></a>

```csharp
private void ResetUseSapProductMasterDataAction()
```

##### `ResetUseServiceNowAction` <a name="ResetUseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction"></a>

```csharp
private void ResetUseServiceNowAction()
```

##### `ResetUseSharePointAction` <a name="ResetUseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction"></a>

```csharp
private void ResetUseSharePointAction()
```

##### `ResetUseSlackAction` <a name="ResetUseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction"></a>

```csharp
private void ResetUseSlackAction()
```

##### `ResetUseSmartsheetAction` <a name="ResetUseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction"></a>

```csharp
private void ResetUseSmartsheetAction()
```

##### `ResetUseTextractAction` <a name="ResetUseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction"></a>

```csharp
private void ResetUseTextractAction()
```

##### `ResetUseZendeskAction` <a name="ResetUseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction"></a>

```csharp
private void ResetUseZendeskAction()
```

##### `ResetViewAccountSpiceCapacity` <a name="ResetViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```csharp
private void ResetViewAccountSpiceCapacity()
```

##### `ResetZendeskAction` <a name="ResetZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction"></a>

```csharp
private void ResetZendeskAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput">AccessAppsNativeDataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">AddOrRunAnomalyDetectionForAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput">AmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput">AmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput">AmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput">AmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput">AnalysisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput">ApproveFlowShareRequestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput">AppsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput">AsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput">AutomateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput">BambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput">BoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput">BuildCalculatedFieldWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput">CanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput">ChatAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput">ComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput">ComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput">ConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput">CreateAndUpdateAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput">CreateAndUpdateAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput">CreateAndUpdateAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput">CreateAndUpdateAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput">CreateAndUpdateAppsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput">CreateAndUpdateAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput">CreateAndUpdateBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput">CreateAndUpdateBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput">CreateAndUpdateCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput">CreateAndUpdateComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput">CreateAndUpdateComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput">CreateAndUpdateConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">CreateAndUpdateDashboardEmailReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">CreateAndUpdateDatasetsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">CreateAndUpdateDataSourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput">CreateAndUpdateFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput">CreateAndUpdateGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput">CreateAndUpdateGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput">CreateAndUpdateGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput">CreateAndUpdateHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput">CreateAndUpdateHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput">CreateAndUpdateIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput">CreateAndUpdateJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput">CreateAndUpdateKnowledgeBasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput">CreateAndUpdateLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput">CreateAndUpdateMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput">CreateAndUpdateMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput">CreateAndUpdateMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput">CreateAndUpdateMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput">CreateAndUpdateNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput">CreateAndUpdateNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput">CreateAndUpdateOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput">CreateAndUpdateOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput">CreateAndUpdatePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput">CreateAndUpdateSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput">CreateAndUpdateSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput">CreateAndUpdateSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput">CreateAndUpdateSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput">CreateAndUpdateSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput">CreateAndUpdateSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput">CreateAndUpdateSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput">CreateAndUpdateSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput">CreateAndUpdateServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput">CreateAndUpdateSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput">CreateAndUpdateSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput">CreateAndUpdateSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput">CreateAndUpdateTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">CreateAndUpdateThemesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">CreateAndUpdateThresholdAlertsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput">CreateAndUpdateZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput">CreateChatAgentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput">CreateDashboardExecutiveSummaryWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">CreateSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput">CreateSpacesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">CreateSpiceDatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput">DashboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput">EditVisualWithQInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">ExportToCsvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">ExportToCsvInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">ExportToExcelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">ExportToExcelInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">ExportToPdfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">ExportToPdfInScheduledReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput">ExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput">FactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput">FlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput">GenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput">GithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput">GoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput">HubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput">HuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">IncludeContentInScheduledReportsEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput">IntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput">InvokeAppsAiInferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput">JiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput">KnowledgeBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput">LinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput">ManageSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput">McpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput">MondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput">MsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput">MsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput">NewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput">NotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput">OneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput">OpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput">PagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput">PerformFlowUiTaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">PrintReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput">PublishWithoutApprovalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">RenameSharedFoldersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput">ResearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput">SalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput">SandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput">SandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput">SapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput">SapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput">SapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput">SapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput">SapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput">ServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput">ShareAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput">ShareAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput">ShareAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput">ShareAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">ShareAnalysesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput">ShareAppsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput">ShareAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput">ShareBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput">ShareBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput">ShareCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput">ShareChatAgentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput">ShareComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput">ShareComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput">ShareConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">ShareDashboardsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">ShareDatasetsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">ShareDataSourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput">ShareFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput">ShareGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput">ShareGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput">ShareGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput">ShareHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput">ShareHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput">ShareIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput">ShareJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput">ShareKnowledgeBasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput">ShareLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput">ShareMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput">ShareMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput">ShareMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput">ShareMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput">ShareNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput">ShareNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput">ShareOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput">ShareOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput">SharePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput">SharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput">ShareSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput">ShareSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput">ShareSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput">ShareSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput">ShareSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput">ShareSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput">ShareSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput">ShareSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput">ShareServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput">ShareSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput">ShareSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput">ShareSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput">ShareSpacesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput">ShareTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput">ShareZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput">SlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput">SmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">SubscribeDashboardEmailReportsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput">TextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput">UseAgentWebSearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput">UseAmazonBedrockArsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput">UseAmazonBedrockFsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput">UseAmazonBedrockKrsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput">UseAmazonSThreeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput">UseAsanaActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput">UseBambooHrActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput">UseBedrockModelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput">UseBoxAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput">UseCanvaAgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput">UseComprehendActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput">UseComprehendMedicalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput">UseConfluenceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput">UseFactSetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput">UseGenericHttpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput">UseGithubActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput">UseGoogleCalendarActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput">UseHubspotActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput">UseHuggingFaceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput">UseIntercomActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput">UseJiraActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput">UseLinearActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput">UseMcpActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput">UseMondayActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput">UseMsExchangeActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput">UseMsTeamsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput">UseNewRelicActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput">UseNotionActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput">UseOneDriveActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput">UseOpenApiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput">UsePagerDutyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput">UseSalesforceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput">UseSandPGlobalEnergyActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput">UseSandPgmiActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput">UseSapBillOfMaterialActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput">UseSapBusinessPartnerActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput">UseSapMaterialStockActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput">UseSapPhysicalInventoryActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput">UseSapProductMasterDataActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput">UseServiceNowActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput">UseSharePointActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput">UseSlackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput">UseSmartsheetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput">UseTextractActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput">UseZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">ViewAccountSpiceCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput">ZendeskActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">Analysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">Apps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">AsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">Automate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">BambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">BoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">ChatAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">ComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">ConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">CreateChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">CreateSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">CreateSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">Dashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">ExportToCsv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">ExportToExcel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">ExportToPdf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">FactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">Flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">GenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">GithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">HubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">IntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">JiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">LinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">McpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">MondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">MsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">MsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">NewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">NotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">OneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">OpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">PagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">PrintReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research">Research</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">SalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">SandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">ServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">ShareAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">ShareApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">ShareChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">ShareDashboards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">ShareDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">ShareDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">ShareGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">ShareJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">ShareLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">ShareMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">ShareMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">ShareNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">SharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">ShareSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">ShareSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">ShareTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">SlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">SmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">TextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">UseAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">UseBedrockModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">UseComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">UseFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">UseGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">UseHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">UseIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">UseJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">UseLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">UseMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">UseMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">UseNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">UseSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">UseSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">UseTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">UseZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">ZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAppsNativeDataStoreInput`<sup>Optional</sup> <a name="AccessAppsNativeDataStoreInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput"></a>

```csharp
public string AccessAppsNativeDataStoreInput { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `AddOrRunAnomalyDetectionForAnalysesInput`<sup>Optional</sup> <a name="AddOrRunAnomalyDetectionForAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```csharp
public string AddOrRunAnomalyDetectionForAnalysesInput { get; }
```

- *Type:* string

---

##### `AmazonBedrockArsActionInput`<sup>Optional</sup> <a name="AmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput"></a>

```csharp
public string AmazonBedrockArsActionInput { get; }
```

- *Type:* string

---

##### `AmazonBedrockFsActionInput`<sup>Optional</sup> <a name="AmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput"></a>

```csharp
public string AmazonBedrockFsActionInput { get; }
```

- *Type:* string

---

##### `AmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="AmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput"></a>

```csharp
public string AmazonBedrockKrsActionInput { get; }
```

- *Type:* string

---

##### `AmazonSThreeActionInput`<sup>Optional</sup> <a name="AmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput"></a>

```csharp
public string AmazonSThreeActionInput { get; }
```

- *Type:* string

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput"></a>

```csharp
public string AnalysisInput { get; }
```

- *Type:* string

---

##### `ApproveFlowShareRequestsInput`<sup>Optional</sup> <a name="ApproveFlowShareRequestsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput"></a>

```csharp
public string ApproveFlowShareRequestsInput { get; }
```

- *Type:* string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput"></a>

```csharp
public string AppsInput { get; }
```

- *Type:* string

---

##### `AsanaActionInput`<sup>Optional</sup> <a name="AsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput"></a>

```csharp
public string AsanaActionInput { get; }
```

- *Type:* string

---

##### `AutomateInput`<sup>Optional</sup> <a name="AutomateInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput"></a>

```csharp
public string AutomateInput { get; }
```

- *Type:* string

---

##### `BambooHrActionInput`<sup>Optional</sup> <a name="BambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput"></a>

```csharp
public string BambooHrActionInput { get; }
```

- *Type:* string

---

##### `BoxAgentActionInput`<sup>Optional</sup> <a name="BoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput"></a>

```csharp
public string BoxAgentActionInput { get; }
```

- *Type:* string

---

##### `BuildCalculatedFieldWithQInput`<sup>Optional</sup> <a name="BuildCalculatedFieldWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput"></a>

```csharp
public string BuildCalculatedFieldWithQInput { get; }
```

- *Type:* string

---

##### `CanvaAgentActionInput`<sup>Optional</sup> <a name="CanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput"></a>

```csharp
public string CanvaAgentActionInput { get; }
```

- *Type:* string

---

##### `ChatAgentInput`<sup>Optional</sup> <a name="ChatAgentInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput"></a>

```csharp
public string ChatAgentInput { get; }
```

- *Type:* string

---

##### `ComprehendActionInput`<sup>Optional</sup> <a name="ComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput"></a>

```csharp
public string ComprehendActionInput { get; }
```

- *Type:* string

---

##### `ComprehendMedicalActionInput`<sup>Optional</sup> <a name="ComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput"></a>

```csharp
public string ComprehendMedicalActionInput { get; }
```

- *Type:* string

---

##### `ConfluenceActionInput`<sup>Optional</sup> <a name="ConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput"></a>

```csharp
public string ConfluenceActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput"></a>

```csharp
public string CreateAndUpdateAmazonBedrockArsActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput"></a>

```csharp
public string CreateAndUpdateAmazonBedrockFsActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput"></a>

```csharp
public string CreateAndUpdateAmazonBedrockKrsActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonSThreeActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput"></a>

```csharp
public string CreateAndUpdateAmazonSThreeActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAppsInput`<sup>Optional</sup> <a name="CreateAndUpdateAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput"></a>

```csharp
public string CreateAndUpdateAppsInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAsanaActionInput`<sup>Optional</sup> <a name="CreateAndUpdateAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput"></a>

```csharp
public string CreateAndUpdateAsanaActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBambooHrActionInput`<sup>Optional</sup> <a name="CreateAndUpdateBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput"></a>

```csharp
public string CreateAndUpdateBambooHrActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBoxAgentActionInput`<sup>Optional</sup> <a name="CreateAndUpdateBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput"></a>

```csharp
public string CreateAndUpdateBoxAgentActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateCanvaAgentActionInput`<sup>Optional</sup> <a name="CreateAndUpdateCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput"></a>

```csharp
public string CreateAndUpdateCanvaAgentActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendActionInput`<sup>Optional</sup> <a name="CreateAndUpdateComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput"></a>

```csharp
public string CreateAndUpdateComprehendActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendMedicalActionInput`<sup>Optional</sup> <a name="CreateAndUpdateComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput"></a>

```csharp
public string CreateAndUpdateComprehendMedicalActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateConfluenceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput"></a>

```csharp
public string CreateAndUpdateConfluenceActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDashboardEmailReportsInput`<sup>Optional</sup> <a name="CreateAndUpdateDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```csharp
public string CreateAndUpdateDashboardEmailReportsInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDatasetsInput`<sup>Optional</sup> <a name="CreateAndUpdateDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```csharp
public string CreateAndUpdateDatasetsInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDataSourcesInput`<sup>Optional</sup> <a name="CreateAndUpdateDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```csharp
public string CreateAndUpdateDataSourcesInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateFactSetActionInput`<sup>Optional</sup> <a name="CreateAndUpdateFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput"></a>

```csharp
public string CreateAndUpdateFactSetActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGenericHttpActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput"></a>

```csharp
public string CreateAndUpdateGenericHttpActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGithubActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput"></a>

```csharp
public string CreateAndUpdateGithubActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGoogleCalendarActionInput`<sup>Optional</sup> <a name="CreateAndUpdateGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput"></a>

```csharp
public string CreateAndUpdateGoogleCalendarActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHubspotActionInput`<sup>Optional</sup> <a name="CreateAndUpdateHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput"></a>

```csharp
public string CreateAndUpdateHubspotActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHuggingFaceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput"></a>

```csharp
public string CreateAndUpdateHuggingFaceActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateIntercomActionInput`<sup>Optional</sup> <a name="CreateAndUpdateIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput"></a>

```csharp
public string CreateAndUpdateIntercomActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateJiraActionInput`<sup>Optional</sup> <a name="CreateAndUpdateJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput"></a>

```csharp
public string CreateAndUpdateJiraActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateKnowledgeBasesInput`<sup>Optional</sup> <a name="CreateAndUpdateKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput"></a>

```csharp
public string CreateAndUpdateKnowledgeBasesInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateLinearActionInput`<sup>Optional</sup> <a name="CreateAndUpdateLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput"></a>

```csharp
public string CreateAndUpdateLinearActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMcpActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput"></a>

```csharp
public string CreateAndUpdateMcpActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMondayActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput"></a>

```csharp
public string CreateAndUpdateMondayActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsExchangeActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput"></a>

```csharp
public string CreateAndUpdateMsExchangeActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsTeamsActionInput`<sup>Optional</sup> <a name="CreateAndUpdateMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput"></a>

```csharp
public string CreateAndUpdateMsTeamsActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNewRelicActionInput`<sup>Optional</sup> <a name="CreateAndUpdateNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput"></a>

```csharp
public string CreateAndUpdateNewRelicActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNotionActionInput`<sup>Optional</sup> <a name="CreateAndUpdateNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput"></a>

```csharp
public string CreateAndUpdateNotionActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOneDriveActionInput`<sup>Optional</sup> <a name="CreateAndUpdateOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput"></a>

```csharp
public string CreateAndUpdateOneDriveActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOpenApiActionInput`<sup>Optional</sup> <a name="CreateAndUpdateOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput"></a>

```csharp
public string CreateAndUpdateOpenApiActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdatePagerDutyActionInput`<sup>Optional</sup> <a name="CreateAndUpdatePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput"></a>

```csharp
public string CreateAndUpdatePagerDutyActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSalesforceActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput"></a>

```csharp
public string CreateAndUpdateSalesforceActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput"></a>

```csharp
public string CreateAndUpdateSandPGlobalEnergyActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPgmiActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput"></a>

```csharp
public string CreateAndUpdateSandPgmiActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput"></a>

```csharp
public string CreateAndUpdateSapBillOfMaterialActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput"></a>

```csharp
public string CreateAndUpdateSapBusinessPartnerActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapMaterialStockActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput"></a>

```csharp
public string CreateAndUpdateSapMaterialStockActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput"></a>

```csharp
public string CreateAndUpdateSapPhysicalInventoryActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapProductMasterDataActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput"></a>

```csharp
public string CreateAndUpdateSapProductMasterDataActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateServiceNowActionInput`<sup>Optional</sup> <a name="CreateAndUpdateServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput"></a>

```csharp
public string CreateAndUpdateServiceNowActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSharePointActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput"></a>

```csharp
public string CreateAndUpdateSharePointActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSlackActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput"></a>

```csharp
public string CreateAndUpdateSlackActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSmartsheetActionInput`<sup>Optional</sup> <a name="CreateAndUpdateSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput"></a>

```csharp
public string CreateAndUpdateSmartsheetActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateTextractActionInput`<sup>Optional</sup> <a name="CreateAndUpdateTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput"></a>

```csharp
public string CreateAndUpdateTextractActionInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThemesInput`<sup>Optional</sup> <a name="CreateAndUpdateThemesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```csharp
public string CreateAndUpdateThemesInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThresholdAlertsInput`<sup>Optional</sup> <a name="CreateAndUpdateThresholdAlertsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```csharp
public string CreateAndUpdateThresholdAlertsInput { get; }
```

- *Type:* string

---

##### `CreateAndUpdateZendeskActionInput`<sup>Optional</sup> <a name="CreateAndUpdateZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput"></a>

```csharp
public string CreateAndUpdateZendeskActionInput { get; }
```

- *Type:* string

---

##### `CreateChatAgentsInput`<sup>Optional</sup> <a name="CreateChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput"></a>

```csharp
public string CreateChatAgentsInput { get; }
```

- *Type:* string

---

##### `CreateDashboardExecutiveSummaryWithQInput`<sup>Optional</sup> <a name="CreateDashboardExecutiveSummaryWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput"></a>

```csharp
public string CreateDashboardExecutiveSummaryWithQInput { get; }
```

- *Type:* string

---

##### `CreateSharedFoldersInput`<sup>Optional</sup> <a name="CreateSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```csharp
public string CreateSharedFoldersInput { get; }
```

- *Type:* string

---

##### `CreateSpacesInput`<sup>Optional</sup> <a name="CreateSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput"></a>

```csharp
public string CreateSpacesInput { get; }
```

- *Type:* string

---

##### `CreateSpiceDatasetInput`<sup>Optional</sup> <a name="CreateSpiceDatasetInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```csharp
public string CreateSpiceDatasetInput { get; }
```

- *Type:* string

---

##### `DashboardInput`<sup>Optional</sup> <a name="DashboardInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput"></a>

```csharp
public string DashboardInput { get; }
```

- *Type:* string

---

##### `EditVisualWithQInput`<sup>Optional</sup> <a name="EditVisualWithQInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput"></a>

```csharp
public string EditVisualWithQInput { get; }
```

- *Type:* string

---

##### `ExportToCsvInput`<sup>Optional</sup> <a name="ExportToCsvInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```csharp
public string ExportToCsvInput { get; }
```

- *Type:* string

---

##### `ExportToCsvInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToCsvInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```csharp
public string ExportToCsvInScheduledReportsInput { get; }
```

- *Type:* string

---

##### `ExportToExcelInput`<sup>Optional</sup> <a name="ExportToExcelInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```csharp
public string ExportToExcelInput { get; }
```

- *Type:* string

---

##### `ExportToExcelInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToExcelInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```csharp
public string ExportToExcelInScheduledReportsInput { get; }
```

- *Type:* string

---

##### `ExportToPdfInput`<sup>Optional</sup> <a name="ExportToPdfInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```csharp
public string ExportToPdfInput { get; }
```

- *Type:* string

---

##### `ExportToPdfInScheduledReportsInput`<sup>Optional</sup> <a name="ExportToPdfInScheduledReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```csharp
public string ExportToPdfInScheduledReportsInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput"></a>

```csharp
public string ExtensionInput { get; }
```

- *Type:* string

---

##### `FactSetActionInput`<sup>Optional</sup> <a name="FactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput"></a>

```csharp
public string FactSetActionInput { get; }
```

- *Type:* string

---

##### `FlowInput`<sup>Optional</sup> <a name="FlowInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput"></a>

```csharp
public string FlowInput { get; }
```

- *Type:* string

---

##### `GenericHttpActionInput`<sup>Optional</sup> <a name="GenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput"></a>

```csharp
public string GenericHttpActionInput { get; }
```

- *Type:* string

---

##### `GithubActionInput`<sup>Optional</sup> <a name="GithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput"></a>

```csharp
public string GithubActionInput { get; }
```

- *Type:* string

---

##### `GoogleCalendarActionInput`<sup>Optional</sup> <a name="GoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput"></a>

```csharp
public string GoogleCalendarActionInput { get; }
```

- *Type:* string

---

##### `HubspotActionInput`<sup>Optional</sup> <a name="HubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput"></a>

```csharp
public string HubspotActionInput { get; }
```

- *Type:* string

---

##### `HuggingFaceActionInput`<sup>Optional</sup> <a name="HuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput"></a>

```csharp
public string HuggingFaceActionInput { get; }
```

- *Type:* string

---

##### `IncludeContentInScheduledReportsEmailInput`<sup>Optional</sup> <a name="IncludeContentInScheduledReportsEmailInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```csharp
public string IncludeContentInScheduledReportsEmailInput { get; }
```

- *Type:* string

---

##### `IntercomActionInput`<sup>Optional</sup> <a name="IntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput"></a>

```csharp
public string IntercomActionInput { get; }
```

- *Type:* string

---

##### `InvokeAppsAiInferenceInput`<sup>Optional</sup> <a name="InvokeAppsAiInferenceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput"></a>

```csharp
public string InvokeAppsAiInferenceInput { get; }
```

- *Type:* string

---

##### `JiraActionInput`<sup>Optional</sup> <a name="JiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput"></a>

```csharp
public string JiraActionInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseInput`<sup>Optional</sup> <a name="KnowledgeBaseInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput"></a>

```csharp
public string KnowledgeBaseInput { get; }
```

- *Type:* string

---

##### `LinearActionInput`<sup>Optional</sup> <a name="LinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput"></a>

```csharp
public string LinearActionInput { get; }
```

- *Type:* string

---

##### `ManageSharedFoldersInput`<sup>Optional</sup> <a name="ManageSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput"></a>

```csharp
public string ManageSharedFoldersInput { get; }
```

- *Type:* string

---

##### `McpActionInput`<sup>Optional</sup> <a name="McpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput"></a>

```csharp
public string McpActionInput { get; }
```

- *Type:* string

---

##### `MondayActionInput`<sup>Optional</sup> <a name="MondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput"></a>

```csharp
public string MondayActionInput { get; }
```

- *Type:* string

---

##### `MsExchangeActionInput`<sup>Optional</sup> <a name="MsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput"></a>

```csharp
public string MsExchangeActionInput { get; }
```

- *Type:* string

---

##### `MsTeamsActionInput`<sup>Optional</sup> <a name="MsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput"></a>

```csharp
public string MsTeamsActionInput { get; }
```

- *Type:* string

---

##### `NewRelicActionInput`<sup>Optional</sup> <a name="NewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput"></a>

```csharp
public string NewRelicActionInput { get; }
```

- *Type:* string

---

##### `NotionActionInput`<sup>Optional</sup> <a name="NotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput"></a>

```csharp
public string NotionActionInput { get; }
```

- *Type:* string

---

##### `OneDriveActionInput`<sup>Optional</sup> <a name="OneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput"></a>

```csharp
public string OneDriveActionInput { get; }
```

- *Type:* string

---

##### `OpenApiActionInput`<sup>Optional</sup> <a name="OpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput"></a>

```csharp
public string OpenApiActionInput { get; }
```

- *Type:* string

---

##### `PagerDutyActionInput`<sup>Optional</sup> <a name="PagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput"></a>

```csharp
public string PagerDutyActionInput { get; }
```

- *Type:* string

---

##### `PerformFlowUiTaskInput`<sup>Optional</sup> <a name="PerformFlowUiTaskInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput"></a>

```csharp
public string PerformFlowUiTaskInput { get; }
```

- *Type:* string

---

##### `PrintReportsInput`<sup>Optional</sup> <a name="PrintReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```csharp
public string PrintReportsInput { get; }
```

- *Type:* string

---

##### `PublishWithoutApprovalInput`<sup>Optional</sup> <a name="PublishWithoutApprovalInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput"></a>

```csharp
public string PublishWithoutApprovalInput { get; }
```

- *Type:* string

---

##### `RenameSharedFoldersInput`<sup>Optional</sup> <a name="RenameSharedFoldersInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```csharp
public string RenameSharedFoldersInput { get; }
```

- *Type:* string

---

##### `ResearchInput`<sup>Optional</sup> <a name="ResearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput"></a>

```csharp
public string ResearchInput { get; }
```

- *Type:* string

---

##### `SalesforceActionInput`<sup>Optional</sup> <a name="SalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput"></a>

```csharp
public string SalesforceActionInput { get; }
```

- *Type:* string

---

##### `SandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="SandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput"></a>

```csharp
public string SandPGlobalEnergyActionInput { get; }
```

- *Type:* string

---

##### `SandPgmiActionInput`<sup>Optional</sup> <a name="SandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput"></a>

```csharp
public string SandPgmiActionInput { get; }
```

- *Type:* string

---

##### `SapBillOfMaterialActionInput`<sup>Optional</sup> <a name="SapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput"></a>

```csharp
public string SapBillOfMaterialActionInput { get; }
```

- *Type:* string

---

##### `SapBusinessPartnerActionInput`<sup>Optional</sup> <a name="SapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput"></a>

```csharp
public string SapBusinessPartnerActionInput { get; }
```

- *Type:* string

---

##### `SapMaterialStockActionInput`<sup>Optional</sup> <a name="SapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput"></a>

```csharp
public string SapMaterialStockActionInput { get; }
```

- *Type:* string

---

##### `SapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="SapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput"></a>

```csharp
public string SapPhysicalInventoryActionInput { get; }
```

- *Type:* string

---

##### `SapProductMasterDataActionInput`<sup>Optional</sup> <a name="SapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput"></a>

```csharp
public string SapProductMasterDataActionInput { get; }
```

- *Type:* string

---

##### `ServiceNowActionInput`<sup>Optional</sup> <a name="ServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput"></a>

```csharp
public string ServiceNowActionInput { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput"></a>

```csharp
public string ShareAmazonBedrockArsActionInput { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput"></a>

```csharp
public string ShareAmazonBedrockFsActionInput { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="ShareAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput"></a>

```csharp
public string ShareAmazonBedrockKrsActionInput { get; }
```

- *Type:* string

---

##### `ShareAmazonSThreeActionInput`<sup>Optional</sup> <a name="ShareAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput"></a>

```csharp
public string ShareAmazonSThreeActionInput { get; }
```

- *Type:* string

---

##### `ShareAnalysesInput`<sup>Optional</sup> <a name="ShareAnalysesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```csharp
public string ShareAnalysesInput { get; }
```

- *Type:* string

---

##### `ShareAppsInput`<sup>Optional</sup> <a name="ShareAppsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput"></a>

```csharp
public string ShareAppsInput { get; }
```

- *Type:* string

---

##### `ShareAsanaActionInput`<sup>Optional</sup> <a name="ShareAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput"></a>

```csharp
public string ShareAsanaActionInput { get; }
```

- *Type:* string

---

##### `ShareBambooHrActionInput`<sup>Optional</sup> <a name="ShareBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput"></a>

```csharp
public string ShareBambooHrActionInput { get; }
```

- *Type:* string

---

##### `ShareBoxAgentActionInput`<sup>Optional</sup> <a name="ShareBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput"></a>

```csharp
public string ShareBoxAgentActionInput { get; }
```

- *Type:* string

---

##### `ShareCanvaAgentActionInput`<sup>Optional</sup> <a name="ShareCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput"></a>

```csharp
public string ShareCanvaAgentActionInput { get; }
```

- *Type:* string

---

##### `ShareChatAgentsInput`<sup>Optional</sup> <a name="ShareChatAgentsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput"></a>

```csharp
public string ShareChatAgentsInput { get; }
```

- *Type:* string

---

##### `ShareComprehendActionInput`<sup>Optional</sup> <a name="ShareComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput"></a>

```csharp
public string ShareComprehendActionInput { get; }
```

- *Type:* string

---

##### `ShareComprehendMedicalActionInput`<sup>Optional</sup> <a name="ShareComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput"></a>

```csharp
public string ShareComprehendMedicalActionInput { get; }
```

- *Type:* string

---

##### `ShareConfluenceActionInput`<sup>Optional</sup> <a name="ShareConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput"></a>

```csharp
public string ShareConfluenceActionInput { get; }
```

- *Type:* string

---

##### `ShareDashboardsInput`<sup>Optional</sup> <a name="ShareDashboardsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```csharp
public string ShareDashboardsInput { get; }
```

- *Type:* string

---

##### `ShareDatasetsInput`<sup>Optional</sup> <a name="ShareDatasetsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```csharp
public string ShareDatasetsInput { get; }
```

- *Type:* string

---

##### `ShareDataSourcesInput`<sup>Optional</sup> <a name="ShareDataSourcesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```csharp
public string ShareDataSourcesInput { get; }
```

- *Type:* string

---

##### `ShareFactSetActionInput`<sup>Optional</sup> <a name="ShareFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput"></a>

```csharp
public string ShareFactSetActionInput { get; }
```

- *Type:* string

---

##### `ShareGenericHttpActionInput`<sup>Optional</sup> <a name="ShareGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput"></a>

```csharp
public string ShareGenericHttpActionInput { get; }
```

- *Type:* string

---

##### `ShareGithubActionInput`<sup>Optional</sup> <a name="ShareGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput"></a>

```csharp
public string ShareGithubActionInput { get; }
```

- *Type:* string

---

##### `ShareGoogleCalendarActionInput`<sup>Optional</sup> <a name="ShareGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput"></a>

```csharp
public string ShareGoogleCalendarActionInput { get; }
```

- *Type:* string

---

##### `ShareHubspotActionInput`<sup>Optional</sup> <a name="ShareHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput"></a>

```csharp
public string ShareHubspotActionInput { get; }
```

- *Type:* string

---

##### `ShareHuggingFaceActionInput`<sup>Optional</sup> <a name="ShareHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput"></a>

```csharp
public string ShareHuggingFaceActionInput { get; }
```

- *Type:* string

---

##### `ShareIntercomActionInput`<sup>Optional</sup> <a name="ShareIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput"></a>

```csharp
public string ShareIntercomActionInput { get; }
```

- *Type:* string

---

##### `ShareJiraActionInput`<sup>Optional</sup> <a name="ShareJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput"></a>

```csharp
public string ShareJiraActionInput { get; }
```

- *Type:* string

---

##### `ShareKnowledgeBasesInput`<sup>Optional</sup> <a name="ShareKnowledgeBasesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput"></a>

```csharp
public string ShareKnowledgeBasesInput { get; }
```

- *Type:* string

---

##### `ShareLinearActionInput`<sup>Optional</sup> <a name="ShareLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput"></a>

```csharp
public string ShareLinearActionInput { get; }
```

- *Type:* string

---

##### `ShareMcpActionInput`<sup>Optional</sup> <a name="ShareMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput"></a>

```csharp
public string ShareMcpActionInput { get; }
```

- *Type:* string

---

##### `ShareMondayActionInput`<sup>Optional</sup> <a name="ShareMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput"></a>

```csharp
public string ShareMondayActionInput { get; }
```

- *Type:* string

---

##### `ShareMsExchangeActionInput`<sup>Optional</sup> <a name="ShareMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput"></a>

```csharp
public string ShareMsExchangeActionInput { get; }
```

- *Type:* string

---

##### `ShareMsTeamsActionInput`<sup>Optional</sup> <a name="ShareMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput"></a>

```csharp
public string ShareMsTeamsActionInput { get; }
```

- *Type:* string

---

##### `ShareNewRelicActionInput`<sup>Optional</sup> <a name="ShareNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput"></a>

```csharp
public string ShareNewRelicActionInput { get; }
```

- *Type:* string

---

##### `ShareNotionActionInput`<sup>Optional</sup> <a name="ShareNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput"></a>

```csharp
public string ShareNotionActionInput { get; }
```

- *Type:* string

---

##### `ShareOneDriveActionInput`<sup>Optional</sup> <a name="ShareOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput"></a>

```csharp
public string ShareOneDriveActionInput { get; }
```

- *Type:* string

---

##### `ShareOpenApiActionInput`<sup>Optional</sup> <a name="ShareOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput"></a>

```csharp
public string ShareOpenApiActionInput { get; }
```

- *Type:* string

---

##### `SharePagerDutyActionInput`<sup>Optional</sup> <a name="SharePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput"></a>

```csharp
public string SharePagerDutyActionInput { get; }
```

- *Type:* string

---

##### `SharePointActionInput`<sup>Optional</sup> <a name="SharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput"></a>

```csharp
public string SharePointActionInput { get; }
```

- *Type:* string

---

##### `ShareSalesforceActionInput`<sup>Optional</sup> <a name="ShareSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput"></a>

```csharp
public string ShareSalesforceActionInput { get; }
```

- *Type:* string

---

##### `ShareSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="ShareSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput"></a>

```csharp
public string ShareSandPGlobalEnergyActionInput { get; }
```

- *Type:* string

---

##### `ShareSandPgmiActionInput`<sup>Optional</sup> <a name="ShareSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput"></a>

```csharp
public string ShareSandPgmiActionInput { get; }
```

- *Type:* string

---

##### `ShareSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="ShareSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput"></a>

```csharp
public string ShareSapBillOfMaterialActionInput { get; }
```

- *Type:* string

---

##### `ShareSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="ShareSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput"></a>

```csharp
public string ShareSapBusinessPartnerActionInput { get; }
```

- *Type:* string

---

##### `ShareSapMaterialStockActionInput`<sup>Optional</sup> <a name="ShareSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput"></a>

```csharp
public string ShareSapMaterialStockActionInput { get; }
```

- *Type:* string

---

##### `ShareSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="ShareSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput"></a>

```csharp
public string ShareSapPhysicalInventoryActionInput { get; }
```

- *Type:* string

---

##### `ShareSapProductMasterDataActionInput`<sup>Optional</sup> <a name="ShareSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput"></a>

```csharp
public string ShareSapProductMasterDataActionInput { get; }
```

- *Type:* string

---

##### `ShareServiceNowActionInput`<sup>Optional</sup> <a name="ShareServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput"></a>

```csharp
public string ShareServiceNowActionInput { get; }
```

- *Type:* string

---

##### `ShareSharePointActionInput`<sup>Optional</sup> <a name="ShareSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput"></a>

```csharp
public string ShareSharePointActionInput { get; }
```

- *Type:* string

---

##### `ShareSlackActionInput`<sup>Optional</sup> <a name="ShareSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput"></a>

```csharp
public string ShareSlackActionInput { get; }
```

- *Type:* string

---

##### `ShareSmartsheetActionInput`<sup>Optional</sup> <a name="ShareSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput"></a>

```csharp
public string ShareSmartsheetActionInput { get; }
```

- *Type:* string

---

##### `ShareSpacesInput`<sup>Optional</sup> <a name="ShareSpacesInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput"></a>

```csharp
public string ShareSpacesInput { get; }
```

- *Type:* string

---

##### `ShareTextractActionInput`<sup>Optional</sup> <a name="ShareTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput"></a>

```csharp
public string ShareTextractActionInput { get; }
```

- *Type:* string

---

##### `ShareZendeskActionInput`<sup>Optional</sup> <a name="ShareZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput"></a>

```csharp
public string ShareZendeskActionInput { get; }
```

- *Type:* string

---

##### `SlackActionInput`<sup>Optional</sup> <a name="SlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput"></a>

```csharp
public string SlackActionInput { get; }
```

- *Type:* string

---

##### `SmartsheetActionInput`<sup>Optional</sup> <a name="SmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput"></a>

```csharp
public string SmartsheetActionInput { get; }
```

- *Type:* string

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `SubscribeDashboardEmailReportsInput`<sup>Optional</sup> <a name="SubscribeDashboardEmailReportsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```csharp
public string SubscribeDashboardEmailReportsInput { get; }
```

- *Type:* string

---

##### `TextractActionInput`<sup>Optional</sup> <a name="TextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput"></a>

```csharp
public string TextractActionInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `UseAgentWebSearchInput`<sup>Optional</sup> <a name="UseAgentWebSearchInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput"></a>

```csharp
public string UseAgentWebSearchInput { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockArsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockArsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput"></a>

```csharp
public string UseAmazonBedrockArsActionInput { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockFsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockFsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput"></a>

```csharp
public string UseAmazonBedrockFsActionInput { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockKrsActionInput`<sup>Optional</sup> <a name="UseAmazonBedrockKrsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput"></a>

```csharp
public string UseAmazonBedrockKrsActionInput { get; }
```

- *Type:* string

---

##### `UseAmazonSThreeActionInput`<sup>Optional</sup> <a name="UseAmazonSThreeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput"></a>

```csharp
public string UseAmazonSThreeActionInput { get; }
```

- *Type:* string

---

##### `UseAsanaActionInput`<sup>Optional</sup> <a name="UseAsanaActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput"></a>

```csharp
public string UseAsanaActionInput { get; }
```

- *Type:* string

---

##### `UseBambooHrActionInput`<sup>Optional</sup> <a name="UseBambooHrActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput"></a>

```csharp
public string UseBambooHrActionInput { get; }
```

- *Type:* string

---

##### `UseBedrockModelsInput`<sup>Optional</sup> <a name="UseBedrockModelsInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput"></a>

```csharp
public string UseBedrockModelsInput { get; }
```

- *Type:* string

---

##### `UseBoxAgentActionInput`<sup>Optional</sup> <a name="UseBoxAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput"></a>

```csharp
public string UseBoxAgentActionInput { get; }
```

- *Type:* string

---

##### `UseCanvaAgentActionInput`<sup>Optional</sup> <a name="UseCanvaAgentActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput"></a>

```csharp
public string UseCanvaAgentActionInput { get; }
```

- *Type:* string

---

##### `UseComprehendActionInput`<sup>Optional</sup> <a name="UseComprehendActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput"></a>

```csharp
public string UseComprehendActionInput { get; }
```

- *Type:* string

---

##### `UseComprehendMedicalActionInput`<sup>Optional</sup> <a name="UseComprehendMedicalActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput"></a>

```csharp
public string UseComprehendMedicalActionInput { get; }
```

- *Type:* string

---

##### `UseConfluenceActionInput`<sup>Optional</sup> <a name="UseConfluenceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput"></a>

```csharp
public string UseConfluenceActionInput { get; }
```

- *Type:* string

---

##### `UseFactSetActionInput`<sup>Optional</sup> <a name="UseFactSetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput"></a>

```csharp
public string UseFactSetActionInput { get; }
```

- *Type:* string

---

##### `UseGenericHttpActionInput`<sup>Optional</sup> <a name="UseGenericHttpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput"></a>

```csharp
public string UseGenericHttpActionInput { get; }
```

- *Type:* string

---

##### `UseGithubActionInput`<sup>Optional</sup> <a name="UseGithubActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput"></a>

```csharp
public string UseGithubActionInput { get; }
```

- *Type:* string

---

##### `UseGoogleCalendarActionInput`<sup>Optional</sup> <a name="UseGoogleCalendarActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput"></a>

```csharp
public string UseGoogleCalendarActionInput { get; }
```

- *Type:* string

---

##### `UseHubspotActionInput`<sup>Optional</sup> <a name="UseHubspotActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput"></a>

```csharp
public string UseHubspotActionInput { get; }
```

- *Type:* string

---

##### `UseHuggingFaceActionInput`<sup>Optional</sup> <a name="UseHuggingFaceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput"></a>

```csharp
public string UseHuggingFaceActionInput { get; }
```

- *Type:* string

---

##### `UseIntercomActionInput`<sup>Optional</sup> <a name="UseIntercomActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput"></a>

```csharp
public string UseIntercomActionInput { get; }
```

- *Type:* string

---

##### `UseJiraActionInput`<sup>Optional</sup> <a name="UseJiraActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput"></a>

```csharp
public string UseJiraActionInput { get; }
```

- *Type:* string

---

##### `UseLinearActionInput`<sup>Optional</sup> <a name="UseLinearActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput"></a>

```csharp
public string UseLinearActionInput { get; }
```

- *Type:* string

---

##### `UseMcpActionInput`<sup>Optional</sup> <a name="UseMcpActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput"></a>

```csharp
public string UseMcpActionInput { get; }
```

- *Type:* string

---

##### `UseMondayActionInput`<sup>Optional</sup> <a name="UseMondayActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput"></a>

```csharp
public string UseMondayActionInput { get; }
```

- *Type:* string

---

##### `UseMsExchangeActionInput`<sup>Optional</sup> <a name="UseMsExchangeActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput"></a>

```csharp
public string UseMsExchangeActionInput { get; }
```

- *Type:* string

---

##### `UseMsTeamsActionInput`<sup>Optional</sup> <a name="UseMsTeamsActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput"></a>

```csharp
public string UseMsTeamsActionInput { get; }
```

- *Type:* string

---

##### `UseNewRelicActionInput`<sup>Optional</sup> <a name="UseNewRelicActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput"></a>

```csharp
public string UseNewRelicActionInput { get; }
```

- *Type:* string

---

##### `UseNotionActionInput`<sup>Optional</sup> <a name="UseNotionActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput"></a>

```csharp
public string UseNotionActionInput { get; }
```

- *Type:* string

---

##### `UseOneDriveActionInput`<sup>Optional</sup> <a name="UseOneDriveActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput"></a>

```csharp
public string UseOneDriveActionInput { get; }
```

- *Type:* string

---

##### `UseOpenApiActionInput`<sup>Optional</sup> <a name="UseOpenApiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput"></a>

```csharp
public string UseOpenApiActionInput { get; }
```

- *Type:* string

---

##### `UsePagerDutyActionInput`<sup>Optional</sup> <a name="UsePagerDutyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput"></a>

```csharp
public string UsePagerDutyActionInput { get; }
```

- *Type:* string

---

##### `UseSalesforceActionInput`<sup>Optional</sup> <a name="UseSalesforceActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput"></a>

```csharp
public string UseSalesforceActionInput { get; }
```

- *Type:* string

---

##### `UseSandPGlobalEnergyActionInput`<sup>Optional</sup> <a name="UseSandPGlobalEnergyActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput"></a>

```csharp
public string UseSandPGlobalEnergyActionInput { get; }
```

- *Type:* string

---

##### `UseSandPgmiActionInput`<sup>Optional</sup> <a name="UseSandPgmiActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput"></a>

```csharp
public string UseSandPgmiActionInput { get; }
```

- *Type:* string

---

##### `UseSapBillOfMaterialActionInput`<sup>Optional</sup> <a name="UseSapBillOfMaterialActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput"></a>

```csharp
public string UseSapBillOfMaterialActionInput { get; }
```

- *Type:* string

---

##### `UseSapBusinessPartnerActionInput`<sup>Optional</sup> <a name="UseSapBusinessPartnerActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput"></a>

```csharp
public string UseSapBusinessPartnerActionInput { get; }
```

- *Type:* string

---

##### `UseSapMaterialStockActionInput`<sup>Optional</sup> <a name="UseSapMaterialStockActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput"></a>

```csharp
public string UseSapMaterialStockActionInput { get; }
```

- *Type:* string

---

##### `UseSapPhysicalInventoryActionInput`<sup>Optional</sup> <a name="UseSapPhysicalInventoryActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput"></a>

```csharp
public string UseSapPhysicalInventoryActionInput { get; }
```

- *Type:* string

---

##### `UseSapProductMasterDataActionInput`<sup>Optional</sup> <a name="UseSapProductMasterDataActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput"></a>

```csharp
public string UseSapProductMasterDataActionInput { get; }
```

- *Type:* string

---

##### `UseServiceNowActionInput`<sup>Optional</sup> <a name="UseServiceNowActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput"></a>

```csharp
public string UseServiceNowActionInput { get; }
```

- *Type:* string

---

##### `UseSharePointActionInput`<sup>Optional</sup> <a name="UseSharePointActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput"></a>

```csharp
public string UseSharePointActionInput { get; }
```

- *Type:* string

---

##### `UseSlackActionInput`<sup>Optional</sup> <a name="UseSlackActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput"></a>

```csharp
public string UseSlackActionInput { get; }
```

- *Type:* string

---

##### `UseSmartsheetActionInput`<sup>Optional</sup> <a name="UseSmartsheetActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput"></a>

```csharp
public string UseSmartsheetActionInput { get; }
```

- *Type:* string

---

##### `UseTextractActionInput`<sup>Optional</sup> <a name="UseTextractActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput"></a>

```csharp
public string UseTextractActionInput { get; }
```

- *Type:* string

---

##### `UseZendeskActionInput`<sup>Optional</sup> <a name="UseZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput"></a>

```csharp
public string UseZendeskActionInput { get; }
```

- *Type:* string

---

##### `ViewAccountSpiceCapacityInput`<sup>Optional</sup> <a name="ViewAccountSpiceCapacityInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```csharp
public string ViewAccountSpiceCapacityInput { get; }
```

- *Type:* string

---

##### `ZendeskActionInput`<sup>Optional</sup> <a name="ZendeskActionInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput"></a>

```csharp
public string ZendeskActionInput { get; }
```

- *Type:* string

---

##### `AccessAppsNativeDataStore`<sup>Required</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```csharp
public string AccessAppsNativeDataStore { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```csharp
public string AddOrRunAnomalyDetectionForAnalyses { get; }
```

- *Type:* string

---

##### `AmazonBedrockArsAction`<sup>Required</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```csharp
public string AmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockFsAction`<sup>Required</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```csharp
public string AmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockKrsAction`<sup>Required</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```csharp
public string AmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `AmazonSThreeAction`<sup>Required</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```csharp
public string AmazonSThreeAction { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```csharp
public string Analysis { get; }
```

- *Type:* string

---

##### `ApproveFlowShareRequests`<sup>Required</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```csharp
public string ApproveFlowShareRequests { get; }
```

- *Type:* string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```csharp
public string Apps { get; }
```

- *Type:* string

---

##### `AsanaAction`<sup>Required</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```csharp
public string AsanaAction { get; }
```

- *Type:* string

---

##### `Automate`<sup>Required</sup> <a name="Automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```csharp
public string Automate { get; }
```

- *Type:* string

---

##### `BambooHrAction`<sup>Required</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```csharp
public string BambooHrAction { get; }
```

- *Type:* string

---

##### `BoxAgentAction`<sup>Required</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```csharp
public string BoxAgentAction { get; }
```

- *Type:* string

---

##### `BuildCalculatedFieldWithQ`<sup>Required</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```csharp
public string BuildCalculatedFieldWithQ { get; }
```

- *Type:* string

---

##### `CanvaAgentAction`<sup>Required</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```csharp
public string CanvaAgentAction { get; }
```

- *Type:* string

---

##### `ChatAgent`<sup>Required</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```csharp
public string ChatAgent { get; }
```

- *Type:* string

---

##### `ComprehendAction`<sup>Required</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```csharp
public string ComprehendAction { get; }
```

- *Type:* string

---

##### `ComprehendMedicalAction`<sup>Required</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```csharp
public string ComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ConfluenceAction`<sup>Required</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```csharp
public string ConfluenceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```csharp
public string CreateAndUpdateAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateApps`<sup>Required</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```csharp
public string CreateAndUpdateApps { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAsanaAction`<sup>Required</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```csharp
public string CreateAndUpdateAsanaAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBambooHrAction`<sup>Required</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```csharp
public string CreateAndUpdateBambooHrAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBoxAgentAction`<sup>Required</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```csharp
public string CreateAndUpdateBoxAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```csharp
public string CreateAndUpdateCanvaAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```csharp
public string CreateAndUpdateComprehendAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```csharp
public string CreateAndUpdateComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateConfluenceAction`<sup>Required</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```csharp
public string CreateAndUpdateConfluenceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```csharp
public string CreateAndUpdateDashboardEmailReports { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDatasets`<sup>Required</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```csharp
public string CreateAndUpdateDatasets { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDataSources`<sup>Required</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```csharp
public string CreateAndUpdateDataSources { get; }
```

- *Type:* string

---

##### `CreateAndUpdateFactSetAction`<sup>Required</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```csharp
public string CreateAndUpdateFactSetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGenericHttpAction`<sup>Required</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```csharp
public string CreateAndUpdateGenericHttpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGithubAction`<sup>Required</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```csharp
public string CreateAndUpdateGithubAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```csharp
public string CreateAndUpdateGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHubspotAction`<sup>Required</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```csharp
public string CreateAndUpdateHubspotAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```csharp
public string CreateAndUpdateHuggingFaceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateIntercomAction`<sup>Required</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```csharp
public string CreateAndUpdateIntercomAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateJiraAction`<sup>Required</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```csharp
public string CreateAndUpdateJiraAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateKnowledgeBases`<sup>Required</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```csharp
public string CreateAndUpdateKnowledgeBases { get; }
```

- *Type:* string

---

##### `CreateAndUpdateLinearAction`<sup>Required</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```csharp
public string CreateAndUpdateLinearAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMcpAction`<sup>Required</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```csharp
public string CreateAndUpdateMcpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMondayAction`<sup>Required</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```csharp
public string CreateAndUpdateMondayAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsExchangeAction`<sup>Required</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```csharp
public string CreateAndUpdateMsExchangeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsTeamsAction`<sup>Required</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```csharp
public string CreateAndUpdateMsTeamsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNewRelicAction`<sup>Required</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```csharp
public string CreateAndUpdateNewRelicAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNotionAction`<sup>Required</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```csharp
public string CreateAndUpdateNotionAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOneDriveAction`<sup>Required</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```csharp
public string CreateAndUpdateOneDriveAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOpenApiAction`<sup>Required</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```csharp
public string CreateAndUpdateOpenApiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdatePagerDutyAction`<sup>Required</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```csharp
public string CreateAndUpdatePagerDutyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSalesforceAction`<sup>Required</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```csharp
public string CreateAndUpdateSalesforceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```csharp
public string CreateAndUpdateSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPgmiAction`<sup>Required</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```csharp
public string CreateAndUpdateSandPgmiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```csharp
public string CreateAndUpdateSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```csharp
public string CreateAndUpdateSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```csharp
public string CreateAndUpdateSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```csharp
public string CreateAndUpdateSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```csharp
public string CreateAndUpdateSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateServiceNowAction`<sup>Required</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```csharp
public string CreateAndUpdateServiceNowAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSharePointAction`<sup>Required</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```csharp
public string CreateAndUpdateSharePointAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSlackAction`<sup>Required</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```csharp
public string CreateAndUpdateSlackAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSmartsheetAction`<sup>Required</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```csharp
public string CreateAndUpdateSmartsheetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateTextractAction`<sup>Required</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```csharp
public string CreateAndUpdateTextractAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThemes`<sup>Required</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```csharp
public string CreateAndUpdateThemes { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThresholdAlerts`<sup>Required</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```csharp
public string CreateAndUpdateThresholdAlerts { get; }
```

- *Type:* string

---

##### `CreateAndUpdateZendeskAction`<sup>Required</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```csharp
public string CreateAndUpdateZendeskAction { get; }
```

- *Type:* string

---

##### `CreateChatAgents`<sup>Required</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```csharp
public string CreateChatAgents { get; }
```

- *Type:* string

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```csharp
public string CreateDashboardExecutiveSummaryWithQ { get; }
```

- *Type:* string

---

##### `CreateSharedFolders`<sup>Required</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```csharp
public string CreateSharedFolders { get; }
```

- *Type:* string

---

##### `CreateSpaces`<sup>Required</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```csharp
public string CreateSpaces { get; }
```

- *Type:* string

---

##### `CreateSpiceDataset`<sup>Required</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```csharp
public string CreateSpiceDataset { get; }
```

- *Type:* string

---

##### `Dashboard`<sup>Required</sup> <a name="Dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```csharp
public string Dashboard { get; }
```

- *Type:* string

---

##### `EditVisualWithQ`<sup>Required</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```csharp
public string EditVisualWithQ { get; }
```

- *Type:* string

---

##### `ExportToCsv`<sup>Required</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```csharp
public string ExportToCsv { get; }
```

- *Type:* string

---

##### `ExportToCsvInScheduledReports`<sup>Required</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```csharp
public string ExportToCsvInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToExcel`<sup>Required</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```csharp
public string ExportToExcel { get; }
```

- *Type:* string

---

##### `ExportToExcelInScheduledReports`<sup>Required</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```csharp
public string ExportToExcelInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToPdf`<sup>Required</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```csharp
public string ExportToPdf { get; }
```

- *Type:* string

---

##### `ExportToPdfInScheduledReports`<sup>Required</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```csharp
public string ExportToPdfInScheduledReports { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `FactSetAction`<sup>Required</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```csharp
public string FactSetAction { get; }
```

- *Type:* string

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```csharp
public string Flow { get; }
```

- *Type:* string

---

##### `GenericHttpAction`<sup>Required</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```csharp
public string GenericHttpAction { get; }
```

- *Type:* string

---

##### `GithubAction`<sup>Required</sup> <a name="GithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```csharp
public string GithubAction { get; }
```

- *Type:* string

---

##### `GoogleCalendarAction`<sup>Required</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```csharp
public string GoogleCalendarAction { get; }
```

- *Type:* string

---

##### `HubspotAction`<sup>Required</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```csharp
public string HubspotAction { get; }
```

- *Type:* string

---

##### `HuggingFaceAction`<sup>Required</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```csharp
public string HuggingFaceAction { get; }
```

- *Type:* string

---

##### `IncludeContentInScheduledReportsEmail`<sup>Required</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```csharp
public string IncludeContentInScheduledReportsEmail { get; }
```

- *Type:* string

---

##### `IntercomAction`<sup>Required</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```csharp
public string IntercomAction { get; }
```

- *Type:* string

---

##### `InvokeAppsAiInference`<sup>Required</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```csharp
public string InvokeAppsAiInference { get; }
```

- *Type:* string

---

##### `JiraAction`<sup>Required</sup> <a name="JiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```csharp
public string JiraAction { get; }
```

- *Type:* string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```csharp
public string KnowledgeBase { get; }
```

- *Type:* string

---

##### `LinearAction`<sup>Required</sup> <a name="LinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```csharp
public string LinearAction { get; }
```

- *Type:* string

---

##### `ManageSharedFolders`<sup>Required</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```csharp
public string ManageSharedFolders { get; }
```

- *Type:* string

---

##### `McpAction`<sup>Required</sup> <a name="McpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```csharp
public string McpAction { get; }
```

- *Type:* string

---

##### `MondayAction`<sup>Required</sup> <a name="MondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```csharp
public string MondayAction { get; }
```

- *Type:* string

---

##### `MsExchangeAction`<sup>Required</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```csharp
public string MsExchangeAction { get; }
```

- *Type:* string

---

##### `MsTeamsAction`<sup>Required</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```csharp
public string MsTeamsAction { get; }
```

- *Type:* string

---

##### `NewRelicAction`<sup>Required</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```csharp
public string NewRelicAction { get; }
```

- *Type:* string

---

##### `NotionAction`<sup>Required</sup> <a name="NotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```csharp
public string NotionAction { get; }
```

- *Type:* string

---

##### `OneDriveAction`<sup>Required</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```csharp
public string OneDriveAction { get; }
```

- *Type:* string

---

##### `OpenApiAction`<sup>Required</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```csharp
public string OpenApiAction { get; }
```

- *Type:* string

---

##### `PagerDutyAction`<sup>Required</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```csharp
public string PagerDutyAction { get; }
```

- *Type:* string

---

##### `PerformFlowUiTask`<sup>Required</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```csharp
public string PerformFlowUiTask { get; }
```

- *Type:* string

---

##### `PrintReports`<sup>Required</sup> <a name="PrintReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```csharp
public string PrintReports { get; }
```

- *Type:* string

---

##### `PublishWithoutApproval`<sup>Required</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```csharp
public string PublishWithoutApproval { get; }
```

- *Type:* string

---

##### `RenameSharedFolders`<sup>Required</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```csharp
public string RenameSharedFolders { get; }
```

- *Type:* string

---

##### `Research`<sup>Required</sup> <a name="Research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```csharp
public string Research { get; }
```

- *Type:* string

---

##### `SalesforceAction`<sup>Required</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```csharp
public string SalesforceAction { get; }
```

- *Type:* string

---

##### `SandPGlobalEnergyAction`<sup>Required</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```csharp
public string SandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `SandPgmiAction`<sup>Required</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```csharp
public string SandPgmiAction { get; }
```

- *Type:* string

---

##### `SapBillOfMaterialAction`<sup>Required</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```csharp
public string SapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `SapBusinessPartnerAction`<sup>Required</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```csharp
public string SapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `SapMaterialStockAction`<sup>Required</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```csharp
public string SapMaterialStockAction { get; }
```

- *Type:* string

---

##### `SapPhysicalInventoryAction`<sup>Required</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```csharp
public string SapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `SapProductMasterDataAction`<sup>Required</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```csharp
public string SapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ServiceNowAction`<sup>Required</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```csharp
public string ServiceNowAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockArsAction`<sup>Required</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```csharp
public string ShareAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockFsAction`<sup>Required</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```csharp
public string ShareAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockKrsAction`<sup>Required</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```csharp
public string ShareAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonSThreeAction`<sup>Required</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```csharp
public string ShareAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `ShareAnalyses`<sup>Required</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```csharp
public string ShareAnalyses { get; }
```

- *Type:* string

---

##### `ShareApps`<sup>Required</sup> <a name="ShareApps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```csharp
public string ShareApps { get; }
```

- *Type:* string

---

##### `ShareAsanaAction`<sup>Required</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```csharp
public string ShareAsanaAction { get; }
```

- *Type:* string

---

##### `ShareBambooHrAction`<sup>Required</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```csharp
public string ShareBambooHrAction { get; }
```

- *Type:* string

---

##### `ShareBoxAgentAction`<sup>Required</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```csharp
public string ShareBoxAgentAction { get; }
```

- *Type:* string

---

##### `ShareCanvaAgentAction`<sup>Required</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```csharp
public string ShareCanvaAgentAction { get; }
```

- *Type:* string

---

##### `ShareChatAgents`<sup>Required</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```csharp
public string ShareChatAgents { get; }
```

- *Type:* string

---

##### `ShareComprehendAction`<sup>Required</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```csharp
public string ShareComprehendAction { get; }
```

- *Type:* string

---

##### `ShareComprehendMedicalAction`<sup>Required</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```csharp
public string ShareComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ShareConfluenceAction`<sup>Required</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```csharp
public string ShareConfluenceAction { get; }
```

- *Type:* string

---

##### `ShareDashboards`<sup>Required</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```csharp
public string ShareDashboards { get; }
```

- *Type:* string

---

##### `ShareDatasets`<sup>Required</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```csharp
public string ShareDatasets { get; }
```

- *Type:* string

---

##### `ShareDataSources`<sup>Required</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```csharp
public string ShareDataSources { get; }
```

- *Type:* string

---

##### `ShareFactSetAction`<sup>Required</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```csharp
public string ShareFactSetAction { get; }
```

- *Type:* string

---

##### `ShareGenericHttpAction`<sup>Required</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```csharp
public string ShareGenericHttpAction { get; }
```

- *Type:* string

---

##### `ShareGithubAction`<sup>Required</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```csharp
public string ShareGithubAction { get; }
```

- *Type:* string

---

##### `ShareGoogleCalendarAction`<sup>Required</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```csharp
public string ShareGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `ShareHubspotAction`<sup>Required</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```csharp
public string ShareHubspotAction { get; }
```

- *Type:* string

---

##### `ShareHuggingFaceAction`<sup>Required</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```csharp
public string ShareHuggingFaceAction { get; }
```

- *Type:* string

---

##### `ShareIntercomAction`<sup>Required</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```csharp
public string ShareIntercomAction { get; }
```

- *Type:* string

---

##### `ShareJiraAction`<sup>Required</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```csharp
public string ShareJiraAction { get; }
```

- *Type:* string

---

##### `ShareKnowledgeBases`<sup>Required</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```csharp
public string ShareKnowledgeBases { get; }
```

- *Type:* string

---

##### `ShareLinearAction`<sup>Required</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```csharp
public string ShareLinearAction { get; }
```

- *Type:* string

---

##### `ShareMcpAction`<sup>Required</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```csharp
public string ShareMcpAction { get; }
```

- *Type:* string

---

##### `ShareMondayAction`<sup>Required</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```csharp
public string ShareMondayAction { get; }
```

- *Type:* string

---

##### `ShareMsExchangeAction`<sup>Required</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```csharp
public string ShareMsExchangeAction { get; }
```

- *Type:* string

---

##### `ShareMsTeamsAction`<sup>Required</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```csharp
public string ShareMsTeamsAction { get; }
```

- *Type:* string

---

##### `ShareNewRelicAction`<sup>Required</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```csharp
public string ShareNewRelicAction { get; }
```

- *Type:* string

---

##### `ShareNotionAction`<sup>Required</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```csharp
public string ShareNotionAction { get; }
```

- *Type:* string

---

##### `ShareOneDriveAction`<sup>Required</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```csharp
public string ShareOneDriveAction { get; }
```

- *Type:* string

---

##### `ShareOpenApiAction`<sup>Required</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```csharp
public string ShareOpenApiAction { get; }
```

- *Type:* string

---

##### `SharePagerDutyAction`<sup>Required</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```csharp
public string SharePagerDutyAction { get; }
```

- *Type:* string

---

##### `SharePointAction`<sup>Required</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```csharp
public string SharePointAction { get; }
```

- *Type:* string

---

##### `ShareSalesforceAction`<sup>Required</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```csharp
public string ShareSalesforceAction { get; }
```

- *Type:* string

---

##### `ShareSandPGlobalEnergyAction`<sup>Required</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```csharp
public string ShareSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `ShareSandPgmiAction`<sup>Required</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```csharp
public string ShareSandPgmiAction { get; }
```

- *Type:* string

---

##### `ShareSapBillOfMaterialAction`<sup>Required</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```csharp
public string ShareSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `ShareSapBusinessPartnerAction`<sup>Required</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```csharp
public string ShareSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `ShareSapMaterialStockAction`<sup>Required</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```csharp
public string ShareSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `ShareSapPhysicalInventoryAction`<sup>Required</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```csharp
public string ShareSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `ShareSapProductMasterDataAction`<sup>Required</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```csharp
public string ShareSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ShareServiceNowAction`<sup>Required</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```csharp
public string ShareServiceNowAction { get; }
```

- *Type:* string

---

##### `ShareSharePointAction`<sup>Required</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```csharp
public string ShareSharePointAction { get; }
```

- *Type:* string

---

##### `ShareSlackAction`<sup>Required</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```csharp
public string ShareSlackAction { get; }
```

- *Type:* string

---

##### `ShareSmartsheetAction`<sup>Required</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```csharp
public string ShareSmartsheetAction { get; }
```

- *Type:* string

---

##### `ShareSpaces`<sup>Required</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```csharp
public string ShareSpaces { get; }
```

- *Type:* string

---

##### `ShareTextractAction`<sup>Required</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```csharp
public string ShareTextractAction { get; }
```

- *Type:* string

---

##### `ShareZendeskAction`<sup>Required</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```csharp
public string ShareZendeskAction { get; }
```

- *Type:* string

---

##### `SlackAction`<sup>Required</sup> <a name="SlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```csharp
public string SlackAction { get; }
```

- *Type:* string

---

##### `SmartsheetAction`<sup>Required</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```csharp
public string SmartsheetAction { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `SubscribeDashboardEmailReports`<sup>Required</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```csharp
public string SubscribeDashboardEmailReports { get; }
```

- *Type:* string

---

##### `TextractAction`<sup>Required</sup> <a name="TextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```csharp
public string TextractAction { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `UseAgentWebSearch`<sup>Required</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```csharp
public string UseAgentWebSearch { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockArsAction`<sup>Required</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```csharp
public string UseAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockFsAction`<sup>Required</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```csharp
public string UseAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockKrsAction`<sup>Required</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```csharp
public string UseAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `UseAmazonSThreeAction`<sup>Required</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```csharp
public string UseAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `UseAsanaAction`<sup>Required</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```csharp
public string UseAsanaAction { get; }
```

- *Type:* string

---

##### `UseBambooHrAction`<sup>Required</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```csharp
public string UseBambooHrAction { get; }
```

- *Type:* string

---

##### `UseBedrockModels`<sup>Required</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```csharp
public string UseBedrockModels { get; }
```

- *Type:* string

---

##### `UseBoxAgentAction`<sup>Required</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```csharp
public string UseBoxAgentAction { get; }
```

- *Type:* string

---

##### `UseCanvaAgentAction`<sup>Required</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```csharp
public string UseCanvaAgentAction { get; }
```

- *Type:* string

---

##### `UseComprehendAction`<sup>Required</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```csharp
public string UseComprehendAction { get; }
```

- *Type:* string

---

##### `UseComprehendMedicalAction`<sup>Required</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```csharp
public string UseComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `UseConfluenceAction`<sup>Required</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```csharp
public string UseConfluenceAction { get; }
```

- *Type:* string

---

##### `UseFactSetAction`<sup>Required</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```csharp
public string UseFactSetAction { get; }
```

- *Type:* string

---

##### `UseGenericHttpAction`<sup>Required</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```csharp
public string UseGenericHttpAction { get; }
```

- *Type:* string

---

##### `UseGithubAction`<sup>Required</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```csharp
public string UseGithubAction { get; }
```

- *Type:* string

---

##### `UseGoogleCalendarAction`<sup>Required</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```csharp
public string UseGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `UseHubspotAction`<sup>Required</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```csharp
public string UseHubspotAction { get; }
```

- *Type:* string

---

##### `UseHuggingFaceAction`<sup>Required</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```csharp
public string UseHuggingFaceAction { get; }
```

- *Type:* string

---

##### `UseIntercomAction`<sup>Required</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```csharp
public string UseIntercomAction { get; }
```

- *Type:* string

---

##### `UseJiraAction`<sup>Required</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```csharp
public string UseJiraAction { get; }
```

- *Type:* string

---

##### `UseLinearAction`<sup>Required</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```csharp
public string UseLinearAction { get; }
```

- *Type:* string

---

##### `UseMcpAction`<sup>Required</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```csharp
public string UseMcpAction { get; }
```

- *Type:* string

---

##### `UseMondayAction`<sup>Required</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```csharp
public string UseMondayAction { get; }
```

- *Type:* string

---

##### `UseMsExchangeAction`<sup>Required</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```csharp
public string UseMsExchangeAction { get; }
```

- *Type:* string

---

##### `UseMsTeamsAction`<sup>Required</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```csharp
public string UseMsTeamsAction { get; }
```

- *Type:* string

---

##### `UseNewRelicAction`<sup>Required</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```csharp
public string UseNewRelicAction { get; }
```

- *Type:* string

---

##### `UseNotionAction`<sup>Required</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```csharp
public string UseNotionAction { get; }
```

- *Type:* string

---

##### `UseOneDriveAction`<sup>Required</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```csharp
public string UseOneDriveAction { get; }
```

- *Type:* string

---

##### `UseOpenApiAction`<sup>Required</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```csharp
public string UseOpenApiAction { get; }
```

- *Type:* string

---

##### `UsePagerDutyAction`<sup>Required</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```csharp
public string UsePagerDutyAction { get; }
```

- *Type:* string

---

##### `UseSalesforceAction`<sup>Required</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```csharp
public string UseSalesforceAction { get; }
```

- *Type:* string

---

##### `UseSandPGlobalEnergyAction`<sup>Required</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```csharp
public string UseSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `UseSandPgmiAction`<sup>Required</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```csharp
public string UseSandPgmiAction { get; }
```

- *Type:* string

---

##### `UseSapBillOfMaterialAction`<sup>Required</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```csharp
public string UseSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `UseSapBusinessPartnerAction`<sup>Required</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```csharp
public string UseSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `UseSapMaterialStockAction`<sup>Required</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```csharp
public string UseSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `UseSapPhysicalInventoryAction`<sup>Required</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```csharp
public string UseSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `UseSapProductMasterDataAction`<sup>Required</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```csharp
public string UseSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `UseServiceNowAction`<sup>Required</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```csharp
public string UseServiceNowAction { get; }
```

- *Type:* string

---

##### `UseSharePointAction`<sup>Required</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```csharp
public string UseSharePointAction { get; }
```

- *Type:* string

---

##### `UseSlackAction`<sup>Required</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```csharp
public string UseSlackAction { get; }
```

- *Type:* string

---

##### `UseSmartsheetAction`<sup>Required</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```csharp
public string UseSmartsheetAction { get; }
```

- *Type:* string

---

##### `UseTextractAction`<sup>Required</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```csharp
public string UseTextractAction { get; }
```

- *Type:* string

---

##### `UseZendeskAction`<sup>Required</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```csharp
public string UseZendeskAction { get; }
```

- *Type:* string

---

##### `ViewAccountSpiceCapacity`<sup>Required</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```csharp
public string ViewAccountSpiceCapacity { get; }
```

- *Type:* string

---

##### `ZendeskAction`<sup>Required</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```csharp
public string ZendeskAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---


### QuicksightCustomPermissionsTagsList <a name="QuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get"></a>

```csharp
private QuicksightCustomPermissionsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>[]

---


### QuicksightCustomPermissionsTagsOutputReference <a name="QuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightCustomPermissionsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightCustomPermissionsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>

---



