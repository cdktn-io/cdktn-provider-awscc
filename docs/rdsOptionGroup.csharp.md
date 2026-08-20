# `rdsOptionGroup` Submodule <a name="`rdsOptionGroup` Submodule" id="@cdktn/provider-awscc.rdsOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsOptionGroup <a name="RdsOptionGroup" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group awscc_rds_option_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroup(Construct Scope, string Id, RdsOptionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig">RdsOptionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig">RdsOptionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations">PutOptionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations">ResetOptionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName">ResetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptionConfigurations` <a name="PutOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations"></a>

```csharp
private void PutOptionConfigurations(IResolvable|RdsOptionGroupOptionConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|RdsOptionGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]

---

##### `ResetOptionConfigurations` <a name="ResetOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations"></a>

```csharp
private void ResetOptionConfigurations()
```

##### `ResetOptionGroupName` <a name="ResetOptionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName"></a>

```csharp
private void ResetOptionGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsOptionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsOptionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsOptionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsOptionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsOptionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsOptionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsOptionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations">OptionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput">EngineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput">MajorEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput">OptionConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput">OptionGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput">OptionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription">OptionGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OptionConfigurations`<sup>Required</sup> <a name="OptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations"></a>

```csharp
public RdsOptionGroupOptionConfigurationsList OptionConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags"></a>

```csharp
public RdsOptionGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a>

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput"></a>

```csharp
public string EngineNameInput { get; }
```

- *Type:* string

---

##### `MajorEngineVersionInput`<sup>Optional</sup> <a name="MajorEngineVersionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput"></a>

```csharp
public string MajorEngineVersionInput { get; }
```

- *Type:* string

---

##### `OptionConfigurationsInput`<sup>Optional</sup> <a name="OptionConfigurationsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurations[] OptionConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]

---

##### `OptionGroupDescriptionInput`<sup>Optional</sup> <a name="OptionGroupDescriptionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput"></a>

```csharp
public string OptionGroupDescriptionInput { get; }
```

- *Type:* string

---

##### `OptionGroupNameInput`<sup>Optional</sup> <a name="OptionGroupNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput"></a>

```csharp
public string OptionGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput"></a>

```csharp
public IResolvable|RdsOptionGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `OptionGroupDescription`<sup>Required</sup> <a name="OptionGroupDescription" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription"></a>

```csharp
public string OptionGroupDescription { get; }
```

- *Type:* string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsOptionGroupConfig <a name="RdsOptionGroupConfig" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EngineName,
    string MajorEngineVersion,
    string OptionGroupDescription,
    IResolvable|RdsOptionGroupOptionConfigurations[] OptionConfigurations = null,
    string OptionGroupName = null,
    IResolvable|RdsOptionGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName">EngineName</a></code> | <code>string</code> | Specifies the name of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | Specifies the major version of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription">OptionGroupDescription</a></code> | <code>string</code> | The description of the option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations">OptionConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]</code> | A list of all available options for an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | The name of the option group to be created. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]</code> | Tags to assign to the option group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName"></a>

```csharp
public string EngineName { get; set; }
```

- *Type:* string

Specifies the name of the engine that this option group should be associated with.

Valid Values:

* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; set; }
```

- *Type:* string

Specifies the major version of the engine that this option group should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}

---

##### `OptionGroupDescription`<sup>Required</sup> <a name="OptionGroupDescription" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription"></a>

```csharp
public string OptionGroupDescription { get; set; }
```

- *Type:* string

The description of the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}

---

##### `OptionConfigurations`<sup>Optional</sup> <a name="OptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurations[] OptionConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]

A list of all available options for an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}

---

##### `OptionGroupName`<sup>Optional</sup> <a name="OptionGroupName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; set; }
```

- *Type:* string

The name of the option group to be created.

Constraints:

* Must be 1 to 255 letters, numbers, or hyphens
* First character must be a letter
* Can't end with a hyphen or contain two consecutive hyphens

Example: `myoptiongroup`
If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags"></a>

