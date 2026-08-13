# `identitystoreGroupMembership` Submodule <a name="`identitystoreGroupMembership` Submodule" id="@cdktn/provider-awscc.identitystoreGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreGroupMembership <a name="IdentitystoreGroupMembership" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership awscc_identitystore_group_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreGroupMembership(Construct Scope, string Id, IdentitystoreGroupMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig">IdentitystoreGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId">PutMemberId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberId` <a name="PutMemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId"></a>

```csharp
private void PutMemberId(IdentitystoreGroupMembershipMemberId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.putMemberId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreGroupMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreGroupMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreGroupMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IdentitystoreGroupMembership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IdentitystoreGroupMembership resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentitystoreGroupMembership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentitystoreGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IdentitystoreGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId">MemberId</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference">IdentitystoreGroupMembershipMemberIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId">MembershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput">IdentityStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput">MemberIdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberId"></a>

```csharp
public IdentitystoreGroupMembershipMemberIdOutputReference MemberId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference">IdentitystoreGroupMembershipMemberIdOutputReference</a>

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.membershipId"></a>

```csharp
public string MembershipId { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdentityStoreIdInput`<sup>Optional</sup> <a name="IdentityStoreIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreIdInput"></a>

```csharp
public string IdentityStoreIdInput { get; }
```

- *Type:* string

---

##### `MemberIdInput`<sup>Optional</sup> <a name="MemberIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.memberIdInput"></a>

```csharp
public IResolvable|IdentitystoreGroupMembershipMemberId MemberIdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreGroupMembershipConfig <a name="IdentitystoreGroupMembershipConfig" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreGroupMembershipConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GroupId,
    string IdentityStoreId,
    IdentitystoreGroupMembershipMemberId MemberId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId">GroupId</a></code> | <code>string</code> | The unique identifier for a group in the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId">IdentityStoreId</a></code> | <code>string</code> | The globally unique identifier for the identity store. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId">MemberId</a></code> | <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | An object containing the identifier of a group member. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The unique identifier for a group in the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}

---

##### `IdentityStoreId`<sup>Required</sup> <a name="IdentityStoreId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.identityStoreId"></a>

```csharp
public string IdentityStoreId { get; set; }
```

- *Type:* string

The globally unique identifier for the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipConfig.property.memberId"></a>

```csharp
public IdentitystoreGroupMembershipMemberId MemberId { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

An object containing the identifier of a group member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}

---

### IdentitystoreGroupMembershipMemberId <a name="IdentitystoreGroupMembershipMemberId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreGroupMembershipMemberId {
    string UserId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.property.userId">UserId</a></code> | <code>string</code> | The identifier for a user in the identity store. |

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

The identifier for a user in the identity store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/identitystore_group_membership#user_id IdentitystoreGroupMembership#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreGroupMembershipMemberIdOutputReference <a name="IdentitystoreGroupMembershipMemberIdOutputReference" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IdentitystoreGroupMembershipMemberIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentitystoreGroupMembershipMemberId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.identitystoreGroupMembership.IdentitystoreGroupMembershipMemberId">IdentitystoreGroupMembershipMemberId</a>

---



