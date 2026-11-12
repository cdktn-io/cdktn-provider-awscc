# `directconnectResiliencyGroup` Submodule <a name="`directconnectResiliencyGroup` Submodule" id="@cdktn/provider-awscc.directconnectResiliencyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectResiliencyGroup <a name="DirectconnectResiliencyGroup" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group awscc_directconnect_resiliency_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectResiliencyGroup(Construct Scope, string Id, DirectconnectResiliencyGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns">ResetConnectionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel">ResetIntendedResiliencyModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectconnectResiliencyGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---

##### `ResetConnectionArns` <a name="ResetConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns"></a>

```csharp
private void ResetConnectionArns()
```

##### `ResetIntendedResiliencyModel` <a name="ResetIntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel"></a>

```csharp
private void ResetIntendedResiliencyModel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectResiliencyGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectResiliencyGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectResiliencyGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectResiliencyGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectResiliencyGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectResiliencyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectResiliencyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn">ResiliencyGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId">ResiliencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput">ConnectionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput">IntendedResiliencyModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput">ResiliencyGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns">ConnectionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel">IntendedResiliencyModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName">ResiliencyGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResiliencyGroupArn`<sup>Required</sup> <a name="ResiliencyGroupArn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn"></a>

```csharp
public string ResiliencyGroupArn { get; }
```

- *Type:* string

---

##### `ResiliencyGroupId`<sup>Required</sup> <a name="ResiliencyGroupId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId"></a>

```csharp
public string ResiliencyGroupId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags"></a>

```csharp
public DirectconnectResiliencyGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a>

---

##### `ConnectionArnsInput`<sup>Optional</sup> <a name="ConnectionArnsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput"></a>

```csharp
public string[] ConnectionArnsInput { get; }
```

- *Type:* string[]

---

##### `IntendedResiliencyModelInput`<sup>Optional</sup> <a name="IntendedResiliencyModelInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput"></a>

```csharp
public string IntendedResiliencyModelInput { get; }
```

- *Type:* string

---

##### `ResiliencyGroupNameInput`<sup>Optional</sup> <a name="ResiliencyGroupNameInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput"></a>

```csharp
public string ResiliencyGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput"></a>

```csharp
public IResolvable|DirectconnectResiliencyGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---

##### `ConnectionArns`<sup>Required</sup> <a name="ConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns"></a>

```csharp
public string[] ConnectionArns { get; }
```

- *Type:* string[]

---

##### `IntendedResiliencyModel`<sup>Required</sup> <a name="IntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel"></a>

```csharp
public string IntendedResiliencyModel { get; }
```

- *Type:* string

---

##### `ResiliencyGroupName`<sup>Required</sup> <a name="ResiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName"></a>

```csharp
public string ResiliencyGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectResiliencyGroupConfig <a name="DirectconnectResiliencyGroupConfig" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectResiliencyGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResiliencyGroupName,
    string[] ConnectionArns = null,
    string IntendedResiliencyModel = null,
    IResolvable|DirectconnectResiliencyGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName">ResiliencyGroupName</a></code> | <code>string</code> | The name of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns">ConnectionArns</a></code> | <code>string[]</code> | The ARNs of the connections that are members of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel">IntendedResiliencyModel</a></code> | <code>string</code> | The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | The tags associated with the resiliency group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResiliencyGroupName`<sup>Required</sup> <a name="ResiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName"></a>

```csharp
public string ResiliencyGroupName { get; set; }
```

- *Type:* string

The name of the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#resiliency_group_name DirectconnectResiliencyGroup#resiliency_group_name}

---

##### `ConnectionArns`<sup>Optional</sup> <a name="ConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns"></a>

```csharp
public string[] ConnectionArns { get; set; }
```

- *Type:* string[]

The ARNs of the connections that are members of the resiliency group.

When specified, this is the complete, authoritative membership list: on update, connections not present are disassociated, and an explicit empty list removes all members. Omit the property to leave the existing membership unmanaged (unchanged on update). On create, an omitted or empty list means no connections are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#connection_arns DirectconnectResiliencyGroup#connection_arns}

---

##### `IntendedResiliencyModel`<sup>Optional</sup> <a name="IntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel"></a>

```csharp
public string IntendedResiliencyModel { get; set; }
```

- *Type:* string

The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#intended_resiliency_model DirectconnectResiliencyGroup#intended_resiliency_model}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags"></a>

```csharp
public IResolvable|DirectconnectResiliencyGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

The tags associated with the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#tags DirectconnectResiliencyGroup#tags}

---

### DirectconnectResiliencyGroupTags <a name="DirectconnectResiliencyGroupTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectResiliencyGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#key DirectconnectResiliencyGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#value DirectconnectResiliencyGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectResiliencyGroupTagsList <a name="DirectconnectResiliencyGroupTagsList" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectResiliencyGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get"></a>

```csharp
private DirectconnectResiliencyGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectResiliencyGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---


### DirectconnectResiliencyGroupTagsOutputReference <a name="DirectconnectResiliencyGroupTagsOutputReference" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectResiliencyGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectResiliencyGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>

---