```csharp
public IResolvable|RdsOptionGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]

Tags to assign to the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}

---

### RdsOptionGroupOptionConfigurations <a name="RdsOptionGroupOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurations {
    string[] DbSecurityGroupMemberships = null,
    string OptionName = null,
    IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings[] OptionSettings = null,
    string OptionVersion = null,
    double Port = null,
    string[] VpcSecurityGroupMemberships = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships">DbSecurityGroupMemberships</a></code> | <code>string[]</code> | A list of DB security groups used for this option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName">OptionName</a></code> | <code>string</code> | The configuration of options to include in a group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings">OptionSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]</code> | The option settings to include in an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion">OptionVersion</a></code> | <code>string</code> | The version for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port">Port</a></code> | <code>double</code> | The optional port for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships">VpcSecurityGroupMemberships</a></code> | <code>string[]</code> | A list of VPC security group names used for this option. |

---

##### `DbSecurityGroupMemberships`<sup>Optional</sup> <a name="DbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships"></a>

```csharp
public string[] DbSecurityGroupMemberships { get; set; }
```

- *Type:* string[]

A list of DB security groups used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#db_security_group_memberships RdsOptionGroup#db_security_group_memberships}

---

##### `OptionName`<sup>Optional</sup> <a name="OptionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName"></a>

```csharp
public string OptionName { get; set; }
```

- *Type:* string

The configuration of options to include in a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_name RdsOptionGroup#option_name}

---

##### `OptionSettings`<sup>Optional</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings[] OptionSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]

The option settings to include in an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_settings RdsOptionGroup#option_settings}

---

##### `OptionVersion`<sup>Optional</sup> <a name="OptionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion"></a>

```csharp
public string OptionVersion { get; set; }
```

- *Type:* string

The version for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#option_version RdsOptionGroup#option_version}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The optional port for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#port RdsOptionGroup#port}

---

##### `VpcSecurityGroupMemberships`<sup>Optional</sup> <a name="VpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships"></a>

```csharp
public string[] VpcSecurityGroupMemberships { get; set; }
```

- *Type:* string[]

A list of VPC security group names used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#vpc_security_group_memberships RdsOptionGroup#vpc_security_group_memberships}

---

### RdsOptionGroupOptionConfigurationsOptionSettings <a name="RdsOptionGroupOptionConfigurationsOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurationsOptionSettings {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name">Name</a></code> | <code>string</code> | The name of the option that has settings that you can set. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value">Value</a></code> | <code>string</code> | The current value of the option setting. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the option that has settings that you can set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#name RdsOptionGroup#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The current value of the option setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

### RdsOptionGroupTags <a name="RdsOptionGroupTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key">Key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value">Value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#key RdsOptionGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsOptionGroupOptionConfigurationsList <a name="RdsOptionGroupOptionConfigurationsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get"></a>

```csharp
private RdsOptionGroupOptionConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>[]

---


### RdsOptionGroupOptionConfigurationsOptionSettingsList <a name="RdsOptionGroupOptionConfigurationsOptionSettingsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurationsOptionSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get"></a>

```csharp
private RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]

---


### RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference <a name="RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>

---


### RdsOptionGroupOptionConfigurationsOutputReference <a name="RdsOptionGroupOptionConfigurationsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupOptionConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings">PutOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships">ResetDbSecurityGroupMemberships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName">ResetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings">ResetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion">ResetOptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships">ResetVpcSecurityGroupMemberships</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptionSettings` <a name="PutOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings"></a>

```csharp
private void PutOptionSettings(IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]

---

##### `ResetDbSecurityGroupMemberships` <a name="ResetDbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships"></a>

```csharp
private void ResetDbSecurityGroupMemberships()
```

##### `ResetOptionName` <a name="ResetOptionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName"></a>

```csharp
private void ResetOptionName()
```

##### `ResetOptionSettings` <a name="ResetOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings"></a>

```csharp
private void ResetOptionSettings()
```

##### `ResetOptionVersion` <a name="ResetOptionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion"></a>

```csharp
private void ResetOptionVersion()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetVpcSecurityGroupMemberships` <a name="ResetVpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships"></a>

```csharp
private void ResetVpcSecurityGroupMemberships()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput">DbSecurityGroupMembershipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput">OptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput">OptionSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput">OptionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput">VpcSecurityGroupMembershipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships">DbSecurityGroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName">OptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion">OptionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships">VpcSecurityGroupMemberships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings"></a>

```csharp
public RdsOptionGroupOptionConfigurationsOptionSettingsList OptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a>

---

##### `DbSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="DbSecurityGroupMembershipsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```csharp
public string[] DbSecurityGroupMembershipsInput { get; }
```

- *Type:* string[]

---

##### `OptionNameInput`<sup>Optional</sup> <a name="OptionNameInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput"></a>

```csharp
public string OptionNameInput { get; }
```

- *Type:* string

---

##### `OptionSettingsInput`<sup>Optional</sup> <a name="OptionSettingsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurationsOptionSettings[] OptionSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>[]

---

##### `OptionVersionInput`<sup>Optional</sup> <a name="OptionVersionInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput"></a>

```csharp
public string OptionVersionInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VpcSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="VpcSecurityGroupMembershipsInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```csharp
public string[] VpcSecurityGroupMembershipsInput { get; }
```

- *Type:* string[]

---

##### `DbSecurityGroupMemberships`<sup>Required</sup> <a name="DbSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships"></a>

```csharp
public string[] DbSecurityGroupMemberships { get; }
```

- *Type:* string[]

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName"></a>

```csharp
public string OptionName { get; }
```

- *Type:* string

---

##### `OptionVersion`<sup>Required</sup> <a name="OptionVersion" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion"></a>

```csharp
public string OptionVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VpcSecurityGroupMemberships`<sup>Required</sup> <a name="VpcSecurityGroupMemberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships"></a>

```csharp
public string[] VpcSecurityGroupMemberships { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupOptionConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>

---


### RdsOptionGroupTagsList <a name="RdsOptionGroupTagsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get"></a>

```csharp
private RdsOptionGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>[]

---


### RdsOptionGroupTagsOutputReference <a name="RdsOptionGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsOptionGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsOptionGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>

---



