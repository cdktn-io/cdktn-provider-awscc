# `shieldProtection` Submodule <a name="`shieldProtection` Submodule" id="@cdktn/provider-awscc.shieldProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtection <a name="ShieldProtection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection awscc_shield_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtection(Construct Scope, string Id, ShieldProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig">ShieldProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig">ShieldProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration">PutApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration">ResetApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns">ResetHealthCheckArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationLayerAutomaticResponseConfiguration` <a name="PutApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration"></a>

```csharp
private void PutApplicationLayerAutomaticResponseConfiguration(ShieldProtectionApplicationLayerAutomaticResponseConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags"></a>

```csharp
private void PutTags(IResolvable|ShieldProtectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---

##### `ResetApplicationLayerAutomaticResponseConfiguration` <a name="ResetApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration"></a>

```csharp
private void ResetApplicationLayerAutomaticResponseConfiguration()
```

##### `ResetHealthCheckArns` <a name="ResetHealthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns"></a>

```csharp
private void ResetHealthCheckArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProtection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ShieldProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration">ApplicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn">ProtectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId">ProtectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput">ApplicationLayerAutomaticResponseConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput">HealthCheckArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns">HealthCheckArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationLayerAutomaticResponseConfiguration`<sup>Required</sup> <a name="ApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration"></a>

```csharp
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference ApplicationLayerAutomaticResponseConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProtectionArn`<sup>Required</sup> <a name="ProtectionArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn"></a>

```csharp
public string ProtectionArn { get; }
```

- *Type:* string

---

##### `ProtectionId`<sup>Required</sup> <a name="ProtectionId" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId"></a>

```csharp
public string ProtectionId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags"></a>

```csharp
public ShieldProtectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a>

---

##### `ApplicationLayerAutomaticResponseConfigurationInput`<sup>Optional</sup> <a name="ApplicationLayerAutomaticResponseConfigurationInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput"></a>

```csharp
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfiguration ApplicationLayerAutomaticResponseConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `HealthCheckArnsInput`<sup>Optional</sup> <a name="HealthCheckArnsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput"></a>

```csharp
public string[] HealthCheckArnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput"></a>

```csharp
public IResolvable|ShieldProtectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---

##### `HealthCheckArns`<sup>Required</sup> <a name="HealthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns"></a>

```csharp
public string[] HealthCheckArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfiguration <a name="ShieldProtectionApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionApplicationLayerAutomaticResponseConfiguration {
    ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction Action = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status">Status</a></code> | <code>string</code> | Indicates whether automatic application layer DDoS mitigation is enabled for the protection. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action"></a>

```csharp
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.

You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#action ShieldProtection#action}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#status ShieldProtection#status}

---

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction {
    string Block = null,
    string Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block">Block</a></code> | <code>string</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count">Count</a></code> | <code>string</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action. |

---

##### `Block`<sup>Optional</sup> <a name="Block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block"></a>

```csharp
public string Block { get; set; }
```

- *Type:* string

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#block ShieldProtection#block}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count"></a>

```csharp
public string Count { get; set; }
```

- *Type:* string

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#count ShieldProtection#count}

---

### ShieldProtectionConfig <a name="ShieldProtectionConfig" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceArn,
    ShieldProtectionApplicationLayerAutomaticResponseConfiguration ApplicationLayerAutomaticResponseConfiguration = null,
    string[] HealthCheckArns = null,
    IResolvable|ShieldProtectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name">Name</a></code> | <code>string</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration">ApplicationLayerAutomaticResponseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns">HealthCheckArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | One or more tag key-value pairs for the Protection object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `ApplicationLayerAutomaticResponseConfiguration`<sup>Optional</sup> <a name="ApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration"></a>

```csharp
public ShieldProtectionApplicationLayerAutomaticResponseConfiguration ApplicationLayerAutomaticResponseConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `HealthCheckArns`<sup>Optional</sup> <a name="HealthCheckArns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns"></a>

```csharp
public string[] HealthCheckArns { get; set; }
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags"></a>

```csharp
public IResolvable|ShieldProtectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

### ShieldProtectionTags <a name="ShieldProtectionTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key">Key</a></code> | <code>string</code> | Part of the key:value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value">Value</a></code> | <code>string</code> | Part of the key:value pair that defines a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Part of the key:value pair that defines a tag.

You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#key ShieldProtection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Part of the key:value pair that defines a tag.

You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/shield_protection#value ShieldProtection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock">ResetBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlock` <a name="ResetBlock" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock"></a>

```csharp
private void ResetBlock()
```

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput">BlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput">CountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block">Block</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockInput`<sup>Optional</sup> <a name="BlockInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput"></a>

```csharp
public string BlockInput { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput"></a>

```csharp
public string CountInput { get; }
```

- *Type:* string

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block"></a>

```csharp
public string Block { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---


### ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction"></a>

```csharp
private void PutAction(ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action"></a>

```csharp
public ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput"></a>

```csharp
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ShieldProtectionApplicationLayerAutomaticResponseConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---


### ShieldProtectionTagsList <a name="ShieldProtectionTagsList" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get"></a>

```csharp
private ShieldProtectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|ShieldProtectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>[]

---


### ShieldProtectionTagsOutputReference <a name="ShieldProtectionTagsOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ShieldProtectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ShieldProtectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>

---



