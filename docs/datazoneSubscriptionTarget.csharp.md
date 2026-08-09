# `datazoneSubscriptionTarget` Submodule <a name="`datazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.datazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneSubscriptionTarget <a name="DatazoneSubscriptionTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneSubscriptionTarget(Construct Scope, string Id, DatazoneSubscriptionTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig">PutSubscriptionTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole">ResetManageAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName">ResetProviderName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubscriptionTargetConfig` <a name="PutSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig"></a>

```csharp
private void PutSubscriptionTargetConfig(IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---

##### `ResetManageAccessRole` <a name="ResetManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole"></a>

```csharp
private void ResetManageAccessRole()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName"></a>

```csharp
private void ResetProviderName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneSubscriptionTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneSubscriptionTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneSubscriptionTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneSubscriptionTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneSubscriptionTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig">SubscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId">SubscriptionTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput">ApplicableAssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput">AuthorizedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput">ManageAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput">SubscriptionTargetConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes">ApplicableAssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals">AuthorizedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole">ManageAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `SubscriptionTargetConfig`<sup>Required</sup> <a name="SubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```csharp
public DatazoneSubscriptionTargetSubscriptionTargetConfigList SubscriptionTargetConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `SubscriptionTargetId`<sup>Required</sup> <a name="SubscriptionTargetId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```csharp
public string SubscriptionTargetId { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `ApplicableAssetTypesInput`<sup>Optional</sup> <a name="ApplicableAssetTypesInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput"></a>

```csharp
public string[] ApplicableAssetTypesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizedPrincipalsInput`<sup>Optional</sup> <a name="AuthorizedPrincipalsInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput"></a>

```csharp
public string[] AuthorizedPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `ManageAccessRoleInput`<sup>Optional</sup> <a name="ManageAccessRoleInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput"></a>

```csharp
public string ManageAccessRoleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `SubscriptionTargetConfigInput`<sup>Optional</sup> <a name="SubscriptionTargetConfigInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput"></a>

```csharp
public IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig[] SubscriptionTargetConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApplicableAssetTypes`<sup>Required</sup> <a name="ApplicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```csharp
public string[] ApplicableAssetTypes { get; }
```

- *Type:* string[]

---

##### `AuthorizedPrincipals`<sup>Required</sup> <a name="AuthorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```csharp
public string[] AuthorizedPrincipals { get; }
```

- *Type:* string[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `ManageAccessRole`<sup>Required</sup> <a name="ManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole"></a>

```csharp
public string ManageAccessRole { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneSubscriptionTargetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ApplicableAssetTypes,
    string[] AuthorizedPrincipals,
    string DomainIdentifier,
    string EnvironmentIdentifier,
    string Name,
    IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig[] SubscriptionTargetConfig,
    string Type,
    string ManageAccessRole = null,
    string ProviderName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes">ApplicableAssetTypes</a></code> | <code>string[]</code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals">AuthorizedPrincipals</a></code> | <code>string[]</code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name">Name</a></code> | <code>string</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig">SubscriptionTargetConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type">Type</a></code> | <code>string</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole">ManageAccessRole</a></code> | <code>string</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName">ProviderName</a></code> | <code>string</code> | The provider of the subscription target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicableAssetTypes`<sup>Required</sup> <a name="ApplicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes"></a>

```csharp
public string[] ApplicableAssetTypes { get; set; }
```

- *Type:* string[]

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `AuthorizedPrincipals`<sup>Required</sup> <a name="AuthorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals"></a>

```csharp
public string[] AuthorizedPrincipals { get; set; }
```

- *Type:* string[]

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `SubscriptionTargetConfig`<sup>Required</sup> <a name="SubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig"></a>

```csharp
public IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig[] SubscriptionTargetConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `ManageAccessRole`<sup>Optional</sup> <a name="ManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole"></a>

```csharp
public string ManageAccessRole { get; set; }
```

- *Type:* string

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

### DatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneSubscriptionTargetSubscriptionTargetConfig {
    string Content,
    string FormName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content">Content</a></code> | <code>string</code> | The content of the subscription target configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName">FormName</a></code> | <code>string</code> | The form name included in the subscription target configuration. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#content DatazoneSubscriptionTarget#content}

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName"></a>

```csharp
public string FormName { get; set; }
```

- *Type:* string

The form name included in the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_subscription_target#form_name DatazoneSubscriptionTarget#form_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneSubscriptionTargetSubscriptionTargetConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```csharp
private DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---


### DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput">FormNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">FormName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FormNameInput`<sup>Optional</sup> <a name="FormNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput"></a>

```csharp
public string FormNameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```csharp
public string FormName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneSubscriptionTargetSubscriptionTargetConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



