# `ramResourceShare` Submodule <a name="`ramResourceShare` Submodule" id="@cdktn/provider-awscc.ramResourceShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShare <a name="RamResourceShare" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share awscc_ram_resource_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShare(Construct Scope, string Id, RamResourceShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig">RamResourceShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig">RamResourceShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration">PutResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals">ResetAllowExternalPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns">ResetPermissionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration">ResetResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceShareConfiguration` <a name="PutResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration"></a>

```csharp
private void PutResourceShareConfiguration(RamResourceShareResourceShareConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putResourceShareConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags"></a>

```csharp
private void PutTags(IResolvable|RamResourceShareTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---

##### `ResetAllowExternalPrincipals` <a name="ResetAllowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetAllowExternalPrincipals"></a>

```csharp
private void ResetAllowExternalPrincipals()
```

##### `ResetPermissionArns` <a name="ResetPermissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPermissionArns"></a>

```csharp
private void ResetPermissionArns()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceArns"></a>

```csharp
private void ResetResourceArns()
```

##### `ResetResourceShareConfiguration` <a name="ResetResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetResourceShareConfiguration"></a>

```csharp
private void ResetResourceShareConfiguration()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetSources"></a>

```csharp
private void ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RamResourceShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RamResourceShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RamResourceShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RamResourceShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RamResourceShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RamResourceShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RamResourceShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet">FeatureSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId">OwningAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration">ResourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput">AllowExternalPrincipalsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput">PermissionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput">ResourceShareConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput">SourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals">AllowExternalPrincipals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns">PermissionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources">Sources</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `FeatureSet`<sup>Required</sup> <a name="FeatureSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.featureSet"></a>

```csharp
public string FeatureSet { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `OwningAccountId`<sup>Required</sup> <a name="OwningAccountId" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.owningAccountId"></a>

```csharp
public string OwningAccountId { get; }
```

- *Type:* string

---

##### `ResourceShareConfiguration`<sup>Required</sup> <a name="ResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfiguration"></a>

```csharp
public RamResourceShareResourceShareConfigurationOutputReference ResourceShareConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference">RamResourceShareResourceShareConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tags"></a>

```csharp
public RamResourceShareTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList">RamResourceShareTagsList</a>

---

##### `AllowExternalPrincipalsInput`<sup>Optional</sup> <a name="AllowExternalPrincipalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipalsInput"></a>

```csharp
public bool|IResolvable AllowExternalPrincipalsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionArnsInput`<sup>Optional</sup> <a name="PermissionArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArnsInput"></a>

```csharp
public string[] PermissionArnsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArnsInput"></a>

```csharp
public string[] ResourceArnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceShareConfigurationInput`<sup>Optional</sup> <a name="ResourceShareConfigurationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceShareConfigurationInput"></a>

```csharp
public IResolvable|RamResourceShareResourceShareConfiguration ResourceShareConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sourcesInput"></a>

```csharp
public string[] SourcesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tagsInput"></a>

```csharp
public IResolvable|RamResourceShareTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---

##### `AllowExternalPrincipals`<sup>Required</sup> <a name="AllowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.allowExternalPrincipals"></a>

```csharp
public bool|IResolvable AllowExternalPrincipals { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PermissionArns`<sup>Required</sup> <a name="PermissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.permissionArns"></a>

```csharp
public string[] PermissionArns { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.sources"></a>

```csharp
public string[] Sources { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareConfig <a name="RamResourceShareConfig" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable AllowExternalPrincipals = null,
    string[] PermissionArns = null,
    string[] Principals = null,
    string[] ResourceArns = null,
    RamResourceShareResourceShareConfiguration ResourceShareConfiguration = null,
    string[] Sources = null,
    IResolvable|RamResourceShareTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals">AllowExternalPrincipals</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns">PermissionArns</a></code> | <code>string[]</code> | Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals">Principals</a></code> | <code>string[]</code> | Specifies the principals to associate with the resource share. The possible values are:. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | Specifies a list of one or more ARNs of the resources to associate with the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration">ResourceShareConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | Specifies the configuration for the resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources">Sources</a></code> | <code>string[]</code> | Specifies from which source accounts the service principal has access to the resources in this resource share. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | Specifies one or more tags to attach to the resource share itself. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#name RamResourceShare#name}

---

##### `AllowExternalPrincipals`<sup>Optional</sup> <a name="AllowExternalPrincipals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.allowExternalPrincipals"></a>

```csharp
public bool|IResolvable AllowExternalPrincipals { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.

A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}

---

##### `PermissionArns`<sup>Optional</sup> <a name="PermissionArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.permissionArns"></a>

```csharp
public string[] PermissionArns { get; set; }
```

- *Type:* string[]

Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Specifies the principals to associate with the resource share. The possible values are:.

* An AWS account ID
* An Amazon Resource Name (ARN) of an organization in AWS Organizations
* An ARN of an organizational unit (OU) in AWS Organizations
* An ARN of an IAM role
* An ARN of an IAM user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#principals RamResourceShare#principals}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; set; }
```

- *Type:* string[]

Specifies a list of one or more ARNs of the resources to associate with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#resource_arns RamResourceShare#resource_arns}

---

##### `ResourceShareConfiguration`<sup>Optional</sup> <a name="ResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.resourceShareConfiguration"></a>

```csharp
public RamResourceShareResourceShareConfiguration ResourceShareConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

Specifies the configuration for the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#resource_share_configuration RamResourceShare#resource_share_configuration}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.sources"></a>

```csharp
public string[] Sources { get; set; }
```

- *Type:* string[]

Specifies from which source accounts the service principal has access to the resources in this resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#sources RamResourceShare#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareConfig.property.tags"></a>

```csharp
public IResolvable|RamResourceShareTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

Specifies one or more tags to attach to the resource share itself.

It doesn't attach the tags to the resources associated with the resource share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}

---

### RamResourceShareResourceShareConfiguration <a name="RamResourceShareResourceShareConfiguration" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareResourceShareConfiguration {
    bool|IResolvable ExclusiveAccountAccess = null,
    bool|IResolvable RetainSharingOnAccountLeaveOrganization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess">ExclusiveAccountAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The resource share restricts access to an account. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization">RetainSharingOnAccountLeaveOrganization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the consumer account retains access to the resource share after leaving the organization. |

---

##### `ExclusiveAccountAccess`<sup>Optional</sup> <a name="ExclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.exclusiveAccountAccess"></a>

```csharp
public bool|IResolvable ExclusiveAccountAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The resource share restricts access to an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#exclusive_account_access RamResourceShare#exclusive_account_access}

---

##### `RetainSharingOnAccountLeaveOrganization`<sup>Optional</sup> <a name="RetainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration.property.retainSharingOnAccountLeaveOrganization"></a>

```csharp
public bool|IResolvable RetainSharingOnAccountLeaveOrganization { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the consumer account retains access to the resource share after leaving the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization RamResourceShare#retain_sharing_on_account_leave_organization}

---

### RamResourceShareTags <a name="RamResourceShareTags" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#key RamResourceShare#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ram_resource_share#value RamResourceShare#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RamResourceShareResourceShareConfigurationOutputReference <a name="RamResourceShareResourceShareConfigurationOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareResourceShareConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess">ResetExclusiveAccountAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization">ResetRetainSharingOnAccountLeaveOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusiveAccountAccess` <a name="ResetExclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetExclusiveAccountAccess"></a>

```csharp
private void ResetExclusiveAccountAccess()
```

##### `ResetRetainSharingOnAccountLeaveOrganization` <a name="ResetRetainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.resetRetainSharingOnAccountLeaveOrganization"></a>

```csharp
private void ResetRetainSharingOnAccountLeaveOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput">ExclusiveAccountAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput">RetainSharingOnAccountLeaveOrganizationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess">ExclusiveAccountAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization">RetainSharingOnAccountLeaveOrganization</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusiveAccountAccessInput`<sup>Optional</sup> <a name="ExclusiveAccountAccessInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccessInput"></a>

```csharp
public bool|IResolvable ExclusiveAccountAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetainSharingOnAccountLeaveOrganizationInput`<sup>Optional</sup> <a name="RetainSharingOnAccountLeaveOrganizationInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganizationInput"></a>

```csharp
public bool|IResolvable RetainSharingOnAccountLeaveOrganizationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExclusiveAccountAccess`<sup>Required</sup> <a name="ExclusiveAccountAccess" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.exclusiveAccountAccess"></a>

```csharp
public bool|IResolvable ExclusiveAccountAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetainSharingOnAccountLeaveOrganization`<sup>Required</sup> <a name="RetainSharingOnAccountLeaveOrganization" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.retainSharingOnAccountLeaveOrganization"></a>

```csharp
public bool|IResolvable RetainSharingOnAccountLeaveOrganization { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RamResourceShareResourceShareConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareResourceShareConfiguration">RamResourceShareResourceShareConfiguration</a>

---


### RamResourceShareTagsList <a name="RamResourceShareTagsList" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get"></a>

```csharp
private RamResourceShareTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsList.property.internalValue"></a>

```csharp
public IResolvable|RamResourceShareTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>[]

---


### RamResourceShareTagsOutputReference <a name="RamResourceShareTagsOutputReference" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RamResourceShareTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ramResourceShare.RamResourceShareTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RamResourceShareTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ramResourceShare.RamResourceShareTags">RamResourceShareTags</a>

---



